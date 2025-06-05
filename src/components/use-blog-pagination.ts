'use client';
import { useState, useCallback } from 'react';
import { HashnodePost } from '@/interface';

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export function useBlogPagination(
  initialPosts: HashnodePost[],
  initialPageInfo: PageInfo,
) {
  const [posts, setPosts] = useState(initialPosts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (!pageInfo.hasNextPage || loading) return;

    setLoading(true);
    try {
      const url = pageInfo.endCursor
        ? `/api/blog-list?after=${encodeURIComponent(pageInfo.endCursor)}`
        : '/api/blog-list';

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setPosts((prev) => [...prev, ...data.posts]);
        setPageInfo(data.pageInfo);
      } else {
        console.error('Error loading blogs:', data.error);
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  }, [pageInfo.endCursor, pageInfo.hasNextPage, loading]);

  return {
    posts,
    pageInfo,
    loading,
    loadMore,
  };
}
