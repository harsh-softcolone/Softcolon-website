import { NavItem } from '@/interface';
import { Paintbrush, HeadphonesIcon } from 'lucide-react';
import { Bot, PanelTop } from 'lucide-react';
import { Code } from 'lucide-react';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { HiOutlineUsers, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaUsersRays } from 'react-icons/fa6';
import { TbBuildingPlus } from 'react-icons/tb';
import { BiBuildingHouse } from 'react-icons/bi';

export const teamMembers = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Creative Director',
    image: '/images/teams/team-member-1.svg',
    bgColor: 'bg-[#b8d0d6]', // Light blue
  },
  {
    id: 2,
    name: 'Sophia Reynolds',
    role: 'Lead Designer',
    image: '/images/teams/team-member-2.svg',
    bgColor: 'bg-[#2d4356]', // Dark blue
  },
  {
    id: 3,
    name: 'John Paul',
    role: 'Founder',
    image: '/images/teams/team-member-1.svg',
    bgColor: 'bg-[#f8c291]', // Peach
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Product Manager',
    image: '/images/teams/team-member-2.svg',
    bgColor: 'bg-[#f8f3e6]', // Light cream
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    role: 'UX Researcher',
    image: '/images/teams/team-member-1.svg',
    bgColor: 'bg-[#d6e5fa]', // Light lavender
  },
  {
    id: 6,
    name: 'David Wilson',
    role: 'Lead Developer',
    image: '/images/teams/team-member-2.svg',
    bgColor: 'bg-[#ffdab9]', // Peach puff
  },
  {
    id: 7,
    name: 'Zoe Williams',
    role: 'Marketing Strategist',
    image: '/images/teams/team-member-1.svg',
    bgColor: 'bg-[#e0f2e9]', // Mint
  },
  {
    id: 8,
    name: 'James Rodriguez',
    role: 'CTO',
    image: '/images/teams/team-member-2.svg',
    bgColor: 'bg-[#f0e6ef]', // Light pink
  },
];

export const caseStudiesDummyData = [
  {
    id: 1,
    imageUrl: 'pages/case-study/case-study-1.svg',
    category: 'Healthcare',
    title: 'Transforming Healthcare with an AI Health Assistant',
    description: 'Enhance medical care with a sm',
    badges: ['Image generate', 'AI support'],
    readMoreLink: '/',
  },
  {
    id: 2,
    imageUrl: 'pages/case-study/case-study-2.svg',
    category: 'Food & Travel',
    title: 'Streamline Your Journey with an AI Trip Planner',
    description:
      'Let AI craft personalized itineraries based on your preferences, turning complex travel planning into a smooth, effortless experience. care.',
    badges: ['Image generate', 'AI support'],
    readMoreLink: '/',
  },
  {
    id: 3,
    imageUrl: 'pages/case-study/case-study-3.svg',
    category: 'Travel',
    title: 'Streamline Your Journey with an AI Trip Planner',
    description:
      'Let AI craft personalized itineraries based on your preferences, turning complex travel planning into a smooth, effortless experience.',
    badges: ['Image generate', 'AI support'],
    readMoreLink: '/',
  },
  {
    id: 4,
    imageUrl: 'pages/case-study/case-study-4.svg',
    category: 'Food & Travel',
    title: 'Streamline Your Journey with an AI Trip Planner',
    description:
      'Let AI craft personalized itineraries based on your preferences, turning complex travel planning into a smooth, effortless experience.',
    badges: ['Image generate', 'AI support'],
    readMoreLink: '/',
  },
  {
    id: 5,
    imageUrl: 'pages/case-study/case-study-5.svg',
    category: 'Education',
    title: 'Revolutionizing Learning with AI-Powered Education Platform',
    description:
      'Transform traditional education with an AI-driven platform that adapts to individual learning styles, provides real-time feedback, and creates personalized learning paths for students.',
    badges: ['AI support', 'Personalization'],
    readMoreLink: '/',
  },
  {
    id: 6,
    imageUrl: 'pages/case-study/case-study-6.svg',
    category: 'Finance',
    title: 'Smart Financial Management with AI Investment Advisor',
    description:
      'Empower investors with an intelligent AI system that analyzes market trends, provides personalized investment recommendations, and helps optimize portfolio performance.',
    badges: ['AI support', 'Analytics'],
    readMoreLink: '/',
  },
];

