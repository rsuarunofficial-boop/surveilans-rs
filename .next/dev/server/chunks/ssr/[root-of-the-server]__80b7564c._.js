module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/app/dashboard/perawat/laporan/TombolCetak.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TombolCetak
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TombolCetak({ data, periode }) {
    const exportToExcel = ()=>{
        // Menyusun data untuk Excel
        const dataSheet = [
            {
                Indikator: "UC (Urinary Catheter)",
                Hasil: data.uc || 0,
                Satuan: "Hari"
            },
            {
                Indikator: "CVL (Central Venous Line)",
                Hasil: data.cvl || 0,
                Satuan: "Hari"
            },
            {
                Indikator: "IVL (Intravenous Line)",
                Hasil: data.ivl || 0,
                Satuan: "Hari"
            },
            {
                Indikator: "ETT (Endotracheal Tube)",
                Hasil: data.ett || 0,
                Satuan: "Hari"
            },
            {
                Indikator: "VAP",
                Hasil: data.vap || 0,
                Satuan: "Pasien"
            },
            {
                Indikator: "HAP",
                Hasil: data.hap || 0,
                Satuan: "Pasien"
            },
            {
                Indikator: "ISK",
                Hasil: data.isk || 0,
                Satuan: "Pasien"
            },
            {
                Indikator: "IAD",
                Hasil: data.iad || 0,
                Satuan: "Pasien"
            },
            {
                Indikator: "Kultur Positif",
                Hasil: data.kultur_positif || 0,
                Satuan: "Pasien"
            },
            {
                Indikator: "Penggunaan ABX",
                Hasil: data.antibiotik || 0,
                Satuan: "Kali"
            }
        ];
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(dataSheet);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Surveilans");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, `Laporan_Surveilans_RS_ARUN_${periode}.xlsx`);
    };
    const exportToPDF = ()=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        doc.setFontSize(16);
        doc.text("LAPORAN SURVEILANS UNIT - RS ARUN", 14, 15);
        doc.setFontSize(10);
        doc.text(`Periode: ${periode}`, 14, 22);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: 30,
            head: [
                [
                    'Kategori',
                    'Indikator',
                    'Capaian'
                ]
            ],
            body: [
                [
                    'Tindakan',
                    'UC (Urinary Catheter)',
                    `${data.uc || 0} Hari`
                ],
                [
                    'Tindakan',
                    'CVL (Central Venous Line)',
                    `${data.cvl || 0} Hari`
                ],
                [
                    'Tindakan',
                    'IVL (Intravenous Line)',
                    `${data.ivl || 0} Hari`
                ],
                [
                    'Tindakan',
                    'ETT (Endotracheal Tube)',
                    `${data.ett || 0} Hari`
                ],
                [
                    'HAIs',
                    'VAP',
                    `${data.vap || 0} Pasien`
                ],
                [
                    'HAIs',
                    'HAP',
                    `${data.hap || 0} Pasien`
                ],
                [
                    'HAIs',
                    'ISK',
                    `${data.isk || 0} Pasien`
                ],
                [
                    'HAIs',
                    'IAD',
                    `${data.iad || 0} Pasien`
                ],
                [
                    'Penunjang',
                    'Kultur Positif',
                    `${data.kultur_positif || 0} Pasien`
                ],
                [
                    'Penunjang',
                    'Antibiotik (ABX)',
                    `${data.antibiotik || 0} Kali`
                ]
            ],
            theme: 'grid',
            headStyles: {
                fillColor: [
                    37,
                    99,
                    235
                ]
            }
        });
        doc.save(`Laporan_Surveilans_RS_ARUN_${periode}.pdf`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row items-center gap-3 w-full md:w-auto order-1 md:order-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: exportToExcel,
                className: "w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl text-xs font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/perawat/laporan/TombolCetak.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    " Download Excel"
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/perawat/laporan/TombolCetak.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: exportToPDF,
                className: "w-full md:w-auto flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-2xl text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/perawat/laporan/TombolCetak.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    " Download PDF"
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/perawat/laporan/TombolCetak.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/perawat/laporan/TombolCetak.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__80b7564c._.js.map