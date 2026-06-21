import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GALLERY_IMAGES } from '../../utils/constants';
import './Gallery.scss';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.gallery-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-title',
            start: 'top 80%',
          },
        }
      );

      document.querySelectorAll('.gallery-item').forEach((item, i) => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.gallery-lightbox',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.gallery-lightbox-image',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedImage]);

  const closeLightbox = () => {
    gsap.to('.gallery-lightbox', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setSelectedImage(null),
    });
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const next = (selectedImage + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    gsap.to('.gallery-lightbox-image', {
      opacity: 0,
      x: direction * -50,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setSelectedImage(next);
        gsap.fromTo(
          '.gallery-lightbox-image',
          { opacity: 0, x: direction * 50 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
        );
      },
    });
  };

  return (
    <section ref={sectionRef} className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-label section-label">Gallery</div>
          <h2 className="gallery-title section-title">
            Visual<br />Journal
          </h2>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={index}
              className={`gallery-item gallery-item--${(index % 5) + 1}`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="img-wrapper">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{image.category}</span>
                <span className="gallery-item-expand">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox-close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <button
            className="gallery-lightbox-nav gallery-lightbox-nav--prev"
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-lightbox-image">
              <img
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
              />
            </div>
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-category">{GALLERY_IMAGES[selectedImage].category}</span>
              <p className="gallery-lightbox-alt">{GALLERY_IMAGES[selectedImage].alt}</p>
              <span className="gallery-lightbox-counter">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>

          <button
            className="gallery-lightbox-nav gallery-lightbox-nav--next"
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
