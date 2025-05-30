import ContentBlock from '@/components/pages/career/content-block';
import { IndustryDataTypes } from '@/interface';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  data: IndustryDataTypes['innovation'];
  headerClassName?: string;
}

const InnovationHightLightSection = ({ data, headerClassName }: Props) => {
  return (
    <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center space-y-6 sm:space-y-10'>
      <div className={cn('space-y-2 mt-5', headerClassName)}>
        <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          {data.title}
        </h1>
        <p className='text-sm lg:text-base font-normal leading-[21px] text-center text-[#c0c0c0] max-w-4xl'>
          {data.description}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        <div className='flex flex-col'>
          {data.contentBlocks.slice(0, 2).map((block, idx) => (
            <div
              key={`left-${idx}`}
              className={idx === 0 ? 'border-b border-[#435c69]' : ''}
            >
              <ContentBlock
                title={block.title}
                description={block.description}
              />
            </div>
          ))}
        </div>
        <Image
          src={data.imageUrl}
          alt='team work image'
          width={500}
          height={500}
          loading='lazy'
          className='w-11/12 md:w-full  mx-auto rounded-2xl h-full object-cover'
        />
        <div className='flex flex-col'>
          {data.contentBlocks.slice(2).map((block, idx) => (
            <div
              key={`right-${idx}`}
              className={idx === 0 ? 'border-b border-[#435c69]' : ''}
            >
              <ContentBlock
                title={block.title}
                description={block.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationHightLightSection;
