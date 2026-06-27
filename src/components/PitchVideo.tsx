import Reveal from './Reveal';
import { Play } from 'lucide-react';
import { PITCH_VIDEO_URL } from '../lib/config';

export default function PitchVideo() {
  return (
    <section className="bg-navy text-cream py-24 sm:py-32 grain relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal/10 blur-[140px]" />
      <div className="container-luxe relative text-center">
        <Reveal>
          <span className="eyebrow !text-teal-soft">A Personal Note</span>
          <h2 className="mt-5 text-3xl sm:text-[2.6rem] leading-[1.1] text-cream max-w-2xl mx-auto">
            Two minutes on how we think about AI for established businesses.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-navy-deep shadow-luxe-lg">
              {PITCH_VIDEO_URL ? (
                <iframe
                  src={PITCH_VIDEO_URL}
                  title="Brandastic.ai pitch"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button className="group absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-20 h-20 rounded-full bg-teal text-white shadow-[0_12px_40px_-8px_rgba(14,165,233,0.7)] transition-transform duration-500 group-hover:scale-110">
                    <Play className="w-7 h-7 ml-1" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-6 text-sm text-cream/55 tracking-wide">
                    Pitch video coming soon
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
