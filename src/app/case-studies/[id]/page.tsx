import BusinessBenefits from '@/components/pages/case-studies/details/business-benefits';
import FeatureHighlightGrid from '@/components/pages/case-studies/details/feature-highlight-grid';
import TechStackShowcase from '@/components/pages/case-studies/details/tech-stack-showcase';
import VirtualHealthAssistantOverview from '@/components/pages/case-studies/details/virtual-health-assistant-overview';
import GetInTouchForm from '@/components/forms/get-in-touch-form';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

const CaseStudyDetailPage = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}

      <PageHeader
        title='Case Studies'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Health care' },
        ]}
      />
      <FeatureHighlightGrid />
      <BusinessBenefits />
      <VirtualHealthAssistantOverview />
      <TechStackShowcase />
      <GetInTouchForm />
    </div>
  );
};

export default CaseStudyDetailPage;
