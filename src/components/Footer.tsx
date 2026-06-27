import { useBooking } from '../context/BookingContext';
import { BRAND } from '../lib/config';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const { openBooking } = useBooking();
  return (
    <footer id="contact" className="bg-navy-deep text-cream grain relative overflow-hidden">
      <div className="container-luxe relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl text-cream leading-[1.1] max-w-md">
              Ready to put AI to work — calmly, and for real?
            </h2>
            <p className="mt-5 text-cream/65 max-w-md leading-relaxed">
              One focused conversation is all it takes to see what’s possible for your business.
            </p>
            <button onClick={openBooking} className="btn-primary mt-8 group">
              Book Your Free 30-Minute Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:justify-self-end">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-cream text-navy font-serif text-lg">
                L
              </span>
              <span className="font-serif text-xl text-cream">{BRAND.name}</span>
            </div>
            <p className="mt-4 text-cream/55 text-sm max-w-xs leading-relaxed">
              AI implementation & management for established $10M–$200M businesses. Built by
              operators behind EquityMD, Comply.Capital, and Brandastic.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 inline-block text-teal-soft hover:text-cream transition-colors text-sm"
            >
              {BRAND.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-cream/45">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-cream/80 transition">Services</a>
            <a href="#pricing" className="hover:text-cream/80 transition">Pricing</a>
            <a href="#prep" className="hover:text-cream/80 transition">Audit Prep</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
