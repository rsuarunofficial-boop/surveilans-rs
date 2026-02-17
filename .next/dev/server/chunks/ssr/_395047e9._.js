module.exports = [
"[project]/services/surveilans.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0084f58216762db8087f27ec699f91b0ded6e722d0":"getStatsBulanIni"},"",""] */ __turbopack_context__.s([
    "getStatsBulanIni",
    ()=>getStatsBulanIni
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
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
    /**
   * LOGIKA PASIEN UNIK:
   * Menggunakan Set untuk mengumpulkan No. RM unik yang terdeteksi HAIs
   */ const pasienVap = new Set(data.filter((r)=>Number(r.vap) === 1).map((r)=>r.no_rm));
    const pasienIdo = new Set(data.filter((r)=>Number(r.ido) === 1).map((r)=>r.no_rm));
    const pasienIsk = new Set(data.filter((r)=>Number(r.isk) === 1).map((r)=>r.no_rm));
    const pasienIad = new Set(data.filter((r)=>Number(r.iad) === 1).map((r)=>r.no_rm));
    // Total Pasien Unik (tanpa duplikasi No. RM dalam satu bulan)
    const totalPasienUnik = new Set(data.map((r)=>r.no_rm)).size;
    // Menghitung detail akumulasi
    const details = {
        // Untuk tindakan medis, kita tetap hitung frekuensi pemakaian alat (akumulasi harian)
        uc: data.reduce((acc, curr)=>acc + (Number(curr.uc) || 0), 0),
        cvl: data.reduce((acc, curr)=>acc + (Number(curr.cvl) || 0), 0),
        ivl: data.reduce((acc, curr)=>acc + (Number(curr.ivl) || 0), 0),
        ett: data.reduce((acc, curr)=>acc + (Number(curr.ett) || 0), 0),
        // Untuk HAIs, kita gunakan ukuran dari Set (Jumlah Pasien Unik)
        vap: pasienVap.size,
        ido: pasienIdo.size,
        isk: pasienIsk.size,
        iad: pasienIad.size,
        tb: data.reduce((acc, curr)=>acc + (Number(curr.tirah_baring) || 0), 0),
        plb: data.reduce((acc, curr)=>acc + (Number(curr.plebitis) || 0), 0)
    };
    return {
        totalPasien: totalPasienUnik,
        totalTindakan: details.uc + details.cvl + details.ivl + details.ett,
        potensiHais: details.vap + details.ido + details.isk + details.iad,
        details
    };
} // ... (getRiwayatSurveilans, deleteSurveilans, dll tetap sama)
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStatsBulanIni
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStatsBulanIni, "0084f58216762db8087f27ec699f91b0ded6e722d0", null);
}),
"[project]/.next-internal/server/app/dashboard/perawat/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/dashboard/perawat/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/surveilans.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0084f58216762db8087f27ec699f91b0ded6e722d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStatsBulanIni"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$perawat$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/perawat/page/actions.js { ACTIONS_MODULE0 => "[project]/services/surveilans.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$surveilans$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/surveilans.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_395047e9._.js.map