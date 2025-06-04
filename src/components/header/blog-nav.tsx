'use client';

import { useRouter } from 'next/navigation';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Logo } from '../nav/logo';

const BlogNav = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='absolute top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm w-11/12 mx-auto max-w-[1440px]'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Back Button and Title */}
          <div className='flex items-center space-x-4'>
            <button
              onClick={handleBack}
              className='flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer bg-transparent transition-colors duration-200 group'
              aria-label='Go back'
            >
              <IoChevronBackOutline className='w-5 h-5 text-gray-300 group-hover:text-white transition-colors' />
            </button>

            <Logo />
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center space-x-3'></div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
