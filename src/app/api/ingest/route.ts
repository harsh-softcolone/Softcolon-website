import { NextRequest, NextResponse } from 'next/server';
import { getSingleHashnodePost } from '@/lib/hashnode';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';
import { randomUUID } from 'crypto';

const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY;
const COLLECTION_NAME = 'blog-rag';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: 'Blog slug is required' },
        { status: 400 },
      );
    }

    // Initialize clients
    const client = new QdrantClient({
      url: QDRANT_URL,
      apiKey: QDRANT_API_KEY,
    });
    const embedder = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    // Fetch blog content
    const postData = await getSingleHashnodePost(slug);
    const blog = postData.publication.post;

    if (!blog?.content?.markdown) {
      return NextResponse.json(
        { error: 'Blog content not found' },
        { status: 404 },
      );
    }

    // Check if collection exists
    const collections = await client.getCollections();
    const exists = collections.collections.some(
      (col: { name: string }) => col.name === COLLECTION_NAME,
    );

    if (!exists) {
      await client.createCollection(COLLECTION_NAME, {
        vectors: {
          size: 1536, // OpenAI embedding dimension
          distance: 'Cosine',
        },
      });
    }

    // Process and store content
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

    return NextResponse.json({
      success: true,
      message: `Blog "${blog.title}" ingested successfully`,
      chunks: chunks.length,
    });
  } catch (error) {
    console.error('Blog ingestion error:', error);
    return NextResponse.json(
      { error: 'Failed to ingest blog' },
      { status: 500 },
    );
  }
}
