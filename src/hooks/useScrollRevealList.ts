import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollRevealList(
  itemRefs: React.RefObject<HTMLElement[]>,
  direction: 'left' | 'right' = 'left',
) {
  useEffect(() => {
    if (!itemRefs.current || itemRefs.current.length === 0) return;

    const elements = itemRefs.current;

    elements.forEach((el) => {
      if (!el) return;

      gsap.set(el, {
        autoAlpha: 0,
        x: direction === 'left' ? -80 : 80,
      });

      gsap.to(el, {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [itemRefs, direction]);
}
