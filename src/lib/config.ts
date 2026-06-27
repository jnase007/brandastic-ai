// Central place for tweakable settings.
export const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ||
  'https://calendar.app.google/xW96T5pJRHZpQYj99'; // Google Calendar appointment booking

export const PITCH_VIDEO_URL =
  (import.meta.env.VITE_PITCH_VIDEO_URL as string | undefined) ||
  'https://www.youtube.com/embed/cn8Gv23JOIQ';

export const BRAND = {
  name: 'ai.brandastic.com',
  email: 'info@brandastic.com',
};
