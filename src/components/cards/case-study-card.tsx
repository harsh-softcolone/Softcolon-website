import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  readMoreLink: string;
  imageOnLeft?: boolean;
}

export default function CaseStudyCard({
  title,
  description,
  imageSrc,
  imageAlt,
  readMoreLink,
  imageOnLeft = true,
}: CaseStudyCardProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-18 rounded-lg overflow-hidden relative'>
      {/* Image Section - On mobile: always on top, On desktop: left or right based on prop */}
      <div
        className={cn(
          'relative w-full h-[233px] sm:h-[436px] md:h-full min-h-[233px] sm:min-h-[436px]',
          imageOnLeft ? 'md:order-1' : 'md:order-2',
        )}
      >
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={imageAlt}
          fill
          className='max-w-[688px] h-full object-cover rounded-[30px]'
        />
      </div>

      {/* Content Section - On mobile: always below image, On desktop: right or left based on prop */}
      <div
        className={cn(
          'flex flex-col justify-center p-0 sm:p-8 space-y-[20px] sm:space-y-[30px] font-ibm-plex-sans',
          imageOnLeft ? 'md:order-2' : 'md:order-1',
        )}
      >
        <h2 className='text-2xl md:text-[30px] font-medium text-white'>
          {title}
        </h2>
        <p className='text-paragraph text-[16px] sm:text-[20px] font-normal leading-normal'>
          {description}
        </p>
        <Link
          href={readMoreLink}
          className='flex items-center gap-2 text-[#1BA1E3] font-medium text-[16px] sm:text-[20px] hover:text-white transition-all duration-300 group w-fit'
        >
          READ MORE
          <ArrowRight className='w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-300' />
          <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
        </Link>
      </div>
    </div>
  );
}
