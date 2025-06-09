'use client';

import type React from 'react';

import Link from 'next/link';
import { ExternalLink, Calendar } from 'lucide-react';

interface SitemapSectionProps {
  title: string;
  description?: string;
  links: Array<{
    href: string;
    title: string;
    description?: string;
    publishedAt?: string;
  }>;
  icon?: React.ReactNode;
}

export function SitemapSection({
  title,
  description,
  links,
  icon,
}: SitemapSectionProps) {
  if (links.length === 0) return null;

  return (
    <div className='mb-12'>
      <div className='flex items-center gap-3 mb-6'>
        {icon && <div className='text-gray-400'>{icon}</div>}
        <div>
          <h2 className='text-2xl font-semibold text-white'>{title}</h2>
          {description && (
            <p className='text-gray-400 text-sm mt-1'>{description}</p>
          )}
        </div>
        <div className='ml-auto'>
          <span className='px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full'>
            {links.length} {links.length === 1 ? 'page' : 'pages'}
          </span>
        </div>
      </div>

      <div className='grid gap-3'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='group block p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:bg-gray-900/50 hover:border-gray-700 transition-all duration-300'
          >
            <div className='flex items-start justify-between'>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <h3 className='text-white font-medium group-hover:text-blue-400 transition-colors duration-200 truncate'>
                    {link.title}
                  </h3>
                  <ExternalLink className='h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0' />
                </div>

                {link.description && (
                  <p className='text-gray-400 text-sm line-clamp-2 mb-2'>
                    {link.description}
                  </p>
                )}

                {link.publishedAt && (
                  <div className='flex items-center gap-4 text-xs text-gray-500'>
                    {link.publishedAt && (
                      <div className='flex items-center gap-1'>
                        <Calendar className='h-3 w-3' />
                        {new Date(link.publishedAt).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
