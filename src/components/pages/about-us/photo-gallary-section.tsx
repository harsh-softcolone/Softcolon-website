'use client';

import Image from 'next/image';
import { photos } from '@/lib/photo.data';
import { useState } from 'react';
import ImageModal from '@/components/shared/image-modal';

interface Props {
  header?: React.ReactNode;
  title?: React.ReactNode;
}

export default function PhotoGallery({ header, title }: Props) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const groupedPhotos = [
    [photos[0]],
    [photos[1], photos[2]],
    [photos[3]],
    [photos[4], photos[5]],
  ];

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
              <div
                key={i}
                className='relative w-full cursor-pointer transition-transform hover:scale-[1.02]'
                onClick={() => handleImageClick(photo.src, photo.alt)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={100}
                  height={100}
                  className='w-full h-fit object-contain rounded-2xl'
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
}