export const countryOptions = [
  // { label: 'Afghanistan', value: 'AF' },
  // { label: 'Albania', value: 'AL' },
  // { label: 'Algeria', value: 'DZ' },
  // { label: 'Andorra', value: 'AD' },
  // { label: 'Angola', value: 'AO' },
  // { label: 'Antigua and Barbuda', value: 'AG' },
  // { label: 'Argentina', value: 'AR' },
  // { label: 'Armenia', value: 'AM' },
  // { label: 'Australia', value: 'AU' },
  // { label: 'Austria', value: 'AT' },
  // { label: 'Azerbaijan', value: 'AZ' },
  // { label: 'Bahamas', value: 'BS' },
  // { label: 'Bahrain', value: 'BH' },
  // { label: 'Bangladesh', value: 'BD' },
  // { label: 'Barbados', value: 'BB' },
  // { label: 'Belarus', value: 'BY' },
  // { label: 'Belgium', value: 'BE' },
  // { label: 'Belize', value: 'BZ' },
  // { label: 'Benin', value: 'BJ' },
  // { label: 'Bhutan', value: 'BT' },
  // { label: 'Bolivia', value: 'BO' },
  // { label: 'Bosnia and Herzegovina', value: 'BA' },
  // { label: 'Botswana', value: 'BW' },
  // { label: 'Brazil', value: 'BR' },
  // { label: 'Brunei', value: 'BN' },
  // { label: 'Bulgaria', value: 'BG' },
  // { label: 'Burkina Faso', value: 'BF' },
  // { label: 'Burundi', value: 'BI' },
  // { label: 'Cabo Verde', value: 'CV' },
  // { label: 'Cambodia', value: 'KH' },
  // { label: 'Cameroon', value: 'CM' },
  // { label: 'Canada', value: 'CA' },
  // { label: 'Central African Republic', value: 'CF' },
  // { label: 'Chad', value: 'TD' },
  // { label: 'Chile', value: 'CL' },
  // { label: 'China', value: 'CN' },
  // { label: 'Colombia', value: 'CO' },
  // { label: 'Comoros', value: 'KM' },
  // { label: 'Congo', value: 'CG' },
  // { label: 'Costa Rica', value: 'CR' },
  // { label: 'Croatia', value: 'HR' },
  // { label: 'Cuba', value: 'CU' },
  // { label: 'Cyprus', value: 'CY' },
  // { label: 'Czech Republic', value: 'CZ' },
  // { label: 'Denmark', value: 'DK' },
  // { label: 'Djibouti', value: 'DJ' },
  // { label: 'Dominica', value: 'DM' },
  // { label: 'Dominican Republic', value: 'DO' },
  // { label: 'Ecuador', value: 'EC' },
  // { label: 'Egypt', value: 'EG' },
  // { label: 'El Salvador', value: 'SV' },
  // { label: 'Equatorial Guinea', value: 'GQ' },
  // { label: 'Eritrea', value: 'ER' },
  // { label: 'Estonia', value: 'EE' },
  // { label: 'Eswatini', value: 'SZ' },
  // { label: 'Ethiopia', value: 'ET' },
  // { label: 'Fiji', value: 'FJ' },
  // { label: 'Finland', value: 'FI' },
  // { label: 'France', value: 'FR' },
  // { label: 'Gabon', value: 'GA' },
  // { label: 'Gambia', value: 'GM' },
  // { label: 'Georgia', value: 'GE' },
  // { label: 'Germany', value: 'DE' },
  // { label: 'Ghana', value: 'GH' },
  // { label: 'Greece', value: 'GR' },
  // { label: 'Grenada', value: 'GD' },
  // { label: 'Guatemala', value: 'GT' },
  // { label: 'Guinea', value: 'GN' },
  // { label: 'Guinea-Bissau', value: 'GW' },
  // { label: 'Guyana', value: 'GY' },
  // { label: 'Haiti', value: 'HT' },
  // { label: 'Honduras', value: 'HN' },
  // { label: 'Hungary', value: 'HU' },
  // { label: 'Iceland', value: 'IS' },
  // { label: 'India', value: 'IN' },
  // { label: 'Indonesia', value: 'ID' },
  // { label: 'Iran', value: 'IR' },
  // { label: 'Iraq', value: 'IQ' },
  // { label: 'Ireland', value: 'IE' },
  // { label: 'Israel', value: 'IL' },
  // { label: 'Italy', value: 'IT' },
  // { label: 'Jamaica', value: 'JM' },
  // { label: 'Japan', value: 'JP' },
  // { label: 'Jordan', value: 'JO' },
  // { label: 'Kazakhstan', value: 'KZ' },
  // { label: 'Kenya', value: 'KE' },
  // { label: 'Kiribati', value: 'KI' },
  // { label: 'Kuwait', value: 'KW' },
  // { label: 'Kyrgyzstan', value: 'KG' },
  // { label: 'Laos', value: 'LA' },
  // { label: 'Latvia', value: 'LV' },
  // { label: 'Lebanon', value: 'LB' },
  // { label: 'Lesotho', value: 'LS' },
  // { label: 'Liberia', value: 'LR' },
  // { label: 'Libya', value: 'LY' },
  // { label: 'Liechtenstein', value: 'LI' },
  // { label: 'Lithuania', value: 'LT' },
  // { label: 'Luxembourg', value: 'LU' },
  // { label: 'Madagascar', value: 'MG' },
  // { label: 'Malawi', value: 'MW' },
  // { label: 'Malaysia', value: 'MY' },
  // { label: 'Maldives', value: 'MV' },
  // { label: 'Mali', value: 'ML' },
  // { label: 'Malta', value: 'MT' },
  // { label: 'Marshall Islands', value: 'MH' },
  // { label: 'Mauritania', value: 'MR' },
  // { label: 'Mauritius', value: 'MU' },
  // { label: 'Mexico', value: 'MX' },
  // { label: 'Micronesia', value: 'FM' },
  // { label: 'Moldova', value: 'MD' },
  // { label: 'Monaco', value: 'MC' },
  // { label: 'Mongolia', value: 'MN' },
  // { label: 'Montenegro', value: 'ME' },
  // { label: 'Morocco', value: 'MA' },
  // { label: 'Mozambique', value: 'MZ' },
  // { label: 'Myanmar', value: 'MM' },
  // { label: 'Namibia', value: 'NA' },
  // { label: 'Nauru', value: 'NR' },
  // { label: 'Nepal', value: 'NP' },
  // { label: 'Netherlands', value: 'NL' },
  // { label: 'New Zealand', value: 'NZ' },
  // { label: 'Nicaragua', value: 'NI' },
  // { label: 'Niger', value: 'NE' },
  // { label: 'Nigeria', value: 'NG' },
  // { label: 'North Korea', value: 'KP' },
  // { label: 'North Macedonia', value: 'MK' },
  // { label: 'Norway', value: 'NO' },
  // { label: 'Oman', value: 'OM' },
  // { label: 'Pakistan', value: 'PK' },
  // { label: 'Palau', value: 'PW' },
  // { label: 'Palestine', value: 'PS' },
  // { label: 'Panama', value: 'PA' },
  // { label: 'Papua New Guinea', value: 'PG' },
  // { label: 'Paraguay', value: 'PY' },
  // { label: 'Peru', value: 'PE' },
  // { label: 'Philippines', value: 'PH' },
  // { label: 'Poland', value: 'PL' },
  // { label: 'Portugal', value: 'PT' },
  // { label: 'Qatar', value: 'QA' },
  // { label: 'Romania', value: 'RO' },
  // { label: 'Russia', value: 'RU' },
  // { label: 'Rwanda', value: 'RW' },
  // { label: 'Saint Kitts and Nevis', value: 'KN' },
  // { label: 'Saint Lucia', value: 'LC' },
  // { label: 'Saint Vincent and the Grenadines', value: 'VC' },
  // { label: 'Samoa', value: 'WS' },
  // { label: 'San Marino', value: 'SM' },
  // { label: 'Sao Tome and Principe', value: 'ST' },
  // { label: 'Saudi Arabia', value: 'SA' },
  // { label: 'Senegal', value: 'SN' },
  // { label: 'Serbia', value: 'RS' },
  // { label: 'Seychelles', value: 'SC' },
  // { label: 'Sierra Leone', value: 'SL' },
  // { label: 'Singapore', value: 'SG' },
  // { label: 'Slovakia', value: 'SK' },
  // { label: 'Slovenia', value: 'SI' },
  // { label: 'Solomon Islands', value: 'SB' },
  // { label: 'Somalia', value: 'SO' },
  // { label: 'South Africa', value: 'ZA' },
  // { label: 'South Korea', value: 'KR' },
  // { label: 'South Sudan', value: 'SS' },
  // { label: 'Spain', value: 'ES' },
  // { label: 'Sri Lanka', value: 'LK' },
  // { label: 'Sudan', value: 'SD' },
  // { label: 'Suriname', value: 'SR' },
  // { label: 'Sweden', value: 'SE' },
  // { label: 'Switzerland', value: 'CH' },
  // { label: 'Syria', value: 'SY' },
  // { label: 'Taiwan', value: 'TW' },
  // { label: 'Tajikistan', value: 'TJ' },
  // { label: 'Tanzania', value: 'TZ' },
  // { label: 'Thailand', value: 'TH' },
  // { label: 'Timor-Leste', value: 'TL' },
  // { label: 'Togo', value: 'TG' },
  // { label: 'Tonga', value: 'TO' },
  // { label: 'Trinidad and Tobago', value: 'TT' },
  // { label: 'Tunisia', value: 'TN' },
  // { label: 'Turkey', value: 'TR' },
  // { label: 'Turkmenistan', value: 'TM' },
  // { label: 'Tuvalu', value: 'TV' },
  // { label: 'Uganda', value: 'UG' },
  // { label: 'Ukraine', value: 'UA' },
  // { label: 'United Arab Emirates', value: 'AE' },
  // { label: 'United Kingdom', value: 'GB' },
  // { label: 'United States', value: 'US' },
  // { label: 'Uruguay', value: 'UY' },
  // { label: 'Uzbekistan', value: 'UZ' },
  // { label: 'Vanuatu', value: 'VU' },
  // { label: 'Vatican City', value: 'VA' },
  // { label: 'Venezuela', value: 'VE' },
  // { label: 'Vietnam', value: 'VN' },
  // { label: 'Yemen', value: 'YE' },
  // { label: 'Zambia', value: 'ZM' },
  // { label: 'Zimbabwe', value: 'ZW' },
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Canada', value: 'CA' },
  { label: 'Australia', value: 'AU' },
];

