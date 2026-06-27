-- ════════════════════════════════════════════════════════════
-- Legacy AI Partners — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ════════════════════════════════════════════════════════════

create table if not exists public.leads (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  name              text not null,
  email             text not null,
  company           text not null,
  revenue_range     text not null,
  repetitive_tasks  text,
  biggest_bottleneck text,
  ai_experience     text,
  desired_outcomes  text,
  -- light metadata
  source            text default 'website'
);

-- Helpful index for reviewing newest leads first
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- ── Row Level Security ───────────────────────────────────────
-- The public site uses the ANON key, which must be allowed to INSERT
-- (a new lead) but NOT to read everyone's leads.
alter table public.leads enable row level security;

-- Allow anonymous + authenticated visitors to submit a lead.
drop policy if exists "Anyone can submit a lead" on public.leads;
create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- (Reading leads is intentionally NOT granted to anon.
--  View them in the Supabase Table Editor, or add an authenticated
--  admin policy / service-role backend when you build an admin view.)

-- Make sure the anon role can use the table for inserts.
grant insert on public.leads to anon, authenticated;
