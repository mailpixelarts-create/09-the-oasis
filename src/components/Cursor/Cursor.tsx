import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.scss';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const particlesContainer = particlesRef.current;

    if (!cursor || !dot || !particlesContainer) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });

      // Spawn sand particles
      if (Math.random() > 0.7) {
        spawnParticle(mouseX, mouseY);
      }
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      gsap.to(dot, { opacity: 1, scale: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      gsap.to(dot, { opacity: 0, scale: 0, duration: 0.3 });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(dot, { scale: 0.5, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.3)' });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.3)' });
    };

    const spawnParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particlesContainer.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40 - 20,
        opacity: 0,
        scale: Math.random() * 0.5 + 0.5,
        duration: gsap.utils.random(0.6, 1.2),
        ease: 'power2.out',
        onComplete: () => {
          particle.remove();
        },
      });
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      gsap.set(cursor, { x: cursorX, y: cursorY });
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .signature-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 1.5, borderColor: 'rgba(181, 106, 68, 0.5)', duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, borderColor: 'rgba(231, 216, 190, 0.4)', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      });
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={particlesRef} className="cursor-particles" />
    </>
  );
}
