import BlogsWithLoadMore from '@/components/pages/blogs/blogs-with-load-more';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import { getHashnodePosts } from '@/lib/hashnode';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Technology Blog | Latest Insights & Trends | Softcolon',
  description:
    'Explore our comprehensive blog covering AI innovations, technology trends, business automation, and digital transformation insights. Stay updated with the latest in artificial intelligence and tech industry developments.',
};

export default async function BlogsPage() {
  // Fetch initial posts on server-side
  const { posts, pageInfo } = await getHashnodePosts();

  return (
    <div className='relative overflow-x-hidden pt-[64px]'>
      <BlogsWithLoadMore
        initialPosts={posts}
        initialHasNextPage={pageInfo.hasNextPage}
        initialEndCursor={pageInfo.endCursor}
      />

      <GetInTouchSection className='!pt-2 sm:!pt-4' />
    </div>
  );
}
