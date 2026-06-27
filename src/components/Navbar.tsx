import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Insights', href: '#insights' },
];

export default function Navbar() {
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-navy/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        {/* Logo — official Brandastic wordmark (same as audit.brandastic.com) */}
        <a href="#top" className="flex items-center group">
          <img
            src="/brand/brandastic-wordmark-white.png"
            alt="Brandastic"
            className={`h-[26px] sm:h-[28px] w-auto transition-all duration-500 ${
              scrolled ? '[filter:brightness(0)] opacity-90' : 'opacity-100'
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[15px] transition-colors duration-300 ${
                scrolled ? 'text-navy/70 hover:text-navy' : 'text-cream/80 hover:text-cream'
              }`}
            >
              {l.label}
            </a>
          ))}
          <button onClick={openBooking} className="btn-primary !py-2.5 !px-5 text-sm">
            Book Your Free Audit
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 transition-colors duration-500 ${
            scrolled || menuOpen ? 'text-navy' : 'text-cream'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden container-luxe mt-3 pb-4 flex flex-col gap-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-navy/80 hover:text-navy border-b border-navy/[0.06]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openBooking();
            }}
            className="btn-primary mt-3 w-full"
          >
            Book Your Free Audit
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
