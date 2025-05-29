'use client';
import { PlatformData } from '@/interface';
import PlatformTemplate from '@/templates/platform-template';
import { useParams } from 'next/navigation';
import React from 'react';

const platformData: PlatformData = {
  hero: {
    imageUrl: '/platform/openai.svg',
    title: 'OpenAI — Powering the Next Wave of Intelligent Solutions',
    description:
      'At Softcolon, we harness the advanced capabilities of OpenAI to build transformative AI solutions tailored for real-world impact. From natural language understanding to automation and content generation, OpenAI&apos;s cutting-edge models—like GPT-4—enable us to solve complex challenges with unprecedented efficiency, creativity, and scale.',
  },
  highlightCard: [
    {
      title: 'AI Chatbot for E-commerce Support',
      imageUrl: '/platform/ai-chatbot.svg',
      description:
        'Built using GPT-4, our smart assistant reduced response time by 60% and improved customer satisfaction by 35% for a leading retail client.',
    },
    {
      title: 'Document Intelligence for Legal Firm',
      imageUrl: '/platform/legal-firm.svg',
      description:
        'Leveraging OpenAI’s NLP, we automated legal document review, saving over 300 hours per month and increasing accuracy by 45%.',
    },
  ],
  features: {
    title: 'What Makes OpenAI Exceptional?',
    heroImage1: '/images/platform/feature-1.svg',
    heroImage2: '/images/platform/feature-2.svg',
    heroImage3: '/images/platform/feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: '/images/platform/brain.svg',
        title: 'Context-Aware Intelligence',
        description:
          "OpenAI's models go beyond basic keyword matching—they understand context, tone, and nuance, allowing for smarter, more natural interactions that feel human.",
      },
      {
        id: '2',
        icon: '/images/platform/search.svg',
        title: 'Seamless Integration Across Platforms',
        description:
          "From websites to enterprise software, OpenAI's robust APIs integrate smoothly into your existing tech stack—accelerating deployment without disrupting your workflows.",
      },
      {
        id: '3',
        icon: '/images/platform/settings.svg',
        title: 'Deep Learning That Understands Your Business',
        description:
          "Trained on vast and diverse datasets, OpenAI's models grasp industry-specific language, making them ideal for personalized AI solutions in healthcare, finance, retail, and more.",
      },
      {
        id: '4',
        icon: '/images/platform/light.svg',
        title: 'Agile, Scalable, and Always Improving',
        description:
          "With OpenAI, you're not just adopting static software—you're leveraging an AI that improves over time, scaling with your business and adapting to evolving needs.",
      },
    ],
  },
  faqData: {
    title: 'How does OpenAI handle data privacy?',
    subtitle:
      'Dive into our FAQ to better understand how OpenAI can support your goals.',
    image: '/images/platform/gptFaq.svg',
    faqs: [
      {
        id: '1',
        question: 'What is OpenAI and what does it offer?',
        answer:
          'OpenAI is a leading AI research and deployment company. It provides powerful tools like ChatGPT, Codex, and DALL-E to help businesses and individuals solve complex problems, generate content, and automate workflows using artificial intelligence.',
      },
      {
        id: '2',
        question: "Is OpenAI's technology safe and secure to use?",
        answer:
          'Yes, OpenAI implements robust security measures including data encryption, access controls, and regular security audits. We follow industry best practices to ensure your data and interactions remain secure and private.',
      },
      {
        id: '3',
        question:
          'What are the main products or tools available through OpenAI?',
        answer:
          'OpenAI offers several key products including ChatGPT for conversational AI, GPT-4 for advanced language processing, DALL-E for image generation, Codex for code generation, and Whisper for speech recognition.',
      },
      {
        id: '4',
        question:
          "Can I integrate OpenAI's API into my own application or website?",
        answer:
          'OpenAI provides comprehensive APIs that allow developers to integrate our AI capabilities into their applications, websites, and workflows. We offer detailed documentation and support to help you get started.',
      },
      {
        id: '5',
        question: 'Is there a free version of OpenAI tools available?',
        answer:
          'Yes, OpenAI offers free tiers for many of our services, including ChatGPT and limited API usage. We also provide various pricing plans to accommodate different usage levels and business needs.',
      },
      {
        id: '6',
        question: 'How does OpenAI handle data privacy?',
        answer:
          "OpenAI takes data privacy seriously. We implement strict data protection measures, don't use your data to train our models without permission, and provide clear privacy controls. Your conversations and data are handled according to our comprehensive privacy policy.",
      },
      {
        id: '7',
        question: 'Who can benefit from using OpenAI products?',
        answer:
          'OpenAI products benefit a wide range of users including developers, businesses, content creators, researchers, students, and anyone looking to leverage AI for productivity, creativity, or problem-solving tasks.',
      },
    ],
  },
};

const PlatformDetailPage = () => {
  const params = useParams();
  const rawId = params.id;
  const platformName = rawId ? decodeURIComponent(rawId as string) : '';
  return (
    <div className='relative overflow-x-hidden '>
      <PlatformTemplate
        platformName={platformName}
        platformData={platformData}
      />
    </div>
  );
};

export default PlatformDetailPage;
