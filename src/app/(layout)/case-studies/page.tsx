import CaseStudyComponent from '@/components/pages/case-studies/case-study-component';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

const CaseStudy = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}
      <PageHeader
        title='Case Studies'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies' },
        ]}
      />
      <CaseStudyComponent />

      <GetInTouchSection />
    </div>
  );
};

export default CaseStudy;
