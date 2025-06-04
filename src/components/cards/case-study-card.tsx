import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
interface CaseStudyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  readMoreLink: string;
  cardNumber: number;
  imageOnLeft?: boolean;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function CaseStudyCard({
  title,
  description,
  imageSrc,
  imageAlt,
  cardNumber,
  readMoreLink,
  imageOnLeft = true,
  ref,
}: CaseStudyCardProps) {
  return (
    <div ref={ref} className='relative'>
      {/* Pattern Image */}
      {cardNumber % 2 === 1 ? (
        <div className='hidden lg:block'>
          {cardNumber === 1 && (
            <AbstractBlobBackground className='top-0 right-0 translate-x-1/4 -translate-y-[20%]' />
          )}
          <div className='absolute -top-50 -right-60 w-[800px] h-[800px] z-100'>
            <Image
              src='images/square-pattern.svg'
              alt='pattern-image'
              fill
              className='object-contain'
            />
          </div>
        </div>
      ) : (
        <div className='absolute -top-50 -left-60 w-[800px] h-[800px] hidden lg:block'>
          <Image
            src='images/square-pattern.svg'
            alt='pattern-image'
            fill
            className='object-contain'
          />
        </div>
      )}

      {/*  */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-lg px-4 xxl:px-0 relative mx-auto max-w-[1400px] overflow-hidden'>
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
            className='max-w-[688px] h-full object-cover rounded-[30px] mx-auto'
          />
        </div>

        {/* Content Section - On mobile: always below image, On desktop: right or left based on prop */}
        <div
          className={cn(
            'flex justify-center items-center p-0 sm:p-8',
            imageOnLeft ? 'md:order-2' : 'md:order-1',
          )}
        >
          <div className='w-full space-y-[20px] sm:space-y-[30px] font-ibm-plex-sans'>
            <h2 className='text-2xl md:text-[30px] font-medium text-white'>
              {title}
            </h2>
            <p className='text-paragraph text-[16px] sm:text-[20px] font-normal leading-normal'>
              {description}
            </p>
            <Link
              aria-label={`Read more about the Case Study: ${title}`}
              href={readMoreLink}
              className='flex relative items-center gap-2 text-[#1BA1E3] font-medium text-[16px] sm:text-[20px] hover:text-white transition-all duration-300 group w-fit'
            >
              READ MORE
              <ArrowRight className='w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-300' />
              <span className='absolute -bottom-1 left-0 w-[84%] h-[1px] bg-[#1BA1E3] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-white'></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
