import Image from 'next/image';
import React from 'react';

const TrustSection = () => {
  return (
    <section className='relative overflow-hidden pb-14.5 sm:pb-22'>
      <div className='max-w-[1389px] w-11/12 xxl:w-full nav-background mx-auto p-5 md:p-14.5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20.5 rounded-4xl border-[1px] border-[#31383C]'>
        <div className='space-y-5.5'>
          <h1 className='text-3xl lg:text-[40px] text-left font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            More Than Service, <br className='hidden md:block' /> We Build
            Trust.
          </h1>

          <p className='text-sm lg:text-[20px] font-normal leading-normal text-[#c0c0c0]'>
            At Softcolon, success isn&apos;t just measured by results—it&apos;s
            defined by the relationships we nurture. With 7+ years of experience
            in creating meaningful, reliable connections, we believe that true
            innovation starts with trust. Our promise? To walk every step with
            you—openly, honestly, and always with purpose.
          </p>
        </div>

        <Image
          src='/images/values/trust.svg'
          alt='trust section'
          width={100}
          height={100}
          loading='lazy'
          className='w-full h-auto object-contain'
        />
      </div>
    </section>
  );
};

export default TrustSection;
