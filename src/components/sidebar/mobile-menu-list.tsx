import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { NavigationSection } from '@/interface';

interface Props {
  item: {
    label: string;
    type: 'button' | 'link';
    href?: string;
    onClickKey?: string;
    data?: NavigationSection[];
  };
  handleMenuItemClick?: (data: NavigationSection[], title: string) => void;
}

const MobileMenuList = ({ item, handleMenuItemClick }: Props) => {
  const baseClasses =
    'font-ibm-plex-sans flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 text-left text-[16px] font-medium text-white transition-colors hover:bg-white/10 hover:text-gray-300';

  if (item.type === 'link' && item.href) {
    return (
      <li>
        <Link href={item.href} className={baseClasses}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        className={baseClasses}
        onClick={() =>
          item.data &&
          handleMenuItemClick?.(item.data, item.onClickKey || item.label)
        }
      >
        {item.label}
        <ChevronRight className='h-5 w-5' />
      </button>
    </li>
  );
};

export default MobileMenuList;
