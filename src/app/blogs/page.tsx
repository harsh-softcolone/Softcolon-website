'use client';
import { useEffect, useState } from 'react';
import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import { useBlogStore } from '@/store/blogStore';

export default function BlogsInfinitePage() {
  const [loading, setLoading] = useState(false);

  const {
    posts,
    appendPosts,
    hasNextPage,
    setHasNextPage,
    endCursor,
    setEndCursor,
  } = useBlogStore();

  useEffect(() => {
    // Initial load of first 6 blogs
    if (posts.length === 0) {
      loadMore();
    }
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      // Call the server-side API route instead of direct hashnode call
      const url = endCursor
        ? `/api/blog-list?after=${encodeURIComponent(endCursor)}`
        : '/api/blog-list';

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        appendPosts(data.posts);
        setHasNextPage(data.pageInfo.hasNextPage);
        setEndCursor(data.pageInfo.endCursor);
      } else {
        console.error('Error loading blogs:', data.error);
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative overflow-x-hidden pt-[64px]'>
      <BlogsSection
        sectionClassName='pt-10'
        blogsArray={posts}
        hasNextPage={hasNextPage}
        loading={loading}
        onLoadMore={loadMore}
      />
      <GetInTouchSection />
    </div>
  );
}
