'use client';
import { useEffect, useState } from 'react';

import { Logo } from './logo';
import HeaderActions from './header-actions';
import MobileMenuButton from './hamburger-menu';
import DesktopNavigation from './desktop-navigation';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const scrollThreshold = 10;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (scrollDifference > 0) {
        setIsVisible(false);
      }
      // else if (scrollDifference < 0) {
      //   setIsVisible(true);
      // }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollThreshold]);

  return (
    <div className='relative'>
      <div
        className={`w-11/12 z-100 backdrop-blur-[10px] fixed top-4 transition-all duration-400 left-1/2 -translate-x-1/2 sm:top-6 mx-auto max-w-[1440px] flex items-center justify-between h-[70px] px-4 sm:px-7.5 bg-[#ffffff1a] rounded-full ${isVisible ? ' translate-y-0' : '-translate-y-[20%]'}`}
      >
        <Logo />
        <DesktopNavigation />
        <HeaderActions />
        <MobileMenuButton toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
