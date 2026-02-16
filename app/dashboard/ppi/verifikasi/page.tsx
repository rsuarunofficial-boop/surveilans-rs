import { getPendingVerification, getDaftarRuangan } from "@/services/ppi";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";
import { 
  ShieldCheck, 
  Info, 
  ClipboardCheck, 
  AlertCircle, 
  Sparkles,
  Search,
  Filter,
  Calendar,
  RefreshCw
} from "lucide-react";
import TabelVerifikasi from "./TabelVerifikasi";
import Link from "next/link";

export const dynamic = "force-dynamic";

/**
 * HALAMAN VERIFIKASI PPI - RS ARUN
 * Layout: Single Line Filter (Anti-Overlap Version)
 */
export default async function VerifikasiPPIPage({
  searchParams,
}: {
  searchParams: Promise<{ ruangan?: string; start?: string; end?: string }>;
}) {
  // 1. Validasi Keamanan & Role
  const profile = await getLoggedUserProfile();
  if (!profile || profile.role !== "PPI") {
    redirect("/login");
  }

  // 2. Ambil Parameter dari URL
  const params = await searchParams;
  const filterRuangan = params.ruangan || "all";
  const filterStart = params.start || "";
  const filterEnd = params.end || "";

  // 3. Fetch Data secara Paralel
  const [daftarRuangan, pendingData] = await Promise.all([
    getDaftarRuangan(),
    getPendingVerification({
      ruangan_id: filterRuangan,
      startDate: filterStart,
      endDate: filterEnd,
    })
  ]);

  return (
    <div className="space-y-4 font-sans antialiased pb-10">
      
      {/* SECTION 1: HEADER (RINGKAS) */}
      <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 shadow-sm">
            <ClipboardCheck size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                Validasi Surveilans
                <Sparkles size={16} className="text-amber-400" />
              </h1>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-500" /> 
              PPI • RS ARUN LHOKSEUMAWE
            </p>
          </div>
        </div>
        
        <div className="bg-amber-50 px-5 py-2.5 rounded-2xl border border-amber-100 flex items-center gap-3">
          <AlertCircle size={14} className="text-amber-600" />
          <span className="text-lg font-black text-amber-700">
            {pendingData.length} <small className="text-[10px] opacity-70 uppercase">Antrean</small>
          </span>
        </div>
      </div>

      {/* SECTION 2: FILTER PANEL (SINGLE LINE & PRECISION) */}
      <div className="bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
        <form method="GET" className="flex flex-col md:flex-row items-stretch gap-2">
          
          {/* Grup Ruangan */}
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all">
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
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 md:w-44 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="start"
              defaultValue={filterStart}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-text"
            />
          </div>

          {/* Pemisah Tanggal */}
          <div className="hidden md:flex items-center text-slate-300 font-bold px-1">/</div>

          {/* Grup Tanggal Akhir */}
          <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 md:w-44 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="end"
              defaultValue={filterEnd}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-text"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-1.5 flex-shrink-0">
            <button 
              type="submit"
              className="flex-1 md:flex-none px-6 py-2.5 rounded-xl text-[11px] font-black uppercase text-white hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0f172a' }}
            >
              <Search size={16} /> Cari
            </button>
            <Link 
              href="/dashboard/ppi/verifikasi"
              className="flex items-center justify-center w-11 h-11 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-600 transition-all shadow-sm"
              title="Reset Filter"
            >
              <RefreshCw size={16} />
            </Link>
          </div>

        </form>
      </div>

      {/* SECTION 3: INFO BOX (COMPACT NAVY) */}
      <div className="bg-slate-900 px-5 py-3 rounded-xl border border-slate-800 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
        <p className="text-[10px] text-slate-300 font-medium">
          Tinjau data secara teliti, gunakan <span className="text-white font-bold">Checkbox</span> untuk verifikasi massal.
        </p>
      </div>

      {/* SECTION 4: TABLE AREA */}
      <TabelVerifikasi data={pendingData} />

      {/* FOOTER */}
      <div className="flex items-center justify-center gap-3 pt-4">
        <div className="h-px w-6 bg-slate-200" />
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.4em]">
          RS ARUN LHOKSEUMAWE • DIGITAL HEALTHCARE
        </p>
        <div className="h-px w-6 bg-slate-200" />
      </div>

    </div>
  );
}