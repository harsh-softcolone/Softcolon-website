import React from 'react';
import { CaseStudyDataTypes } from '@/interface';
import { cn } from '@/lib/utils';

interface Props {
  headerClassName?: string;
  sectionClassName?: string;
  data: CaseStudyDataTypes['businessBenefits'];
}

const UseCaseGridSection = ({
  data,
  sectionClassName,
  headerClassName,
}: Props) => {
  return (
    <section
      className={cn(
        'py-10 sm:py-[100px] relative overflow-hidden',
        sectionClassName,
      )}
    >
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center space-y-6 sm:space-y-10'>
        <div className={cn('space-y-2 mt-5', headerClassName)}>
          <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            {data.title}
          </h1>
          <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
            {data.subtitle}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-colors duration-300'>
          {data.benefits.map((value) => (
            <div
              key={value.title}
              className='p-5 md:p-7.5 rounded-[20px] left-shadow-gradient space-y-2 md:space-y-5 transition-all duration-300 transform hover:scale-[1.02] hover:ring-[1.5px] hover:ring-slate-400/40 hover:shadow-lg hover:shadow-slate-500/20'
            >
              <div className='w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-full bg-[#D9D9D9] flex justify-center items-center'>
                <value.icon className='text-[20px] md:text-[40px] transition-all duration-300' />
              </div>
              <h2 className='text-xl font-semibold text-white font-ibm-plex-sans transition-colors duration-300'>
                {value.title}
              </h2>
              <p className='text-paragraph text-[16px] font-normal leading-normal font-ibm-plex-sans transition-colors duration-300'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGridSection;
