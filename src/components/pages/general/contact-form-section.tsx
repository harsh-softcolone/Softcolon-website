import ContactForm from '@/components/footer/contact-form';
import Footer from '@/components/footer/footer';
import React from 'react';

const ContactFormSection = () => {
  return (
    <div className='bg-[#0D0D0D] py-14.5 sm:py-25'>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactFormSection;
