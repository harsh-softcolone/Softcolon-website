'use client';

import Image from 'next/image';
import { photos } from '@/lib/photo.data';

export default function PhotoGallery() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-12'>
        Timeless photos that evoke
        <br />
        emotion and memories.
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='row-span-2'>
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group'>
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300' />
          </div>
        </div>

        <div className='space-y-4'>
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group'>
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300' />
          </div>
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group'>
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300' />
          </div>
        </div>
      </div>
    </div>
  );
}
