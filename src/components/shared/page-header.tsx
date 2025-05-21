import React from 'react';
import PageBreadCrumbSection from '../header/page-bread-crumb-section';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  breadcrumbItems: { label: string; href?: string }[];
}

const PageHeader = ({ title, breadcrumbItems }: PageHeaderProps) => {
  return (
    <div className='relative overflow-x-hidden flex items-center justify-center'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 gap-5'>
        <h1 className='text-white text-6xl font-bold leading-normal font-hanuman'>
          {title}
        </h1>
        <PageBreadCrumbSection items={breadcrumbItems} />
      </div>
      <Image
        src='pages/about/keyboardBanner.svg'
        alt='about us banner'
        width={1920}
        height={1080}
        className='w-full h-full object-cover max-h-[490px]'
      />
      <div className='absolute top-0 left-0 w-full h-full about-us-banner-drop-shadow' />
    </div>
  );
};

export default PageHeader;
