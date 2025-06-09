import { getHashnodePosts } from '@/lib/hashnode';
import { create } from 'xmlbuilder2';
import { NextResponse } from 'next/server';
import { HashnodePost } from '@/interface';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function GET() {
  let after: string | undefined = undefined;
  let allPosts: HashnodePost[] = [];

  while (true) {
    const { posts, pageInfo } = await getHashnodePosts(after);
    allPosts = [...allPosts, ...posts];

    if (!pageInfo.hasNextPage) break;
    after = pageInfo.endCursor;
  }

  const root = {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: [
        { loc: `${BASE_URL}/`, changefreq: 'weekly', priority: 1.0 },
        ...allPosts.map((post) => ({
          loc: `${BASE_URL}/blog/${post.slug}`,
          lastmod: new Date(post.publishedAt).toISOString(),
          changefreq: 'monthly',
          priority: 0.8,
        })),
      ],
    },
  };

  const xml = create(root).end();
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
