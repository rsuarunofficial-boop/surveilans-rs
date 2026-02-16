import { getPPIDashboardStats } from "@/services/ppi";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";
import { 
  ShieldAlert, 
  CheckCircle2, 
  LayoutDashboard, 
  Activity, 
  AlertCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PPIDashboard() {
  const profile = await getLoggedUserProfile();
  if (!profile || profile.role !== 'PPI') redirect("/login");

  const stats = await getPPIDashboardStats();
  const namaBulan = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date());

  return (
    <div className="space-y-6">
      {/* Header PPI */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Monitoring PPI Pusat</h1>
          <p className="text-slate-500 text-sm font-medium mt-1 italic">
            Selamat bekerja kembali, <span className="text-blue-600">Admin PPI RS Arun</span>
          </p>
        </div>
        <div className="px-4 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest">
          Periode: {namaBulan}
        </div>
      </div>

      {/* Grid Statistik Global */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Total HAIs */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
            <ShieldAlert size={24} />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Temuan HAIs RS</p>
          <h2 className="text-4xl font-black text-slate-800 mt-2">{stats?.totalHais || 0}</h2>
          <p className="text-xs font-bold text-red-500 mt-2 italic uppercase tracking-tighter">Butuh Audit Ruangan</p>
        </div>

        {/* Card Verifikasi */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
            <AlertCircle size={24} />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Belum Diverifikasi</p>
          <h2 className="text-4xl font-black text-slate-800 mt-2">{stats?.belumVerif || 0}</h2>
          <Link href="/dashboard/ppi/verifikasi" className="text-xs font-bold text-blue-600 mt-2 flex items-center gap-1 hover:underline">
            Cek Sekarang <ArrowRight size={12} />
          </Link>
        </div>

        {/* Card Total Data */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
            <CheckCircle2 size={24} />
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Laporan Masuk</p>
          <h2 className="text-4xl font-black text-slate-800 mt-2">{stats?.totalEntries || 0}</h2>
          <p className="text-xs font-bold text-slate-400 mt-2 uppercase">Seluruh Unit RS Arun</p>
        </div>
      </div>

      {/* Quick Action Verifikasi Massal */}
      <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden relative group">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Activity className="text-blue-400" /> Kendali Validasi Data
          </h3>
          <p className="text-slate-400 text-sm max-w-lg font-medium leading-relaxed">
            PPI memiliki wewenang penuh untuk memvalidasi data harian perawat sebelum ditarik ke dalam laporan bulanan resmi RS Arun.
          </p>
        </div>
        <Link 
          href="/dashboard/ppi/verifikasi"
          className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-900/40"
        >
          Masuk ke Menu Verifikasi
        </Link>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
      </div>
    </div>
  );
}