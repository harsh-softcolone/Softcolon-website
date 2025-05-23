import SectionHeader from '@/components/header/section-header';
import Image from 'next/image';
import React from 'react';

const AboutTeamSection = () => {
  return (
    <section className='pb-14.5 sm:pb-22 relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center'>
        <SectionHeader name='About The Team' className='mt-5 sm:mt-0' />
        <div className='space-y-4 xl:space-y-7.5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6'>
          <h1 className='text-2xl md:text-3xl lg:text-[40px] max-w-[578px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            Passionate & Dedicated Team Member to delivering exceptional results
          </h1>
          <div className='space-y-4 md:space-y-7.5'>
            <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
              Which revolutionized our industry. This forward-thinking approach
              allowed us to stay at the forefront of innovation and better serve
              our clients.
            </p>
            <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
              As technology evolved, so did we. In 1995, we embraced mention a
              significanttechnological advancement or change], which
              revolutionized our industry.This forward-thinking approach allowed
              us to stay at the forefront
            </p>
          </div>
          <Image
            src='images/teams/teamImage1.svg'
            alt='teamImage1'
            width={693}
            height={295}
            loading='lazy'
            className='w-full rounded-2xl h-[295] object-cover'
          />
          <Image
            src='images/teams/teamImage2.svg'
            alt='teamImage2'
            width={693}
            height={295}
            loading='lazy'
            className='w-full rounded-2xl h-[295] object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
