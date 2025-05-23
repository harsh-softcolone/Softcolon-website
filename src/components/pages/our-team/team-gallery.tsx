'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TeamMember from './team-member';
import { teamMembers } from '@/lib/data';

export default function TeamGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const ctx = gsap.context(() => {
      // Initial animation for the gallery
      gsap.fromTo(
        '.team-member-container',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
      );
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={galleryRef}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'
    >
      {teamMembers?.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  );
}
