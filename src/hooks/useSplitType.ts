import { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

interface SplitTextOptions {
  target: string | Element;
  type?: 'chars' | 'words' | 'lines' | 'chars,words' | 'chars,lines' | 'words,lines' | 'chars,words,lines';
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

export default function useSplitType(options: SplitTextOptions) {
  useEffect(() => {
    const { target, type = 'chars,words', stagger = 0.02, duration = 0.8, delay = 0, ease = 'power3.out' } = options;

    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;

    const splitText = new SplitType(element as HTMLElement, { types: type.split(',') as any });

    gsap.fromTo(
      splitText.chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration,
        stagger,
        delay,
        ease,
      }
    );

    return () => {
      splitText.revert();
    };
  }, [options]);
}
