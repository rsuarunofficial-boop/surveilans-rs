"use client";

import { useState } from "react";
import { 
  FileSpreadsheet, 
  Download, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  FileText 
} from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function TabelRekapPPI({ data }: { data: any[] }) {
  // Logic Paginasi
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50; // Menampilkan 100 data sesuai permintaan
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const exportToExcel = () => {
    const excelData = data.map((row) => ({
      Tanggal: new Date(row.tanggal).toLocaleDateString('id-ID'),
      Unit: row.master_ruangan?.nama_ruangan || "-",
      Pasien: row.nama_pasien,
      UC: row.uc || 0,
      CVL: row.cvl || 0,
      IVL: row.ivl || 0,
      ETT: row.ett || 0,
      VAP: row.vap || 0,
      HAP: row.hap || 0,
      ISK: row.isk || 0,
      IAD: row.iad || 0,
      "Hasil Kultur": row.kultur_positif || 0,
      Antibiotik: row.antibiotik || 0,
      Status: row.is_verified ? "Terverifikasi" : "Pending"
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Laporan PPI");
    XLSX.writeFile(workbook, `Rekap_Surveilans_RS_ARUN_${new Date().getTime()}.xlsx`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF('l', 'mm', 'a4'); 
    doc.setFontSize(14);
    doc.text("REKAPITULASI SURVEILANS PPI - RS ARUN LHOKSEUMAWE", 14, 15);
    doc.setFontSize(10);
    doc.text(`Dicetak pada: ${new Date().toLocaleString('id-ID')}`, 14, 20);
    
    const headers = [
      ['Tgl', 'Unit', 'Pasien', 'UC', 'CVL', 'IVL', 'ETT', 'VAP', 'HAP', 'ISK', 'IAD', 'Kultur', 'Antibiotik', 'Status']
    ];

    const tableBody = data.map((row) => [
      new Date(row.tanggal).toLocaleDateString('id-ID'),
      row.master_ruangan?.nama_ruangan || "-",
      row.nama_pasien,
      row.uc || 0,
      row.cvl || 0,
      row.ivl || 0,
      row.ett || 0,
      row.vap || 0,
      row.hap || 0,
      row.isk || 0,
      row.iad || 0,
      row.kultur_positif || 0,
      row.antibiotik || "-",
      row.is_verified ? "Verified" : "Pending"
    ]);

    autoTable(doc, {
      startY: 25,
      head: headers,
      body: tableBody,
      theme: 'grid',
      styles: { fontSize: 7, cellPadding: 2 },
      headStyles: { fillColor: [37, 99, 235], halign: 'center', fontSize: 7, fontStyle: 'bold' },
      columnStyles: {
        0: { cellWidth: 20 }, 1: { cellWidth: 25 }, 2: { cellWidth: 35 },
        3: { halign: 'center' }, 4: { halign: 'center' }, 5: { halign: 'center' }, 
        6: { halign: 'center' }, 7: { halign: 'center' }, 8: { halign: 'center' },
        9: { halign: 'center' }, 10: { halign: 'center' }, 11: { halign: 'center' },
        12: { cellWidth: 30 }, 13: { halign: 'center' }
      }
    });

    doc.save(`Rekap_PPI_Detailed_${new Date().getTime()}.pdf`);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden text-slate-600 font-sans">
      <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-slate-800 tracking-tight leading-none">Hasil Rekapitulasi</h2>
          <p className="text-sm text-slate-500 font-medium mt-2">Ditemukan {data.length} laporan surveilans</p>
        </div>
        
        <div className="flex flex-row items-center gap-3 w-fit">
          <button 
            onClick={exportToExcel}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black text-white shadow-md uppercase tracking-widest border-0 cursor-pointer transition-all hover:opacity-90"
            style={{ backgroundColor: '#10b981', display: 'flex' }}
          >
            <FileSpreadsheet size={14} color="white" />
            <span style={{ color: 'white' }}>EXCEL</span>
          </button>

          <button 
            onClick={exportToPDF}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black text-white shadow-md uppercase tracking-widest border-0 cursor-pointer transition-all hover:opacity-90"
            style={{ backgroundColor: '#ef4444', display: 'flex' }}
          >
            <Download size={14} color="white" />
            <span style={{ color: 'white' }}>PDF</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              <th className="p-4 border-b border-slate-100 text-center w-12 font-semibold">No</th>
              <th className="p-4 border-b border-slate-100 font-semibold">Tanggal</th>
              <th className="p-4 border-b border-slate-100 font-semibold">Pasien</th>
              <th className="p-4 border-b border-slate-100 font-semibold">Unit / Ruangan</th>
              <th className="p-4 border-b border-slate-100 text-center font-semibold">Tindakan & HAIs</th>
              <th className="p-4 border-b border-slate-100 font-semibold">Keterangan Klinis</th>
              <th className="p-4 border-b border-slate-100 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-sans">
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-12 text-center text-slate-400 font-medium italic text-sm">
                  Belum ada data laporan yang ditemukan.
                </td>
              </tr>
            ) : (
              currentData.map((row, index) => (
                <tr key={row.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-4 text-center text-[11px] font-semibold text-slate-400">
                    {startIndex + index + 1}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 text-nowrap">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Calendar size={14} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(row.tanggal))}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-semibold text-slate-800 uppercase tracking-tight">{row.nama_pasien}</span>
                      <span className="text-[10px] text-slate-400 mt-1 font-semibold tracking-wider uppercase">RM: {row.no_rm}</span>
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
                  <td className="p-4 text-[11px]">
                    <div className="flex flex-col gap-1 text-slate-600 font-medium max-w-[180px]">
                      {row.hasil_kultur && <p className="truncate"><span className="text-slate-400 italic font-medium text-[9px]">Kult:</span> {row.hasil_kultur}</p>}
                      {row.antibiotik && <p className="truncate"><span className="text-slate-400 italic font-medium text-[9px]">Abx:</span> {row.antibiotik}</p>}
                      {row.lainnya && <p className="truncate text-[9px]"><span className="text-slate-400 italic font-bold">Lain:</span> {row.lainnya}</p>}
                      {!row.hasil_kultur && !row.antibiotik && !row.lainnya && <span className="text-slate-200 italic">-</span>}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-emerald-50 text-emerald-600 border border-emerald-100/50 shadow-sm">
                      <span className="text-[9px] font-bold uppercase tracking-tight leading-none">Verified</span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER PAGINATION - NAVIGASI HALAMAN */}
      {data.length > itemsPerPage && (
        <div className="p-4 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Halaman {currentPage} dari {totalPages}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Indikator angka halaman sederhana */}
            <div className="flex items-center px-3 py-1.5 bg-white border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-blue-600">{currentPage}</span>
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}