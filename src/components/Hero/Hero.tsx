import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Parallax mountains
      gsap.to('.hero-mountains', {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Parallax dunes
      gsap.to('.hero-dunes', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Palm sway
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

      // Water ripple
      gsap.to('.hero-water-ripple', {
        scale: 3,
        opacity: 0,
        duration: 3,
        ease: 'power1.out',
        repeat: -1,
        repeatDelay: 2,
      });

      // Sun glow
      gsap.to('.hero-sun', {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Scroll-triggered hero fade
      gsap.to('.hero-content', {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Background layers */}
      <div className="hero-bg">
        <div className="hero-gradient" />

        {/* Sun */}
        <div className="hero-sun">
          <div className="hero-sun-core" />
          <div className="hero-sun-glow" />
        </div>

        {/* Mountains */}
        <div className="hero-mountains">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path
              d="M0,600 L0,350 Q180,200 360,280 Q540,360 720,220 Q900,80 1080,250 Q1260,420 1440,300 L1440,600 Z"
              fill="rgba(200, 169, 126, 0.08)"
            />
            <path
              d="M0,600 L0,400 Q200,280 400,350 Q600,420 800,300 Q1000,180 1200,350 Q1350,450 1440,380 L1440,600 Z"
              fill="rgba(200, 169, 126, 0.05)"
            />
          </svg>
        </div>

        {/* Dunes */}
        <div className="hero-dunes">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path
              d="M0,200 Q200,140 400,180 Q600,220 800,160 Q1000,100 1200,170 Q1350,210 1440,180 L1440,400 L0,400 Z"
              fill="rgba(231, 216, 190, 0.12)"
            />
            <path
              d="M0,250 Q300,190 500,230 Q700,270 900,210 Q1100,150 1300,220 Q1400,250 1440,230 L1440,400 L0,400 Z"
              fill="rgba(231, 216, 190, 0.08)"
            />
          </svg>
        </div>

        {/* Palm trees */}
        <div className="hero-palm hero-palm-left">
          <svg viewBox="0 0 200 400" fill="none">
            <path
              d="M100,400 L100,150"
              stroke="rgba(75, 127, 103, 0.15)"
              strokeWidth="4"
            />
            <path
              d="M100,150 Q60,100 20,120 Q60,80 100,100"
              fill="rgba(75, 127, 103, 0.12)"
            />
            <path
              d="M100,150 Q140,100 180,120 Q140,80 100,100"
              fill="rgba(75, 127, 103, 0.1)"
            />
            <path
              d="M100,140 Q80,60 40,70 Q80,50 100,80"
              fill="rgba(75, 127, 103, 0.08)"
            />
            <path
              d="M100,140 Q120,60 160,70 Q120,50 100,80"
              fill="rgba(75, 127, 103, 0.06)"
            />
          </svg>
        </div>

        <div className="hero-palm hero-palm-right">
          <svg viewBox="0 0 200 400" fill="none">
            <path
              d="M100,400 L100,180"
              stroke="rgba(75, 127, 103, 0.12)"
              strokeWidth="3"
            />
            <path
              d="M100,180 Q60,130 30,150 Q60,110 100,130"
              fill="rgba(75, 127, 103, 0.1)"
            />
            <path
              d="M100,180 Q140,130 170,150 Q140,110 100,130"
              fill="rgba(75, 127, 103, 0.08)"
            />
          </svg>
        </div>

        {/* Water reflection */}
        <div className="hero-water">
          <div className="hero-water-ripple" />
          <div className="hero-water-ripple hero-water-ripple--2" />
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-subtitle">
          <span className="hero-subtitle-line" />
          <span>Desert Luxury Cafe</span>
          <span className="hero-subtitle-line" />
        </div>

        <h1 className="hero-title">
          <div className="hero-title-line-wrap">
            <span className="hero-title-line">THE</span>
          </div>
          <div className="hero-title-line-wrap">
            <span className="hero-title-line hero-title-line--accent">OASIS</span>
          </div>
        </h1>

        <p className="hero-description">
          Where architecture meets the ancient desert. A cinematic sanctuary of sand, light, and water.
        </p>

        <div className="hero-cta">
          <a href="#story" className="btn btn--light">
            <span>Discover Our Story</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
