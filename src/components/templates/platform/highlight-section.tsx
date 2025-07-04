import { PlatformData } from '@/interface';
import React from 'react';

interface Props {
  highlightCardData: PlatformData['highlightCard'];
}

const highlightSection = ({ highlightCardData }: Props) => {
  return (
    <div className='max-w-[1394px] w-11/12 2xl:w-full rounded-[30px] mx-auto flex justify-between gap-10 xl:gap-24 nav-background py-10 px-6 sm:px-[40px] xl:px-[70px] border-[1px] border-[#31383C] flex-col md:flex-row'>
      {highlightCardData?.map((item, index) => (
        <div
          key={index}
          className='relative flex gap-4 md:gap-6 lg:gap-8 lg:p-4 w-full'
        >
          <div>
            <item.icon className='text-4xl md:text-5xl lg:text-6xl text-white' />
          </div>

          <div className='flex flex-col gap-4 md:gap-8'>
            <h3 className='text-[20px] xl:text-[30px] font-ibm-plex-sans font-semibold leading-normal text-white'>
              {item.title}
            </h3>
            <p className='text-[14px] xl:text-[18px] font-ibm-plex-sans font-normal leading-normal text-[#c0c0c0]'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default highlightSection;
