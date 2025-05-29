// hooks/useGsapScrollReveal.ts
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Direction = 'left' | 'right';

export const useGsapScrollReveal = (
  ref: React.RefObject<HTMLElement>,
  direction: Direction = 'left',
  options?: {
    offset?: number;
    duration?: number;
    start?: string;
    ease?: string;
  },
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element || element.dataset.animated === 'true') return;

    element.dataset.animated = 'true'; // prevent reanimation

    const {
      offset = 100,
      duration = 1,
      start = 'top 85%',
      ease = 'power2.out',
    } = options || {};

    const fromX = direction === 'left' ? -offset : offset;

    gsap.fromTo(
      element,
      {
        x: fromX,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none reverse',
        },
      },
    );

    return () => {
      ScrollTrigger.getById(element as unknown as string)?.kill();
    };
  }, [ref, direction, options]);
};
