'use client';
import { platformData } from '@/data/platform-data';
import PlatformTemplate from '@/templates/platform-template';
import { useParams } from 'next/navigation';
import React from 'react';

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
