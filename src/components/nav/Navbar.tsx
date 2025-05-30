'use client';
import { useEffect, useState, useCallback } from 'react';

import { Logo } from './logo';
import HeaderActions from './header-actions';
import MobileMenuButton from './hamburger-menu';
import DesktopNavigation from './desktop-navigation';
import { MobileSidebar } from '../sidebar/mobile-sidebar';
import { servicesData, platformsData, industryData } from '@/lib/data';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const scrollThreshold = 10;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < scrollThreshold) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    }
    // Uncomment if you want navbar to show when scrolling up
    // else if (currentScrollY < lastScrollY) {
    //   setIsVisible(true);
    // }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className='relative'>
      <div
        className={`w-11/12 z-100 backdrop-blur-[10px] fixed top-4 transition-all duration-400 left-1/2 -translate-x-1/2 sm:top-6 mx-auto max-w-[1440px] flex items-center justify-between h-[70px] px-4 sm:px-7.5 bg-[#ffffff1a] rounded-full ${
          isVisible ? 'translate-y-0' : '-translate-y-[20%]'
        }`}
      >
        <Logo />
        <DesktopNavigation />
        <HeaderActions />
        <MobileMenuButton toggleMenu={toggleMenu} />
      </div>
      <MobileSidebar
        open={isMenuOpen}
        onClose={closeMenu}
        servicesData={servicesData}
        platformsData={platformsData}
        industryData={industryData}
      />
    </div>
  );
};
