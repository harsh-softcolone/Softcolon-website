import { HashnodePost } from '@/interface';
import dayjs from 'dayjs';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }: { blog: HashnodePost }) => {
  return (
    <div className='p-5 rounded-[20px] border border-[#464646] group hover:border-gray-500 transition-all duration-300 flex flex-col h-full'>
      <div>
        <div className='relative aspect-video w-full h-[220px] sm:h-[292px] overflow-hidden'>
          <Image
            src={blog.coverImage.url || '/placeholder.svg'}
            alt={blog.title}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            className='object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg'
          />
          <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center'></div>
        </div>
        <div className='text-white py-4'>
          <p className='text-base leading-[21px] font-[500] text-[#c0c0c0]'>
            {dayjs(blog.publishedAt).format('DD MMM YYYY')}
          </p>
          <p className='pt-2 text-xl md:text-2xl leading-normal md:leading-[30px] font-[500] text-white line-clamp-2'>
            {blog.title}
          </p>
        </div>
      </div>
      <Link
        aria-label='read more'
        href={`https://coderg-tales.hashnode.dev/${blog.slug}`}
        className='flex relative items-center gap-2 text-[#1BA1E3] font-medium text-md hover:text-white transition-all duration-300 group w-fit mt-auto'
      >
        READ MORE
        <ArrowRight className='w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-300' />
        <span className='absolute -bottom-1 left-0 w-[84%] h-[1px] bg-[#1BA1E3] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-white'></span>
      </Link>
    </div>
  );
};

export default BlogCard;
