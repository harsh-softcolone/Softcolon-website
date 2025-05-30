import React from 'react';
import { CaseStudyDataTypes } from '@/interface';
import { cn } from '@/lib/utils';

interface Props {
  sectionClassName?: string;
  headerClassName?: string;
  data: CaseStudyDataTypes['techStack'];
}

const TechnologySection = ({
  data,
  headerClassName,
  sectionClassName,
}: Props) => {
  return (
    <section
      className={cn(
        'pt-10 sm:pt-[100px] relative overflow-hidden',
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
        <div className='max-w-[1389px] mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[24px] md:gap-y-[27px] gap-y-[20px] text-white'>
          {data.technologies.map((tech) => (
            <div
              key={tech.name}
              className='flex gap-5 lg:gap-8 items-center hover:bg-[#262626] transition-all duration-300 border border-[#435c69] rounded-full p-[11px] lg:px-5 lg:py-3'
            >
              <div className='bg-white w-[60px] h-[60px] lg:w-[84px] shrink-0 lg:h-[84px] rounded-full flex justify-center items-center'>
                {tech.icon && (
                  <tech.icon className='text-black text-2xl md:text-3xl lg:text-4xl' />
                )}
              </div>
              <p className='text-white text-xl lg:text-2xl font-semibold'>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
