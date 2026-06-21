import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 4.2 });

  tl.fromTo(
    '.hero-subtitle',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  )
    .fromTo(
      '.hero-title-line',
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      '.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero-scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.2'
    );

  return tl;
}

export function initHeroParallax() {
  gsap.to('.hero-mountains', {
    y: 150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  gsap.to('.hero-dunes', {
    y: 80,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.hero-content', {
    y: -100,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '60% top',
      scrub: 1,
    },
  });
}

export function initHeroAmbient() {
  gsap.to('.hero-palm-left', {
    rotation: 2,
    skewX: 1,
    transformOrigin: 'bottom center',
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });

  gsap.to('.hero-palm-right', {
    rotation: -1.5,
    skewX: -0.5,
    transformOrigin: 'bottom center',
    duration: 3.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.5,
  });

  gsap.to('.hero-sun', {
    scale: 1.1,
    opacity: 0.6,
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}
