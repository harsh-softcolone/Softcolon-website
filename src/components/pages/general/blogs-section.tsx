'use client';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { HashnodePost } from '@/interface';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import BlogCard from '@/components/cards/blog-card';
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
}

const BlogsSection = ({
  title,
  blogsArray,
  sectionClassName,
  isMoreBlogs,
}: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);
  const BlogsDynamicArray = blogsArray ? blogsArray : blogsDummyContent;
  return (
    <section
      className={
        (cn('pt-16 pb-25 relative overflow-hidden bg-[#1b1b1b]'),
        sectionClassName)
      }
    >
      <div className='max-w-[1396px] mx-auto flex flex-col px-4 md:px-8 items-center justify-center'>
        <SectionHeader ref={sectionRef} name='Blogs' />
        <div className='space-y-8 mt-5'>
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
            {BlogsDynamicArray?.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {isMoreBlogs && (
            <div className='flex justify-center'>
              <Link
                aria-label='read more'
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
