'use client';
import { PlatformButton } from '@/components/buttons/partner-section/platform-button';
import { PlatformButtonMobile } from '@/components/buttons/partner-section/platform-button-mobile';
import SectionHeader from '@/components/header/section-header';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useGsapScrollReveal } from '@/hooks/useGsapScrollReveal';
import { Platform } from '@/interface';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

// Define platform types
const platforms: Platform[] = [
  {
    id: 'web-applications',
    number: '01',
    title: 'Web Applications',
    description:
      'Modern web development with cutting-edge frontend and robust backend technologies for scalable applications.',
    sections: [
      {
        name: 'Frontend',
        icons: [
          { src: '/icons/frontend/react.svg', alt: 'React' },
          { src: '/icons/frontend/js.svg', alt: 'JavaScript' },
          { src: '/icons/frontend/angular.svg', alt: 'Angular' },
          { src: '/icons/frontend/ts.svg', alt: 'TypeScript' },
          { src: '/icons/frontend/vue.svg', alt: 'Vue.js' },
          { src: '/icons/frontend/next.svg', alt: 'Next.js' },
          { src: '/icons/frontend/nuxt.svg', alt: 'Nuxt.js' },
          { src: '/icons/frontend/vite.svg', alt: 'Vite' },
          { src: '/icons/frontend/bootstrap.svg', alt: 'Bootstrap' },
          { src: '/icons/frontend/tailwind.svg', alt: 'Tailwind CSS' },
        ],
      },
      {
        name: 'Backend',
        icons: [
          { src: '/icons/backend/express.svg', alt: 'Express.js' },
          { src: '/icons/backend/node.svg', alt: 'Node.js' },
          { src: '/icons/backend/laravel.svg', alt: 'Laravel' },
          { src: '/icons/frontend/ts.svg', alt: 'TypeScript' },
          { src: '/icons/backend/nest.svg', alt: 'Nest.js' },
          { src: '/icons/backend/java.svg', alt: 'Java' },
          { src: '/icons/backend/php.svg', alt: 'PHP' },
          { src: '/icons/backend/django.svg', alt: 'Django' },
          { src: '/icons/backend/fastapi.svg', alt: 'FastAPI' },
        ],
      },
    ],
  },
  {
    id: 'mobile-platform',
    number: '02',
    title: 'Mobile Platform',
    description: 'Mobile Platform',
    sections: [
      {
        name: 'Mobile Technologies',
        icons: [
          { src: '/icons/mobile/flutter.svg', alt: 'Flutter' },
          { src: '/icons/mobile/kotlin.svg', alt: 'Kotlin' },
          { src: '/icons/mobile/swift.svg', alt: 'Swift' },
          { src: '/icons/mobile/android.svg', alt: 'Android' },
          { src: '/icons/mobile/react-native.svg', alt: 'React Native' },
        ],
      },
    ],
  },
  {
    id: 'database',
    number: '03',
    title: 'Database',
    description: 'Database',
    sections: [
      {
        name: 'Database Technologies',
        icons: [
          { src: '/icons/database/dynamodb.svg', alt: 'DynamoDB' },
          { src: '/icons/database/postgre.svg', alt: 'PostgreSQL' },
          { src: '/icons/database/mongodb.svg', alt: 'MongoDB' },
          { src: '/icons/database/mariadb.svg', alt: 'MariaDB' },
          { src: '/icons/database/mysql.svg', alt: 'MySQL' },
          { src: '/icons/database/firebase.svg', alt: 'Firebase' },
          { src: '/icons/database/supabase.svg', alt: 'Supabase' },
          { src: '/icons/database/mssql.svg', alt: 'MSSQL' },
        ],
      },
    ],
  },
  {
    id: 'cloud-deployment',
    number: '04',
    title: 'Cloud & Deployment',
    description:
      'Cloud infrastructure and deployment solutions for reliable, scalable, and secure application hosting.',
    sections: [
      {
        name: 'Cloud',
        icons: [
          { src: '/icons/cloud/digitalocean.svg', alt: 'DigitalOcean' },
          { src: '/icons/cloud/heroku.svg', alt: 'Heroku' },
          { src: '/icons/cloud/azure.svg', alt: 'Azure' },
          { src: '/icons/cloud/aws.svg', alt: 'AWS' },
        ],
      },
      {
        name: 'Deployment',
        icons: [
          { src: '/icons/deployment/docker.svg', alt: 'Docker' },
          { src: '/icons/deployment/nginx.svg', alt: 'Nginx' },
          { src: '/icons/deployment/pm2.svg', alt: 'PM2' },
          { src: '/icons/deployment/kubernetes.svg', alt: 'Kubernetes' },
          { src: '/icons/deployment/terraform.svg', alt: 'Terraform' },
          { src: '/icons/deployment/caddy.svg', alt: 'Caddy' },
          { src: '/icons/deployment/dockerswarm.svg', alt: 'Docker Swarm' },
          { src: '/icons/deployment/lambda.svg', alt: 'Lambda' },
          { src: '/icons/deployment/elastic.svg', alt: 'Elastic' },
          { src: '/icons/deployment/ecs.svg', alt: 'ECS' },
        ],
      },
    ],
  },
  {
    id: 'ecommerce-cms',
    number: '05',
    title: 'E-commerce & CMS',
    description:
      'Powerful e-commerce platforms and content management systems for digital business solutions.',
    sections: [
      {
        name: 'E-commerce',
        icons: [
          { src: '/icons/e-commerce/webflow.svg', alt: 'Webflow' },
          { src: '/icons/e-commerce/shopify.svg', alt: 'Shopify' },
          { src: '/icons/e-commerce/magneto.svg', alt: 'Magento' },
          { src: '/icons/e-commerce/woocommerce.svg', alt: 'WooCommerce' },
        ],
      },
      {
        name: 'CMS',
        icons: [
          { src: '/icons/cms/webflow.svg', alt: 'Webflow' },
          { src: '/icons/cms/strapi.svg', alt: 'Strapi' },
          { src: '/icons/cms/wordpress.svg', alt: 'WordPress' },
          { src: '/icons/cms/directus.svg', alt: 'Directus' },
          { src: '/icons/cms/contentful.svg', alt: 'Contentful' },
          { src: '/icons/cms/dotcms.svg', alt: 'DotCMS' },
        ],
      },
    ],
  },
  {
    id: 'design',
    number: '06',
    title: 'Design',
    description: 'Design',
    sections: [
      {
        name: 'Design',
        icons: [
          { src: '/icons/design/figma.svg', alt: 'Figma' },
          { src: '/icons/design/framer.svg', alt: 'Framer' },
          { src: '/icons/design/sketch.svg', alt: 'Sketch' },
          { src: '/icons/design/creativeCloud.svg', alt: 'Creative Cloud' },
          { src: '/icons/design/photoshop.svg', alt: 'Photoshop' },
          { src: '/icons/design/illustrator.svg', alt: 'Illustrator' },
          { src: '/icons/design/premierePro.svg', alt: 'Premier Pro' },
          { src: '/icons/design/afterEffects.svg', alt: 'After Effects' },
        ],
      },
    ],
  },
  {
    id: 'qa',
    number: '07',
    title: 'QA',
    description: 'QA',
    sections: [
      {
        name: 'Testing & QA',
        icons: [
          { src: '/icons/qa/selenium.svg', alt: 'Selenium' },
          { src: '/icons/qa/jest.svg', alt: 'Jest' },
          { src: '/icons/qa/chai.svg', alt: 'Chai' },
          { src: '/icons/qa/mocha.svg', alt: 'Mocha' },
        ],
      },
    ],
  },
];

