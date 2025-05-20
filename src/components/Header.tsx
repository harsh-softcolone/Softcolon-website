'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GradientConnectButton from './buttons/gradient-connect-button';
import AnimatedSearchButton from './buttons/animated-search-button';
import { MegaNav } from './navigation/mega-nav';
import { Paintbrush, HeadphonesIcon } from 'lucide-react';
import { Bot, CloudCog, PanelTop, Smartphone } from 'lucide-react';
import { Code } from 'lucide-react';
import { NavItem } from '@/interface';

const platforms = [
  {
    icon: <PanelTop className='w-10 h-10' />,
    title: 'Web Applications',
    items: [
      'AI Agent',
      'LLM Powered Chatbots',
      'LLM Testing & Fine Tuning',
      'GPT Integration',
      'RAG (Data to LLMs)',
      'Custom LLM for Enterprises',
      'AI in Mobile Apps',
      'AI in Software',
    ],
  },
  {
    icon: <Smartphone className='w-10 h-10' />,
    title: 'Mobile Platforms',
    items: ['UI/UX Design', 'Branding', 'Figma Development'],
  },
  {
    icon: <CloudCog className='w-10 h-10' />,
    title: 'Cloud Solutions',
    items: [
      'Software Development',
      'Mobile App Development',
      'Web Development',
      'Backend Development',
    ],
  },
  {
    icon: <Code className='w-10 h-10' />,
    title: 'Hybrid App Development',
    items: ['Startup Consulting', 'MVP Development'],
  },
];

const services: NavItem[] = [
  {
    icon: <Bot className='w-10 h-10' />,
    title: 'Generative AI',
    items: [
      'AI Agent',
      'LLM Powered Chatbots',
      'LLM Testing & Fine Tuning',
      'GPT Integration',
      'RAG (Data to LLMs)',
      'Custom LLM for Enterprises',
      'AI in Mobile Apps',
      'AI in Software',
    ],
  },
  {
    icon: <Paintbrush className='w-10 h-10' />,
    title: 'Design',
    items: ['UI/UX Design', 'Branding', 'Figma Development'],
  },
  {
    icon: <Code className='w-10 h-10' />,
    title: 'Development Services',
    items: [
      'Software Development',
      'Mobile App Development',
      'Web Development',
      'Backend Development',
    ],
  },
  {
    icon: <HeadphonesIcon className='w-10 h-10' />,
    title: 'Support',
    items: ['Startup Consulting', 'MVP Development'],
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState<boolean>(false);

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const scrollThreshold = 250;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const desktopNavigation = [
    {
      label: 'services',
      href: '#',
      onClick: () => {
        setIsServicesOpen(!isServicesOpen);
        setIsPlatformOpen(false);
      },
    },
    {
      label: 'platform',
      href: '#',
      onClick: () => {
        setIsPlatformOpen(!isPlatformOpen);
        setIsServicesOpen(false);
      },
    },
    { label: 'industry', href: '#' },
    { label: 'our work', href: '#' },
    { label: 'about', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (scrollDifference > 0) {
        setIsVisible(false);
      } else if (scrollDifference < 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollThreshold]);

  return (
    <div className='relative'>
      <div
        className={`h-[60px] sm:h-[70px] w-11/12 z-10 backdrop-blur-[10px] fixed top-4 transition-transform duration-400 left-1/2 -translate-x-1/2 sm:top-6 max-w-[1440px] mx-auto flex items-center justify-between py-2.5 px-4 sm:px-7.5 bg-[#ffffff1a] rounded-full ${isVisible ? ' translate-y-0' : '-translate-y-[115%]'}`}
      >
        <div className='flex items-center gap-4'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={120}
            height={100}
            className='w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300'
          />
        </div>
        <ul className='items-center gap-6 xl:gap-10 hidden lg:flex'>
          {desktopNavigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={item.onClick}
                className='text-[18px] font-ibm-plex-sans leading-normal font-normal text-white capitalize transition-all duration-300 hover:text-gray-400 hover:scale-105'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden items-center gap-2 xl:gap-4 lg:flex'>
          <AnimatedSearchButton />
          <GradientConnectButton />
        </div>
        <div className='flex items-center gap-4 lg:hidden'>
          <AnimatedSearchButton />
          <button
            type='button'
            onClick={toggleMenu}
            className='flex flex-col justify-center items-center cursor-pointer'
          >
            <Image
              src='/icons/hamburgerMenuIcon.svg'
              alt='hamburger menu icon'
              width={24}
              height={24}
              className='w-10 h-10'
            />
          </button>
        </div>
      </div>

      <MegaNav
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        navItems={services}
      />
      <MegaNav
        isOpen={isPlatformOpen}
        onClose={() => setIsPlatformOpen(false)}
        navItems={platforms}
      />
    </div>
  );
};
