import { ReactNode } from 'react';

export interface NavItem {
  icon: ReactNode;
  title: string;
  items: string[];
}
