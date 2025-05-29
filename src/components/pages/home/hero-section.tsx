'use client';
import React, { useEffect, useRef } from 'react';
import AIGenerationInput from './ai-generation-input';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className='flex flex-col items-center justify-center w-full min-h-[calc(100vh-150px)] overflow-hidden pt-[100px] px-4 md:px-8 relative'
    >
      <div className='max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center space-y-10 md:space-y-16 lg:space-y-20 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-normal font-hanuman text-white max-w-4xl leading-tight transition-all duration-300'>
          We Create Smarter, Faster And Better Next-Gen{' '}
          <span className='gradient-color'>AI Solutions</span>
        </h1>
        <AIGenerationInput />
      </div>
    </section>
  );
};

export default HeroSection;
