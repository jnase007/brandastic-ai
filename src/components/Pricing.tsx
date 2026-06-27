import Reveal from './Reveal';
import { Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const tiers = [
  {
    name: 'Foundation',
    tagline: 'For focused, high-impact automation',
    price: 'From $4,500',
    cadence: '/ month',
    features: [
      'One core AI agent or workflow, fully managed',
      'Implementation into your existing stack',
      'Monthly tuning & optimization',
      'Quarterly ROI review',
      'Email & async support',
    ],
    featured: false,
  },
  {
    name: 'Partner',
    tagline: 'Our most popular engagement',
    price: 'From $9,500',
    cadence: '/ month',
    features: [
      'Multiple agents & automated workflows',
      'Priority implementation & integrations',
      'Bi-weekly optimization & monitoring',
      'Dedicated strategist',
      'Monthly strategy & ROI review',
      'Direct line support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For complex, multi-department rollout',
    price: 'Custom',
    cadence: '',
    features: [
      'Full AI department, done for you',
      'Custom agents across departments',
      'Governance, security & compliance',
      'Weekly cadence & embedded team',
      'Executive reporting',
    ],
    featured: false,
  },
];

export default function Pricing() {
  const { openBooking } = useBooking();
  return (
    <section id="pricing" className="bg-sand py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-navy">
            Simple monthly retainers. No surprises, no overwhelm.
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Every engagement begins with the free audit, so your plan is scoped to real opportunities
            — never guesswork.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`h-full flex flex-col p-8 rounded-2xl border transition-all duration-500 ${
                  t.featured
                    ? 'bg-navy text-cream border-navy shadow-luxe-lg lg:-translate-y-3 grain relative overflow-hidden'
                    : 'luxury-card hover:-translate-y-1'
                }`}
              >
                {t.featured && (
                  <span className="self-start mb-4 px-3 py-1 rounded-full bg-teal text-white text-[11px] font-medium uppercase tracking-[0.15em]">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl ${t.featured ? 'text-cream' : 'text-navy'}`}>{t.name}</h3>
                <p className={`mt-1 text-sm ${t.featured ? 'text-cream/65' : 'text-ink/55'}`}>
                  {t.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`font-serif text-4xl ${t.featured ? 'text-cream' : 'text-navy'}`}>
                    {t.price}
                  </span>
                  <span className={`text-sm ${t.featured ? 'text-cream/60' : 'text-ink/50'}`}>
                    {t.cadence}
                  </span>
                </div>

                <ul className="mt-7 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        className={`w-[18px] h-[18px] mt-0.5 shrink-0 ${
                          t.featured ? 'text-teal-soft' : 'text-teal'
                        }`}
                      />
                      <span className={`text-[15px] ${t.featured ? 'text-cream/85' : 'text-ink/70'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openBooking}
                  className={`mt-8 w-full ${t.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  Start with the Free Audit
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
