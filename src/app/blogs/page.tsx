'use client';
import { useEffect, useRef, useState } from 'react';
import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import Loader from '@/components/shared/loaders';
import { getHashnodePosts } from '@/lib/hashnode';
import { useBlogStore } from '@/store/blogStore';

export default function BlogsInfinitePage() {
  const loaderRef = useRef<HTMLDivElement>(null);
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
    // Initial load
    if (posts.length === 0) loadMore();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!hasNextPage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 },
    );
    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);
    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
    // eslint-disable-next-line
  }, [hasNextPage, loading]);

  async function loadMore() {
    setLoading(true);
    const res = await getHashnodePosts(endCursor || undefined);
    appendPosts(res.posts);
    setHasNextPage(res.pageInfo.hasNextPage);
    setEndCursor(res.pageInfo.endCursor);
    setLoading(false);
  }

  return (
    <div className='relative overflow-x-hidden pt-[64px]'>
      <BlogsSection sectionClassName='pt-10' blogsArray={posts} />
      {hasNextPage && (
        <div ref={loaderRef}>
          <Loader />
        </div>
      )}
      <GetInTouchSection />
    </div>
  );
}
