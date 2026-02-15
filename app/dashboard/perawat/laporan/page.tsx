import { getStatsBulanIni } from "@/services/surveilans";
import { 
  FileText, FileSpreadsheet, Download, Activity, Microscope, 
  Pill, ShieldAlert, ShieldCheck, Stethoscope, ChevronRight
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function LaporanBulananLengkap() {
  const stats = await getStatsBulanIni();
  
  // Perbaikan Type Casting untuk memastikan data terbaca oleh sistem
  const details = (stats?.details as Record<string, number>) || {};
  const namaBulan = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date());

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-100">
            <FileText size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Laporan Surveilans Unit</h1>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mt-1">Periode: {namaBulan}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kolom 1: TINDAKAN */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope size={18} className="text-blue-500" />
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Indikator Tindakan</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "UC (Urinary Catheter)", val: details.uc || 0 },
              { label: "CVL (Central Venous Line)", val: details.cvl || 0 },
              { label: "IVL (Intravenous Line)", val: details.ivl || 0 },
              { label: "ETT (Endotracheal Tube)", val: details.ett || 0 },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                <span className="text-xs font-bold text-slate-600">{item.label}</span>
                <span className="text-sm font-black text-blue-700">{item.val} <small className="text-[10px] font-medium opacity-60 uppercase">Hari</small></span>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom 2: HAIs */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert size={18} className="text-red-500" />
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Temuan HAIs</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "VAP (Ventilator Assoc. Pneumonia)", val: details.vap || 0 },
              { label: "HAP (Hospital Acquired Pneumonia)", val: details.hap || 0 },
              { label: "ISK (Infeksi Saluran Kemih)", val: details.isk || 0 },
              { label: "IAD (Infeksi Aliran Darah)", val: details.iad || 0 },
            ].map((item) => (
              <div key={item.label} className={`flex justify-between items-center p-4 rounded-2xl border transition-all ${item.val > 0 ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-transparent'}`}>
                <span className="text-xs font-bold text-slate-600">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.val === 0 && <ShieldCheck size={14} className="text-emerald-500" />}
                  <span className={`text-sm font-black ${item.val > 0 ? 'text-red-600' : 'text-slate-400'}`}>{item.val} <small className="text-[10px] font-medium opacity-60 uppercase">Pasien</small></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom 3: LAINNYA & PENUNJANG */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={18} className="text-indigo-500" />
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Indikator Lainnya</h2>
            </div>
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Tirah Baring</span>
                <span className="text-sm font-black text-slate-800">{details.tb || 0} Hari</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Plebitis</span>
                <span className="text-sm font-black text-slate-800">{details.plb || 0} Kasus</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-[2rem] shadow-xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Microscope size={18} className="text-blue-400" />
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Kultur & Antibiotik</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs bg-white/5 p-3 rounded-xl">
                <ChevronRight size={14} className="text-blue-400" />
                <span className="font-medium text-slate-300 italic">Hasil Kultur Positif: <b className="text-white not-italic ml-1">{details.kultur_positif || 0} Pasien</b></span>
              </div>
              <div className="flex items-center gap-3 text-xs bg-white/5 p-3 rounded-xl">
                <Pill size={14} className="text-emerald-400" />
                <span className="font-medium text-slate-300 italic">Total Penggunaan ABX: <b className="text-white not-italic ml-1">{details.antibiotik || 0} Kali</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION: Tombol Download (Pastikan Muncul) */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4 items-start max-w-xl">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shadow-sm shrink-0">
            <ShieldCheck size={20} />
          </div>
          <p className="text-sm font-medium text-slate-500 leading-relaxed text-center md:text-left">
            Laporan ini mencakup akumulasi data surveilans di unit kerja RS ARUN. Pastikan verifikasi dilakukan sebelum pengarsipan atau pencetakan.
          </p>
        </div>

        {/* Gunakan flex (bukan hidden md:flex) agar muncul di semua layar */}

      </div>
    </div>
  );
}