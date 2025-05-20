import { ReactNode } from 'react';

export interface NavItem {
  icon: ReactNode;
  title: string;
  items: string[];
}

export interface Platform {
  id: string;
  number: string;
  title: string;
  description: string;
  icons: { src: string; alt: string }[];
}
