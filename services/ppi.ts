"use server";

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

/**
 * Inisialisasi Supabase Client untuk Server Side
 */
async function getSupabase() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    }
  );
}

/**
 * 1. Mendapatkan Statistik Dashboard PPI (Global RS)
 */
export async function getPPIDashboardStats() {
  try {
    const supabase = await getSupabase();
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('surveilans_harian')
      .select('*, master_ruangan(nama_ruangan)')
      .gte('tanggal', firstDay)
      .lte('tanggal', lastDay);

    if (error) throw error;

    const totalHais = data.reduce((acc, curr) => {
      return acc + (
        (Number(curr.isk) || 0) + 
        (Number(curr.iad) || 0) + 
        (Number(curr.vap) || 0) + 
        (Number(curr.hap) || 0)
      );
    }, 0);

    const belumVerif = data?.filter(r => r.is_verified === false).length || 0;

    return {
      totalHais,
      belumVerif,
      totalEntries: data?.length || 0,
      data: data || []
    };
  } catch (error) {
    console.error("Error fetching PPI stats:", error);
    return { totalHais: 0, belumVerif: 0, totalEntries: 0, data: [] };
  }
}

/**
 * 2. Mendapatkan Data Antrean Verifikasi (is_verified = false)
 */
export async function getPendingVerification(filters?: { ruangan_id?: string; startDate?: string; endDate?: string }) {
  try {
    const supabase = await getSupabase();
    
    let query = supabase
      .from('surveilans_harian')
      .select('*, master_ruangan(nama_ruangan)')
      .eq('is_verified', false)
      .order('tanggal', { ascending: false });

    if (filters?.ruangan_id && filters.ruangan_id !== "all") {
      query = query.eq('ruangan_id', filters.ruangan_id);
    }
    if (filters?.startDate) {
      query = query.gte('tanggal', filters.startDate);
    }
    if (filters?.endDate) {
      query = query.lte('tanggal', filters.endDate);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching pending verification:", error);
    return [];
  }
}

/**
 * 3. Server Action: Verifikasi Data Massal
 */
export async function verifySurveilansBatch(ids: string[]) {
  if (!ids || ids.length === 0) return { success: false, message: "Tidak ada data dipilih" };

  try {
    const supabase = await getSupabase();

    const { data, error } = await supabase
      .from('surveilans_harian')
      .update({ 
        is_verified: true,
        verified_at: new Date().toISOString()
      })
      .in('id', ids)
      .select();

    if (error) throw error;

    revalidatePath('/dashboard/ppi');
    revalidatePath('/dashboard/ppi/verifikasi');
    revalidatePath('/dashboard/ppi/rekap');
    
    return { success: true, count: data?.length };
  } catch (error: any) {
    console.error("Error during batch verification:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * 4. Mendapatkan Daftar Ruangan
 */
export async function getDaftarRuangan() {
  try {
    const supabase = await getSupabase();
    const { data, error } = await supabase
      .from('master_ruangan')
      .select('*')
      .order('nama_ruangan');
      
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
}

/**
 * 5. Mendapatkan Rekap Laporan Global
 */
export async function getGlobalReports(filters?: { ruangan_id?: string; startDate?: string; endDate?: string }) {
  try {
    const supabase = await getSupabase();

    let query = supabase
      .from('surveilans_harian')
      .select('*, master_ruangan(nama_ruangan)')
      .eq('is_verified', true)
      .order('tanggal', { ascending: false });

    if (filters?.ruangan_id && filters.ruangan_id !== "all" && filters.ruangan_id !== "undefined") {
      query = query.eq('ruangan_id', filters.ruangan_id);
    }
    if (filters?.startDate) {
      query = query.gte('tanggal', filters.startDate);
    }
    if (filters?.endDate) {
      query = query.lte('tanggal', filters.endDate);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching global reports:", error);
    return [];
  }
}

/**
 * 6. FUNGSI BARU: Mendapatkan Rekap Akumulasi Per Unit (Bulanan)
 */
export async function getRekapUnitByMonth(ruanganId: string, monthYear: string) {
  if (!ruanganId || !monthYear) return [];

  try {
    const supabase = await getSupabase();
    
    // Tentukan tanggal awal dan akhir bulan dari input 'YYYY-MM'
    const [year, month] = monthYear.split('-').map(Number);
    const startDate = `${monthYear}-01`;
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('surveilans_harian')
      .select('*')
      .eq('ruangan_id', ruanganId)
      .eq('is_verified', true)
      .gte('tanggal', startDate)
      .lte('tanggal', endDate)
      .order('tanggal', { ascending: true });

    if (error) throw error;

    // Logika grouping data berdasarkan tanggal
    const grouped = data.reduce((acc: any, curr) => {
      const tgl = curr.tanggal;
      if (!acc[tgl]) {
        acc[tgl] = {
          tanggal: tgl,
          uc: 0, cvl: 0, ivl: 0, ett: 0,
          vap: 0, isk: 0, iad: 0, hap: 0,
          tb: 0, plb: 0, kultur: 0, abx: 0
        };
      }

      acc[tgl].uc += Number(curr.uc) || 0;
      acc[tgl].cvl += Number(curr.cvl) || 0;
      acc[tgl].ivl += Number(curr.ivl) || 0;
      acc[tgl].ett += Number(curr.ett) || 0;
      acc[tgl].vap += Number(curr.vap) || 0;
      acc[tgl].isk += Number(curr.isk) || 0;
      acc[tgl].iad += Number(curr.iad) || 0;
      acc[tgl].hap += Number(curr.hap) || 0;
      acc[tgl].tb += Number(curr.tirah_baring) || 0;
      acc[tgl].plb += Number(curr.plebitis) || 0;
      
      // Hitung Kultur & Abx (Jika ada isinya, dianggap 1 tindakan harian)
      if (curr.hasil_kultur && curr.hasil_kultur !== "" && curr.hasil_kultur !== "Lainnya / Tidak Ada") acc[tgl].kultur += 1;
      if (curr.antibiotik && curr.antibiotik !== "" && curr.antibiotik !== "Lainnya / Tidak Ada") acc[tgl].abx += 1;

      return acc;
    }, {});

    return Object.values(grouped);
  } catch (error) {
    console.error("Error fetching unit month rekap:", error);
    return [];
  }
}

export async function getRekapGlobalByRoom(filters?: { startDate?: string; endDate?: string }) {
  try {
    const supabase = await getSupabase();
    let query = supabase
      .from('surveilans_harian')
      .select('*, master_ruangan(nama_ruangan)')
      .eq('is_verified', true);

    if (filters?.startDate) query = query.gte('tanggal', filters.startDate);
    if (filters?.endDate) query = query.lte('tanggal', filters.endDate);

    const { data, error } = await query;
    if (error) throw error;

    // Logika Pengelompokan berdasarkan Nama Ruangan
    const grouped = data.reduce((acc: any, curr) => {
      const roomName = curr.master_ruangan?.nama_ruangan || "Tanpa Nama";
      if (!acc[roomName]) {
        acc[roomName] = {
          nama_ruangan: roomName,
          uc: 0, cvl: 0, ivl: 0, ett: 0,
          vap: 0, isk: 0, iad: 0, hap: 0,
          tb: 0, plb: 0, kultur: 0, abx: 0
        };
      }

      acc[roomName].uc += Number(curr.uc) || 0;
      acc[roomName].cvl += Number(curr.cvl) || 0;
      acc[roomName].ivl += Number(curr.ivl) || 0;
      acc[roomName].ett += Number(curr.ett) || 0;
      acc[roomName].vap += Number(curr.vap) || 0;
      acc[roomName].isk += Number(curr.isk) || 0;
      acc[roomName].iad += Number(curr.iad) || 0;
      acc[roomName].hap += Number(curr.hap) || 0;
      acc[roomName].tb += Number(curr.tirah_baring) || 0;
      acc[roomName].plb += Number(curr.plebitis) || 0;
      if (curr.hasil_kultur && curr.hasil_kultur !== "" && curr.hasil_kultur !== "Lainnya / Tidak Ada") acc[roomName].kultur += 1;
      if (curr.antibiotik && curr.antibiotik !== "" && curr.antibiotik !== "Lainnya / Tidak Ada") acc[roomName].abx += 1;

      return acc;
    }, {});

    return Object.values(grouped);
  } catch (error) {
    console.error("Error global rekap by room:", error);
    return [];
  }
}