import BlogsSection from '@/components/pages/general/blogs-section';
import ContactFormSection from '@/components/pages/general/contact-form-section';
import WhySoftcolon from '@/components/pages/home/why-softcolon';
import React from 'react';
import PageHeader from '@/components/shared/page-header';

const page = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}
      <PageHeader
        title='About Us'
        breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <WhySoftcolon />
      <BlogsSection />
      <ContactFormSection />
    </div>
  );
};

export default page;
