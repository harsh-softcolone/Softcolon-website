'use client';
import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
import RotateArrowButton from '@/components/buttons/rotate-arrow-button';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);

  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);

  const services = [
    {
      title: 'Generative AI',
      description:
        'From prompts to production, create content, code, and visuals with generative AI that feels like magic.',
      image:
        'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
    {
      title: 'AI Automation & Integrations',
      description:
        'Automate the boring. Elevate the bold, replace busywork with AI-powered flows that just get it done.',
      image:
        'https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
    {
      title: 'Machine Learning Solutions',
      description:
        'Machines that learn, so you earn, we build adaptive algorithms that grow smarter with your data.',
      image:
        'https://images.unsplash.com/photo-1695902173528-0b15104c4554?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
    {
      title: 'Custom AI Development',
      description:
        'Your idea. Our code. Real results, we turn your AI vision into working, revenue-driving solutions.',
      image:
        'https://plus.unsplash.com/premium_photo-1743783170335-9ed01a31fe41?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
    {
      title: 'RAG Development',
      description:
        'Plug AI into your current tools, from CRM to ERP, we embed smart logic where it matters most.',
      image:
        'https://images.unsplash.com/photo-1557277750-fa603c4b9cc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'Think smarter, not harder, we craft AI roadmaps that fuel innovation and drive decisions with precision.',
      image:
        'https://images.unsplash.com/photo-1663411605361-b8cc7294c222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your image path here
    },
  ];

  // Optimized mouse move handler with useCallback
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsMouseInSection(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseInSection(false);
    setHoveredService(null);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove, { passive: true });
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <section
      ref={sectionRef}
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

        <div className='relative w-full'>
          {/* Services List */}
          <div className='mt-8 sm:mt-16.5 relative z-10'>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${services?.length === index ? '' : ''}border-b-[1px] group border-[#353535] hover:border-blue-500 transition-all duration-300 py-5 sm:py-7 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-3 md:gap-8 items-center cursor-pointer`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
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

          {/* Animated Image Display - Follows Cursor */}
          <div
            className={`fixed hidden lg:block w-[300px] h-[400px] pointer-events-none z-50 ${
              isMouseInSection && hoveredService !== null
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              left: `${mousePosition.x - 150}px`,
              top: `${mousePosition.y - 200}px`,
              transform: 'translate3d(0, 0, 0)',
              transition: 'opacity 0.15s ease-out',
              willChange: 'transform, opacity',
            }}
          >
            <div className='relative w-full h-full overflow-hidden rounded-lg shadow-2xl'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-150 ease-out ${
                    hoveredService === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    willChange: 'transform, opacity',
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className='object-cover rounded-lg w-[400px] h-[200px]'
                    priority={index <= 2}
                  />
                  {/* <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-lg font-semibold font-ibm-plex-sans drop-shadow-lg'>
                      {service.title}
                    </h3>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
