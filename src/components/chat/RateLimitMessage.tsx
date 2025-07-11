import { Mail, Phone } from 'lucide-react';
import ContactUsModal from '../modals/contact-us-modal';
import { useState } from 'react';

export const RateLimitMessage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg p-4'>
      <div className='space-y-3'>
        <p className='text-sm text-red-700 dark:text-red-300'>
          For more info connect to our sales team
        </p>

        <div className='flex flex-col sm:flex-row gap-2'>
          <button
            className='flex items-center gap-2 px-3 py-2 text-sm border border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900 rounded-md transition-colors'
            onClick={() => setIsContactModalOpen(true)}
          >
            <Mail size={16} />
            Contact Sales
          </button>

          <button
            className='flex items-center gap-2 px-3 py-2 text-sm border border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900 rounded-md transition-colors'
            onClick={() => window.open('tel:+91 9687119033', '_blank')}
          >
            <Phone size={16} />
            Call Us
          </button>
        </div>
      </div>
      <ContactUsModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};
