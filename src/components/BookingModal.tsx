import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarCheck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { CALENDLY_URL } from '../lib/config';

export default function BookingModal() {
  const { open, closeBooking } = useBooking();

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && closeBooking();
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [open, closeBooking]);

  const isPlaceholder = CALENDLY_URL.includes('your-link');

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm"
            onClick={closeBooking}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-cream rounded-3xl shadow-luxe-lg overflow-hidden my-auto"
          >
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-navy/[0.07]">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-teal/10 text-teal">
                  <CalendarCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-navy leading-tight">
                    Book Your Free 30-Minute AI Audit
                  </h3>
                  <p className="text-[13px] text-ink/55">Pick a time that works for you.</p>
                </div>
              </div>
              <button
                onClick={closeBooking}
                aria-label="Close"
                className="grid place-items-center w-9 h-9 rounded-full text-navy/50 hover:text-navy hover:bg-navy/[0.05] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isPlaceholder ? (
              <div className="px-8 py-16 text-center">
                <p className="text-ink/70 leading-relaxed max-w-md mx-auto">
                  Add your Calendly link in <code className="text-teal-dark">.env</code> as{' '}
                  <code className="text-teal-dark">VITE_CALENDLY_URL</code> and your live booking
                  calendar will appear here.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7"
                >
                  Open booking link
                </a>
              </div>
            ) : (
              <iframe
                src={CALENDLY_URL}
                title="Book your audit"
                className="w-full h-[70vh] sm:h-[640px] no-scrollbar"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
