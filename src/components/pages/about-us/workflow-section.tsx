import SectionHeader from '@/components/header/section-header';
import React from 'react';

import Image from 'next/image';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description:
      'We start by understanding your goals, challenges, and vision. This helps us tailor solutions that truly align with your business needs.',
    imageUrl: '/pages/about/consultation.svg',
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description:
      'We start by understanding your goals, challenges, and vision. This helps us tailor solutions that truly align with your business needs.',
    imageUrl: '/pages/about/strategy.svg',
  },
  {
    id: 3,
    title: 'UI/UX & Prototyping',
    description:
      'We start by understanding your goals, challenges, and vision. This helps us tailor solutions that truly align with your business needs.',
    imageUrl: '/pages/about/prototyping.svg',
  },
  {
    id: 4,
    title: 'Development & Integration',
    description:
      'Our team builds scalable, secure, and AI-driven applications, ensuring smooth integration with your existing systems.',
    imageUrl: '/pages/about/integration.svg',
  },
  {
    id: 5,
    title: 'QA & Optimization',
    description:
      'Before launch, we rigorously test everything — from functionality to performance — ensuring a flawless user experience.',
    imageUrl: '/pages/about/optimization.svg',
  },
  {
    id: 6,
    title: 'Delivery & Ongoing Support',
    description:
      'Post-deployment, we stay with you. Our team provides ongoing support, updates, and optimization as your needs evolve.',
    imageUrl: '/pages/about/customerSupport.svg',
  },
];

interface ProcessStep {
  title: string;
  description: string;
  steps: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

interface Props {
  data: ProcessStep;
}

const WorkFlowSection = ({ data }: Props) => {
  const processStep = data?.steps ?? processSteps;
  return (
    <section className='pt-14.5 sm:pt-32.5 relative overflow-hidden'>
      <div className='max-w-[1392px] mx-auto w-11/12 space-y-5 flex flex-col items-center justify-center'>
        <SectionHeader name='Workflow' />
        <h1 className='text-[22px] sm:text-4xl md:text-5xl text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          {data.title ?? 'How We Turning Your Ideas Into Impactful Reality'}
        </h1>

        {data.description && (
          <p className='text-paragraph text-md lg:text-xl font-normal leading-normal text-center font-ibm-plex-sans max-w-[800px]'>
            {data.description}
          </p>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
          {processStep?.map(({ id, title, description, imageUrl }, index) => {
            const total = processStep.length;

            const isLastColMd = (index + 1) % 2 === 0;
            const isLastRowMd = index >= total - 2;

            const isLastColLg = (index + 1) % 3 === 0;
            const isLastRowLg = index >= total - 3;

            return (
              <div
                key={id}
                className={`
          relative py-5 px-2 md:px-8 md:py-20 border-b border-[#353535] hover:bg-white/10 transition-all duration-300 group
          md:border-b md:border-r 
          ${isLastColMd ? 'md:border-r-0' : ''} 
          ${isLastRowMd ? 'md:border-b-0' : ''} 
          lg:border-b lg:border-r 
          ${isLastColLg ? 'lg:border-r-0' : ''} 
          ${isLastRowLg ? 'lg:border-b-0' : ''}
        `}
              >
                <div className='absolute top-0 right-0 sm:right-8 workflow-transparent-text text-9xl font-bold text-gray-800/20 select-none group-hover:scale-105 transition-all duration-300'>
                  {id}
                </div>
                <div className='relative z-10'>
                  <div className='w-12 h-12 flex items-center justify-center mb-5'>
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={48}
                      height={48}
                      className='w-full h-full'
                    />
                  </div>
                  <div className='space-y-6.5'>
                    <h2 className='text-2xl font-semibold mb-4 text-white font-ibm-plex-sans'>
                      {title}
                    </h2>
                    <p className='text-paragraph text-[16px] font-normal leading-normal font-ibm-plex-sans'>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkFlowSection;
