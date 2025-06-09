'use client';

import { useState, useTransition } from 'react';
import { HashnodePost } from '@/interface';
import BlogsSection from '@/components/pages/general/blogs-section';
import { loadMorePosts } from '@/app/blogs/actions';

interface Props {
  initialPosts: HashnodePost[];
  initialHasNextPage: boolean;
  initialEndCursor: string | null;
}

export default function BlogsWithLoadMore({
  initialPosts,
  initialHasNextPage,
  initialEndCursor,
}: Props) {
  const [posts, setPosts] = useState<HashnodePost[]>(initialPosts);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [endCursor, setEndCursor] = useState(initialEndCursor);
  const [isPending, startTransition] = useTransition();

  const handleLoadMore = async () => {
    startTransition(async () => {
      const result = await loadMorePosts(endCursor || undefined);

      if (result.success) {
        setPosts((prevPosts) => [...prevPosts, ...result.posts]);
        setHasNextPage(result.pageInfo.hasNextPage);
        setEndCursor(result.pageInfo.endCursor);
      }
    });
  };

  return (
    <BlogsSection
      sectionClassName='pt-10'
      blogsArray={posts}
      hasNextPage={hasNextPage}
      loading={false}
      loadingMore={isPending}
      onLoadMore={handleLoadMore}
    />
  );
}
