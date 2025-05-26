import Footer from '@/components/footer/footer';
import ContactUsSection from '@/components/pages/contact-us/contact-us-section';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

const ContactUsPage = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <PageHeader
        title='Contact Us'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
