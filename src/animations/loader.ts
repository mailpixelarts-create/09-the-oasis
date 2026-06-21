import { gsap } from 'gsap';

export function initLoaderAnimations(onComplete: () => void) {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to('.loader', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete,
      });
    },
  });

  // Sand particles
  const particles = document.querySelectorAll('.sand-particle');
  gsap.set(particles, { opacity: 0 });
  particles.forEach((particle, i) => {
    gsap.to(particle, {
      opacity: gsap.utils.random(0.3, 0.8),
      x: gsap.utils.random(-200, 200),
      y: gsap.utils.random(-150, -50),
      rotation: gsap.utils.random(0, 360),
      duration: gsap.utils.random(2, 4),
      delay: i * 0.05,
      ease: 'power1.out',
      repeat: -1,
      yoyo: true,
    });
  });

  // Heat shimmer
  const shimmer = document.querySelector('.heat-shimmer');
  if (shimmer) {
    gsap.to(shimmer, {
      scaleY: 1.02,
      y: -2,
      duration: 1.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  // Counter
  const counter = { value: 0 };
  const counterEl = document.querySelector('.loader-counter');
  const progressBar = document.querySelector('.loader-progress-bar');

  tl.to(counter, {
    value: 100,
    duration: 3,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (counterEl) counterEl.textContent = `${Math.round(counter.value)}%`;
      if (progressBar) (progressBar as HTMLElement).style.transform = `scaleX(${counter.value / 100})`;
    },
  });

  tl.fromTo('.loader-logo', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=2');
  tl.fromTo('.loader-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=1.5');

  return tl;
}
