import Reveal from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const results = [
  {
    name: 'EquityMD',
    category: 'Real Estate Investment SaaS',
    body: 'A full investor-to-syndicator marketplace built and scaled with AI — from SEO and content engines to automated deal workflows.',
    metric: '7,400+',
    metricLabel: 'accredited investors reached',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Multifamily residential building',
  },
  {
    name: 'Comply.Capital',
    category: 'AI Compliance Platform',
    body: 'An AI-driven document & draw-management platform for construction lending — extraction, review, and compliance automated end-to-end.',
    metric: '$1B+',
    metricLabel: 'in loan volume supported',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Building under construction',
  },
  {
    name: 'Brandastic',
    category: 'Digital Marketing Agency',
    body: 'A full-service SoCal agency run with AI woven through delivery — content, reporting, and client workflows accelerated dramatically.',
    metric: '10x',
    metricLabel: 'output per team member',
    image: 'https://brandastic.com/wp-content/uploads/2026/05/DSC02924.jpg',
    imageAlt: 'The Brandastic team',
  },
];

export default function Results() {
  return (
    <section id="insights" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Real Results</span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-navy">
            We don’t theorize about AI. We’ve built real companies with it.
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            The same systems and playbooks behind these ventures are exactly what we bring to your
            business.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="luxury-card h-full group hover:shadow-luxe-lg hover:-translate-y-1 overflow-hidden flex flex-col">
                {/* photo banner */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-navy">{r.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-navy/30 group-hover:text-teal transition-colors" />
                  </div>
                  <span className="mt-1 block text-[12px] uppercase tracking-[0.15em] text-teal-dark">
                    {r.category}
                  </span>
                  <p className="mt-5 text-ink/65 leading-relaxed text-[15px]">{r.body}</p>
                  <div className="mt-auto pt-6 border-t border-navy/[0.06]">
                    <div className="font-serif text-3xl text-navy">{r.metric}</div>
                    <div className="text-sm text-ink/55">{r.metricLabel}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
