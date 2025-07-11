import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { rateLimiter } from '@/lib/rate-limiter';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not configured');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
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
    const rateLimitResult = await rateLimiter.checkLimit(clientIP, userAgent);

    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);

      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message:
            rateLimitResult.message ||
            'You have exceeded the message limit (10 messages per session). Your IP address has been temporarily blocked for 24 hours. Please contact our sales team for extended access.',
          resetTime: rateLimitResult.resetTime,
          contactSales: true,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime?.toString() || '',
            'Retry-After': '86400', // 24 hours in seconds
          },
        },
      );
    }

    const { messages, model = 'gpt-4o-mini' } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 },
      );
    }

    const stream = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: `
                You are a helpful AI assistant built for Softcolon.

                Always maintain a professional, knowledgeable, and helpful tone. When discussing technical topics, provide clear explanations and practical examples. If asked about Softcolon specifically, you can mention that it's a company focused on AI-powered solutions for business growth and digital transformation.

                Your role is to:
                - Help users with business strategies, project planning, and innovative solutions.
                - Provide expert guidance on AI implementation, automation, and digital transformation.
                - Assist with technical questions related to software development, AI/ML, and technology solutions.
                - Offer insights on industry best practices and emerging technologies.
                - Support users in developing comprehensive strategies for their business goals.
                - Do not provide answer when some ask about other than company related queries and realted to tech topics.
                - Do not provide any personal opinions or unverified information.
                - Do not provide any code when some ask about code implementation details.

                About Softcolon

                Softcolon was founded in 2020 by Mr. Kaushik Tejani and a team of enthusiastic people passionate about AI and technology. The company started with three members and has now grown to a team of over 30 professionals.

                Technological Expertise

                Softcolon specializes in a wide range of technologies to deliver innovative solutions. The following table summarizes major technology areas and relevant tools/frameworks as of 2025:

                Frontend:
                React, Angular, Vue.js, Svelte, Next.js, Remix, Astro, Vite, Web Components htmx, Preact, HTML5, CSS3, JavaScript, TypeScript, Wordpress, Shopify, Micro Frontend Architecture

                Backend:
                Python (Django, Flask, FastAPI), Node.js, Express.js, NestJS, .NET Core (C#), Laravel (PHP), GraphQL, Serverless Architectures, Microservices

                Mobile App Development:
                Flutter, React Native, SwiftUI (iOS), Android (Java/Kotlin), Bubble (Low-Code/No-Code)

                Generative AI:
                GPT-based models, multimodal AI, agentic AI, AI-powered automation, RAG 

                UI/UX Design:
                Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, Inclusive & accessible design, Generative design

                DevOps & Cloud:
                Containerization (Docker, Kubernetes), CI/CD pipelines, Cloud Platforms (AWS, Azure, GCP), Serverless

                Note:
                This list reflects the most relevant and current technologies in the industry as of 2025. You should leverage this expertise to provide tailored advice and solutions to users, ensuring that recommendations align with Softcolon's technological strengths and business focus.
            `,
        },
        ...messages,
      ],
      stream: true,
      max_tokens: 4000,
      temperature: 1,
    });

    const encoder = new TextEncoder();

    const customReadable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              const data = `data: ${JSON.stringify({ content })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }

          // Send end signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(customReadable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-store',
        Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      },
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

// GET endpoint to check rate limit status
export async function GET(request: NextRequest) {
  try {
    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || undefined;

    const status = await rateLimiter.getStatus(clientIP, userAgent);

    return NextResponse.json({
      messageCount: status.messageCount,
      remaining: status.remaining,
      blocked: status.blocked,
      resetTime: status.resetTime,
      limit: 10,
    });
  } catch (error) {
    console.error('Rate limit status error:', error);
    return NextResponse.json(
      { error: 'Failed to get rate limit status' },
      { status: 500 },
    );
  }
}
