module.exports = [
"[project]/services/ppi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00605513bd2364a94837aa6056ace5afb153dba9d8":"getPPIDashboardStats","00df386678a8b878f770dc7ae2bcfe087f8f98f7ce":"getDaftarRuangan","4001109f083f259093916d0bec7b28980cc2e2f6f3":"getRekapGlobalByRoom","408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf":"verifySurveilansBatch","40b2a7895c5c1e365d2132a26fe1327f5478b3d911":"getPendingVerification","40f256160afbb895b6586c076743c8a7746205c936":"getGlobalReports","602bd2f85b2411993c37844842ba18d76834c827c8":"getRekapUnitByMonth"},"",""] */ __turbopack_context__.s([
    "getDaftarRuangan",
    ()=>getDaftarRuangan,
    "getGlobalReports",
    ()=>getGlobalReports,
    "getPPIDashboardStats",
    ()=>getPPIDashboardStats,
    "getPendingVerification",
    ()=>getPendingVerification,
    "getRekapGlobalByRoom",
    ()=>getRekapGlobalByRoom,
    "getRekapUnitByMonth",
    ()=>getRekapUnitByMonth,
    "verifySurveilansBatch",
    ()=>verifySurveilansBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
/**
 * Inisialisasi Supabase Client untuk Server Side
 */ async function getSupabase() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            }
        }
    });
}
async function getPPIDashboardStats() {
    try {
        const supabase = await getSupabase();
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        const { data, error } = await supabase.from('surveilans_harian').select('*, master_ruangan(nama_ruangan)').gte('tanggal', firstDay).lte('tanggal', lastDay);
        if (error) throw error;
        const totalHais = data.reduce((acc, curr)=>{
            return acc + ((Number(curr.isk) || 0) + (Number(curr.iad) || 0) + (Number(curr.vap) || 0) + (Number(curr.hap) || 0));
        }, 0);
        const belumVerif = data?.filter((r)=>r.is_verified === false).length || 0;
        return {
            totalHais,
            belumVerif,
            totalEntries: data?.length || 0,
            data: data || []
        };
    } catch (error) {
        console.error("Error fetching PPI stats:", error);
        return {
            totalHais: 0,
            belumVerif: 0,
            totalEntries: 0,
            data: []
        };
    }
}
async function getPendingVerification(filters) {
    try {
        const supabase = await getSupabase();
        let query = supabase.from('surveilans_harian').select('*, master_ruangan(nama_ruangan)').eq('is_verified', false).order('tanggal', {
            ascending: false
        });
        if (filters?.ruangan_id && filters.ruangan_id !== "all") {
            query = query.eq('ruangan_id', filters.ruangan_id);
        }
        if (filters?.startDate) {
            query = query.gte('tanggal', filters.startDate);
        }
        if (filters?.endDate) {
            query = query.lte('tanggal', filters.endDate);
        }
        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching pending verification:", error);
        return [];
    }
}
async function verifySurveilansBatch(ids) {
    if (!ids || ids.length === 0) return {
        success: false,
        message: "Tidak ada data dipilih"
    };
    try {
        const supabase = await getSupabase();
        const { data, error } = await supabase.from('surveilans_harian').update({
            is_verified: true,
            verified_at: new Date().toISOString()
        }).in('id', ids).select();
        if (error) throw error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/ppi');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/ppi/verifikasi');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/ppi/rekap');
        return {
            success: true,
            count: data?.length
        };
    } catch (error) {
        console.error("Error during batch verification:", error.message);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getDaftarRuangan() {
    try {
        const supabase = await getSupabase();
        const { data, error } = await supabase.from('master_ruangan').select('*').order('nama_ruangan');
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return [];
    }
}
async function getGlobalReports(filters) {
    try {
        const supabase = await getSupabase();
        let query = supabase.from('surveilans_harian').select('*, master_ruangan(nama_ruangan)').eq('is_verified', true).order('tanggal', {
            ascending: false
        });
        if (filters?.ruangan_id && filters.ruangan_id !== "all" && filters.ruangan_id !== "undefined") {
            query = query.eq('ruangan_id', filters.ruangan_id);
        }
        if (filters?.startDate) {
            query = query.gte('tanggal', filters.startDate);
        }
        if (filters?.endDate) {
            query = query.lte('tanggal', filters.endDate);
        }
        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching global reports:", error);
        return [];
    }
}
async function getRekapUnitByMonth(ruanganId, monthYear) {
    if (!ruanganId || !monthYear) return [];
    try {
        const supabase = await getSupabase();
        // Tentukan tanggal awal dan akhir bulan dari input 'YYYY-MM'
        const [year, month] = monthYear.split('-').map(Number);
        const startDate = `${monthYear}-01`;
        const endDate = new Date(year, month, 0).toISOString().split('T')[0];
        const { data, error } = await supabase.from('surveilans_harian').select('*').eq('ruangan_id', ruanganId).eq('is_verified', true).gte('tanggal', startDate).lte('tanggal', endDate).order('tanggal', {
            ascending: true
        });
        if (error) throw error;
        // Logika grouping data berdasarkan tanggal
        const grouped = data.reduce((acc, curr)=>{
            const tgl = curr.tanggal;
            if (!acc[tgl]) {
                acc[tgl] = {
                    tanggal: tgl,
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
                };
            }
            acc[tgl].uc += Number(curr.uc) || 0;
            acc[tgl].cvl += Number(curr.cvl) || 0;
            acc[tgl].ivl += Number(curr.ivl) || 0;
            acc[tgl].ett += Number(curr.ett) || 0;
            acc[tgl].vap += Number(curr.vap) || 0;
            acc[tgl].isk += Number(curr.isk) || 0;
            acc[tgl].iad += Number(curr.iad) || 0;
            acc[tgl].hap += Number(curr.hap) || 0;
            acc[tgl].tb += Number(curr.tirah_baring) || 0;
            acc[tgl].plb += Number(curr.plebitis) || 0;
            // Hitung Kultur & Abx (Jika ada isinya, dianggap 1 tindakan harian)
            if (curr.hasil_kultur && curr.hasil_kultur !== "" && curr.hasil_kultur !== "Lainnya / Tidak Ada") acc[tgl].kultur += 1;
            if (curr.antibiotik && curr.antibiotik !== "" && curr.antibiotik !== "Lainnya / Tidak Ada") acc[tgl].abx += 1;
            return acc;
        }, {});
        return Object.values(grouped);
    } catch (error) {
        console.error("Error fetching unit month rekap:", error);
        return [];
    }
}
async function getRekapGlobalByRoom(filters) {
    try {
        const supabase = await getSupabase();
        let query = supabase.from('surveilans_harian').select('*, master_ruangan(nama_ruangan)').eq('is_verified', true);
        if (filters?.startDate) query = query.gte('tanggal', filters.startDate);
        if (filters?.endDate) query = query.lte('tanggal', filters.endDate);
        const { data, error } = await query;
        if (error) throw error;
        // Logika Pengelompokan berdasarkan Nama Ruangan
        const grouped = data.reduce((acc, curr)=>{
            const roomName = curr.master_ruangan?.nama_ruangan || "Tanpa Nama";
            if (!acc[roomName]) {
                acc[roomName] = {
                    nama_ruangan: roomName,
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
                };
            }
            acc[roomName].uc += Number(curr.uc) || 0;
            acc[roomName].cvl += Number(curr.cvl) || 0;
            acc[roomName].ivl += Number(curr.ivl) || 0;
            acc[roomName].ett += Number(curr.ett) || 0;
            acc[roomName].vap += Number(curr.vap) || 0;
            acc[roomName].isk += Number(curr.isk) || 0;
            acc[roomName].iad += Number(curr.iad) || 0;
            acc[roomName].hap += Number(curr.hap) || 0;
            acc[roomName].tb += Number(curr.tirah_baring) || 0;
            acc[roomName].plb += Number(curr.plebitis) || 0;
            if (curr.hasil_kultur && curr.hasil_kultur !== "" && curr.hasil_kultur !== "Lainnya / Tidak Ada") acc[roomName].kultur += 1;
            if (curr.antibiotik && curr.antibiotik !== "" && curr.antibiotik !== "Lainnya / Tidak Ada") acc[roomName].abx += 1;
            return acc;
        }, {});
        return Object.values(grouped);
    } catch (error) {
        console.error("Error global rekap by room:", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getPPIDashboardStats,
    getPendingVerification,
    verifySurveilansBatch,
    getDaftarRuangan,
    getGlobalReports,
    getRekapUnitByMonth,
    getRekapGlobalByRoom
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPPIDashboardStats, "00605513bd2364a94837aa6056ace5afb153dba9d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPendingVerification, "40b2a7895c5c1e365d2132a26fe1327f5478b3d911", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifySurveilansBatch, "408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDaftarRuangan, "00df386678a8b878f770dc7ae2bcfe087f8f98f7ce", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGlobalReports, "40f256160afbb895b6586c076743c8a7746205c936", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRekapUnitByMonth, "602bd2f85b2411993c37844842ba18d76834c827c8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRekapGlobalByRoom, "4001109f083f259093916d0bec7b28980cc2e2f6f3", null);
}),
"[project]/.next-internal/server/app/dashboard/ppi/rekap/global/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/ppi.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/ppi.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/ppi/rekap/global/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/ppi.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00605513bd2364a94837aa6056ace5afb153dba9d8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPPIDashboardStats"],
    "00df386678a8b878f770dc7ae2bcfe087f8f98f7ce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDaftarRuangan"],
    "4001109f083f259093916d0bec7b28980cc2e2f6f3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRekapGlobalByRoom"],
    "408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifySurveilansBatch"],
    "40b2a7895c5c1e365d2132a26fe1327f5478b3d911",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPendingVerification"],
    "40f256160afbb895b6586c076743c8a7746205c936",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalReports"],
    "602bd2f85b2411993c37844842ba18d76834c827c8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRekapUnitByMonth"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$ppi$2f$rekap$2f$global$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/ppi/rekap/global/page/actions.js { ACTIONS_MODULE0 => "[project]/services/ppi.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ppi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/ppi.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_e31eddf9._.js.map