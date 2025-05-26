import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const VirtualHealthAssistantOverview = () => {
  const keyFeatures = [
    'Virtual Consultation',
    'Custom Lifestyle Tips',
    'Health Rating With Description',
    'Exercise & Yoga Suggestions',
    'Personalized Diet Plans',
    'Holistic Healthcare',
  ];
  return (
    <section className='relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center space-y-6 sm:space-y-10'>
        <div className='mx-auto font-ibm-plex-sans grid grid-cols-1 lg:grid-cols-2 gap-[24px]'>
          <div className='space-y-5.5 font-ibm-plex-sans'>
            <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
              AI Virtual Health Assistant for Streamlined Health Assessments
            </h1>
            <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
              We developed an AI virtual health assistant with all the
              functionalities our client required and beyond. It uses advanced
              algorithms to analyze medical symptoms effectively, cross-check
              them with previous records, and offer a thorough report. The app
              is also trained to provide a holistic wellness approach with
              custom dietary and lifestyle recommendations. Additionally, it
              allows patients to connect with the experts conveniently.
            </p>
            <div className='space-y-7.5'>
              <h2 className='text-xl font-medium text-white font-ibm-plex-sans transition-colors duration-300'>
                Key Features
              </h2>
              <ul className='list-none grid grid-cols-1 sm:grid-cols-2 gap-[14px] list-inside text-white font-ibm-plex-sans transition-colors duration-300'>
                {keyFeatures?.map((feature, index) => (
                  <li
                    className='text-paragraph text-base sm:text-md md:text-lg leading-normal font-normal flex gap-[12px]'
                    key={index}
                  >
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Image
            src='/pages/about/achivement.svg'
            alt='achivement'
            width={693}
            height={393}
            className='w-full rounded-[30px] h-[326px] xl:h-[393px] object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualHealthAssistantOverview;
