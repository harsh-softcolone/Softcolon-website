import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './social-links';

const quickLinks = [
  { name: 'Services', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Platform', href: '#' },
  { name: 'Industry', href: '#' },
  { name: 'Our Work', href: '#' },
  { name: 'About', href: '#' },
];

const serviceLinks = [
  { name: 'Generative AI', href: '#' },
  { name: 'Design', href: '#' },
  { name: 'Development Services', href: '#' },
  { name: 'Support', href: '#' },
];

const Footer = () => {
  return (
    <footer className='text-white pt-10 pb-6'>
      <div className='mx-auto max-w-[1392px] w-11/12 2xl:w-full'>
        {/* Desktop Layout */}
        <div className='hidden md:grid md:grid-cols-[1.3fr_0.8fr_1fr_1.2fr] gap-8 pb-8'>
          {/* Brand and Social Section */}
          <div className='space-y-5 max-w-[300px]'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={120}
              height={100}
              className='w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300'
            />
            <p className='text-sm sm:text-lg leading-normal'>
              It has long been known that a reader&apos;s attention will be
              diverted from
            </p>
            <div className='flex space-x-4'>
              <Link
                aria-label='facebook'
                href='#'
                className='text-white hover:text-gray-300 transition'
              >
                <Facebook size={20} />
              </Link>
              <Link
                aria-label='instagram'
                href='#'
                className='text-white hover:text-gray-300 transition'
              >
                <Instagram size={20} />
              </Link>
              <Link
                aria-label='twitter'
                href='#'
                className='text-white hover:text-gray-300 transition'
              >
                <Twitter size={20} />
              </Link>
              <Link
                aria-label='linkedin'
                href='#'
                className='text-white hover:text-gray-300 transition'
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className='font-medium mb-6 text-xl leading-normal'>
              Quick Links
            </h2>
            <ul className='space-y-2 text-sm'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    aria-label={`${link.name} link`}
                    href={link.href}
                    className='hover:text-gray-300 text-lg font-normal text-white transition-colors duration-300 hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className='font-medium mb-6 text-xl leading-normal'>
              Services
            </h2>
            <ul className='space-y-2 text-sm'>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    aria-label={`${link.name} link`}
                    href={link.href}
                    className='hover:text-gray-300 text-lg font-normal text-white transition-colors duration-300 hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='font-ibm-plex-sans'>
            <h2 className='font-medium mb-6 text-xl leading-normal'>Contact</h2>
            <div className='space-y-3 text-sm'>
              <div className='flex items-start'>
                <MapPin size={40} className='text-white mr-2' />
                <p className='text-lg font-normal leading-normal'>
                  Kasturi Pride, 326, near Vishala Supreme, Nikol, Ahmedabad,
                  Gujarat 382350
                </p>
              </div>
              <div className='flex items-center'>
                <Mail size={20} className='text-white mr-2' />
                <Link
                  aria-label='email'
                  href='mailto:contact@softcolon.com'
                  className='hover:text-gray-300 transition text-lg'
                >
                  contact@softcolon.com
                </Link>
              </div>
              <div className='flex items-center'>
                <Phone size={20} className='text-white mr-2' />
                <Link
                  aria-label='phone'
                  href='tel:+919687119033'
                  className='hover:text-gray-300 transition text-lg'
                >
                  +91 9687119033
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden space-y-8 pb-6'>
          {/* Brand and Social Section */}
          <div className='space-y-5'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={120}
              height={100}
              className='w-[150px] h-auto transition-all duration-300'
            />
            <p className='text-sm leading-normal'>
              It has long been known that a reader&apos;s attention will be
              diverted from
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className='font-medium mb-4 text-xl leading-normal'>
              Quick Links
            </h2>
            <ul className='space-y-2 text-sm'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    aria-label={`${link.name} link`}
                    href={link.href}
                    className='hover:text-gray-300 text-sm font-normal text-white transition-colors duration-300 hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className='font-medium mb-4 text-xl leading-normal'>
              Services
            </h2>
            <ul className='space-y-2 text-sm'>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    aria-label={`${link.name} link`}
                    href={link.href}
                    className='hover:text-gray-300 text-sm font-normal text-white transition-colors duration-300 hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className='font-medium mb-4 text-xl leading-normal'>Contact</h2>
            <div className='space-y-3 text-sm'>
              <div className='flex items-start'>
                <div className='mt-1 mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                </div>
                <p>
                  Kasturi Pride, 326, near Vishala Supreme, Nikol, Ahmedabad,
                  Gujarat 382350
                </p>
              </div>
              <div className='flex items-center'>
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg>
                </div>
                <Link
                  aria-label='email'
                  href='mailto:contact@softcolon.com'
                  className='hover:text-gray-300 transition'
                >
                  contact@softcolon.com
                </Link>
              </div>
              <div className='flex items-center'>
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                </div>
                <Link
                  aria-label='phone'
                  href='tel:+919687119033'
                  className='hover:text-gray-300 transition'
                >
                  +91 9687119033
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-800 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
            <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6'>
              <Link
                aria-label='privacy policy'
                href='#'
                className='text-sm sm:text-lg hover:text-gray-300 transition'
              >
                Privacy Policy
              </Link>
              <Link
                aria-label='terms and condition'
                href='#'
                className='text-sm sm:text-lg hover:text-gray-300 transition'
              >
                Terms and Condition
              </Link>
              <Link
                aria-label='contact us'
                href='#'
                className='text-sm sm:text-lg hover:text-gray-300 transition-all duration-300'
              >
                Contact Us
              </Link>
            </div>
            <div className='mt-4 md:mt-0'>
              <p className='text-sm sm:text-lg text-white'>
                Copyright © 2025 softcolon.pvt.ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
