import { getRiwayatSurveilans } from "@/services/surveilans";
import { 
  FileEdit, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Lock
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RiwayatPage({ searchParams }: Props) {
  const sParams = await searchParams;
  const currentPage = Number(sParams.page) || 1;
  const currentLimit = Number(sParams.limit) || 10;

  const allRiwayat = await getRiwayatSurveilans();
  
  const totalData = allRiwayat.length;
  const totalPages = Math.ceil(totalData / currentLimit);
  const startIndex = (currentPage - 1) * currentLimit;
  const paginatedData = allRiwayat.slice(startIndex, startIndex + currentLimit);

  return (
    <div className="space-y-6 text-slate-600">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-800 tracking-tight">Riwayat Surveilans</h1>
          <p className="text-sm text-slate-500 font-medium">Laporan unit kerja Anda di RS Arun</p>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-slate-100 shadow-sm">
          <Database size={14} className="text-slate-400" />
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mr-2">Tampilkan:</span>
          {[10, 50, 100].map((num) => (
            <Link
              key={num}
              href={`/dashboard/perawat/riwayat?page=1&limit=${num}`}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${
                currentLimit === num 
                ? "bg-blue-600 text-white shadow-md shadow-blue-100 font-medium" 
                : "text-slate-500 hover:bg-slate-50 font-medium"
              }`}
            >
              {num}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                <th className="p-4 border-b border-slate-100 text-center w-12">No</th>
                <th className="p-4 border-b border-slate-100">Tanggal</th>
                <th className="p-4 border-b border-slate-100">Pasien</th>
                <th className="p-4 border-b border-slate-100 text-center">Tindakan & HAIs</th>
                <th className="p-4 border-b border-slate-100">Keterangan Klinis</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400 italic text-sm">
                    Belum ada data laporan yang ditemukan.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="p-4 text-center text-[11px] font-semibold text-slate-400">
                      {startIndex + index + 1}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                          <Calendar size={14} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">
                          {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(item.tanggal))}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-800 uppercase leading-none tracking-tight">{item.nama_pasien}</span>
                        <span className="text-[10px] text-slate-400 mt-1 font-semibold tracking-wider">RM: {item.no_rm}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="flex justify-center gap-1">
                          {item.uc > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold">UC</span>}
                          {item.cvl > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold">CVL</span>}
                          {item.ivl > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold">IVL</span>}
                          {item.ett > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded border border-blue-100 font-bold">ETT</span>}
                        </div>
                        <div className="flex justify-center gap-1">
                          {item.isk > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold">ISK</span>}
                          {item.iad > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold">IAD</span>}
                          {item.vap > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold">VAP</span>}
                          {item.hap > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[9px] rounded border border-red-100 font-bold">HAP</span>}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-[11px]">
                      <div className="flex flex-col gap-1 text-slate-600 font-medium leading-relaxed max-w-[200px]">
                        {item.lainnya && <p className="truncate"><span className="text-slate-400 italic">Lainnya:</span> {item.lainnya}</p>}
                        {item.hasil_kultur && <p className="truncate"><span className="text-slate-400 italic">Kultur:</span> {item.hasil_kultur}</p>}
                        {item.antibiotik && <p className="truncate"><span className="text-slate-400 italic">Abx:</span> {item.antibiotik}</p>}
                        {!item.lainnya && !item.hasil_kultur && !item.antibiotik && <span className="text-slate-300 italic">-</span>}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        {!item.is_verified ? (
                          <>
                            <Link 
                              href={`/dashboard/perawat/riwayat/edit/${item.id}`}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            >
                              <FileEdit size={16} />
                            </Link>
                            <DeleteButton id={item.id} />
                          </>
                        ) : (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-white transition-all cursor-not-allowed">
                             <Lock size={12} className="text-slate-300" />
                             <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Locked</span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
          <p>Halaman {currentPage} Dari {totalPages || 1} — Total {totalData} Data</p>
          <div className="flex items-center gap-2">
            <Link href={`/dashboard/perawat/riwayat?page=${Math.max(1, currentPage - 1)}&limit=${currentLimit}`} className={`p-2 rounded-xl border border-slate-200 transition-all ${currentPage === 1 ? "opacity-30 pointer-events-none" : "bg-white hover:border-blue-300 text-slate-600"}`}>
              <ChevronLeft size={16} />
            </Link>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link key={p} href={`/dashboard/perawat/riwayat?page=${p}&limit=${currentLimit}`} className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs transition-all ${currentPage === p ? "bg-blue-600 text-white shadow-lg shadow-blue-100 font-semibold" : "bg-white text-slate-500 border border-slate-200 hover:border-blue-300 font-semibold"}`}>
                  {p}
                </Link>
              ))}
            </div>
            <Link href={`/dashboard/perawat/riwayat?page=${Math.min(totalPages, currentPage + 1)}&limit=${currentLimit}`} className={`p-2 rounded-xl border border-slate-200 transition-all ${currentPage === totalPages || totalPages === 0 ? "opacity-30 pointer-events-none" : "bg-white hover:border-blue-300 text-slate-600"}`}>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}