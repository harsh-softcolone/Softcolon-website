'use client';

import CaseStudyTemplate from '@/templates/case-study-template';
import { useParams } from 'next/navigation';
import React from 'react';
import { caseStudyData } from '@/data/case-study-data';

const CaseStudyDetailPage = () => {
  const params = useParams();
  const rawId = params.id;
  const caseStudyName = rawId ? decodeURIComponent(rawId as string) : '';
  return (
    <div>
      <CaseStudyTemplate
        caseStudyName={caseStudyName}
        caseStudyData={caseStudyData}
      />
    </div>
  );
};

export default CaseStudyDetailPage;
