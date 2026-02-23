"use client";

import { FileSpreadsheet, Building2, Download } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function GlobalRekapPPI({ data }: { data: any[] }) {
  
  const totalRS = data.reduce((acc, curr) => ({
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
    abx: acc.abx + (curr.abx || 0)
  }), { uc: 0, cvl: 0, ivl: 0, ett: 0, vap: 0, isk: 0, iad: 0, hap: 0, tb: 0, plb: 0, kultur: 0, abx: 0 });

  // FUNGSI EXPORT EXCEL
  const exportExcel = () => {
    const excelData = data.map((row, idx) => ({
      "No": idx + 1,
      "Nama Ruangan": row.nama_ruangan,
      "UC": row.uc || 0,
      "CVL": row.cvl || 0,
      "IVL": row.ivl || 0,
      "ETT": row.ett || 0,
      "VAP": row.vap || 0,
      "ISK": row.isk || 0,
      "IAD": row.iad || 0,
      "HAP": row.hap || 0,
      "TB": row.tb || 0,
      "PLB": row.plb || 0,
      "Kultur": row.kultur || 0,
      "Antibiotik": row.abx || 0
    }));

    const totalRow = {
      "No": "",
      "Nama Ruangan": "TOTAL SELURUH RS",
      "UC": totalRS.uc,
      "CVL": totalRS.cvl,
      "IVL": totalRS.ivl,
      "ETT": totalRS.ett,
      "VAP": totalRS.vap,
      "ISK": totalRS.isk,
      "IAD": totalRS.iad,
      "HAP": totalRS.hap,
      "TB": totalRS.tb,
      "PLB": totalRS.plb,
      "Kultur": totalRS.kultur,
      "Antibiotik": totalRS.abx
    };

    const worksheet = XLSX.utils.json_to_sheet([...excelData, {}, totalRow]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Global");

    worksheet["!cols"] = [
      { wch: 5 }, { wch: 25 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, 
      { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, 
      { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 12 }
    ];

    XLSX.writeFile(workbook, `Rekap_Global_RS_Arun.xlsx`);
  };

  // FUNGSI EXPORT PDF
  const exportPDF = () => {
    const doc = new jsPDF("l", "mm", "a4");
    
    doc.setFontSize(14);
    doc.text("REKAPITULASI GLOBAL PPI PER UNIT - RS ARUN LHOKSEUMAWE", 14, 15);
    doc.setFontSize(10);
    doc.text(`Dicetak pada: ${new Date().toLocaleString('id-ID')}`, 14, 22);

    const headers = [['No', 'Nama Ruangan', 'UC', 'CVL', 'IVL', 'ETT', 'VAP', 'ISK', 'IAD', 'HAP', 'TB', 'PLB', 'Klt', 'Abx']];
    
    const body = data.map((row, idx) => [
      idx + 1,
      row.nama_ruangan,
      row.uc, row.cvl, row.ivl, row.ett,
      row.vap, row.isk, row.iad, row.hap,
      row.tb, row.plb, row.kultur, row.abx
    ]);

    // Tambahkan baris total di PDF
    body.push([
      '', 'TOTAL SELURUH RS',
      totalRS.uc, totalRS.cvl, totalRS.ivl, totalRS.ett,
      totalRS.vap, totalRS.isk, totalRS.iad, totalRS.hap,
      totalRS.tb, totalRS.plb, totalRS.kultur, totalRS.abx
    ]);

    autoTable(doc, {
      startY: 30,
      head: headers,
      body: body,
      theme: 'grid',
      headStyles: { fillColor: [15, 23, 42], fontSize: 8, halign: 'center' },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { halign: 'center' },
        1: { fontStyle: 'bold' },
      },
      didParseCell: function (data) {
        // Beri warna khusus untuk baris total di PDF
        if (data.row.index === body.length - 1) {
          data.cell.styles.fillColor = [241, 245, 249];
          data.cell.styles.fontStyle = 'bold';
        }
      }
    });

    doc.save(`Rekap_Global_RS_Arun.pdf`);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden font-sans">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Building2 size={20} />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-tight">Perbandingan Antar Unit</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Ringkasan Beban & Infeksi</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          {/* Tombol Excel */}
          <button 
            onClick={exportExcel}
            style={{ backgroundColor: '#10b981', color: '#ffffff' }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
          >
            <FileSpreadsheet size={16} color="white" /> Excel
          </button>

          {/* Tombol PDF */}
          <button 
            onClick={exportPDF}
            style={{ backgroundColor: '#ef4444', color: '#ffffff' }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
          >
            <Download size={16} color="white" /> PDF
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <th className="px-6 py-5 border-b border-r border-slate-100 text-center w-16">No</th>
              <th className="px-6 py-5 border-b border-r border-slate-100 text-left min-w-[200px]">Nama Ruangan</th>
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
              <th className="px-6 py-5 border-b border-r border-slate-100 text-center font-black">Klt</th>
              <th className="px-6 py-5 border-b border-slate-100 text-center font-black">Abx</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 border-r border-slate-100 text-center text-[11px] font-bold text-slate-400">{idx + 1}</td>
                <td className="px-6 py-4 border-r border-slate-100 text-sm font-black text-slate-700 uppercase tracking-tighter leading-none">{row.nama_ruangan}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.uc}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.cvl}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.ivl}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10">{row.ett}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.vap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.vap}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.isk > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.isk}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.iad > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.iad}</td>
                <td className={`p-4 border-r border-slate-50 text-center font-bold ${row.hap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`}>{row.hap}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10">{row.tb}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10">{row.plb}</td>
                <td className="p-4 border-r border-slate-50 text-center font-bold text-slate-700">{row.kultur}</td>
                <td className="p-4 text-center font-bold text-slate-700">{row.abx}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-900 text-white font-black">
            <tr>
              <td colSpan={2} className="px-6 py-5 text-center text-[10px] font-black uppercase tracking-[0.2em]">Total Seluruh RS</td>
              <td className="p-4 text-center text-blue-400">{totalRS.uc}</td>
              <td className="p-4 text-center text-blue-400">{totalRS.cvl}</td>
              <td className="p-4 text-center text-blue-400">{totalRS.ivl}</td>
              <td className="p-4 text-center text-blue-400">{totalRS.ett}</td>
              <td className="p-4 text-center text-red-400">{totalRS.vap}</td>
              <td className="p-4 text-center text-red-400">{totalRS.isk}</td>
              <td className="p-4 text-center text-red-400">{totalRS.iad}</td>
              <td className="p-4 text-center text-red-400">{totalRS.hap}</td>
              <td className="p-4 text-center text-amber-400">{totalRS.tb}</td>
              <td className="p-4 text-center text-amber-400">{totalRS.plb}</td>
              <td className="p-4 text-center">{totalRS.kultur}</td>
              <td className="p-4 text-center">{totalRS.abx}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}