'use client';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import Image from 'next/image';
import React, { useRef } from 'react';

const WhySoftcolon = ({
  data,
  title,
  description,
}: {
  data?: {
    icon: string;
    alt: string;
    title: string;
    description: string;
  }[];
  title?: boolean;
  description?: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);
  const whySoftcolonContent = [
    {
      icon: '/images/general/human.svg',
      alt: 'Human-centric',
      title: 'Human-Centric Intelligence',
      description:
        'We design AI to amplify human expertise-not replace it. By focusing on UX, transparency, and ethical AI practices, we ensure technology empowers people.',
    },
    {
      icon: '/images/general/building.svg',
      alt: 'Future platform',
      title: 'Future-Ready Platforms',
      description:
        'Our AI architectures are built to evolve. With plug-and-play modules and cloud-native scaling, your solutions stay agile as your business grows.',
    },
  ];
  const content = data ?? whySoftcolonContent;
  const softcolonStats = [
    {
      value: '07',
      label: 'Years of Excellence',
    },
    {
      value: '50+',
      label: 'Happy Clients',
    },
    {
      value: '30+',
      label: 'AI Specialists',
    },
  ];
  return (
    <section className='py-14.5 sm:py-22 relative overflow-hidden'>
      <div className='max-w-[1156px] mx-auto w-11/12 xl:w-full flex-col justify-center items-center'>
        <SectionHeader
          ref={sectionRef}
          name='Why Softcolon'
          className='mx-auto'
        />
        <div className='space-y-7.5 mt-5'>
          {title && description ? (
            <>
              <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
                We are the prime choice for an
                <span className='gradient-color'> AI</span>{' '}
                <br className='hidden lg:block' />
                <span className='gradient-color'>
                  Agent development company
                </span>
              </h1>
              <p className='text-md lg:text-lg text-center text-paragraph font-normal leading-normal font-ibm-plex-sans'>
                {description}
              </p>
            </>
          ) : (
            <>
              <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
                &quot;We&apos;re not just adopting{' '}
                <span className='gradient-color'> technology</span>{' '}
                <br className='hidden lg:block' />
                we&apos;re embracing a new era of{' '}
                <br className='hidden lg:block' />
                <span className='gradient-color'> business innovation</span>
                &quot;
              </h1>
              <p className='text-lg lg:text-xl text-center text-paragraph font-normal leading-normal font-ibm-plex-sans'>
                Collaborate with Softcolon&apos;s expert team to transform your
                vision into powerful, <br className='hidden lg:block' />
                human-centered AI applications that drive real business impact.
              </p>
            </>
          )}
          <div className='font-ibm-plex-sans flex gap-[60px] flex-col'>
            <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] lg:gap-x-6'>
              {content?.map((item, index) => (
                <div key={index} className='relative flex gap-4 lg:p-4 w-full'>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className='w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] object-contain'
                  />
                  <div className='flex flex-col gap-2 wrap-anywhere'>
                    <h2 className='text-[20px] xl:text-[30px] font-medium leading-snug text-white'>
                      {item.title}
                    </h2>
                    <p className='text-[14px] xl:text-[18px] font-normal leading-snug text-[#c0c0c0]'>
                      {item.description}
                    </p>
                  </div>

                  {index !== content?.length - 1 &&
                    (index === 0 || index === 1) && (
                      <div className='hidden lg:block absolute right-[-12px] top-0 h-full w-[2px] bg-[#464646]' />
                    )}
                </div>
              ))}
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-[30px] xl:gap-x-[93px] items-start lg:justify-items-center px-[30px] lg:px-[10px] py-[10px] bg-[#292929] rounded-[20px] lg:rounded-[58px]'>
              {softcolonStats.map((stat, index) => (
                <div
                  key={index}
                  className='flex items-center gap-[25px] xl:gap-[30px]'
                >
                  <p className='text-[30px] xl:text-[40px] font-[700] leading-[52px] text-[#fff]'>
                    {stat.value}
                  </p>
                  <p className='text-[20px] xl:text-[26px] font-[400] leading-[34px] text-[#fff]'>
                    {stat.label}
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

export default WhySoftcolon;
