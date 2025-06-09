import SectionHeader from '@/components/header/section-header';
import { HashnodePost } from '@/interface';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, ChevronDown, Loader2 } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '@/components/cards/blog-card';
import BlogSkeleton from '@/components/skeleton/blog-skeleton';

const blogsDummyContent: HashnodePost[] = [
  {
    title: 'Trends, Insights, and Innovations Shaping Tomorrow',
    brief:
      'Explore the latest trends and innovations that are shaping the future of technology and business.',
    slug: 'trends-insights-innovations-shaping-tomorrow',
    coverImage: { url: '/images/blogs/robot.svg' },
    publishedAt: '2022-08-06T00:00:00.000Z',
  },
  {
    title: 'Transforming Business Operations with AI Technology',
    brief:
      'Discover how AI technology is revolutionizing business operations and driving efficiency.',
    slug: 'transforming-business-operations-with-ai-technology',
    coverImage: { url: '/images/blogs/ai-technology.svg' },
    publishedAt: '2022-08-06T00:00:00.000Z',
  },
  {
    title: 'Revolutionizing Business Efficiency with AI Solutions',
    brief:
      'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
    slug: 'revolutionizing-business-efficiency-with-ai-solutions',
    coverImage: { url: '/images/blogs/ai-solution.svg' },
    publishedAt: '2022-08-06T00:00:00.000Z',
  },
];

interface Props {
  title?: React.ReactNode;
  blogsArray?: HashnodePost[];
  sectionClassName?: string;
  isMoreBlogs?: boolean;
  isRemoveHeader?: boolean;
  hasNextPage?: boolean;
  loading?: boolean;
  loadingMore?: boolean;
  onLoadMore?: () => Promise<void>;
}

const BlogsSection = ({
  title,
  blogsArray,
  sectionClassName,
  isMoreBlogs,
  isRemoveHeader,
  hasNextPage,
  loading,
  loadingMore,
  onLoadMore,
}: Props) => {
  const BlogsDynamicArray = blogsArray ? blogsArray : blogsDummyContent;

  // Show skeletons when loading and no blogs yet
  const shouldShowSkeletons =
    loading && (!blogsArray || blogsArray.length === 0);

  return (
    <section
      className={cn(
        'pt-16 pb-25 relative overflow-hidden bg-[#1b1b1b]',
        sectionClassName,
      )}
    >
      <div className='max-w-[1396px] mx-auto flex flex-col px-4 md:px-8 items-center justify-center'>
        {!isRemoveHeader && <SectionHeader name='Blogs' />}
        <div className={cn('space-y-8 mt-5', isRemoveHeader && 'mt-0')}>
          {title ? (
            title
          ) : (
            <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
              Keep your finger on the pulse of
              <br className='hidden sm:block' />
              <span className='gradient-color'> trends, tools</span> and
              <span className='gradient-color'> innovations.</span>
            </h1>
          )}

          <div className='font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] pt-2 md:pt-6'>
            {shouldShowSkeletons
              ? Array.from({ length: 6 }).map((_, index) => (
                  <BlogSkeleton key={`skeleton-${index}`} />
                ))
              : BlogsDynamicArray?.map((blog, index) => (
                  <BlogCard key={index} blog={blog} />
                ))}

            {/* Show additional skeletons while loading more posts */}
            {loadingMore &&
              Array.from({ length: 3 }).map((_, index) => (
                <BlogSkeleton key={`loading-more-skeleton-${index}`} />
              ))}
          </div>

          {/* Load More Button - only show if we have onLoadMore function and there are more pages */}
          {onLoadMore &&
            hasNextPage &&
            BlogsDynamicArray.length > 0 &&
            !shouldShowSkeletons && (
              <div className='flex justify-center pt-4 sm:pt-6 md:pt-12'>
                <button
                  onClick={onLoadMore}
                  disabled={loadingMore}
                  className='group relative cursor-pointer inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-gray-300 transition-all duration-300 ease-out hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed'
                >
                  {/* Subtle border that glows on hover */}
                  <div className='absolute inset-0 rounded-full border border-gray-700 transition-all duration-300 group-hover:border-gray-500 group-hover:shadow-sm group-disabled:border-gray-800' />

                  {/* Background glow effect on hover */}
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-disabled:opacity-0' />

                  {/* Button content */}
                  <span className='relative z-10 transition-transform duration-200 group-disabled:translate-y-0'>
                    {loadingMore ? 'Loading more blogs' : 'Load More Blogs'}
                  </span>

                  {/* Icon */}
                  <div className='relative z-10 transition-transform duration-300 group-hover:translate-y-0.5 group-disabled:translate-y-0'>
                    {loadingMore ? (
                      <Loader2 className='h-4 w-4 animate-spin' />
                    ) : (
                      <ChevronDown className='h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5' />
                    )}
                  </div>
                </button>
              </div>
            )}

          {/* Explore More Blogs Link - for other pages */}
          {isMoreBlogs && (
            <div className='flex justify-center'>
              <Link
                aria-label='Explore More Blogs and Insights'
                href='/blogs'
                className='text-[#1BA1E3] font-medium uppercase text-[20px] hover:text-white transition-all duration-300 ease-in-out leading-normal font-ibm-plex-sans flex gap-2 items-center group relative'
              >
                Explore More Blogs
                <ArrowRightIcon className='w-6 h-6 text-[#1BA1E3] group-hover:translate-x-1  group-hover:text-white transition-all duration-300 ease-in-out' />
                <span className='absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
