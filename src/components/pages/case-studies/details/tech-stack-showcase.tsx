import Image from 'next/image';
import React from 'react';

const industriesData = [
  { image: '/pages/case-study/chatgpt.svg', alt: 'GPT-4o', name: 'GPT-4o' },
  { image: '/pages/case-study/dalle.svg', alt: 'DallE3', name: 'Dall E 3' },
  {
    image: '/pages/case-study/python.svg',
    alt: 'python',
    name: 'Python',
  },
  {
    image: '/pages/case-study/csharp.svg',
    alt: 'C++',
    name: 'C++',
  },
  {
    image: '/pages/case-study/rag.svg',
    alt: 'rag',
    name: 'RAG',
  },
  {
    image: '/pages/case-study/android.svg',
    alt: 'android',
    name: 'Android',
  },
  {
    image: '/pages/case-study/ios.svg',
    alt: 'ios',
    name: 'IOS',
  },
];

const TechStackShowcase = () => {
  return (
    <section className='pt-10 sm:pt-[100px] relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center space-y-6 sm:space-y-10'>
        <div className='space-y-2 mt-5'>
          <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            AI Tools & Techstack
          </h1>
          <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
            Advanced tech & tools behind our AI health assistant
          </p>
        </div>
        <div className='max-w-[950px] 2xl:max-w-[1389px] mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-[24px] md:gap-y-[27px] gap-y-[20px] text-white'>
          {industriesData.map((industries) => (
            <div
              key={industries.name}
              className='flex gap-5 lg:gap-8 items-center hover:bg-[#262626] transition-all duration-300 border border-[#435c69] rounded-full p-[11px] lg:px-5 lg:py-3'
            >
              <div className='bg-white w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] rounded-full flex justify-center items-center'>
                <Image
                  src={industries.image}
                  alt={industries.alt}
                  width={35}
                  height={40}
                  className='w-[40px] h-[40px] object-contain'
                />
              </div>
              <p className='text-white text-xl lg:text-2xl font-semibold'>
                {industries.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
