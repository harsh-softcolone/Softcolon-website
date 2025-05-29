'use client';
import { useState } from 'react';
import { industryData, platformsData, servicesData } from '@/lib/data';
import { NavigationMegaMenu } from './navigation-mega-menu';
import Link from 'next/link';

const DesktopNavigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const desktopNavigationItems = [
    { label: 'About', href: 'about-us' },
    { label: 'Career', href: 'career' },
  ];

  return (
    <div className='hidden lg:flex gap-10 items-center'>
      <NavigationMegaMenu
        menuTitle='Services'
        navigationSections={servicesData}
        isActive={activeMenu === 'services'}
        onMouseEnter={() => handleMenuEnter('services')}
        onMouseLeave={handleMenuLeave}
        onNavigationItemClick={(item) => {
          console.log('Navigation item clicked:', item);
          setActiveMenu(null);
        }}
      />
      <NavigationMegaMenu
        menuTitle='Platforms'
        navigationSections={platformsData}
        isActive={activeMenu === 'platforms'}
        onMouseEnter={() => handleMenuEnter('platforms')}
        onMouseLeave={handleMenuLeave}
        onNavigationItemClick={(item) => {
          console.log('Navigation item clicked:', item);
          setActiveMenu(null);
        }}
      />
      <NavigationMegaMenu
        menuTitle='Industry'
        navigationSections={industryData}
        isActive={activeMenu === 'industry'}
        onMouseEnter={() => handleMenuEnter('industry')}
        onMouseLeave={handleMenuLeave}
        onNavigationItemClick={(item) => {
          console.log('Navigation item clicked:', item);
          setActiveMenu(null);
        }}
      />
      {desktopNavigationItems.map((item) => (
        <Link
          key={item.label}
          aria-label={`${item.label} link`}
          href={item.href}
          className='text-[18px] cursor-pointer font-ibm-plex-sans leading-normal font-normal text-white capitalize transition-all duration-300 hover:text-gray-400 hover:scale-105'
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavigation;
