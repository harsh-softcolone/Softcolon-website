// hooks/useScrollReveal.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  start?: string;
  end?: string;
  y?: number;
  duration?: number;
}

export const useScrollReveal = (
  targetRef: React.RefObject<HTMLElement>,
  options?: ScrollRevealOptions,
) => {
  useEffect(() => {
    if (!targetRef.current) return;

    gsap.fromTo(
      targetRef.current,
      { autoAlpha: 0, y: options?.y ?? 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: options?.duration ?? 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: targetRef.current,
          start: options?.start ?? 'top 100%',
          end: options?.end ?? 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, [targetRef, options]);
};
