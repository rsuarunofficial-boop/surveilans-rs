import { getLoggedUserProfile } from "@/services/auth";
import { getStatsBulanIni } from "@/services/surveilans";
import { redirect } from "next/navigation";
import { 
  Users, 
  ClipboardCheck, 
  AlertTriangle, 
  Zap, 
  PlusCircle 
} from "lucide-react";
import Link from "next/link";
import StatChart from "@/components/charts/StatChart";

export const dynamic = "force-dynamic";

export default async function PerawatDashboard() {
  const profile = await getLoggedUserProfile();

  if (!profile) redirect("/login");

  const stats = await getStatsBulanIni();

  const namaRuangan = Array.isArray(profile.master_ruangan) 
    ? profile.master_ruangan[0]?.nama_ruangan 
    : profile.master_ruangan?.nama_ruangan || "Ruangan Belum Diatur";

  const namaBulan = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(new Date());

  // Beri tahu TypeScript bahwa details adalah objek yang memiliki kunci string dengan nilai angka
const details: Record<string, number> = stats?.details || {};

const chartData = [
  { name: 'UC', jumlah: Number(details.uc || 0) },
  { name: 'CVL', jumlah: Number(details.cvl || 0) },
  { name: 'IVL', jumlah: Number(details.ivl || 0) },
  { name: 'ETT', jumlah: Number(details.ett || 0) },
  { name: 'VAP', jumlah: Number(details.vap || 0) },
  { name: 'IDO', jumlah: Number(details.ido || 0) },
  { name: 'ISK', jumlah: Number(details.isk || 0) },
  { name: 'IAD', jumlah: Number(details.iad || 0) },
  { name: 'TB', jumlah: Number(details.tb || 0) },
  { name: 'PLB', jumlah: Number(details.plb || 0) },
];

  return (
    <div className="space-y-6 text-slate-600">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Dashboard Perawat
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Selamat bekerja kembali, <span className="text-blue-600 font-semibold">{profile.full_name || 'Petugas'}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xs font-bold text-slate-700">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Unit: {namaRuangan}
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100">
          <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-wider">{namaBulan}</span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Pasien</p>
          <h3 className="text-2xl font-semibold text-slate-800 mt-1">{stats?.totalPasien || 0}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center">
              <ClipboardCheck size={20} />
            </div>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Tindakan</p>
          <h3 className="text-2xl font-semibold text-slate-800 mt-1">{stats?.totalTindakan || 0}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <AlertTriangle size={20} />
            </div>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Temuan HAIs</p>
          <h3 className={`text-2xl font-semibold mt-1 ${stats?.potensiHais && stats.potensiHais > 0 ? 'text-red-500' : 'text-slate-800'}`}>{stats?.potensiHais || 0}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <Zap size={20} />
            </div>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Status Data</p>
          <h3 className="text-sm font-semibold text-emerald-600 mt-2 italic">Ter-sinkronisasi</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Ringkasan Unit Kerja</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Data di atas menampilkan akumulasi aktivitas surveilans di unit <strong>{namaRuangan}</strong> selama bulan <strong>{namaBulan}</strong>. Pastikan setiap tindakan medis tercatat untuk akurasi pelaporan PPI.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-lg font-semibold mb-2">Input Laporan</h2>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">Mulai pencatatan data pasien untuk unit {namaRuangan} sekarang.</p>
          </div>
          <Link 
            href="/dashboard/perawat/form" 
            className="mt-6 bg-blue-600 text-white w-full py-3.5 rounded-xl font-semibold text-sm text-center hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            <PlusCircle size={16} /> Buat Laporan Baru
          </Link>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
        </div>
      </div>

      {/* GRAFIK STATISTIK - WowDash Style */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="mb-6">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Distribusi Indikator Medis</h2>
          <p className="text-[11px] text-slate-400 font-medium italic">Data akumulasi bulan {namaBulan}</p>
        </div>
        <StatChart data={chartData} />
      </div>
    </div>
  );
}