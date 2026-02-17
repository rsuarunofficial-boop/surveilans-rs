module.exports = [
"[project]/services/surveilans.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0082d32780db67842f9a72eb0277a91b4c9b793b06":"getRiwayatSurveilans","0084f58216762db8087f27ec699f91b0ded6e722d0":"getStatsBulanIni","404056775b03666f4e38a79d3f951509bfce91a3c2":"getSurveilansById","4088da21258b1a0a6c6ccceebb1c973932977c93d9":"deleteSurveilans","40c8c99513fc96d514be283f7074a2ff43459c7d4c":"saveSurveilansMassal","60820376b48fe913469271f8d2597f6eddb0154788":"updateSurveilans"},"",""] */ __turbopack_context__.s([
    "deleteSurveilans",
    ()=>deleteSurveilans,
    "getRiwayatSurveilans",
    ()=>getRiwayatSurveilans,
    "getStatsBulanIni",
    ()=>getStatsBulanIni,
    "getSurveilansById",
    ()=>getSurveilansById,
    "saveSurveilansMassal",
    ()=>saveSurveilansMassal,
    "updateSurveilans",
    ()=>updateSurveilans
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
    // PROSES TRANSFORMASI DATA
    const finalData = dataRows.map((row)=>({
            ...row,
            // Mengubah nama_pasien menjadi huruf besar saat penyimpanan
            nama_pasien: row.nama_pasien ? row.nama_pasien.toUpperCase() : row.nama_pasien,
            user_id: user.id,
            ruangan_id: profile?.ruangan_id
        }));
    const { error } = await supabase.from('surveilans_harian').insert(finalData);
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat/riwayat');
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
    // LOGIKA PASIEN UNIK UNTUK HAIs
    const uniqueVap = new Set(data.filter((r)=>Number(r.vap) === 1).map((r)=>r.no_rm)).size;
    const uniqueHap = new Set(data.filter((r)=>Number(r.hap) === 1).map((r)=>r.no_rm)).size;
    const uniqueIsk = new Set(data.filter((r)=>Number(r.isk) === 1).map((r)=>r.no_rm)).size;
    const uniqueIad = new Set(data.filter((r)=>Number(r.iad) === 1).map((r)=>r.no_rm)).size;
    // LOGIKA KULTUR & ANTIBIOTIK (Sesuai nama kolom di image_ef9e68.png)
    // Menghitung jumlah pasien unik yang melakukan kultur (bukan 'Lainnya / Tidak Ada')
    const uniqueKultur = new Set(data.filter((r)=>r.hasil_kultur && r.hasil_kultur !== '' && r.hasil_kultur !== 'Lainnya / Tidak Ada').map((r)=>r.no_rm)).size;
    // Menghitung total penggunaan antibiotik selama sebulan (akumulasi baris/input)
    const totalAntibiotik = data.filter((r)=>r.antibiotik && r.antibiotik !== '' && r.antibiotik !== 'Lainnya / Tidak Ada').length;
    const totalPasienUnik = new Set(data.map((r)=>r.no_rm)).size;
    const details = {
        // Tindakan (Device Days) - Akumulatif
        uc: data.reduce((acc, curr)=>acc + (Number(curr.uc) || 0), 0),
        cvl: data.reduce((acc, curr)=>acc + (Number(curr.cvl) || 0), 0),
        ivl: data.reduce((acc, curr)=>acc + (Number(curr.ivl) || 0), 0),
        ett: data.reduce((acc, curr)=>acc + (Number(curr.ett) || 0), 0),
        // HAIs - Pasien Unik
        vap: uniqueVap,
        hap: uniqueHap,
        isk: uniqueIsk,
        iad: uniqueIad,
        // Lainnya
        tb: data.reduce((acc, curr)=>acc + (Number(curr.tirah_baring) || 0), 0),
        plb: data.reduce((acc, curr)=>acc + (Number(curr.plebitis) || 0), 0),
        // Kultur & ABX (Menggunakan data hasil_kultur dan antibiotik)
        kultur_positif: uniqueKultur,
        antibiotik: totalAntibiotik
    };
    return {
        totalPasien: totalPasienUnik,
        totalTindakan: details.uc + details.cvl + details.ivl + details.ett,
        potensiHais: uniqueVap + uniqueHap + uniqueIsk + uniqueIad,
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
    }).limit(50);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat/laporan');
    return {
        success: true
    };
}
async function getSurveilansById(id) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://txhpkvybwwkqjhqdrmno.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_g1KlkWg1pC4MTYO8frRuRg_kGNy5jaF"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            }
        }
    });
    const { data, error } = await supabase.from('surveilans_harian').select('*').eq('id', id).single();
    if (error) return null;
    return data;
}
async function updateSurveilans(id, formData) {
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
    const updatedData = {
        ...formData,
        nama_pasien: formData.nama_pasien ? formData.nama_pasien.toUpperCase() : formData.nama_pasien
    };
    const { error } = await supabase.from('surveilans_harian').update(updatedData).eq('id', id);
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat/riwayat');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/perawat/laporan');
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveSurveilansMassal,
    getStatsBulanIni,
    getRiwayatSurveilans,
    deleteSurveilans,
    getSurveilansById,
    updateSurveilans
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveSurveilansMassal, "40c8c99513fc96d514be283f7074a2ff43459c7d4c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStatsBulanIni, "0084f58216762db8087f27ec699f91b0ded6e722d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRiwayatSurveilans, "0082d32780db67842f9a72eb0277a91b4c9b793b06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSurveilans, "4088da21258b1a0a6c6ccceebb1c973932977c93d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSurveilansById, "404056775b03666f4e38a79d3f951509bfce91a3c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSurveilans, "60820376b48fe913469271f8d2597f6eddb0154788", null);
}),
"[project]/.next-internal/server/app/dashboard/perawat/form/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/dashboard/perawat/form/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40c8c99513fc96d514be283f7074a2ff43459c7d4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveSurveilansMassal"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$perawat$2f$form$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/perawat/form/page/actions.js { ACTIONS_MODULE0 => "[project]/services/surveilans.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_3aa0dc69._.js.map