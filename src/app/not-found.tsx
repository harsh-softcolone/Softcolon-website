import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black-background flex items-center justify-center'>
      {/* Left side pattern */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] hidden lg:block pointer-events-none'>
        <Image
          src='/images/square-pattern.svg'
          alt='pattern-image'
          fill
          className='object-contain'
        />
      </div>

      {/* Right side pattern */}
      <div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] hidden lg:block pointer-events-none'>
        <Image
          src='/images/square-pattern.svg'
          alt='pattern-image'
          fill
          className='object-contain'
        />
      </div>

      {/* Main content */}
      <div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
        <div className='flex flex-col items-center justify-center space-y-8'>
          {/* 404 SVG Image */}
          <div className='w-full max-w-2xl h-64 sm:h-80 md:h-96 relative mb-8'>
            <Image
              src='/404.svg'
              alt='404 - Page Not Found'
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* Error Text */}
          <div className='space-y-6'>
            <h3 className='text-xl sm:text-3xl md:text-4xl font-semibold text-white font-ibm-plex-sans'>
              PAGE UNDER CONSTRUCTION
            </h3>
            <p className='text-md sm:text-2xl text-paragraph max-w-3xl mx-auto leading-relaxed font-ibm-plex-sans'>
              We&apos;re currently working on this page to bring you something
              amazing. Please check back soon. Thank you for your patience!
            </p>
          </div>

          {/* Back to Home Button */}
          <Link
            href='/'
            className='flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group font-ibm-plex-sans'
          >
            Back to Home
            <Image
              src='/icons/arrow.svg'
              alt='arrow-right'
              width={24}
              height={24}
              className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:rotate-45'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
