import Image from 'next/image';
import React from 'react';
import { CaseStudyDataTypes } from '@/interface';

interface Props {
  data: CaseStudyDataTypes['problemHighlights'];
}

const ProblemHighlightsSection = ({ data }: Props) => {
  return (
    <section className='relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center'>
        <div className='space-y-7.5 xl:space-y-[100px]'>
          {/* Grid one */}
          <div className='mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
            <Image
              src={data.image}
              alt='achivement'
              width={693}
              height={393}
              className='w-full rounded-[30px] h-[326px] xl:h-[393px] object-cover'
            />
            <div className='space-y-5.5 font-ibm-plex-sans flex flex-col justify-center'>
              <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
                {data.title}
              </h1>
              <div className='space-y-7.5'>
                <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                  {data.description}
                </p>
                <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                  {data.description}
                </p>
              </div>
            </div>
          </div>
          {/* Grid two */}
          <div className='mx-auto relative font-ibm-plex-sans flex flex-col md:flex-row gap-[40px] md:gap-0'>
            <div className='md:w-1/2 pr-0 md:pr-5 space-y-4 md:space-y-5.5'>
              <h1 className='text-2xl md:text-3xl lg:text-[40px] max-w-[578px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
                {data.overview.title}
              </h1>
              <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                {data.overview.description}
              </p>
            </div>

            <div className='hidden md:block w-px bg-white/20 mx-5' />

            <div className='md:w-1/2 pl-0 md:pl-5 space-y-5.5 font-ibm-plex-sans flex flex-col justify-center'>
              {data.solutions?.map((item, index) => (
                <div key={index} className='space-y-4'>
                  <h4 className='text-2xl font-semibold leading-normal text-white'>
                    {item.title}
                  </h4>
                  <p className='text-[16px] font-normal leading-normal text-white'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemHighlightsSection;
