import { getGlobalReports, getDaftarRuangan } from "@/services/ppi";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";
import { 
  Files, 
  Search, 
  Calendar, 
  Filter, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import TabelRekapPPI from "./TabelRekapPPI";
import Link from "next/link";

export const dynamic = "force-dynamic";

/**
 * Halaman Rekap Laporan Global PPI - RS ARUN
 * Menggunakan Layout Filter Satu Baris Presisi
 */
export default async function RekapLaporanPPIPage({
  searchParams,
}: {
  searchParams: Promise<{ ruangan?: string; start?: string; end?: string }>;
}) {
  // 1. Verifikasi Keamanan & Role
  const profile = await getLoggedUserProfile();
  if (!profile || profile.role !== "PPI") {
    redirect("/login");
  }

  // 2. Await searchParams (Wajib di Next.js 16)
  const params = await searchParams;
  const filterRuangan = params.ruangan || "all";
  const filterStart = params.start || "";
  const filterEnd = params.end || "";

  // 3. Ambil Data secara Paralel
  const [daftarRuangan, reports] = await Promise.all([
    getDaftarRuangan(),
    getGlobalReports({
      ruangan_id: filterRuangan,
      startDate: filterStart,
      endDate: filterEnd,
    })
  ]);

  return (
    <div className="space-y-4 font-sans antialiased pb-10">
      
      {/* SECTION 1: HEADER (MODERN & SLIM) */}
      <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shadow-sm">
            <Files size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                Rekap Laporan Verified
                <Sparkles size={16} className="text-blue-400" />
              </h1>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-blue-500" /> 
              ARSIP SURVEILANS • RS ARUN LHOKSEUMAWE
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 px-5 py-2.5 rounded-2xl border border-blue-100 flex items-center gap-3">
          <span className="text-lg font-black text-blue-700">
            {reports?.length || 0} <small className="text-[10px] opacity-70 uppercase tracking-tighter">Data Terarsip</small>
          </span>
        </div>
      </div>

      {/* SECTION 2: FILTER PANEL SATU BARIS (ANTI-OVERLAP) */}
      <div className="bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
        <form method="GET" className="flex flex-col md:flex-row items-stretch gap-2">
          
          {/* Grup Ruangan */}
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Filter size={16} className="text-slate-400 flex-shrink-0" />
            <select 
              name="ruangan"
              defaultValue={filterRuangan}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none appearance-none cursor-pointer"
            >
              <option value="all">Semua Ruangan</option>
              {daftarRuangan?.map((r: any) => (
                <option key={r.id} value={r.id}>{r.nama_ruangan}</option>
              ))}
            </select>
          </div>

          {/* Grup Tanggal Mulai */}
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 md:w-44 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="start"
              defaultValue={filterStart}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none"
            />
          </div>

          {/* Pemisah Tanggal */}
          <div className="hidden md:flex items-center text-slate-300 font-bold px-1">/</div>

          {/* Grup Tanggal Akhir */}
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 md:w-44 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="end"
              defaultValue={filterEnd}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-1.5 flex-shrink-0">
            <button 
              type="submit"
              className="flex-1 md:flex-none px-6 py-2.5 rounded-xl text-[11px] font-black uppercase text-white hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0f172a' }} // Navy Gelap agar Pro
            >
              <Search size={16} /> Cari Data
            </button>
            <Link 
              href="/dashboard/ppi/rekap"
              className="flex items-center justify-center w-11 h-11 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-600 transition-all shadow-sm"
              title="Reset Filter"
            >
              <RefreshCw size={16} />
            </Link>
          </div>

        </form>
      </div>

      {/* SECTION 3: TABEL REKAP */}
      <TabelRekapPPI data={reports || []} />

      {/* FOOTER INFO (CLEAN STYLE) */}
      <div className="bg-slate-900 px-6 py-4 rounded-2xl border border-slate-800">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center leading-relaxed">
          Catatan: Data yang tampil adalah laporan yang telah <span className="text-blue-400 underline decoration-blue-500 underline-offset-4">Terdiverifikasi</span> oleh Petugas PPI RS Arun.
        </p>
      </div>

    </div>
  );
}