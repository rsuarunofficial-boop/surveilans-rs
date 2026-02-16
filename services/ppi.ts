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

    // LOGIKA YANG BENAR:
// Menjumlahkan nilai di tiap kolom infeksi
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

    // Tambahkan Logika Filter
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

    // Menghapus cache agar data terbaru langsung muncul di semua menu
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
 * 5. Mendapatkan Rekap Laporan Global (HANYA YANG SUDAH DIVERIFIKASI)
 */
export async function getGlobalReports(filters?: { ruangan_id?: string; startDate?: string; endDate?: string }) {
  try {
    const supabase = await getSupabase();

    let query = supabase
      .from('surveilans_harian')
      .select('*, master_ruangan(nama_ruangan)')
      .eq('is_verified', true) // <-- KUNCI PERBAIKAN: Hanya ambil data yang sudah valid
      .order('tanggal', { ascending: false });

    // Filter berdasarkan Ruangan
    if (filters?.ruangan_id && filters.ruangan_id !== "all" && filters.ruangan_id !== "undefined") {
      query = query.eq('ruangan_id', filters.ruangan_id);
    }
    
    // Filter berdasarkan Rentang Tanggal
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