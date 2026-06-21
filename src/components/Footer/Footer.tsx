import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.scss';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-sand-border">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 Q180,0 360,20 Q540,40 720,15 Q900,0 1080,25 Q1260,50 1440,20 L1440,60 L0,60 Z"
            fill="rgba(200, 169, 126, 0.08)"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-the">THE</span>
                <span className="footer-logo-oasis">OASIS</span>
              </div>
              <p className="footer-tagline">Desert Luxury Cafe</p>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Experience</h4>
              <ul className="footer-links">
                <li><a href="#story">Our Story</a></li>
                <li><a href="#signature">Signature Drinks</a></li>
                <li><a href="#garden">Oasis Garden</a></li>
                <li><a href="#journey">Coffee Journey</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Visit</h4>
              <ul className="footer-links">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reservation">Reservations</a></li>
                <li><a href="#">Private Events</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Connect</h4>
              <ul className="footer-links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-studio">
              A <span className="footer-highlight">LOOKBOOK</span> Studio Experience
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Norman James. All rights reserved.
            </p>
            <p className="footer-made">
              Made with <span className="footer-heart">&hearts;</span> by <span className="footer-highlight">Empathy Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
