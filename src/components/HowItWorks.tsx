import Reveal from './Reveal';
import { useBooking } from '../context/BookingContext';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Free 30-Minute AI Opportunity Audit',
    body: 'We start with one focused call to understand your business and surface your highest-ROI AI opportunities. No cost, no obligation.',
    highlight: true,
  },
  {
    n: '02',
    title: 'Your Tailored Roadmap',
    body: 'We hand you a clear, prioritized plan — which processes to automate first, expected impact, and exactly how we’d deliver it.',
  },
  {
    n: '03',
    title: 'We Build & Implement',
    body: 'Our team designs and deploys your custom agents and automations directly into your existing tools. You watch it come to life.',
  },
  {
    n: '04',
    title: 'We Manage & Evolve',
    body: 'On a simple monthly retainer, we monitor, refine, and expand your AI systems as your business grows and the technology advances.',
  },
];

export default function HowItWorks() {
  const { openBooking } = useBooking();
  return (
    <section id="how" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-navy">
            It all starts with one calm, no-pressure conversation.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                  s.highlight
                    ? 'bg-navy text-cream border-navy shadow-luxe-lg grain relative overflow-hidden'
                    : 'luxury-card hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-serif text-4xl ${
                      s.highlight ? 'text-teal-soft' : 'text-navy/15'
                    }`}
                  >
                    {s.n}
                  </span>
                  {s.highlight && (
                    <span className="eyebrow !text-teal-soft">Start here</span>
                  )}
                </div>
                <h3 className={`mt-4 text-xl ${s.highlight ? 'text-cream' : 'text-navy'}`}>
                  {s.title}
                </h3>
                <p
                  className={`mt-3 leading-relaxed text-[15px] ${
                    s.highlight ? 'text-cream/75' : 'text-ink/65'
                  }`}
                >
                  {s.body}
                </p>
                {s.highlight && (
                  <button
                    onClick={openBooking}
                    className="btn-primary mt-6 group"
                  >
                    Book Your Free Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
