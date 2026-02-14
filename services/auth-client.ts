"use client";

import { createBrowserClient } from '@supabase/ssr';

export const createClientSideSafe = () => 
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export async function logoutClient() {
  const supabase = createClientSideSafe();
  await supabase.auth.signOut();
  window.location.href = "/login"; // Refresh paksa ke halaman login
}