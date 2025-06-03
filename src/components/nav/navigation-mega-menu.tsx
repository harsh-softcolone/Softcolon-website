'use client';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaRunning } from 'react-icons/fa';

interface NavigationSection {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

interface NavigationMegaMenuProps {
  menuTitle: string;
  navigationSections: NavigationSection[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  buttonClassName?: string;
  menuClassName?: string;
  onNavigationItemClick?: (item: string) => void;
}

export const NavigationMegaMenu = ({
  menuTitle,
  navigationSections,
  isActive,
  onMouseEnter,
  onMouseLeave,
  buttonClassName,
  menuClassName,
  onNavigationItemClick,
}: NavigationMegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='relative'>
      <div
        className='relative py-4'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          ref={buttonRef}
          className={cn(
            'text-[18px] flex items-center justify-center gap-2 cursor-pointer font-ibm-plex-sans leading-normal font-normal capitalize transition-all duration-300',
            isActive ? ' text-gray-400' : 'text-white hover:white',
            buttonClassName,
          )}
          aria-expanded={isActive}
        >
          {menuTitle}
          <ChevronDown
            className={`ml-1 h-4 w-4 ${isActive ? 'rotate-180' : ''} transition-all duration-300`}
          />
        </button>
      </div>
      {/* Invisible bridge to prevent accidental mouse leave */}
      {isActive && (
        <div
          className='absolute w-full h-2'
          style={{
            top: '100%',
            left: 0,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      <div
        ref={menuRef}
        className={cn(
          'fixed left-0 right-0 mx-auto w-[100%] max-w-[1440px] nav-background shadow-lg rounded-md overflow-hidden z-50 transition-all duration-300 ease-in-out',
          'transform origin-top',
          isActive
            ? 'opacity-100 scale-y-100 translate-y-0'
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none',
          menuClassName,
        )}
        style={{
          top: buttonRef.current
            ? buttonRef.current.getBoundingClientRect().bottom + 'px'
            : '100%',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className='mx-auto p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {navigationSections.map((section, index) => (
              <div
                key={index}
                className='space-y-4 border-0 lg:border-r border-[#404040] last:border-r-0'
              >
                <div className='flex items-start gap-3 text-white flex-nowrap flex-col'>
                  {section.icon}
                  <h3 className='text-xl font-semibold whitespace-pre font-ibm-plex-sans'>
                    {section.title}
                  </h3>
                </div>
                <ul className='space-y-2'>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='cursor-pointer'>
                      <div
                        onClick={() => onNavigationItemClick?.(item)}
                        className='text-paragraph hover:text-white text-[16px] font-ibm-plex-sans group flex items-center justify-between transition-all duration-300'
                      >
                        <span className='transition-transform duration-300 group-hover:translate-x-2'>
                          {item}
                        </span>
                        <span className='ml-2 opacity-0 group-hover:opacity-100 -group-hover:translate-x-3 -translate-x-3 transition-all duration-300 text-white'>
                          <FaRunning className='w-4 h-4' />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
