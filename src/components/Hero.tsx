import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBooking } from '../context/BookingContext';

const ease = [0.22, 1, 0.36, 1] as const;

// Rotating team / office photos behind the hero
const heroPhotos = [
  'https://brandastic.com/wp-content/uploads/2026/05/C_DSC03021_Edited.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02924.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02928.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02965.jpg',
];

// Rotating hero taglines (two lines each)
const heroTaglines: [string, string][] = [
  ['AI That Actually Works', 'for Established Businesses'],
  ['AI Agents That Execute', 'While Humans Strategize'],
  ['The Human + AI Squad Model:', 'Autonomous Marketing at Scale'],
  ['Not Just AI Tools —', 'Autonomous AI Marketing Teams'],
];

export default function Hero() {
  const { openBooking } = useBooking();
  const [active, setActive] = useState(0);
  const [tagline, setTagline] = useState(0);

  // Preload images so cross-fades are smooth
  useEffect(() => {
    heroPhotos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Rotate background photos every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroPhotos.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // Rotate headline taglines every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setTagline((i) => (i + 1) % heroTaglines.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream grain">
      {/* rotating team-photo background */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease }, scale: { duration: 7, ease: 'linear' } }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroPhotos[active]})` }}
          />
        </AnimatePresence>
        {/* readability overlays */}
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
      </div>

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-teal/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px]" />

      <div className="container-luxe relative pt-40 pb-28 sm:pt-44 sm:pb-32 text-center">
        <h1 className="text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem] font-serif text-cream mb-7 min-h-[2.2em] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={tagline}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease }}
              className="block"
            >
              {heroTaglines[tagline][0]}
              <br />
              {heroTaglines[tagline][1]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.16 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-cream/75 leading-relaxed mb-10"
        >
          The AI division of Brandastic. We design, build, and run custom AI agents for proven
          companies — the same systems behind EquityMD and Comply.Capital. You stay focused on the
          business; we handle the AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={openBooking} className="btn-primary text-base !px-8 !py-4 group">
            Book Your Free 30-Minute AI Opportunity Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a href="#how" className="text-cream/70 hover:text-cream transition-colors text-[15px]">
            See how it works ↓
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-[13px] text-cream/50 tracking-wide"
        >
          No pitch. No pressure. Just your highest-ROI opportunities, mapped.
        </motion.p>
      </div>

      {/* soft transition into cream */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
