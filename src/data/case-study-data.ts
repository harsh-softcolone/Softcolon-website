import { CaseStudyDataTypes } from '@/interface';
import { FaHeartbeat, FaRobot, FaUserMd, FaNewspaper } from 'react-icons/fa';

export const caseStudyData: CaseStudyDataTypes = {
  hero: {
    title: 'Transforming Healthcare with AI Health Assistant',
    description:
      'Our AI health assistant app takes healthcare to the next level by analyzing patient health based on medical history, symptoms, and consultations. It also provides virtual consultations and well-being advice, making healthcare more accessible and smarter.',
    image: '/pages/about/achivement.svg',
  },
  problemHighlights: {
    title: 'Transforming Healthcare with AI Health Assistant',
    description:
      'Our AI health assistant app takes healthcare to the next level by analyzing patient health based on medical history, symptoms, and consultations. It also provides virtual consultations and well-being advice, making healthcare more accessible and smarter.',
    image: '/pages/about/achivement.svg',
    solutions: [
      {
        title: 'Expensive Report Assessment',
        description: 'Free symptom and report analysis for users.',
      },
      {
        title: 'Lack of Information',
        description:
          'Health risks and mitigation steps are provided in an easy-to-understand format.',
      },
      {
        title: 'Lack of Expert Consultations',
        description:
          'Users are guided to the right specialists based on their health data.',
      },
    ],
    overview: {
      title: 'Explore Our Range of Expert Financial Solutions',
      description:
        'Our client in the healthcare industry sought to improve medical assessments and streamline data management with an AI-driven assistant. The goal was to create a smart system that could assess health risks based on symptoms and medical history while offering virtual consultations and personalized well-being suggestions.',
    },
  },
  businessBenefits: {
    title: 'Our fundamental Values',
    subtitle: 'Values That Shape Our Journey',
    benefits: [
      {
        title: 'Patient Oriented Healthcare',
        description:
          'The app simplifies medical jargon from reports into easy-to-understand insights, along with simple habit changes to improve health',
        icon: FaHeartbeat,
      },
      {
        title: 'AI Consultation',
        description:
          'The app offers AI-based consultation for general user queries, and symptom check-ups for conveniently accessible, accurate information',
        icon: FaRobot,
      },
      {
        title: 'AI Assistant',
        description:
          'Get an AI assistant specifically trained to help everyone, including those who lack tech expertise, navigate through app effortlessly',
        icon: FaUserMd,
      },
      {
        title: 'Personalized Feed',
        description:
          'Benefit from personalized recommendations, articles, and doctors posts online on the feed to help users with their medical conditions',
        icon: FaNewspaper,
      },
    ],
  },
  assistantOverview: {
    title: 'AI Virtual Health Assistant for Streamlined Health Assessments',
    description:
      'We developed an AI virtual health assistant with all the functionalities our client required and beyond. It uses advanced algorithms to analyze medical symptoms effectively, cross-check them with previous records, and offer a thorough report. The app is also trained to provide a holistic wellness approach with custom dietary and lifestyle recommendations. Additionally, it allows patients to connect with the experts conveniently.',
    image: '/pages/about/achivement.svg',
    keyFeatures: [
      'Virtual Consultation',
      'Custom Lifestyle Tips',
      'Health Rating With Description',
      'Exercise & Yoga Suggestions',
      'Personalized Diet Plans',
      'Holistic Healthcare',
    ],
  },
  techStack: {
    title: 'AI Tools & Techstack',
    subtitle: 'Advanced tech & tools behind our AI health assistant',
    technologies: [
      { image: '/pages/case-study/chatgpt.svg', alt: 'GPT-4o', name: 'GPT-4o' },
      { image: '/pages/case-study/dalle.svg', alt: 'DallE3', name: 'Dall E 3' },
      { image: '/pages/case-study/python.svg', alt: 'python', name: 'Python' },
      { image: '/pages/case-study/csharp.svg', alt: 'C++', name: 'C++' },
      { image: '/pages/case-study/rag.svg', alt: 'rag', name: 'RAG' },
      {
        image: '/pages/case-study/android.svg',
        alt: 'android',
        name: 'Android',
      },
      { image: '/pages/case-study/ios.svg', alt: 'ios', name: 'IOS' },
    ],
  },
};
