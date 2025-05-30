'use client';
import Image from 'next/image';
import AnimatedSearchButton from '../buttons/animated-search-button';

const HamburgerMenu = ({ toggleMenu }: { toggleMenu: () => void }) => (
  <div className='flex items-center gap-4 xl:hidden'>
    <AnimatedSearchButton />
    <button
      aria-label='toggle menu'
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
);

export default HamburgerMenu;
