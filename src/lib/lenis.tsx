'use client';
import gsap from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    lenisRef.current?.lenis?.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  // options={{
  // 			duration: 0.8, // Faster duration to make scrolling more responsive
  // 			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Add explicit easing
  // 			wheelMultiplier: 1,
  // 			touchMultiplier: 2,
  // 			smoothWheel: true,
  // 			syncTouch: false, // Disabling syncTouch can help with performance
  // 		}}
  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
