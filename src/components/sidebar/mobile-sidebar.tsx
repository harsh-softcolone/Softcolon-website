'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronRight, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import SocialLinks from '../footer/social-links';
import { mobileMenuItems } from '@/lib/data';
import MobileMenuList from './mobile-menu-list';
import { NavigationSection } from '@/interface';

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  servicesData: NavigationSection[];
  platformsData: NavigationSection[];
  industryData: NavigationSection[];
}

export function MobileSidebar({
  open,
  onClose,
  servicesData,
  platformsData,
  industryData,
}: MobileSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSubmenu, setActiveSubmenu] = useState<
    NavigationSection[] | null
  >(null);
  const [activeMenuTitle, setActiveMenuTitle] = useState<string>('');

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const handleMenuItemClick = (
    sections: NavigationSection[],
    title: string,
  ) => {
    setActiveSubmenu(sections);
    setActiveMenuTitle(title);
  };

  const handleBackClick = () => {
    setActiveSubmenu(null);
    setActiveMenuTitle('');
  };

  const handleItemClick = (item: string) => {
    if (activeMenuTitle === 'Platforms') {
      router.push(`/platform/${item.toLowerCase()}`);
    } else if (activeMenuTitle === 'Industry') {
      router.push(`/industry/${item.toLowerCase()}`);
    }
    setActiveSubmenu(null);
    setActiveMenuTitle('');
    onClose();
  };

  const dataMap: Record<string, NavigationSection[]> = {
    Services: servicesData,
    Platforms: platformsData,
    Industry: industryData,
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed inset-0 z-[9999] h-screen bg-black/80 xl:hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={onClose}
        >
          <motion.div
            className='fixed !left-0 !top-0 z-50 h-[100dvh] w-full max-w-[400px] overflow-hidden nav-background'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative h-full w-full overflow-hidden font-roobert-400'>
              {/* Close button */}
              <button
                className='absolute top-5 right-4 z-10 cursor-pointer text-white hover:text-gray-300 transition-colors'
                onClick={onClose}
              >
                <X className='h-6 w-6 hover:rotate-45 transition-transform duration-300' />
              </button>

              {/* Logo */}
              {!activeSubmenu && (
                <div className='absolute top-6 left-5 z-10'>
                  <Link href='/'>
                    <Image
                      src='/logo.svg'
                      alt='logo'
                      width={120}
                      height={100}
                      className='w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[170px] transition-all duration-300'
                    />
                  </Link>
                </div>
              )}

              {/* Main Menu */}
              <AnimatePresence mode='wait'>
                {!activeSubmenu ? (
                  <motion.div
                    key='main-menu'
                    className='absolute flex size-full flex-col justify-between px-2 pt-20 pb-8'
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ul className='space-y-2'>
                      {mobileMenuItems.map((item) => (
                        <MobileMenuList
                          key={item.label}
                          item={{
                            ...item,
                            data: dataMap[item.onClickKey || ''],
                          }}
                          handleMenuItemClick={handleMenuItemClick}
                        />
                      ))}
                    </ul>
                    <div className='w-11/12 mx-auto space-y-4'>
                      <div className='flex items-center'>
                        <Mail size={20} className='text-white mr-2' />
                        <Link
                          aria-label='email'
                          href='mailto:contact@softcolon.com'
                          className='hover:text-gray-300 transition text-lg text-white'
                        >
                          contact@softcolon.com
                        </Link>
                      </div>
                      <SocialLinks />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key='submenu'
                    className='absolute h-full w-full overflow-y-auto pb-8 custom-scrollbar'
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {/* Back button and submenu title */}
                    <div className='pt-6 flex items-center px-5 pb-6'>
                      <button
                        className='flex cursor-pointer items-center text-white hover:text-gray-300 transition-colors'
                        onClick={handleBackClick}
                      >
                        <ArrowLeft className='mr-2 h-5 w-5' />
                        <span className='text-sm font-medium'>Back</span>
                      </button>
                    </div>

                    <h2 className='px-5 pb-4 text-xl font-semibold text-white font-ibm-plex-sans'>
                      {activeMenuTitle}
                    </h2>

                    <div className='px-5 space-y-6'>
                      {activeSubmenu.map((section, index) => (
                        <div key={index} className='space-y-4'>
                          <div className='flex items-center gap-3 text-white'>
                            {section.icon}
                            <h3 className='text-lg font-semibold text-white font-ibm-plex-sans'>
                              {section.title}
                            </h3>
                          </div>
                          <ul className='space-y-2'>
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <button
                                  onClick={() => handleItemClick(item)}
                                  className='group flex w-full cursor-pointer items-center justify-between rounded-lg hover:text-gray-500 px-4 py-1.5 text-left text-white transition-all duration-300'
                                >
                                  <span className='font-ibm-plex-sans text-[14px] font-medium'>
                                    {item}
                                  </span>
                                  <ChevronRight className='ml-auto h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100' />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
