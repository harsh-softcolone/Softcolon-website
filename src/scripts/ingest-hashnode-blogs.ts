import 'dotenv/config';
import { getHashnodePosts, getSingleHashnodePost } from '../lib/hashnode';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';
import { randomUUID } from 'crypto';

const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY;
const COLLECTION_NAME = 'blog-rag';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function ingestAllBlogs() {
  const client = new QdrantClient({ url: QDRANT_URL, apiKey: QDRANT_API_KEY });
  const embedder = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  // Get embedding dimension from OpenAIEmbeddings
  const embeddingDimension = embedder.dimensions || 1536; // fallback to 1536 for OpenAI

  // Check if collection exists, create if not
  const collections = await client.getCollections();
  const exists = collections.collections.some(
    (col: { name: string }) => col.name === COLLECTION_NAME,
  );

  if (!exists) {
    // Create collection
    await client.createCollection(COLLECTION_NAME, {
      vectors: {
        size: embeddingDimension,
        distance: 'Cosine',
      },
    });

    // Create payload indexes for filtering
    await client.createPayloadIndex(COLLECTION_NAME, {
      field_name: 'slug',
      field_schema: 'keyword',
    });

    await client.createPayloadIndex(COLLECTION_NAME, {
      field_name: 'blogId',
      field_schema: 'keyword',
    });

    await client.createPayloadIndex(COLLECTION_NAME, {
      field_name: 'title',
      field_schema: 'text',
    });

    await client.createPayloadIndex(COLLECTION_NAME, {
      field_name: 'publishedAt',
      field_schema: 'keyword',
    });

    console.log(`Created Qdrant collection: ${COLLECTION_NAME} with indexes`);
  } else {
    console.log(`Qdrant collection '${COLLECTION_NAME}' already exists.`);
  }

  let after: string | undefined = undefined;
  let hasNextPage = true;
  let totalChunks = 0;

  while (hasNextPage) {
    const { posts, pageInfo } = await getHashnodePosts(after);
    for (const post of posts) {
      const slug = post.slug;
      const postData = await getSingleHashnodePost(slug);
      const blog = postData.publication.post;
      if (!blog?.content?.markdown) continue;
      const chunks = await splitter.splitText(blog.content.markdown);
      const vectors = await Promise.all(
        chunks.map(async (chunk) => await embedder.embedQuery(chunk)),
      );
      await client.upsert(COLLECTION_NAME, {
        points: chunks.map((chunk, idx) => ({
          id: randomUUID(),
          vector: vectors[idx],
          payload: {
            blogId: blog.slug,
            title: blog.title,
            slug: blog.slug,
            publishedAt: blog.publishedAt,
            chunkIndex: idx,
            text: chunk,
          },
        })),
      });
      totalChunks += chunks.length;
      console.log(`Ingested blog: ${blog.title} (${chunks.length} chunks)`);
    }
    hasNextPage = pageInfo.hasNextPage;
    after = pageInfo.endCursor;
  }
  console.log(`Total chunks ingested: ${totalChunks}`);
}

ingestAllBlogs().catch((err) => {
  console.error('Error ingesting blogs:', err);
  process.exit(1);
});
