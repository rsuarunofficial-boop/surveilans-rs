"use client";

import { Download, FileText, Info, FileDown } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface TabelRekapUnitProps {
  data: any[];
  namaUnit?: string;
  bulan: string;
}

export default function TabelRekapUnit({ data, namaUnit, bulan }: TabelRekapUnitProps) {
  
  const formatBulan = (monthStr: string) => {
    const date = new Date(monthStr + "-01");
    return new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(date);
  };

  const totals = data.reduce((acc, curr) => ({
    uc: acc.uc + (curr.uc || 0),
    cvl: acc.cvl + (curr.cvl || 0),
    ivl: acc.ivl + (curr.ivl || 0),
    ett: acc.ett + (curr.ett || 0),
    vap: acc.vap + (curr.vap || 0),
    isk: acc.isk + (curr.isk || 0),
    iad: acc.iad + (curr.iad || 0),
    hap: acc.hap + (curr.hap || 0),
    tb: acc.tb + (curr.tb || 0),
    plb: acc.plb + (curr.plb || 0),
    kultur: acc.kultur + (curr.kultur || 0),
    abx: acc.abx + (curr.abx || 0),
  }), {
    uc: 0, cvl: 0, ivl: 0, ett: 0,
    vap: 0, isk: 0, iad: 0, hap: 0,
    tb: 0, plb: 0, kultur: 0, abx: 0
  });

  // FUNGSI EXPORT EXCEL
  const handleExportExcel = () => {
    if (!data || data.length === 0) return alert("Tidak ada data.");
    const excelData = data.map((row, idx) => ({
      "No": idx + 1,
      "Tanggal": new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(row.tanggal)),
      "UC": row.uc, "CVL": row.cvl, "IVL": row.ivl, "ETT": row.ett,
      "VAP": row.vap, "ISK": row.isk, "IAD": row.iad, "HAP": row.hap,
      "TB": row.tb, "PLB": row.plb, "Kultur": row.kultur, "Abx": row.abx
    }));
    const worksheet = XLSX.utils.json_to_sheet([...excelData, {}, { Tanggal: "TOTAL", ...totals }]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap");
    XLSX.writeFile(workbook, `Rekap_Unit_${namaUnit}_${bulan}.xlsx`);
  };

  // FUNGSI EXPORT PDF
  const handleExportPDF = () => {
    const doc = new jsPDF("l", "mm", "a4");
    doc.text(`Rekap Surveilans Harian - ${namaUnit}`, 14, 15);
    doc.setFontSize(10);
    doc.text(`Periode: ${formatBulan(bulan)}`, 14, 22);

    const tableRows = data.map((row, idx) => [
      idx + 1,
      new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short' }).format(new Date(row.tanggal)),
      row.uc, row.cvl, row.ivl, row.ett,
      row.vap, row.isk, row.iad, row.hap,
      row.tb, row.plb, row.kultur, row.abx
    ]);

    autoTable(doc, {
      startY: 30,
      head: [['No', 'Tgl', 'UC', 'CVL', 'IVL', 'ETT', 'VAP', 'ISK', 'IAD', 'HAP', 'TB', 'PLB', 'Klt', 'Abx']],
      body: [...tableRows, ['Total', '', totals.uc, totals.cvl, totals.ivl, totals.ett, totals.vap, totals.isk, totals.iad, totals.hap, totals.tb, totals.plb, totals.kultur, totals.abx]],
      theme: 'grid',
      headStyles: { fillColor: [15, 23, 42] }
    });

    doc.save(`Rekap_Unit_${namaUnit}_${bulan}.pdf`);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-tight">Akumulasi Harian Unit</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{namaUnit} • {formatBulan(bulan)}</p>
          </div>
        </div>
        <div className="flex gap-2">
  {/* Tombol Excel - Hijau Emerald */}
  <button 
    onClick={handleExportExcel} 
    style={{ backgroundColor: '#10b981', color: '#ffffff' }}
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
  >
    <Download size={14} color="#ffffff" /> Excel
  </button>

  {/* Tombol PDF - Merah Rose */}
  <button 
    onClick={handleExportPDF} 
    style={{ backgroundColor: '#f43f5e', color: '#ffffff' }}
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
  >
    <FileDown size={14} color="#ffffff" /> PDF
  </button>
</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 font-sans">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <th className="px-6 py-5 border-b border-r border-slate-100 text-center sticky left-0 bg-slate-50 z-20 w-16">No</th>
              <th className="px-6 py-5 border-b border-r border-slate-100 text-left sticky left-16 bg-slate-50 z-20 min-w-[140px]">Tanggal</th>
              <th className="p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center">UC</th>
              <th className="p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center">CVL</th>
              <th className="p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center">IVL</th>
              <th className="p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center">ETT</th>
              <th className="p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center">VAP</th>
              <th className="p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center">ISK</th>
              <th className="p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center">IAD</th>
              <th className="p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center">HAP</th>
              <th className="p-3 border-b border-r border-amber-100 bg-amber-50/30 text-amber-600 text-center">TB</th>
              <th className="p-3 border-b border-r border-amber-100 bg-amber-50/30 text-amber-600 text-center">PLB</th>
              <th className="px-6 py-5 border-b border-r border-slate-100 text-center">Kultur</th>
              <th className="px-6 py-5 border-b border-slate-100 text-center">Abx</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 border-r border-slate-100 text-center text-[11px] font-bold text-slate-400 sticky left-0 bg-white group-hover:bg-slate-50">{idx + 1}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-xs font-black text-slate-700 sticky left-16 bg-white group-hover:bg-slate-50 whitespace-nowrap">
                  {new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(row.tanggal))}
                </td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.uc || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.cvl || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.ivl || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.ett || 0}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.vap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.vap || 0}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.isk > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.isk || 0}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.iad > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.iad || 0}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.hap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.hap || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10">{row.tb || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10">{row.plb || 0}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-slate-700">{row.kultur || 0}</td>
                <td className="p-4 border-none text-center font-bold text-slate-700">{row.abx || 0}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-900 text-white">
             <tr className="divide-x divide-slate-800">
                <td colSpan={2} className="px-6 py-5 text-center text-[10px] font-black uppercase tracking-[0.2em] sticky left-0 bg-slate-900">Total Akumulasi Bulanan</td>
                <td className="p-4 text-center font-black text-blue-400">{totals.uc}</td>
                <td className="p-4 text-center font-black text-blue-400">{totals.cvl}</td>
                <td className="p-4 text-center font-black text-blue-400">{totals.ivl}</td>
                <td className="p-4 text-center font-black text-blue-400">{totals.ett}</td>
                <td className="p-4 text-center font-black text-red-400">{totals.vap}</td>
                <td className="p-4 text-center font-black text-red-400">{totals.isk}</td>
                <td className="p-4 text-center font-black text-red-400">{totals.iad}</td>
                <td className="p-4 text-center font-black text-red-400">{totals.hap}</td>
                <td className="p-4 text-center font-black text-amber-400">{totals.tb}</td>
                <td className="p-4 text-center font-black text-amber-400">{totals.plb}</td>
                <td className="p-4 text-center font-black">{totals.kultur}</td>
                <td className="p-4 text-center font-black">{totals.abx}</td>
             </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}