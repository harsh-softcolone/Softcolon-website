import WorkFlowSection from '@/components/pages/about-us/workflow-section';
import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import WhySoftcolon from '@/components/pages/home/why-softcolon';
import PageHeader from '@/components/shared/page-header';
import TechnologySection from '@/components/shared/technology-section';
import FeatureSection from '@/components/templates/service/feature-section';
import ServiceHeroSection from '@/components/templates/service/service-hero-section';
import { getServiceData } from '@/data/service-data';
import { ServiceData } from '@/interface';
import React from 'react';

interface props {
  serviceName: string;
}

const ServiceTemplate = ({ serviceName }: props) => {
  const serviceData: ServiceData = getServiceData(serviceName);
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title={serviceName ?? 'Service'}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Service', href: '/service' },
          { label: serviceName ?? 'Service Name' },
        ]}
      />
      <div className='space-y-[40px] md:space-y-[50px] lg:space-y-[100px]'>
        <ServiceHeroSection heroData={serviceData.hero} />
        <FeatureSection
          featureData={serviceData.features}
          headerClassName='flex justify-center flex-col items-center'
        />
        <TechnologySection
          data={serviceData.techStack}
          sectionClassName='!py-0'
          headerClassName='flex justify-center flex-col items-center'
        />
        <WorkFlowSection data={serviceData.workflow} />
        <WhySoftcolon
          data={serviceData.whySoftcolon}
          title={true}
          description='Clients leverage our up-to-date infrastructure and experienced resources.'
        />
        <BlogsSection blogsArray={serviceData.blogs} />
      </div>
      <GetInTouchSection />
    </div>
  );
};

export default ServiceTemplate;
