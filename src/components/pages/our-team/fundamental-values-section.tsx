import Image from 'next/image';
import React from 'react';

const FundamentalValuesSection = () => {
  const fundamentalValues = [
    {
      title: 'Innovation',
      description: 'Embracing creativity and new ideas to drive progress.',
      image: '/images/values/innovation.svg',
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve collective success.',
      image: '/images/values/collaboration.svg',
    },
    {
      title: 'Integrity',
      description: 'Acting with honesty and transparency in all we do.',
      image: '/images/values/integrity.svg',
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we create.',
      image: '/images/values/excellence.svg',
    },
    {
      title: 'Customer Focus',
      description:
        'Putting our clients&apos; needs and satisfaction at the forefront.',
      image: '/images/values/customer-focus.svg',
    },
    {
      title: 'Adaptability',
      description:
        'Staying flexible and responsive to change and new challenges.',
      image: '/images/values/adaptability.svg',
    },
    {
      title: 'Growth mindset',
      description: 'Working together to achieve collective success.',
      image: '/images/values/growth-mindset.svg',
    },
    {
      title: 'Team growth',
      description: 'We foster mutual success and professional growth.',
      image: '/images/values/team-growth.svg',
    },
  ];
  return (
    <section className='pb-14.5 sm:pb-22 relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center space-y-6 sm:space-y-10'>
        <div className='space-y-2 mt-5'>
          <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            Our fundamental Values
          </h1>
          <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
            Values That Shape Our Journey
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {fundamentalValues.map((value) => (
            <div
              key={value.title}
              className='p-5 md:p-7.5 rounded-[20px] left-shadow-gradient space-y-2 md:space-y-5 transition-all duration-300 transform hover:scale-[1.02] hover:ring-[1.5px] hover:ring-slate-400/40 hover:shadow-lg hover:shadow-slate-500/20'
            >
              <div className='w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'>
                <Image
                  src={value?.image}
                  alt={value?.title}
                  width={24}
                  height={24}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
              <h2 className='text-xl font-semibold text-white font-ibm-plex-sans transition-colors duration-300'>
                {value?.title}
              </h2>
              <p className='text-paragraph text-[16px] font-normal leading-normal font-ibm-plex-sans transition-colors duration-300'>
                {value?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundamentalValuesSection;
