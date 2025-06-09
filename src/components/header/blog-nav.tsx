'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Logo } from '../nav/logo';

const BlogNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleBack = () => {
    // If on /blogs route, go to home page
    if (pathname === '/blogs') {
      router.push('/');
    }
    // If on /blog/[id] route, go to /blogs page
    else if (pathname.startsWith('/blog/')) {
      router.push('/blogs');
    }
    // For any other route, use default back behavior
    else {
      router.back();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#1b1b1b] transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='mx-auto max-w-[1440px]'>
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
    </div>
  );
};

export default BlogNav;
