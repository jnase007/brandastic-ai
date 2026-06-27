import Reveal from './Reveal';
import { Bot, Workflow, GaugeCircle, ShieldCheck, Headphones, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    body: 'Bespoke agents trained on your business — handling support, research, ops, and outreach the way your best team member would.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    body: 'We map your highest-friction workflows and automate them end-to-end, removing hours of repetitive work every week.',
  },
  {
    icon: GaugeCircle,
    title: 'Implementation, Done For You',
    body: 'No DIY dashboards or homework. We build, integrate, and deploy into your existing stack — you simply start benefiting.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Management',
    body: 'A monthly retainer means we monitor, tune, and evolve your AI systems as your business and the technology change.',
  },
  {
    icon: ShieldCheck,
    title: 'Calm, Governed Rollout',
    body: 'Security-aware, compliance-minded deployment from a team that built an AI compliance platform. No reckless experiments.',
  },
  {
    icon: LineChart,
    title: 'Measurable ROI',
    body: 'Every engagement is tied to outcomes — time saved, cost reduced, revenue unlocked — reviewed with you, not buried in a tool.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What We Deliver</span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-navy">
            A done-for-you AI department, on a simple monthly retainer.
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            All the capability of an in-house AI team — without the hiring, the overhead, or the
            learning curve.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="luxury-card group h-full p-7 hover:shadow-luxe-lg hover:-translate-y-1">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-navy/[0.04] text-navy group-hover:bg-teal group-hover:text-white transition-colors duration-500">
                  <s.icon className="w-[22px] h-[22px]" />
                </div>
                <h3 className="mt-5 text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-ink/65 leading-relaxed text-[15px]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
