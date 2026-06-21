import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import SignatureDrinks from './components/SignatureDrinks/SignatureDrinks';
import OasisGarden from './components/OasisGarden/OasisGarden';
import Architecture from './components/Architecture/Architecture';
import CoffeeJourney from './components/CoffeeJourney/CoffeeJourney';
import Gallery from './components/Gallery/Gallery';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    gsap.to('.app-content', {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  };

  return (
    <div className="app">
      {loading && <Loader onComplete={handleLoadComplete} />}
      <div className="app-content" style={{ opacity: 0 }}>
        <Cursor />
        <Navigation />
        <Hero />
        <Story />
        <SignatureDrinks />
        <OasisGarden />
        <Architecture />
        <CoffeeJourney />
        <Gallery />
        <Reservation />
        <Footer />
      </div>
    </div>
  );
}
