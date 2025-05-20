import React from 'react';
import AIGenerationInput from './ai-generation-input';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full min-h-[calc(100vh-150px)] overflow-hidden pt-[100px] px-4 md:px-8 relative'>
      {/* <LineAnimation /> */}
      <div className='max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center space-y-10 md:space-y-16 lg:space-y-20 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-hanuman text-white max-w-4xl leading-tight transition-all duration-300'>
          We Create Smarter, Faster And Better Next-Gen{' '}
          <span className='gradient-color'>AI Solutions</span>
        </h1>
        <AIGenerationInput />
      </div>
    </section>
  );
};

export default HeroSection;
