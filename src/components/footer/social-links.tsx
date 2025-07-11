import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  {
    label: 'instagram',
    href: 'https://www.instagram.com/softcolon?igsh=ZjJmODdveXU3aTdt',
    icon: FaInstagram,
  },
  { label: 'twitter', href: '#', icon: FaTwitter },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/company/softcolon/',
    icon: FaLinkedinIn,
  },
];

const SocialLinks = () => (
  <div className='flex space-x-4'>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <Link
        key={label}
        aria-label={label}
        href={href}
        className='text-white hover:text-gray-300 transition'
        target='_blank'
      >
        <Icon size={20} />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
