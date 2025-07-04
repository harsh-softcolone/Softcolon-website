'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronRight, ChevronDown, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import SocialLinks from '../footer/social-links';
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
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const handleMenuToggle = (menuKey: string) => {
    setExpandedMenu(expandedMenu === menuKey ? null : menuKey);
    setExpandedSection(null); // Reset section when changing main menu
  };

  const handleSectionToggle = (sectionKey: string) => {
    setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
  };

  const handleItemClick = (item: string, menuType: string) => {
    if (menuType === 'Platforms') {
      router.push(`/platform/${item.toLowerCase()}`);
    } else if (menuType === 'Industry') {
      router.push(`/industry/${item.toLowerCase()}`);
    } else if (menuType === 'Services') {
      router.push(`/service/${item.toLowerCase()}`);
    }
    onClose();
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
                <X className='h-8 w-8 hover:rotate-45 transition-transform duration-300' />
              </button>

              {/* Logo */}
              <div className='absolute top-6 left-5 z-10'>
                <Link href='/'>
                  <Image
                    src='/logo.svg'
                    alt='logo'
                    width={120}
                    height={100}
                    className='w-[150px] h-auto md:w-[180px] lg:w-[200px] transition-all duration-300'
                  />
                </Link>
              </div>

              {/* Main Menu with Accordion */}
              <div className='flex size-full flex-col justify-between px-2 pt-20 pb-8 overflow-y-auto custom-scrollbar'>
                <div className='space-y-2'>
                  {/* About us */}
                  <div className='px-4 py-3'>
                    <Link
                      href='/about-us'
                      className='text-white text-lg font-medium hover:text-gray-300 transition-colors'
                      onClick={onClose}
                    >
                      About us
                    </Link>
                  </div>

                  {/* Contact us */}
                  <div className='px-4 py-3'>
                    <Link
                      href='/contact-us'
                      className='text-white text-lg font-medium hover:text-gray-300 transition-colors'
                      onClick={onClose}
                    >
                      Contact us
                    </Link>
                  </div>

                  {/* Services with dropdown */}
                  <div>
                    <button
                      className='w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:text-gray-300 transition-colors'
                      onClick={() => handleMenuToggle('Services')}
                    >
                      Services
                      {expandedMenu === 'Services' ? (
                        <ChevronDown className='h-5 w-5 transition-transform' />
                      ) : (
                        <ChevronRight className='h-5 w-5 transition-transform' />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedMenu === 'Services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className='overflow-hidden'
                        >
                          <div className='px-4 py-2 space-y-2'>
                            {servicesData.map((section, index) => (
                              <div key={index} className='space-y-1'>
                                {/* Section Title Button */}
                                <button
                                  className='w-full flex items-center justify-between px-3 py-2 text-white text-base font-medium hover:text-gray-300 transition-colors bg-gray-800/50 rounded-md'
                                  onClick={() =>
                                    handleSectionToggle(`services-${index}`)
                                  }
                                >
                                  <div className='flex items-center gap-3'>
                                    {section.icon}
                                    <span className='font-ibm-plex-sans'>
                                      {section.title}
                                    </span>
                                  </div>
                                  {expandedSection === `services-${index}` ? (
                                    <ChevronDown className='h-4 w-4 transition-transform' />
                                  ) : (
                                    <ChevronRight className='h-4 w-4 transition-transform' />
                                  )}
                                </button>

                                {/* Section Items */}
                                <AnimatePresence>
                                  {expandedSection === `services-${index}` && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                      }}
                                      className='overflow-hidden'
                                    >
                                      <div className='ml-8 space-y-1 py-1'>
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <button
                                              key={itemIndex}
                                              onClick={() =>
                                                handleItemClick(
                                                  item,
                                                  'Services',
                                                )
                                              }
                                              className='block w-full text-left text-gray-300 text-sm hover:text-white transition-colors py-1.5 px-2 rounded hover:bg-gray-800/30'
                                            >
                                              {item}
                                            </button>
                                          ),
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Platforms with dropdown */}
                  <div>
                    <button
                      className='w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:text-gray-300 transition-colors'
                      onClick={() => handleMenuToggle('Platforms')}
                    >
                      Platforms
                      {expandedMenu === 'Platforms' ? (
                        <ChevronDown className='h-5 w-5 transition-transform' />
                      ) : (
                        <ChevronRight className='h-5 w-5 transition-transform' />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedMenu === 'Platforms' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className='overflow-hidden'
                        >
                          <div className='px-4 py-2 space-y-2'>
                            {platformsData.map((section, index) => (
                              <div key={index} className='space-y-1'>
                                {/* Section Title Button */}
                                <button
                                  className='w-full flex items-center justify-between px-3 py-2 text-white text-base font-medium hover:text-gray-300 transition-colors bg-gray-800/50 rounded-md'
                                  onClick={() =>
                                    handleSectionToggle(`platforms-${index}`)
                                  }
                                >
                                  <div className='flex items-center gap-3'>
                                    {section.icon}
                                    <span className='font-ibm-plex-sans'>
                                      {section.title}
                                    </span>
                                  </div>
                                  {expandedSection === `platforms-${index}` ? (
                                    <ChevronDown className='h-4 w-4 transition-transform' />
                                  ) : (
                                    <ChevronRight className='h-4 w-4 transition-transform' />
                                  )}
                                </button>

                                {/* Section Items */}
                                <AnimatePresence>
                                  {expandedSection === `platforms-${index}` && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                      }}
                                      className='overflow-hidden'
                                    >
                                      <div className='ml-8 space-y-1 py-1'>
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <button
                                              key={itemIndex}
                                              onClick={() =>
                                                handleItemClick(
                                                  item,
                                                  'Platforms',
                                                )
                                              }
                                              className='block w-full text-left text-gray-300 text-sm hover:text-white transition-colors py-1.5 px-2 rounded hover:bg-gray-800/30'
                                            >
                                              {item}
                                            </button>
                                          ),
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Industry with dropdown */}
                  <div>
                    <button
                      className='w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:text-gray-300 transition-colors'
                      onClick={() => handleMenuToggle('Industry')}
                    >
                      Industry
                      {expandedMenu === 'Industry' ? (
                        <ChevronDown className='h-5 w-5 transition-transform' />
                      ) : (
                        <ChevronRight className='h-5 w-5 transition-transform' />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedMenu === 'Industry' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className='overflow-hidden'
                        >
                          <div className='px-4 py-2 space-y-2'>
                            {industryData.map((section, index) => (
                              <div key={index} className='space-y-1'>
                                {/* Section Title Button */}
                                <button
                                  className='w-full flex items-center justify-between px-3 py-2 text-white text-base font-medium hover:text-gray-300 transition-colors bg-gray-800/50 rounded-md'
                                  onClick={() =>
                                    handleSectionToggle(`industry-${index}`)
                                  }
                                >
                                  <div className='flex items-center gap-3'>
                                    {section.icon}
                                    <span className='font-ibm-plex-sans'>
                                      {section.title}
                                    </span>
                                  </div>
                                  {expandedSection === `industry-${index}` ? (
                                    <ChevronDown className='h-4 w-4 transition-transform' />
                                  ) : (
                                    <ChevronRight className='h-4 w-4 transition-transform' />
                                  )}
                                </button>

                                {/* Section Items */}
                                <AnimatePresence>
                                  {expandedSection === `industry-${index}` && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                      }}
                                      className='overflow-hidden'
                                    >
                                      <div className='ml-8 space-y-1 py-1'>
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <button
                                              key={itemIndex}
                                              onClick={() =>
                                                handleItemClick(
                                                  item,
                                                  'Industry',
                                                )
                                              }
                                              className='block w-full text-left text-gray-300 text-sm hover:text-white transition-colors py-1.5 px-2 rounded hover:bg-gray-800/30'
                                            >
                                              {item}
                                            </button>
                                          ),
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer section */}
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
