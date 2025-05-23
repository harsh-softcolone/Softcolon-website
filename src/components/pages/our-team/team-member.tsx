'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bgColor: string;
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className='team-member-container opacity-0'>
      <Card
        className={`overflow-hidden rounded-[30px] border-none outline-0 shadow-sm h-[457px] ${member?.bgColor} 
                   transition-all duration-500 ease-out hover:scale-[1.02] group relative p-0 max-w-[330px]`}
      >
        <div className='relative h-full w-full'>
          {/* Always-visible black gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none' />

          {/* Gradient Overlay */}
          <div
            className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500 z-10'
          />

          {/* Image */}
          <Image
            src={member?.image}
            alt={member?.name}
            fill
            className='object-cover object-center rounded-[30px] transition-transform duration-700 group-hover:scale-110'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            priority
          />

          {/* Content */}
          <div
            className='absolute bottom-0 left-0 right-0 p-6 text-center opacity-0 transform translate-y-8
                      transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-20'
          >
            <div
              className='bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg transform transition-all duration-500
                          group-hover:bg-white/95 group-hover:shadow-xl'
            >
              <h3 className='text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
                {member?.name}
              </h3>
              <p className='text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300'>
                {member?.role}
              </p>
            </div>
          </div>

          {/* Social Links (Optional) */}
          <div
            className='absolute top-4 right-4 opacity-0 transform translate-x-4 transition-all duration-500 
                        group-hover:opacity-100 group-hover:translate-x-0 z-20'
          >
            <div className='flex gap-2'>
              <button className='p-2 cursor-pointer bg-white/90 rounded-full hover:bg-white transition-colors duration-300'>
                <svg
                  className='w-4 h-4 text-gray-700'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                </svg>
              </button>
              <button className='p-2 cursor-pointer bg-white/90 rounded-full hover:bg-white transition-colors duration-300'>
                <svg
                  className='w-4 h-4 text-gray-700'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
