import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageBreadCrumbSectionProps {
  items: BreadcrumbItemType[];
}

const PageBreadCrumbSection = ({ items }: PageBreadCrumbSectionProps) => {
  return (
    <Breadcrumb className='font-ibm-plex-sans text-sm sm:text-lg font-normal leading-normal'>
      <BreadcrumbList>
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem>
              {item.href && idx !== items.length - 1 ? (
                <BreadcrumbLink
                  href={item.href}
                  className='text-white hover:text-[#1BA1E3] transition-colors duration-200 font-ibm-plex-sans text-sm sm:text-lg font-normal leading-normal'
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className='text-[#1BA1E3] font-ibm-plex-sans text-sm sm:text-lg font-normal leading-normal'>
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {idx < items.length - 1 && (
              <BreadcrumbSeparator className='text-white/60' />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadCrumbSection;
