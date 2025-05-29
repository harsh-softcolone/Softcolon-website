'use client';
import { PlatformButton } from '@/components/buttons/partner-section/platform-button';
import { PlatformButtonMobile } from '@/components/buttons/partner-section/platform-button-mobile';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useGsapScrollReveal } from '@/hooks/useGsapScrollReveal';
import { Platform } from '@/interface';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

// Define platform types
const platforms: Platform[] = [
  {
    id: 'web-applications',
    number: '01',
    title: 'Web Applications',
    description:
      'A centralized repository to process and store a large amount of data in its native format securely',
    icons: [
      { src: '/icons/partners/mongodb.svg', alt: 'MongoDB' },
      { src: '/icons/partners/express.svg', alt: 'Express' },
      { src: '/icons/partners/react.svg', alt: 'React' },
      { src: '/icons/partners/nodejs.svg', alt: 'Node.js' },
      { src: '/icons/partners/github.svg', alt: 'GitHub' },
      { src: '/icons/partners/javascript.svg', alt: 'JavaScript' },
      { src: '/icons/partners/vue.svg', alt: 'Vue.js' },
    ],
  },
  {
    id: 'mobile-platform',
    number: '02',
    title: 'Mobile Platform',
    description:
      'Native and cross-platform mobile solutions for iOS and Android with seamless user experiences',
    icons: [
      { src: '/icons/partners/react.svg', alt: 'React Native' },
      { src: '/icons/partners/flutter.svg', alt: 'Flutter' },
      { src: '/icons/partners/swift.svg', alt: 'Swift' },
      { src: '/icons/partners/kotlin.svg', alt: 'Kotlin' },
    ],
  },
  {
    id: 'cloud-solutions',
    number: '03',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and services for reliable and secure application deployment',
    icons: [
      { src: '/icons/partners/aws.svg', alt: 'AWS' },
      { src: '/icons/partners/azure.svg', alt: 'Azure' },
      { src: '/icons/partners/gcp.svg', alt: 'Google Cloud' },
    ],
  },
  {
    id: 'hybrid-app-development',
    number: '04',
    title: 'Hybrid App Development',
    description:
      'Cross-platform solutions that work seamlessly across multiple devices and operating systems',
    icons: [
      { src: '/icons/partners/react.svg', alt: 'React Native' },
      { src: '/icons/partners/flutter.svg', alt: 'Flutter' },
      { src: '/icons/partners/ionic.svg', alt: 'Ionic' },
    ],
  },
  {
    id: 'app-development',
    number: '05',
    title: 'App Development',
    description:
      'Custom application development tailored to your specific business needs and requirements',
    icons: [
      { src: '/icons/partners/javascript.svg', alt: 'JavaScript' },
      { src: '/icons/partners/typescript.svg', alt: 'TypeScript' },
      { src: '/icons/partners/python.svg', alt: 'Python' },
    ],
  },
  {
    id: 'net-developer',
    number: '06',
    title: '.Net Developer',
    description:
      'Enterprise-grade .NET solutions for robust and scalable business applications',
    icons: [
      { src: '/icons/partners/dotnet.svg', alt: '.NET' },
      { src: '/icons/partners/csharp.svg', alt: 'C#' },
      { src: '/icons/partners/azure.svg', alt: 'Azure' },
    ],
  },
];

const PartnersSection = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>(platforms[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGsapScrollReveal(leftRef as React.RefObject<HTMLElement>, 'left', {
    start: 'top 85%',
  });
  useGsapScrollReveal(rightRef as React.RefObject<HTMLElement>, 'right', {
    start: 'top 85%',
  });

  return (
    <section
      ref={sectionRef}
      className='py-14.5 sm:py-32.5 relative overflow-hidden'
    >
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={20}
        height={20}
        className='absolute top-3/12 left-1/6 -translate-x-1/2 -translate-y-1/2 w-40 h-40 -z-10 hidden md:block'
      />
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={10}
        height={10}
        className='absolute top-4/12 left-[13%] -translate-x-1/2 -translate-y-1/2 w-15 h-15 -z-10 hidden md:block'
      />
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={10}
        height={10}
        className='absolute top-6/12 right-[5%] -translate-x-1/2 -translate-y-1/2 w-18 h-18 -z-10 hidden lg:block'
      />
      <div className='max-w-[1396px] mx-auto space-y-5 px-4 md:px-8 flex flex-col items-center justify-center z-100'>
        <SectionHeader name='Platforms & Partners' />
        <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center max-w-[800px] font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          Smart Tech. Strong Stack.
          <br className='hidden sm:block' />
          <span className='gradient-color'>&nbsp;Built to Scale.</span>
        </h1>
        <p className='text-lg lg:text-xl text-center text-paragraph  max-w-[724px] font-normal leading-normal font-ibm-plex-sans'>
          From startups to enterprise solutions, we integrate cutting-edge
          platforms to deliver scalable, secure, and intelligent digital
          products.
        </p>
        <div className='w-full mt-16 flex flex-col-reverse md:flex-row gap-8 lg:gap-16'>
          {/* Mobile view - stacked layout */}
          <div className='md:hidden w-full space-y-4' ref={leftRef}>
            {platforms.map((platform) => (
              <PlatformButtonMobile
                key={platform.id}
                platform={platform}
                isActive={activePlatform.id === platform.id}
                onClick={() => setActivePlatform(platform)}
              />
            ))}
          </div>

          {/* Desktop view - side by side layout */}
          <div
            className='hidden md:flex md:flex-col md:w-1/2 space-y-4'
            ref={leftRef}
          >
            {platforms.map((platform) => (
              <PlatformButton
                key={platform.id}
                platform={platform}
                isActive={activePlatform.id === platform.id}
                onClick={() => setActivePlatform(platform)}
              />
            ))}
          </div>

          <div
            ref={rightRef}
            className='w-full md:w-1/2 bg-[#1A1A1A] bg-[url("https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center rounded-xl p-2 sm:p-7.5 bg-no-repeat'
          >
            <div className='space-y-4 border-[1px] backdrop-blur-[10px]  border-[#383838] bg-[#ffffff1a] h-full rounded-[20px] px-6 py-10'>
              <p className='text-white text-lg md:text-xl font-ibm-plex-sans'>
                {activePlatform.description}
              </p>

              <div className='flex flex-wrap gap-4 mt-6'>
                {activePlatform.icons.map((icon, index) => (
                  <div
                    key={index}
                    className='bg-white p-3 w-[94px] h-[94px] rounded-md flex items-center justify-center'
                  >
                    <Image
                      src={icon.src || '/placeholder.svg'}
                      alt={icon.alt}
                      width={48}
                      height={48}
                      className='w-10 h-10 object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
