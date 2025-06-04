'use client';

import { Badge } from '@/components/ui/badge';
import { caseStudiesDummyData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const CaseStudyComponent = () => {
  const router = useRouter();
  return (
    <div className='max-w-[1392px] cursor-pointer w-11/12 2xl:w-full rounded-[30px] mx-auto font-ibm-plex-sans grid grid-cols-1 md:grid-cols-2 gap-6'>
      {caseStudiesDummyData.map((caseStudy, index) => (
        <div
          key={index}
          onClick={() => router.push(`/case-studies/${caseStudy.title}`)}
          className='border-[1px] border-[#464646] border-solid p-5 rounded-[20px] font-ibm-plex-sans space-y-6 group hover:border-gray-500 transition-all duration-300'
        >
          <div className='relative overflow-hidden rounded-2xl'>
            <div className='relative aspect-video w-full h-[295px] overflow-hidden'>
              <Image
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                width={693}
                height={295}
                loading='lazy'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
              {/* Overlay that appears on hover */}
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center'></div>
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-paragraph text-[16px] leading-normal'>
              {caseStudy.category}
            </p>
            <h4 className='text-[#ffffff] text-2xl font-medium leading-normal tracking-normal line-clamp-1'>
              {caseStudy.title}
            </h4>
            <p className='text-paragraph font-medium text-[16px] leading-normal line-clamp-2'>
              {caseStudy.description}
            </p>
          </div>
          <div className='flex gap-3.5'>
            {caseStudy.badges.map((badge) => (
              <Badge
                key={badge}
                className='bg-[#292929] px-2 sm:px-3 py-1.5 rounded-full text-[#ffffff] text-sm font-medium leading-normal'
              >
                {badge}
              </Badge>
            ))}
          </div>
          <Link
            aria-label={`Read more about the Case Study: ${caseStudy.title}`}
            href={`/case-studies/${caseStudy.title}`}
            className='flex relative items-center gap-2 text-[#1BA1E3] font-medium text-[16px] sm:text-[18px] hover:text-white transition-all duration-300 group w-fit'
          >
            READ MORE
            <ArrowRight className='w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-300' />
            <span className='absolute -bottom-0 left-0 w-[84%] h-[1px] bg-[#1BA1E3] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-white'></span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyComponent;
