import { industryTemplateData } from '@/data/industry-data';
import IndustryDetailTemplate from '@/templates/industry-detail-template';
import { getHashnodePosts } from '@/lib/hashnode';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

const IndustryDetailPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const rawId = resolvedParams.id;
  const industryName = rawId ? decodeURIComponent(rawId as string) : '';

  const posts = await getHashnodePosts();

  return (
    <div className='relative overflow-x-hidden'>
      <IndustryDetailTemplate
        industryName={industryName}
        industryData={industryTemplateData}
        posts={posts}
      />
    </div>
  );
};

export default IndustryDetailPage;
