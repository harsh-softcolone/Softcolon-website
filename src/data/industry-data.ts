import { IndustryDataTypes } from '@/interface';
import { MdHealthAndSafety } from 'react-icons/md';
import { BsDatabaseFillAdd, BsDatabaseFillGear } from 'react-icons/bs';
import { GiLifeBar, GiHealthNormal } from 'react-icons/gi';
import { FaUserCog, FaDisease, FaLaptopMedical } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';
import { HiMiniCpuChip } from 'react-icons/hi2';
import { PiLaptopFill } from 'react-icons/pi';
import { RiPresentationFill } from 'react-icons/ri';
import { FaRobot } from 'react-icons/fa';
import { MdCloudDone } from 'react-icons/md';

export const industryTemplateData: IndustryDataTypes = {
  hero: {
    imageUrl: '/images/industry/health-care/hero.svg',
    title: 'AI gives tailored solutions to different healthcare sectors',
    description:
      'From improving patient outcomes to optimizing operational efficiency, AI healthcare solutions meet the unique needs of everyone',
  },
  useCaseGrid: {
    title: 'Business Benefits',
    subtitle: 'Value propositions of integrating AI in telehealth',
    benefits: [
      {
        title: 'Telemedicine',
        description:
          'AI telemedicine delivers real-time diagnostics and personalized care through secure virtual consultations, improving access and treatment quality.',
        icon: MdHealthAndSafety,
      },
      {
        title: 'Drug Discovery',
        description:
          'AI accelerates drug discovery by analyzing vast datasets, predicting drug interactions, and identifying promising treatment methods.',
        icon: BsDatabaseFillAdd,
      },
      {
        title: 'Life Sciences',
        description:
          'AI-powered tools enhance biotechnology and genomics by enabling researchers to analyze complex biological data and uncover new therapeutic possibilities.',
        icon: GiLifeBar,
      },
      {
        title: 'Patient Management',
        description:
          'AI systems streamline patient data management by automating record-keeping and generating personalized care plans for improved healthcare delivery.',
        icon: FaUserCog,
      },
      {
        title: 'Healthcare Workforce Optimization',
        description:
          'AI telemedicine provides real-time diagnostics and personalized treatment through secure virtual consultations, improving access and care quality.',
        icon: GiHealthNormal,
      },
      {
        title: 'Data Management',
        description:
          'AI simplifies healthcare data management by automating data entry, organizing records, and ensuring clean, structured datasets for better decision-making.',
        icon: BsDatabaseFillGear,
      },
      {
        title: 'Disease Forecasting',
        description:
          'AI leverages predictive modeling to analyze health trends, forecast disease outbreaks, and identify at-risk populations—enabling timely and proactive interventions.',
        icon: FaDisease,
      },
      {
        title: 'Medical Research Support',
        description:
          'AI empowers researchers by analyzing complex datasets, uncovering patterns, and generating data-driven hypotheses, accelerating the path to medical breakthroughs.',
        icon: FaLaptopMedical,
      },
    ],
  },
  industryOverview: {
    imageUrl: '/images/industry/health-care/industryOverview.svg',
    title: 'Transforming Healthcare with Intelligent AI Solutions',
    description:
      'Artificial intelligence is reshaping healthcare—improving patient outcomes, streamlining operations, and enhancing diagnostic accuracy through technologies like predictive analytics and machine learning. Our expert team develops innovative, AI-powered solutions tailored to the unique demands of the healthcare industry. By harnessing data-driven insights and enabling precision in treatment, we help healthcare providers deliver smarter, faster, and more personalized care.',
  },
  techStack: {
    title: 'Revolutionizing Healthcare with AI Technologies',
    subtitle:
      'Advanced AI in Healthcare: Driving Innovation from Analytics to Automation',
    technologies: [
      {
        icon: LuBrainCircuit,
        name: 'Machine Learning',
      },
      { icon: HiMiniCpuChip, name: 'Natural Language Processing (NLP)' },
      { icon: PiLaptopFill, name: 'Computer Vision' },
      { icon: RiPresentationFill, name: 'Deep Learning' },
      { icon: FaRobot, name: 'Robotics' },
      { icon: MdCloudDone, name: 'Cloud Computing' },
    ],
  },
  innovation: {
    title: 'Our AI-Driven Innovation in Healthcare',
    description:
      'Explore how we leverage cutting-edge AI technologies to create customized healthcare solutions—tackling industry-specific challenges and unlocking new opportunities for better care and efficiency.',
    imageUrl: '/images/industry/health-care/innovation.svg',
    contentBlocks: [
      {
        title: 'Data-Driven Innovation',
        description:
          'We leverage vast and diverse healthcare data to power advanced AI models—enabling accurate predictive analytics, personalized treatments, and proactive care strategies.',
      },
      {
        title: 'Regulatory Compliance',
        description:
          'We prioritize data security and patient privacy by strictly complying with industry regulations such as GDPR and HIPAA, ensuring full legal and ethical alignment.',
      },
      {
        title: 'Ethical AI Development',
        description:
          'Our AI solutions are built on a foundation of ethics, ensuring transparency, fairness, and bias mitigation to uphold trust and responsibility in healthcare.',
      },
      {
        title: 'Human-AI Collaboration',
        description:
          'By integrating AI seamlessly with clinical expertise, we empower healthcare professionals to make smarter, faster, and more informed decisions—enhancing both efficiency and patient outcomes.',
      },
    ],
  },
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
