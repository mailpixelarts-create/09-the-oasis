import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OasisGarden.scss';

export default function OasisGarden() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.garden-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.garden-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.garden-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.garden-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.garden-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.garden-text',
            start: 'top 80%',
          },
        }
      );

      // Interactive palms
      document.querySelectorAll('.garden-palm').forEach((palm) => {
        gsap.fromTo(
          palm,
          { y: 40, opacity: 0, scaleY: 0.8 },
          {
            y: 0,
            opacity: 1,
            scaleY: 1,
            duration: 1.2,
            ease: 'power3.out',
            transformOrigin: 'bottom center',
            scrollTrigger: {
              trigger: palm,
              start: 'top 90%',
            },
          }
        );

        // Continuous sway
        gsap.to(palm, {
          rotation: gsap.utils.random(-2, 2),
          duration: gsap.utils.random(3, 5),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: gsap.utils.random(0, 2),
        });
      });

      // Sunlight beams
      gsap.fromTo(
        '.garden-sunbeam',
        { opacity: 0, scaleY: 0 },
        {
          opacity: 0.15,
          scaleY: 1,
          duration: 2,
          stagger: 0.3,
          ease: 'power2.out',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.garden-scene',
            start: 'top 70%',
          },
        }
      );

      // Water reflections
      gsap.to('.garden-water-shimmer', {
        x: 20,
        opacity: 0.4,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Features reveal
      gsap.fromTo(
        '.garden-feature',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.garden-features',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="garden section" id="garden">
      <div className="container">
        <div className="garden-layout">
          <div className="garden-text-content">
            <div className="garden-label section-label">The Oasis Garden</div>
            <h2 className="garden-title section-title">
              Where Light<br />Meets Water
            </h2>
            <p className="garden-text section-subtitle">
              An inner courtyard where date palms cast dancing shadows across still water.
              Sunlight filters through ancient geometry, creating an ever-shifting canvas of light and reflection.
            </p>

            <div className="garden-features">
              <div className="garden-feature">
                <div className="garden-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="garden-feature-title">Living Palms</h4>
                  <p className="garden-feature-text">Date palms sourced from Morocco's ancient oases</p>
                </div>
              </div>

              <div className="garden-feature">
                <div className="garden-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="garden-feature-title">Moving Sunlight</h4>
                  <p className="garden-feature-text">Angular skylights track the sun's daily journey</p>
                </div>
              </div>

              <div className="garden-feature">
                <div className="garden-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12c2-4 6-6 10-6s8 2 10 6" stroke="currentColor" strokeWidth="1" />
                    <path d="M2 16c2-3 6-5 10-5s8 2 10 5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="garden-feature-title">Water Reflections</h4>
                  <p className="garden-feature-text">Mirrored pools create infinite depth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="garden-scene">
            <div className="garden-scene-wrapper">
              {/* Sky gradient */}
              <div className="garden-sky" />

              {/* Sun beams */}
              <div className="garden-sunbeams">
                <div className="garden-sunbeam" style={{ left: '20%', height: '80%' }} />
                <div className="garden-sunbeam" style={{ left: '45%', height: '100%' }} />
                <div className="garden-sunbeam" style={{ left: '70%', height: '70%' }} />
              </div>

              {/* Palm trees */}
              <div className="garden-palm garden-palm--1">
                <svg viewBox="0 0 120 300" fill="none">
                  <path d="M60,300 L60,120" stroke="rgba(75,127,103,0.3)" strokeWidth="3" />
                  <path d="M60,120 Q30,70 5,90 Q35,55 60,80" fill="rgba(75,127,103,0.2)" />
                  <path d="M60,120 Q90,70 115,90 Q85,55 60,80" fill="rgba(75,127,103,0.15)" />
                  <path d="M60,110 Q45,40 15,55 Q45,30 60,60" fill="rgba(75,127,103,0.12)" />
                </svg>
              </div>

              <div className="garden-palm garden-palm--2">
                <svg viewBox="0 0 120 300" fill="none">
                  <path d="M60,300 L60,140" stroke="rgba(75,127,103,0.25)" strokeWidth="2.5" />
                  <path d="M60,140 Q35,95 10,110 Q38,80 60,100" fill="rgba(75,127,103,0.18)" />
                  <path d="M60,140 Q85,95 110,110 Q82,80 60,100" fill="rgba(75,127,103,0.13)" />
                </svg>
              </div>

              <div className="garden-palm garden-palm--3">
                <svg viewBox="0 0 120 300" fill="none">
                  <path d="M60,300 L60,150" stroke="rgba(75,127,103,0.2)" strokeWidth="2" />
                  <path d="M60,150 Q40,110 20,125 Q42,95 60,115" fill="rgba(75,127,103,0.15)" />
                  <path d="M60,150 Q80,110 100,125 Q78,95 60,115" fill="rgba(75,127,103,0.1)" />
                </svg>
              </div>

              {/* Water pool */}
              <div className="garden-water">
                <div className="garden-water-shimmer" />
                <div className="garden-water-shimmer garden-water-shimmer--2" />
                <div className="garden-water-reflection" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
