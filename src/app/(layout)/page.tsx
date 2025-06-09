import AbstractBlobBackground from '@/components/animated/abstract-blob-background';
import CaseStudySection from '@/components/pages/home/case-study-section';
import HeroSection from '@/components/pages/home/hero-section';
import PartnersSection from '@/components/pages/home/partner-section';
import ServicesSection from '@/components/pages/home/service-section';
import WhySoftcolon from '@/components/pages/home/why-softcolon';
import BrandShowcase from '@/components/sliders/brand-showcase';
import BlogsSection from '@/components/pages/general/blogs-section';
import GetInTouchSection from '@/components/pages/general/get-in-touch-section';
import { getHashnodePosts } from '@/lib/hashnode';

export default async function Home() {
  const posts = await getHashnodePosts();
  return (
    <main className='relative overflow-x-hidden'>
      <AbstractBlobBackground className='top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />

      <HeroSection />
      <BrandShowcase />

      <ServicesSection />

      <PartnersSection />

      <CaseStudySection />

      <WhySoftcolon />

      <BlogsSection blogsArray={posts.posts.slice(0, 3)} isMoreBlogs={true} />

      <GetInTouchSection />
    </main>
  );
}
