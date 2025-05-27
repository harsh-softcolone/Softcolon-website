import Image from 'next/image';
import React from 'react';
import ContentBlock from './content-block';

const CareerSectionGrid = () => {
  const contentBlocks = [
    {
      title: 'High Performance',
      description:
        'Our solutions are designed to seamlessly adapt to business growth, evolving market demands, and technological advancements while maintaining efficiency and performance',
    },
    {
      title: 'High Performance',
      description:
        'Our solutions are designed to seamlessly adapt to business growth, evolving market demands, and technological advancements while maintaining efficiency and performance',
    },
    {
      title: 'High Performance',
      description:
        'Our solutions are designed to seamlessly adapt to business growth, evolving market demands, and technological advancements while maintaining efficiency and performance',
    },
    {
      title: 'High Performance',
      description:
        'Our solutions are designed to seamlessly adapt to business growth, evolving market demands, and technological advancements while maintaining efficiency and performance',
    },
  ];
  return (
    <div className='max-w-[1392px] w-11/12 2xl:w-full rounded-[30px] mx-auto'>
      <div className='w-full space-y-5 relative mb-16'>
        <h1 className='text-2xl md:text-3xl lg:text-[36px] text-center font-bold font-ibm-plex-sans text-white leading-tight transition-all duration-300'>
          New Opportunities Await – Grow <br className='hidden md:block' /> Your
          Career with Us!
        </h1>
        <p className='text-sm lg:text-base font-normal leading-normal text-paragraph text-center'>
          Exciting career opportunities are on the horizon! We are expanding and
          looking for talented
        </p>
      </div>
      <div className='space-y-8 md:space-y-24'>
        {/* Grid one */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
            {contentBlocks.slice(0, 2).map((block, idx) => (
              <ContentBlock
                key={`left-${idx}`}
                title={block.title}
                description={block.description}
              />
            ))}
          </div>
          <Image
            src='/pages/career/teamwork.svg'
            alt='team work image'
            width={500}
            height={500}
            loading='lazy'
            className='w-11/12 mx-auto rounded-2xl h-full object-cover'
          />
          <div className='flex flex-col'>
            {contentBlocks.slice(2).map((block, idx) => (
              <ContentBlock
                key={`right-${idx}`}
                title={block.title}
                description={block.description}
              />
            ))}
          </div>
        </div>
        {/* Grid two */}
        <div className='mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
          <Image
            src='/pages/career/vrbox.svg'
            alt='achivement'
            width={693}
            height={393}
            className='w-full rounded-[30px] h-[326px] xl:h-[393px] object-cover'
          />
          <div className='space-y-5.5 font-ibm-plex-sans flex flex-col justify-center'>
            <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
              Transforming Healthcare with <br className='hidden md:block' /> AI
              Health Assistant
            </h1>
            <div className='space-y-7.5'>
              <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                Our AI health assistant app takes healthcare to the next level
                by analyzing patient health based on medical history, symptoms,
                and consultations. It also provides virtual consultations and
                well-being advice, making healthcare more accessible and
                smarter.
              </p>
              <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                Our AI health assistant app takes healthcare to the next level
                by analyzing patient health based on medical history, symptoms,
                and consultations. It also provides virtual consultations and
                well-being advice, making healthcare more accessible and
                smarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSectionGrid;
