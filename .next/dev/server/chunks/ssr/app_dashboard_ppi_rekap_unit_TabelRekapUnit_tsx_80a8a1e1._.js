module.exports = [
"[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabelRekapUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function TabelRekapUnit({ data, namaUnit, bulan }) {
    // Fungsi untuk memformat tampilan bulan (2026-02 -> Februari 2026)
    const formatBulan = (monthStr)=>{
        const date = new Date(monthStr + "-01");
        return new Intl.DateTimeFormat('id-ID', {
            month: 'long',
            year: 'numeric'
        }).format(date);
    };
    // FUNGSI EXPORT EXCEL (Client-side)
    const handleExport = ()=>{
        if (!data || data.length === 0) return alert("Tidak ada data untuk di-export.");
        // 1. Transformasi data agar label kolom di Excel rapi
        const excelData = data.map((row, idx)=>({
                "No": idx + 1,
                "Tanggal": new Intl.DateTimeFormat('id-ID', {
                    dateStyle: 'medium'
                }).format(new Date(row.tanggal)),
                "UC": row.uc || 0,
                "CVL": row.cvl || 0,
                "IVL": row.ivl || 0,
                "ETT": row.ett || 0,
                "VAP": row.vap || 0,
                "ISK": row.isk || 0,
                "IAD": row.iad || 0,
                "HAP": row.hap || 0,
                "Tirah Baring (TB)": row.tb || 0,
                "Plebitis (PLB)": row.plb || 0,
                "Kultur": row.kultur || 0,
                "Antibiotik": row.abx || 0
            }));
        // 2. Tambahkan baris total di paling bawah file Excel
        const totalsExcel = {
            "No": "",
            "Tanggal": "TOTAL AKUMULASI",
            "UC": totals.uc,
            "CVL": totals.cvl,
            "IVL": totals.ivl,
            "ETT": totals.ett,
            "VAP": totals.vap,
            "ISK": totals.isk,
            "IAD": totals.iad,
            "HAP": totals.hap,
            "Tirah Baring (TB)": totals.tb,
            "Plebitis (PLB)": totals.plb,
            "Kultur": totals.kultur,
            "Antibiotik": totals.abx
        };
        const finalSheetData = [
            ...excelData,
            {},
            totalsExcel
        ];
        // 3. Proses Pembuatan File
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(finalSheetData);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Rekap_Surveilans");
        // Atur lebar kolom agar tidak terpotong
        worksheet["!cols"] = [
            {
                wch: 5
            },
            {
                wch: 18
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 6
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 10
            },
            {
                wch: 10
            }
        ];
        // 4. Download file
        const safeUnitName = (namaUnit || "Unit").replace(/[^a-z0-9]/gi, '_');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, `Rekap_Surveilans_${safeUnitName}_${bulan}.xlsx`);
    };
    // Hitung Total Akumulasi di Footer
    const totals = data.reduce((acc, curr)=>({
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
        }), {
        uc: 0,
        cvl: 0,
        ivl: 0,
        ett: 0,
        vap: 0,
        isk: 0,
        iad: 0,
        hap: 0,
        tb: 0,
        plb: 0,
        kultur: 0,
        abx: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-black text-slate-800 uppercase tracking-tight",
                                        children: "Akumulasi Harian Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5",
                                        children: [
                                            namaUnit || "Unit Belum Dipilih",
                                            " • ",
                                            formatBulan(bulan)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-2 text-slate-300 mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 116,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-bold uppercase tracking-tighter italic font-sans",
                                        children: "Scroll kanan untuk data lengkap"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 117,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 115,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: "flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    " Export Excel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 119,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto overflow-y-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full border-separate border-spacing-0 font-sans",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-slate-50/50 text-[10px] text-slate-500 font-bold uppercase tracking-widest",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-5 border-b border-r border-slate-100 text-center sticky left-0 bg-slate-50 z-20 w-16",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-5 border-b border-r border-slate-100 text-left sticky left-16 bg-slate-50 z-20 min-w-[140px]",
                                        children: "Tanggal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center",
                                        children: "UC"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center",
                                        children: "CVL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center",
                                        children: "IVL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-blue-100 bg-blue-50/30 text-blue-600 text-center",
                                        children: "ETT"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center",
                                        children: "VAP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center",
                                        children: "ISK"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center",
                                        children: "IAD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-red-100 bg-red-50/30 text-red-600 text-center",
                                        children: "HAP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-amber-100 bg-amber-50/30 text-amber-600 text-center",
                                        children: "TB"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 border-b border-r border-amber-100 bg-amber-50/30 text-amber-600 text-center",
                                        children: "PLB"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-5 border-b border-r border-slate-100 text-center",
                                        children: "Kultur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-5 border-b border-slate-100 text-center",
                                        children: "Abx"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-50",
                            children: data.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "group hover:bg-slate-50/80 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 border-r border-slate-100 text-center text-[11px] font-bold text-slate-400 sticky left-0 bg-white group-hover:bg-slate-50 transition-colors",
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 border-r border-slate-100 text-xs font-black text-slate-700 sticky left-16 bg-white group-hover:bg-slate-50 transition-colors whitespace-nowrap",
                                            children: new Intl.DateTimeFormat('id-ID', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            }).format(new Date(row.tanggal))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10",
                                            children: row.uc || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10",
                                            children: row.cvl || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10",
                                            children: row.ivl || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-blue-600 bg-blue-50/10",
                                            children: row.ett || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `p-4 border-r border-slate-50 text-center font-bold ${row.vap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`,
                                            children: row.vap || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `p-4 border-r border-slate-50 text-center font-bold ${row.isk > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`,
                                            children: row.isk || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `p-4 border-r border-slate-50 text-center font-bold ${row.iad > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`,
                                            children: row.iad || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `p-4 border-r border-slate-50 text-center font-bold ${row.hap > 0 ? 'bg-red-50 text-red-600' : 'text-slate-300'}`,
                                            children: row.hap || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10",
                                            children: row.tb || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-amber-600 bg-amber-50/10",
                                            children: row.plb || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-r border-slate-50 text-center font-bold text-slate-700",
                                            children: row.kultur || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 border-none text-center font-bold text-slate-700",
                                            children: row.abx || 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                            className: "bg-slate-900 text-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "divide-x divide-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 2,
                                        className: "px-6 py-5 text-center text-[10px] font-black uppercase tracking-[0.2em] sticky left-0 bg-slate-900",
                                        children: "Total Akumulasi Bulanan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-blue-400",
                                        children: totals.uc
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-blue-400",
                                        children: totals.cvl
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-blue-400",
                                        children: totals.ivl
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-blue-400",
                                        children: totals.ett
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-red-400",
                                        children: totals.vap
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-red-400",
                                        children: totals.isk
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-red-400",
                                        children: totals.iad
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-red-400",
                                        children: totals.hap
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-amber-400",
                                        children: totals.tb
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black text-amber-400",
                                        children: totals.plb
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black",
                                        children: totals.kultur
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-center font-black",
                                        children: totals.abx
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                                lineNumber: 189,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/ppi/rekap/unit/TabelRekapUnit.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_dashboard_ppi_rekap_unit_TabelRekapUnit_tsx_80a8a1e1._.js.map