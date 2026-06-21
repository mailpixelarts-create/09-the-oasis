import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RESERVATION_TIME_SLOTS, RESERVATION_GUESTS } from '../../utils/constants';
import './Reservation.scss';

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reservation-label',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reservation-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.reservation-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reservation-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.reservation-form',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reservation-form',
            start: 'top 85%',
          },
        }
      );

      // Oasis reflections
      gsap.to('.reservation-reflection', {
        y: -15,
        opacity: 0.3,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.reservation-reflection-2', {
        y: 10,
        opacity: 0.2,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.fromTo(
      '.reservation-success',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  };

  return (
    <section ref={sectionRef} className="reservation section" id="reservation">
      {/* Decorative reflections */}
      <div className="reservation-reflection" />
      <div className="reservation-reflection reservation-reflection-2" />

      <div className="container">
        <div className="reservation-layout">
          <div className="reservation-info">
            <div className="reservation-label section-label">Reservations</div>
            <h2 className="reservation-title section-title">
              Reserve Your<br />Oasis
            </h2>
            <p className="section-subtitle">
              Secure your place in our desert sanctuary. Each table is positioned
              to frame a unique view of light, water, and architecture.
            </p>

            <div className="reservation-details">
              <div className="reservation-detail">
                <span className="reservation-detail-label">Location</span>
                <span className="reservation-detail-value">42 Oasis Avenue, Arts District</span>
              </div>
              <div className="reservation-detail">
                <span className="reservation-detail-label">Hours</span>
                <span className="reservation-detail-value">Daily 7:00 AM — 10:00 PM</span>
              </div>
              <div className="reservation-detail">
                <span className="reservation-detail-label">Contact</span>
                <span className="reservation-detail-value">+1 (555) 0ASIS</span>
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="date">Date</label>
                <input
                  className="form-input"
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="time">Time</label>
                <select
                  className="form-select"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time</option>
                  {RESERVATION_TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="guests">Guests</label>
                <select
                  className="form-select"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {RESERVATION_GUESTS.map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="occasion">Occasion</label>
                <select
                  className="form-select"
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">Select occasion</option>
                  <option value="casual">Casual Visit</option>
                  <option value="business">Business</option>
                  <option value="celebration">Celebration</option>
                  <option value="date">Date Night</option>
                  <option value="private">Private Event</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="notes">Special Requests</label>
              <textarea
                className="form-textarea"
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Dietary requirements, seating preferences, etc."
                rows={3}
              />
            </div>

            <button type="submit" className="btn btn--terracotta reservation-submit">
              <span>Confirm Reservation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="reservation-success" style={{ display: 'none' }}>
              <p>Thank you. Your oasis awaits.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
