import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export interface NavItem {
  icon: ReactNode;
  title: string;
  items: string[];
}

export interface PlatformSection {
  name: string;
  icons: { src: string; alt: string }[];
}

export interface Platform {
  id: string;
  number: string;
  title: string;
  description: string;
  sections: PlatformSection[];
}

export interface PlatformFeature {
  id: string;
  icon: IconType;
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

export interface ServiceFeaturesSection {
  title: string;
  description: string;
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
    icon: IconType;
    description: string;
  }[];
  features: PlatformFeaturesSection;
  faqData: PlatformFaqSection;
}

interface WorkflowStep {
  title: string;
  description: string;
  steps: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

interface WhySoftcolon {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export interface ServiceData {
  hero: {
    imageUrl: string;
    title: string;
    description: string;
    subDescription: string;
  };
  features: ServiceFeaturesSection;
  techStack: TechStackSectionTypes;
  blogs: HashnodePost[];
  workflow: WorkflowStep;
  whySoftcolon: WhySoftcolon[];
}

export interface TechStackSectionTypes {
  title: string;
  subtitle: string;
  technologies: Array<{
    icon: IconType;
    name: string;
  }>;
}
// Case Study Data Types

export interface CaseStudyDataTypes {
  hero: {
    title: string;
    description: string;
    image: string;
  };
  problemHighlights: {
    title: string;
    description: string;
    image: string;
    solutions: Array<{
      title: string;
      description: string;
    }>;
    overview: {
      title: string;
      description: string;
    };
  };
  businessBenefits: {
    title: string;
    subtitle: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: IconType;
    }>;
  };
  assistantOverview: {
    title: string;
    description: string;
    image: string;
    keyFeatures: string[];
  };
  techStack: {
    title: string;
    subtitle: string;
    technologies: Array<{
      icon?: IconType;
      name: string;
      image?: string;
      alt?: string;
    }>;
  };
}

// Industry Data Types

export interface InnovationSectionTypes {
  title: string;
  description: string;
  imageUrl: string;
  contentBlocks: {
    title: string;
    description: string;
  }[];
}

export interface BlogsSectionTypes {
  image: string;
  alt: string;
  date: string;
  title: string;
  tag: string[];
}

export interface IndustryDataTypes {
  hero: {
    imageUrl: string;
    title: string;
    description: string;
  };
  useCaseGrid: {
    title: string;
    subtitle: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: IconType;
    }>;
  };
  industryOverview: {
    imageUrl: string;
    title: string;
    description: string;
  };
  techStack: TechStackSectionTypes;
  innovation: InnovationSectionTypes;
  blogs: HashnodePost[];
}

export type NavigationSection = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

export type HashnodePost = {
  title: string;
  brief: string;
  slug: string;
  coverImage: { url: string };
  publishedAt: string;
};

export type HashNodeSinglePost = {
  brief: string;
  content: {
    markdown: string;
  };
  coverImage: { url: string };
  title: string;
  slug: string;
  publishedAt: string;
};

export type HashNodeGetSinglePostResponse = {
  publication: {
    post: HashNodeSinglePost;
  };
};
