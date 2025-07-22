import { NextRequest, NextResponse } from 'next/server';
import { getSingleHashnodePost } from '@/lib/hashnode';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';
import { randomUUID } from 'crypto';
import { ingestRateLimiter } from '@/lib/rate-limiter';

const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY;
const COLLECTION_NAME = process.env.COLLECTION_NAME;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const INGEST_API_KEY = process.env.INGEST_API_KEY; // Add this to your .env

// Security middleware function
function validateApiKey(request: NextRequest): boolean {
  const apiKey =
    request.headers.get('x-api-key') ||
    request.headers.get('authorization')?.replace('Bearer ', '');

  if (!INGEST_API_KEY) {
    console.error('INGEST_API_KEY not configured');
    return false;
  }

  return apiKey === INGEST_API_KEY;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Check API key first
    if (!validateApiKey(request)) {
      console.warn(
        'Unauthorized ingest attempt from IP:',
        request.headers.get('x-forwarded-for'),
      );
      return NextResponse.json(
        { error: 'Unauthorized. Valid API key required.' },
        { status: 401 },
      );
    }

    // Check if required environment variables are configured
    if (!QDRANT_URL || !QDRANT_API_KEY || !COLLECTION_NAME || !OPENAI_API_KEY) {
      console.error('Required environment variables are not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 },
      );
    }

    // Get client IP and user agent for rate limiting
    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || undefined;

    // Check rate limit
    const rateLimitResult = await ingestRateLimiter.checkLimit(
      clientIP,
      userAgent,
    );

    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);

      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message:
            rateLimitResult.message ||
            'You have exceeded the request limit. Your IP address has been temporarily blocked for 24 hours.',
          resetTime: rateLimitResult.resetTime,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime?.toString() || '',
            'Retry-After': '60', // 60 seconds (1 minute)
          },
        },
      );
    }

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

    return NextResponse.json(
      {
        success: true,
        message: `Blog "${blog.title}" ingested successfully`,
        chunks: chunks.length,
      },
      {
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('Blog ingestion error:', error);
    return NextResponse.json(
      { error: 'Failed to ingest blog' },
      { status: 500 },
    );
  }
}

// GET endpoint to check rate limit status
export async function GET(request: NextRequest) {
  try {
    // Optional: Protect GET endpoint too
    if (!validateApiKey(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || undefined;

    const status = await ingestRateLimiter.getStatus(clientIP, userAgent);

    return NextResponse.json({
      requestCount: status.requestCount,
      remaining: status.remaining,
      blocked: status.blocked,
      resetTime: status.resetTime,
      limit: 10,
      timeWindow: '1 minute',
    });
  } catch (error) {
    console.error('Rate limit status error:', error);
    return NextResponse.json(
      { error: 'Failed to get rate limit status' },
      { status: 500 },
    );
  }
}

// DELETE endpoint to remove blog data by slug
export async function DELETE(request: NextRequest) {
  try {
    // 1. Check API key first
    if (!validateApiKey(request)) {
      console.warn(
        'Unauthorized delete attempt from IP:',
        request.headers.get('x-forwarded-for'),
      );
      return NextResponse.json(
        { error: 'Unauthorized. Valid API key required.' },
        { status: 401 },
      );
    }

    // Check if required environment variables are configured
    if (!QDRANT_URL || !QDRANT_API_KEY || !COLLECTION_NAME || !OPENAI_API_KEY) {
      console.error('Required environment variables are not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 },
      );
    }

    // Get client IP and user agent for rate limiting
    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || undefined;

    // Check rate limit
    const rateLimitResult = await ingestRateLimiter.checkLimit(
      clientIP,
      userAgent,
    );

    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);

      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message:
            rateLimitResult.message ||
            'You have exceeded the request limit. Please wait before making another request.',
          resetTime: rateLimitResult.resetTime,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime?.toString() || '',
            'Retry-After': '60',
          },
        },
      );
    }

    const { title } = await request.json();

    if (!title) {
      return NextResponse.json(
        { error: 'Blog title is required' },
        { status: 400 },
      );
    }

    // Initialize Qdrant client
    const client = new QdrantClient({
      url: QDRANT_URL,
      apiKey: QDRANT_API_KEY,
    });

    // Check if collection exists
    const collections = await client.getCollections();
    const exists = collections.collections.some(
      (col: { name: string }) => col.name === COLLECTION_NAME,
    );

    if (!exists) {
      return NextResponse.json(
        { error: 'Collection not found' },
        { status: 404 },
      );
    }

    console.log(`Attempting to delete blog with slug: ${title}`);

    // Use the correct Qdrant filter syntax
    const deleteResult = await client.delete(COLLECTION_NAME, {
      filter: {
        must: [
          {
            key: 'title',
            match: {
              text: title,
            },
          },
        ],
      },
    });

    console.log(`Delete operation result:`, deleteResult);

    return NextResponse.json(
      {
        success: true,
        message: `Blog "${title}" deletion initiated successfully`,
        operationId: deleteResult.operation_id,
        status: deleteResult.status,
      },
      {
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('Blog deletion error:', error);

    // More detailed error logging

    return NextResponse.json(
      {
        error: 'Failed to delete blog data',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
