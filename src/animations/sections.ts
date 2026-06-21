import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSectionReveal() {
  // Generic section label animation
  gsap.utils.toArray('.section-label').forEach((label: any) => {
    gsap.fromTo(label, { x: -40, opacity: 0 }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: label,
        start: 'top 85%',
      },
    });
  });

  // Generic section title animation
  gsap.utils.toArray('.section-title').forEach((title: any) => {
    gsap.fromTo(title, { y: 80, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      },
    });
  });

  // Generic section subtitle
  gsap.utils.toArray('.section-subtitle').forEach((subtitle: any) => {
    gsap.fromTo(subtitle, { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: subtitle,
        start: 'top 85%',
      },
    });
  });
}

export function initImageParallax() {
  gsap.utils.toArray('.img-wrapper img').forEach((img: any) => {
    gsap.fromTo(img, { y: -20 }, {
      y: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  });
}

export function initButtonReveal() {
  gsap.utils.toArray('.btn').forEach((btn: any) => {
    gsap.fromTo(btn, { y: 20, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: btn,
        start: 'top 90%',
      },
    });
  });
}
