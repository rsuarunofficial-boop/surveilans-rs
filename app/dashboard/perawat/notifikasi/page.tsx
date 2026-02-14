import { AlertCircle, ShieldAlert, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function NotifikasiAmbangBatas() {
  // Contoh data monitoring unit (Data ini idealnya diambil dari agregasi database)
  const unitStats = [
    { jenis: "VAP (Ventilator Associated Pneumonia)", jumlah: 3, limit: 2, status: "High Alert" },
    { jenis: "IDO (Infeksi Daerah Operasi)", jumlah: 1, limit: 2, status: "Normal" },
    { jenis: "ISK (Infeksi Saluran Kemih)", jumlah: 0, limit: 2, status: "Normal" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
          <ShieldAlert size={24} />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-slate-800 tracking-tight">Sistem Ambang Batas HAIs</h1>
          <p className="text-sm font-medium text-slate-500 uppercase">Pemantauan Real-time Unit Kerja RS Arun</p>
        </div>
      </div>

      <div className="grid gap-4">
        {unitStats.map((stat) => (
          <div 
            key={stat.jenis} 
            className={`bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between transition-all ${
              stat.status === "High Alert" ? "ring-2 ring-red-500 ring-offset-2 shadow-lg shadow-red-50" : "shadow-sm"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`mt-1 ${stat.status === "High Alert" ? "text-red-500" : "text-emerald-500"}`}>
                {stat.status === "High Alert" ? <AlertCircle size={24} /> : <TrendingUp size={24} />}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest leading-none mb-2">
                  {stat.jenis}
                </h3>
                <p className="text-lg font-bold text-slate-800">
                  {stat.jumlah} Kasus Terdeteksi
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Ambang Batas Maksimal: <span className="text-slate-800">{stat.limit} Kasus/Bulan</span>
                </p>
              </div>
            </div>

            {stat.status === "High Alert" && (
              <div className="hidden md:flex flex-col items-end gap-2 text-right">
                <span className="px-4 py-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter animate-pulse">
                  High Alert Detected
                </span>
                <Link 
                  href="/dashboard/perawat/riwayat"
                  className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Tinjau Data Pasien <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Instruksi Tindakan Pencegahan */}
      <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <ShieldAlert size={20} className="text-red-400" />
            Tindakan Pencegahan Segera
          </h2>
          <ul className="space-y-2 text-sm font-medium text-slate-300">
            <li className="flex gap-2">
              <span className="text-red-400">•</span> Segera lakukan edukasi tambahan Hand Hygiene kepada tim di ruangan.
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span> Audit kepatuhan penggunaan alat medis sesuai *bundle* PPI.
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span> Laporkan lonjakan kasus ke Komite PPI dalam waktu 1x24 jam.
            </li>
          </ul>
        </div>
        <div className="absolute top-[-20%] right-[-5%] opacity-10">
          <ShieldAlert size={200} />
        </div>
      </div>
    </div>
  );
}