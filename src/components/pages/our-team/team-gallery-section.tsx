import SectionHeader from '@/components/header/section-header';
import React from 'react';
import TeamGallery from './team-gallery';

const TeamGallerySection = () => {
  return (
    <section className='pb-14.5 sm:pb-22 relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center'>
        <SectionHeader name='Our Team' className='mx-auto' />
        <div className='space-y-7.5 xl:space-y-16 mt-5'>
          <h1 className='text-3xl lg:text-[40px] text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            Meet the Minds Behind Softcolon
          </h1>
          <TeamGallery />
        </div>
      </div>
    </section>
  );
};

export default TeamGallerySection;
