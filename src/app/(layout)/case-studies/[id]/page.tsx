'use client';

import CaseStudyTemplate from '@/templates/case-study-template';
import { useParams } from 'next/navigation';
import React from 'react';

const CaseStudyDetailPage = () => {
  const params = useParams();
  const rawId = params.id;
  const caseStudyName = rawId ? decodeURIComponent(rawId as string) : '';
  return (
    <div>
      <CaseStudyTemplate caseStudyName={caseStudyName} />
    </div>
  );
};

export default CaseStudyDetailPage;
