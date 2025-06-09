import Footer from '@/components/footer/footer';
import React from 'react';
import GetInTouchForm from '@/components/forms/get-in-touch-form';
import { cn } from '@/lib/utils';

const GetInTouchSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn('bg-[#0D0D0D] pb-4 sm:pb-14.5 space-y-10', className)}>
      <GetInTouchForm />
      <Footer />
    </div>
  );
};

export default GetInTouchSection;
