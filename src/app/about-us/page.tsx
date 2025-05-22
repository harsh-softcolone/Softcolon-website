import AchievementSection from '@/components/pages/aboutus/achievements-section';
import IndustriesSection from '@/components/pages/aboutus/Industries-section';
import OurJourneySection from '@/components/pages/aboutus/our-journey-section';
import PhotoGallerySection from '@/components/pages/aboutus/photo-gallary-section';
import WorkFlowSection from '@/components/pages/aboutus/workflow-section';
import BlogsSection from '@/components/pages/general/blogs-section';
import ContactFormSection from '@/components/pages/general/contact-form-section';
import WhySoftcolon from '@/components/pages/home/why-softcolon';
import PageHeader from '@/components/shared/page-header';

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
      <ContactFormSection />
    </div>
  );
};

export default page;
