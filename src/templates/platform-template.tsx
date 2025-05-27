import Footer from '@/components/footer/footer';
import PageHeader from '@/components/shared/page-header';
import FAQSection from '@/components/templates/platform/faq-section';
import FeatureSection from '@/components/templates/platform/feature-section';
import HighlightSection from '@/components/templates/platform/highlight-section';
import PlatformHeroSection from '@/components/templates/platform/platform-hero-section';
import { PlatformData } from '@/interface';
import React from 'react';

interface props {
  platformName: string;
  platformData: PlatformData;
}

const PlatformTemplate = ({ platformName, platformData }: props) => {
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title={platformName ?? 'Platform'}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: platformName ?? 'Platform Name' },
        ]}
      />
      <div className='space-y-[40px] md:space-y-[50px] lg:space-y-[100px]'>
        <PlatformHeroSection heroData={platformData.hero} />
        <HighlightSection highlightCardData={platformData.highlightCard} />
        <FeatureSection featureData={platformData.features} />
        <FAQSection faqData={platformData.faqData} />
      </div>
      <Footer />
    </div>
  );
};

export default PlatformTemplate;
