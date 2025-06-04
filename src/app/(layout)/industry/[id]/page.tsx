'use client';
import { industryTemplateData } from '@/data/industry-data';
import IndustryDetailTemplate from '@/templates/industry-detail-template';
import { useParams } from 'next/navigation';
import React from 'react';

const IndustryDetailPage = () => {
  const params = useParams();
  const rawId = params.id;
  const industryName = rawId ? decodeURIComponent(rawId as string) : '';
  console.log(industryName);
  return (
    <div className='relative overflow-x-hidden'>
      <IndustryDetailTemplate
        industryName={industryName}
        industryData={industryTemplateData}
      />
    </div>
  );
};

export default IndustryDetailPage;
