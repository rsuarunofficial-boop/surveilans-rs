import { getLoggedUserProfile } from "@/services/auth";
import { getStatsBulanIni } from "@/services/surveilans";
import { redirect } from "next/navigation";
import { 
  Users, 
  ClipboardCheck, 
  AlertTriangle, 
  PlusCircle,
  ShieldCheck,
  ShieldAlert,
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

  const details: Record<string, number> = stats?.details || {};

  const chartData = [
    { name: 'UC', jumlah: Number(details.uc || 0) },
    { name: 'CVL', jumlah: Number(details.cvl || 0) },
    { name: 'IVL', jumlah: Number(details.ivl || 0) },
    { name: 'ETT', jumlah: Number(details.ett || 0) },
    { name: 'VAP', jumlah: Number(details.vap || 0) },
    { name: 'HAP', jumlah: Number(details.hap || 0) },
    { name: 'ISK', jumlah: Number(details.isk || 0) },
    { name: 'IAD', jumlah: Number(details.iad || 0) },
    { name: 'TB', jumlah: Number(details.tb || 0) },
    { name: 'PLB', jumlah: Number(details.plb || 0) },
  ];

  // LOGIKA ALERT SYSTEM (Ambang Batas HAIs)
  const temuanHais = stats?.potensiHais || 0;
  
  let alertConfig = {
    title: "Status: Aman",
    desc: "Angka infeksi di bawah ambang batas.",
    icon: <ShieldCheck className="text-emerald-500" size={20} />,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    textColor: "text-emerald-600",
    pulseClass: "" 
  };

  if (temuanHais >= 5) { // Threshold High Alert
    alertConfig = {
      title: "High Alert Detected",
      desc: "Segera lakukan audit kepatuhan PPI!",
      icon: <ShieldAlert className="text-red-500" size={20} />,
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-600",
      // Efek kedipan lebih terang dengan shadow glow merah
      pulseClass: "animate-pulse ring-4 ring-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.4)] border-red-400"
    };
  } else if (temuanHais > 0) {
    alertConfig = {
      title: "Status: Waspada",
      desc: "Mendekati ambang batas bulanan.",
      icon: <AlertTriangle className="text-amber-500" size={20} />,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
      pulseClass: "ring-2 ring-amber-400/20"
    };
  }

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
          <h3 className={`text-2xl font-semibold mt-1 ${temuanHais > 0 ? 'text-red-500' : 'text-slate-800'}`}>{temuanHais}</h3>
        </div>

        {/* KARTU ALERT DENGAN KEDIPAN TERANG */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 ${alertConfig.bgColor} ${alertConfig.borderColor} ${alertConfig.pulseClass}`}>
          <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              {alertConfig.icon}
            </div>
            {alertConfig.pulseClass.includes("animate-pulse") && (
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-20"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            )}
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Ambang Batas</p>
          <h3 className={`text-sm font-extrabold mt-2 ${alertConfig.textColor}`}>{alertConfig.title}</h3>
          <p className="text-[10px] font-semibold text-slate-500 leading-tight mt-1">{alertConfig.desc}</p>
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

      {/* GRAFIK STATISTIK */}
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