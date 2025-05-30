import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  { label: 'facebook', href: '#', icon: FaFacebookF },
  { label: 'instagram', href: '#', icon: FaInstagram },
  { label: 'twitter', href: '#', icon: FaTwitter },
  { label: 'linkedin', href: '#', icon: FaLinkedinIn },
];

const SocialLinks = () => (
  <div className='flex space-x-4'>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <Link
        key={label}
        aria-label={label}
        href={href}
        className='text-white hover:text-gray-300 transition'
      >
        <Icon size={20} />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
