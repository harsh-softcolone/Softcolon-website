import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const RotateArrowButton = ({
  buttonClassName,
  imageClassName,
  isActive,
}: {
  buttonClassName?: string;
  imageClassName?: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        'rounded-full bg-[#1D1D1D] h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center self-center md:self-start transition-colors duration-500 ease-in-out',
        buttonClassName,
      )}
    >
      <Image
        src='/icons/arrow.svg'
        alt='arrow-right'
        width={24}
        height={24}
        className={cn(
          'w- h-6 transition-transform duration-500 ease-in-out',
          isActive ? 'rotate-45' : 'group-hover:rotate-45',
          imageClassName,
        )}
      />
    </div>
  );
};

export default RotateArrowButton;
