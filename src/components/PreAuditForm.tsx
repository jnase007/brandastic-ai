import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, ArrowRight, CalendarCheck } from 'lucide-react';
import Reveal from './Reveal';
import { submitLead, type LeadPayload } from '../lib/supabase';
import { useBooking } from '../context/BookingContext';

const empty: LeadPayload = {
  name: '',
  email: '',
  company: '',
  revenue_range: '',
  repetitive_tasks: '',
  biggest_bottleneck: '',
  ai_experience: '',
  desired_outcomes: '',
};

const inputBase =
  'w-full rounded-xl border border-navy/[0.12] bg-cream/60 px-4 py-3 text-ink placeholder:text-ink/35 ' +
  'focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all';

export default function PreAuditForm() {
  const { openBooking } = useBooking();
  const [form, setForm] = useState<LeadPayload>(empty);
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const set = (k: keyof LeadPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.revenue_range) {
      setError('Please fill in your name, email, company, and revenue range.');
      setStatus('error');
      return;
    }
    setStatus('saving');
    setError('');
    const res = await submitLead(form);
    if (res.ok) {
      setStatus('success');
      window.scrollTo({ top: document.getElementById('prep')?.offsetTop ?? 0, behavior: 'smooth' });
    } else {
      setError(res.error || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="prep" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe max-w-3xl">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="luxury-card p-10 sm:p-14 text-center"
            >
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-teal/10 text-teal mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="text-3xl text-navy">Thank you — we’ve got it.</h2>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-xl mx-auto">
                Your audit prep is in. We’ll review it before our call so we can go straight to your
                highest-ROI opportunities. The most natural next step is to lock in a time.
              </p>
              <button onClick={openBooking} className="btn-primary mt-8 text-base !px-8 !py-4 group">
                <CalendarCheck className="w-4 h-4" />
                Book Your 30-Minute Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Reveal className="text-center max-w-2xl mx-auto">
                <span className="eyebrow">Prepare for Your Audit</span>
                <h2 className="mt-5 text-3xl sm:text-[2.4rem] leading-[1.12] text-navy">
                  Tell us a bit about your business
                </h2>
                <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                  Two minutes now makes your free audit dramatically more valuable. Share what you
                  can — every field is optional except the essentials.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <form onSubmit={onSubmit} className="luxury-card mt-10 p-7 sm:p-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name *">
                      <input className={inputBase} value={form.name} onChange={set('name')} placeholder="Jane Operator" />
                    </Field>
                    <Field label="Email *">
                      <input className={inputBase} type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Company *">
                      <input className={inputBase} value={form.company} onChange={set('company')} placeholder="Company, Inc." />
                    </Field>
                    <Field label="Revenue Range *">
                      <select className={inputBase} value={form.revenue_range} onChange={set('revenue_range')}>
                        <option value="">Select…</option>
                        <option value="$10M–$50M">$10M–$50M</option>
                        <option value="$50M–$200M">$50M–$200M</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Top 2–3 repetitive tasks your team handles">
                    <textarea className={`${inputBase} min-h-[88px] resize-y`} value={form.repetitive_tasks} onChange={set('repetitive_tasks')} placeholder="e.g. quoting, data entry, customer follow-ups…" />
                  </Field>

                  <Field label="Your biggest current bottleneck">
                    <textarea className={`${inputBase} min-h-[88px] resize-y`} value={form.biggest_bottleneck} onChange={set('biggest_bottleneck')} placeholder="Where does growth or efficiency stall today?" />
                  </Field>

                  <Field label="Previous AI / tool experience">
                    <textarea className={`${inputBase} min-h-[88px] resize-y`} value={form.ai_experience} onChange={set('ai_experience')} placeholder="What have you tried, if anything?" />
                  </Field>

                  <Field label="Desired outcomes & goals">
                    <textarea className={`${inputBase} min-h-[88px] resize-y`} value={form.desired_outcomes} onChange={set('desired_outcomes')} placeholder="What would a great outcome look like 90 days from now?" />
                  </Field>

                  {status === 'error' && (
                    <p className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button type="submit" disabled={status === 'saving'} className="btn-primary w-full text-base !py-4 group">
                    {status === 'saving' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                      </>
                    ) : (
                      <>
                        Submit & Continue to Booking
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[13px] text-ink/45">
                    Your information is private and used only to prepare for your audit.
                  </p>
                </form>
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-navy/80 mb-2">{label}</span>
      {children}
    </label>
  );
}
