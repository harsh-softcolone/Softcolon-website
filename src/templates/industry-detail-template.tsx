import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import PageHeader from '@/components/shared/page-header';
import TechnologySection from '@/components/shared/technology-section';
import UseCaseGridSection from '@/components/shared/use-case-grid-section';
import IndustryHeroSection from '@/components/templates/industry/Industry-hero-section';
import InnovationHightLightSection from '@/components/templates/industry/Innovation-hight-light-section';
import { IndustryDataTypes } from '@/interface';
import React from 'react';

interface Props {
  industryName: string;
  industryData: IndustryDataTypes;
}

const IndustryDetailTemplate = ({ industryName, industryData }: Props) => {
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title='Industry'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Industry', href: '/industry' },
          { label: industryName },
        ]}
      />
      <div className='space-y-[40px] md:space-y-[50px] lg:space-y-[100px]'>
        <IndustryHeroSection heroData={industryData.hero} />
        <UseCaseGridSection
          sectionClassName='!py-0 !pb-4'
          data={industryData.useCaseGrid}
          headerClassName='flex justify-center flex-col items-center'
        />
        <IndustryHeroSection heroData={industryData.industryOverview} />
        <TechnologySection
          data={industryData.techStack}
          sectionClassName='!py-0'
          headerClassName='flex justify-center flex-col items-center'
        />
        <InnovationHightLightSection
          headerClassName='flex justify-center items-center flex-col'
          data={industryData.innovation}
        />
        <BlogsSection blogsArray={industryData.blogs} />
      </div>

      <GetInTouchSection />
    </div>
  );
};

export default IndustryDetailTemplate;
