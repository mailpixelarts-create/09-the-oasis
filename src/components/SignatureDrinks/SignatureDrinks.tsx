import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SIGNATURE_DRINKS } from '../../utils/constants';
import './SignatureDrinks.scss';

export default function SignatureDrinks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.signature-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.signature-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.signature-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.signature-title',
            start: 'top 80%',
          },
        }
      );

      document.querySelectorAll('.signature-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });

      // Sand particle cursor effect on cards
      document.querySelectorAll('.signature-card').forEach((card) => {
        const particles = card.querySelectorAll('.card-sand-particle');

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;

          particles.forEach((particle) => {
            const el = particle as HTMLElement;
            gsap.to(el, {
              x: (Math.random() - 0.5) * 60,
              y: (Math.random() - 0.5) * 60,
              opacity: Math.random() * 0.5 + 0.2,
              duration: 0.8,
              ease: 'power2.out',
            });
          });
        });

        card.addEventListener('mouseleave', () => {
          particles.forEach((particle) => {
            gsap.to(particle, {
              x: 0,
              y: 0,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            });
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="signature section" id="signature">
      <div className="container">
        <div className="signature-header">
          <div className="signature-label section-label">Signature Drinks</div>
          <h2 className="signature-title section-title">
            Crafted in<br />the Desert
          </h2>
          <p className="section-subtitle">
            Each creation tells a story of origin, craft, and the transformative power of fire and water.
          </p>
        </div>

        <div className="signature-grid">
          {SIGNATURE_DRINKS.map((drink, index) => (
            <div key={drink.name} className="signature-card">
              <div className="card-sand-particles">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="card-sand-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="card-image-wrapper">
                <div className="card-image">
                  <img src={drink.image} alt={drink.name} loading="lazy" />
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>

              <div className="card-content">
                <div className="card-top">
                  <h3 className="card-name">{drink.name}</h3>
                  <span className="card-price">{drink.price}</span>
                </div>
                <p className="card-description">{drink.description}</p>

                <div className="card-ingredients">
                  <span className="card-ingredients-label">Ingredients</span>
                  <ul className="card-ingredients-list">
                    {drink.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
