import Image from 'next/image';
import React from 'react';

const OurJourneySection = () => {
  const ourJourney = [
    {
      title: 'Our Vision',
      imageUrl: '/icons/industries/eyeIcon.svg',
      description:
        'Our goal is to become a global leader in AI-powered software development and IT consulting, focusing on quality, innovation, and talent acquisition to empower businesses in the digital era.',
    },
    {
      title: 'Our Mission',
      imageUrl: '/icons/industries/menuIcon.svg',
      description:
        'Softcolon specializes in transforming digital experiences into cost-effective, scalable, and intelligent solutions, delivering AI-driven technologies that enhance clients digital presence and competitive edge.',
    },
    {
      title: 'Our Values',
      imageUrl: '/icons/industries/diamond.svg',
      description:
        'We are committed to building long-term partnerships, empowering clients to streamline operations, enhance customer experiences, and achieve sustainable growth in an ever-evolving digital landscape.',
    },
  ];
  return (
    <section className='max-w-[1393px] w-11/12 xxl:w-full mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9.5'>
        <div className='space-y-6 sm:space-y-10 pt-2 sm:pt-7.5'>
          <h2 className='text-[28px] sm:text-[40px] font-normal font-hanuman text-white leading-tight transition-all duration-300'>
            Our Journey in Building <br className='hidden lg:block' />
            <span className='gradient-color'>Intelligent Solutions</span>
          </h2>
          <div className='space-y-5'>
            <p className='text-[16px] text-left text-paragraph font-normal leading-normal font-ibm-plex-sans'>
              Softcolon, a trusted software development and AI solutions company
              established in 4 Year, is a forward-thinking IT consulting firm
              recognized for delivering cutting-edge digital innovations. We
              empower businesses to scale and succeed through our expert team’s
              deep knowledge and hands-on experience in emerging technologies.
            </p>
            <p className='text-[16px] text-left text-paragraph font-normal leading-normal font-ibm-plex-sans'>
              Driven by a passion for technology and excellence, our team crafts
              intelligent, customized solutions that address real-world
              challenges. At Softcolon, we are committed to building long-term
              partnerships, empowering clients to streamline operations, enhance
              customer experiences, and achieve sustainable growth in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
        <div className='nav-background border-[1px] px-5 py-7.5 sm:px-7.5 border-[#31383C] rounded-4xl'>
          <div className=''>
            {ourJourney.map((item, index) => (
              <React.Fragment key={item?.title}>
                <div className='flex flex-col gap-[16px]'>
                  <div className='flex items-center gap-5'>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={100}
                      height={100}
                      className='w-7.5 h-7.5'
                    />
                    <h3 className='text-2xl font-bold font-ibm-plex-sans text-white leading-tight transition-all duration-300'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='text-[16px] text-left text-paragraph font-normal leading-normal font-ibm-plex-sans'>
                    {item.description}
                  </p>
                </div>
                {index !== ourJourney.length - 1 && (
                  <div className='h-[1px] bg-[#31383C] my-5' />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
