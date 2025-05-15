import React from 'react';
import Image from 'next/image';

// import required modules
export default function BrandShowcase() {
  const sliderArray = [
    {
      src: '/images/brand/brand-showcase1.svg',
      alt: 'brand-1',
      height: 'h-6',
    },
    {
      src: '/images/brand/brand-showcase2.svg',
      alt: 'brand-2',
      height: 'h-6',
    },
    {
      src: '/images/brand/brand-showcase3.svg',
      alt: 'brand-3',
      height: 'h-8',
    },
    {
      src: '/images/brand/brand-showcase4.svg',
      alt: 'brand-4',
      height: 'h-8',
    },
    {
      src: '/images/brand/brand-showcase5.svg',
      alt: 'brand-5',
      height: 'h-8',
    },
  ];
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-300'>
      {sliderArray.map((brand, index) => (
        <div
          key={index}
          className='lg:p-6 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={150}
            height={150}
            className={`w-full ${brand.height} object-contain transition-all duration-300`}
          />
        </div>
      ))}
    </div>
  );
}
