"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { updateSurveilans } from "@/services/surveilans";
import { useRouter } from "next/navigation";

// Daftar pilihan antibiotik standar RS Arun
const ANTIBIOTIK_OPTIONS = [
  "Ceftriaxone",
  "Cefotaxime",
  "Ciprofloxacin",
  "Levofloxacin",
  "Meropenem",
  "Amoxicillin",
  "Gentamicin",
  "Metronidazole",
  "Vancomycin",
  "Lainnya / Tidak Ada"
];

export default function EditForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Inisialisasi state dengan menyertakan tirah_baring dan plebitis
  const [formData, setFormData] = useState({
    tanggal: initialData.tanggal || "",
    uc: initialData.uc || 0,
    cvl: initialData.cvl || 0,
    ivl: initialData.ivl || 0,
    ett: initialData.ett || 0,
    isk: initialData.isk || 0,
    iad: initialData.iad || 0,
    vap: initialData.vap || 0,
    hap: initialData.hap || 0,
    tirah_baring: initialData.tirah_baring || 0,
    plebitis: initialData.plebitis || 0,
    hasil_kultur: initialData.hasil_kultur || "",
    antibiotik: initialData.antibiotik || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateSurveilans(initialData.id, formData);
      router.push("/dashboard/perawat/riwayat");
      router.refresh();
    } catch (error) {
      alert("Terjadi kesalahan saat memperbarui data surveilans.");
    } finally {
      setLoading(false);
    }
  };

  const handleNumberChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: parseInt(value) || 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Seksi Informasi Waktu */}
      <section>
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mb-3">
          Informasi Waktu
        </label>
        <input 
          type="date" 
          value={formData.tanggal}
          onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
          className="w-full md:w-1/3 p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-700 bg-white"
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
        {/* Seksi Tindakan Alat Medis */}
        <section className="space-y-4">
          <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
            Tindakan (Alat Medis)
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['uc', 'cvl', 'ivl', 'ett'].map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-500 uppercase">{field}</span>
                <input 
                  type="number"
                  min="0"
                  max="1"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) => handleNumberChange(field, e.target.value)}
                  className="p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none font-medium transition-all bg-white"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Seksi Temuan Infeksi HAIs */}
        <section className="space-y-4">
          <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
            Temuan Infeksi (HAIs)
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['isk', 'iad', 'vap', 'hap'].map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-500 uppercase">{field}</span>
                <input 
                  type="number"
                  min="0"
                  max="1"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) => handleNumberChange(field, e.target.value)}
                  className="p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-red-500 outline-none font-medium transition-all bg-white"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SEKSI BARU: Lainnya (TB & PLB) */}
      <section className="space-y-4 pt-4 border-t border-slate-50">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
          Lainnya (Kondisi Tambahan)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">Tirah Baring (TB)</span>
            <input 
              type="number"
              min="0"
              max="1"
              value={formData.tirah_baring}
              onChange={(e) => handleNumberChange('tirah_baring', e.target.value)}
              className="p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-amber-500 outline-none font-medium transition-all bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">Plebitis (PLB)</span>
            <input 
              type="number"
              min="0"
              max="1"
              value={formData.plebitis}
              onChange={(e) => handleNumberChange('plebitis', e.target.value)}
              className="p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-orange-500 outline-none font-medium transition-all bg-white"
            />
          </div>
        </div>
      </section>

      {/* Seksi Keterangan Klinis Tambahan */}
      <section className="space-y-4 pt-4 border-t border-slate-50">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
          Keterangan Klinis Tambahan
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-slate-500">Hasil Kultur</span>
            <input 
              type="text"
              value={formData.hasil_kultur}
              onChange={(e) => setFormData({...formData, hasil_kultur: e.target.value})}
              placeholder="Input hasil kultur..."
              className="p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm text-slate-700 transition-all bg-white"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-slate-500">Antibiotik</span>
            <div className="relative">
              <select 
                value={formData.antibiotik}
                onChange={(e) => setFormData({...formData, antibiotik: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm text-slate-700 bg-white cursor-pointer transition-all"
              >
                <option value="">-- Pilih Jenis Antibiotik --</option>
                {ANTIBIOTIK_OPTIONS.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tombol Simpan Perubahan */}
      <div className="flex justify-end pt-6">
        <button 
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-12 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={18} />
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}