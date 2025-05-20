import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
import CaseStudySection from '@/components/pages/home/case-study-section';
import HeroSection from '@/components/pages/home/hero-section';
import PartnersSection from '@/components/pages/home/partner-section';
import ServicesSection from '@/components/pages/home/service-section';
import BrandShowcase from '@/components/sliders/brand-showcase';
export default function Home() {
  return (
    <main className='relative overflow-x-hidden'>
      <AbstractBlobBackground className='top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      <AbstractBlobBackground className='top-1/12 -left-20 -translate-x-1/2 -translate-y-1/2' />
      <HeroSection />
      <BrandShowcase />
      <ServicesSection />
      <PartnersSection />
      <CaseStudySection />
    </main>
  );
}
