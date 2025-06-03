'use client';
import { useState } from 'react';
import AnimatedSearchButton from '../buttons/animated-search-button';
import GradientConnectButton from '../buttons/gradient-connect-button';
import ContactUsModal from '../modals/contact-us-modal';

const HeaderActions = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='hidden items-center gap-2 xl:gap-4 xl:flex'>
      <AnimatedSearchButton />
      <GradientConnectButton handleClick={() => setIsContactModalOpen(true)} />
      <ContactUsModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};

export default HeaderActions;
