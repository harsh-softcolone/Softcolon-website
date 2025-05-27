'use client';

import Image from 'next/image';
import { photos } from '@/lib/photo.data';

interface Props {
  header?: React.ReactNode;
  title?: React.ReactNode;
}

export default function PhotoGallery({ header, title }: Props) {
  const groupedPhotos = [
    [photos[0]],
    [photos[1], photos[2]],
    [photos[3]],
    [photos[4], photos[5]],
  ];
  return (
    <div className='container mx-auto px-4 py-8'>
      {header ? header : null}
      {title ? (
        title
      ) : (
        <h1 className='text-3xl md:text-5xl font-medium text-center text-white mb-12 font-ibm-plex-sans'>
          Timeless photos that evoke
          <br />
          emotion and memories.
        </h1>
      )}

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {groupedPhotos.map((group, index) => (
          <div
            key={index}
            className={`${
              group.length > 1
                ? 'flex flex-col gap-4 justify-between items-center'
                : ''
            }`}
          >
            {group.map((photo, i) => (
              <Image
                key={i}
                src={photo.src}
                alt={photo.alt}
                width={100}
                height={100}
                className='w-full h-fit object-contain rounded-2xl'
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
