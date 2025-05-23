'use client';
import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
import RotateArrowButton from '@/components/buttons/rotate-arrow-button';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useScrollRevealList } from '@/hooks/useScrollRevealList';
import React, { useRef } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceItemRefs = useRef<HTMLDivElement[]>([]);
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);
  useScrollRevealList(serviceItemRefs, 'left');
  const services = [
    {
      title: 'Generative AI',
      description:
        'From prompts to production, create content, code, and visuals with generative AI that feels like magic.',
    },
    {
      title: 'AI Automation & Integrations',
      description:
        'Automate the boring. Elevate the bold, replace busywork with AI-powered flows that just get it done.',
    },
    {
      title: 'Machine Learning Solutions',
      description:
        'Machines that learn, so you earn, we build adaptive algorithms that grow smarter with your data.',
    },
    {
      title: 'Custom AI Development',
      description:
        'Your idea. Our code. Real results, we turn your AI vision into working, revenue-driving solutions.',
    },
    {
      title: 'RAG Development',
      description:
        'Plug AI into your current tools, from CRM to ERP, we embed smart logic where it matters most.',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'Think smarter, not harder, we craft AI roadmaps that fuel innovation and drive decisions with precision.',
    },
  ];

  return (
    <section
      className='mt-40 sm:mt-60 pt-14.5 sm:pt-32.5 min-h-[100vh] relative overflow-hidden'
      id='service-section'
    >
      <AbstractBlobBackground
        className='top-4/5 -left-20 hidden lg:block -translate-x-1/2 -translate-y-1/2'
        fill='#ED58C9'
      />
      <div className='max-w-[1250px] mx-auto space-y-5 px-4 md:px-8 flex flex-col items-center justify-center'>
        <SectionHeader name='Services' ref={sectionRef} />
        <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          The Way You Work with AI That <br className='hidden lg:block' />
          <span className='gradient-color'> Thinks</span>,
          <span className='gradient-color'> Learns</span>, and Elevates
          <span className='gradient-color'> Growth</span>
        </h1>
        <p className='text-lg lg:text-xl text-center text-paragraph font-normal leading-normal font-ibm-plex-sans'>
          Let AI do the thinking, automating, scaling so you can focus on
          building your next big leap.
        </p>
        <div className='mt-8 sm:mt-16.5'>
          {services.map((service, index) => (
            <div
              ref={(el) => {
                if (el) serviceItemRefs.current[index] = el;
              }}
              key={index}
              className={`${services?.length === index ? '' : ''}border-b-[1px] group border-[#353535] hover:border-blue-500 transition-all duration-300 py-5 sm:py-7 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 md:gap-8 items-center`}
            >
              <div className='flex items-center justify-between'>
                <div className='text-xl max-w-[200px] md:text-2xl font-semibold font-ibm-plex-sans text-white'>
                  {service.title}
                </div>
                <RotateArrowButton
                  buttonClassName='group-hover:bg-gradient-to-r group-hover:from-[#1f84fc] group-hover:to-[#c846e4] flex md:hidden'
                  imageClassName='transition-transform duration-500 ease-in-out group-hover:rotate-45'
                />
              </div>
              <p className='text-[16px] lg:text-xl text-paragraph font-normal leading-normal font-ibm-plex-sans'>
                {service.description}
              </p>
              <RotateArrowButton
                buttonClassName='group-hover:bg-gradient-to-r group-hover:from-[#1f84fc] group-hover:to-[#c846e4] hidden md:flex'
                imageClassName='transition-transform duration-500 ease-in-out group-hover:rotate-45'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
