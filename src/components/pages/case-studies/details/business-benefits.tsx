import Image from 'next/image';
import React from 'react';

const BusinessBenefits = () => {
  const buisnessBenefits = [
    {
      title: 'Patient Oriented Healthcare',
      description:
        'The app simplifies medical jargon from reports into easy-to-understand insights, along with simple habit changes to improve health',
      image: '/pages/case-study/heartbeat.svg',
    },
    {
      title: 'AI Consultation',
      description:
        'The app offers AI-based consultation for general user queries, and symptom check-ups for conveniently accessible, accurate information',
      image: '/pages/case-study/ai-consultation.svg',
    },
    {
      title: 'AI Assistant',
      description:
        'Get an AI assistant specifically trained to help everyone, including those who lack tech expertise, navigate through app effortlessly',
      image: '/pages/case-study/ai-assistant.svg',
    },
    {
      title: 'Personalized Feed',
      description:
        'Benefit from personalized recommendations, articles, and doctor’s posts online on the feed to help users with their medical conditions',
      image: '/pages/case-study/personalized-feed.svg',
    },
  ];
  return (
    <section className='py-10 sm:py-[100px] relative overflow-hidden'>
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
          {buisnessBenefits.map((value) => (
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

export default BusinessBenefits;
