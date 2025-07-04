'use client';
import Image from 'next/image';
import AnimatedSearchButton from '../buttons/animated-search-button';

const HamburgerMenu = ({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}) => (
  <div className='flex items-center gap-4 xl:hidden'>
    <AnimatedSearchButton />
    <button
      aria-label='toggle menu'
      type='button'
      onClick={toggleMenu}
      className='flex flex-col justify-center items-center cursor-pointer relative'
    >
      <div className='relative w-10 h-10 flex items-center justify-center'>
        {/* Hamburger Icon */}
        <Image
          src='/icons/hamburgerMenuIcon.svg'
          alt='hamburger menu icon'
          width={24}
          height={24}
          className={`w-10 h-10 transition-all duration-300 ${
            isOpen
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />

        {/* Cross Icon */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        >
          <div className='relative w-10 h-10'>
            <span className='absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform -translate-y-1/2 rotate-45'></span>
            <span className='absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform -translate-y-1/2 -rotate-45'></span>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default HamburgerMenu;
