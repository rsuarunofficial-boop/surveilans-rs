"use server";

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * Fungsi untuk menyimpan data surveilans secara massal
 * Secara otomatis mengubah nama_pasien menjadi HURUF BESAR
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

  // PROSES TRANSFORMASI DATA
  const finalData = dataRows.map(row => ({
    ...row,
    // Mengubah nama_pasien menjadi huruf besar saat penyimpanan
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
 * Fungsi: Menghitung rekapitulasi bulanan dengan akurasi Pasien Unik
 * Menggunakan nama kolom database: hasil_kultur dan antibiotik
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

  // LOGIKA PASIEN UNIK UNTUK HAIs
  const uniqueVap = new Set(data.filter(r => Number(r.vap) === 1).map(r => r.no_rm)).size;
  const uniqueHap = new Set(data.filter(r => Number(r.hap) === 1).map(r => r.no_rm)).size; 
  const uniqueIsk = new Set(data.filter(r => Number(r.isk) === 1).map(r => r.no_rm)).size;
  const uniqueIad = new Set(data.filter(r => Number(r.iad) === 1).map(r => r.no_rm)).size;
  
  // LOGIKA KULTUR & ANTIBIOTIK (Sesuai nama kolom di image_ef9e68.png)
  // Menghitung jumlah pasien unik yang melakukan kultur (bukan 'Lainnya / Tidak Ada')
  const uniqueKultur = new Set(
    data.filter(r => r.hasil_kultur && r.hasil_kultur !== '' && r.hasil_kultur !== 'Lainnya / Tidak Ada').map(r => r.no_rm)
  ).size;
  
  // Menghitung total penggunaan antibiotik selama sebulan (akumulasi baris/input)
  const totalAntibiotik = data.filter(
    r => r.antibiotik && r.antibiotik !== '' && r.antibiotik !== 'Lainnya / Tidak Ada'
  ).length;

  const totalPasienUnik = new Set(data.map(r => r.no_rm)).size;

  const details = {
    // Tindakan (Device Days) - Akumulatif
    uc: data.reduce((acc, curr) => acc + (Number(curr.uc) || 0), 0),
    cvl: data.reduce((acc, curr) => acc + (Number(curr.cvl) || 0), 0),
    ivl: data.reduce((acc, curr) => acc + (Number(curr.ivl) || 0), 0),
    ett: data.reduce((acc, curr) => acc + (Number(curr.ett) || 0), 0),
    
    // HAIs - Pasien Unik
    vap: uniqueVap,
    hap: uniqueHap,
    isk: uniqueIsk,
    iad: uniqueIad,
    
    // Lainnya
    tb: data.reduce((acc, curr) => acc + (Number(curr.tirah_baring) || 0), 0),
    plb: data.reduce((acc, curr) => acc + (Number(curr.plebitis) || 0), 0),
    
    // Kultur & ABX (Menggunakan data hasil_kultur dan antibiotik)
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

/**
 * Fungsi untuk mengambil riwayat surveilans perawat yang login
 */
export async function getRiwayatSurveilans() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('surveilans_harian')
    .select('*')
    .eq('user_id', user.id)
    .order('tanggal', { ascending: false })
    .limit(50);

  if (error) {
    console.error("Fetch history error:", error);
    return [];
  }

  return data;
}

/**
 * Fungsi untuk menghapus data surveilans
 */
export async function deleteSurveilans(id: string) {
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

  const { error } = await supabase.from('surveilans_harian').delete().eq('id', id);
  if (error) throw error;
  
  revalidatePath('/dashboard/perawat/riwayat');
  revalidatePath('/dashboard/perawat');
  revalidatePath('/dashboard/perawat/laporan'); 
  return { success: true };
}

/**
 * Mengambil data tunggal untuk proses Edit
 */
export async function getSurveilansById(id: string) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  );

  const { data, error } = await supabase
    .from('surveilans_harian')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}

/**
 * Memperbarui data surveilans (Update)
 */
export async function updateSurveilans(id: string, formData: any) {
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

  const updatedData = {
    ...formData,
    nama_pasien: formData.nama_pasien ? formData.nama_pasien.toUpperCase() : formData.nama_pasien
  };

  const { error } = await supabase.from('surveilans_harian').update(updatedData).eq('id', id);
  if (error) throw error;

  revalidatePath('/dashboard/perawat/riwayat');
  revalidatePath('/dashboard/perawat');
  revalidatePath('/dashboard/perawat/laporan'); 
  return { success: true };
}