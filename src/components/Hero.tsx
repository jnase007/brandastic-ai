import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream grain">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-teal/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px]" />

      <div className="container-luxe relative pt-40 pb-28 sm:pt-44 sm:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-soft" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-cream/70">
            Built by operators, for operators
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.08 }}
          className="text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem] font-serif text-cream mb-7"
        >
          AI That Works for
          <br />
          Established Businesses
          <span className="block text-teal-soft">— Without the Overwhelm</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.16 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-cream/75 leading-relaxed mb-10"
        >
          We design, implement, and manage custom AI agents for $10M–$200M businesses — the same
          systems we used to build EquityMD, Comply.Capital, and Brandastic. You stay focused on
          your business; we handle the AI.
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
