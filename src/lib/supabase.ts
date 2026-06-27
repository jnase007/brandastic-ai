import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Gracefully no-op if env isn't set yet (so the site still runs in preview).
export const supabaseConfigured = Boolean(url && anonKey);

export const supabase = supabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

export interface LeadPayload {
  name: string;
  email: string;
  company: string;
  revenue_range: string;
  repetitive_tasks: string;
  biggest_bottleneck: string;
  ai_experience: string;
  desired_outcomes: string;
}

/** Insert a pre-audit lead. Returns { ok, error }. */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  if (!supabase) {
    // Dev fallback: log so the flow is testable before Supabase is wired.
    console.info('[Meridian AI] Lead (Supabase not configured):', payload);
    return { ok: true };
  }
  const { error } = await supabase.from('leads').insert([payload]);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