const PartnersSection = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>(platforms[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef as React.RefObject<HTMLElement>);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGsapScrollReveal(leftRef as React.RefObject<HTMLElement>, 'left', {
    start: 'top 85%',
  });
  useGsapScrollReveal(rightRef as React.RefObject<HTMLElement>, 'right', {
    start: 'top 85%',
  });

  return (
    <section
      ref={sectionRef}
      className='py-14.5 sm:py-32.5 relative overflow-hidden'
    >
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={20}
        height={20}
        className='absolute top-3/12 left-1/6 -translate-x-1/2 -translate-y-1/2 w-40 h-40 -z-10 hidden md:block'
      />
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={10}
        height={10}
        className='absolute top-4/12 left-[13%] -translate-x-1/2 -translate-y-1/2 w-15 h-15 -z-10 hidden md:block'
      />
      <Image
        src='/icons/sparkle.svg'
        alt='partners-bg'
        width={10}
        height={10}
        className='absolute top-6/12 right-[5%] -translate-x-1/2 -translate-y-1/2 w-18 h-18 -z-10 hidden lg:block'
      />
      <div className='max-w-[1396px] mx-auto space-y-5 px-4 md:px-8 flex flex-col items-center justify-center z-100'>
        <SectionHeader name='Platforms & Partners' />
        <h1 className='text-[28px] sm:text-4xl md:text-5xl text-center max-w-[800px] font-normal font-hanuman text-white leading-tight transition-all duration-300'>
          Smart Tech. Strong Stack.
          <br className='hidden sm:block' />
          <span className='gradient-color'>&nbsp;Built to Scale.</span>
        </h1>
        <p className='text-lg lg:text-xl text-center text-paragraph  max-w-[724px] font-normal leading-normal font-ibm-plex-sans'>
          From startups to enterprise solutions, we integrate cutting-edge
          platforms to deliver scalable, secure, and intelligent digital
          products.
        </p>
        <div className='w-full mt-16 flex flex-col md:flex-row gap-8 lg:gap-16'>
          {/* Mobile view - stacked layout */}
          <div className='md:hidden w-full space-y-4' ref={leftRef}>
            {platforms.map((platform) => (
              <PlatformButtonMobile
                key={platform.id}
                platform={platform}
                isActive={activePlatform.id === platform.id}
                onClick={() => setActivePlatform(platform)}
              />
            ))}
          </div>

          {/* Desktop view - side by side layout */}
          <div
            className='hidden md:flex md:flex-col md:w-1/2 space-y-4'
            ref={leftRef}
          >
            {platforms.map((platform) => (
              <PlatformButton
                key={platform.id}
                platform={platform}
                isActive={activePlatform.id === platform.id}
                onClick={() => setActivePlatform(platform)}
              />
            ))}
          </div>

          <div
            ref={rightRef}
            className='w-full md:w-1/2 bg-[#1A1A1A] bg-[url("https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center rounded-xl p-2 sm:p-7.5 bg-no-repeat'
          >
            <div className='space-y-6 border-[1px] backdrop-blur-[10px] border-[#383838] bg-[#ffffff1a] h-full rounded-[20px] px-4 py-10'>
              {/* Dynamic rendering based on number of sections */}
              {activePlatform.sections.length > 1 ? (
                <div className='space-y-6'>
                  {activePlatform.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className='text-white text-lg md:text-2xl font-medium mb-4 font-ibm-plex-sans'>
                        {section.name}
                      </h3>
                      <div className='grid grid-cols-5 gap-3'>
                        {section.icons.slice(0, 10).map((icon, index) => (
                          <div
                            key={index}
                            className='bg-white p-2 aspect-square rounded-md flex items-center justify-center'
                          >
                            <Image
                              src={icon.src || '/placeholder.svg'}
                              alt={icon.alt}
                              width={65}
                              height={65}
                              className='w-14 h-14 object-contain'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Single section display */
                <div className='space-y-4'>
                  <p className='text-white text-lg md:text-2xl font-ibm-plex-sans leading-relaxed'>
                    {activePlatform.description}
                  </p>

                  <div className='grid grid-cols-4 md:grid-cols-5 gap-3 mt-6'>
                    {activePlatform.sections[0]?.icons.map((icon, index) => (
                      <div
                        key={index}
                        className='bg-white p-3 aspect-square rounded-md flex items-center justify-center'
                      >
                        <Image
                          src={icon.src || '/placeholder.svg'}
                          alt={icon.alt}
                          width={65}
                          height={65}
                          className='w-14 h-14 object-contain'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
