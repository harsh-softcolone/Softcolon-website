import ContactForm from '@/components/footer/contact-form';
import Footer from '@/components/footer/footer';
import React from 'react';

const ContactFormSection = () => {
  return (
    <div className='bg-[#0D0D0D] pt-14.5 sm:pt-25 pb-4 sm:pb-14.5 space-y-10'>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactFormSection;
