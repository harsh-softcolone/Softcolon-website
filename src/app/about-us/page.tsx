import AchievementSection from '@/components/pages/about-us/achievements-section';
import IndustriesSection from '@/components/pages/about-us/Industries-section';
import OurJourneySection from '@/components/pages/about-us/our-journey-section';
import WorkFlowSection from '@/components/pages/about-us/workflow-section';
import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchForm from '@/components/forms/get-in-touch-form';
import WhySoftcolon from '@/components/pages/home/why-softcolon';
import PageHeader from '@/components/shared/page-header';
import dynamic from 'next/dynamic';

const PhotoGallerySection = dynamic(
  () => import('@/components/pages/about-us/photo-gallary-section'),
);

const page = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}
      <PageHeader
        title='About Us'
        breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <OurJourneySection />
      <WorkFlowSection />
      <AchievementSection />
      <IndustriesSection />
      <PhotoGallerySection />
      <WhySoftcolon />
      <BlogsSection />
      <GetInTouchForm />
    </div>
  );
};

export default page;
