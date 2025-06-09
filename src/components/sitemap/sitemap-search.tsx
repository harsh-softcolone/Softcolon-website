'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SitemapSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalPosts: number;
  filteredCount: number;
}

export function SitemapSearch({
  searchTerm,
  onSearchChange,
  totalPosts,
  filteredCount,
}: SitemapSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='mb-8'>
      <div className='relative'>
        <div
          className={`relative flex items-center transition-all duration-300 ${
            isFocused ? 'transform scale-[1.02]' : ''
          }`}
        >
          <Search className='absolute left-4 h-5 w-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search pages and blog posts...'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className='w-full pl-12 pr-12 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:bg-gray-900/70 transition-all duration-300'
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className='absolute right-4 p-1 text-gray-400 hover:text-white transition-colors duration-200'
            >
              <X className='h-4 w-4' />
            </button>
          )}
        </div>

        {/* Search results indicator */}
        {searchTerm && (
          <div className='mt-3 text-sm text-gray-400'>
            Showing {filteredCount} of {totalPosts} results for &quot;
            {searchTerm}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
