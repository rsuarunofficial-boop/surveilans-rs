import { getRiwayatSurveilans } from "@/services/surveilans";
import { 
  FileEdit, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Lock,
  ChevronsLeft,
  ChevronsRight
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

  const result = await getRiwayatSurveilans(1000); 
  const allData = Array.isArray(result) ? result : (result?.data || []);
  const totalDatabase = result?.total || allData.length;
    
  const totalData = allData.length;
  const totalPages = Math.ceil(totalData / currentLimit);
  const startIndex = (currentPage - 1) * currentLimit;
  const paginatedData = allData.slice(startIndex, startIndex + currentLimit);

  return (
    <div className="space-y-5 text-slate-600 font-sans antialiased">
      {/* HEADER SECTION - BERSIH SESUAI GAMBAR 1 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Riwayat Surveilans</h1>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.1em] mt-1">Laporan Unit Kerja Anda di RS Arun</p>
        </div>

        {/* TAMPILKAN LIMIT - CAPSULE STYLE RAPI */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
          <Database size={12} className="text-slate-300" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mr-1">Tampilkan:</span>
          <div className="flex gap-1">
            {[10, 50, 100].map((num) => (
              <Link
                key={num}
                href={`/dashboard/perawat/riwayat?page=1&limit=${num}`}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  currentLimit === num 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {num}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                <th className="p-4 border-b border-slate-100 text-center w-12">No</th>
                <th className="p-4 border-b border-slate-100">Tanggal</th>
                <th className="p-4 border-b border-slate-100">Pasien</th>
                <th className="p-4 border-b border-slate-100 text-center">Tindakan & HAIs</th>
                <th className="p-4 border-b border-slate-100 text-center">Lainnya</th>
                <th className="p-4 border-b border-slate-100">Keterangan Klinis</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paginatedData.map((item, index) => (
                <tr key={item.id} className="group hover:bg-slate-50/40 transition-colors">
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
                  {/* BADGE TINDAKAN - DIPERKECIL SESUAI GAMBAR 2 */}
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
                  <td className="p-4 text-center">
                      <div className="flex justify-center gap-1">
                        {item.tirah_baring > 0 && (
                          <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[9px] rounded border border-amber-100 font-black uppercase tracking-tighter">TB</span>
                        )}
                        {item.plebitis > 0 && (
                          <span className="px-1.5 py-0.5 bg-orange-50 text-orange-600 text-[9px] rounded border border-orange-100 font-black uppercase tracking-tighter">PLB</span>
                        )}
                        {(!item.tirah_baring && !item.plebitis) && (
                          <span className="text-slate-300 italic text-[10px]">-</span>
                        )}
                      </div>
                    </td>
                  <td className="p-4 text-[11px]">
                      <div className="flex flex-col gap-1 text-slate-600 font-medium leading-relaxed max-w-[200px]">
                        {item.hasil_kultur && <p className="truncate"><span className="text-slate-400 italic">Kultur:</span> {item.hasil_kultur}</p>}
                        {item.antibiotik && <p className="truncate"><span className="text-slate-400 italic">Abx:</span> {item.antibiotik}</p>}
                        {!item.hasil_kultur && !item.antibiotik && <span className="text-slate-300 italic">-</span>}
                      </div>
                    </td>
                  <td className="p-5 text-right">
                    <div className="flex justify-end gap-1">
                      {!item.is_verified ? (
                        <>
                          <Link 
                            href={`/dashboard/perawat/riwayat/edit/${item.id}`}
                            className="p-1.5 text-slate-300 hover:text-blue-500 transition-colors"
                          >
                            <FileEdit size={16} strokeWidth={1.5} />
                          </Link>
                          <DeleteButton id={item.id} />
                        </>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50/50 rounded-lg border border-slate-100">
                           <Lock size={10} className="text-slate-300" />
                           <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest italic leading-none">Locked</span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MINIMALIST PAGINATION FOOTER - TIDAK ADA BANNER HITAM LEBAR */}
        <div className="p-5 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/30">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            Halaman {currentPage} Dari {totalPages || 1} — Total {totalDatabase} Data
          </p>
          
          <div className="flex items-center gap-2">
            <div className="flex gap-1 mr-2">
              <Link href={`?page=1&limit=${currentLimit}`} className={`p-1.5 rounded-lg border border-slate-100 ${currentPage === 1 ? "text-slate-200" : "text-slate-400 hover:bg-white"}`}><ChevronsLeft size={14}/></Link>
              <Link href={`?page=${Math.max(1, currentPage - 1)}&limit=${currentLimit}`} className={`p-1.5 rounded-lg border border-slate-100 ${currentPage === 1 ? "text-slate-200" : "text-slate-400 hover:bg-white"}`}><ChevronLeft size={14}/></Link>
            </div>
            
            <div className="bg-white border border-slate-100 px-3 py-1 rounded-lg shadow-sm">
               <span className="text-[10px] font-bold text-blue-600">{currentPage}</span>
               <span className="text-[10px] font-medium text-slate-300 mx-1">/</span>
               <span className="text-[10px] font-bold text-slate-400">{totalPages || 1}</span>
            </div>

            <div className="flex gap-1 ml-2">
              <Link href={`?page=${Math.min(totalPages, currentPage + 1)}&limit=${currentLimit}`} className={`p-1.5 rounded-lg border border-slate-100 ${currentPage === totalPages ? "text-slate-200" : "text-slate-400 hover:bg-white"}`}><ChevronRight size={14}/></Link>
              <Link href={`?page=${totalPages}&limit=${currentLimit}`} className={`p-1.5 rounded-lg border border-slate-100 ${currentPage === totalPages ? "text-slate-200" : "text-slate-400 hover:bg-white"}`}><ChevronsRight size={14}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}