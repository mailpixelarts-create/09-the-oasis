import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGalleryAnimations() {
  gsap.utils.toArray('.gallery-item').forEach((item: any, i: number) => {
    gsap.fromTo(
      item,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        },
      }
    );
  });
}

export function initLightboxAnimations() {
  const openLightbox = (index: number) => {
    gsap.fromTo('.gallery-lightbox', { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.fromTo('.gallery-lightbox-image', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
  };

  const closeLightbox = () => {
    gsap.to('.gallery-lightbox', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  return { openLightbox, closeLightbox };
}

export function initGalleryHover() {
  document.querySelectorAll('.gallery-item').forEach((item) => {
    const overlay = item.querySelector('.gallery-item-overlay');
    const img = item.querySelector('img');

    item.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
    });
  });
}
