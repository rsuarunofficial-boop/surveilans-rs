"use client";

import { useState } from "react";
import { CheckCircle2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { verifySurveilansBatch } from "@/services/ppi";
import { useRouter } from "next/navigation";

export default function TabelVerifikasi({ data = [] }: { data: any[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // Konfigurasi Paginasi
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Mengambil data untuk halaman aktif
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Hanya pilih ID yang ada di halaman saat ini (currentData)
      const currentIds = currentData.map((item) => item.id);
      setSelectedIds(currentIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleVerify = async () => {
    if (selectedIds.length === 0) return;
    const confirmVerif = confirm(`Verifikasi ${selectedIds.length} data sekarang?`);
    if (!confirmVerif) return;

    setIsProcessing(true);
    try {
      const res = await verifySurveilansBatch(selectedIds);
      if (res.success) {
        setSelectedIds([]);
        router.refresh();
        alert("Data berhasil diverifikasi!");
      } else {
        alert("Gagal memverifikasi data.");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden text-slate-600 font-sans">
      {/* HEADER SECTION */}
      <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 tracking-tight">Antrean Verifikasi</h2>
          <p className="text-sm text-slate-500 font-medium">Validasi laporan unit kerja RS Arun</p>
        </div>

        <button
          onClick={handleVerify}
          disabled={selectedIds.length === 0 || isProcessing}
          className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 shadow-md disabled:bg-slate-50 disabled:text-slate-300 bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          style={{
            backgroundColor: selectedIds.length > 0 ? '#2563eb' : '#f8fafc',
            color: selectedIds.length > 0 ? '#ffffff' : '#cbd5e1'
          }}
        >
          {isProcessing ? "Memproses..." : (
            <>
              <CheckCircle2 size={16} />
              Verifikasi {selectedIds.length} Laporan
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              <th className="p-4 border-b border-slate-100 text-center w-12">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={currentData.length > 0 && selectedIds.length === currentData.length}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
                />
              </th>
              <th className="p-4 border-b border-slate-100 text-center w-12">No</th>
              <th className="p-4 border-b border-slate-100">Tanggal</th>
              <th className="p-4 border-b border-slate-100">Pasien</th>
              <th className="p-4 border-b border-slate-100">Unit / Ruangan</th>
              <th className="p-4 border-b border-slate-100 text-center">Tindakan & HAIs</th>
              <th className="p-4 border-b border-slate-100 text-center">Lainnya</th>
              <th className="p-4 border-b border-slate-100">Keterangan Klinis</th>
              <th className="p-4 border-b border-slate-100 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={9} className="p-12 text-center text-slate-400 font-medium italic text-sm">
                  Belum ada data laporan yang ditemukan.
                </td>
              </tr>
            ) : (
              currentData.map((row, index) => (
                <tr key={row.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => handleSelectOne(row.id)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer accent-blue-600"
                    />
                  </td>
                  <td className="p-4 text-center text-[11px] font-semibold text-slate-400">
                    {startIndex + index + 1}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Calendar size={14} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(row.tanggal))}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-800 uppercase leading-none tracking-tight">{row.nama_pasien}</span>
                      <span className="text-[10px] text-slate-400 mt-1 font-semibold tracking-wider">RM: {row.no_rm}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-tight">
                      {row.master_ruangan?.nama_ruangan || "N/A"}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex justify-center gap-1">
                        {row.uc > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold uppercase leading-none tracking-tighter">UC</span>}
                        {row.cvl > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold uppercase leading-none tracking-tighter">CVL</span>}
                        {row.ivl > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold uppercase leading-none tracking-tighter">IVL</span>}
                        {row.ett > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold uppercase leading-none tracking-tighter">ETT</span>}
                      </div>
                      <div className="flex justify-center gap-1">
                        {row.isk > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold uppercase leading-none tracking-tighter">ISK</span>}
                        {row.iad > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold uppercase leading-none tracking-tighter">IAD</span>}
                        {row.vap > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold uppercase leading-none tracking-tighter">VAP</span>}
                        {row.hap > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold uppercase leading-none tracking-tighter">HAP</span>}
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-1">
                      {row.tirah_baring > 0 && (
                        <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[9px] rounded border border-amber-100 font-black uppercase tracking-tighter">TB</span>
                      )}
                      {row.plebitis > 0 && (
                        <span className="px-1.5 py-0.5 bg-orange-50 text-orange-600 text-[9px] rounded border border-orange-100 font-black uppercase tracking-tighter">PLB</span>
                      )}
                      {(!row.tirah_baring && !row.plebitis) && (
                        <span className="text-slate-300 italic text-[10px]">-</span>
                      )}
                    </div>
                  </td>

                  <td className="p-4 text-[11px]">
                    <div className="flex flex-col gap-1 text-slate-600 font-medium leading-relaxed max-w-[200px]">
                      {row.hasil_kultur && <p className="truncate"><span className="text-slate-400 italic font-medium tracking-tight text-[9px]">Kultur:</span> {row.hasil_kultur}</p>}
                      {row.antibiotik && <p className="truncate"><span className="text-slate-400 italic font-medium tracking-tight text-[9px]">Abx:</span> {row.antibiotik}</p>}
                      {!row.hasil_kultur && !row.antibiotik && <span className="text-slate-200 italic">-</span>}
                    </div>
                  </td>
                  
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-100">
                      <span className="text-[9px] font-bold uppercase tracking-tight leading-none font-sans">Pending</span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER PAGINATION */}
      {data.length > itemsPerPage && (
        <div className="p-6 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Halaman {currentPage} dari {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}