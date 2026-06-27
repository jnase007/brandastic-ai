# Brandastic.ai

A premium, conversion-focused landing site for **Brandastic.ai** — AI implementation & management for established $10M–$200M businesses. Built to feel luxurious, calm, and instantly trustworthy, with the **Free 30-Minute AI Opportunity Audit** as the hero action.

**Stack:** Vite · React · TypeScript · Tailwind CSS · Framer Motion · Supabase · lucide-react

---

## Quick Start

```bash
npm install
cp .env.example .env     # then fill in your values (see below)
npm run dev              # http://localhost:5173
```

Build for production:

```bash
npm run build && npm run preview
```

> The site runs fine **without** any env vars (form logs to console, booking modal shows a placeholder). Add the env values below to go live.

---

## Environment Variables (`.env`)

| Variable | What it's for |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL (Settings → API) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `VITE_CALENDLY_URL` | Your Calendly scheduling link (e.g. `https://calendly.com/legacy-ai/30min`) |
| `VITE_PITCH_VIDEO_URL` | *(optional)* embeddable video URL; blank shows the placeholder |

---

## Supabase Setup (pre-audit form → `leads` table)

1. Create a Supabase project (or reuse one).
2. Open **SQL Editor → New query**, paste the contents of [`supabase/schema.sql`](./supabase/schema.sql), and **Run**.
   - Creates the `leads` table.
   - Enables Row Level Security.
   - Adds an **insert-only** policy for the public (anon) role — visitors can submit, but cannot read others' leads.
3. Copy your **Project URL** and **anon key** into `.env`.
4. View submissions in **Supabase → Table Editor → leads**.

### `leads` columns
`name, email, company, revenue_range, repetitive_tasks, biggest_bottleneck, ai_experience, desired_outcomes` (+ `id`, `created_at`, `source`).

---

## Calendly (booking modal)

Every "Book Your Free Audit" button across the site opens **one shared modal** that embeds your Calendly inline. Just set `VITE_CALENDLY_URL`. Until you do, the modal shows a friendly placeholder with a fallback link.

---

## Structure

```
src/
  components/
    Navbar.tsx        Fixed nav, transparent over hero → solid on scroll, persistent CTA
    Hero.tsx          Headline + primary audit CTA
    Challenge.tsx     The challenge + founder story
    Services.tsx      What We Deliver (6 services)
    HowItWorks.tsx    4 steps — audit is step 01, highlighted
    Pricing.tsx       3 retainer tiers, "Partner" featured
    PitchVideo.tsx    Video placeholder (or embeds VITE_PITCH_VIDEO_URL)
    Results.tsx       EquityMD · Comply.Capital · Brandastic
    AuditCTA.tsx      Dedicated audit section
    PreAuditForm.tsx  Supabase form → elegant success → book the call
    BookingModal.tsx  Calendly-ready modal
    Footer.tsx        Final CTA + contact
    Reveal.tsx        Shared Framer Motion scroll-reveal
  context/BookingContext.tsx   Global modal open/close
  lib/
    supabase.ts       Client + submitLead()
    config.ts         Calendly URL, brand, video
```

---

## Deploy (Vercel — same flow as your other sites)

1. Push to a GitHub repo.
2. Import in Vercel → Framework **Vite**, build `npm run build`, output `dist`.
3. Add the four `VITE_*` env vars in Vercel project settings.
4. Deploy.

Works identically on Netlify (build `npm run build`, publish `dist`, add an SPA redirect if you later add routing).

---

## Customizing

- **Copy:** all section text lives inline in each component — quick to edit.
- **Colors/fonts:** `tailwind.config.js` (navy/teal palette, Fraunces serif + Inter).
- **Pricing:** edit the `tiers` array in `Pricing.tsx`.
- **Services:** edit the `services` array in `Services.tsx`.
