(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/services/data:62d342 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSurveilans",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4088da21258b1a0a6c6ccceebb1c973932977c93d9":"deleteSurveilans"},"services/surveilans.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4088da21258b1a0a6c6ccceebb1c973932977c93d9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteSurveilans");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VydmVpbGFucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlckNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zc3InO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8qKlxyXG4gKiBGdW5nc2kgdW50dWsgbWVueWltcGFuIGRhdGEgc3VydmVpbGFucyBzZWNhcmEgbWFzc2FsXHJcbiAqIFVwZGF0ZTogU2VrYXJhbmcgb3RvbWF0aXMgbWVuZ3ViYWggbmFtYV9wYXNpZW4gbWVuamFkaSBIVVJVRiBCRVNBUlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTdXJ2ZWlsYW5zTWFzc2FsKGRhdGFSb3dzOiBhbnlbXSkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyQ2xpZW50KFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZISxcclxuICAgIHtcclxuICAgICAgY29va2llczoge1xyXG4gICAgICAgIGdldEFsbCgpIHsgcmV0dXJuIGNvb2tpZVN0b3JlLmdldEFsbCgpIH0sXHJcbiAgICAgICAgc2V0QWxsKGNvb2tpZXNUb1NldCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29va2llc1RvU2V0LmZvckVhY2goKHsgbmFtZSwgdmFsdWUsIG9wdGlvbnMgfSkgPT5cclxuICAgICAgICAgICAgICBjb29raWVTdG9yZS5zZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHByb2ZpbGUgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgLnNlbGVjdCgncnVhbmdhbl9pZCcpXHJcbiAgICAuZXEoJ2lkJywgdXNlci5pZClcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgLy8gUFJPU0VTIFRSQU5TRk9STUFTSSBEQVRBXHJcbiAgY29uc3QgZmluYWxEYXRhID0gZGF0YVJvd3MubWFwKHJvdyA9PiAoe1xyXG4gICAgLi4ucm93LFxyXG4gICAgLy8gTWVuZ3ViYWggbmFtYV9wYXNpZW4gbWVuamFkaSBodXJ1ZiBiZXNhciBqaWthIGFkYVxyXG4gICAgbmFtYV9wYXNpZW46IHJvdy5uYW1hX3Bhc2llbiA/IHJvdy5uYW1hX3Bhc2llbi50b1VwcGVyQ2FzZSgpIDogcm93Lm5hbWFfcGFzaWVuLFxyXG4gICAgdXNlcl9pZDogdXNlci5pZCxcclxuICAgIHJ1YW5nYW5faWQ6IHByb2ZpbGU/LnJ1YW5nYW5faWRcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3N1cnZlaWxhbnNfaGFyaWFuJykuaW5zZXJ0KGZpbmFsRGF0YSk7XHJcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGVyYXdhdCcpO1xyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BlcmF3YXQvcml3YXlhdCcpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmdzaTogTWVuZ2hpdHVuZyByZWthcGl0dWxhc2kgYnVsYW5hbiBkZW5nYW4gYWt1cmFzaSBQYXNpZW4gVW5payB1bnR1ayBIQUlzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdHNCdWxhbkluaSgpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlckNsaWVudChcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSEsXHJcbiAgICB7IGNvb2tpZXM6IHsgZ2V0QWxsKCkgeyByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKCkgfSB9IH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG4gIGNvbnN0IGZpcnN0RGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUNBJywge1xyXG4gICAgdGltZVpvbmU6ICdBc2lhL0pha2FydGEnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgIGRheTogJzItZGlnaXQnLFxyXG4gIH0pLmZvcm1hdChuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDEpKTtcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tQ0EnLCB7XHJcbiAgICB0aW1lWm9uZTogJ0FzaWEvSmFrYXJ0YScsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgfSkuZm9ybWF0KG5vdyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnc3VydmVpbGFuc19oYXJpYW4nKVxyXG4gICAgLnNlbGVjdCgnKicpXHJcbiAgICAuZXEoJ3VzZXJfaWQnLCB1c2VyLmlkKVxyXG4gICAgLmd0ZSgndGFuZ2dhbCcsIGZpcnN0RGF5KVxyXG4gICAgLmx0ZSgndGFuZ2dhbCcsIHRvZGF5KTtcclxuXHJcbiAgaWYgKGVycm9yIHx8ICFkYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2ggc3RhdHMgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHRvdGFsUGFzaWVuOiAwLCB0b3RhbFRpbmRha2FuOiAwLCBwb3RlbnNpSGFpczogMCwgZGV0YWlsczoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuaXF1ZVZhcCA9IG5ldyBTZXQoZGF0YS5maWx0ZXIociA9PiBOdW1iZXIoci52YXApID09PSAxKS5tYXAociA9PiByLm5vX3JtKSkuc2l6ZTtcclxuICBjb25zdCB1bmlxdWVJZG8gPSBuZXcgU2V0KGRhdGEuZmlsdGVyKHIgPT4gTnVtYmVyKHIuaWRvKSA9PT0gMSkubWFwKHIgPT4gci5ub19ybSkpLnNpemU7XHJcbiAgY29uc3QgdW5pcXVlSXNrID0gbmV3IFNldChkYXRhLmZpbHRlcihyID0+IE51bWJlcihyLmlzaykgPT09IDEpLm1hcChyID0+IHIubm9fcm0pKS5zaXplO1xyXG4gIGNvbnN0IHVuaXF1ZUlhZCA9IG5ldyBTZXQoZGF0YS5maWx0ZXIociA9PiBOdW1iZXIoci5pYWQpID09PSAxKS5tYXAociA9PiByLm5vX3JtKSkuc2l6ZTtcclxuICBjb25zdCB0b3RhbFBhc2llblVuaWsgPSBuZXcgU2V0KGRhdGEubWFwKHIgPT4gci5ub19ybSkpLnNpemU7XHJcblxyXG4gIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICB1YzogZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKE51bWJlcihjdXJyLnVjKSB8fCAwKSwgMCksXHJcbiAgICBjdmw6IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChOdW1iZXIoY3Vyci5jdmwpIHx8IDApLCAwKSxcclxuICAgIGl2bDogZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgKE51bWJlcihjdXJyLml2bCkgfHwgMCksIDApLFxyXG4gICAgZXR0OiBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyAoTnVtYmVyKGN1cnIuZXR0KSB8fCAwKSwgMCksXHJcbiAgICB2YXA6IHVuaXF1ZVZhcCxcclxuICAgIGlkbzogdW5pcXVlSWRvLFxyXG4gICAgaXNrOiB1bmlxdWVJc2ssXHJcbiAgICBpYWQ6IHVuaXF1ZUlhZCxcclxuICAgIHRiOiBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyAoTnVtYmVyKGN1cnIudGlyYWhfYmFyaW5nKSB8fCAwKSwgMCksXHJcbiAgICBwbGI6IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIChOdW1iZXIoY3Vyci5wbGViaXRpcykgfHwgMCksIDApLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbFBhc2llbjogdG90YWxQYXNpZW5VbmlrLFxyXG4gICAgdG90YWxUaW5kYWthbjogZGV0YWlscy51YyArIGRldGFpbHMuY3ZsICsgZGV0YWlscy5pdmwgKyBkZXRhaWxzLmV0dCxcclxuICAgIHBvdGVuc2lIYWlzOiB1bmlxdWVWYXAgKyB1bmlxdWVJZG8gKyB1bmlxdWVJc2sgKyB1bmlxdWVJYWQsXHJcbiAgICBkZXRhaWxzIFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5nc2kgdW50dWsgbWVuZ2FtYmlsIHJpd2F5YXQgc3VydmVpbGFucyBwZXJhd2F0IHlhbmcgbG9naW5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSaXdheWF0U3VydmVpbGFucygpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlckNsaWVudChcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSEsXHJcbiAgICB7IGNvb2tpZXM6IHsgZ2V0QWxsKCkgeyByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKCkgfSB9IH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpXHJcbiAgICAuc2VsZWN0KCcqJylcclxuICAgIC5lcSgndXNlcl9pZCcsIHVzZXIuaWQpXHJcbiAgICAub3JkZXIoJ3RhbmdnYWwnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgIC5saW1pdCg1MCk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZldGNoIGhpc3RvcnkgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuZ3NpIHVudHVrIG1lbmdoYXB1cyBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3VydmVpbGFucyhpZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJDbGllbnQoXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhLFxyXG4gICAge1xyXG4gICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgZ2V0QWxsKCkgeyByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKCkgfSxcclxuICAgICAgICBzZXRBbGwoY29va2llc1RvU2V0KSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PlxyXG4gICAgICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnc3VydmVpbGFuc19oYXJpYW4nKS5kZWxldGUoKS5lcSgnaWQnLCBpZCk7XHJcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuICBcclxuICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wZXJhd2F0L3Jpd2F5YXQnKTtcclxuICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wZXJhd2F0Jyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vKipcclxuICogTWVuZ2FtYmlsIGRhdGEgdHVuZ2dhbCB1bnR1ayBwcm9zZXMgRWRpdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1cnZlaWxhbnNCeUlkKGlkOiBzdHJpbmcpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlckNsaWVudChcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSEsXHJcbiAgICB7IGNvb2tpZXM6IHsgZ2V0QWxsKCkgeyByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKCkgfSB9IH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ3N1cnZlaWxhbnNfaGFyaWFuJylcclxuICAgIC5zZWxlY3QoJyonKVxyXG4gICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgLnNpbmdsZSgpO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogTWVtcGVyYmFydWkgZGF0YSBzdXJ2ZWlsYW5zIChVcGRhdGUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3VydmVpbGFucyhpZDogc3RyaW5nLCBmb3JtRGF0YTogYW55KSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJDbGllbnQoXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhLFxyXG4gICAge1xyXG4gICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgZ2V0QWxsKCkgeyByZXR1cm4gY29va2llU3RvcmUuZ2V0QWxsKCkgfSxcclxuICAgICAgICBzZXRBbGwoY29va2llc1RvU2V0KSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PlxyXG4gICAgICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gSmFuZ2FuIGx1cGEgdWJhaCBuYW1hIHBhc2llbiBrZSB1cHBlcmNhc2UganVnYSBzYWF0IHVwZGF0ZVxyXG4gIGNvbnN0IHVwZGF0ZWREYXRhID0ge1xyXG4gICAgLi4uZm9ybURhdGEsXHJcbiAgICBuYW1hX3Bhc2llbjogZm9ybURhdGEubmFtYV9wYXNpZW4gPyBmb3JtRGF0YS5uYW1hX3Bhc2llbi50b1VwcGVyQ2FzZSgpIDogZm9ybURhdGEubmFtYV9wYXNpZW5cclxuICB9O1xyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdzdXJ2ZWlsYW5zX2hhcmlhbicpLnVwZGF0ZSh1cGRhdGVkRGF0YSkuZXEoJ2lkJywgaWQpO1xyXG4gIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BlcmF3YXQvcml3YXlhdCcpO1xyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BlcmF3YXQnKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJSQTRKc0IsNkxBQUEifQ==
}),
"[project]/app/dashboard/perawat/riwayat/DeleteButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$62d342__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:62d342 [app-client] (ecmascript) <text/javascript>");
"use client";
;
;
;
function DeleteButton({ id }) {
    const handleDelete = async ()=>{
        if (confirm("Apakah Anda yakin ingin menghapus data ini secara permanen?")) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$62d342__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSurveilans"])(id);
                alert("Data berhasil dihapus dari sistem.");
            } catch (error) {
                alert("Gagal menghapus data. Silakan coba lagi.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleDelete,
        className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/app/dashboard/perawat/riwayat/DeleteButton.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/perawat/riwayat/DeleteButton.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = DeleteButton;
var _c;
__turbopack_context__.k.register(_c, "DeleteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
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
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
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

//# sourceMappingURL=_aa02eeba._.js.map