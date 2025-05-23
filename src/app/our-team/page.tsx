import ContactFormSection from '@/components/pages/general/contact-form-section';
import AboutTeamSection from '@/components/pages/our-team/about-team-section';
import TeamGallerySection from '@/components/pages/our-team/team-gallery-section';
import PageHeader from '@/components/shared/page-header';

const page = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}
      <PageHeader
        title='Our Team'
        breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutTeamSection />
      <TeamGallerySection />
      <ContactFormSection />
    </div>
  );
};

export default page;
