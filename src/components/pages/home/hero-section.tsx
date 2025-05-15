import React from 'react';
import AIGenerationInput from './ai-generation-input';
import LineAnimation from '@/components/animated/line-animation';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center relative w-full min-h-[calc(100vh-100px)] overflow-hidden pt-[100px]'>
      <LineAnimation />

      <div className='max-w-[1400px] mx-auto w-full flex items-center justify-center'>
        <div className='flex items-center justify-center'>
          <div className='flex w-11/12 md:w-full mx-auto flex-col items-center justify-center space-y-7.5 sm:space-y-16 lg:space-y-20'>
            <h1 className='text-responsive text-white font-normal font-hanuman text-center max-w-4xl leading-normal transition-all duration-300'>
              We Create Smarter, Faster And Better Next-Gen{' '}
              <span className='gradient-color'>AI Solutions</span>
            </h1>
            <AIGenerationInput />
            {/* <BrandShowcase /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
