module.exports = [
"[project]/services/data:0e81a2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifySurveilansBatch",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf":"verifySurveilansBatch"},"services/ppi.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("408ef60d97834565c6e63ba65a1b3f1e4a4ff2ffbf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "verifySurveilansBatch");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3Nzcic7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLyoqXHJcbiAqIEluaXNpYWxpc2FzaSBTdXBhYmFzZSBDbGllbnQgdW50dWsgU2VydmVyIFNpZGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN1cGFiYXNlKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIHJldHVybiBjcmVhdGVTZXJ2ZXJDbGllbnQoXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhLFxyXG4gICAge1xyXG4gICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgZ2V0QWxsKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvb2tpZVN0b3JlLmdldEFsbCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIE1lbmRhcGF0a2FuIFN0YXRpc3RpayBEYXNoYm9hcmQgUFBJIChHbG9iYWwgUlMpXHJcbiAqIERpZ3VuYWthbiB1bnR1ayBtZW5hbXBpbGthbiBhbmdrYSByaW5na2FzYW4gZGkgaGFsYW1hbiB1dGFtYSBQUElcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQUElEYXNoYm9hcmRTdGF0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBnZXRTdXBhYmFzZSgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpXHJcbiAgICAgIC5zZWxlY3QoJyosIG1hc3Rlcl9ydWFuZ2FuKG5hbWFfcnVhbmdhbiknKVxyXG4gICAgICAuZ3RlKCd0YW5nZ2FsJywgZmlyc3REYXkpXHJcbiAgICAgIC5sdGUoJ3RhbmdnYWwnLCBsYXN0RGF5KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsSGFpcyA9IGRhdGE/LmZpbHRlcihyID0+IFxyXG4gICAgICBOdW1iZXIoci52YXApID4gMCB8fCBOdW1iZXIoci5oYXApID4gMCB8fCBOdW1iZXIoci5pc2spID4gMCB8fCBOdW1iZXIoci5pYWQpID4gMFxyXG4gICAgKS5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBjb25zdCBiZWx1bVZlcmlmID0gZGF0YT8uZmlsdGVyKHIgPT4gci5pc192ZXJpZmllZCA9PT0gZmFsc2UpLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsSGFpcyxcclxuICAgICAgYmVsdW1WZXJpZixcclxuICAgICAgdG90YWxFbnRyaWVzOiBkYXRhPy5sZW5ndGggfHwgMCxcclxuICAgICAgZGF0YTogZGF0YSB8fCBbXVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBQSSBzdGF0czpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgdG90YWxIYWlzOiAwLCBiZWx1bVZlcmlmOiAwLCB0b3RhbEVudHJpZXM6IDAsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogMi4gTWVuZGFwYXRrYW4gRGF0YSBBbnRyZWFuIFZlcmlmaWthc2lcclxuICogTWVuYW1waWxrYW4gZGF0YSB5YW5nIGlzX3ZlcmlmaWVkID0gZmFsc2VcclxuICovXHJcbi8vIHNlcnZpY2VzL3BwaS50c1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBlbmRpbmdWZXJpZmljYXRpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgZ2V0U3VwYWJhc2UoKTtcclxuICAgIFxyXG4gICAgLy8gQ29iYSBhbWJpbCBkYXRhIFRBTlBBIGpvaW4ga2UgbWFzdGVyX3J1YW5nYW4gdGVybGViaWggZGFodWx1XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc3VydmVpbGFuc19oYXJpYW4nKVxyXG4gICAgICAuc2VsZWN0KCcqJykgLy8gVWJhaCBkYXJpICcqLCBtYXN0ZXJfcnVhbmdhbihuYW1hX3J1YW5nYW4pJ1xyXG4gICAgICAuZXEoJ2lzX3ZlcmlmaWVkJywgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiU1FMIEVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgZGl0ZW11a2FuOlwiLCBkYXRhPy5sZW5ndGgpOyAvLyBDZWsgZGkgdGVybWluYWwgVlMgQ29kZVxyXG4gICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLiBTZXJ2ZXIgQWN0aW9uOiBWZXJpZmlrYXNpIERhdGEgTWFzc2FsXHJcbiAqIE1lbXBlcmJhcnVpIHN0YXR1cyB2ZXJpZmlrYXNpIGJlcmRhc2Fya2FuIGFycmF5IElEIHlhbmcgZGlwaWxpaFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVN1cnZlaWxhbnNCYXRjaChpZHM6IHN0cmluZ1tdKSB7XHJcbiAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVGlkYWsgYWRhIGRhdGEgZGlwaWxpaFwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGdldFN1cGFiYXNlKCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3N1cnZlaWxhbnNfaGFyaWFuJylcclxuICAgICAgLnVwZGF0ZSh7IFxyXG4gICAgICAgIGlzX3ZlcmlmaWVkOiB0cnVlLFxyXG4gICAgICAgIHZlcmlmaWVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgfSlcclxuICAgICAgLmluKCdpZCcsIGlkcyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuXHJcbiAgICAvLyBQYWtzYSBOZXh0LmpzIHVudHVrIG1lbmdhbWJpbCBkYXRhIHRlcmJhcnUgdGFucGEgcmVmcmVzaCBtYW51YWxcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BwaScpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcHBpL3ZlcmlmaWthc2knKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BwaS9yZWthcCcpO1xyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBiYXRjaCB2ZXJpZmljYXRpb246XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogNC4gTWVuZGFwYXRrYW4gRGFmdGFyIFJ1YW5nYW5cclxuICogVW50dWsga2VidXR1aGFuIGRyb3Bkb3duIGZpbHRlciBkaSBoYWxhbWFuIHJla2FwXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUnVhbmdhbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBnZXRTdXBhYmFzZSgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ21hc3Rlcl9ydWFuZ2FuJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignbmFtYV9ydWFuZ2FuJyk7XHJcbiAgICAgIFxyXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcm9vbXM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiA1LiBNZW5kYXBhdGthbiBSZWthcCBMYXBvcmFuIEdsb2JhbFxyXG4gKiBNZW5kdWt1bmcgZmlsdGVyIHJ1YW5nYW4gZGFuIHJlbnRhbmcgdGFuZ2dhbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdsb2JhbFJlcG9ydHMoZmlsdGVycz86IHsgcnVhbmdhbl9pZD86IHN0cmluZzsgc3RhcnREYXRlPzogc3RyaW5nOyBlbmREYXRlPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBnZXRTdXBhYmFzZSgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpXHJcbiAgICAgIC5zZWxlY3QoJyosIG1hc3Rlcl9ydWFuZ2FuKG5hbWFfcnVhbmdhbiknKVxyXG4gICAgICAub3JkZXIoJ3RhbmdnYWwnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gVGVyYXBrYW4gZmlsdGVyIGhhbnlhIGppa2EgbmlsYWkgdGVyc2VkaWEgZGFuIGJ1a2FuIFwiYWxsXCIgYXRhdSBzdHJpbmcga29zb25nXHJcbiAgICBpZiAoZmlsdGVycz8ucnVhbmdhbl9pZCAmJiBmaWx0ZXJzLnJ1YW5nYW5faWQgIT09IFwiYWxsXCIgJiYgZmlsdGVycy5ydWFuZ2FuX2lkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3J1YW5nYW5faWQnLCBmaWx0ZXJzLnJ1YW5nYW5faWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZmlsdGVycz8uc3RhcnREYXRlICYmIGZpbHRlcnMuc3RhcnREYXRlICE9PSBcIlwiKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCd0YW5nZ2FsJywgZmlsdGVycy5zdGFydERhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoZmlsdGVycz8uZW5kRGF0ZSAmJiBmaWx0ZXJzLmVuZERhdGUgIT09IFwiXCIpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3RhbmdnYWwnLCBmaWx0ZXJzLmVuZERhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcbiAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGdsb2JhbCByZXBvcnRzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107IC8vIFNlbGFsdSBrZW1iYWxpa2FuIGFycmF5IGtvc29uZyBqaWthIGVycm9yIGFnYXIgdGlkYWsgY3Jhc2ggZGkgLmxlbmd0aFxyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBNkZzQixrTUFBQSJ9
}),
"[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabelVerifikasi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$0e81a2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:0e81a2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TabelVerifikasi({ data }) {
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSelectAll = (e)=>{
        if (e.target.checked) {
            setSelectedIds(data.map((item)=>item.id));
        } else {
            setSelectedIds([]);
        }
    };
    const handleSelectOne = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const handleVerify = async ()=>{
        if (selectedIds.length === 0) return;
        setIsProcessing(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$0e81a2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["verifySurveilansBatch"])(selectedIds);
            if (res.success) {
                setSelectedIds([]);
                router.refresh();
                alert(`Berhasil memverifikasi ${selectedIds.length} data.`);
            }
        } catch (error) {
            alert("Terjadi kesalahan saat verifikasi.");
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "Antrean Verifikasi"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 font-medium",
                                children: "Pilih data untuk disetujui secara massal"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVerify,
                        disabled: selectedIds.length === 0 || isProcessing,
                        className: "w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl text-xs font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:bg-slate-200 disabled:shadow-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            isProcessing ? "Memproses..." : `Verifikasi ${selectedIds.length} Data`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-slate-50/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 w-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            onChange: handleSelectAll,
                                            checked: selectedIds.length === data.length && data.length > 0,
                                            className: "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "Info Pasien"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "Unit / Ruangan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center",
                                        children: "Tindakan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center text-red-500",
                                        children: "HAIs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-50",
                            children: data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "p-12 text-center text-slate-400 font-medium italic",
                                    children: "Tidak ada data yang menunggu verifikasi."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this) : data.map((row)=>{
                                const hasHais = Number(row.vap) > 0 || Number(row.hap) > 0 || Number(row.isk) > 0 || Number(row.iad) > 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-slate-50/50 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedIds.includes(row.id),
                                                onChange: ()=>handleSelectOne(row.id),
                                                className: "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 93,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-700",
                                                        children: row.nama_pasien
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 flex items-center gap-1 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            new Date(row.tanggal).toLocaleDateString('id-ID')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 102,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-sm font-bold text-slate-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-blue-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 25
                                                    }, this),
                                                    row.master_ruangan?.nama_ruangan
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-500",
                                                children: [
                                                    Number(row.uc) + Number(row.cvl) + Number(row.ivl) + Number(row.ett),
                                                    " Hari"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 116,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: hasHais ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-red-50 text-red-600 rounded-lg text-[10px] font-black uppercase",
                                                children: "Ada Temuan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 122,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-[10px] font-bold",
                                                children: "Nihil"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                lineNumber: 124,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-1 text-amber-500 font-bold text-[10px] uppercase",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Pending"
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
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/ppi/verifikasi/TabelVerifikasi.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=_24ea8331._.js.map