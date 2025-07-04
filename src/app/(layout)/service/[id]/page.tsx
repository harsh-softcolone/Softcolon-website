'use client';
import ServiceTemplate from '@/templates/service-template';
import { useParams } from 'next/navigation';
import React from 'react';

const ServiceDetailPage = () => {
  const params = useParams();
  const rawId = params.id;
  const serviceName = rawId ? decodeURIComponent(rawId as string) : '';
  return (
    <div className='relative overflow-x-hidden '>
      <ServiceTemplate serviceName={serviceName} />
    </div>
  );
};

export default ServiceDetailPage;
