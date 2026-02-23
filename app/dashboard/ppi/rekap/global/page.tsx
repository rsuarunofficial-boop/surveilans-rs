import { getDaftarRuangan, getRekapGlobalByRoom } from "@/services/ppi";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";
import { 
  Files, 
  Search, 
  Calendar, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles,
  Globe
} from "lucide-react";
import GlobalRekapPPI from "./GlobalRekapPPI";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function RekapLaporanGlobalPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const profile = await getLoggedUserProfile();
  if (!profile || profile.role !== "PPI") {
    redirect("/login");
  }

  const params = await searchParams;
  const filterStart = params.start || "";
  const filterEnd = params.end || "";

  // Mengambil data akumulasi per ruangan
  const reports = await getRekapGlobalByRoom({
    startDate: filterStart,
    endDate: filterEnd,
  });

  return (
    <div className="space-y-4 font-sans antialiased pb-10">
      
      {/* HEADER SECTION */}
      <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
            <Globe size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              Rekapitulasi Global Per Unit
              <Sparkles size={16} className="text-blue-400" />
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-blue-500" /> 
              DATA AKUMULASI TERVERIFIKASI • RS ARUN
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 px-5 py-2.5 rounded-2xl border border-blue-100 flex items-center gap-3">
          <span className="text-lg font-black text-blue-700">
            {reports?.length || 0} <small className="text-[10px] opacity-70 uppercase tracking-tighter">Unit Terdata</small>
          </span>
        </div>
      </div>

      {/* FILTER PANEL */}
      <div className="bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
        <form method="GET" className="flex flex-col md:flex-row items-stretch gap-2">
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="start"
              defaultValue={filterStart}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none"
            />
          </div>

          <div className="hidden md:flex items-center text-slate-300 font-bold px-1">/</div>

          <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
            <Calendar size={16} className="text-slate-400 flex-shrink-0" />
            <input 
              type="date" 
              name="end"
              defaultValue={filterEnd}
              className="w-full py-2.5 pl-2 bg-transparent text-[11px] font-bold text-slate-700 outline-none"
            />
          </div>

          <div className="flex gap-1.5 flex-shrink-0">
            <button 
              type="submit"
              className="flex-1 md:flex-none px-8 py-2.5 rounded-xl text-[11px] font-black uppercase text-white hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0f172a' }}
            >
              <Search size={16} /> Filter Data
            </button>
            <Link 
              href="/dashboard/ppi/rekap"
              className="flex items-center justify-center w-11 h-11 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all"
            >
              <RefreshCw size={16} />
            </Link>
          </div>
        </form>
      </div>

      <GlobalRekapPPI data={reports || []} />
    </div>
  );
}