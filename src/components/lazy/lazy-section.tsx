'use client';

import { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const LazySection = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? (
        children
      ) : (
        <div className='min-h-[200px] flex items-center justify-center'>
          <div className='w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin' />
        </div>
      )}
    </div>
  );
};

export default LazySection;
