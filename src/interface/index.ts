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

export interface PlatformFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PlatformFeaturesSection {
  title: string;
  heroImage1: string;
  heroImage2?: string;
  heroImage3?: string;
  featureList: PlatformFeature[];
}

export interface PlatformFaq {
  id: string;
  question: string;
  answer: string;
}

export interface PlatformFaqSection {
  title: string;
  subtitle: string;
  image: string;
  faqs: PlatformFaq[];
}

export interface PlatformData {
  hero: {
    imageUrl: string;
    title: string;
    description: string;
  };
  highlightCard: {
    title: string;
    imageUrl: string;
    description: string;
  }[];
  features: PlatformFeaturesSection;
  faqData: PlatformFaqSection;
}
