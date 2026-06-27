import Reveal from './Reveal';

export default function Challenge() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: the empathy / pain */}
          <div>
            <Reveal>
              <span className="eyebrow">The Challenge</span>
              <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-navy">
                You didn’t build a $10M+ business to fall behind on technology you never had time to learn.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                Most established operators feel it: AI is clearly important, clearly accelerating —
                and clearly overwhelming. The tools change weekly. The advice is contradictory. And
                the cost of guessing wrong feels high.
              </p>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                You don’t need another tool. You need a partner who has actually done it.
              </p>
            </Reveal>
          </div>

          {/* Right: founder story card */}
          <Reveal delay={0.15}>
            <div className="luxury-card p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-teal/10 rounded-full blur-2xl" />
              <span className="eyebrow">From the Founder</span>
              <p className="mt-5 text-xl sm:text-2xl font-serif text-navy leading-snug">
                “I’m not a consultant who reads about AI. I’m an operator who builds entire companies
                with it.”
              </p>
              <p className="mt-5 text-ink/70 leading-relaxed">
                We used AI agents and automation to build <strong className="text-navy">EquityMD</strong> (a
                real-estate investment platform) and <strong className="text-navy">Comply.Capital</strong> (AI
                compliance for construction lending) — all while running{' '}
                <strong className="text-navy">Brandastic</strong>, our full-service marketing agency.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                <strong className="text-navy">ai.brandastic.com</strong> is how we bring those exact playbooks to
                other established business owners — calmly, and without the overwhelm.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
