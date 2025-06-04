import Image from 'next/image';
import React from 'react';
import { HashNodeSinglePost } from '@/interface';
import dayjs from 'dayjs';

interface Props {
  post: HashNodeSinglePost;
}

const BlogHeader = ({ post }: Props) => {
  return (
    <div className='w-full'>
      <div className='relative h-[300px] sm:h-[60vh] w-11/12 mx-auto flex flex-col items-center justify-center text-center px-4'>
        <Image
          src={post.coverImage.url || '/placeholder.svg'}
          alt={post.title}
          fill
          priority
          className='object-contain sm:object-cover'
        />
      </div>
      <div className='text-white py-4 sm:py-8 px-4 text-center space-y-6'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white font-ibm-plex-sans max-w-4xl mx-auto'>
          {post.title}
        </h2>
        <p className='text-xl opacity-70 text-white font-ibm-plex-sans font-medium'>
          {dayjs(post.publishedAt).format('MMM DD, YYYY')}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
