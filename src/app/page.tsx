import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
import HeroSection from '@/components/pages/home/hero-section';
import BrandShowcase from '@/components/sliders/brand-showcase';

export default function Home() {
  return (
    <main className='relative'>
      <AbstractBlobBackground />
      <HeroSection />
      <BrandShowcase />
    </main>
  );
}
