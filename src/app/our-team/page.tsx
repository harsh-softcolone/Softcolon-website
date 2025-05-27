import GetInTouchForm from '@/components/forms/get-in-touch-form';
import AboutTeamSection from '@/components/pages/our-team/about-team-section';
import FundamentalValuesSection from '@/components/pages/our-team/fundamental-values-section';
import TeamGallerySection from '@/components/pages/our-team/team-gallery-section';
import TrustSection from '@/components/pages/our-team/tust-section';
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
      <FundamentalValuesSection />
      <TrustSection />
      <GetInTouchForm />
    </div>
  );
};

export default page;
