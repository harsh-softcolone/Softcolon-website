import Image from 'next/image';
import React from 'react';

interface Props {
  heroData: {
    imageUrl: string;
    title: string;
    description: string;
  };
}

const IndustryHeroSection = ({ heroData }: Props) => {
  return (
    <div className='max-w-[1392px] w-11/12 2xl:w-full rounded-[30px] mx-auto'>
      <div className='mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[40px]'>
        <Image
          src={heroData.imageUrl}
          alt={heroData.title}
          width={693}
          height={393}
          className='w-full rounded-[30px] h-[326px] xl:h-[393px] object-cover'
        />
        <div className='space-y-5.5 font-ibm-plex-sans flex flex-col justify-center'>
          <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            {heroData.title}
          </h1>
          <div className='space-y-7.5'>
            <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
              {heroData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryHeroSection;
