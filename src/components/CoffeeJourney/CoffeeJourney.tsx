import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COFFEE_JOURNEY_STEPS } from '../../utils/constants';
import './CoffeeJourney.scss';

export default function CoffeeJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journey-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.journey-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journey-title',
            start: 'top 80%',
          },
        }
      );

      // Timeline line grow
      gsap.fromTo(
        '.journey-timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.inOut',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 70%',
          },
        }
      );

      // Steps
      document.querySelectorAll('.journey-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
            },
          }
        );
      });

      // Dots
      gsap.fromTo(
        '.journey-dot',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="journey section" id="journey">
      <div className="container">
        <div className="journey-header">
          <div className="journey-label section-label">The Coffee Journey</div>
          <h2 className="journey-title section-title">
            From Seed<br />to Cup
          </h2>
          <p className="section-subtitle">
            Every cup holds a story that spans continents and centuries.
            Follow the path of our coffee from its ancient origins to your hands.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="journey-timeline-line" />

          {COFFEE_JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.title}
              className={`journey-step ${index % 2 === 0 ? 'journey-step--left' : 'journey-step--right'}`}
            >
              <div className="journey-dot" />

              <div className="journey-step-content">
                <div className="journey-step-icon">{step.icon}</div>
                <span className="journey-step-subtitle">{step.subtitle}</span>
                <h3 className="journey-step-title">{step.title}</h3>
                <p className="journey-step-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