export const desktopNavItems = ({
  setIsServicesOpen,
  setIsPlatformOpen,
  isServicesOpen,
  isPlatformOpen,
}: {
  setIsServicesOpen: (isServicesOpen: boolean) => void;
  setIsPlatformOpen: (isPlatformOpen: boolean) => void;
  isServicesOpen: boolean;
  isPlatformOpen: boolean;
}) => {
  return [
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
    {
      label: 'industry',
      href: '#',
      onClick: () => {
        setIsPlatformOpen(!isPlatformOpen);
        setIsServicesOpen(false);
      },
    },
    { label: 'case studies', href: '/case-studies' },
    { label: 'our team', href: 'our-team' },
    { label: 'about', href: 'about-us' },
  ];
};

export const platformsData: NavItem[] = [
  {
    icon: <PanelTop className='w-10 h-10' />,
    title: 'AI Tools & Platforms',
    items: [
      'ChatGPT',
      'Gemini',
      'Claude AI',
      'Perplexity AI',
      'Bard',
      'Copilot',
    ],
  },
];

export const servicesData: NavItem[] = [
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

export const industryData: NavItem[] = [
  {
    icon: <Bot className='w-10 h-10' />,
    title: 'Healthcare',
    items: [
      'Medical Software Development',
      'Healthcare Analytics',
      'Telemedicine Solutions',
      'Patient Management Systems',
      'Medical Imaging AI',
      'Healthcare IoT',
      'Clinical Trial Management',
      'Health Insurance Tech',
    ],
  },
  {
    icon: <Paintbrush className='w-10 h-10' />,
    title: 'Finance',
    items: [
      'Fintech Solutions',
      'Banking Software',
      'Payment Processing',
      'Investment Platforms',
      'Insurance Technology',
      'Wealth Management',
      'Blockchain Solutions',
      'Regulatory Compliance',
    ],
  },
  {
    icon: <Code className='w-10 h-10' />,
    title: 'Education',
    items: [
      'Learning Management Systems',
      'E-Learning Platforms',
      'Student Information Systems',
      'Educational Analytics',
      'Virtual Classrooms',
      'Assessment Tools',
      'Educational Apps',
      'Career Development Platforms',
    ],
  },
  {
    icon: <HeadphonesIcon className='w-10 h-10' />,
    title: 'Retail',
    items: [
      'E-commerce Solutions',
      'Inventory Management',
      'Point of Sale Systems',
      'Customer Analytics',
      'Supply Chain Management',
      'Retail Automation',
      'Loyalty Programs',
      'Omnichannel Solutions',
    ],
  },
];

export const mobileNavItems = [
  {
    label: 'About us',
    link: '/about-us',
  },
  {
    label: 'Contact us',
    link: '/contact-us',
  },
  {
    label: 'Services',
    links: [
      {
        icon: (
          <HiOutlineSpeakerphone className='size-5 group-hover:text-[#E8FD95]' />
        ),
        label: 'Influencer marketing',
        href: '/services/influencer-management',
      },
      {
        icon: <HiOutlineUsers className='size-5 group-hover:text-[#E8FD95]' />,
        label: 'Social Media Management',
        href: '/services/social-media-management',
      },
      {
        icon: <FaUsersRays className='size-5 group-hover:text-[#E8FD95]' />,
        label: 'Talent Management',
        href: '/services/talent-management',
      },
    ],
  },
  {
    label: 'Platforms',
    links: [
      {
        icon: (
          <HiOutlineBuildingOffice2 className='size-5 group-hover:text-[#E8FD95]' />
        ),
        label: 'Enterprises',
        href: '/solutions/enterprises',
      },
      {
        icon: <TbBuildingPlus className='size-5 group-hover:text-[#E8FD95]' />,
        label: 'Startups',
        href: '/solutions/startups',
      },
      {
        icon: <BiBuildingHouse className='size-5 group-hover:text-[#E8FD95]' />,
        label: 'Local Sellers',
        href: '/solutions/local-sellers',
      },
    ],
  },
  {
    label: 'Industries',
    links: [
      {
        icon: (
          <HiOutlineBuildingOffice2 className='size-5 group-hover:text-[#E8FD95]' />
        ),
        label: 'Enterprises',
        href: '/solutions/enterprises',
      },
    ],
  },
];

export const mobileMenuItems = [
  {
    label: 'About us',
    type: 'link' as const,
    href: '/about-us',
  },
  {
    label: 'Contact us',
    type: 'link' as const,
    href: '/contact-us',
  },
  {
    label: 'Services',
    type: 'button' as const,
    onClickKey: 'Services',
  },
  {
    label: 'Platforms',
    type: 'button' as const,
    onClickKey: 'Platforms',
  },
  {
    label: 'Industry',
    type: 'button' as const,
    onClickKey: 'Industry',
  },
];
