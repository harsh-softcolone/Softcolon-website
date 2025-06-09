'use server';

import { getHashnodePosts } from '@/lib/hashnode';

export async function loadMorePosts(after?: string) {
  try {
    const { posts, pageInfo } = await getHashnodePosts(after);
    return {
      success: true,
      posts,
      pageInfo,
    };
  } catch (error) {
    console.error('Error loading more posts:', error);
    return {
      success: false,
      posts: [],
      pageInfo: { hasNextPage: false, endCursor: null },
    };
  }
}
