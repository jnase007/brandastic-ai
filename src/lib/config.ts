// Central place for tweakable settings.
export const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
  'https://calendly.com/your-link/30min'; // ← replace with your real Calendly link

export const PITCH_VIDEO_URL =
  (import.meta.env.VITE_PITCH_VIDEO_URL as string | undefined) ||
  'https://www.youtube.com/embed/cn8Gv23JOIQ';

export const BRAND = {
  name: 'ai.brandastic.com',
  email: 'hello@brandastic.ai',
};
