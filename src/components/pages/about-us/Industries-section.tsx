import SectionHeader from '@/components/header/section-header';
import Image from 'next/image';
import React from 'react';

const industriesData = [
  { image: '/icons/industries/fintech.svg', alt: 'FinTech', name: 'FinTech' },
  { image: '/icons/industries/edtech.svg', alt: 'EdTech', name: 'EdTech' },
  {
    image: '/icons/industries/food.svg',
    alt: 'Food',
    name: 'Food & Beverages',
  },
  {
    image: '/icons/industries/healthcare.svg',
    alt: 'Healthcare',
    name: 'Healthcare',
  },
  {
    image: '/icons/industries/automotive.svg',
    alt: 'Automotive',
    name: 'Automotive',
  },
  {
    image: '/icons/industries/logistics.svg',
    alt: 'Logistics',
    name: 'Logistics',
  },
  {
    image: '/icons/industries/ecommerce.svg',
    alt: 'E-commerce',
    name: 'E-commerce',
  },
  {
    image: '/icons/industries/real-estate.svg',
    alt: 'Real Estate',
    name: 'Real Estate',
  },
  {
    image: '/icons/industries/hr-tech.svg',
    alt: 'HR Tech',
    name: 'HR Tech',
  },
];

const IndustriesSection = () => {
  return (
    <section className='py-14.5 sm:py-22 relative overflow-hidden'>
      <div className='max-w-[1156px] mx-auto w-11/12 xl:w-full flex-col justify-center items-center'>
        <SectionHeader name='Industries' className='mx-auto' />
        <div className='space-y-7.5 xl:space-y-15 mt-5'>
          <h1 className='text-3xl lg:text-[60px] text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            FinTech to FoodTech, we build AI- <br className='hidden lg:block' />
            driven solutions{' '}
          </h1>
          <div className='max-w-[1389px] mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[24px] md:gap-y-[27px] gap-y-[20px] text-white'>
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
      </div>
    </section>
  );
};

export default IndustriesSection;
