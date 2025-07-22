import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import PageHeader from '@/components/shared/page-header';
import TechnologySection from '@/components/shared/technology-section';
import UseCaseGridSection from '@/components/shared/use-case-grid-section';
import IndustryHeroSection from '@/components/templates/industry/Industry-hero-section';
import InnovationHightLightSection from '@/components/templates/industry/Innovation-hight-light-section';
import { IndustryDataTypes, HashnodePost } from '@/interface';
import React from 'react';

interface Props {
  industryName: string;
  industryData: IndustryDataTypes;
  posts?: {
    posts: HashnodePost[];
    pageInfo: { hasNextPage: boolean; endCursor: string };
  };
}

const IndustryDetailTemplate = ({
  industryName,
  industryData,
  posts,
}: Props) => {
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title='Industry'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Industry', href: '#' },
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
        <BlogsSection blogsArray={posts?.posts.slice(0, 3)} />
      </div>

      <GetInTouchSection />
    </div>
  );
};

export default IndustryDetailTemplate;
