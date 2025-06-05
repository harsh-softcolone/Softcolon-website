import { NextRequest, NextResponse } from 'next/server';
import { getHashnodePosts } from '@/lib/hashnode';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const after = searchParams.get('after');

    // Call the hashnode API on server side
    const result = await getHashnodePosts(after || undefined);

    return NextResponse.json({
      success: true,
      posts: result.posts,
      pageInfo: result.pageInfo,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        posts: [],
        pageInfo: { hasNextPage: false, endCursor: null },
      },
      { status: 500 },
    );
  }
}
