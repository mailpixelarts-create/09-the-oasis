import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerOptions {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

export default function useScrollTrigger(options: ScrollTriggerOptions) {
  useEffect(() => {
    const { trigger, start = 'top 80%', end, scrub, pin, onEnter, onLeave } = options;

    const st = ScrollTrigger.create({
      trigger,
      start,
      end,
      scrub,
      pin,
      onEnter,
      onLeave,
    });

    return () => {
      st.kill();
    };
  }, [options]);
}
