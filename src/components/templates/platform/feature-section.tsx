import { PlatformData } from '@/interface';
import Image from 'next/image';
import React from 'react';

interface Props {
  featureData: PlatformData['features'];
}

const FeatureSection = ({ featureData }: Props) => {
  return (
    <section className='mx-auto max-w-[1392px] px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        {/* Hero Image Section */}
        <div className='w-full h-full flex flex-col gap-6'>
          <div className='relative w-full max-h-[447px]'>
            <Image
              src={featureData.heroImage1 || '/placeholder.svg'}
              alt='Platform Hero'
              width={500}
              height={447}
              loading='lazy'
              className='object-cover rounded-2xl w-full h-full'
            />
          </div>
          <div className='relative w-full grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_228px] gap-6'>
            <Image
              src={featureData.heroImage2 || '/placeholder.svg'}
              alt='hero image 2'
              width={476}
              height={247}
              loading='lazy'
              className='object-cover rounded-2xl w-full h-full'
            />
            <Image
              src={featureData.heroImage3 || '/placeholder.svg'}
              alt='hero image 3'
              width={228}
              height={247}
              loading='lazy'
              className='object-cover rounded-2xl w-full max-w-[228px] h-full'
            />
          </div>
        </div>

        {/* Features Content Section */}
        <div className='order-1 lg:order-2 space-y-8 h-full'>
          <h2 className='text-3xl sm:text-4xl lg:text-[40px] max-w-[400px] font-semibold text-white leading-normal font-ibm-plex-sans'>
            {featureData.title}
          </h2>

          <div className='space-y-7.5'>
            {featureData.featureList.map((feature) => (
              <div key={feature.id} className='flex gap-4 group'>
                {/* Icon Container */}
                <div className='flex-shrink-0'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#D9D9D9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                    <feature.icon className='text-xl sm:text-2xl text-black' />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 space-y-2'>
                  <h3 className='text-lg sm:text-2xl font-semibold text-white leading-normal'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 text-sm sm:text-lg leading-normal md:leading-[24px]'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
