import { useEffect, useRef } from 'react';
import { NavItem } from '../../interface';

interface ReusableNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  navTitleClass?: string;
  navItemClass?: string;
  navLinkClass?: string;
}

export function MegaNav({
  isOpen,
  onClose,
  navItems,
  navTitleClass = 'text-xl font-semibold whitespace-pre font-ibm-plex-sans',
  navItemClass = 'space-y-4 border-0 lg:border-r border-[#404040] last:border-r-0',
  navLinkClass = 'text-paragraph hover:text-white transition-colors duration-200 text-[16px] font-ibm-plex-sans',
}: ReusableNavProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close the modal if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-start justify-center bg-black/60'>
      <div
        ref={modalRef}
        className='relative max-w-[1440px] top-[80px] sm:top-[100px] z-100 w-11/12 mt-2 nav-background rounded-2xl shadow-2xl border-[1px] border-[#31383C] overflow-hidden'
      >
        <div className='mx-auto p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {navItems.map((navItem, index) => (
              <div key={index} className={navItemClass}>
                <div className='flex items-start gap-3 text-white flex-nowrap flex-col'>
                  {navItem.icon}
                  <h3 className={navTitleClass}>{navItem.title}</h3>
                </div>
                <ul className='space-y-2'>
                  {navItem.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href='#' onClick={onClose} className={navLinkClass}>
                        {item}
                      </a>
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
}
