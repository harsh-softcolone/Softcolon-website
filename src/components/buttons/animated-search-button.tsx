'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AnimatedSearchButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <button
      aria-label='search'
      type='button'
      className={`bg-white cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 relative
        ${isHovered ? 'transform scale-110 shadow-[0_0_15px_rgba(0,0,0,0.1)]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/chat`)}
    >
      {isHovered && (
        <div className='absolute inset-0 bg-blue-400 bg-opacity-20 rounded-full animate-pulse' />
      )}
      <Image
        src='/icons/search.svg'
        alt='search'
        width={18}
        height={18}
        className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}
      />
    </button>
  );
};

export default AnimatedSearchButton;
