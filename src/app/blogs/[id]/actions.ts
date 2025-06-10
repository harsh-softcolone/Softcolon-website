'use server';

import { getSingleHashnodePost } from '@/lib/hashnode';
import { cache } from 'react';

// Server-side cached function to fetch blog post
export const getServerSideBlogPost = cache(async (slug: string) => {
  try {
    const postData = await getSingleHashnodePost(slug);
    return postData;
  } catch (error) {
    console.error('Server-side error fetching blog post:', error);
    throw error;
  }
});
