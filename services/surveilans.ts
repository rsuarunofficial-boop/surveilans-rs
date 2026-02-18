"use server";

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * FUNGSI BARU: Mengambil daftar pasien dari inputan terakhir di unit perawat
 * Digunakan agar perawat tidak perlu mengetik ulang nama & no_rm pasien yang sama.
 */
export async function getLatestPasienByUnit() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: profile } = await supabase
    .from('profiles')
    .select('ruangan_id')
    .eq('id', user.id)
    .single();

  if (!profile?.ruangan_id) return [];

  // Ambil tanggal terakhir
  const { data: lastInput } = await supabase
    .from('surveilans_harian')
    .select('tanggal')
    .eq('ruangan_id', profile.ruangan_id)
    .order('tanggal', { ascending: false })
    .limit(1)
    .single();

  if (!lastInput) return [];

  // Ambil data lengkap tanpa ada yang tertukar
  const { data: lastPasien, error } = await supabase
    .from('surveilans_harian')
    .select('*')
    .eq('ruangan_id', profile.ruangan_id)
    .eq('tanggal', lastInput.tanggal)
    .order('created_at', { ascending: true }); // Pastikan urutan tetap sama

  if (error) return [];

  return lastPasien.map(p => ({
    nama_pasien: p.nama_pasien,
    no_rm: p.no_rm,
    // SALIN ULANG DATA TINDAKAN & LAINNYA
    uc: Number(p.uc) || 0,
    cvl: Number(p.cvl) || 0,
    ivl: Number(p.ivl) || 0,
    ett: Number(p.ett) || 0,
    tirah_baring: Number(p.tirah_baring) || 0,
    // TETAP SALIN KULTUR & ANTIBIOTIK (Karena biasanya pengobatan berlanjut)
    hasil_kultur: p.hasil_kultur || "",
    antibiotik: p.antibiotik || "",
    // RESET KHUSUS HAIS (Harus diases ulang setiap hari)
    vap: 0,
    hap: 0,
    isk: 0,
    iad: 0,
    plebitis: 0
  }));
}

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
    nama_pasien: row.nama_pasien ? row.nama_pasien.toUpperCase() : row.nama_pasien,
    user_id: user.id,
    ruangan_id: profile?.ruangan_id
  }));

  const { error } = await supabase.from('surveilans_harian').insert(finalData);
  if (error) throw error;

  revalidatePath('/dashboard/perawat');
  revalidatePath('/dashboard/perawat/riwayat');
  return { success: true };
}

/**
 * Fungsi: Menghitung rekapitulasi bulanan
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
    return { totalPasien: 0, totalTindakan: 0, potensiHais: 0, details: {} };
  }

  const uniqueVap = new Set(data.filter(r => Number(r.vap) === 1).map(r => r.no_rm)).size;
  const uniqueHap = new Set(data.filter(r => Number(r.hap) === 1).map(r => r.no_rm)).size; 
  const uniqueIsk = new Set(data.filter(r => Number(r.isk) === 1).map(r => r.no_rm)).size;
  const uniqueIad = new Set(data.filter(r => Number(r.iad) === 1).map(r => r.no_rm)).size;
  
  const uniqueKultur = new Set(
    data.filter(r => r.hasil_kultur && r.hasil_kultur !== '' && r.hasil_kultur !== 'Lainnya / Tidak Ada').map(r => r.no_rm)
  ).size;
  
  const totalAntibiotik = data.filter(
    r => r.antibiotik && r.antibiotik !== '' && r.antibiotik !== 'Lainnya / Tidak Ada'
  ).length;

  const totalPasienUnik = new Set(data.map(r => r.no_rm)).size;

  const details = {
    uc: data.reduce((acc, curr) => acc + (Number(curr.uc) || 0), 0),
    cvl: data.reduce((acc, curr) => acc + (Number(curr.cvl) || 0), 0),
    ivl: data.reduce((acc, curr) => acc + (Number(curr.ivl) || 0), 0),
    ett: data.reduce((acc, curr) => acc + (Number(curr.ett) || 0), 0),
    vap: uniqueVap,
    hap: uniqueHap,
    isk: uniqueIsk,
    iad: uniqueIad,
    tb: data.reduce((acc, curr) => acc + (Number(curr.tirah_baring) || 0), 0),
    plb: data.reduce((acc, curr) => acc + (Number(curr.plebitis) || 0), 0),
    kultur_positif: uniqueKultur,
    antibiotik: totalAntibiotik
  };

  return {
    totalPasien: totalPasienUnik,
    totalTindakan: (details.uc + details.cvl + details.ivl + details.ett),
    potensiHais: (uniqueVap + uniqueHap + uniqueIsk + uniqueIad),
    details 
  };
}

// ... sisanya (getRiwayat, delete, getById, update) tetap sama seperti sebelumnya
export async function getRiwayatSurveilans() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];
  const { data, error } = await supabase.from('surveilans_harian').select('*').eq('user_id', user.id).order('tanggal', { ascending: false }).limit(50);
  if (error) return [];
  return data;
}

export async function deleteSurveilans(id: string) {
  const cookieStore = await cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) } catch {} },
      },
    }
  );
  const { error } = await supabase.from('surveilans_harian').delete().eq('id', id);
  if (error) throw error;
  revalidatePath('/dashboard/perawat/riwayat');
  revalidatePath('/dashboard/perawat');
  return { success: true };
}

export async function getSurveilansById(id: string) {
  const cookieStore = await cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { cookies: { getAll() { return cookieStore.getAll() } } });
  const { data, error } = await supabase.from('surveilans_harian').select('*').eq('id', id).single();
  if (error) return null;
  return data;
}

export async function updateSurveilans(id: string, formData: any) {
  const cookieStore = await cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) } catch {} },
      },
    }
  );
  const updatedData = { ...formData, nama_pasien: formData.nama_pasien ? formData.nama_pasien.toUpperCase() : formData.nama_pasien };
  const { error } = await supabase.from('surveilans_harian').update(updatedData).eq('id', id);
  if (error) throw error;
  revalidatePath('/dashboard/perawat/riwayat');
  revalidatePath('/dashboard/perawat');
  return { success: true };
}