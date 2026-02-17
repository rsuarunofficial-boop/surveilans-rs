module.exports = [
"[project]/services/surveilans.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0082d32780db67842f9a72eb0277a91b4c9b793b06":"getRiwayatSurveilans","0084f58216762db8087f27ec699f91b0ded6e722d0":"getStatsBulanIni","4088da21258b1a0a6c6ccceebb1c973932977c93d9":"deleteSurveilans","40c8c99513fc96d514be283f7074a2ff43459c7d4c":"saveSurveilansMassal"},"",""] */ __turbopack_context__.s([
    "deleteSurveilans",
    ()=>deleteSurveilans,
    "getRiwayatSurveilans",
    ()=>getRiwayatSurveilans,
    "getStatsBulanIni",
    ()=>getStatsBulanIni,
    "saveSurveilansMassal",
    ()=>saveSurveilansMassal
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
async function saveSurveilansMassal(dataRows) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {}
            }
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const { data: profile } = await supabase.from('profiles').select('ruangan_id').eq('id', user.id).single();
    const finalData = dataRows.map((row)=>({
            ...row,
            user_id: user.id,
            ruangan_id: profile?.ruangan_id
        }));
    const { error } = await supabase.from('surveilans_harian').insert(finalData);
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat');
    return {
        success: true
    };
}
async function getStatsBulanIni() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            }
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const now = new Date();
    const firstDay = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date(now.getFullYear(), now.getMonth(), 1));
    const today = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(now);
    const { data, error } = await supabase.from('surveilans_harian').select('*').eq('user_id', user.id).gte('tanggal', firstDay).lte('tanggal', today);
    if (error || !data) {
        console.error("Fetch stats error:", error);
        return {
            totalPasien: 0,
            totalTindakan: 0,
            potensiHais: 0,
            details: {}
        };
    }
    // Menghitung detail akumulasi per indikator untuk Bar Chart
    const details = {
        uc: data.reduce((acc, curr)=>acc + (Number(curr.uc) || 0), 0),
        cvl: data.reduce((acc, curr)=>acc + (Number(curr.cvl) || 0), 0),
        ivl: data.reduce((acc, curr)=>acc + (Number(curr.ivl) || 0), 0),
        ett: data.reduce((acc, curr)=>acc + (Number(curr.ett) || 0), 0),
        vap: data.reduce((acc, curr)=>acc + (Number(curr.vap) || 0), 0),
        ido: data.reduce((acc, curr)=>acc + (Number(curr.ido) || 0), 0),
        isk: data.reduce((acc, curr)=>acc + (Number(curr.isk) || 0), 0),
        iad: data.reduce((acc, curr)=>acc + (Number(curr.iad) || 0), 0),
        tb: data.reduce((acc, curr)=>acc + (Number(curr.tirah_baring) || 0), 0),
        plb: data.reduce((acc, curr)=>acc + (Number(curr.plebitis) || 0), 0)
    };
    return {
        totalPasien: data.length,
        totalTindakan: details.uc + details.cvl + details.ivl + details.ett,
        potensiHais: details.vap + details.ido + details.isk + details.iad,
        details
    };
}
async function getRiwayatSurveilans() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            }
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    const { data, error } = await supabase.from('surveilans_harian').select('*').eq('user_id', user.id).order('tanggal', {
        ascending: false
    }) // Data terbaru di atas
    .limit(50); // Ambil 50 data terakhir
    if (error) {
        console.error("Fetch history error:", error);
        return [];
    }
    return data;
}
async function deleteSurveilans(id) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {}
            }
        }
    });
    const { error } = await supabase.from('surveilans_harian').delete().eq('id', id);
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat/riwayat');
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveSurveilansMassal,
    getStatsBulanIni,
    getRiwayatSurveilans,
    deleteSurveilans
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveSurveilansMassal, "40c8c99513fc96d514be283f7074a2ff43459c7d4c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStatsBulanIni, "0084f58216762db8087f27ec699f91b0ded6e722d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRiwayatSurveilans, "0082d32780db67842f9a72eb0277a91b4c9b793b06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSurveilans, "4088da21258b1a0a6c6ccceebb1c973932977c93d9", null);
}),
"[project]/.next-internal/server/app/dashboard/riwayat/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/dashboard/riwayat/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0082d32780db67842f9a72eb0277a91b4c9b793b06",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRiwayatSurveilans"],
    "0084f58216762db8087f27ec699f91b0ded6e722d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStatsBulanIni"],
    "4088da21258b1a0a6c6ccceebb1c973932977c93d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSurveilans"],
    "40c8c99513fc96d514be283f7074a2ff43459c7d4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveSurveilansMassal"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$riwayat$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/riwayat/page/actions.js { ACTIONS_MODULE0 => "[project]/services/surveilans.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_8573a1d0._.js.map