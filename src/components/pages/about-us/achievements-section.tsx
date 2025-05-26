import SectionHeader from '@/components/header/section-header';
import Image from 'next/image';
import React from 'react';

const AchievementSection = () => {
  return (
    <section className='py-14.5 sm:py-22 relative overflow-hidden'>
      <div className='max-w-[1389px] mx-auto w-11/12 xxl:w-full flex-col justify-center items-center'>
        <SectionHeader name='Achievements' className='mx-auto' />
        <div className='space-y-7.5 xl:space-y-16 mt-5'>
          <h1 className='text-3xl lg:text-[60px] text-center font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            What Sets Us Apart in <br className='hidden lg:block' />
            the AI Arena
          </h1>
          <div className='mx-auto font-ibm-plex-sans grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[77px]'>
            <Image
              src='pages/about/achivement.svg'
              alt='achivement'
              width={693}
              height={393}
              className='w-full rounded-2xl h-[326px] xl:h-[393px] object-cover'
            />
            <div className='space-y-6'>
              <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                At Softcolon, achievements aren’t just numbers — they’re
                milestones in our mission to transform how businesses leverage
                artificial intelligence. We empower startups and enterprises
                alike, turning bold ideas into intelligent, scalable solutions.
                Every project we deliver anticipates future needs, building
                smarter, more connected systems that evolve with our clients.
              </p>
              <p className='text-sm lg:text-base font-normal leading-[21px] text-[#c0c0c0]'>
                What sets Softcolon apart is more than just our technical
                expertise — it&apos;s our passion for creating meaningful AI
                experiences. We&apos;re not just coders or consultants;
                we&apos;re strategic partners, collaborators, and innovators.
                Every project is an opportunity to push the boundaries of
                what&apos;s possible, blending creativity, precision, and
                human-centered design.{' '}
              </p>
              <ul className='text-white list-disc text-base lg:text-xl font-normal leading-[40px] pl-5'>
                <li>Top Leading AI Agency</li>
                <li>Providing Impactful AI Solutions</li>
                <li>Creative minded AI Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
