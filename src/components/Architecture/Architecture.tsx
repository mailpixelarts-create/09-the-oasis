import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Architecture.scss';

export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.arch-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.arch-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.arch-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.arch-title',
            start: 'top 80%',
          },
        }
      );

      // Image parallax
      gsap.to('.arch-image-parallax', {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: '.arch-images',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Feature blocks
      gsap.fromTo(
        '.arch-feature',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.arch-features',
            start: 'top 80%',
          },
        }
      );

      // Large image reveal
      gsap.fromTo(
        '.arch-large-image',
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.arch-large-image',
            start: 'top 80%',
          },
        }
      );

      gsap.to('.arch-large-image img', {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.arch-large-image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="arch section" id="architecture">
      <div className="container">
        <div className="arch-header">
          <div className="arch-label section-label">Architecture</div>
          <h2 className="arch-title section-title">
            Travertine &<br />Geometry
          </h2>
          <p className="section-subtitle">
            Our space is a dialogue between ancient desert materials and contemporary precision.
            Every surface tells a story of time, pressure, and transformation.
          </p>
        </div>

        <div className="arch-images">
          <div className="arch-image-pair">
            <div className="arch-image-item arch-image-parallax">
              <div className="img-wrapper arch-image">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                  alt="Travertine arch detail"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="arch-image-item">
              <div className="img-wrapper arch-image">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                  alt="Desert architecture at golden hour"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="arch-features">
          <div className="arch-feature">
            <span className="arch-feature-number">01</span>
            <h3 className="arch-feature-title">Travertine Surfaces</h3>
            <p className="arch-feature-text">
              Italian travertine, formed over millennia by mineral springs, lines our counters
              and walls. Each slab is unique — a geological fingerprint.
            </p>
          </div>

          <div className="arch-feature">
            <span className="arch-feature-number">02</span>
            <h3 className="arch-feature-title">Concrete Geometry</h3>
            <p className="arch-feature-text">
              Board-formed concrete captures the grain of desert wood. Sharp angles
              dissolve into curves inspired by wind-carved sandstone.
            </p>
          </div>

          <div className="arch-feature">
            <span className="arch-feature-number">03</span>
            <h3 className="arch-feature-title">Light Architecture</h3>
            <p className="arch-feature-text">
              Angled skylights and light wells transform sunlight into a living material —
              painting the space with the sun's daily journey.
            </p>
          </div>
        </div>

        <div className="arch-large-image">
          <div className="img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80"
              alt="THE OASIS interior - travertine and light"
              loading="lazy"
            />
          </div>
          <div className="arch-large-caption">
            <span>THE OASIS Interior</span>
            <span>Travertine, concrete, and natural light</span>
          </div>
        </div>
      </div>
    </section>
  );
}
