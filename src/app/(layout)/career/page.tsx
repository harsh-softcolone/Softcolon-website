'use client';
import Footer from '@/components/footer/footer';
import CareerForm from '@/components/forms/career-form';
import SectionHeader from '@/components/header/section-header';
import CareerSectionGrid from '@/components/pages/career/career-section-grid';
import PageHeader from '@/components/shared/page-header';
import dynamic from 'next/dynamic';
import React from 'react';

// loads components Lazy
const PhotoGallerySection = dynamic(
  () => import('@/components/pages/about-us/photo-gallary-section'),
);

const CareerPage = () => {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Banner Section */}
      <PageHeader
        title='Career'
        breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Career' }]}
      />
      <CareerSectionGrid />
      <PhotoGallerySection
        header={
          <SectionHeader
            name='Gallery'
            className='mx-auto mt-10 md:mt-24 mb-10'
          />
        }
        title={
          <h1 className='text-3xl md:text-5xl font-medium text-center text-white mb-12 font-ibm-plex-sans'>
            Timeless photos that evoke
            <br className='hidden md:block' />
            emotion and memories.
          </h1>
        }
      />
      <CareerForm />
      <Footer />
    </div>
  );
};

export default CareerPage;
