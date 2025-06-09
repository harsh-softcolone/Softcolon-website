'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HashnodePost } from '@/interface';

interface BlogListResponse {
  success: boolean;
  posts: HashnodePost[];
  pageInfo?: {
    hasNextPage: boolean;
    endCursor: string;
  };
}

export default function SitemapPage() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPosts = async () => {
    let allPosts: HashnodePost[] = [];
    let after: string | undefined = undefined;

    try {
      while (true) {
        const url: string = after
          ? `/api/blog-list?after=${encodeURIComponent(after)}`
          : '/api/blog-list';

        const res: Response = await fetch(url);
        const data: BlogListResponse = await res.json();

        if (!data.success) break;

        allPosts = [...allPosts, ...data.posts];
        if (!data.pageInfo?.hasNextPage) break;
        after = data.pageInfo.endCursor;
      }

      setPosts(allPosts);
    } catch (error) {
      console.error('Error fetching sitemap data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <main className='max-w-3xl mx-auto py-12 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Sitemap</h1>

      {loading ? (
        <p>Loading blog links...</p>
      ) : (
        <ul className='space-y-3'>
          <li>
            <Link href='/' className='text-blue-500 hover:underline'>
              Home
            </Link>
          </li>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className='text-blue-500 hover:underline'
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
