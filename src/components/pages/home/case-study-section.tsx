import SectionHeader from '@/components/header/section-header';
import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import CaseStudyCard from '@/components/cards/case-study-card';
const CaseStudySection = () => {
  return (
    <section
      className='min-h-[100vh] relative overflow-hidden w-full'
      id='case-study-section'
    >
      {/* <AbstractBlobBackground
        className='top-4/5 -right-0 hidden lg:block'
        fill='#1FB3FD'
      /> */}
      <div className='max-w-[1400px] mx-auto space-y-5 px-4 md:px-8 flex flex-col items-center justify-center'>
        <SectionHeader name='Case studies' />
        <h1 className='text-[28px] sm:text-4xl md:text-[60px] text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          Accelerating Business Growth
          <br />
          Powered with&nbsp;
          <span className='gradient-color'>AI Solutions</span>
        </h1>
        <Link
          href='/'
          className='text-[#1BA1E3] font-medium uppercase text-[20px] hover:text-white transition-all duration-300 ease-in-out leading-normal font-ibm-plex-sans flex gap-2 items-center group relative'
        >
          See More Case Studies
          <ArrowRightIcon className='w-6 h-6 text-[#1BA1E3] group-hover:translate-x-1  group-hover:text-white transition-all duration-300 ease-in-out' />
          <span className='absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
        </Link>
        <div className='space-y-10 md:space-y-16 mt-10'>
          {/* First case study - Image on left */}
          <CaseStudyCard
            title='Revolutionizing Recruitment with Generative AI'
            description="Transforming hiring for India's leading job portal by auto-generating candidate profiles and delivering hyper-personalized job matches to seekers and recruiters."
            imageSrc='/images/case-study/case-study-1.svg'
            imageAlt='Recruitment AI visualization'
            readMoreLink='/'
            imageOnLeft={true}
          />

          {/* Second case study - Image on right */}
          <CaseStudyCard
            title='AI-Driven Supply Chain Optimization'
            description='Implemented predictive analytics for a global retailer, reducing stockouts by 30% and slashing logistics costs through real-time demand forecasting.'
            imageSrc='/images/case-study/case-study-3.svg'
            imageAlt='Supply chain visualization'
            readMoreLink='/'
            imageOnLeft={false}
          />

          {/* Third case study - Image on left */}
          <CaseStudyCard
            title='Smart Scheduling & Virtual Triage in Healthcare'
            description='Deployed an NLP-powered chatbot for a hospital network to automate appointment booking and patient triage, boosting operational efficiency.'
            imageSrc='/images/case-study/case-study-2.svg'
            imageAlt='Healthcare AI visualization'
            readMoreLink='/'
            imageOnLeft={true}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
