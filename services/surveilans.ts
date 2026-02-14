"use server";

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * Fungsi untuk menyimpan data surveilans secara massal
 */
export async function saveSurveilansMassal(dataRows: any[]) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {}
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: profile } = await supabase
    .from('profiles')
    .select('ruangan_id')
    .eq('id', user.id)
    .single();

  const finalData = dataRows.map(row => ({
    ...row,
    user_id: user.id,
    ruangan_id: profile?.ruangan_id
  }));

  const { error } = await supabase.from('surveilans_harian').insert(finalData);
  if (error) throw error;

  revalidatePath('/dashboard/perawat');
  return { success: true };
}

/**
 * Fungsi: Menghitung rekapitulasi bulanan dengan detail indikator untuk Grafik
 */
export async function getStatsBulanIni() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const now = new Date();
  
  const firstDay = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(now.getFullYear(), now.getMonth(), 1));

  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  const { data, error } = await supabase
    .from('surveilans_harian')
    .select('*')
    .eq('user_id', user.id)
    .gte('tanggal', firstDay)
    .lte('tanggal', today);

  if (error || !data) {
    console.error("Fetch stats error:", error);
    return { totalPasien: 0, totalTindakan: 0, potensiHais: 0, details: {} };
  }

  // Menghitung detail akumulasi per indikator untuk Bar Chart
  const details = {
    uc: data.reduce((acc, curr) => acc + (Number(curr.uc) || 0), 0),
    cvl: data.reduce((acc, curr) => acc + (Number(curr.cvl) || 0), 0),
    ivl: data.reduce((acc, curr) => acc + (Number(curr.ivl) || 0), 0),
    ett: data.reduce((acc, curr) => acc + (Number(curr.ett) || 0), 0),
    vap: data.reduce((acc, curr) => acc + (Number(curr.vap) || 0), 0),
    ido: data.reduce((acc, curr) => acc + (Number(curr.ido) || 0), 0),
    isk: data.reduce((acc, curr) => acc + (Number(curr.isk) || 0), 0),
    iad: data.reduce((acc, curr) => acc + (Number(curr.iad) || 0), 0),
    tb: data.reduce((acc, curr) => acc + (Number(curr.tirah_baring) || 0), 0),
    plb: data.reduce((acc, curr) => acc + (Number(curr.plebitis) || 0), 0),
  };

  return {
    totalPasien: data.length,
    totalTindakan: details.uc + details.cvl + details.ivl + details.ett,
    potensiHais: details.vap + details.ido + details.isk + details.iad,
    details // Mengirimkan objek detail ke frontend
  };
}