import { CaseStudyDataTypes } from '@/interface';
import {
  FaHeartbeat,
  FaRobot,
  FaUserMd,
  FaNewspaper,
  FaUsers,
  FaSearch,
  FaFileAlt,
  FaBalanceScale,
  FaTruck,
  FaChartLine,
  FaShieldAlt,
  FaDollarSign,
} from 'react-icons/fa';

const caseStudyHealthAssistant: CaseStudyDataTypes = {
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

const caseStudyRecruitmentAI: CaseStudyDataTypes = {
  hero: {
    title: 'Revolutionizing Recruitment with Generative AI',
    description:
      'Our Generative AI solution transforms the recruitment landscape by automating resume analysis, matching candidates with job roles, and enhancing the screening process with intelligent assessments. This solution significantly reduces time-to-hire while improving candidate quality and engagement.',
    image: '/pages/about/achivement.svg',
  },
  problemHighlights: {
    title: 'Revolutionizing Recruitment with Generative AI',
    description:
      'Our Generative AI solution transforms the recruitment landscape by automating resume analysis, matching candidates with job roles, and enhancing the screening process with intelligent assessments. This solution significantly reduces time-to-hire while improving candidate quality and engagement.',
    image: '/pages/about/achivement.svg',
    solutions: [
      {
        title: 'Manual Screening Bottlenecks',
        description: 'Time-consuming resume reviews slowed down hiring.',
      },
      {
        title: 'Inefficient Job-Candidate Matching',
        description:
          'Recruiters struggled to find the right match using traditional keyword search.',
      },
      {
        title: 'Unstructured Data Complexity',
        description:
          'Parsing various resume formats and structures was inconsistent and error-prone.',
      },
    ],
    overview: {
      title: 'Explore Our Range of Smart Hiring Solutions',
      description:
        'Our client in the HR tech industry aimed to reduce the manual effort in recruitment while improving accuracy in talent matching. The goal was to create an AI-powered platform that could understand job descriptions, analyze candidate profiles, and suggest the best-fit talent through contextual screening and adaptive learning.',
    },
  },
  businessBenefits: {
    title: 'Business Benefits',
    subtitle: 'Value propositions of integrating Generative AI in recruitment',
    benefits: [
      {
        title: 'Faster Candidate Shortlisting',
        description:
          'Instantly ranks top candidates based on JD-candidate alignment.',
        icon: FaUsers,
      },
      {
        title: 'Smart Interview Insights',
        description:
          'Generates personalized interview questions based on candidate history and role fit.',
        icon: FaSearch,
      },
      {
        title: 'AI Resume Parsing',
        description:
          'Extracts key data points from unstructured resumes with high accuracy.',
        icon: FaFileAlt,
      },
      {
        title: 'Bias-Free Screening',
        description:
          'Ensures objective decisions by analyzing only role-relevant parameters.',
        icon: FaBalanceScale,
      },
    ],
  },
  assistantOverview: {
    title:
      'AI-Powered Recruitment Assistant for Streamlined Talent Acquisition',
    description:
      'The AI assistant supports recruiters by continuously learning from hiring outcomes, adapting matching logic, and improving interview suggestions. It also tracks performance metrics of hired candidates, closing the loop on recruitment feedback.',
    image: '/pages/about/achivement.svg',
    keyFeatures: [
      'Automated Job Description Understanding',
      'Resume Parsing & Tagging',
      'Smart Ranking System',
      'Interview Question Generator',
      'AI-Driven Candidate Fit Score',
      'Performance Tracking',
    ],
  },
  techStack: {
    title: 'AI Tools & Techstack',
    subtitle: 'Advanced tech & tools behind our AI recruitment solution',
    technologies: [
      { image: '/pages/case-study/chatgpt.svg', alt: 'GPT-4o', name: 'GPT-4o' },
      { image: '/pages/case-study/dalle.svg', alt: 'DallE3', name: 'Dall E 3' },
      { image: '/pages/case-study/python.svg', alt: 'python', name: 'Python' },
      {
        image: '/pages/case-study/Node.js.svg',
        alt: 'nodejs',
        name: 'Node.js',
      },
      { image: '/pages/case-study/React.svg', alt: 'react', name: 'React' },
      { image: '/pages/case-study/rag.svg', alt: 'rag', name: 'RAG' },
      {
        image: '/pages/case-study/mongodb.svg',
        alt: 'mongodb',
        name: 'MongoDB',
      },
      {
        image: '/pages/case-study/android.svg',
        alt: 'android',
        name: 'Android',
      },
      { image: '/pages/case-study/ios.svg', alt: 'ios', name: 'IOS' },
    ],
  },
};

const caseStudySupplyChainAI: CaseStudyDataTypes = {
  hero: {
    title: 'AI-Driven Supply Chain Optimization',
    description:
      'Our AI solution empowers businesses to streamline their supply chain operations using real-time data, predictive analytics, and adaptive forecasting. From demand planning to inventory control, our platform minimizes costs, prevents shortages, and boosts operational efficiency.',
    image: '/pages/about/achivement.svg',
  },
  problemHighlights: {
    title: 'AI-Driven Supply Chain Optimization',
    description:
      'Our AI solution empowers businesses to streamline their supply chain operations using real-time data, predictive analytics, and adaptive forecasting. From demand planning to inventory control, our platform minimizes costs, prevents shortages, and boosts operational efficiency.',
    image: '/pages/about/achivement.svg',
    solutions: [
      {
        title: 'Stockouts and Overstocking',
        description:
          'Lack of predictive models led to frequent inventory imbalance.',
      },
      {
        title: 'Delayed Demand Forecasting',
        description:
          'Traditional forecasting missed seasonal or event-based trends.',
      },
      {
        title: 'Vendor Performance Monitoring',
        description:
          'No smart system to evaluate supplier reliability or delivery consistency.',
      },
    ],
    overview: {
      title: 'Explore Our Range of Intelligent Logistics Solutions',
      description:
        'Our client in the logistics industry faced unpredictability in demand and delays due to manual planning. We created an AI-based system capable of analyzing seasonal patterns, supplier reliability, and inventory levels to optimize the entire supply chain flow.',
    },
  },
  businessBenefits: {
    title: 'Business Benefits',
    subtitle: 'Value propositions of AI in supply chain optimization',
    benefits: [
      {
        title: 'Real-Time Inventory Insights',
        description: 'Maintain ideal stock levels across multiple locations.',
        icon: FaTruck,
      },
      {
        title: 'Dynamic Demand Forecasting',
        description:
          'Predict demand using time-series analysis and historical trends.',
        icon: FaChartLine,
      },
      {
        title: 'Supplier Risk Management',
        description:
          'Rate vendors based on delivery history, quality, and responsiveness.',
        icon: FaShieldAlt,
      },
      {
        title: 'Cost Optimization',
        description: 'Reduce operational and holding costs through automation.',
        icon: FaDollarSign,
      },
    ],
  },
  assistantOverview: {
    title: 'Smart Supply Chain Assistant for Seamless Operations',
    description:
      'The platform collects structured and unstructured data from ERP systems, warehouse records, and sales pipelines to provide actionable insights. It enables managers to take data-driven decisions for procurement, production, and logistics.',
    image: '/pages/about/achivement.svg',
    keyFeatures: [
      'Predictive Analytics',
      'Intelligent Order Management',
      'Automated Reorder Alerts',
      'Supplier Reliability Scoring',
      'Visual Dashboard & KPI Monitoring',
      'Real-time Data Integration',
    ],
  },
  techStack: {
    title: 'AI Tools & Techstack',
    subtitle: 'Advanced tech & tools behind our AI supply chain solution',
    technologies: [
      { image: '/pages/case-study/chatgpt.svg', alt: 'GPT-4o', name: 'GPT-4o' },
      { image: '/pages/case-study/python.svg', alt: 'python', name: 'Python' },
      {
        image: '/pages/case-study/fastapi.svg',
        alt: 'fastapi',
        name: 'FastAPI',
      },
      {
        image: '/pages/case-study/postgresql.svg',
        alt: 'postgresql',
        name: 'PostgreSQL',
      },
      { image: '/pages/case-study/react.svg', alt: 'react', name: 'React' },
      {
        image: '/pages/case-study/aws.svg',
        alt: 'aws-sagemaker',
        name: 'AWS SageMaker',
      },
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

// Export service data mapping
export const caseStudyDataMap: Record<string, CaseStudyDataTypes> = {
  'Revolutionizing Recruitment with Generative AI': caseStudyRecruitmentAI,
  'Smart Scheduling & Virtual Triage in Healthcare': caseStudyHealthAssistant,
  'AI-Driven Supply Chain Optimization': caseStudySupplyChainAI,
};

// Function to get service data by service name
export const getCaseStudyData = (caseStudyName: string): CaseStudyDataTypes => {
  return caseStudyDataMap[caseStudyName] || caseStudyHealthAssistant;
};

export const caseStudyData = caseStudyHealthAssistant;
