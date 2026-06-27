import Reveal from './Reveal';
import { ArrowRight, Clock, Gift, ShieldCheck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const perks = [
  { icon: Clock, label: '30 focused minutes' },
  { icon: Gift, label: 'Completely free' },
  { icon: ShieldCheck, label: 'No pitch, no pressure' },
];

export default function AuditCTA() {
  const { openBooking } = useBooking();
  return (
    <section id="audit" className="bg-sand py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy text-cream grain px-8 py-16 sm:px-16 sm:py-20 text-center shadow-luxe-lg">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal/15 blur-[130px]" />
            <div className="relative">
              <span className="eyebrow !text-teal-soft">Start Here</span>
              <h2 className="mt-5 text-3xl sm:text-5xl leading-[1.08] text-cream max-w-3xl mx-auto">
                Start with a Free 30-Minute AI Opportunity Audit
              </h2>
              <p className="mt-6 text-lg text-cream/75 max-w-2xl mx-auto leading-relaxed">
                In one focused call we’ll identify your highest-ROI opportunities — tailored to your
                business, your team, and your goals. You’ll leave with clarity, whether we work
                together or not.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {perks.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-cream/80 text-[15px]">
                    <p.icon className="w-4 h-4 text-teal-soft" />
                    {p.label}
                  </div>
                ))}
              </div>

              <button onClick={openBooking} className="btn-primary mt-10 text-base !px-8 !py-4 group">
                Book Your Free 30-Minute AI Opportunity Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-5 text-[13px] text-cream/50">
                Prefer to start asynchronously? Fill out the short audit prep below. ↓
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
