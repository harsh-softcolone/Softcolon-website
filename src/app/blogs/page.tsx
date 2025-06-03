'use client';
import { HashnodePost } from '@/interface';
import { useEffect, useRef, useState } from 'react';
import BlogsSection from '@/components/pages/general/blogs-section';
import { getHashnodePosts } from '@/lib/hashnode';
import Loader from '@/components/shared/loaders';

export default function BlogsInfinitePage() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial load
    loadMore();
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
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
    // eslint-disable-next-line
  }, [loaderRef.current, hasNextPage, loading]);

  async function loadMore() {
    setLoading(true);
    const res = await getHashnodePosts(endCursor || undefined);
    setPosts((prevPosts) => [...prevPosts, ...res.posts]);
    setHasNextPage(res.pageInfo.hasNextPage);
    setEndCursor(res.pageInfo.endCursor);
    setLoading(false);
  }

  return (
    <div className='relative overflow-x-hidden'>
      <BlogsSection sectionClassName='py-28' blogsArray={posts} />
      {hasNextPage && (
        <div ref={loaderRef}>
          <Loader />
        </div>
      )}
    </div>
  );
}
