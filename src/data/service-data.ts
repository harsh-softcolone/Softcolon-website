import { ServiceData } from '@/interface';
import { PiLaptopFill } from 'react-icons/pi';
import { LuBrainCircuit } from 'react-icons/lu';
import { HiMiniCpuChip } from 'react-icons/hi2';
import {
  Bot,
  BotMessageSquare,
  CircuitBoard,
  FolderCode,
  Notebook,
} from 'lucide-react';

const aiAgentServiceData: ServiceData = {
  hero: {
    imageUrl: '/service/human.svg',
    title: 'AI Agent \n Development Services',
    subDescription: 'Talk To Our GenAI Specialist',
    description:
      'Unlock operational efficiency with enterprise-level intelligent AI \n agents exclusively designed to address your business complications.',
  },
  features: {
    title:
      'AI Agent development services we offer for \n myriad business use cases',
    description:
      'We utilize the best-in-class AI agent tools to deliver premium solutions',
    heroImage1: '/images/service/feature-1.svg',
    heroImage2: '/images/service/feature-2.svg',
    heroImage3: '/images/service/feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: Bot,
        title:
          'AI Agent development services we offer for myriad business use cases',
        description:
          'We utilize the best-in-class AI agent tools to deliver premium solutions Connect with us to learn more',
      },
      {
        id: '2',
        icon: Notebook,
        title: 'AI Agent Strategy Consulting',
        description:
          'We conduct an extensive consultation to understand your expectations with the AI and current maturity level',
      },
      {
        id: '3',
        icon: CircuitBoard,
        title: 'Custom AI Agent Development',
        description:
          'Our team adeptly develops AI solutions that resolve your business and industry-specific complications',
      },
      {
        id: '4',
        icon: BotMessageSquare,
        title: 'Conversational Agents Development',
        description:
          'Upgrade your customer service with real time agent assistance and human-like conversations with your customers',
      },
      {
        id: '5',
        icon: FolderCode,
        title: 'AI Agent Integration',
        description:
          'We design and integrate AI agents that seamlessly fit into your existing workflow to maximize the gains of this digital integration',
      },
    ],
  },
  techStack: {
    title:
      'Conversational AgentsSimple Reflex AgentsModel-Based AgentsGoal-Based AgentsUtility-Based AgentsLearning Agent',
    subtitle:
      'These AI agents are trained on NLP to converse in a natural human-like tone for effective interaction and understanding',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'Personal Assistants',
      },
      { icon: HiMiniCpuChip, name: 'AI Learning App' },
      { icon: PiLaptopFill, name: 'Customer Assistants' },
    ],
  },
  workflow: {
    title: 'Leverage the quality AI Agents that complement \nyour workflow',
    description:
      'We develop solutions in a well-organized and transparent manner',
    steps: [
      {
        id: 1,
        title: 'Goal Identification',
        description:
          "Get a consultation to define the client's goals and expectations with the AI agent to define the ideal development methodology.",
        imageUrl: '/images/service/Flow-1.svg',
      },
      {
        id: 2,
        title: 'Data Preprocessing',
        description:
          'Gather required data, process it to eliminate any inconsistencies, and organize it as datasets to train the AI agent.',
        imageUrl: '/images/service/Flow-2.svg',
      },
      {
        id: 3,
        title: 'AI Model Selection',
        description:
          'Based on the primary functionality and usage, determine which AI model would best align with your interest.',
        imageUrl: '/images/service/Flow-3.svg',
      },
      {
        id: 4,
        title: 'Training & Deployment',
        description:
          'Feed the processed data and fine-tune the model for optimal performance and deploy once finalized.',
        imageUrl: '/images/service/Flow-4.svg',
      },
      {
        id: 5,
        title: 'Monitor & Maintenance',
        description:
          "Observe AI agent's post-deployment functions and identify the scope of improvement for future updates and upgrades.",
        imageUrl: '/images/service/Flow-5.svg',
      },
      {
        id: 6,
        title: 'Continuous Optimization',
        description:
          'Continuously analyze performance and user feedback to refine the AI agent and align it with evolving business needs.',
        imageUrl: '/images/service/Flow-6.svg',
      },
    ],
  },
  whySoftcolon: [
    {
      icon: '/images/general/achievement.svg',
      alt: 'achievement',
      title: 'Consistent Quality Services',
      description:
        'Since our inception, we have consistently delivered premium solutions without any delays. This is why our clients trust us.',
    },
    {
      icon: '/images/general/humans.svg',
      alt: 'Global cliente',
      title: 'Global Cliente',
      description:
        'We offer flexibility to streamline development and minimize communication gaps for premium AI agent development.',
    },
  ],
  blogs: [
    {
      title: 'Trends, Insights, and Innovations Shaping Tomorrow',
      brief:
        'Explore the latest trends and innovations that are shaping the future of technology and business.',
      slug: 'trends-insights-innovations-shaping-tomorrow',
      coverImage: { url: '/images/blogs/robot.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Transforming Business Operations with AI Technology',
      brief:
        'Discover how AI technology is revolutionizing business operations and driving efficiency.',
      slug: 'transforming-business-operations-with-ai-technology',
      coverImage: { url: '/images/blogs/ai-technology.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Revolutionizing Business Efficiency with AI Solutions',
      brief:
        'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
      slug: 'revolutionizing-business-efficiency-with-ai-solutions',
      coverImage: { url: '/images/blogs/ai-solution.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
  ],
};

const llmPoweredChatbotsServiceData: ServiceData = {
  hero: {
    imageUrl: '/service/llm.svg',
    title:
      'Build Smarter Conversations \n with Enterprise-Grade AI \n Chatbots',
    subDescription: 'Talk To Our GenAI Specialist',
    description:
      'Redefine business efficiency with next-generation AI chatbots powered by enterprise-grade Large Language Models (LLMs). These intelligent solutions automate customer support, streamline internal workflows, and reduce operational costs. Designed for scalability and accuracy, they deliver human-like conversations across multiple channels. Empower your teams and customers with 24/7 intelligent engagement that evolves with your business.',
  },
  features: {
    title: 'Our Chatbot Development Services',
    description:
      'Unlock the full potential of conversational AI with solutions tailored to your goals, industry, \n and infrastructure.',
    heroImage1: '/images/service/chatbot-feature-1.svg',
    heroImage2: '/images/service/chatbot-feature-2.svg',
    heroImage3: '/images/service/chatbot-feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: Bot,
        title: 'NLP-Powered Conversational Intelligence',
        description:
          'We build chatbots tailored to your industry, business model, and use case—ensuring high relevance and performance.',
      },
      {
        id: '2',
        icon: Notebook,
        title: 'Custom Chatbot Development',
        description:
          'Chatbots maintain context across conversations, providing relevant responses based on previous interactions.',
      },
      {
        id: '3',
        icon: CircuitBoard,
        title: 'Conversational UI/UX Design',
        description:
          'Our team designs intuitive user interfaces that make interactions seamless and human-like, improving user satisfaction and task completion.',
      },
      {
        id: '4',
        icon: BotMessageSquare,
        title: 'Chatbot Architecture Design',
        description:
          'We engineer scalable and flexible chatbot frameworks that integrate seamlessly with your systems while supporting future growth.',
      },
      {
        id: '5',
        icon: FolderCode,
        title: 'Chatbot Integration Services',
        description:
          'Enable smooth integration with mobile apps, enterprise software, CRMs, ERPs, and internal tools for enhanced workflows.',
      },
    ],
  },
  techStack: {
    title:
      'Conversational AgentsSimple Reflex AgentsModel-Based AgentsGoal-Based AgentsUtility-Based AgentsLearning Agent',
    subtitle:
      'These AI agents are trained on NLP to converse in a natural human-like tone for effective interaction and understanding',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'Enterprise Software Integration',
      },
      { icon: HiMiniCpuChip, name: 'App & Platform Compatibility' },
      { icon: PiLaptopFill, name: 'Highly Personalized Interactions' },
    ],
  },
  workflow: {
    title: 'Our AI Chatbot Development Process',
    description:
      'We follow a well-defined, agile methodology to ensure efficiency, transparency, and results-driven delivery.',
    steps: [
      {
        id: 1,
        title: 'Consultation',
        description:
          'Understand business requirements, systems, and project scope.',
        imageUrl: '/images/service/Flow-1.svg',
      },
      {
        id: 2,
        title: 'AI Model Training',
        description:
          'Prepare and train custom data to align with your brand voice and use case.',
        imageUrl: '/images/service/Flow-2.svg',
      },
      {
        id: 3,
        title: 'Development',
        description:
          'Develop core functionality and integrate AI features aligned with user expectations.',
        imageUrl: '/images/service/Flow-3.svg',
      },
      {
        id: 4,
        title: 'Testing & Refinement',
        description:
          'Assess performance using metrics, refine conversational flows, and improve accuracy.',
        imageUrl: '/images/service/Flow-4.svg',
      },
      {
        id: 5,
        title: 'Ongoing Optimization',
        description:
          'Continuous monitoring and updates to ensure long-term performance and adaptability.',
        imageUrl: '/images/service/Flow-5.svg',
      },
      {
        id: 6,
        title: 'Scalability & Expansion',
        description:
          'Enhance the chatbot’s capabilities by integrating new features, channels, or languages as your business grows.',
        imageUrl: '/images/service/Flow-6.svg',
      },
    ],
  },
  whySoftcolon: [
    {
      icon: '/images/general/achievement.svg',
      alt: 'achievement',
      title: 'Consistent Quality Services',
      description:
        'Since our inception, we have consistently delivered premium solutions without any delays. This is why our clients trust us.',
    },
    {
      icon: '/images/general/humans.svg',
      alt: 'Global cliente',
      title: 'Global Cliente',
      description:
        'We offer flexibility to streamline development and minimize communication gaps for premium AI agent development.',
    },
  ],
  blogs: [
    {
      title: 'Trends, Insights, and Innovations Shaping Tomorrow',
      brief:
        'Explore the latest trends and innovations that are shaping the future of technology and business.',
      slug: 'trends-insights-innovations-shaping-tomorrow',
      coverImage: { url: '/images/blogs/robot.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Transforming Business Operations with AI Technology',
      brief:
        'Discover how AI technology is revolutionizing business operations and driving efficiency.',
      slug: 'transforming-business-operations-with-ai-technology',
      coverImage: { url: '/images/blogs/ai-technology.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Revolutionizing Business Efficiency with AI Solutions',
      brief:
        'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
      slug: 'revolutionizing-business-efficiency-with-ai-solutions',
      coverImage: { url: '/images/blogs/ai-solution.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
  ],
};

const llmFineTuningServiceData: ServiceData = {
  hero: {
    imageUrl: '/service/llm.svg',
    title: 'LLM Fine-Tuning & \n Testing Services',
    subDescription: 'Refine Your LLM Model with Our Experts',
    description:
      'Maximize your AI performance with business-specific fine-tuning and testing of large language models (LLMs). At Softcolon, we tailor every stage of the model optimization process to align with your enterprise goals.',
  },
  features: {
    title: 'Our Comprehensive LLM Fine-Tuning Services',
    description:
      'From strategy and data preparation to deployment and monitoring — we offer end-to-end LLM fine-tuning services for enterprise applications.',
    heroImage1: '/images/service/feature-1.svg',
    heroImage2: '/images/service/feature-2.svg',
    heroImage3: '/images/service/feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: Bot,
        title: 'LLM Strategy Consultation',
        description:
          'We begin with a detailed analysis of your objectives, existing infrastructure, and industry-specific requirements to guide a targeted tuning plan.',
      },
      {
        id: '2',
        icon: Notebook,
        title: 'Custom Model Training',
        description:
          'We choose the right LLM architecture and fine-tune it using your domain-specific data to ensure optimal relevance and performance.',
      },
      {
        id: '3',
        icon: CircuitBoard,
        title: 'Rigorous Testing & Evaluation',
        description:
          'Our team runs a series of quality assurance and performance tests to validate the accuracy, responsiveness, and contextual alignment of your fine-tuned model.',
      },
      {
        id: '4',
        icon: BotMessageSquare,
        title: 'LLM Model Fine-Tuning',
        description:
          'We fine-tune models using your proprietary datasets for higher precision, relevance, and task adaptability.',
      },
      {
        id: '5',
        icon: FolderCode,
        title: 'Data Selection & Preparation',
        description:
          'Our experts clean, format, and curate training data to maximize its impact and eliminate noise or bias.',
      },
      {
        id: '6',
        icon: Bot,
        title: 'LLM Model Integration',
        description:
          'We ensure seamless integration of the fine-tuned model into your existing systems and workflows with minimal disruption.',
      },
    ],
  },
  techStack: {
    title:
      'Hyperparameter TuningParameter Fine-TuningInstruction Fine-TuningTransfer LearningReward ModelingTask-Specific Fine-Tuning',
    subtitle:
      'Our experts adjust model parameters precisely to create niche-specific, business-oriented solutions.',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'Efficient Use of Resources',
      },
      { icon: HiMiniCpuChip, name: 'Business-Centric Training Strategies' },
      { icon: PiLaptopFill, name: 'Precision Tuning for Niche Tasks' },
    ],
  },
  workflow: {
    title: 'Our Fine-Tuning & Testing Workflow',
    description:
      'We follow a systematic approach to ensure optimal model performance and seamless integration.',
    steps: [
      {
        id: 1,
        title: 'Data Processing',
        description:
          'We collect, clean, and structure data from multiple sources to ensure high-quality input for the model.',
        imageUrl: '/images/service/Flow-1.svg',
      },
      {
        id: 2,
        title: 'Model Selection',
        description:
          'We help choose the most appropriate base model based on complexity, use case, and domain requirements.',
        imageUrl: '/images/service/Flow-2.svg',
      },
      {
        id: 3,
        title: 'Parameter Identification',
        description:
          'We identify key training parameters like batch size, learning rate, and context length for optimal adaptation.',
        imageUrl: '/images/service/Flow-3.svg',
      },
      {
        id: 4,
        title: 'Testing & Refinement',
        description:
          'Post-training, we evaluate model performance using benchmarks and real-world scenarios, then refine it further for accuracy.',
        imageUrl: '/images/service/Flow-4.svg',
      },
      {
        id: 5,
        title: 'Deployment & Monitoring',
        description:
          'Once validated, the model is deployed into your infrastructure and continuously monitored for stability and improvement opportunities.',
        imageUrl: '/images/service/Flow-5.svg',
      },
    ],
  },
  whySoftcolon: [
    {
      icon: '/images/general/achievement.svg',
      alt: 'achievement',
      title: 'Cutting-Edge Technical Expertise',
      description:
        'Leveraging the latest AI models and tools for enterprise-grade LLM development.',
    },
    {
      icon: '/images/general/humans.svg',
      alt: 'Global cliente',
      title: 'Ethical & Secure Development',
      description:
        'Building AI solutions that are transparent, bias-aware, and sustainable.',
    },
  ],
  blogs: [
    {
      title: 'Trends, Insights, and Innovations Shaping Tomorrow',
      brief:
        'Explore the latest trends and innovations that are shaping the future of technology and business.',
      slug: 'trends-insights-innovations-shaping-tomorrow',
      coverImage: { url: '/images/blogs/robot.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Transforming Business Operations with AI Technology',
      brief:
        'Discover how AI technology is revolutionizing business operations and driving efficiency.',
      slug: 'transforming-business-operations-with-ai-technology',
      coverImage: { url: '/images/blogs/ai-technology.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Revolutionizing Business Efficiency with AI Solutions',
      brief:
        'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
      slug: 'revolutionizing-business-efficiency-with-ai-solutions',
      coverImage: { url: '/images/blogs/ai-solution.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
  ],
};

const gptIntegrationServiceData: ServiceData = {
  hero: {
    imageUrl: '/service/llm.svg',
    title: 'GPT Integration Services',
    subDescription: 'Connect with Our AI Integration Experts Today',
    description:
      'Transform your operations and customer engagement with end-to-end ChatGPT integration services—designed to match your specific business requirements and technical environment.',
  },
  features: {
    title: 'Our ChatGPT Integration Services',
    description:
      'Our solutions are tailored to address your operational challenges and accelerate digital transformation using the power of ChatGPT.',
    heroImage1: '/images/service/feature-1.svg',
    heroImage2: '/images/service/feature-2.svg',
    heroImage3: '/images/service/feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: Bot,
        title: 'ChatGPT Consulting Services',
        description:
          'We guide you through the strategic and technical aspects of ChatGPT integration, helping you align AI capabilities with business goals.',
      },
      {
        id: '2',
        icon: CircuitBoard,
        title: 'GPT API Integration Services',
        description:
          'We integrate the most suitable GPT APIs (like OpenAI, Azure OpenAI, or custom LLMs) into your products to boost automation, personalization, and efficiency.',
      },
      {
        id: '3',
        icon: FolderCode,
        title: 'GPT-Powered Web & App Development',
        description:
          'We build and enhance applications using advanced GPT capabilities—enabling smart interactions, real-time data processing, and contextual understanding.',
      },
      {
        id: '4',
        icon: BotMessageSquare,
        title: 'GPT Chatbot Integration',
        description:
          'Deploy conversational AI agents that deliver human-like interactions—improving customer support, onboarding, and internal operations.',
      },
      {
        id: '5',
        icon: Notebook,
        title: 'Voice Assistant Integration',
        description:
          'Enable GPT-powered voice interactions in your apps to improve accessibility, efficiency, and hands-free convenience.',
      },
    ],
  },
  techStack: {
    title:
      'OpenAI GPT-4/GPT-4oAnthropic ClaudeMeta LLaMAMistralCohereTransformers by Hugging Face',
    subtitle:
      'Our technology stack ensures robust, scalable, and modern solutions for ChatGPT-powered systems.',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'In-Depth Strategy Consultation',
      },
      { icon: HiMiniCpuChip, name: 'End-to-End Process Mapping' },
      { icon: PiLaptopFill, name: 'Latest Technology Implementation' },
    ],
  },
  workflow: {
    title: 'Our GPT Integration Development Process',
    description:
      'We follow a systematic approach to ensure seamless integration and optimal performance.',
    steps: [
      {
        id: 1,
        title: 'Strategy Consultation',
        description:
          'Analyze your business requirements and identify the best GPT integration approach for your specific use case.',
        imageUrl: '/images/service/Flow-1.svg',
      },
      {
        id: 2,
        title: 'API Selection & Setup',
        description:
          'Choose the most suitable GPT API and configure it according to your technical requirements and budget.',
        imageUrl: '/images/service/Flow-2.svg',
      },
      {
        id: 3,
        title: 'Development & Integration',
        description:
          'Build and integrate GPT capabilities into your existing systems or develop new applications from scratch.',
        imageUrl: '/images/service/Flow-3.svg',
      },
      {
        id: 4,
        title: 'Testing & Optimization',
        description:
          'Conduct thorough testing to ensure accuracy, performance, and reliability of the integrated solution.',
        imageUrl: '/images/service/Flow-4.svg',
      },
      {
        id: 5,
        title: 'Deployment & Monitoring',
        description:
          'Deploy the solution and provide ongoing monitoring and support to ensure optimal performance.',
        imageUrl: '/images/service/Flow-5.svg',
      },
      {
        id: 6,
        title: 'Continuous Enhancement',
        description:
          'Regular updates and improvements based on user feedback and evolving business needs.',
        imageUrl: '/images/service/Flow-6.svg',
      },
    ],
  },
  whySoftcolon: [
    {
      icon: '/images/general/achievement.svg',
      alt: 'achievement',
      title: 'Expert AI Integration Team',
      description:
        'Our team has extensive experience in integrating AI solutions across various industries and use cases.',
    },
    {
      icon: '/images/general/humans.svg',
      alt: 'Global cliente',
      title: 'Scalable & Secure Solutions',
      description:
        'We build solutions that scale with your business while maintaining the highest security standards.',
    },
  ],
  blogs: [
    {
      title: 'Trends, Insights, and Innovations Shaping Tomorrow',
      brief:
        'Explore the latest trends and innovations that are shaping the future of technology and business.',
      slug: 'trends-insights-innovations-shaping-tomorrow',
      coverImage: { url: '/images/blogs/robot.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Transforming Business Operations with AI Technology',
      brief:
        'Discover how AI technology is revolutionizing business operations and driving efficiency.',
      slug: 'transforming-business-operations-with-ai-technology',
      coverImage: { url: '/images/blogs/ai-technology.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Revolutionizing Business Efficiency with AI Solutions',
      brief:
        'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
      slug: 'revolutionizing-business-efficiency-with-ai-solutions',
      coverImage: { url: '/images/blogs/ai-solution.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
  ],
};

const aiChatbotDevelopmentServiceData: ServiceData = {
  hero: {
    imageUrl: '/service/llm.svg',
    title: 'AI Chatbot Development Services',
    subDescription: 'Book a Free Consultation with Our AI Experts',
    description:
      'Revolutionize how your business communicates with intelligent, LLM-powered chatbots. From custom development to seamless integration, Softcolon helps you automate, engage, and elevate your customer experience.',
  },
  features: {
    title: 'Our Chatbot Development Services',
    description:
      'Unlock the full potential of conversational AI with solutions tailored to your goals, industry, and infrastructure.',
    heroImage1: '/images/service/chatbot-feature-1.svg',
    heroImage2: '/images/service/chatbot-feature-2.svg',
    heroImage3: '/images/service/chatbot-feature-3.svg',
    featureList: [
      {
        id: '1',
        icon: Bot,
        title: 'NLP-Driven Chatbot Development',
        description:
          'Harness Natural Language Processing (NLP) to enable fluid, context-aware conversations that reflect your brand tone and logic.',
      },
      {
        id: '2',
        icon: Notebook,
        title: 'Custom Chatbot Development',
        description:
          'We build chatbots tailored to your industry, business model, and use case—ensuring high relevance and performance.',
      },
      {
        id: '3',
        icon: CircuitBoard,
        title: 'Conversational UI/UX Design',
        description:
          'Our team designs intuitive user interfaces that make interactions seamless and human-like, improving user satisfaction and task completion.',
      },
      {
        id: '4',
        icon: BotMessageSquare,
        title: 'Chatbot Architecture Design',
        description:
          'We engineer scalable and flexible chatbot frameworks that integrate seamlessly with your systems while supporting future growth.',
      },
      {
        id: '5',
        icon: FolderCode,
        title: 'Chatbot Integration Services',
        description:
          'Enable smooth integration with mobile apps, enterprise software, CRMs, ERPs, and internal tools for enhanced workflows.',
      },
    ],
  },
  techStack: {
    title:
      'GPT-4/GPT-4oClaudeMistralLLaMA 3Hugging Face TransformersRASALangChainMongoDB',
    subtitle:
      'We use state-of-the-art technologies to ensure our AI chatbot solutions are robust, scalable, and intelligent.',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'Enterprise Software Integration',
      },
      { icon: HiMiniCpuChip, name: 'App & Platform Compatibility' },
      { icon: PiLaptopFill, name: 'Highly Personalized Interactions' },
    ],
  },
  workflow: {
    title: 'Our AI Chatbot Development Process',
    description:
      'We follow a well-defined, agile methodology to ensure efficiency, transparency, and results-driven delivery.',
    steps: [
      {
        id: 1,
        title: 'Consultation',
        description:
          'Understand business requirements, systems, and project scope.',
        imageUrl: '/images/service/Flow-1.svg',
      },
      {
        id: 2,
        title: 'AI Model Training',
        description:
          'Prepare and train custom data to align with your brand voice and use case.',
        imageUrl: '/images/service/Flow-2.svg',
      },
      {
        id: 3,
        title: 'Development',
        description:
          'Develop core functionality and integrate AI features aligned with user expectations.',
        imageUrl: '/images/service/Flow-3.svg',
      },
      {
        id: 4,
        title: 'Testing & Refinement',
        description:
          'Assess performance using metrics, refine conversational flows, and improve accuracy.',
        imageUrl: '/images/service/Flow-4.svg',
      },
      {
        id: 5,
        title: 'Ongoing Optimization',
        description:
          'Continuous monitoring and updates to ensure long-term performance and adaptability.',
        imageUrl: '/images/service/Flow-5.svg',
      },
    ],
  },
  whySoftcolon: [
    {
      icon: '/images/general/achievement.svg',
      alt: 'achievement',
      title: 'Skilled Team of AI Developers',
      description:
        'Our experienced team combines deep technical knowledge with domain understanding to deliver chatbots that solve real business problems.',
    },
    {
      icon: '/images/general/humans.svg',
      alt: 'Global cliente',
      title: 'End-to-End Integration Support',
      description:
        'We provide comprehensive support from consultation to post-launch optimization, ensuring seamless integration with your existing systems.',
    },
  ],
  blogs: [
    {
      title: 'Trends, Insights, and Innovations Shaping Tomorrow',
      brief:
        'Explore the latest trends and innovations that are shaping the future of technology and business.',
      slug: 'trends-insights-innovations-shaping-tomorrow',
      coverImage: { url: '/images/blogs/robot.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Transforming Business Operations with AI Technology',
      brief:
        'Discover how AI technology is revolutionizing business operations and driving efficiency.',
      slug: 'transforming-business-operations-with-ai-technology',
      coverImage: { url: '/images/blogs/ai-technology.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
    {
      title: 'Revolutionizing Business Efficiency with AI Solutions',
      brief:
        'Learn how AI solutions are enhancing business efficiency and productivity across industries.',
      slug: 'revolutionizing-business-efficiency-with-ai-solutions',
      coverImage: { url: '/images/blogs/ai-solution.svg' },
      publishedAt: '2022-08-06T00:00:00.000Z',
    },
  ],
};

// Export service data mapping
export const serviceDataMap: Record<string, ServiceData> = {
  'ai-agent': aiAgentServiceData,
  'llm-powered-chatbots': llmPoweredChatbotsServiceData,
  'llm-testing--fine-tuning': llmFineTuningServiceData,
  'gpt-integration': gptIntegrationServiceData,
  'ai-chatbot-development': aiChatbotDevelopmentServiceData,
};

// Function to get service data by service name
export const getServiceData = (serviceName: string): ServiceData => {
  const serviceKey = serviceName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  console.log(`Fetching service data for: ${serviceKey}`);
  return serviceDataMap[serviceKey] || aiAgentServiceData;
};
