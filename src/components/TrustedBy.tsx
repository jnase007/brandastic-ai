// "Brands who trust us with their story" — matches audit.brandastic.com styling
// Light cream background, muted gray logos, smooth marquee.
const logos = [
  { name: 'Orangetheory', url: 'https://brandastic.com/wp-content/uploads/2026/05/Orangetheory-Fitness-Logo-1.svg', h: 112 },
  { name: 'HyperX', url: 'https://brandastic.com/wp-content/uploads/2026/05/hyperx-logo.svg', h: 44 },
  { name: 'Fujifilm', url: 'https://brandastic.com/wp-content/uploads/2026/05/fujifilm-seeklogo.svg', h: 80 },
  { name: 'Pocky', url: 'https://brandastic.com/wp-content/uploads/2026/05/Pocky-Logo-1.svg', h: 88 },
  { name: 'KIA', url: 'https://brandastic.com/wp-content/uploads/2026/05/Kia-Logo-1.svg', h: 72 },
  { name: 'RICOH', url: 'https://brandastic.com/wp-content/uploads/2026/05/ricoh-logo.svg', h: 80 },
  { name: 'USC', url: 'https://brandastic.com/wp-content/uploads/2026/05/usc-logo.svg', h: 88 },
  { name: 'UFC Gym', url: 'https://brandastic.com/wp-content/uploads/2026/05/ufc-gym-logo.svg', h: 44 },
];

export default function TrustedBy() {
  return (
    <section className="bg-cream py-16 overflow-hidden">
      <div className="container-luxe mb-10 text-center">
        <p className="text-lg sm:text-xl font-semibold tracking-wide text-navy/45">
          Brands who trust us with their story
        </p>
      </div>

      <div className="relative w-full">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.url}
              alt={logo.name}
              style={{
                height: `${logo.h}px`,
                width: 'auto',
                // muted gray, matching audit site
                filter: 'grayscale(1) brightness(0) opacity(0.35)',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
