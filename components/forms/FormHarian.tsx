"use client";

import { useState } from "react";
import { saveSurveilansMassal } from "@/services/surveilans";
import { 
  Plus, 
  Trash2, 
  Save, 
  Calendar, 
  UserPlus, 
  Info
} from "lucide-react";

// Tipe data harus sesuai dengan kolom di database
type StateRow = {
  nama_pasien: string;
  no_rm: string;
  uc: number;
  cvl: number;
  ivl: number;
  ett: number;
  vap: number;
  ido: number; 
  isk: number;
  iad: number;
  tirah_baring: number;
  plebitis: number;
  hasil_kultur: string;
  antibiotik: string;
};

const OPSI_ANTIBIOTIK = ["", "CEFOTAXIME", "LEVOFLOXSACIN", "CIPROFLOXACIN"];

// Mendefinisikan kolom checkbox agar TypeScript tidak bingung
const CHECKBOX_COLUMNS: (keyof StateRow)[] = [
  'uc', 'cvl', 'ivl', 'ett', 'vap', 'ido', 'isk', 'iad', 'tirah_baring', 'plebitis'
];

export default function FormHarian() {
  const [loading, setLoading] = useState(false);
  const [tanggal, setTanggal] = useState("");

  const rowTemplate: StateRow = {
    nama_pasien: "", 
    no_rm: "",
    uc: 0, cvl: 0, ivl: 0, ett: 0,
    vap: 0, 
    ido: 0, 
    isk: 0, iad: 0,
    tirah_baring: 0, plebitis: 0,
    hasil_kultur: "", antibiotik: "",
  };

  const [rows, setRows] = useState<StateRow[]>([{ ...rowTemplate }]);

  const addRow = () => setRows([...rows, { ...rowTemplate }]);
  
  const removeRow = (index: number) => {
    if (rows.length > 1) setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: keyof StateRow, value: any) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setRows(updatedRows);
  };

  const handleSave = async () => {
    if (!tanggal) return alert("Silakan pilih tanggal terlebih dahulu!");
    const validRows = rows.filter((r) => r.nama_pasien.trim() !== "");
    if (validRows.length === 0) return alert("Isi minimal satu nama pasien!");

    setLoading(true);
    try {
      const dataToSave = validRows.map((r) => ({ ...r, tanggal }));
      const result = await saveSurveilansMassal(dataToSave);
      
      if (result.success) {
        alert("Data Surveilans RS Arun Lhokseumawe Berhasil Disimpan!");
        setRows([{ ...rowTemplate }]);
      } else {
        throw new Error("Gagal menyimpan ke database");
      }
    } catch (err: any) {
      alert("Gagal menyimpan data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Selector Tanggal */}
      <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col md:flex-row md:items-center gap-4 w-full md:w-fit">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Periode</p>
            <label className="font-extrabold text-slate-800 text-sm">Pilih Tanggal</label>
          </div>
        </div>
        <input 
          type="date" 
          value={tanggal} 
          className="bg-slate-50 border-none p-3 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none text-sm font-semibold text-slate-700 transition-all" 
          onChange={(e) => setTanggal(e.target.value)} 
        />
      </div>

      {/* Container Tabel */}
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <UserPlus size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Daftar Pasien Surveilans</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <th rowSpan={2} className="px-4 py-4 border-b border-r border-slate-100 text-left min-w-[180px]">Nama Pasien</th>
                <th rowSpan={2} className="px-4 py-4 border-b border-r border-slate-100 text-center min-w-[90px]">No. RM</th>
                <th colSpan={4} className="px-2 py-2 border-b border-r border-pink-100 bg-pink-50/30 text-pink-600 text-center">Tindakan</th>
                <th colSpan={4} className="px-2 py-2 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center">HAIs</th>
                <th colSpan={2} className="px-2 py-2 border-b border-r border-amber-100 bg-amber-50/30 text-amber-600 text-center">Lainnya</th>
                <th rowSpan={2} className="px-4 py-4 border-b border-r border-slate-100 text-center min-w-[140px]">Hasil Kultur</th>
                <th rowSpan={2} className="px-4 py-4 border-b border-r border-slate-100 text-center min-w-[160px]">Antibiotik</th>
                <th rowSpan={2} className="px-4 py-4 border-b border-slate-100 text-center italic text-slate-300">Aksi</th>
              </tr>
              <tr className="bg-slate-50/30 text-[9px] text-slate-400">
                <th className="p-2 border-b border-r border-slate-100 text-center text-pink-600">UC</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-pink-600">CVL</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-pink-600">IVL</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-pink-600">ETT</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-blue-700">VAP</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-blue-700">IDO</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-blue-700">ISK</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-blue-700">IAD</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-amber-600">TB</th>
                <th className="p-2 border-b border-r border-slate-100 text-center text-amber-700">PLB</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {rows.map((row, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/80 transition-colors">
                  <td className="p-2 border-r border-slate-100">
                    <input 
                      placeholder="Input nama..." 
                      className="w-full bg-transparent p-2 text-xs font-semibold text-slate-700 outline-none focus:bg-white rounded-xl transition-all" 
                      value={row.nama_pasien} 
                      onChange={e => updateRow(idx, 'nama_pasien', e.target.value)} 
                    />
                  </td>
                  <td className="p-2 border-r border-slate-100 text-center">
                    <input 
                      placeholder="No. RM" 
                      className="w-full bg-transparent p-2 text-xs text-center font-medium text-slate-500 outline-none focus:bg-white rounded-xl" 
                      value={row.no_rm} 
                      onChange={e => updateRow(idx, 'no_rm', e.target.value)} 
                    />
                  </td>
                  {CHECKBOX_COLUMNS.map((col) => (
                    <td key={col} className="p-2 border-r border-slate-100 text-center">
                      <div className="flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded-lg border-slate-300 text-blue-600 focus:ring-blue-500/20 cursor-pointer"
                          checked={row[col] === 1} 
                          onChange={e => updateRow(idx, col, e.target.checked ? 1 : 0)} 
                        />
                      </div>
                    </td>
                  ))}
                  <td className="p-2 border-r border-slate-100">
                    <input 
                      className="w-full bg-transparent p-2 text-[10px] outline-none focus:bg-white rounded-xl" 
                      value={row.hasil_kultur} 
                      onChange={e => updateRow(idx, 'hasil_kultur', e.target.value)} 
                    />
                  </td>
                  <td className="p-2 border-r border-slate-100">
                    <select 
                      className="w-full bg-transparent p-2 text-[10px] font-semibold text-slate-700 outline-none focus:bg-white rounded-xl cursor-pointer"
                      value={row.antibiotik}
                      onChange={e => updateRow(idx, 'antibiotik', e.target.value)}
                    >
                      {OPSI_ANTIBIOTIK.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt === "" ? "-- Pilih --" : opt}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2 text-center">
                    <button 
                      onClick={() => removeRow(idx)} 
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-100/50 p-6 rounded-[2rem] border border-dashed border-slate-300">
        <button 
          onClick={addRow} 
          className="flex items-center gap-2 bg-white text-slate-700 hover:text-emerald-600 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 border border-slate-200"
        >
          <Plus size={18} /> Tambah Pasien
        </button>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-slate-400">
            <Info size={14} />
            <p className="text-[10px] font-medium tracking-wide italic tracking-tight">Data disimpan secara otomatis ke Unit Kerja Anda.</p>
          </div>
          <button 
            onClick={handleSave} 
            disabled={loading} 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl font-black text-sm shadow-lg shadow-blue-200 transition-all active:scale-95 disabled:bg-slate-400"
          >
            {loading ? "MENYIMPAN..." : (
              <>
                <Save size={18} /> SIMPAN DATA
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}