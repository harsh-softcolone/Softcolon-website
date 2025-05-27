import ContactUsForm from '@/components/forms/contact-us-form';
import SectionHeader from '@/components/header/section-header';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ContactUsSection = () => {
  return (
    <section className='pb-14.5 sm:pb-22 relative overflow-hidden'>
      <div className='max-w-[1391px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-24'>
          <div className='space-y-9'>
            <div className='space-y-3'>
              <SectionHeader name='Contact us' className='mt-5 sm:mt-0' />
              <h1 className='text-2xl md:text-3xl lg:text-[36px] max-w-[578px] text-left font-bold font-ibm-plex-sans text-white leading-tight transition-all duration-300'>
                Let&apos;s Start Working Together. Get in Touch with Us!
              </h1>
              <p className='text-sm lg:text-base font-normal leading-normal text-white'>
                Get in touch to discuss your employee wellbeing needs today.
                Please give us a call, drop us an email.
              </p>
            </div>
            <div className='space-y-5'>
              {/* Address */}
              <Link
                href='https://maps.google.com/?q=Kasturi+Pride,+326,+near+Vishala+Supreme,+Nikol,+Ahmedabad,+Gujarat+382350'
                className='flex items-center gap-3 group cursor-pointer relative w-fit'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Map'
              >
                <div className='absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                <div className='w-12.5 h-12.5 bg-white rounded-full address-icon-bg flex items-center justify-center border-[1px] border-solid border-[#292929] group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <div className='space-y-5'>
                  <address className='text-white font-ibm-plex-sans text-lg font-normal leading-normal'>
                    Kasturi Pride, 326, near Vishala Supreme,{' '}
                    <br className='hidden md:block' /> Nikol, Ahmedabad, Gujarat
                    382350
                  </address>
                </div>
              </Link>
              {/* Send Mail */}
              <Link
                href='mailto:contact@softcolon.com'
                className='flex items-center gap-3 group cursor-pointer relative w-fit'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Map'
              >
                <div className='absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                <div className='w-12.5 h-12.5 bg-white rounded-full address-icon-bg flex items-center justify-center border-[1px] border-solid border-[#292929] group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <div className=''>
                  <h4 className='text-paragraph text-[16px] font-normal leading-normal font-ibm-plex-sans'>
                    Send Mail
                  </h4>
                  <p className='text-white text-lg font-medium leading-normal font-ibm-plex-sans'>
                    contact@softcolon.com
                  </p>
                </div>
              </Link>
              {/* Give a Call */}
              <Link
                href='tel:+91 9687119033'
                className='flex items-center gap-3 group cursor-pointer relative w-fit'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Map'
              >
                <div className='absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                <div className='w-12.5 h-12.5 bg-white rounded-full address-icon-bg flex items-center justify-center border-[1px] border-solid border-[#292929] group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <div className=''>
                  <h4 className='text-paragraph text-[16px] font-normal leading-normal font-ibm-plex-sans'>
                    Give us a Call
                  </h4>
                  <p className='text-white text-lg font-medium leading-normal font-ibm-plex-sans'>
                    +91 9687119033
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
