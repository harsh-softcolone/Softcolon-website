import CaseStudyComponent from '@/components/pages/case-studies/case-study-component';
import GetInTouchForm from '@/components/forms/get-in-touch-form';
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

      <GetInTouchForm />
    </div>
  );
};

export default CaseStudy;
