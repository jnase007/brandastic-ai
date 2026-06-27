const logos = [
  { name: 'RICOH', url: 'https://brandastic.com/wp-content/uploads/2026/05/ricoh-logo.svg' },
  { name: 'USC', url: 'https://brandastic.com/wp-content/uploads/2026/05/usc-logo.svg' },
  { name: 'UFC Gym', url: 'https://brandastic.com/wp-content/uploads/2026/05/ufc-gym-logo.svg' },
  { name: 'Orangetheory', url: 'https://brandastic.com/wp-content/uploads/2026/05/Orangetheory-Fitness-Logo-1.svg' },
  { name: 'HyperX', url: 'https://brandastic.com/wp-content/uploads/2026/05/hyperx-logo.svg' },
  { name: 'Fujifilm', url: 'https://brandastic.com/wp-content/uploads/2026/05/fujifilm-seeklogo.svg' },
  { name: 'Pocky', url: 'https://brandastic.com/wp-content/uploads/2026/05/Pocky-Logo-1.svg' },
  { name: 'KIA', url: 'https://brandastic.com/wp-content/uploads/2026/05/Kia-Logo-1.svg' },
];

export default function TrustedBy() {
  return (
    <section className="bg-navy py-16 overflow-hidden">
      <div className="container-luxe mb-8 text-center">
        <p className="text-[11px] tracking-[0.22em] uppercase text-cream/40 mb-1">
          Trusted by leading brands
        </p>
      </div>

      <div className="relative w-full">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {/* First set */}
          {logos.map((logo) => (
            <img
              key={`a-${logo.name}`}
              src={logo.url}
              alt={logo.name}
              style={{
                height: '44px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.65,
                flexShrink: 0,
              }}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo) => (
            <img
              key={`b-${logo.name}`}
              src={logo.url}
              alt={logo.name}
              style={{
                height: '44px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.65,
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
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
