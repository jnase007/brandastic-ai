import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Reveal from './Reveal';
import { useBooking } from '../context/BookingContext';
import { ArrowRight, TrendingUp } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Illustrative model for a representative $10M-revenue established business.
 * Same top-line revenue; AI removes a chunk of operating cost (manual labor
 * hours, rework, slow workflows) -> operating margin expands, profit grows.
 */
const REVENUE = 10; // $10M
const BEFORE_MARGIN_PCT = 12; // %
const AFTER_MARGIN_PCT = 27; // %
const BEFORE_PROFIT = REVENUE * (BEFORE_MARGIN_PCT / 100); // $1.2M
const AFTER_PROFIT = REVENUE * (AFTER_MARGIN_PCT / 100); // $2.7M
const PROFIT_DELTA = AFTER_PROFIT - BEFORE_PROFIT; // $1.5M

// Chart geometry — heights as % of profit relative to the taller bar
const MAX = AFTER_PROFIT;
const beforeH = (BEFORE_PROFIT / MAX) * 100;
const afterH = (AFTER_PROFIT / MAX) * 100;

function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  start,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [start, to]);
  return (
    <span>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function MarginEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { openBooking } = useBooking();

  return (
    <section className="bg-navy text-cream py-24 sm:py-32 grain relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-teal/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-violet/10 blur-[140px]" />

      <div className="container-luxe relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow !text-teal-soft inline-flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            The AI Margin Effect
          </span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-cream">
            Same revenue. A dramatically bigger bottom line.
          </h2>
          <p className="mt-5 text-lg text-cream/70 leading-relaxed">
            AI doesn&rsquo;t just save time — it expands margin. When we automate the repetitive,
            high-cost work inside an established business, the savings fall straight to profit.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CHART */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10 shadow-luxe-lg">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-cream/45">
                    Representative
                  </div>
                  <div className="font-serif text-2xl text-cream">$10M business</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] uppercase tracking-[0.18em] text-cream/45">
                    Annual profit
                  </div>
                  <div className="font-serif text-2xl text-teal-soft">
                    <Counter to={PROFIT_DELTA} prefix="+$" suffix="M" decimals={1} start={inView} />
                  </div>
                </div>
              </div>

              {/* Bars */}
              <div className="flex items-end justify-center gap-10 sm:gap-16 h-64">
                {/* BEFORE */}
                <div className="flex flex-col items-center justify-end h-full flex-1 max-w-[140px]">
                  <span className="mb-3 font-serif text-xl text-cream/80">
                    <Counter to={BEFORE_PROFIT} prefix="$" suffix="M" decimals={1} start={inView} />
                  </span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${beforeH}%` } : {}}
                    transition={{ duration: 1.4, ease }}
                    className="w-full rounded-t-xl bg-white/15 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10" />
                  </motion.div>
                  <span className="mt-4 text-[13px] uppercase tracking-[0.14em] text-cream/50">
                    Without AI
                  </span>
                  <span className="mt-1 text-[12px] text-cream/40">{BEFORE_MARGIN_PCT}% margin</span>
                </div>

                {/* AFTER */}
                <div className="flex flex-col items-center justify-end h-full flex-1 max-w-[140px]">
                  <span className="mb-3 font-serif text-xl text-teal-soft">
                    <Counter to={AFTER_PROFIT} prefix="$" suffix="M" decimals={1} start={inView} />
                  </span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${afterH}%` } : {}}
                    transition={{ duration: 1.6, ease, delay: 0.25 }}
                    className="w-full rounded-t-xl relative overflow-hidden shadow-[0_0_40px_-8px_rgba(64,180,229,0.6)]"
                    style={{ background: 'linear-gradient(180deg,#40B4E5 0%,#0644ED 100%)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10" />
                  </motion.div>
                  <span className="mt-4 text-[13px] uppercase tracking-[0.14em] text-teal-soft">
                    With ai.brandastic
                  </span>
                  <span className="mt-1 text-[12px] text-cream/40">{AFTER_MARGIN_PCT}% margin</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] text-cream/35">
              Illustrative example. Actual results depend on your business and are scoped in your free
              audit.
            </p>
          </div>

          {/* STATS + CTA */}
          <div className="space-y-6">
            {[
              {
                stat: <Counter to={15} suffix="pts" start={inView} />,
                label: 'Operating margin expansion',
                desc: 'From ~12% to ~27% by removing high-cost manual work.',
              },
              {
                stat: <Counter to={20} suffix="%" start={inView} />,
                label: 'Operating costs cut',
                desc: 'Repetitive labor, rework, and slow workflows — automated away.',
              },
              {
                stat: <>10x</>,
                label: 'Output per team member',
                desc: 'Your people focus on judgment and growth; AI handles the rest.',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.4 + i * 0.12 }}
                className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="font-serif text-3xl sm:text-4xl text-teal-soft min-w-[88px]">
                  {s.stat}
                </div>
                <div>
                  <div className="text-cream font-medium">{s.label}</div>
                  <div className="mt-1 text-[14px] text-cream/55 leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
              className="pt-2"
            >
              <button onClick={openBooking} className="btn-primary !px-8 !py-4 group">
                See your margin opportunity
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-[13px] text-cream/45">
                We map your specific upside in the free 30-minute audit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
