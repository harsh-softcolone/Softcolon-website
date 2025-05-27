import Footer from '@/components/footer/footer';
import React from 'react';
import GetInTouchForm from '@/components/forms/get-in-touch-form';

const GetInTouchSection = () => {
  return (
    <div className='bg-[#0D0D0D] pt-14.5 sm:pt-25 pb-4 sm:pb-14.5 space-y-10'>
      <GetInTouchForm />
      <Footer />
    </div>
  );
};

export default GetInTouchSection;
