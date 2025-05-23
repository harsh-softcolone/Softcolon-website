'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function BrandShowcase() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderArray = [
    {
      src: '/images/brand/brand-showcase1.svg',
      alt: 'brand-1',
      height: 'h-6 sm:h-8',
    },
    {
      src: '/images/brand/brand-showcase2.svg',
      alt: 'brand-2',
      height: 'h-6 sm:h-8',
    },
    {
      src: '/images/brand/brand-showcase3.svg',
      alt: 'brand-3',
      height: 'h-8 sm:h-10',
    },
    {
      src: '/images/brand/brand-showcase4.svg',
      alt: 'brand-4',
      height: 'h-8 sm:h-10',
    },
    {
      src: '/images/brand/brand-showcase5.svg',
      alt: 'brand-5',
      height: 'h-8 sm:h-10',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const width =
        sliderRef.current !== null && sliderRef.current.scrollWidth / 2;
      gsap.to(sliderRef.current, {
        x: -width,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, sliderRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className='overflow-hidden w-full max-w-[1400px] mx-auto px-4 md:px-8 relative'>
      <div className='hidden xl:block absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none z-10'></div>
      <div className='hidden xl:block absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none z-10'></div>

      <div ref={sliderRef} className='flex gap-8 w-max'>
        {sliderArray.concat(sliderArray).map((brand, index) => (
          <div
            key={index}
            className='p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
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
    </section>
  );
}
