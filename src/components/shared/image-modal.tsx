import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div
      className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm cursor-pointer'
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className='fixed top-[90px] cursor-pointer right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm'
        aria-label='Close modal'
      >
        <X size={28} className='text-white' />
      </button>

      {/* Image container */}
      <div className='w-full h-[calc(100vh-140px)] mt-[90px] flex items-center justify-center p-2 md:p-4'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes='100vw'
            className='object-contain'
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
