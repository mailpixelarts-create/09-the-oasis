import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.scss';

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.story-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.story-text p',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-text',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.story-image-wrapper',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-image-wrapper',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.story-map-route',
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.story-map',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.story-map-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: '.story-map',
            start: 'top 70%',
          },
        }
      );

      gsap.to('.story-image-parallax', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-image-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="story section" id="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-content">
            <div className="story-label section-label">Our Story</div>
            <h2 className="story-title section-title">
              Along Ancient<br />Caravan Routes
            </h2>
            <div className="story-text">
              <p>
                For centuries, desert caravans carried precious cargo across vast, sun-scorched landscapes.
                Coffee was among the most treasured — a bean that would unite civilizations and
                transcend borders.
              </p>
              <p>
                THE OASIS draws inspiration from these ancient trade routes. We source our beans from the
                same Ethiopian highlands where coffee was first discovered, tracing a line from
                the birthplace of coffee to your cup.
              </p>
              <p>
                Every detail of our space echoes the desert's quiet grandeur — from the travertine
                surfaces carved by time to the warm light that bathes each room like a Saharan sunset.
              </p>
            </div>

            <div className="story-stats">
              <div className="story-stat">
                <span className="story-stat-number">7</span>
                <span className="story-stat-label">Origin Countries</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-number">1,800m</span>
                <span className="story-stat-label">Avg. Elevation</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-number">100%</span>
                <span className="story-stat-label">Direct Trade</span>
              </div>
            </div>
          </div>

          <div className="story-visual">
            <div className="story-image-wrapper">
              <div className="story-image-parallax">
                <div className="img-wrapper story-image">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                    alt="Coffee beans being poured in desert sunlight"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="story-image-accent" />
            </div>

            <div className="story-map">
              <svg viewBox="0 0 300 200" fill="none">
                <path
                  className="story-map-route"
                  d="M50,150 Q100,100 150,120 Q200,140 250,60"
                  stroke="rgba(181, 106, 68, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
                <circle className="story-map-dot" cx="50" cy="150" r="4" fill="#B56A44" />
                <circle className="story-map-dot" cx="150" cy="120" r="3" fill="#C8A97E" />
                <circle className="story-map-dot" cx="250" cy="60" r="5" fill="#4B7F67" />
              </svg>
              <div className="story-map-labels">
                <span style={{ left: '12%', bottom: '15%' }}>Ethiopia</span>
                <span style={{ left: '45%', bottom: '35%' }}>Yemen</span>
                <span style={{ left: '78%', bottom: '60%' }}>The Oasis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
