import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Sand particles
    const particles = loaderRef.current?.querySelectorAll('.sand-particle');
    if (particles) {
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
    }

    // Heat shimmer effect
    const shimmer = loaderRef.current?.querySelector('.heat-shimmer');
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

    // Counter animation
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        }
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${counter.value / 100})`;
        }
      },
    });

    // Logo reveal
    tl.fromTo(
      '.loader-logo',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=2'
    );

    // Tagline
    tl.fromTo(
      '.loader-tagline',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=1.5'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="heat-shimmer" />

      <div className="sand-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="sand-particle"
            style={{
              left: `${gsap.utils.random(0, 100)}%`,
              top: `${gsap.utils.random(30, 100)}%`,
              width: `${gsap.utils.random(2, 6)}px`,
              height: `${gsap.utils.random(2, 6)}px`,
              animationDelay: `${gsap.utils.random(0, 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-logo-the">THE</span>
          <span className="loader-logo-oasis">OASIS</span>
        </div>
        <p className="loader-tagline">Desert Luxury Cafe</p>

        <div className="loader-progress">
          <div ref={progressRef} className="loader-progress-bar" />
        </div>

        <div ref={counterRef} className="loader-counter">0%</div>
      </div>

      <div className="loader-sand-dune">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z"
            fill="rgba(200, 169, 126, 0.15)"
          />
          <path
            d="M0,130 C360,80 600,180 900,120 C1100,80 1300,150 1440,130 L1440,200 L0,200 Z"
            fill="rgba(231, 216, 190, 0.1)"
          />
        </svg>
      </div>
    </div>
  );
}
