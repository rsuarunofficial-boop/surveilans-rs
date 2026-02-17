(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/services/data:e75910 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifySurveilansBatch",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf":"verifySurveilansBatch"},"services/ppi.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "verifySurveilansBatch");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3Nzcic7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLyoqXHJcbiAqIEluaXNpYWxpc2FzaSBTdXBhYmFzZSBDbGllbnQgdW50dWsgU2VydmVyIFNpZGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN1cGFiYXNlKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIHJldHVybiBjcmVhdGVTZXJ2ZXJDbGllbnQoXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhLFxyXG4gICAge1xyXG4gICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgZ2V0QWxsKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvb2tpZVN0b3JlLmdldEFsbCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIE1lbmRhcGF0a2FuIFN0YXRpc3RpayBEYXNoYm9hcmQgUFBJIChHbG9iYWwgUlMpXHJcbiAqIERpZ3VuYWthbiB1bnR1ayBtZW5hbXBpbGthbiBhbmdrYSByaW5na2FzYW4gZGkgaGFsYW1hbiB1dGFtYSBQUElcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQUElEYXNoYm9hcmRTdGF0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBnZXRTdXBhYmFzZSgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpXHJcbiAgICAgIC5zZWxlY3QoJyosIG1hc3Rlcl9ydWFuZ2FuKG5hbWFfcnVhbmdhbiknKVxyXG4gICAgICAuZ3RlKCd0YW5nZ2FsJywgZmlyc3REYXkpXHJcbiAgICAgIC5sdGUoJ3RhbmdnYWwnLCBsYXN0RGF5KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsSGFpcyA9IGRhdGE/LmZpbHRlcihyID0+IFxyXG4gICAgICBOdW1iZXIoci52YXApID4gMCB8fCBOdW1iZXIoci5oYXApID4gMCB8fCBOdW1iZXIoci5pc2spID4gMCB8fCBOdW1iZXIoci5pYWQpID4gMFxyXG4gICAgKS5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBjb25zdCBiZWx1bVZlcmlmID0gZGF0YT8uZmlsdGVyKHIgPT4gci5pc192ZXJpZmllZCA9PT0gZmFsc2UpLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsSGFpcyxcclxuICAgICAgYmVsdW1WZXJpZixcclxuICAgICAgdG90YWxFbnRyaWVzOiBkYXRhPy5sZW5ndGggfHwgMCxcclxuICAgICAgZGF0YTogZGF0YSB8fCBbXVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBQSSBzdGF0czpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgdG90YWxIYWlzOiAwLCBiZWx1bVZlcmlmOiAwLCB0b3RhbEVudHJpZXM6IDAsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogMi4gTWVuZGFwYXRrYW4gRGF0YSBBbnRyZWFuIFZlcmlmaWthc2lcclxuICogTWVuYW1waWxrYW4gZGF0YSB5YW5nIGlzX3ZlcmlmaWVkID0gZmFsc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nVmVyaWZpY2F0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGdldFN1cGFiYXNlKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpXHJcbiAgICAgIC5zZWxlY3QoJyosIG1hc3Rlcl9ydWFuZ2FuKG5hbWFfcnVhbmdhbiknKVxyXG4gICAgICAuZXEoJ2lzX3ZlcmlmaWVkJywgZmFsc2UpXHJcbiAgICAgIC5vcmRlcigndGFuZ2dhbCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZW5kaW5nIHZlcmlmaWNhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIDMuIFNlcnZlciBBY3Rpb246IFZlcmlmaWthc2kgRGF0YSBNYXNzYWxcclxuICogTWVtcGVyYmFydWkgc3RhdHVzIHZlcmlmaWthc2kgYmVyZGFzYXJrYW4gYXJyYXkgSUQgeWFuZyBkaXBpbGloXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5U3VydmVpbGFuc0JhdGNoKGlkczogc3RyaW5nW10pIHtcclxuICBpZiAoIWlkcyB8fCBpZHMubGVuZ3RoID09PSAwKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJUaWRhayBhZGEgZGF0YSBkaXBpbGloXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgZ2V0U3VwYWJhc2UoKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc3VydmVpbGFuc19oYXJpYW4nKVxyXG4gICAgICAudXBkYXRlKHsgXHJcbiAgICAgICAgaXNfdmVyaWZpZWQ6IHRydWUsXHJcbiAgICAgICAgdmVyaWZpZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgaWRzKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xyXG5cclxuICAgIC8vIFBha3NhIE5leHQuanMgdW50dWsgbWVuZ2FtYmlsIGRhdGEgdGVyYmFydSB0YW5wYSByZWZyZXNoIG1hbnVhbFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcHBpJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wcGkvdmVyaWZpa2FzaScpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcHBpL3Jla2FwJyk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGJhdGNoIHZlcmlmaWNhdGlvbjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiA0LiBNZW5kYXBhdGthbiBEYWZ0YXIgUnVhbmdhblxyXG4gKiBVbnR1ayBrZWJ1dHVoYW4gZHJvcGRvd24gZmlsdGVyIGRpIGhhbGFtYW4gcmVrYXBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWZ0YXJSdWFuZ2FuKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGdldFN1cGFiYXNlKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbWFzdGVyX3J1YW5nYW4nKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCduYW1hX3J1YW5nYW4nKTtcclxuICAgICAgXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByb29tczpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIDUuIE1lbmRhcGF0a2FuIFJla2FwIExhcG9yYW4gR2xvYmFsXHJcbiAqIE1lbmR1a3VuZyBmaWx0ZXIgcnVhbmdhbiBkYW4gcmVudGFuZyB0YW5nZ2FsXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2xvYmFsUmVwb3J0cyhmaWx0ZXJzPzogeyBydWFuZ2FuX2lkPzogc3RyaW5nOyBzdGFydERhdGU/OiBzdHJpbmc7IGVuZERhdGU/OiBzdHJpbmcgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGdldFN1cGFiYXNlKCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3N1cnZlaWxhbnNfaGFyaWFuJylcclxuICAgICAgLnNlbGVjdCgnKiwgbWFzdGVyX3J1YW5nYW4obmFtYV9ydWFuZ2FuKScpXHJcbiAgICAgIC5vcmRlcigndGFuZ2dhbCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBUZXJhcGthbiBmaWx0ZXIgaGFueWEgamlrYSBuaWxhaSB0ZXJzZWRpYSBkYW4gYnVrYW4gXCJhbGxcIiBhdGF1IHN0cmluZyBrb3NvbmdcclxuICAgIGlmIChmaWx0ZXJzPy5ydWFuZ2FuX2lkICYmIGZpbHRlcnMucnVhbmdhbl9pZCAhPT0gXCJhbGxcIiAmJiBmaWx0ZXJzLnJ1YW5nYW5faWQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncnVhbmdhbl9pZCcsIGZpbHRlcnMucnVhbmdhbl9pZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmaWx0ZXJzPy5zdGFydERhdGUgJiYgZmlsdGVycy5zdGFydERhdGUgIT09IFwiXCIpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ3RhbmdnYWwnLCBmaWx0ZXJzLnN0YXJ0RGF0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmaWx0ZXJzPy5lbmREYXRlICYmIGZpbHRlcnMuZW5kRGF0ZSAhPT0gXCJcIikge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgndGFuZ2dhbCcsIGZpbHRlcnMuZW5kRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZ2xvYmFsIHJlcG9ydHM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTsgLy8gU2VsYWx1IGtlbWJhbGlrYW4gYXJyYXkga29zb25nIGppa2EgZXJyb3IgYWdhciB0aWRhayBjcmFzaCBkaSAubGVuZ3RoXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkF1RnNCLGtNQUFBIn0=
}),
"[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabelVerifikasi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$e75910__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:e75910 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TabelVerifikasi({ data = [] }) {
    _s();
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. Fungsi Pilih Semua
    const handleSelectAll = (e)=>{
        if (e.target.checked) {
            const allIds = data.map((item)=>item.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };
    // 2. Fungsi Pilih Per Baris
    const handleSelectOne = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    // 3. Fungsi Eksekusi Verifikasi (Server Action)
    const handleVerify = async ()=>{
        if (selectedIds.length === 0) return;
        const confirmVerif = confirm(`Verifikasi ${selectedIds.length} data sekarang?`);
        if (!confirmVerif) return;
        setIsProcessing(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$e75910__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["verifySurveilansBatch"])(selectedIds);
            if (res.success) {
                setSelectedIds([]); // Reset pilihan
                router.refresh(); // Update data di layar secara instan
                alert("Data berhasil diverifikasi!");
            } else {
                alert("Gagal memverifikasi data.");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan sistem.");
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "Antrean Verifikasi"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 font-medium font-sans",
                                children: "Pilih laporan perawat untuk divalidasi"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVerify,
                        disabled: selectedIds.length === 0 || isProcessing,
                        className: "w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl text-xs font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:bg-slate-200 disabled:shadow-none active:scale-95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            isProcessing ? "Menyimpan..." : `Verifikasi ${selectedIds.length} Laporan`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-slate-50/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 w-10 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            onChange: handleSelectAll,
                                            checked: data.length > 0 && selectedIds.length === data.length,
                                            className: "w-4 h-4 rounded border-slate-300 text-blue-600 accent-blue-600 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans",
                                        children: "Info Pasien"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans",
                                        children: "Unit / Ruangan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center font-sans",
                                        children: "Tindakan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center font-sans",
                                        children: "HAIs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center font-sans",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-50 font-sans",
                            children: data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "p-12 text-center text-slate-400 font-medium italic",
                                    children: "Tidak ada data yang menunggu verifikasi."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this) : data.map((row)=>{
                                const hasHais = Number(row.vap) > 0 || Number(row.hap) > 0 || Number(row.isk) > 0 || Number(row.iad) > 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-slate-50/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedIds.includes(row.id),
                                                onChange: ()=>handleSelectOne(row.id),
                                                className: "w-4 h-4 rounded border-slate-300 text-blue-600 accent-blue-600 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-700 uppercase tracking-tight",
                                                        children: row.nama_pasien || row.no_rm
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 flex items-center gap-1 mt-1 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            new Date(row.tanggal).toLocaleDateString('id-ID')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 115,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-600 uppercase tracking-wide",
                                                children: row.master_ruangan?.nama_ruangan || "Tanpa Unit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-extrabold text-slate-500",
                                                children: [
                                                    Number(row.uc || 0) + Number(row.cvl || 0) + Number(row.ivl || 0) + Number(row.ett || 0),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "opacity-50",
                                                        children: "Hari"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 128,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: hasHais ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-red-50 text-red-600 rounded-lg text-[9px] font-black uppercase tracking-tighter",
                                                children: "Ada Temuan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 134,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-[9px] font-bold uppercase",
                                                children: "Nihil"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 136,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-1 text-slate-400 font-black text-[10px] uppercase italic",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        size: 14,
                                                        className: "text-amber-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Pending"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 140,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(TabelVerifikasi, "uBarHN5rexnoJKl+7MQp1noTm/A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TabelVerifikasi;
var _c;
__turbopack_context__.k.register(_c, "TabelVerifikasi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_ca554a92._.js.map