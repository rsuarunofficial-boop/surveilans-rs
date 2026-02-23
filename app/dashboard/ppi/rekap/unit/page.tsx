import { getDaftarRuangan, getRekapUnitByMonth } from "@/services/ppi";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";
import { 
  Building2, 
  Search, 
  Calendar, 
  Filter, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles,
  BarChart4
} from "lucide-react";
import Link from "next/link";
import TabelRekapUnit from "./TabelRekapUnit"; // Pastikan Ayah membuat file ini

export const dynamic = "force-dynamic";

/**
 * Halaman Rekap Laporan Per Unit PPI - RS ARUN
 * Menampilkan akumulasi tindakan harian dalam satu bulan
 */
export default async function RekapLaporanUnitPage({
  searchParams,
}: {
  searchParams: Promise<{ ruangan?: string; bulan?: string }>;
}) {
  // 1. Verifikasi Keamanan & Role
  const profile = await getLoggedUserProfile();
  if (!profile || profile.role !== "PPI") {
    redirect("/login");
  }

  // 2. Await searchParams
  const params = await searchParams;
  const filterRuangan = params.ruangan || "";
  
  // Default ke bulan saat ini jika tidak ada filter (Format: YYYY-MM)
  const currentMonth = new Date().toISOString().slice(0, 7);
  const filterBulan = params.bulan || currentMonth;

  // 3. Ambil Data secara Paralel
  const [daftarRuangan, dataRekap] = await Promise.all([
    getDaftarRuangan(),
    filterRuangan 
      ? getRekapUnitByMonth(filterRuangan, filterBulan) 
      : Promise.resolve([]) // Jika ruangan belum dipilih, jangan tarik data
  ]);

  return (
    <div className="space-y-4 font-sans antialiased pb-10">
      
      {/* SECTION 1: HEADER (IDENTIK DENGAN GLOBAL) */}
      <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-amber-50 text-amber-600 rounded-2xl border border-amber-100 shadow-sm">
            <BarChart4 size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                Rekap Laporan Per Unit
                <Sparkles size={16} className="text-amber-400" />
              </h1>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-amber-500" /> 
              AKUMULASI HARIAN • RS ARUN LHOKSEUMAWE
            </p>
          </div>
        </div>
        
        <div className="bg-amber-50 px-5 py-2.5 rounded-2xl border border-amber-100 flex items-center gap-3">
          <span className="text-lg font-black text-amber-700">
            {dataRekap?.length || 0} <small className="text-[10px] opacity-70 uppercase tracking-tighter">Hari Terdata</small>
          </span>
        </div>
      </div>

      {/* SECTION 2: FILTER PANEL SATU BARIS (ADAPTASI DARI GLOBAL) */}
      <div className="bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
        <form method="GET" className="flex flex-col md:flex-row items-stretch gap-2">
          
          {/* Grup Ruangan */}
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Building2 size={16} className="text-slate-400 flex-shrink-0" />
            <select 
              name="ruangan"
              defaultValue={filterRuangan}
              required
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none appearance-none cursor-pointer"
            >
              <option value="">Pilih Unit / Ruangan</option>
              {daftarRuangan?.map((r: any) => (
                <option key={r.id} value={r.id}>{r.nama_ruangan}</option>
              ))}
            </select>
          </div>

          {/* Grup Bulan (Ganti Date ke Month) */}
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 md:w-64 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="month" 
              name="bulan"
              defaultValue={filterBulan}
              required
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-pointer"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-1.5 flex-shrink-0">
            <button 
              type="submit"
              className="flex-1 md:flex-none px-8 py-2.5 rounded-xl text-[11px] font-black uppercase text-white hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0f172a' }}
            >
              <Search size={16} /> Cari Data
            </button>
            <Link 
              href="/dashboard/ppi/rekap/unit"
              className="flex items-center justify-center w-11 h-11 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-600 transition-all shadow-sm"
              title="Reset Filter"
            >
              <RefreshCw size={16} />
            </Link>
          </div>

        </form>
      </div>

      {/* SECTION 3: TABEL REKAP UNIT (DATA AKUMULASI HARIAN) */}
      {filterRuangan ? (
        <TabelRekapUnit 
          data={dataRekap || []} 
          namaUnit={daftarRuangan.find((r: any) => r.id === filterRuangan)?.nama_ruangan} 
          bulan={filterBulan}
        />
      ) : (
        <div className="bg-white p-20 rounded-[3rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <Filter size={40} />
            </div>
            <h3 className="text-slate-800 font-bold">Siap Menampilkan Data</h3>
            <p className="text-slate-400 text-xs max-w-xs mt-2 font-medium">
                Silakan pilih <span className="text-blue-500">Unit Ruangan</span> dan <span className="text-blue-500">Bulan</span> pada filter di atas untuk melihat rekapitulasi.
            </p>
        </div>
      )}

      {/* FOOTER INFO */}
      <div className="bg-slate-900 px-6 py-4 rounded-2xl border border-slate-800">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center leading-relaxed">
          SISTEM SURVEILANS RS ARUN • DATA AKUMULASI OTOMATIS BERDASARKAN LAPORAN TERVALIDASI
        </p>
      </div>

    </div>
  );
}