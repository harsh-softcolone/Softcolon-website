import React from 'react';
import UseCaseGridSection from '@/components/shared/use-case-grid-section';
import ProblemHighlightsSection from '@/components/pages/case-studies/details/problem-highlights-section';
import TechStackSection from '@/components/pages/case-studies/details/tech-stack-section';
import VirtualHealthAssistantOverview from '@/components/pages/case-studies/details/virtual-health-assistant-overview';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import PageHeader from '@/components/shared/page-header';
import { CaseStudyDataTypes } from '@/interface';

interface Props {
  caseStudyName: string;
  caseStudyData: CaseStudyDataTypes;
}

const CaseStudyTemplate = ({ caseStudyName, caseStudyData }: Props) => {
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title='Case Studies'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: caseStudyName },
        ]}
      />
      <ProblemHighlightsSection data={caseStudyData.problemHighlights} />
      <UseCaseGridSection data={caseStudyData.businessBenefits} />
      <VirtualHealthAssistantOverview data={caseStudyData.assistantOverview} />
      <TechStackSection data={caseStudyData.techStack} />
      <GetInTouchSection />
    </div>
  );
};

export default CaseStudyTemplate;
