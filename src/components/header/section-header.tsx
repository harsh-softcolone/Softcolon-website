import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const SectionHeader = ({
  name = 'Dummy Section',
  className,
  ref,
}: {
  name: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className={cn(
        'w-fit border-[1px] rounded-full border-[#7B7B7B] px-4 py-2 flex items-center gap-2',
        className,
      )}
      ref={ref}
    >
      <Image
        src='/icons/gradient-star.svg'
        alt='gradient-star'
        width={24}
        height={24}
      />
      <span className='text-white text-lg sm:text-2xl font-medium font-ibm-plex-sans'>
        {name}
      </span>
      <Image
        src='/icons/gradient-star.svg'
        alt='gradient-star'
        width={24}
        height={24}
      />
    </div>
  );
};

export default SectionHeader;
