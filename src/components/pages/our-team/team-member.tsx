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
                   transition-all mx-auto duration-500 ease-out hover:scale-[1.02] group relative p-0 max-w-[330px]`}
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
        </div>
      </Card>
    </div>
  );
}
