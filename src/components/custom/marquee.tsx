'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  speed?: number;
  showFade?: boolean;
  fadeWidth?: string;
  fadeColor?: string;
  gap?: number;
}

export function Marquee({
  children,
  className,
  direction = 'left',
  pauseOnHover = false,
  speed = 20,
  showFade = true,
  fadeWidth = '100px',
  fadeColor = 'white',
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children]);

  const duration = contentWidth / speed;

  return (
    <div
      className={cn('overflow-hidden relative', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {showFade && (
        <>
          <div
            className='absolute top-0 left-0 z-10 h-full pointer-events-none'
            style={{
              width: fadeWidth,
              background: `linear-gradient(to right, ${fadeColor}, transparent)`,
            }}
          />
          <div
            className='absolute top-0 right-0 z-10 h-full pointer-events-none'
            style={{
              width: fadeWidth,
              background: `linear-gradient(to left, ${fadeColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        className='flex whitespace-nowrap gap-20' // Added gap for spacing
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
          animationDuration: `${duration}s`,
          animationName: 'marquee',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
        }}
      >
        <div ref={contentRef} className='flex items-center gap-20'>
          {children}
        </div>
        <div aria-hidden='true' className='flex items-center gap-20'>
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
