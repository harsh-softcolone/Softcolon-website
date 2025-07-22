import ServiceTemplate from '@/templates/service-template';
import { getHashnodePosts } from '@/lib/hashnode';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const rawId = resolvedParams.id;
  const serviceName = rawId ? decodeURIComponent(rawId as string) : '';

  const posts = await getHashnodePosts();

  return (
    <div className='relative overflow-x-hidden '>
      <ServiceTemplate serviceName={serviceName} posts={posts} />
    </div>
  );
};

export default ServiceDetailPage;
