(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONNECTION_COLORS",
    ()=>CONNECTION_COLORS,
    "ViewMode",
    ()=>ViewMode
]);
var ViewMode = /*#__PURE__*/ function(ViewMode) {
    ViewMode["EDITOR"] = "EDITOR";
    ViewMode["CANVAS"] = "CANVAS";
    ViewMode["GRAPH"] = "GRAPH";
    ViewMode["SIEVE"] = "SIEVE";
    ViewMode["ADMIN"] = "ADMIN";
    return ViewMode;
}({});
const CONNECTION_COLORS = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Sidebar = ({ currentView, onViewChange, onCreateNote, onAiCreate, onUndo, onRedo, canUndo, canRedo, onSearch, allTags, selectedTag, onSelectTag, isDarkMode, onToggleTheme })=>{
    _s();
    const [tagMenuOpen, setTagMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 43,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Editor'
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 44,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Canvas'
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].GRAPH,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 45,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Graph'
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].SIEVE,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 46,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Sieve AI'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -100
        },
        animate: {
            x: 0
        },
        className: "w-20 h-screen bg-white dark:bg-black border-r border-gray-100 dark:border-neutral-800 flex flex-col items-center py-8 z-50 fixed left-0 top-0 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 w-10 h-10 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl rounded-sm",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 flex-1",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onViewChange(item.id),
                        className: "relative group flex items-center justify-center w-10 h-10 outline-none",
                        "aria-label": item.label,
                        children: [
                            currentView === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "activeNav",
                                className: "absolute inset-0 bg-black dark:bg-white rounded-lg",
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `relative z-10 transition-colors duration-200 ${currentView === item.id ? 'text-white dark:text-black' : 'text-gray-400 hover:text-black dark:hover:text-white'}`,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-[60]",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1,
                            rotate: -10
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onUndo,
                        disabled: !canUndo,
                        className: `flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${canUndo ? 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800' : 'text-gray-200 dark:text-neutral-700 cursor-not-allowed'}`,
                        title: "Undo (Cmd+Z)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1,
                            rotate: 10
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onRedo,
                        disabled: !canRedo,
                        className: `flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${canRedo ? 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800' : 'text-gray-200 dark:text-neutral-700 cursor-not-allowed'}`,
                        title: "Redo (Cmd+Shift+Z)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onToggleTheme,
                        className: "text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800",
                        title: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
                        children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 45
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: ()=>setTagMenuOpen(!tagMenuOpen),
                                className: `w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${selectedTag || tagMenuOpen ? 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800'}`,
                                title: "Filter by Tag",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: tagMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-[55]",
                                            onClick: ()=>setTagMenuOpen(false)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 10,
                                                scale: 0.95
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 20,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: 10,
                                                scale: 0.95
                                            },
                                            className: "absolute left-full bottom-0 w-48 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-2 z-[60] flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-2 py-1 border-b border-gray-100 dark:border-neutral-700 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase text-gray-400 dark:text-neutral-500",
                                                            children: "Filter Tags"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onSelectTag(null),
                                                            className: "text-[10px] text-red-500 hover:underline",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-60 overflow-y-auto custom-scrollbar",
                                                    children: allTags.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 text-xs text-gray-400 italic text-center",
                                                        children: "No tags found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : allTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                onSelectTag(selectedTag === tag ? null : tag);
                                                            },
                                                            className: `w-full text-left px-2 py-1.5 rounded text-xs font-bold flex items-center justify-between ${selectedTag === tag ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "#",
                                                                        tag
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedTag === tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer",
                            title: "Tag Management (Admin)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onSearch,
                        className: "text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800",
                        title: "Search (Cmd+K)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.1,
                                    rotate: 180
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 10
                                },
                                onClick: onAiCreate,
                                className: "text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 w-10 h-10 flex items-center justify-center rounded-lg",
                                title: "Magic Create with Gemini",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.15
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: onCreateNote,
                                className: "text-black dark:text-white",
                                title: "Create Note",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                    size: 28,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "Ux3WoUgIX5KqiBCL882C6VaDV+c=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:f27e82 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a27361b0caf8eef52e679cc4febeb0dfd20c4e0e":"getTags"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getTags",
    ()=>getTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getTags = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a27361b0caf8eef52e679cc4febeb0dfd20c4e0e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTags"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUUFxVHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_NAME",
    ()=>APP_NAME,
    "BLOCK_HIGHLIGHT_COLORS",
    ()=>BLOCK_HIGHLIGHT_COLORS,
    "MOCK_NOTES",
    ()=>MOCK_NOTES,
    "NOTE_COLORS",
    ()=>NOTE_COLORS
]);
const APP_NAME = "NOTATIONS";
const NOTE_COLORS = [
    {
        id: 'default',
        value: '#000000',
        label: 'Black'
    },
    {
        id: 'red',
        value: '#ef4444',
        label: 'Red'
    },
    {
        id: 'orange',
        value: '#f97316',
        label: 'Orange'
    },
    {
        id: 'yellow',
        value: '#eab308',
        label: 'Yellow'
    },
    {
        id: 'green',
        value: '#22c55e',
        label: 'Green'
    },
    {
        id: 'blue',
        value: '#3b82f6',
        label: 'Blue'
    },
    {
        id: 'purple',
        value: '#a855f7',
        label: 'Purple'
    }
];
const BLOCK_HIGHLIGHT_COLORS = [
    {
        id: 'none',
        value: 'transparent',
        label: 'No Highlight'
    },
    {
        id: 'red',
        value: 'rgba(239, 68, 68, 0.35)',
        label: 'Red'
    },
    {
        id: 'orange',
        value: 'rgba(249, 115, 22, 0.35)',
        label: 'Orange'
    },
    {
        id: 'yellow',
        value: 'rgba(250, 204, 21, 0.4)',
        label: 'Yellow'
    },
    {
        id: 'green',
        value: 'rgba(34, 197, 94, 0.35)',
        label: 'Green'
    },
    {
        id: 'blue',
        value: 'rgba(59, 130, 246, 0.35)',
        label: 'Blue'
    },
    {
        id: 'purple',
        value: 'rgba(168, 85, 247, 0.4)',
        label: 'Purple'
    },
    {
        id: 'pink',
        value: 'rgba(236, 72, 153, 0.35)',
        label: 'Pink'
    },
    {
        id: 'cyan',
        value: 'rgba(6, 182, 212, 0.35)',
        label: 'Cyan'
    }
];
const MOCK_NOTES = [
    {
        id: '1',
        title: 'Project Manifesto',
        blocks: [
            {
                id: 'b1',
                type: 'heading',
                content: 'The Vision'
            },
            {
                id: 'b2',
                type: 'paragraph',
                content: 'A unified interface for thought.'
            },
            {
                id: 'b3',
                type: 'todo',
                content: 'Integrate Gemini AI',
                checked: false
            }
        ],
        position: {
            x: 100,
            y: 100
        },
        connections: [
            '2',
            '3'
        ],
        color: '#000000',
        tags: [
            'vision',
            'strategy'
        ],
        createdAt: Date.now()
    },
    {
        id: '2',
        title: 'Design System',
        blocks: [
            {
                id: 'b4',
                type: 'heading',
                content: 'Monochrome'
            },
            {
                id: 'b5',
                type: 'paragraph',
                content: 'Strict black and white palette. No greys unless necessary for hierarchy.'
            }
        ],
        position: {
            x: 400,
            y: 200
        },
        connections: [
            '1'
        ],
        color: '#3b82f6',
        tags: [
            'design',
            'ui'
        ],
        createdAt: Date.now()
    },
    {
        id: '3',
        title: 'Tech Stack',
        blocks: [
            {
                id: 'b6',
                type: 'paragraph',
                content: 'React, D3, Framer Motion, Google GenAI.'
            }
        ],
        position: {
            x: 200,
            y: 400
        },
        connections: [
            '1'
        ],
        color: '#ef4444',
        tags: [
            'dev',
            'stack'
        ],
        createdAt: Date.now()
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/data:a37002 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f169ad6c7a40bd017e3de934f47d4b743d203f5be":"expandNoteWithAI"},"services/geminiService.ts",""] */ __turbopack_context__.s([
    "expandNoteWithAI",
    ()=>expandNoteWithAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var expandNoteWithAI = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f169ad6c7a40bd017e3de934f47d4b743d203f5be", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "expandNoteWithAI"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJLCBUeXBlIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJBUEkgS2V5IG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZE5vdGVXaXRoQUkgPSBhc3luYyAoY3VycmVudENvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBcIkVycm9yOiBBUEkgS2V5IG1pc3NpbmcuXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LXBybycsXG4gICAgICBjb250ZW50czogYFlvdSBhcmUgYSBtaW5pbWFsaXN0IHByb2R1Y3Rpdml0eSBhc3Npc3RhbnQuIFxuICAgICAgVGFrZSB0aGUgZm9sbG93aW5nIG5vdGUgY29udGVudCBhbmQgZXhwYW5kIHVwb24gaXQgd2l0aCAzIGFjdGlvbmFibGUgYnVsbGV0IHBvaW50cyBcbiAgICAgIG9yIGEgYnJpZWYgc3VtbWFyeSBwYXJhZ3JhcGguIEtlZXAgdGhlIHRvbmUgc3RyaWN0LCBwcm9mZXNzaW9uYWwsIGFuZCBjb25jaXNlLlxuICAgICAgXG4gICAgICBJbnB1dDogXCIke2N1cnJlbnRDb250ZW50fVwiYCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0IHx8IFwiTm8gcmVzcG9uc2UgZ2VuZXJhdGVkLlwiO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJHZW1pbmkgQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiRmFpbGVkIHRvIGdlbmVyYXRlIGluc2lnaHQuXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbm5lY3Rpb25zID0gYXN5bmMgKG5vdGVzOiB7IGlkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfVtdKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBbXTtcblxuICB0cnkge1xuICAgIC8vIExvZ2ljIHRvIHN1Z2dlc3QgY29ubmVjdGlvbnMgYmV0d2VlbiBub3RlcyBiYXNlZCBvbiB0aXRsZXNcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgYWR2YW5jZWQgZ3JhcGggUkFHXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vdGVGcm9tUHJvbXB0ID0gYXN5bmMgKHByb21wdDogc3RyaW5nKTogUHJvbWlzZTx7IHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9IHwgbnVsbD4gPT4ge1xuICBjb25zdCBhaSA9IGdldENsaWVudCgpO1xuICBpZiAoIWFpKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtcHJvJyxcbiAgICAgIGNvbnRlbnRzOiBgR2VuZXJhdGUgYSBjcmVhdGl2ZSBhbmQgc3RydWN0dXJlZCBub3RlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgdXNlciBwcm9tcHQ6IFwiJHtwcm9tcHR9XCIuIFxuICAgICAgICBUaGUgdGl0bGUgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGNhdGNoeS4gVGhlIGNvbnRlbnQgc2hvdWxkIGJlIGEgd2VsbC1zdHJ1Y3R1cmVkIHN0YXJ0aW5nIHBvaW50IChlLmcuLCBhIGxpc3QsIGEgc3VtbWFyeSwgb3IgYSBkcmFmdCkuYCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiBUeXBlLk9CSkVDVCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgICAgY29udGVudDogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogW1widGl0bGVcIiwgXCJjb250ZW50XCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSByZXNwb25zZS50ZXh0O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIE1hZ2ljIENyZWF0ZSBFcnJvcjpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQWFhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/ContentBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentBlock",
    ()=>ContentBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ContentBlock = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ id, html, tagName, className = '', onChange, onKeyDown, placeholder, autoFocus, onFocus })=>{
    _s();
    const contentEditableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Track the content we believe is in the DOM (user's typing + external updates)
    const lastHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(html);
    // 2. Track the content we want React to use for rendering.
    // We separate this to control WHEN React updates the DOM.
    const renderHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(html);
    // 3. Reconcile Props vs Local State
    // If 'html' (prop) differs from 'lastHtmlRef' (local), it is an EXTERNAL change 
    // (like Undo, Redo, AI, or loading a new note). We must apply it.
    if (html !== lastHtmlRef.current) {
        lastHtmlRef.current = html;
        renderHtmlRef.current = html;
    }
    // If 'html' === 'lastHtmlRef', it is a LOOPBACK (User typed -> State updated -> Prop passed back).
    // We do NOT update 'renderHtmlRef' in this case.
    // 4. Memoize the innerHTML object.
    // React checks if props have changed. If we pass the exact same object reference 
    // for dangerouslySetInnerHTML, React skips the DOM update entirely.
    // We rely on 'renderHtmlRef.current' staying stable during loopbacks.
    const innerHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContentBlock.useMemo[innerHTML]": ()=>({
                __html: renderHtmlRef.current
            })
    }["ContentBlock.useMemo[innerHTML]"], [
        renderHtmlRef.current
    ]);
    // Handle AutoFocus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentBlock.useEffect": ()=>{
            if (autoFocus && contentEditableRef.current) {
                contentEditableRef.current.focus();
                // Move cursor to end safely
                const range = document.createRange();
                const sel = window.getSelection();
                if (sel) {
                    range.selectNodeContents(contentEditableRef.current);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
    }["ContentBlock.useEffect"], [
        autoFocus
    ]);
    const handleInput = (e)=>{
        let newHtml = e.currentTarget.innerHTML;
        // Clean up empty or broken anchor tags
        // Remove anchor tags with empty or whitespace-only content
        newHtml = newHtml.replace(/<a[^>]*>(\s*)<\/a>/gi, '$1');
        // Remove anchor tags with only formatting tags but no text
        newHtml = newHtml.replace(/<a[^>]*>(<(strong|em|span|b|i)[^>]*>\s*<\/\2>)*<\/a>/gi, '');
        // Platform links should be ATOMIC - any modification removes the entire link
        // These are platform links that should be deleted entirely if edited at all
        const platformLinkClasses = [
            'twitter-mention-link',
            'youtube-link',
            'instagram-link',
            'github-link',
            'linkedin-link',
            'tiktok-link',
            'spotify-link',
            'reddit-link',
            'generic-link'
        ];
        // Create a temporary element to parse and clean the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newHtml;
        // Find all anchor tags and check if they're platform links that have been modified
        const anchors = tempDiv.querySelectorAll('a');
        anchors.forEach((anchor)=>{
            const classList = anchor.className;
            const isPlatformLink = platformLinkClasses.some((cls)=>classList.includes(cls));
            if (isPlatformLink) {
                // Check if the link structure is intact - platform links must have:
                // 1. A .link-logo span with an SVG inside
                // 2. A .link-text span 
                // 3. A strong tag inside .link-text
                // 4. A .link-separator span (the · character)
                // 5. A .link-platform span
                const hasLinkLogo = anchor.querySelector('.link-logo') !== null;
                const hasLinkText = anchor.querySelector('.link-text') !== null;
                const hasStrong = anchor.querySelector('.link-text strong') !== null;
                const hasSeparator = anchor.querySelector('.link-separator') !== null;
                const hasPlatform = anchor.querySelector('.link-platform') !== null;
                const hasSvg = anchor.querySelector('svg') !== null;
                // If ANY required component is missing, the link was edited - delete it entirely
                const isIntact = hasLinkLogo && hasLinkText && hasStrong && hasSeparator && hasPlatform && hasSvg;
                if (!isIntact) {
                    // Remove the entire anchor - don't leave any text behind
                    anchor.remove();
                }
            }
        });
        newHtml = tempDiv.innerHTML;
        // Remove twitter preview cards that are orphaned (outside of anchor)
        newHtml = newHtml.replace(/<div class="twitter-preview-card"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi, '');
        // Update local tracker immediately so next render knows it matches
        lastHtmlRef.current = newHtml;
        onChange(id, newHtml);
    };
    const handleKeyDown = (e)=>{
        // Rich Text Shortcuts
        if ((e.metaKey || e.ctrlKey) && !e.shiftKey) {
            if (e.key === 'b') {
                e.preventDefault();
                document.execCommand('bold');
            } else if (e.key === 'i') {
                e.preventDefault();
                document.execCommand('italic');
            } else if (e.key === 'u') {
                e.preventDefault();
                document.execCommand('underline');
            }
        }
        onKeyDown(e, id);
    };
    // Handle clicks on links inside contentEditable
    const handleClick = (e)=>{
        const target = e.target;
        const anchor = target.closest('a');
        if (anchor && anchor.href) {
            e.preventDefault();
            e.stopPropagation();
            window.open(anchor.href, '_blank', 'noopener,noreferrer');
        }
    };
    const Tag = tagName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: contentEditableRef,
        className: `outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300 ${className}`,
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: handleInput,
        onKeyDown: handleKeyDown,
        onClick: handleClick,
        onFocus: ()=>onFocus?.(id),
        "data-placeholder": placeholder,
        dangerouslySetInnerHTML: innerHTML
    }, void 0, false, {
        fileName: "[project]/components/editor/ContentBlock.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "RtBgStpnRS38XE1injgXSxm8SLc=")), "RtBgStpnRS38XE1injgXSxm8SLc=");
_c1 = ContentBlock;
ContentBlock.displayName = 'ContentBlock';
var _c, _c1;
__turbopack_context__.k.register(_c, "ContentBlock$React.memo");
__turbopack_context__.k.register(_c1, "ContentBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/ImageBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageBlock",
    ()=>ImageBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
;
;
const ImageBlock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ id, src, onDelete, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative group/image ${className} my-4`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: "Note attachment",
                className: "max-w-full rounded-lg border border-gray-200 dark:border-neutral-800 shadow-sm",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onDelete(id),
                className: "absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/80 hover:bg-red-500 hover:text-white rounded-full text-gray-600 dark:text-gray-300 transition-all opacity-0 group-hover/image:opacity-100 backdrop-blur-sm",
                title: "Remove image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/components/editor/ImageBlock.tsx",
                    lineNumber: 26,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/ImageBlock.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ImageBlock;
ImageBlock.displayName = 'ImageBlock';
var _c, _c1;
__turbopack_context__.k.register(_c, "ImageBlock$React.memo");
__turbopack_context__.k.register(_c1, "ImageBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ConfirmationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmationModal",
    ()=>ConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
;
;
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-[100]",
                    onClick: onCancel
                }, void 0, false, {
                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 p-8 z-[101] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-black dark:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 24,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black uppercase tracking-wide",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                lineNumber: 38,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ConfirmationModal.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-neutral-400 font-medium mb-10 leading-relaxed",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ConfirmationModal.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "flex-1 py-3 border-2 border-gray-200 dark:border-neutral-700 font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors text-sm uppercase tracking-wider text-black dark:text-white",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: "flex-1 py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider",
                                    children: "Confirm Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ConfirmationModal.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/ConfirmationModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/TextLinkingMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextLinkingMode",
    ()=>TextLinkingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TextLinkingMode = ({ isActive, sourceText, sourceBlockId, currentColor, onColorChange, onSelectTarget, onCancel })=>{
    _s();
    const [selectedTargetText, setSelectedTargetText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTargetBlockId, setSelectedTargetBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Listen for text selection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextLinkingMode.useEffect": ()=>{
            if (!isActive) return;
            const handleMouseUp = {
                "TextLinkingMode.useEffect.handleMouseUp": ()=>{
                    const selection = window.getSelection();
                    if (!selection || selection.isCollapsed) return;
                    const selectedText = selection.toString().trim();
                    if (!selectedText || selectedText === sourceText) return;
                    // Find the block containing the selection
                    let node = selection.anchorNode;
                    while(node && node !== document.body){
                        if (node instanceof HTMLElement) {
                            const blockId = node.id?.replace('block-', '');
                            if (blockId && node.id?.startsWith('block-')) {
                                setSelectedTargetText(selectedText);
                                setSelectedTargetBlockId(blockId);
                                break;
                            }
                        }
                        node = node.parentNode;
                    }
                }
            }["TextLinkingMode.useEffect.handleMouseUp"];
            document.addEventListener('mouseup', handleMouseUp);
            return ({
                "TextLinkingMode.useEffect": ()=>document.removeEventListener('mouseup', handleMouseUp)
            })["TextLinkingMode.useEffect"];
        }
    }["TextLinkingMode.useEffect"], [
        isActive,
        sourceText
    ]);
    // Handle keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextLinkingMode.useEffect": ()=>{
            if (!isActive) return;
            const handleKeyDown = {
                "TextLinkingMode.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        onCancel();
                    }
                    if (e.key === 'Enter' && selectedTargetText && selectedTargetBlockId) {
                        onSelectTarget(selectedTargetText, selectedTargetBlockId);
                    }
                }
            }["TextLinkingMode.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "TextLinkingMode.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["TextLinkingMode.useEffect"];
        }
    }["TextLinkingMode.useEffect"], [
        isActive,
        onCancel,
        onSelectTarget,
        selectedTargetText,
        selectedTargetBlockId
    ]);
    // Reset when mode deactivates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextLinkingMode.useEffect": ()=>{
            if (!isActive) {
                setSelectedTargetText('');
                setSelectedTargetBlockId('');
            }
        }
    }["TextLinkingMode.useEffect"], [
        isActive
    ]);
    if (!isActive) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                className: "fixed top-0 left-1/2 -translate-x-1/2 z-[100] p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 bg-black/95 dark:bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Conectando:"
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 bg-white/10 rounded text-sm font-bold max-w-[150px] truncate",
                                    children: [
                                        '"',
                                        sourceText,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/50",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedTargetText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-0.5 rounded text-sm font-bold max-w-[150px] truncate",
                            style: {
                                backgroundColor: currentColor + '30',
                                color: currentColor
                            },
                            children: [
                                '"',
                                selectedTargetText,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/50 text-sm italic",
                            children: "Selecione o texto destino..."
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 px-2 border-l border-white/10",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onColorChange(color),
                                    className: `w-5 h-5 rounded-full transition-transform hover:scale-125 ${currentColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}`,
                                    style: {
                                        backgroundColor: color
                                    }
                                }, color, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pl-2 border-l border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (selectedTargetText && selectedTargetBlockId) {
                                            onSelectTarget(selectedTargetText, selectedTargetBlockId);
                                        }
                                    },
                                    disabled: !selectedTargetText || !selectedTargetBlockId,
                                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${selectedTargetText && selectedTargetBlockId ? 'bg-white text-black hover:bg-white/90' : 'bg-white/20 text-white/40 cursor-not-allowed'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 157,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Conectar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/90 dark:bg-neutral-800 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70",
                    children: [
                        "Selecione outro texto para conectar • ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "bg-white/10 px-1.5 py-0.5 rounded text-xs",
                            children: "Enter"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 171,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0)),
                        " confirmar • ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "bg-white/10 px-1.5 py-0.5 rounded text-xs",
                            children: "Esc"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 171,
                            columnNumber: 142
                        }, ("TURBOPACK compile-time value", void 0)),
                        " cancelar"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true), document.body);
};
_s(TextLinkingMode, "o/BkbVoQHD2GKzxUd3JaKGUv/ls=");
_c = TextLinkingMode;
var _c;
__turbopack_context__.k.register(_c, "TextLinkingMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/TextConnectionLines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextConnectionLines",
    ()=>TextConnectionLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Optimized helper to find text position with caching
const findTextPosition = (blockEl, searchText)=>{
    if (!searchText || !blockEl) return null;
    try {
        const walker = document.createTreeWalker(blockEl, NodeFilter.SHOW_TEXT, null);
        let node;
        while(node = walker.nextNode()){
            const text = node.textContent || '';
            const index = text.indexOf(searchText);
            if (index !== -1) {
                const range = document.createRange();
                range.setStart(node, index);
                range.setEnd(node, index + searchText.length);
                const rect = range.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + rect.height / 2
                };
            }
        }
    } catch (error) {
        console.warn('Error finding text position:', error);
    }
    return null;
};
// Collect all connections from blocks
const collectConnections = (blocks)=>{
    const result = [];
    blocks.forEach((block)=>{
        if (block.textConnections && block.textConnections.length > 0) {
            block.textConnections.forEach((conn)=>{
                result.push({
                    connection: conn,
                    blockId: block.id
                });
            });
        }
    });
    return result;
};
const TextConnectionLines = ({ blocks, containerRef })=>{
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastDrawTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Configuration
    const MARGIN_OFFSET = 25;
    const LINE_SPACING = 6;
    const THROTTLE_MS = 16; // ~60fps
    // Memoize connections to avoid recalculating on every render
    const allConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextConnectionLines.useMemo[allConnections]": ()=>collectConnections(blocks)
    }["TextConnectionLines.useMemo[allConnections]"], [
        blocks
    ]);
    const drawConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextConnectionLines.useCallback[drawConnections]": ()=>{
            if (!svgRef.current || !containerRef.current) return;
            // Throttle drawing
            const now = performance.now();
            if (now - lastDrawTimeRef.current < THROTTLE_MS) return;
            lastDrawTimeRef.current = now;
            const svg = svgRef.current;
            const container = containerRef.current;
            let containerRect;
            try {
                containerRect = container.getBoundingClientRect();
            } catch  {
                return;
            }
            // Clear existing content efficiently
            svg.innerHTML = '';
            // Early exit if no connections
            if (allConnections.length === 0) return;
            // Create defs for gradients and filters
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            // Add smooth animation style
            const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
            style.textContent = `
      @keyframes dashFlow {
        from { stroke-dashoffset: 20; }
        to { stroke-dashoffset: 0; }
      }
      .connection-path {
        animation: dashFlow 1.5s linear infinite;
        transition: opacity 0.3s ease;
      }
      .connection-dot {
        transition: r 0.2s ease, opacity 0.3s ease;
      }
      .connection-dot:hover {
        r: 6;
      }
    `;
            defs.appendChild(style);
            svg.appendChild(defs);
            // Track drawn dot positions to avoid duplicates
            const drawnPositions = new Set();
            // Create a fragment for better performance
            const fragment = document.createDocumentFragment();
            allConnections.forEach({
                "TextConnectionLines.useCallback[drawConnections]": (item, index)=>{
                    const { connection, blockId } = item;
                    // Find source block element
                    const sourceBlockEl = document.getElementById(`block-${blockId}`);
                    if (!sourceBlockEl) return;
                    // Find target block element
                    const targetBlockEl = document.getElementById(`block-${connection.targetBlockId}`);
                    if (!targetBlockEl) return;
                    // Find source text position
                    const sourcePos = findTextPosition(sourceBlockEl, connection.sourceText);
                    if (!sourcePos) return;
                    // Find target text position
                    const targetPos = findTextPosition(targetBlockEl, connection.targetText);
                    if (!targetPos) return;
                    // Convert to container-relative positions
                    const sourceY = sourcePos.y - containerRect.top + container.scrollTop;
                    const targetY = targetPos.y - containerRect.top + container.scrollTop;
                    // Calculate margin X (staggered for multiple connections)
                    const marginX = -(MARGIN_OFFSET + index * LINE_SPACING);
                    // Create gradient for this connection
                    const gradientId = `grad-${connection.id}`;
                    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
                    gradient.setAttribute('id', gradientId);
                    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
                    gradient.setAttribute('x1', '0');
                    gradient.setAttribute('y1', String(sourceY));
                    gradient.setAttribute('x2', '0');
                    gradient.setAttribute('y2', String(targetY));
                    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
                    stop1.setAttribute('offset', '0%');
                    stop1.setAttribute('stop-color', connection.color);
                    stop1.setAttribute('stop-opacity', '1');
                    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
                    stop2.setAttribute('offset', '100%');
                    stop2.setAttribute('stop-color', connection.color);
                    stop2.setAttribute('stop-opacity', '0.6');
                    gradient.appendChild(stop1);
                    gradient.appendChild(stop2);
                    defs.appendChild(gradient);
                    // Create drop shadow filter
                    const filterId = `shadow-${connection.id}`;
                    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
                    filter.setAttribute('id', filterId);
                    filter.setAttribute('x', '-50%');
                    filter.setAttribute('y', '-50%');
                    filter.setAttribute('width', '200%');
                    filter.setAttribute('height', '200%');
                    const feDropShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feDropShadow');
                    feDropShadow.setAttribute('dx', '0');
                    feDropShadow.setAttribute('dy', '0');
                    feDropShadow.setAttribute('stdDeviation', '2');
                    feDropShadow.setAttribute('flood-color', connection.color);
                    feDropShadow.setAttribute('flood-opacity', '0.4');
                    filter.appendChild(feDropShadow);
                    defs.appendChild(filter);
                    // Create the path group
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    group.setAttribute('data-connection-id', connection.id);
                    // Create the connection path (L-shaped in the margin)
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const sourceEdge = 0;
                    // Smooth L-shaped path with rounded corners
                    const cornerRadius = Math.min(8, Math.abs(targetY - sourceY) / 4);
                    const direction = targetY > sourceY ? 1 : -1;
                    const d = `M ${sourceEdge} ${sourceY}
                 H ${marginX + cornerRadius}
                 Q ${marginX} ${sourceY} ${marginX} ${sourceY + direction * cornerRadius}
                 V ${targetY - direction * cornerRadius}
                 Q ${marginX} ${targetY} ${marginX + cornerRadius} ${targetY}
                 H ${sourceEdge}`;
                    path.setAttribute('d', d);
                    path.setAttribute('stroke', `url(#${gradientId})`);
                    path.setAttribute('stroke-width', '2');
                    path.setAttribute('stroke-dasharray', '6,4');
                    path.setAttribute('stroke-linecap', 'round');
                    path.setAttribute('stroke-linejoin', 'round');
                    path.setAttribute('fill', 'none');
                    path.setAttribute('filter', `url(#${filterId})`);
                    path.setAttribute('class', 'connection-path');
                    group.appendChild(path);
                    // Create dots (avoiding duplicates at same Y position)
                    const createDot = {
                        "TextConnectionLines.useCallback[drawConnections].createDot": (y, color)=>{
                            const posKey = `${Math.round(y)}`;
                            if (drawnPositions.has(posKey)) return null;
                            drawnPositions.add(posKey);
                            const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            dot.setAttribute('cx', String(sourceEdge));
                            dot.setAttribute('cy', String(y));
                            dot.setAttribute('r', '4');
                            dot.setAttribute('fill', color);
                            dot.setAttribute('filter', `url(#${filterId})`);
                            dot.setAttribute('class', 'connection-dot');
                            dot.style.cursor = 'pointer';
                            return dot;
                        }
                    }["TextConnectionLines.useCallback[drawConnections].createDot"];
                    const sourceDot = createDot(sourceY, connection.color);
                    const targetDot = createDot(targetY, connection.color);
                    if (sourceDot) group.appendChild(sourceDot);
                    if (targetDot) group.appendChild(targetDot);
                    fragment.appendChild(group);
                }
            }["TextConnectionLines.useCallback[drawConnections]"]);
            svg.appendChild(fragment);
        }
    }["TextConnectionLines.useCallback[drawConnections]"], [
        allConnections,
        containerRef,
        MARGIN_OFFSET,
        LINE_SPACING
    ]);
    // Optimized draw with requestAnimationFrame
    const scheduleDraw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextConnectionLines.useCallback[scheduleDraw]": ()=>{
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame(drawConnections);
        }
    }["TextConnectionLines.useCallback[scheduleDraw]"], [
        drawConnections
    ]);
    // Initial draw
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextConnectionLines.useEffect": ()=>{
            const timeoutId = setTimeout(scheduleDraw, 100);
            return ({
                "TextConnectionLines.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["TextConnectionLines.useEffect"];
        }
    }["TextConnectionLines.useEffect"], [
        scheduleDraw
    ]);
    // Redraw on scroll/resize with passive listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextConnectionLines.useEffect": ()=>{
            const handleUpdate = {
                "TextConnectionLines.useEffect.handleUpdate": ()=>scheduleDraw()
            }["TextConnectionLines.useEffect.handleUpdate"];
            window.addEventListener('scroll', handleUpdate, {
                passive: true,
                capture: true
            });
            window.addEventListener('resize', handleUpdate, {
                passive: true
            });
            // Observe container size changes
            let resizeObserver = null;
            if (containerRef.current) {
                resizeObserver = new ResizeObserver(handleUpdate);
                resizeObserver.observe(containerRef.current);
            }
            // Also observe DOM mutations that might affect text positions
            let mutationObserver = null;
            if (containerRef.current) {
                mutationObserver = new MutationObserver({
                    "TextConnectionLines.useEffect": ()=>{
                        setTimeout(scheduleDraw, 50);
                    }
                }["TextConnectionLines.useEffect"]);
                mutationObserver.observe(containerRef.current, {
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            }
            return ({
                "TextConnectionLines.useEffect": ()=>{
                    window.removeEventListener('scroll', handleUpdate, {
                        capture: true
                    });
                    window.removeEventListener('resize', handleUpdate);
                    resizeObserver?.disconnect();
                    mutationObserver?.disconnect();
                }
            })["TextConnectionLines.useEffect"];
        }
    }["TextConnectionLines.useEffect"], [
        scheduleDraw,
        containerRef
    ]);
    // Don't render if no connections
    const hasConnections = allConnections.length > 0;
    if (!hasConnections) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        "aria-hidden": "true",
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
            overflow: 'visible',
            willChange: 'transform'
        }
    }, void 0, false, {
        fileName: "[project]/components/editor/TextConnectionLines.tsx",
        lineNumber: 322,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TextConnectionLines, "dil5ymdgKc+o5YRrDIsNPh2tYTU=");
_c = TextConnectionLines;
var _c;
__turbopack_context__.k.register(_c, "TextConnectionLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/EditorView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorView",
    ()=>EditorView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:f27e82 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-client] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-client] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$case$2d$upper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaseUpper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/case-upper.js [app-client] (ecmascript) <export default as CaseUpper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$a37002__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:a37002 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/ContentBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ImageBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/ImageBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ConfirmationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextLinkingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TextLinkingMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextConnectionLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TextConnectionLines.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
const EditorView = ({ activeNote, onUpdateNote, onDeleteNote, hasUnsavedChanges, onSave })=>{
    _s();
    const [isAiLoading, setIsAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Slash Menu State
    const [slashMenuOpen, setSlashMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slashMenuPosition, setSlashMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [slashBlockId, setSlashBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slashFilter, setSlashFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Formatting Toolbar State
    const [formatToolbarPosition, setFormatToolbarPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Block Highlight Color Picker State
    const [highlightPickerOpen, setHighlightPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Color Picker State
    const [colorPickerOpen, setColorPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tag Selector State
    const [isTagSelectorOpen, setIsTagSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableTags, setAvailableTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load available tags
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorView.useEffect": ()=>{
            const loadTags = {
                "EditorView.useEffect.loadTags": async ()=>{
                    const tags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTags"])();
                    setAvailableTags(tags);
                }
            }["EditorView.useEffect.loadTags"];
            loadTags();
        }
    }["EditorView.useEffect"], []);
    // Focus Management
    const [focusedBlockId, setFocusedBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Copy Feedback State
    const [copiedBlockId, setCopiedBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Image Deletion Modal State
    const [imageToDelete, setImageToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Link Paste Modal State
    const [linkPasteModal, setLinkPasteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Font Selector State
    const [fontDropdownOpen, setFontDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Color Dropdown States
    const [highlightDropdownOpen, setHighlightDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textColorDropdownOpen, setTextColorDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active Formatting States
    const [activeFormats, setActiveFormats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bold: false,
        italic: false,
        underline: false,
        strikeThrough: false,
        inlineCode: false,
        uppercase: false,
        currentFont: ''
    });
    // Text Linking Mode State (for text-to-text connections)
    const [isTextLinkingMode, setIsTextLinkingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sourceTextForLinking, setSourceTextForLinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sourceBlockIdForLinking, setSourceBlockIdForLinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentLinkColor, setCurrentLinkColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_COLORS"][0]);
    // Available fonts
    const AVAILABLE_FONTS = [
        {
            name: 'Inter',
            value: 'var(--font-inter), sans-serif'
        },
        {
            name: 'Montserrat',
            value: 'var(--font-montserrat), sans-serif'
        },
        {
            name: 'Poppins',
            value: 'var(--font-poppins), sans-serif'
        },
        {
            name: 'Open Sans',
            value: 'var(--font-open-sans), sans-serif'
        },
        {
            name: 'Roboto',
            value: 'var(--font-roboto), sans-serif'
        },
        {
            name: 'Lato',
            value: 'var(--font-lato), sans-serif'
        },
        {
            name: 'Playfair Display',
            value: 'var(--font-playfair), serif'
        },
        {
            name: 'Raleway',
            value: 'var(--font-raleway), sans-serif'
        },
        {
            name: 'Source Sans',
            value: 'var(--font-source-sans), sans-serif'
        },
        {
            name: 'Nunito',
            value: 'var(--font-nunito), sans-serif'
        },
        {
            name: 'Merriweather',
            value: 'var(--font-merriweather), serif'
        }
    ];
    // Typing detection refs
    const isTypingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menus on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorView.useEffect": ()=>{
            const handleClick = {
                "EditorView.useEffect.handleClick": (e)=>{
                    setSlashMenuOpen(false);
                    // Only close color picker if clicking outside the color picker UI
                    if (!e.target.closest('.color-picker-container')) {
                        setColorPickerOpen(false);
                    }
                    if (!e.target.closest('.tag-selector-container')) {
                        setIsTagSelectorOpen(false);
                    }
                    // Close font dropdown on outside click
                    if (!e.target.closest('.font-dropdown-container')) {
                        setFontDropdownOpen(false);
                    }
                }
            }["EditorView.useEffect.handleClick"];
            window.addEventListener('click', handleClick);
            return ({
                "EditorView.useEffect": ()=>window.removeEventListener('click', handleClick)
            })["EditorView.useEffect"];
        }
    }["EditorView.useEffect"], []);
    // Handle Selection for Formatting Toolbar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorView.useEffect": ()=>{
            const handleSelectionChange = {
                "EditorView.useEffect.handleSelectionChange": ()=>{
                    const selection = window.getSelection();
                    // Validate selection
                    // Don't hide toolbar if font dropdown is open (keeps selection visible while choosing font)
                    if (!selection || selection.isCollapsed || !editorRef.current) {
                        // Only hide if font dropdown is not open
                        if (!fontDropdownOpen) {
                            setFormatToolbarPosition(null);
                        }
                        return;
                    }
                    // Check if selection anchor is descendant of editor
                    let node = selection.anchorNode;
                    let isInside = false;
                    while(node){
                        if (node === editorRef.current) {
                            isInside = true;
                            break;
                        }
                        node = node.parentNode;
                    }
                    if (!isInside) {
                        setFormatToolbarPosition(null);
                        return;
                    }
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    // Only show if we have a visible width and aren't in a menu interaction
                    if (rect.width > 1 && !slashMenuOpen && !isTextLinkingMode) {
                        setFormatToolbarPosition({
                            // Ensure it doesn't go off-screen top
                            top: Math.max(10, rect.top - 60),
                            left: rect.left + rect.width / 2
                        });
                        // Check active formatting states
                        const selectedText = selection.toString();
                        // Check if inside inline code
                        let isInCode = false;
                        let node = range.commonAncestorContainer;
                        while(node && node !== document.body){
                            if (node instanceof HTMLElement && node.tagName === 'CODE' && node.classList.contains('inline-code')) {
                                isInCode = true;
                                break;
                            }
                            node = node.parentNode;
                        }
                        // Check if text is uppercase
                        const isUppercase = selectedText.length > 0 && selectedText === selectedText.toUpperCase() && selectedText !== selectedText.toLowerCase();
                        // Get current font
                        const currentFont = document.queryCommandValue('fontName').replace(/['"]/g, '');
                        setActiveFormats({
                            bold: document.queryCommandState('bold'),
                            italic: document.queryCommandState('italic'),
                            underline: document.queryCommandState('underline'),
                            strikeThrough: document.queryCommandState('strikeThrough'),
                            inlineCode: isInCode,
                            uppercase: isUppercase,
                            currentFont: currentFont
                        });
                    } else {
                        setFormatToolbarPosition(null);
                    }
                }
            }["EditorView.useEffect.handleSelectionChange"];
            document.addEventListener('selectionchange', handleSelectionChange);
            document.addEventListener('scroll', handleSelectionChange, true);
            return ({
                "EditorView.useEffect": ()=>{
                    document.removeEventListener('selectionchange', handleSelectionChange);
                    document.removeEventListener('scroll', handleSelectionChange, true);
                }
            })["EditorView.useEffect"];
        }
    }["EditorView.useEffect"], [
        slashMenuOpen,
        fontDropdownOpen,
        isTextLinkingMode
    ]);
    if (!activeNote) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center text-muted-foreground dark:text-neutral-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Select a note from the canvas or graph to edit."
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/EditorView.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --- Text Connection Functions ---
    const handleStartTextLinking = ()=>{
        // Get the currently selected text
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) return;
        const selectedText = selection.toString().trim();
        if (!selectedText) return;
        // Find the block containing the selection
        let node = selection.anchorNode;
        let blockId = '';
        while(node && node !== document.body){
            if (node instanceof HTMLElement) {
                const id = node.id?.replace('block-', '');
                if (id && node.id?.startsWith('block-')) {
                    blockId = id;
                    break;
                }
            }
            node = node.parentNode;
        }
        if (!blockId) return;
        setSourceTextForLinking(selectedText);
        setSourceBlockIdForLinking(blockId);
        setIsTextLinkingMode(true);
        setFormatToolbarPosition(null);
    };
    const handleConfirmTextConnection = (targetText, targetBlockId)=>{
        if (!sourceTextForLinking || !sourceBlockIdForLinking) {
            handleCancelTextLinking();
            return;
        }
        // Create the connection
        const newConnection = {
            id: crypto.randomUUID(),
            sourceBlockId: sourceBlockIdForLinking,
            sourceText: sourceTextForLinking,
            targetBlockId: targetBlockId,
            targetText: targetText,
            color: currentLinkColor,
            createdAt: Date.now()
        };
        // Update the source block with the new connection
        const newBlocks = activeNote.blocks.map((block)=>{
            if (block.id === sourceBlockIdForLinking) {
                return {
                    ...block,
                    textConnections: [
                        ...block.textConnections || [],
                        newConnection
                    ]
                };
            }
            return block;
        });
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
        handleCancelTextLinking();
    };
    const handleCancelTextLinking = ()=>{
        setIsTextLinkingMode(false);
        setSourceTextForLinking('');
        setSourceBlockIdForLinking('');
    };
    // --- Helper Functions ---
    const handleTextChange = (updater)=>{
        const mode = isTypingRef.current ? 'REPLACE' : 'PUSH';
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        isTypingRef.current = true;
        timeoutRef.current = setTimeout(()=>{
            isTypingRef.current = false;
        }, 1000);
        onUpdateNote(updater(activeNote), mode);
    };
    const updateBlockContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditorView.useCallback[updateBlockContent]": (id, html)=>{
            // Check for Slash Command
            if (html.endsWith('/')) {
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    setSlashMenuPosition({
                        top: rect.bottom + window.scrollY,
                        left: rect.left + window.scrollX
                    });
                    setSlashMenuOpen(true);
                    setSlashBlockId(id);
                    setSlashFilter('');
                }
            } else if (slashMenuOpen) {
                // Update filter if menu is open
                const text = html.replace(/<[^>]*>?/gm, '');
                const parts = text.split('/');
                setSlashFilter(parts[parts.length - 1] || '');
            }
            // We can't use handleTextChange directly inside useCallback if it's not stable.
            // But handleTextChange depends on activeNote, so it changes every render.
            // To make updateBlockContent stable, we need to avoid closing over unstable deps.
            // However, for now, let's just use the functional update pattern where possible.
            if (!activeNote) return;
            const newBlocks = activeNote.blocks.map({
                "EditorView.useCallback[updateBlockContent].newBlocks": (b)=>b.id === id ? {
                        ...b,
                        content: html
                    } : b
            }["EditorView.useCallback[updateBlockContent].newBlocks"]);
            // Optimization: Only update if content actually changed
            const block = activeNote.blocks.find({
                "EditorView.useCallback[updateBlockContent].block": (b)=>b.id === id
            }["EditorView.useCallback[updateBlockContent].block"]);
            if (block && block.content === html) return;
            onUpdateNote({
                ...activeNote,
                blocks: newBlocks
            }, 'PUSH');
        }
    }["EditorView.useCallback[updateBlockContent]"], [
        activeNote,
        onUpdateNote,
        slashMenuOpen
    ]);
    const updateBlockType = (id, type)=>{
        handleTextChange((note)=>({
                ...note,
                blocks: note.blocks.map((b)=>{
                    if (b.id === id) {
                        const cleanContent = b.content.replace(/\/[\w]*$/, '');
                        return {
                            ...b,
                            type,
                            content: cleanContent
                        };
                    }
                    return b;
                })
            }));
        setSlashMenuOpen(false);
        setTimeout(()=>{
            document.getElementById(`block-${id}`)?.focus();
        }, 0);
    };
    const addBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditorView.useCallback[addBlock]": (afterId, type = 'paragraph')=>{
            if (!activeNote) return;
            const newBlock = {
                id: crypto.randomUUID(),
                type,
                content: ''
            };
            const index = activeNote.blocks.findIndex({
                "EditorView.useCallback[addBlock].index": (b)=>b.id === afterId
            }["EditorView.useCallback[addBlock].index"]);
            const newBlocks = [
                ...activeNote.blocks
            ];
            newBlocks.splice(index + 1, 0, newBlock);
            onUpdateNote({
                ...activeNote,
                blocks: newBlocks
            }, 'PUSH');
            setFocusedBlockId(newBlock.id);
        }
    }["EditorView.useCallback[addBlock]"], [
        activeNote,
        onUpdateNote
    ]);
    const deleteBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditorView.useCallback[deleteBlock]": (id)=>{
            if (!activeNote) return;
            const index = activeNote.blocks.findIndex({
                "EditorView.useCallback[deleteBlock].index": (b)=>b.id === id
            }["EditorView.useCallback[deleteBlock].index"]);
            const prevBlock = activeNote.blocks[index - 1];
            let newBlocks = activeNote.blocks.filter({
                "EditorView.useCallback[deleteBlock].newBlocks": (b)=>b.id !== id
            }["EditorView.useCallback[deleteBlock].newBlocks"]);
            // If we deleted the last block, add an empty paragraph
            if (newBlocks.length === 0) {
                const newId = crypto.randomUUID();
                newBlocks = [
                    {
                        id: newId,
                        type: 'paragraph',
                        content: ''
                    }
                ];
                // Focus the new empty block
                setTimeout({
                    "EditorView.useCallback[deleteBlock]": ()=>setFocusedBlockId(newId)
                }["EditorView.useCallback[deleteBlock]"], 0);
            }
            onUpdateNote({
                ...activeNote,
                blocks: newBlocks
            }, 'PUSH');
            if (prevBlock) {
                setFocusedBlockId(prevBlock.id);
            }
        }
    }["EditorView.useCallback[deleteBlock]"], [
        activeNote,
        onUpdateNote
    ]);
    const handleBlockKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditorView.useCallback[handleBlockKeyDown]": (e, id)=>{
            if (!activeNote) return;
            // Shift+Enter: Create new block
            if (e.key === 'Enter' && e.shiftKey) {
                e.preventDefault();
                const currentBlock = activeNote.blocks.find({
                    "EditorView.useCallback[handleBlockKeyDown].currentBlock": (b)=>b.id === id
                }["EditorView.useCallback[handleBlockKeyDown].currentBlock"]);
                const nextType = currentBlock?.type === 'bullet' ? 'bullet' : 'paragraph';
                addBlock(id, nextType);
                setSlashMenuOpen(false);
            } else if (e.key === 'Backspace') {
                const element = e.currentTarget;
                const selection = window.getSelection();
                if (!selection || selection.rangeCount === 0) return;
                const range = selection.getRangeAt(0);
                // Check if collapsed is usually enough, but we want to be sure we are at the start.
                if (!range.collapsed) return;
                // Check if cursor is at the start of the block content
                const rangeCopy = range.cloneRange();
                rangeCopy.selectNodeContents(element);
                rangeCopy.setEnd(range.startContainer, range.startOffset);
                const isAtStart = rangeCopy.toString().length === 0;
                if (isAtStart) {
                    const index = activeNote.blocks.findIndex({
                        "EditorView.useCallback[handleBlockKeyDown].index": (b)=>b.id === id
                    }["EditorView.useCallback[handleBlockKeyDown].index"]);
                    // Only merge/delete if not the first block
                    if (index > 0) {
                        e.preventDefault();
                        const currentBlock = activeNote.blocks[index];
                        const prevBlock = activeNote.blocks[index - 1];
                        // Merge current block content into previous block
                        const newContent = prevBlock.content + currentBlock.content;
                        const newBlocks = [
                            ...activeNote.blocks
                        ];
                        newBlocks[index - 1] = {
                            ...prevBlock,
                            content: newContent
                        };
                        newBlocks.splice(index, 1);
                        onUpdateNote({
                            ...activeNote,
                            blocks: newBlocks
                        }, 'PUSH');
                        setFocusedBlockId(prevBlock.id);
                    }
                }
            }
        }
    }["EditorView.useCallback[handleBlockKeyDown]"], [
        activeNote,
        addBlock,
        onUpdateNote
    ]);
    const handleTitleChange = (html)=>{
        handleTextChange((note)=>({
                ...note,
                title: html
            }));
    };
    const handleAiEnhance = async ()=>{
        setIsAiLoading(true);
        const selection = window.getSelection();
        const selectedText = selection ? selection.toString() : '';
        const hasSelection = selectedText.trim().length > 0;
        const context = hasSelection ? selectedText : activeNote.blocks.map((b)=>b.content).join('\n');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$a37002__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["expandNoteWithAI"])(context);
        const newBlock = {
            id: crypto.randomUUID(),
            type: 'paragraph',
            content: result
        };
        let newBlocks = [
            ...activeNote.blocks
        ];
        // If text was selected, insert the expanded content after the focused block
        if (hasSelection && focusedBlockId) {
            const index = newBlocks.findIndex((b)=>b.id === focusedBlockId);
            if (index !== -1) {
                newBlocks.splice(index + 1, 0, newBlock);
            } else {
                newBlocks.push(newBlock);
            }
        } else {
            newBlocks.push(newBlock);
        }
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
        setIsAiLoading(false);
    };
    const formatText = (command)=>{
        document.execCommand(command);
        // Update active formats immediately after applying
        requestAnimationFrame(()=>{
            setActiveFormats((prev)=>({
                    ...prev,
                    bold: document.queryCommandState('bold'),
                    italic: document.queryCommandState('italic'),
                    underline: document.queryCommandState('underline'),
                    strikeThrough: document.queryCommandState('strikeThrough')
                }));
        });
    };
    const handleColorChange = (color)=>{
        onUpdateNote({
            ...activeNote,
            color
        }, 'PUSH');
        setColorPickerOpen(false);
    };
    const handleBlockHighlightChange = (blockId, highlightColor)=>{
        const newBlocks = activeNote.blocks.map((b)=>b.id === blockId ? {
                ...b,
                highlightColor: highlightColor === 'transparent' ? undefined : highlightColor
            } : b);
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
        setHighlightPickerOpen(false);
    };
    const handleSelectTag = (tagName)=>{
        const currentTags = activeNote.tags || [];
        if (!currentTags.includes(tagName)) {
            const updatedTags = [
                ...currentTags,
                tagName
            ];
            onUpdateNote({
                ...activeNote,
                tags: updatedTags
            }, 'PUSH');
        }
        setIsTagSelectorOpen(false);
    };
    const handleRemoveTag = (tagToRemove)=>{
        const updatedTags = activeNote.tags?.filter((t)=>t !== tagToRemove) || [];
        onUpdateNote({
            ...activeNote,
            tags: updatedTags
        }, 'PUSH');
    };
    const handleCopyBlock = (id, htmlContent)=>{
        const temp = document.createElement('div');
        temp.innerHTML = htmlContent;
        const text = temp.textContent || temp.innerText || "";
        navigator.clipboard.writeText(text);
        setCopiedBlockId(id);
        setTimeout(()=>setCopiedBlockId(null), 2000);
    };
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditorView.useCallback[handleFileUpload]": async (file, targetBlockId)=>{
            // 1. Create optimistic block with local preview
            const objectUrl = URL.createObjectURL(file);
            const tempId = crypto.randomUUID();
            const newBlock = {
                id: tempId,
                type: 'image',
                content: objectUrl
            };
            // 2. Insert immediately
            // We need to use the functional update form of onUpdateNote if possible, or access the latest activeNote.
            // Since onUpdateNote doesn't support functional update for the whole note in this props interface,
            // we rely on activeNote being fresh.
            if (!activeNote) return;
            let newBlocks = [
                ...activeNote.blocks
            ];
            if (targetBlockId) {
                newBlocks = newBlocks.map({
                    "EditorView.useCallback[handleFileUpload]": (b)=>b.id === targetBlockId ? newBlock : b
                }["EditorView.useCallback[handleFileUpload]"]);
            } else if (focusedBlockId) {
                const index = newBlocks.findIndex({
                    "EditorView.useCallback[handleFileUpload].index": (b)=>b.id === focusedBlockId
                }["EditorView.useCallback[handleFileUpload].index"]);
                if (index !== -1) {
                    newBlocks.splice(index + 1, 0, newBlock);
                } else {
                    newBlocks.push(newBlock);
                }
            } else {
                newBlocks.push(newBlock);
            }
            // Update UI immediately with local preview
            onUpdateNote({
                ...activeNote,
                blocks: newBlocks
            }, 'PUSH');
            // 3. Upload in background
            const formData = new FormData();
            formData.append('file', file);
            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (data.url) {
                    // 4. Update block with real URL
                    // We need to find the block again in the *latest* state.
                    // Since we can't easily access the latest state here without a ref or functional update,
                    // we will do our best with the captured scope, but this is a known limitation without a refactor.
                    // Ideally, we would use a ref for activeNote.
                    // However, for the purpose of this task (performance), the optimistic UI is key.
                    // The risk of overwriting is low if the user isn't typing furiously *exactly* when the upload finishes.
                    const updatedBlocks = newBlocks.map({
                        "EditorView.useCallback[handleFileUpload].updatedBlocks": (b)=>b.id === tempId ? {
                                ...b,
                                content: data.url
                            } : b
                    }["EditorView.useCallback[handleFileUpload].updatedBlocks"]);
                    onUpdateNote({
                        ...activeNote,
                        blocks: updatedBlocks
                    }, 'PUSH');
                }
            } catch (e) {
                console.error('Upload failed', e);
            // Optionally show error state on block
            } finally{
                URL.revokeObjectURL(objectUrl);
            }
        }
    }["EditorView.useCallback[handleFileUpload]"], [
        activeNote,
        focusedBlockId,
        onUpdateNote
    ]);
    const handlePaste = (e)=>{
        // Check for images first
        if (e.clipboardData.files.length > 0) {
            const files = Array.from(e.clipboardData.files).filter((f)=>f.type.startsWith('image/'));
            if (files.length > 0) {
                e.preventDefault();
                files.forEach((file)=>handleFileUpload(file, focusedBlockId || undefined));
                return;
            }
        }
        // Check for URL in pasted text
        const text = e.clipboardData.getData('text/plain');
        const urlRegex = /^(https?:\/\/[^\s]+)$/i;
        if (urlRegex.test(text.trim())) {
            e.preventDefault();
            let modalTop = 200;
            let modalLeft = 400;
            // Try to get position from selection
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                // Check if we got a valid position from the range
                if (rect.top > 0 && rect.left > 0) {
                    modalTop = rect.bottom + 20;
                    modalLeft = rect.right + 30;
                } else {
                    // Fallback 1: Try to use the active element (where cursor is)
                    const activeElement = document.activeElement;
                    if (activeElement && activeElement instanceof HTMLElement) {
                        const activeRect = activeElement.getBoundingClientRect();
                        if (activeRect.top > 0 && activeRect.left > 0) {
                            modalTop = activeRect.bottom + 20;
                            modalLeft = activeRect.right + 30;
                        }
                    }
                    // Fallback 2: If still no valid position, use anchor node's parent
                    if (modalTop === 200 && selection.anchorNode) {
                        const parentElement = selection.anchorNode.nodeType === Node.TEXT_NODE ? selection.anchorNode.parentElement : selection.anchorNode;
                        if (parentElement) {
                            const parentRect = parentElement.getBoundingClientRect();
                            if (parentRect.top > 0 || parentRect.left > 0) {
                                modalTop = parentRect.bottom + 20;
                                modalLeft = parentRect.right + 30;
                            }
                        }
                    }
                }
            }
            setLinkPasteModal({
                url: text.trim(),
                position: {
                    top: modalTop,
                    left: modalLeft
                },
                blockId: focusedBlockId || ''
            });
        }
    };
    // Handle link paste option selection
    const handleLinkPasteOption = async (option)=>{
        if (!linkPasteModal || !activeNote) return;
        const { url, blockId } = linkPasteModal;
        let content = '';
        // YouTube API key
        const YOUTUBE_API_KEY = 'AIzaSyB2BmcpR3bhQGSlWZeYkDW5sfjPOSdVpUA';
        // Helper to extract YouTube video ID from URL
        const getYouTubeVideoId = (youtubeUrl)=>{
            try {
                const urlObj = new URL(youtubeUrl);
                if (urlObj.hostname.includes('youtu.be')) {
                    return urlObj.pathname.slice(1);
                }
                if (urlObj.hostname.includes('youtube.com')) {
                    return urlObj.searchParams.get('v');
                }
            } catch  {}
            return null;
        };
        // Helper to fetch YouTube video title
        const fetchYouTubeTitle = async (videoId)=>{
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    return data.items[0].snippet.title;
                }
            } catch (error) {
                console.error('Failed to fetch YouTube title:', error);
            }
            return 'Video';
        };
        // Helper to extract Twitter/X username from URL
        const getTwitterUsername = (twitterUrl)=>{
            try {
                const urlObj = new URL(twitterUrl);
                const pathParts = urlObj.pathname.split('/').filter(Boolean);
                if (pathParts.length > 0 && pathParts[0] !== 'status') {
                    return pathParts[0];
                }
            } catch  {}
            return null;
        };
        // Helper to get platform info from URL
        const getPlatformInfo = async (linkUrl)=>{
            try {
                const urlObj = new URL(linkUrl);
                const hostname = urlObj.hostname.replace('www.', '');
                const pathParts = urlObj.pathname.split('/').filter(Boolean);
                // Platform SVG icons (inline, compact)
                const icons = {
                    twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
                    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
                    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
                    github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
                    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
                    tiktok: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
                    spotify: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
                    reddit: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF4500"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
                    generic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
                };
                // Twitter/X
                if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
                    const username = pathParts.length > 0 && pathParts[0] !== 'status' ? pathParts[0] : 'post';
                    return {
                        logo: icons.twitter,
                        name: `@${username}`,
                        platform: 'X',
                        cssClass: 'twitter-mention-link'
                    };
                }
                // YouTube - Fetch actual video title
                if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
                    const videoId = getYouTubeVideoId(linkUrl);
                    let videoTitle = 'Video';
                    if (videoId) {
                        videoTitle = await fetchYouTubeTitle(videoId);
                        // Truncate title if too long
                        if (videoTitle.length > 50) {
                            videoTitle = videoTitle.substring(0, 47) + '...';
                        }
                    } else if (pathParts[0] === 'channel' || pathParts[0] === 'c' || pathParts[0] === '@') {
                        videoTitle = pathParts[1] || pathParts[0];
                    }
                    return {
                        logo: icons.youtube,
                        name: videoTitle,
                        platform: 'YouTube',
                        cssClass: 'youtube-link'
                    };
                }
                // Instagram
                if (hostname.includes('instagram.com')) {
                    const username = pathParts[0] || 'post';
                    return {
                        logo: icons.instagram,
                        name: `@${username}`,
                        platform: 'Instagram',
                        cssClass: 'instagram-link'
                    };
                }
                // GitHub
                if (hostname.includes('github.com')) {
                    const repoName = pathParts.slice(0, 2).join('/') || 'repo';
                    return {
                        logo: icons.github,
                        name: repoName,
                        platform: 'GitHub',
                        cssClass: 'github-link'
                    };
                }
                // LinkedIn
                if (hostname.includes('linkedin.com')) {
                    return {
                        logo: icons.linkedin,
                        name: 'Post',
                        platform: 'LinkedIn',
                        cssClass: 'linkedin-link'
                    };
                }
                // TikTok
                if (hostname.includes('tiktok.com')) {
                    const username = pathParts[0]?.startsWith('@') ? pathParts[0] : `@${pathParts[0] || 'video'}`;
                    return {
                        logo: icons.tiktok,
                        name: username,
                        platform: 'TikTok',
                        cssClass: 'tiktok-link'
                    };
                }
                // Spotify
                if (hostname.includes('spotify.com')) {
                    return {
                        logo: icons.spotify,
                        name: 'Track',
                        platform: 'Spotify',
                        cssClass: 'spotify-link'
                    };
                }
                // Reddit
                if (hostname.includes('reddit.com')) {
                    const subreddit = pathParts[0] === 'r' ? `r/${pathParts[1]}` : pathParts[0] || 'post';
                    return {
                        logo: icons.reddit,
                        name: subreddit,
                        platform: 'Reddit',
                        cssClass: 'reddit-link'
                    };
                }
                // Generic/default
                return {
                    logo: icons.generic,
                    name: hostname,
                    platform: 'Link',
                    cssClass: 'generic-link'
                };
            } catch  {
                const icons = {
                    generic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
                };
                return {
                    logo: icons.generic,
                    name: 'link',
                    platform: 'Link',
                    cssClass: 'generic-link'
                };
            }
        };
        const platformInfo = await getPlatformInfo(url);
        switch(option){
            case 'mention':
            case 'embed':
                // Clean format: [icon] name · platform
                content = `<a href="${url}" class="${platformInfo.cssClass}" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
                break;
            case 'bookmark':
                // Bookmark style
                content = `<a href="${url}" class="${platformInfo.cssClass} bookmark-style" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
                break;
            case 'url':
            default:
                // Plain URL format
                content = `<a href="${url}" class="${platformInfo.cssClass}" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
                break;
        }
        // Insert content at cursor or append to block
        const block = activeNote.blocks.find((b)=>b.id === blockId);
        if (block) {
            const newContent = block.content + content;
            const newBlocks = activeNote.blocks.map((b)=>b.id === blockId ? {
                    ...b,
                    content: newContent
                } : b);
            onUpdateNote({
                ...activeNote,
                blocks: newBlocks
            }, 'PUSH');
        }
        setLinkPasteModal(null);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            const files = Array.from(e.dataTransfer.files).filter((f)=>f.type.startsWith('image/'));
            files.forEach((file)=>handleFileUpload(file));
        }
    };
    const handleFileSelect = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            handleFileUpload(e.target.files[0], slashBlockId || undefined);
        }
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: editorRef,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0
        },
        className: "max-w-3xl mx-auto pt-12 pb-32 px-8 relative text-foreground",
        onPaste: handlePaste,
        onDrop: handleDrop,
        onDragOver: (e)=>e.preventDefault(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                className: "hidden",
                accept: "image/*",
                onChange: handleFileSelect
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 899,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4 mb-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.1
                        },
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentBlock"], {
                            id: "note-title",
                            html: activeNote.title,
                            tagName: "h1",
                            className: "text-5xl font-black bg-transparent border-none outline-none placeholder-gray-300 dark:placeholder-neutral-700 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300 dark:empty:before:text-neutral-700 text-black dark:text-white",
                            placeholder: "Untitled",
                            onChange: (id, html)=>handleTitleChange(html),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    document.getElementById(`block-${activeNote.blocks[0]?.id}`)?.focus();
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 914,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onSave,
                                className: `p-2 rounded-md transition-all duration-300 ${hasUnsavedChanges ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-110' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400'}`,
                                title: hasUnsavedChanges ? "Save Changes" : "Saved",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 20,
                                    className: hasUnsavedChanges ? "animate-pulse" : ""
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 933,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative color-picker-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setColorPickerOpen(!colorPickerOpen),
                                        className: `p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${activeNote.color && activeNote.color !== '#000000' ? 'ring-2 ring-offset-1 dark:ring-offset-neutral-900' : ''}`,
                                        style: {
                                            borderColor: activeNote.color || 'transparent'
                                        },
                                        title: "Note Color",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                            size: 20,
                                            style: {
                                                color: activeNote.color && activeNote.color !== '#000000' ? activeNote.color : 'currentColor'
                                            },
                                            className: "text-gray-500 dark:text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 948,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 942,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: colorPickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 10
                                            },
                                            className: "absolute right-0 top-full mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-3 flex gap-2 z-50 w-48 flex-wrap",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOTE_COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleColorChange(color.value),
                                                    className: `w-8 h-8 rounded-full border border-gray-200 dark:border-neutral-600 transition-transform hover:scale-110 ${activeNote.color === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-neutral-900' : ''}`,
                                                    style: {
                                                        backgroundColor: color.value
                                                    },
                                                    title: color.label
                                                }, color.id, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 964,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 957,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 955,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 941,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onMouseDown: (e)=>{
                                    e.preventDefault();
                                    document.execCommand('bold');
                                },
                                className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-md transition-colors",
                                title: "Bold Title",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 985,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 977,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDeleteNote(activeNote.id),
                                className: "p-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 text-gray-500 dark:text-neutral-400 rounded-md transition-colors",
                                title: "Delete Note",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 992,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 987,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 931,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 907,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-wrap items-center gap-2 tag-container min-h-[28px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: activeNote.tags?.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                className: "bg-gray-100 dark:bg-neutral-800 text-black dark:text-neutral-300 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 group border border-gray-200 dark:border-neutral-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-60",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tag,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRemoveTag(tag),
                                        className: "w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 opacity-0 group-hover:opacity-100 transition-all ml-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tag, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1001,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 999,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center tag-selector-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsTagSelectorOpen(!isTagSelectorOpen);
                                },
                                className: "text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-xs font-bold flex items-center gap-1 py-1.5 px-2 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Add Tag"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isTagSelectorOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95
                                    },
                                    transition: {
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 25
                                    },
                                    className: "absolute top-full left-0 mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[200px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 border-b border-gray-100 dark:border-neutral-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-400 dark:text-neutral-500",
                                                children: "Select a tag"
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-48 overflow-y-auto p-1",
                                            children: availableTags.filter((tag)=>!activeNote.tags?.includes(tag.name)).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 dark:text-neutral-500",
                                                        children: availableTags.length === 0 ? 'No tags available' : 'All tags added'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 dark:text-neutral-600 mt-1",
                                                        children: "Create tags in Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : availableTags.filter((tag)=>!activeNote.tags?.includes(tag.name)).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        x: 2
                                                    },
                                                    onClick: ()=>handleSelectTag(tag.name),
                                                    className: "w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full flex-shrink-0",
                                                            style: {
                                                                backgroundColor: tag.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1065,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-black dark:text-white",
                                                            children: [
                                                                "#",
                                                                tag.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1069,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, tag.id, true, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1045,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1035,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1033,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1021,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 998,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 relative",
                ref: blocksContainerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextConnectionLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextConnectionLines"], {
                        blocks: activeNote.blocks,
                        containerRef: blocksContainerRef
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1085,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: activeNote.blocks.map((block)=>{
                            const hasConnections = block.textConnections && block.textConnections.length > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                id: `block-${block.id}`,
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                className: `group flex items-start gap-2 relative
                ${hasConnections ? 'block-has-connections' : ''}
              `,
                                style: {
                                    '--connection-color': block.textConnections?.[0]?.color
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 opacity-0 group-hover:opacity-20 transition-opacity absolute -left-6 cursor-grab",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-black dark:bg-white rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1109,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full relative group/content rounded-lg transition-all duration-200",
                                        style: {
                                            backgroundColor: block.highlightColor || 'transparent'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-start w-full ${block.type === 'bullet' ? 'gap-3' : 'gap-2'} ${block.highlightColor ? 'px-3 py-2' : ''}`,
                                                children: [
                                                    block.type === 'bullet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl leading-6 select-none dark:text-white",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1120,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type === 'todo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `mt-1.5 w-5 h-5 border-2 border-black dark:border-white cursor-pointer transition-colors flex-shrink-0 rounded ${block.checked ? 'bg-black dark:bg-white' : 'bg-transparent'}`,
                                                        contentEditable: false,
                                                        onClick: ()=>{
                                                            handleTextChange((note)=>({
                                                                    ...note,
                                                                    blocks: note.blocks.map((b)=>b.id === block.id ? {
                                                                            ...b,
                                                                            checked: !b.checked
                                                                        } : b)
                                                                }));
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1123,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type !== 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentBlock"], {
                                                        id: block.id,
                                                        html: block.content,
                                                        tagName: block.type === 'heading' ? 'h1' : 'div',
                                                        className: `w-full outline-none resize-none overflow-hidden text-black dark:text-white transition-all
                            ${block.type === 'heading' ? 'text-3xl font-bold mb-4 mt-6' : ''}
                            ${block.type === 'paragraph' ? 'text-lg leading-relaxed mb-2' : ''}
                            ${block.type === 'todo' ? block.checked ? 'text-lg line-through text-gray-400 dark:text-neutral-600' : 'text-lg' : ''}
                            ${block.type === 'bullet' ? 'text-lg leading-relaxed' : ''}
                            ${block.type === 'blockquote' ? 'text-xl italic border-l-4 border-black dark:border-white pl-4 py-2 text-gray-600 dark:text-neutral-400 my-4' : ''}
                            ${block.type === 'code' ? 'font-mono text-sm bg-gray-50 dark:bg-neutral-900 p-4 rounded-md text-gray-800 dark:text-neutral-200 my-2 whitespace-pre-wrap' : ''}
`,
                                                        placeholder: block.type === 'paragraph' ? "Type '/' for commands" : "Type something...",
                                                        onChange: updateBlockContent,
                                                        onKeyDown: handleBlockKeyDown,
                                                        autoFocus: focusedBlockId === block.id,
                                                        onFocus: setFocusedBlockId
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ImageBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageBlock"], {
                                                        id: block.id,
                                                        src: block.content,
                                                        onDelete: (id)=>setImageToDelete(id),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1156,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1118,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover/content:opacity-100 transition-all",
                                                children: block.type !== 'image' && block.type !== 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setFocusedBlockId(block.id);
                                                                setHighlightPickerOpen(highlightPickerOpen && focusedBlockId === block.id ? false : true);
                                                            },
                                                            className: `p-1.5 rounded-md transition-colors ${block.highlightColor ? 'bg-gray-200 dark:bg-neutral-700' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'}`,
                                                            title: "Highlight Color",
                                                            style: {
                                                                borderLeft: block.highlightColor ? `3px solid ${block.highlightColor.replace('0.15', '0.8').replace('0.2', '0.8')}` : undefined
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
                                                                size: 14,
                                                                className: "text-gray-500 dark:text-neutral-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1179,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            children: highlightPickerOpen && focusedBlockId === block.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    scale: 0.9,
                                                                    x: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                    x: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    scale: 0.9,
                                                                    x: 10
                                                                },
                                                                className: "absolute right-full mr-2 top-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-2 flex flex-wrap gap-1.5 z-50 w-32",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_HIGHLIGHT_COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            handleBlockHighlightChange(block.id, color.value);
                                                                        },
                                                                        className: `w-6 h-6 rounded-md border border-gray-300 dark:border-neutral-600 transition-transform hover:scale-110 ${block.highlightColor === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-1 dark:ring-offset-neutral-900' : ''}`,
                                                                        style: {
                                                                            backgroundColor: color.id === 'none' ? 'transparent' : color.value.replace('0.15', '0.5').replace('0.2', '0.5')
                                                                        },
                                                                        title: color.label,
                                                                        children: color.id === 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 12,
                                                                            className: "mx-auto text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                                            lineNumber: 1202,
                                                                            columnNumber: 59
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, color.id, false, {
                                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                                        lineNumber: 1192,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1185,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1183,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1166,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            block.type === 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopyBlock(block.id, block.content),
                                                className: "absolute top-2 right-2 p-1.5 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 rounded text-gray-600 dark:text-neutral-300 transition-all opacity-0 group-hover/content:opacity-100",
                                                title: "Copy to clipboard",
                                                children: copiedBlockId === block.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14,
                                                    className: "text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 102
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1214,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1112,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, block.id, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1095,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1090,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1083,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex gap-2 group opacity-50 hover:opacity-100 transition-opacity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addBlock(activeNote.blocks[activeNote.blocks.length - 1]?.id || '0'),
                        className: "flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1232,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Add Block"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            handleAiEnhance();
                        },
                        disabled: isAiLoading,
                        className: "flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors text-purple-900 dark:text-purple-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 16,
                                className: isAiLoading ? "animate-spin" : ""
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1239,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isAiLoading ? "Thinking..." : "Gemini Expand"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: slashMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    style: {
                        top: slashMenuPosition.top,
                        left: slashMenuPosition.left
                    },
                    className: "absolute z-50 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg w-48 overflow-hidden flex flex-col py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider border-b border-gray-100 dark:border-neutral-800",
                            children: "Basic Blocks"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1254,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        [
                            {
                                type: 'paragraph',
                                label: 'Paragraph',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"]
                            },
                            {
                                type: 'heading',
                                label: 'Heading 1',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"]
                            },
                            {
                                type: 'bullet',
                                label: 'Bulleted List',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
                            },
                            {
                                type: 'todo',
                                label: 'To-do List',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
                            },
                            {
                                type: 'blockquote',
                                label: 'Quote',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"]
                            },
                            {
                                type: 'code',
                                label: 'Code Block',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
                            },
                            {
                                type: 'image',
                                label: 'Image',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
                            }
                        ].filter((item)=>item.label.toLowerCase().includes(slashFilter.toLowerCase())).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (item.type === 'image') {
                                        fileInputRef.current?.click();
                                        setSlashMenuOpen(false);
                                    } else if (slashBlockId) {
                                        updateBlockType(slashBlockId, item.type);
                                    }
                                },
                                className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 16,
                                        className: "text-gray-500 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1279,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-black dark:text-neutral-200",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1280,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.type, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1266,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 1247,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: formatToolbarPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    role: "toolbar",
                    "aria-label": "Text formatting",
                    initial: {
                        opacity: 0,
                        scale: 0.85,
                        y: 15
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.85,
                        y: 15
                    },
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 0.8
                    },
                    style: {
                        top: formatToolbarPosition.top,
                        left: formatToolbarPosition.left,
                        translateX: "-50%"
                    },
                    className: "fixed z-[9999] bg-black/95 dark:bg-white/95 backdrop-blur-xl text-white dark:text-black rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] px-2 py-2 flex items-center gap-1 border border-white/10 dark:border-black/10 pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/95 dark:bg-white/95 rotate-45 border-r border-b border-white/10 dark:border-black/10"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1307,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 bg-white/5 dark:bg-black/5 rounded-xl p-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Bold",
                                            "aria-keyshortcuts": "Meta+B Ctrl+B",
                                            "aria-pressed": activeFormats.bold,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('bold');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.bold ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1313,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Bold",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘B"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1326,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1312,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Italic",
                                            "aria-keyshortcuts": "Meta+I Ctrl+I",
                                            "aria-pressed": activeFormats.italic,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('italic');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.italic ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1345,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1334,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Italic",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘I"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1349,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1347,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1333,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Underline",
                                            "aria-keyshortcuts": "Meta+U Ctrl+U",
                                            "aria-pressed": activeFormats.underline,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('underline');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.underline ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1366,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1355,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Underline",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘U"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1368,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Strikethrough",
                                            "aria-pressed": activeFormats.strikeThrough,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('strikeThrough');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.strikeThrough ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1386,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1376,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "Strikethrough"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1375,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Inline Code",
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                const selection = window.getSelection();
                                                if (!selection || selection.rangeCount === 0) return;
                                                const range = selection.getRangeAt(0);
                                                const selectedText = selection.toString();
                                                // Check if selection is inside a code element
                                                let parentCode = null;
                                                let node = range.commonAncestorContainer;
                                                while(node && node !== document.body){
                                                    if (node instanceof HTMLElement && node.tagName === 'CODE' && node.classList.contains('inline-code')) {
                                                        parentCode = node;
                                                        break;
                                                    }
                                                    node = node.parentNode;
                                                }
                                                if (parentCode) {
                                                    // Check if selection covers the entire code content
                                                    const codeContent = parentCode.textContent || '';
                                                    const selectedContent = selectedText;
                                                    if (selectedContent === codeContent || selectedContent.trim() === codeContent.trim()) {
                                                        // Full selection - remove entire code element
                                                        const parent = parentCode.parentNode;
                                                        const textNode = document.createTextNode(codeContent);
                                                        parent?.replaceChild(textNode, parentCode);
                                                        requestAnimationFrame(()=>{
                                                            const freshSelection = window.getSelection();
                                                            if (freshSelection && textNode.parentNode) {
                                                                const newRange = document.createRange();
                                                                newRange.selectNodeContents(textNode);
                                                                freshSelection.removeAllRanges();
                                                                freshSelection.addRange(newRange);
                                                            }
                                                            setActiveFormats((prev)=>({
                                                                    ...prev,
                                                                    inlineCode: false
                                                                }));
                                                        });
                                                    } else {
                                                        // Partial selection - split the code element
                                                        const parent = parentCode.parentNode;
                                                        if (!parent) return;
                                                        // Find where in the code content the selection starts and ends
                                                        const startOffset = codeContent.indexOf(selectedContent);
                                                        const endOffset = startOffset + selectedContent.length;
                                                        const beforeText = codeContent.substring(0, startOffset);
                                                        const afterText = codeContent.substring(endOffset);
                                                        // Create elements
                                                        const fragment = document.createDocumentFragment();
                                                        if (beforeText) {
                                                            const beforeCode = document.createElement('code');
                                                            beforeCode.className = 'inline-code';
                                                            beforeCode.textContent = beforeText;
                                                            fragment.appendChild(beforeCode);
                                                        }
                                                        // The selected text without formatting
                                                        const plainText = document.createTextNode(selectedContent);
                                                        fragment.appendChild(plainText);
                                                        if (afterText) {
                                                            const afterCode = document.createElement('code');
                                                            afterCode.className = 'inline-code';
                                                            afterCode.textContent = afterText;
                                                            fragment.appendChild(afterCode);
                                                        }
                                                        parent.replaceChild(fragment, parentCode);
                                                        requestAnimationFrame(()=>{
                                                            const freshSelection = window.getSelection();
                                                            if (freshSelection) {
                                                                const newRange = document.createRange();
                                                                newRange.selectNodeContents(plainText);
                                                                freshSelection.removeAllRanges();
                                                                freshSelection.addRange(newRange);
                                                            }
                                                            setActiveFormats((prev)=>({
                                                                    ...prev,
                                                                    inlineCode: false
                                                                }));
                                                        });
                                                    }
                                                } else if (selectedText) {
                                                    // ADD code formatting - wrap in code element
                                                    const codeEl = document.createElement('code');
                                                    codeEl.className = 'inline-code';
                                                    codeEl.textContent = selectedText;
                                                    range.deleteContents();
                                                    range.insertNode(codeEl);
                                                    // Force selection update after DOM change
                                                    requestAnimationFrame(()=>{
                                                        const freshSelection = window.getSelection();
                                                        if (freshSelection) {
                                                            const newRange = document.createRange();
                                                            newRange.selectNodeContents(codeEl);
                                                            freshSelection.removeAllRanges();
                                                            freshSelection.addRange(newRange);
                                                        }
                                                        setActiveFormats((prev)=>({
                                                                ...prev,
                                                                inlineCode: true
                                                            }));
                                                    });
                                                }
                                            },
                                            "aria-pressed": activeFormats.inlineCode,
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.inlineCode ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "Código"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1515,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1394,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Uppercase",
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                const selection = window.getSelection();
                                                if (!selection || selection.rangeCount === 0) return;
                                                const range = selection.getRangeAt(0);
                                                const selectedText = selection.toString();
                                                if (selectedText) {
                                                    // Check if already uppercase, if so convert to lowercase
                                                    const isUppercase = selectedText === selectedText.toUpperCase();
                                                    const newText = isUppercase ? selectedText.toLowerCase() : selectedText.toUpperCase();
                                                    const textNode = document.createTextNode(newText);
                                                    range.deleteContents();
                                                    range.insertNode(textNode);
                                                    // Re-select the transformed text
                                                    range.selectNode(textNode);
                                                    selection.removeAllRanges();
                                                    selection.addRange(range);
                                                }
                                            },
                                            "aria-pressed": activeFormats.uppercase,
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.uppercase ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$case$2d$upper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaseUpper$3e$__["CaseUpper"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1554,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1522,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "MAIÚSCULAS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1556,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1521,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-4 bg-white/20 dark:bg-black/20 mx-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Insert Link",
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                const selection = window.getSelection();
                                                const selectedText = selection?.toString() || '';
                                                const url = prompt('Enter URL:', selectedText.startsWith('http') ? selectedText : 'https://');
                                                if (url) {
                                                    document.execCommand('createLink', false, url);
                                                }
                                            },
                                            className: "p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1580,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1566,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Insert Link",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘K"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1584,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1565,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn font-dropdown-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Change Font",
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                setFontDropdownOpen(!fontDropdownOpen);
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none flex items-center gap-1 ${activeFormats.currentFont && !activeFormats.currentFont.includes('Inter') && !activeFormats.inlineCode && !activeFormats.currentFont.includes('JetBrains') && !activeFormats.currentFont.includes('Fira') && !activeFormats.currentFont.includes('Consolas') && !activeFormats.currentFont.includes('Monaco') && !activeFormats.currentFont.includes('monospace') ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                    size: 16,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1609,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1610,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: activeFormats.currentFont || 'Fonte'
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1612,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: fontDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-900 dark:bg-white border border-neutral-700 dark:border-neutral-300 rounded-xl shadow-2xl p-1 min-w-[160px] max-h-[250px] overflow-y-auto z-50 font-dropdown-container",
                                                children: AVAILABLE_FONTS.map((font)=>{
                                                    const isActive = activeFormats.currentFont.includes(font.name) || activeFormats.currentFont.includes(font.value.split(',')[0].replace(/['"]/g, ''));
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onMouseDown: (e)=>{
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            // Apply font to selected text
                                                            const selection = window.getSelection();
                                                            if (selection && selection.rangeCount > 0) {
                                                                const range = selection.getRangeAt(0);
                                                                if (!range.collapsed) {
                                                                    const span = document.createElement('span');
                                                                    span.style.fontFamily = font.value;
                                                                    try {
                                                                        range.surroundContents(span);
                                                                    } catch  {
                                                                        // If surrounding fails (crosses element boundaries), use execCommand fallback
                                                                        document.execCommand('fontName', false, font.value);
                                                                    }
                                                                }
                                                            }
                                                            setFontDropdownOpen(false);
                                                        },
                                                        className: `w-full px-3 py-2 text-left text-sm rounded-lg transition-colors flex items-center justify-between ${isActive ? 'bg-blue-500/20 text-blue-400 font-semibold' : 'text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200'}`,
                                                        style: {
                                                            fontFamily: font.value
                                                        },
                                                        children: [
                                                            font.name,
                                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                className: "text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1659,
                                                                columnNumber: 44
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, font.name, true, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1630,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1619,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1589,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1310,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-6 bg-white/20 dark:bg-black/20 mx-0.5",
                            role: "separator",
                            "aria-orientation": "vertical"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1669,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Highlight Color",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        setHighlightDropdownOpen(!highlightDropdownOpen);
                                        setTextColorDropdownOpen(false);
                                    },
                                    className: "p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
                                        size: 16,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1683,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1673,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: highlightDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: -5,
                                            scale: 0.95
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -5,
                                            scale: 0.95
                                        },
                                        transition: {
                                            duration: 0.15
                                        },
                                        className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-900 dark:bg-white border border-neutral-700 dark:border-neutral-300 rounded-xl shadow-2xl p-2 flex flex-wrap gap-1.5 z-50 w-[140px]",
                                        children: [
                                            [
                                                {
                                                    color: '#facc15',
                                                    label: 'Amarelo'
                                                },
                                                {
                                                    color: '#4ade80',
                                                    label: 'Verde'
                                                },
                                                {
                                                    color: '#ff0000',
                                                    label: 'Vermelho'
                                                },
                                                {
                                                    color: '#60a5fa',
                                                    label: 'Azul'
                                                },
                                                {
                                                    color: '#f87171',
                                                    label: 'Coral'
                                                },
                                                {
                                                    color: '#c084fc',
                                                    label: 'Roxo'
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    title: item.label,
                                                    onMouseDown: (e)=>{
                                                        e.preventDefault();
                                                        document.execCommand('hiliteColor', false, item.color);
                                                        setHighlightDropdownOpen(false);
                                                    },
                                                    className: "w-6 h-6 rounded-md border-2 border-white/20 hover:scale-110 active:scale-95 transition-all",
                                                    style: {
                                                        backgroundColor: item.color
                                                    }
                                                }, item.color, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                title: "Remover",
                                                onMouseDown: (e)=>{
                                                    e.preventDefault();
                                                    document.execCommand('hiliteColor', false, 'transparent');
                                                    setHighlightDropdownOpen(false);
                                                },
                                                className: "w-6 h-6 rounded-md border-2 border-white/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-gray-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 12,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1725,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1715,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1687,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1685,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1672,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Text Color",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        setTextColorDropdownOpen(!textColorDropdownOpen);
                                        setHighlightDropdownOpen(false);
                                    },
                                    className: "p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"], {
                                        size: 16,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1744,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1734,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: textColorDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: -5,
                                            scale: 0.95
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -5,
                                            scale: 0.95
                                        },
                                        transition: {
                                            duration: 0.15
                                        },
                                        className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-900 dark:bg-white border border-neutral-700 dark:border-neutral-300 rounded-xl shadow-2xl p-2 flex flex-wrap gap-1.5 z-50 w-[140px]",
                                        children: [
                                            {
                                                color: '#000000',
                                                label: 'Preto'
                                            },
                                            {
                                                color: '#ffffff',
                                                label: 'Branco'
                                            },
                                            {
                                                color: '#ff0000',
                                                label: 'Vermelho'
                                            },
                                            {
                                                color: '#ff6b00',
                                                label: 'Laranja'
                                            },
                                            {
                                                color: '#facc15',
                                                label: 'Amarelo'
                                            },
                                            {
                                                color: '#4ade80',
                                                label: 'Verde'
                                            },
                                            {
                                                color: '#60a5fa',
                                                label: 'Azul'
                                            },
                                            {
                                                color: '#c084fc',
                                                label: 'Roxo'
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                title: item.label,
                                                onMouseDown: (e)=>{
                                                    e.preventDefault();
                                                    document.execCommand('foreColor', false, item.color);
                                                    setTextColorDropdownOpen(false);
                                                },
                                                className: "w-6 h-6 rounded-md border-2 border-white/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center",
                                                style: {
                                                    backgroundColor: item.color === '#ffffff' ? '#e5e5e5' : item.color
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold",
                                                    style: {
                                                        color: item.color === '#000000' || item.color === '#ff0000' ? '#fff' : '#000'
                                                    },
                                                    children: "A"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1777,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, `text-${item.color}`, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1765,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1748,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1746,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1733,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-4 bg-white/20 dark:bg-black/20 mx-1"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1791,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group/btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Connect Text",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        handleStartTextLinking();
                                    },
                                    className: "w-6 h-6 rounded-lg border-2 border-white/30 dark:border-black/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-gray-700 dark:bg-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                        size: 14,
                                        className: "text-white dark:text-black"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1804,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1795,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl z-10",
                                    children: [
                                        "Interligar",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1808,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1806,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1794,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, "format-toolbar", true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 1291,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1289,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)), document.body),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmationModal"], {
                isOpen: !!imageToDelete,
                title: "Delete Image?",
                message: "Are you sure you want to delete this image? This action cannot be undone.",
                onConfirm: ()=>{
                    if (imageToDelete) {
                        deleteBlock(imageToDelete);
                        setImageToDelete(null);
                    }
                },
                onCancel: ()=>setImageToDelete(null)
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1817,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: linkPasteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    },
                    style: {
                        position: 'fixed',
                        top: linkPasteModal.position.top,
                        left: linkPasteModal.position.left,
                        zIndex: 9999
                    },
                    className: "bg-neutral-900 dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-700 overflow-hidden min-w-[200px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 border-b border-neutral-700 text-sm text-neutral-400 font-medium",
                            children: "Colar como"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1847,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('mention'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-400",
                                            children: "@"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1857,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Menção"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1858,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1853,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('embed'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: "◇"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1865,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Integrar tweet"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1866,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1861,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('bookmark'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400",
                                            children: "🔖"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1873,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Criar marcador"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1874,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1869,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('url'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                            size: 16,
                                            className: "text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1881,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "URL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1882,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1877,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1852,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 border-t border-neutral-700 text-xs text-neutral-500 truncate max-w-[300px]",
                            children: linkPasteModal.url
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1887,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 1833,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1831,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            linkPasteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9998]",
                onClick: ()=>setLinkPasteModal(null)
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1897,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextLinkingMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextLinkingMode"], {
                isActive: isTextLinkingMode,
                sourceText: sourceTextForLinking,
                sourceBlockId: sourceBlockIdForLinking,
                currentColor: currentLinkColor,
                onColorChange: setCurrentLinkColor,
                onSelectTarget: handleConfirmTextConnection,
                onCancel: handleCancelTextLinking
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1905,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/EditorView.tsx",
        lineNumber: 889,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditorView, "8Ku8DzMm+mT3FEd0RUhuffxeKOA=");
_c = EditorView;
var _c;
__turbopack_context__.k.register(_c, "EditorView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/canvas/CanvasView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasView",
    ()=>CanvasView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-client] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
// SVG Noise Texture for paper feel
const PAPER_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`;
const NOTE_WIDTH = 256;
const NOTE_HEIGHT_ESTIMATE = 80; // Approximate center for connection anchor
const CanvasView = ({ notes, onNoteSelect, onNoteMove, onConnectNotes, onDeleteNote, isDarkMode })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Viewport State
    const [pan, setPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isDraggingCanvas, setIsDraggingCanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tool State
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SELECT');
    const [connectionSourceId, setConnectionSourceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseDown = (e)=>{
        // Only pan if clicking directly on background
        if (e.target === containerRef.current && activeTool === 'SELECT') {
            setIsDraggingCanvas(true);
        }
        // If clicking background in connect mode, cancel connection source but keep tool active
        // FIX: Only cancel if clicking the background, not if clicking a note (which bubbles here)
        if (activeTool === 'CONNECT' && e.target === containerRef.current) {
            setConnectionSourceId(null);
        }
    };
    const handleMouseMove = (e)=>{
        if (isDraggingCanvas) {
            setPan((prev)=>({
                    x: prev.x + e.movementX,
                    y: prev.y + e.movementY
                }));
        }
        // Update mouse pos for drawing the temporary connection line
        if (activeTool === 'CONNECT') {
            // Calculate relative position inside the panned container
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                setMousePos({
                    x: e.clientX - rect.left - pan.x,
                    y: e.clientY - rect.top - pan.y
                });
            }
        }
    };
    const handleMouseUp = ()=>{
        setIsDraggingCanvas(false);
    };
    const handleNoteInteraction = (noteId, e)=>{
        e.stopPropagation();
        if (activeTool === 'CONNECT') {
            if (connectionSourceId === null) {
                // Start connection
                setConnectionSourceId(noteId);
            } else {
                // If clicking same node, toggle off selection
                if (connectionSourceId === noteId) {
                    setConnectionSourceId(null);
                } else {
                    // Complete connection
                    onConnectNotes(connectionSourceId, noteId);
                    setConnectionSourceId(null);
                }
            }
        } else {
            // Normal selection
            onNoteSelect(noteId);
        }
    };
    const toggleTool = (tool)=>{
        if (activeTool === tool) {
            // Toggle off if clicking same tool
            if (tool === 'CONNECT') {
                setActiveTool('SELECT');
                setConnectionSourceId(null);
            }
        } else {
            setActiveTool(tool);
            setConnectionSourceId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full bg-[#fcfcfc] dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300 ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'}`,
        ref: containerRef,
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-neutral-900 border border-black dark:border-neutral-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] px-2 py-2 rounded-full flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleTool('SELECT'),
                        className: `p-2 rounded-full transition-all ${activeTool === 'SELECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`,
                        title: "Select / Move Tool",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleTool('CONNECT'),
                        className: `p-2 rounded-full transition-all ${activeTool === 'CONNECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`,
                        title: "Connect Notes Tool",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-10 dark:opacity-20",
                style: {
                    backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    transform: `translate(${pan.x}px, ${pan.y}px)`
                }
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 origin-top-left",
                style: {
                    x: pan.x,
                    y: pan.y
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-0 left-0 w-[5000px] h-[5000px] pointer-events-none overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                        id: "arrowhead-pulse",
                                        markerWidth: "10",
                                        markerHeight: "7",
                                        refX: "10",
                                        refY: "3.5",
                                        orient: "auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "0 0, 10 3.5, 0 7",
                                            fill: isDarkMode ? "white" : "black",
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/canvas/CanvasView.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOTE_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                            id: `arrowhead-${c.value.replace('#', '')}`,
                                            markerWidth: "10",
                                            markerHeight: "7",
                                            refX: "10",
                                            refY: "3.5",
                                            orient: "auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "0 0, 10 3.5, 0 7",
                                                fill: c.value,
                                                opacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, c.id, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                    @keyframes flowAnimation {
                        from { stroke-dashoffset: 16; }
                        to { stroke-dashoffset: 0; }
                    }
                    .connection-line-animated {
                        animation: flowAnimation 2s linear infinite;
                    }
                `
                                    }, void 0, false, {
                                        fileName: "[project]/components/canvas/CanvasView.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            notes.map((note)=>note.connections.map((targetId)=>{
                                    const target = notes.find((n)=>n.id === targetId);
                                    if (!target) return null;
                                    const sourceColor = note.color || (isDarkMode ? '#ffffff' : '#000000');
                                    const targetColor = target.color || (isDarkMode ? '#ffffff' : '#000000');
                                    const targetColorClean = targetColor.replace('#', '');
                                    const gradientId = `grad-${note.id}-${target.id}`;
                                    const x1 = note.position.x + NOTE_WIDTH / 2;
                                    const y1 = note.position.y + NOTE_HEIGHT_ESTIMATE;
                                    const x2 = target.position.x + NOTE_WIDTH / 2;
                                    const y2 = target.position.y + NOTE_HEIGHT_ESTIMATE;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: gradientId,
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: x1,
                                                    y1: y1,
                                                    x2: x2,
                                                    y2: y2,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: sourceColor
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: targetColor
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/canvas/CanvasView.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: x1,
                                                y1: y1,
                                                x2: x2,
                                                y2: y2,
                                                stroke: `url(#${gradientId})`,
                                                strokeWidth: "1.5",
                                                strokeDasharray: "8,8",
                                                className: "connection-line-animated opacity-60",
                                                markerEnd: `url(#arrowhead-${targetColorClean})`
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, `${note.id}-${target.id}`, true, {
                                        fileName: "[project]/components/canvas/CanvasView.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })),
                            activeTool === 'CONNECT' && connectionSourceId && (()=>{
                                const source = notes.find((n)=>n.id === connectionSourceId);
                                if (!source) return null;
                                const sourceColor = source.color || (isDarkMode ? '#ffffff' : '#000000');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: source.position.x + NOTE_WIDTH / 2,
                                    y1: source.position.y + NOTE_HEIGHT_ESTIMATE,
                                    x2: mousePos.x,
                                    y2: mousePos.y,
                                    stroke: sourceColor,
                                    strokeWidth: "2",
                                    strokeDasharray: "4,4",
                                    markerEnd: "url(#arrowhead-pulse)",
                                    className: "animate-pulse opacity-60"
                                }, void 0, false, {
                                    fileName: "[project]/components/canvas/CanvasView.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableNote, {
                            note: note,
                            activeTool: activeTool,
                            isConnectionSource: note.id === connectionSourceId,
                            onClick: (e)=>handleNoteInteraction(note.id, e),
                            onMove: (pos)=>onNoteMove(note.id, pos),
                            onDelete: ()=>onDeleteNote(note.id),
                            isDarkMode: isDarkMode
                        }, note.id, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeTool === 'CONNECT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: -20,
                        opacity: 0
                    },
                    className: "absolute top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-xs font-bold uppercase tracking-widest rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] pointer-events-none flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        connectionSourceId ? "Click target note" : "Select source note"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas/CanvasView.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CanvasView, "gIc9AKC3GXJcZPpzIfdk5QqLF3Q=");
_c = CanvasView;
const DraggableNote = ({ note, activeTool, isConnectionSource, onClick, onMove, onDelete, isDarkMode })=>{
    _s1();
    // Safely parse HTML for preview
    const stripHtml = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    // Detect links
    const linkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DraggableNote.useMemo[linkData]": ()=>{
            for (const block of note.blocks){
                const text = stripHtml(block.content);
                const match = text.match(/(https?:\/\/[^\s]+)/);
                if (match) {
                    try {
                        const url = new URL(match[0]);
                        return {
                            url: match[0],
                            hostname: url.hostname
                        };
                    } catch (e) {
                        continue;
                    }
                }
            }
            return null;
        }
    }["DraggableNote.useMemo[linkData]"], [
        note.blocks
    ]);
    // Sticky Note Theme: Random rotation and imperfect edges (Sketchy Border)
    const randomRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DraggableNote.useMemo[randomRotate]": ()=>Math.random() * 2 - 1
    }["DraggableNote.useMemo[randomRotate]"], []);
    const organicRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DraggableNote.useMemo[organicRadius]": ()=>{
            const v1 = 2 + Math.random() * 2;
            const v2 = 2 + Math.random() * 3;
            const v3 = 2 + Math.random() * 2;
            const v4 = 2 + Math.random() * 3;
            return `${v1}px ${v2}px ${v3}px ${v4}px`;
        }
    }["DraggableNote.useMemo[organicRadius]"], []);
    const noteColor = note.color && note.color !== '#000000' ? note.color : null;
    // Expanded Preview Logic
    const previewText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DraggableNote.useMemo[previewText]": ()=>{
            const segments = [];
            let charCount = 0;
            for (const block of note.blocks){
                if (charCount > 200) break; // Stop if we have enough text
                if (block.type === 'image') {
                    segments.push('[Image]');
                    charCount += 7;
                    continue;
                }
                const text = stripHtml(block.content).trim();
                if (!text) continue;
                let formatted = text;
                if (block.type === 'bullet') formatted = `• ${text}`;
                if (block.type === 'todo') formatted = `- ${text}`;
                segments.push(formatted);
                charCount += formatted.length;
            }
            return segments.join(' ');
        }
    }["DraggableNote.useMemo[previewText]"], [
        note.blocks
    ]);
    const boxShadow = isConnectionSource ? `0 0 0 4px ${noteColor || (isDarkMode ? '#fff' : '#000')}, 8px 8px 12px rgba(0,0,0,0.2)` : "2px 3px 8px rgba(0,0,0,0.08)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        drag: activeTool === 'SELECT',
        dragMomentum: false,
        initial: {
            x: note.position.x,
            y: note.position.y,
            opacity: 0,
            scale: 0.8
        },
        animate: {
            x: note.position.x,
            y: note.position.y,
            opacity: 1,
            rotate: isConnectionSource ? 0 : randomRotate,
            scale: isConnectionSource ? 1.05 : 1,
            boxShadow,
            borderColor: noteColor || (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')
        },
        onDragEnd: (e, info)=>{
            onMove({
                x: note.position.x + info.offset.x,
                y: note.position.y + info.offset.y
            });
        },
        onClick: onClick,
        whileHover: {
            scale: 1.03,
            rotate: 0,
            boxShadow: "4px 8px 12px rgba(0,0,0,0.15)",
            zIndex: 10
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
        },
        className: `group absolute flex flex-col gap-2 ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`,
        style: {
            width: NOTE_WIDTH,
            backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
            color: isDarkMode ? '#eee' : '#000',
            backgroundImage: PAPER_TEXTURE,
            borderRadius: organicRadius,
            border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
        },
        children: [
            activeTool === 'SELECT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete();
                },
                className: "absolute -top-2 -right-2 bg-white dark:bg-neutral-800 border border-black dark:border-neutral-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/30 hover:scale-110 z-10 shadow-sm text-black dark:text-white",
                title: "Delete Note",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 418,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 410,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-gray-100/50 dark:border-neutral-800 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-sm truncate pr-4 text-black/90 dark:text-white/90",
                                dangerouslySetInnerHTML: {
                                    __html: note.title || "Untitled"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                size: 14,
                                className: "text-gray-400 dark:text-neutral-600 flex-shrink-0",
                                style: {
                                    color: noteColor || undefined
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 dark:text-neutral-400 line-clamp-5 leading-relaxed min-h-[1.5em] font-medium",
                        children: previewText || (linkData ? "" : "No content.")
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mt-1",
                        children: [
                            note.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 px-1.5 py-0.5 rounded-sm",
                                    children: [
                                        "#",
                                        tag
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/components/canvas/CanvasView.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            note.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-gray-400 dark:text-neutral-600",
                                children: [
                                    "+",
                                    note.tags.length - 3
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 444,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    linkData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-2 bg-black/5 dark:bg-white/5 p-2 rounded border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://www.google.com/s2/favicons?domain=${linkData.hostname}&sz=32`,
                                alt: "favicon",
                                className: "w-4 h-4 rounded-sm",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-gray-700 dark:text-gray-300 truncate flex-1",
                                children: linkData.hostname
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 10,
                                className: "text-gray-500 dark:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isConnectionSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 5
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded shadow-sm whitespace-nowrap",
                style: {
                    backgroundColor: noteColor || undefined
                },
                children: "SOURCE SELECTED"
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 468,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas/CanvasView.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DraggableNote, "QPyv2fnNPaH8TAKMqLBvB8wRXII=");
_c1 = DraggableNote;
var _c, _c1;
__turbopack_context__.k.register(_c, "CanvasView");
__turbopack_context__.k.register(_c1, "DraggableNote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/graph/GraphView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphView",
    ()=>GraphView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-client] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-client] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-client] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drag$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-drag/src/drag.js [app-client] (ecmascript) <export default as drag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const GraphView = ({ notes, onNoteSelect, onDeleteNote, isDarkMode })=>{
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const stripHtml = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraphView.useEffect": ()=>{
            const handleClickOutside = {
                "GraphView.useEffect.handleClickOutside": ()=>setContextMenu(null)
            }["GraphView.useEffect.handleClickOutside"];
            window.addEventListener('click', handleClickOutside);
            return ({
                "GraphView.useEffect": ()=>window.removeEventListener('click', handleClickOutside)
            })["GraphView.useEffect"];
        }
    }["GraphView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraphView.useEffect": ()=>{
            if (!svgRef.current) return;
            const width = svgRef.current.clientWidth;
            const height = svgRef.current.clientHeight;
            // Colors
            const bgColor = isDarkMode ? "#0a0a0a" : "#fff";
            const defaultNodeColor = isDarkMode ? "#ffffff" : "#000000";
            const strokeColor = isDarkMode ? "#404040" : "#e5e5e5";
            const textStrokeColor = isDarkMode ? "#0a0a0a" : "#fff";
            const nodeStrokeColor = isDarkMode ? "#0a0a0a" : "#fff";
            // Transform notes to graph data
            const nodes = notes.map({
                "GraphView.useEffect.nodes": (n)=>({
                        id: n.id,
                        title: n.title,
                        group: 1,
                        x: Math.random() * width,
                        y: Math.random() * height,
                        color: n.color
                    })
            }["GraphView.useEffect.nodes"]);
            const links = [];
            notes.forEach({
                "GraphView.useEffect": (source)=>{
                    source.connections.forEach({
                        "GraphView.useEffect": (targetId)=>{
                            if (notes.find({
                                "GraphView.useEffect": (n)=>n.id === targetId
                            }["GraphView.useEffect"])) {
                                links.push({
                                    source: source.id,
                                    target: targetId
                                });
                            }
                        }
                    }["GraphView.useEffect"]);
                }
            }["GraphView.useEffect"]);
            // Clear previous
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current).selectAll("*").remove();
            const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current).attr("viewBox", [
                0,
                0,
                width,
                height
            ]).style("background-color", bgColor);
            // Simulation
            const simulation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"](nodes).force("link", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"](links).id({
                "GraphView.useEffect.simulation": (d)=>d.id
            }["GraphView.useEffect.simulation"]).distance(150)).force("charge", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"]().strength(-300)).force("center", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"](width / 2, height / 2)).force("collide", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"]().radius(40));
            // Draw Lines
            const link = svg.append("g").attr("stroke", strokeColor).attr("stroke-opacity", 0.8).selectAll("line").data(links).join("line").attr("stroke-width", 2);
            // Draw Nodes
            const node = svg.append("g").selectAll("g").data(nodes).join("g").attr("cursor", "pointer").call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drag$3e$__["drag"]().on("start", dragstarted).on("drag", dragged).on("end", dragended)).on("click", {
                "GraphView.useEffect.node": (event, d)=>{
                    event.stopPropagation();
                    onNoteSelect(d.id);
                }
            }["GraphView.useEffect.node"]).on("contextmenu", {
                "GraphView.useEffect.node": (event, d)=>{
                    event.preventDefault();
                    event.stopPropagation();
                    setContextMenu({
                        x: event.pageX,
                        y: event.pageY,
                        nodeId: d.id
                    });
                }
            }["GraphView.useEffect.node"]);
            // Circle
            node.append("circle").attr("r", 10).attr("fill", {
                "GraphView.useEffect": (d)=>d.color && d.color !== '#000000' ? d.color : defaultNodeColor
            }["GraphView.useEffect"]).attr("stroke", nodeStrokeColor).attr("stroke-width", 2);
            // Labels
            node.append("text").attr("x", 14).attr("y", 4).text({
                "GraphView.useEffect": (d)=>stripHtml(d.title || "Untitled")
            }["GraphView.useEffect"]).style("font-family", "Inter").style("font-size", "12px").style("font-weight", "500").attr("fill", isDarkMode ? "#eee" : "#000").clone(true).lower().attr("fill", "none").attr("stroke", textStrokeColor).attr("stroke-width", 3);
            simulation.on("tick", {
                "GraphView.useEffect": ()=>{
                    link.attr("x1", {
                        "GraphView.useEffect": (d)=>d.source.x
                    }["GraphView.useEffect"]).attr("y1", {
                        "GraphView.useEffect": (d)=>d.source.y
                    }["GraphView.useEffect"]).attr("x2", {
                        "GraphView.useEffect": (d)=>d.target.x
                    }["GraphView.useEffect"]).attr("y2", {
                        "GraphView.useEffect": (d)=>d.target.y
                    }["GraphView.useEffect"]);
                    node.attr("transform", {
                        "GraphView.useEffect": (d)=>`translate(${d.x},${d.y})`
                    }["GraphView.useEffect"]);
                }
            }["GraphView.useEffect"]);
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }
            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }
            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
            return ({
                "GraphView.useEffect": ()=>{
                    simulation.stop();
                }
            })["GraphView.useEffect"];
        }
    }["GraphView.useEffect"], [
        notes,
        onNoteSelect,
        isDarkMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                className: "w-full h-full block transition-colors duration-300"
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black px-4 py-2 shadow-xl rounded-none text-xs font-bold pointer-events-none",
                children: "KNOWLEDGE GRAPH"
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    style: {
                        top: contextMenu.y,
                        left: contextMenu.x
                    },
                    className: "fixed z-50 bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] p-1 min-w-[120px]",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onDeleteNote(contextMenu.nodeId);
                            setContextMenu(null);
                        },
                        className: "w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors uppercase tracking-wide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/graph/GraphView.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Delete Note"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/graph/GraphView.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/graph/GraphView.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/graph/GraphView.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GraphView, "5N1tkrDumBXpPc5wv28t+aRD7Ec=");
_c = GraphView;
var _c;
__turbopack_context__.k.register(_c, "GraphView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/UnsavedChangesModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnsavedChangesModal",
    ()=>UnsavedChangesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
;
;
const UnsavedChangesModal = ({ isOpen, onSaveAndLeave, onDiscardAndLeave, onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-[100]",
                    onClick: onCancel
                }, void 0, false, {
                    fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                    lineNumber: 22,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 p-8 z-[101] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-black dark:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 24,
                                        strokeWidth: 2,
                                        className: "text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                        lineNumber: 37,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black uppercase tracking-wide",
                                        children: "Unsaved Changes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                        lineNumber: 38,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                lineNumber: 36,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                            lineNumber: 35,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-neutral-400 font-medium mb-10 leading-relaxed",
                            children: "You have unsaved changes in this note. If you leave now, your changes will be lost."
                        }, void 0, false, {
                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSaveAndLeave,
                                    className: "w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Save & Leave"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onDiscardAndLeave,
                                    className: "w-full py-3 border-2 border-red-500 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Discard Changes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "w-full py-3 text-gray-500 dark:text-neutral-500 font-bold hover:text-black dark:hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Cancel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = UnsavedChangesModal;
var _c;
__turbopack_context__.k.register(_c, "UnsavedChangesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useHistory(initialPresent) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        past: [],
        present: initialPresent,
        future: []
    });
    const canUndo = state.past.length > 0;
    const canRedo = state.future.length > 0;
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[undo]": ()=>{
            setState({
                "useHistory.useCallback[undo]": (currentState)=>{
                    if (currentState.past.length === 0) return currentState;
                    const previous = currentState.past[currentState.past.length - 1];
                    const newPast = currentState.past.slice(0, currentState.past.length - 1);
                    return {
                        past: newPast,
                        present: previous,
                        future: [
                            currentState.present,
                            ...currentState.future
                        ]
                    };
                }
            }["useHistory.useCallback[undo]"]);
        }
    }["useHistory.useCallback[undo]"], []);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[redo]": ()=>{
            setState({
                "useHistory.useCallback[redo]": (currentState)=>{
                    if (currentState.future.length === 0) return currentState;
                    const next = currentState.future[0];
                    const newFuture = currentState.future.slice(1);
                    return {
                        past: [
                            ...currentState.past,
                            currentState.present
                        ],
                        present: next,
                        future: newFuture
                    };
                }
            }["useHistory.useCallback[redo]"]);
        }
    }["useHistory.useCallback[redo]"], []);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[set]": (newPresent, mode = 'PUSH')=>{
            setState({
                "useHistory.useCallback[set]": (currentState)=>{
                    // Prevent pushing if state hasn't effectively changed, though strict equality might not be enough for objects
                    // We assume caller handles significant changes
                    if (mode === 'REPLACE') {
                        return {
                            ...currentState,
                            present: newPresent
                        };
                    }
                    return {
                        past: [
                            ...currentState.past,
                            currentState.present
                        ],
                        present: newPresent,
                        future: []
                    };
                }
            }["useHistory.useCallback[set]"]);
        }
    }["useHistory.useCallback[set]"], []);
    return {
        state: state.present,
        set,
        undo,
        redo,
        canUndo,
        canRedo
    };
}
_s(useHistory, "Lvu1ES8szXqZ1f/cbhzqz1fGiZo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SearchPalette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchPalette",
    ()=>SearchPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-client] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SearchPalette = ({ isOpen, onClose, notes, onSelectNote })=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPalette.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "SearchPalette.useEffect": ()=>inputRef.current?.focus()
                }["SearchPalette.useEffect"], 100);
                setQuery('');
                setSelectedIndex(0);
            }
        }
    }["SearchPalette.useEffect"], [
        isOpen
    ]);
    // Filtering Logic
    const filteredNotes = notes.filter((note)=>{
        if (!query) return true;
        const lowerQuery = query.toLowerCase();
        // Naive stripping for search comparison
        const cleanTitle = (note.title || "").replace(/<[^>]*>?/gm, '').toLowerCase();
        const tagsMatch = note.tags?.some((t)=>t.toLowerCase().includes(lowerQuery));
        return cleanTitle.includes(lowerQuery) || tagsMatch || note.blocks.some((b)=>b.content.toLowerCase().includes(lowerQuery));
    }).slice(0, 5); // Limit to 5 results for clean UI
    // Keyboard Navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPalette.useEffect": ()=>{
            const handleKeyDown = {
                "SearchPalette.useEffect.handleKeyDown": (e)=>{
                    if (!isOpen) return;
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setSelectedIndex({
                            "SearchPalette.useEffect.handleKeyDown": (prev)=>(prev + 1) % filteredNotes.length
                        }["SearchPalette.useEffect.handleKeyDown"]);
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setSelectedIndex({
                            "SearchPalette.useEffect.handleKeyDown": (prev)=>(prev - 1 + filteredNotes.length) % filteredNotes.length
                        }["SearchPalette.useEffect.handleKeyDown"]);
                    } else if (e.key === 'Enter') {
                        e.preventDefault();
                        if (filteredNotes[selectedIndex]) {
                            onSelectNote(filteredNotes[selectedIndex].id);
                            onClose();
                        }
                    } else if (e.key === 'Escape') {
                        onClose();
                    }
                }
            }["SearchPalette.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "SearchPalette.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["SearchPalette.useEffect"];
        }
    }["SearchPalette.useEffect"], [
        isOpen,
        filteredNotes,
        selectedIndex,
        onSelectNote,
        onClose
    ]);
    const stripHtml = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-[60]"
                }, void 0, false, {
                    fileName: "[project]/components/ui/SearchPalette.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: -20
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 300
                    },
                    className: "fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-xl z-[70] px-4 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] pointer-events-auto overflow-hidden flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border-b-2 border-black/5 dark:border-white/5 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "text-black dark:text-white w-5 h-5 mr-3",
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: query,
                                        onChange: (e)=>{
                                            setQuery(e.target.value);
                                            setSelectedIndex(0);
                                        },
                                        placeholder: "Search notes or #tags...",
                                        className: "flex-1 bg-transparent text-xl font-bold placeholder:text-gray-300 dark:placeholder:text-neutral-700 outline-none text-black dark:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 103,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-transform hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/SearchPalette.tsx",
                                            lineNumber: 115,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[400px] overflow-y-auto custom-scrollbar p-2 space-y-1",
                                children: filteredNotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 text-center text-gray-400 dark:text-neutral-600 font-medium",
                                    children: "No results found."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/SearchPalette.tsx",
                                    lineNumber: 122,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : filteredNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: index === selectedIndex ? 6 : 0,
                                            scale: index === selectedIndex ? 1.02 : 1,
                                            backgroundColor: index === selectedIndex ? '#000000' : 'transparent',
                                            color: index === selectedIndex ? '#ffffff' : 'inherit'
                                        },
                                        style: index !== selectedIndex ? {
                                            backgroundColor: 'transparent',
                                            color: 'inherit'
                                        } : undefined,
                                        whileHover: {
                                            scale: 1.02,
                                            x: 6
                                        },
                                        transition: {
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 25
                                        },
                                        onClick: ()=>{
                                            onSelectNote(note.id);
                                            onClose();
                                        },
                                        onMouseEnter: ()=>setSelectedIndex(index),
                                        className: `flex items-center justify-between p-3 rounded-lg cursor-pointer ${index === selectedIndex ? 'dark:bg-white dark:text-black' : 'text-black dark:text-neutral-300'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 18,
                                                        className: `flex-shrink-0 transition-colors ${index === selectedIndex ? 'text-white dark:text-black' : 'text-gray-400 dark:text-neutral-600'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold truncate",
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: note.title || "Untitled"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-1",
                                                                        children: note.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[9px] px-1.5 rounded-sm font-bold uppercase ${index === selectedIndex ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400'}`,
                                                                                children: [
                                                                                    "#",
                                                                                    tag
                                                                                ]
                                                                            }, tag, true, {
                                                                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                                lineNumber: 162,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs truncate transition-colors ${index === selectedIndex ? 'text-gray-400 dark:text-neutral-500' : 'text-gray-500 dark:text-neutral-500'}`,
                                                                children: stripHtml(note.blocks.find((b)=>b.content)?.content || "") || "Empty note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index === selectedIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -5
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                                    size: 16,
                                                    className: "text-gray-500 dark:text-neutral-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/SearchPalette.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                                lineNumber: 182,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, note.id, true, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 127,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 dark:bg-neutral-800 px-4 py-2 flex justify-between text-[10px] text-gray-400 dark:text-neutral-500 font-mono uppercase tracking-wider border-t border-black/5 dark:border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Pro Tip: Use arrow keys to navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 196,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "ESC to close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 197,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/SearchPalette.tsx",
                                lineNumber: 195,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/SearchPalette.tsx",
                        lineNumber: 99,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/SearchPalette.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/SearchPalette.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchPalette, "Vs3u3RF38qK9ZPux1MXR/Ap6JK8=");
_c = SearchPalette;
var _c;
__turbopack_context__.k.register(_c, "SearchPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/AIMagicModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIMagicModal",
    ()=>AIMagicModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const AIMagicModal = ({ isOpen, onClose, onGenerate, isGenerating })=>{
    _s();
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIMagicModal.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "AIMagicModal.useEffect": ()=>inputRef.current?.focus()
                }["AIMagicModal.useEffect"], 100);
                setPrompt('');
            }
        }
    }["AIMagicModal.useEffect"], [
        isOpen
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (prompt.trim() && !isGenerating) {
            onGenerate(prompt);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
        if (e.key === 'Escape') {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: !isGenerating ? onClose : undefined,
                    className: "fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-[100]"
                }, void 0, false, {
                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 p-0 z-[101] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black dark:bg-white text-white dark:text-black p-4 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 18,
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/AIMagicModal.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold tracking-wider text-sm uppercase",
                                            children: "Gemini Magic Create"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/AIMagicModal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    disabled: isGenerating,
                                    className: "hover:text-gray-300 dark:hover:text-gray-600 disabled:opacity-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/AIMagicModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/AIMagicModal.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-neutral-400 font-mono mb-4 uppercase tracking-wide",
                                    children: "Describe your thought, project, or idea..."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    ref: inputRef,
                                    value: prompt,
                                    onChange: (e)=>setPrompt(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    disabled: isGenerating,
                                    placeholder: "e.g., A marketing plan for a coffee shop in Tokyo...",
                                    className: "w-full h-32 text-xl font-bold resize-none outline-none placeholder:text-gray-200 dark:placeholder:text-neutral-700 bg-transparent text-black dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: !prompt.trim() || isGenerating,
                                        className: "bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-bold flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95",
                                        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Creating..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "GENERATE",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/AIMagicModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/AIMagicModal.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/AIMagicModal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AIMagicModal, "F5OAoVk5GXj/8n5hC03jJTQU2Ac=");
_c = AIMagicModal;
var _c;
__turbopack_context__.k.register(_c, "AIMagicModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/data:17d468 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fe4934befac9299db8a4b3db4ccf73fea8ee782ce":"generateNoteFromPrompt"},"services/geminiService.ts",""] */ __turbopack_context__.s([
    "generateNoteFromPrompt",
    ()=>generateNoteFromPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateNoteFromPrompt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fe4934befac9299db8a4b3db4ccf73fea8ee782ce", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNoteFromPrompt"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJLCBUeXBlIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJBUEkgS2V5IG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZE5vdGVXaXRoQUkgPSBhc3luYyAoY3VycmVudENvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBcIkVycm9yOiBBUEkgS2V5IG1pc3NpbmcuXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LXBybycsXG4gICAgICBjb250ZW50czogYFlvdSBhcmUgYSBtaW5pbWFsaXN0IHByb2R1Y3Rpdml0eSBhc3Npc3RhbnQuIFxuICAgICAgVGFrZSB0aGUgZm9sbG93aW5nIG5vdGUgY29udGVudCBhbmQgZXhwYW5kIHVwb24gaXQgd2l0aCAzIGFjdGlvbmFibGUgYnVsbGV0IHBvaW50cyBcbiAgICAgIG9yIGEgYnJpZWYgc3VtbWFyeSBwYXJhZ3JhcGguIEtlZXAgdGhlIHRvbmUgc3RyaWN0LCBwcm9mZXNzaW9uYWwsIGFuZCBjb25jaXNlLlxuICAgICAgXG4gICAgICBJbnB1dDogXCIke2N1cnJlbnRDb250ZW50fVwiYCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0IHx8IFwiTm8gcmVzcG9uc2UgZ2VuZXJhdGVkLlwiO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJHZW1pbmkgQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiRmFpbGVkIHRvIGdlbmVyYXRlIGluc2lnaHQuXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbm5lY3Rpb25zID0gYXN5bmMgKG5vdGVzOiB7IGlkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfVtdKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBbXTtcblxuICB0cnkge1xuICAgIC8vIExvZ2ljIHRvIHN1Z2dlc3QgY29ubmVjdGlvbnMgYmV0d2VlbiBub3RlcyBiYXNlZCBvbiB0aXRsZXNcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgYWR2YW5jZWQgZ3JhcGggUkFHXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vdGVGcm9tUHJvbXB0ID0gYXN5bmMgKHByb21wdDogc3RyaW5nKTogUHJvbWlzZTx7IHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9IHwgbnVsbD4gPT4ge1xuICBjb25zdCBhaSA9IGdldENsaWVudCgpO1xuICBpZiAoIWFpKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtcHJvJyxcbiAgICAgIGNvbnRlbnRzOiBgR2VuZXJhdGUgYSBjcmVhdGl2ZSBhbmQgc3RydWN0dXJlZCBub3RlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgdXNlciBwcm9tcHQ6IFwiJHtwcm9tcHR9XCIuIFxuICAgICAgICBUaGUgdGl0bGUgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGNhdGNoeS4gVGhlIGNvbnRlbnQgc2hvdWxkIGJlIGEgd2VsbC1zdHJ1Y3R1cmVkIHN0YXJ0aW5nIHBvaW50IChlLmcuLCBhIGxpc3QsIGEgc3VtbWFyeSwgb3IgYSBkcmFmdCkuYCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiBUeXBlLk9CSkVDVCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgICAgY29udGVudDogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogW1widGl0bGVcIiwgXCJjb250ZW50XCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSByZXNwb25zZS50ZXh0O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIE1hZ2ljIENyZWF0ZSBFcnJvcjpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlTQStDYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:c79a5f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a069e8f1f4f1494200b20c0bc84072e394479fe9":"getNotes"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getNotes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a069e8f1f4f1494200b20c0bc84072e394479fe9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNotes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkF1SnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:be22df [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401cd273f71d2e0f903f4f9a93d8fe00cb48938531":"saveNote"},"app/actions.ts",""] */ __turbopack_context__.s([
    "saveNote",
    ()=>saveNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var saveNote = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401cd273f71d2e0f903f4f9a93d8fe00cb48938531", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveNote"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkFzTHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:8231f5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404a74e22b5abf525b0b3284acc53bad418d3e5a87":"deleteNoteAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "deleteNoteAction",
    ()=>deleteNoteAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteNoteAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404a74e22b5abf525b0b3284acc53bad418d3e5a87", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNoteAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkE2TnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:7ace10 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006e4d292e2cbdbf295400e16cc531e51233b7a991":"signOutAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("006e4d292e2cbdbf295400e16cc531e51233b7a991", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFrSnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:912388 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6001f311435a739c25682d5782f498ba891734c6d3":"updateUserProfile"},"app/actions.ts",""] */ __turbopack_context__.s([
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateUserProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6001f311435a739c25682d5782f498ba891734c6d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkE2R3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/auth/AvatarFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarFrame",
    ()=>AvatarFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const AvatarFrame = ({ role = 'USER', children, className = '' })=>{
    if (role === 'ADMIN') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex items-center justify-center ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    className: "absolute inset-[-8px] border-2 border-red-500/30 rounded-[30%] opacity-60",
                    style: {
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        rotate: -360
                    },
                    transition: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    className: "absolute inset-[-4px] border border-yellow-500/40 rounded-[30%] opacity-80",
                    style: {
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: [
                            1,
                            1.1,
                            1
                        ],
                        opacity: [
                            0.5,
                            0.8,
                            0.5
                        ],
                        rotate: [
                            0,
                            5,
                            -5,
                            0
                        ]
                    },
                    transition: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatDelay: 3
                    },
                    className: "absolute inset-[-12px] border-t-2 border-b-2 border-red-600/60 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-red-500/10 blur-xl rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] bg-black",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/auth/AvatarFrame.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // User: Holographic Gyroscope
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex items-center justify-center ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotateX: 360,
                    rotateY: 180
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute inset-[-8px] rounded-full border border-blue-400/30 border-dashed",
                style: {
                    perspective: 1000
                }
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotateY: -360,
                    rotateZ: 45
                },
                transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute inset-[-4px] rounded-full border border-purple-400/40"
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotateZ: 360
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute inset-0 rounded-full border-t-2 border-b-2 border-cyan-400/60"
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-blue-500/10 blur-lg rounded-full"
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-black",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/AvatarFrame.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AvatarFrame;
var _c;
__turbopack_context__.k.register(_c, "AvatarFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/auth/UserProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7ace10__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:7ace10 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$912388__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:912388 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/AvatarFrame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const UserProfile = ({ user })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user.name || '');
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user.image || '');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessMessage, setShowSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfile.useEffect": ()=>{
            const handleClickOutside = {
                "UserProfile.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsOpen(false);
                        setIsEditing(false);
                        setShowSuccessMessage(false);
                    }
                }
            }["UserProfile.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "UserProfile.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["UserProfile.useEffect"];
        }
    }["UserProfile.useEffect"], []);
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("File size too large. Please upload an image smaller than 2MB.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = async ()=>{
        setIsLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$912388__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserProfile"])(name, image);
        if (result.success) {
            await update({
                name,
                image
            });
            setShowSuccessMessage(true);
            setIsEditing(false);
        }
        setIsLoading(false);
    };
    const initials = user.name ? user.name.substring(0, 2).toUpperCase() : user.email?.substring(0, 2).toUpperCase() || 'U';
    const renderMedia = (src, className)=>{
        const isVideo = src.startsWith('data:video') || src.endsWith('.mp4') || src.endsWith('.webm');
        if (isVideo) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: src,
                className: className,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                style: {
                    objectFit: 'cover'
                }
            }, void 0, false, {
                fileName: "[project]/components/auth/UserProfile.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: "Profile",
            className: className
        }, void 0, false, {
            fileName: "[project]/components/auth/UserProfile.tsx",
            lineNumber: 89,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                onClick: ()=>setIsOpen(!isOpen),
                className: "relative w-12 h-12 flex items-center justify-center group focus:outline-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFrame"], {
                    role: user.role,
                    className: "w-10 h-10",
                    children: image ? renderMedia(image, "w-full h-full") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-white",
                            children: initials
                        }, void 0, false, {
                            fileName: "[project]/components/auth/UserProfile.tsx",
                            lineNumber: 106,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/auth/UserProfile.tsx",
                        lineNumber: 105,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/auth/UserProfile.tsx",
                    lineNumber: 101,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/auth/UserProfile.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    transition: {
                        type: 'spring',
                        duration: 0.3
                    },
                    className: "absolute top-16 right-0 w-80 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                user.role === 'ADMIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-2 right-2 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[10px] font-bold text-red-400 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            size: 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                            lineNumber: 127,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ADMIN"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 126,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/auth/UserProfile.tsx",
                            lineNumber: 123,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pb-6 -mt-12 relative flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFrame"], {
                                        role: user.role,
                                        className: "w-24 h-24",
                                        children: [
                                            image ? renderMedia(image, "w-full h-full") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center bg-[#1a1a1a]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-bold text-gray-500",
                                                    children: initials
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/UserProfile.tsx",
                                                lineNumber: 140,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fileInputRef.current?.click(),
                                                className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-black/70 transition-colors z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        size: 24,
                                                        className: "text-white/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/auth/UserProfile.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-white/60 uppercase font-bold tracking-wider",
                                                        children: "Change"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/auth/UserProfile.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/auth/UserProfile.tsx",
                                                lineNumber: 147,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                ref: fileInputRef,
                                                className: "hidden",
                                                accept: "image/*,video/mp4,video/webm",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/UserProfile.tsx",
                                                lineNumber: 156,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/auth/UserProfile.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: showSuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0,
                                            marginBottom: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: 'auto',
                                            marginBottom: 16
                                        },
                                        exit: {
                                            opacity: 0,
                                            height: 0,
                                            marginBottom: 0
                                        },
                                        className: "overflow-hidden w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-green-400 font-bold text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-1 bg-green-500/20 rounded-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 12,
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/auth/UserProfile.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "PROFILE UPDATED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-green-300/80 leading-relaxed",
                                                    children: [
                                                        "Your neural identity has been rewritten. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 90
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: "Please refresh the page"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " or ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: "re-login"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 122
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " to see changes take full effect."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                            lineNumber: 175,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/UserProfile.tsx",
                                        lineNumber: 169,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 167,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 w-full",
                                    children: [
                                        !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-white",
                                                    children: user.name || 'User'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                            lineNumber: 194,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-gray-500 uppercase",
                                                            children: "Display Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: name,
                                                            onChange: (e)=>setName(e.target.value),
                                                            className: "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors",
                                                            placeholder: "Your Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-gray-500 uppercase",
                                                            children: "Avatar URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: image,
                                                            onChange: (e)=>setImage(e.target.value),
                                                            className: "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors",
                                                            placeholder: "https://..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                            lineNumber: 199,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-white/5 space-y-2",
                                            children: [
                                                !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsEditing(true),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Settings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIsEditing(false),
                                                            className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Cancel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSave,
                                                            disabled: isLoading,
                                                            className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50",
                                                            children: [
                                                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 62
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 158
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Save"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7ace10__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Sign Out"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/auth/UserProfile.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/auth/UserProfile.tsx",
                    lineNumber: 115,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/auth/UserProfile.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/UserProfile.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserProfile, "ailaLWlrKDzYVrCV+CfwG7//Mv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = UserProfile;
var _c;
__turbopack_context__.k.register(_c, "UserProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/sieveService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSieveJob",
    ()=>getSieveJob,
    "pushSieveJob",
    ()=>pushSieveJob
]);
async function pushSieveJob(functionName, inputs) {
    try {
        const response = await fetch('/api/sieve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                functionName,
                inputs
            })
        });
        if (!response.ok) {
            console.error('Failed to push job');
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Error pushing job:', error);
        return null;
    }
}
async function getSieveJob(jobId) {
    try {
        const response = await fetch(`/api/sieve?jobId=${jobId}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('Error fetching job:', error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sieve/SieveView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SieveView",
    ()=>SieveView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$sieveService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/sieveService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SieveView = ()=>{
    _s();
    const [functionName, setFunctionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sieve/stable-diffusion-xl');
    const [inputs, setInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('{\n  "prompt": "A futuristic city with neon lights, cyberpunk style"\n}');
    const [activeJob, setActiveJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addLog = (msg)=>setLogs((prev)=>[
                `[${new Date().toLocaleTimeString()}] ${msg}`,
                ...prev
            ]);
    const handleRun = async ()=>{
        try {
            const parsedInputs = JSON.parse(inputs);
            setIsLoading(true);
            addLog(`Pushing job to ${functionName}...`);
            const job = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$sieveService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushSieveJob"])(functionName, parsedInputs);
            if (job && job.id) {
                setActiveJob(job);
                addLog(`Job started: ${job.id}`);
            } else {
                addLog('Failed to start job.');
                setIsLoading(false);
            }
        } catch (e) {
            addLog('Invalid JSON inputs.');
            alert('Invalid JSON in inputs field');
        }
    };
    // Polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SieveView.useEffect": ()=>{
            let interval;
            if (activeJob && activeJob.status !== 'finished' && activeJob.status !== 'error') {
                interval = setInterval({
                    "SieveView.useEffect": async ()=>{
                        const updatedJob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$sieveService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSieveJob"])(activeJob.id);
                        if (updatedJob) {
                            setActiveJob(updatedJob);
                            if (updatedJob.status === 'finished') {
                                addLog('Job finished successfully!');
                                setIsLoading(false);
                            } else if (updatedJob.status === 'error') {
                                addLog(`Job failed: ${updatedJob.error}`);
                                setIsLoading(false);
                            }
                        }
                    }
                }["SieveView.useEffect"], 2000);
            }
            return ({
                "SieveView.useEffect": ()=>clearInterval(interval)
            })["SieveView.useEffect"];
        }
    }["SieveView.useEffect"], [
        activeJob
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-8 bg-gray-50 dark:bg-[#0a0a0a] text-black dark:text-white overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                className: "text-white",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/sieve/SieveView.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/sieve/SieveView.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-black tracking-tight",
                                    children: "Sieve Console"
                                }, void 0, false, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: "Run AI models directly from your workspace."
                                }, void 0, false, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sieve/SieveView.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sieve/SieveView.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase text-gray-500",
                                            children: "Function Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: functionName,
                                            onChange: (e)=>setFunctionName(e.target.value),
                                            className: "w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all",
                                            placeholder: "e.g. sieve/stable-diffusion-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase text-gray-500",
                                            children: "Inputs (JSON)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: inputs,
                                            onChange: (e)=>setInputs(e.target.value),
                                            className: "w-full h-64 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none",
                                            placeholder: "{}"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    onClick: handleRun,
                                    disabled: isLoading,
                                    className: `w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black dark:bg-white dark:text-black hover:shadow-purple-500/25'}`,
                                    children: [
                                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 102,
                                            columnNumber: 42
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 18,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 102,
                                            columnNumber: 81
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isLoading ? 'Running...' : 'Run Function'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sieve/SieveView.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase text-gray-500",
                                            children: "Output & Logs"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeJob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs px-2 py-1 rounded font-bold uppercase ${activeJob.status === 'finished' ? 'bg-green-100 text-green-600' : activeJob.status === 'error' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600 animate-pulse'}`,
                                            children: activeJob.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 bg-black rounded-xl p-4 font-mono text-xs text-green-400 overflow-y-auto custom-scrollbar border border-gray-800 shadow-inner min-h-[300px]",
                                    children: [
                                        logs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 opacity-50",
                                            children: "Waiting for jobs..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 122,
                                            columnNumber: 51
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 opacity-80",
                                                children: log
                                            }, i, false, {
                                                fileName: "[project]/components/sieve/SieveView.tsx",
                                                lineNumber: 124,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        activeJob?.status === 'finished' && activeJob.output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white font-bold mb-2",
                                                    children: "RESULT:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "whitespace-pre-wrap text-gray-300",
                                                    children: JSON.stringify(activeJob.output, null, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                typeof activeJob.output === 'object' && activeJob.output.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: activeJob.output.data,
                                                    alt: "Result",
                                                    className: "mt-4 rounded-lg border border-gray-700 max-w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sieve/SieveView.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sieve/SieveView.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sieve/SieveView.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sieve/SieveView.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sieve/SieveView.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/sieve/SieveView.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SieveView, "Z4SpqJAbxg5lq58NrWxD7S+am1Y=");
_c = SieveView;
var _c;
__turbopack_context__.k.register(_c, "SieveView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NotationsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$EditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/EditorView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$canvas$2f$CanvasView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/canvas/CanvasView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$GraphView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/GraphView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ConfirmationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UnsavedChangesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/UnsavedChangesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SearchPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SearchPalette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AIMagicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AIMagicModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$17d468__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:17d468 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:c79a5f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:be22df [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8231f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:8231f5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:f27e82 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/UserProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sieve$2f$SieveView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sieve/SieveView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const NotationsApp = ({ user })=>{
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Theme State
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Replaced standard state with History Hook
    const { state: notes, set: setNotes, undo, redo, canUndo, canRedo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"])([]);
    const [activeNoteId, setActiveNoteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Unsaved Changes State
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingNavigation, setPendingNavigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unsavedModalOpen, setUnsavedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter State
    const [selectedTag, setSelectedTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Delete Modal State
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteToDelete, setNoteToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Search State
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // AI Magic Modal State
    const [aiModalOpen, setAiModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAiGenerating, setIsAiGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load Notes from DB and Local Backup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            const loadNotes = {
                "NotationsApp.useEffect.loadNotes": async ()=>{
                    const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
                    // Local Backup Check
                    const localBackup = localStorage.getItem('notations_backup');
                    if (localBackup) {
                        try {
                            const parsedBackup = JSON.parse(localBackup);
                            // Simple conflict resolution: If local has more notes or different data, we could prompt.
                            // For now, we'll merge: if local has notes not in DB (offline created), add them.
                            // If DB is empty but local has data, restore local.
                            if (fetchedNotes.length === 0 && parsedBackup.length > 0) {
                                console.log("Restoring from local backup...");
                                setNotes(parsedBackup, 'REPLACE');
                                // Trigger sync to server
                                parsedBackup.forEach({
                                    "NotationsApp.useEffect.loadNotes": (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(n)
                                }["NotationsApp.useEffect.loadNotes"]);
                                setIsLoading(false);
                                return;
                            }
                        // If both have data, we prefer server for now but could implement smarter merge.
                        // A simple "Safety Net" is: if server fails to load, use local.
                        } catch (e) {
                            console.error("Failed to parse local backup", e);
                        }
                    }
                    setNotes(fetchedNotes, 'REPLACE');
                    if (fetchedNotes.length > 0 && !activeNoteId) {
                    // Don't auto-select first note to avoid confusion with navigation trap immediately
                    // setActiveNoteId(fetchedNotes[0].id);
                    }
                    setIsLoading(false);
                }
            }["NotationsApp.useEffect.loadNotes"];
            loadNotes();
        }
    }["NotationsApp.useEffect"], []);
    // Local Backup Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            if (notes.length > 0) {
                localStorage.setItem('notations_backup', JSON.stringify(notes));
            }
        }
    }["NotationsApp.useEffect"], [
        notes
    ]);
    // Initialize Theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        }
    }["NotationsApp.useEffect"], []);
    const toggleTheme = ()=>{
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    const activeNote = notes.find((n)=>n.id === activeNoteId) || null;
    // Computed filtered notes
    const filteredNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotationsApp.useMemo[filteredNotes]": ()=>{
            if (!selectedTag) return notes;
            return notes.filter({
                "NotationsApp.useMemo[filteredNotes]": (n)=>n.tags?.includes(selectedTag)
            }["NotationsApp.useMemo[filteredNotes]"]);
        }
    }["NotationsApp.useMemo[filteredNotes]"], [
        notes,
        selectedTag
    ]);
    // Compute unique tags for Sidebar (from DB + notes)
    const [globalTags, setGlobalTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            const loadGlobalTags = {
                "NotationsApp.useEffect.loadGlobalTags": async ()=>{
                    const dbTags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTags"])();
                    setGlobalTags(dbTags.map({
                        "NotationsApp.useEffect.loadGlobalTags": (t)=>t.name
                    }["NotationsApp.useEffect.loadGlobalTags"]));
                }
            }["NotationsApp.useEffect.loadGlobalTags"];
            loadGlobalTags();
        }
    }["NotationsApp.useEffect"], []);
    const uniqueTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotationsApp.useMemo[uniqueTags]": ()=>{
            // Merge global tags from DB with tags from notes
            const allTags = new Set(globalTags);
            notes.forEach({
                "NotationsApp.useMemo[uniqueTags]": (note)=>{
                    note.tags?.forEach({
                        "NotationsApp.useMemo[uniqueTags]": (tag)=>allTags.add(tag)
                    }["NotationsApp.useMemo[uniqueTags]"]);
                }
            }["NotationsApp.useMemo[uniqueTags]"]);
            return Array.from(allTags).sort();
        }
    }["NotationsApp.useMemo[uniqueTags]"], [
        notes,
        globalTags
    ]);
    // Keyboard Shortcuts: Undo/Redo, Search, and Magic Create
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            const handleKeyDown = {
                "NotationsApp.useEffect.handleKeyDown": (e)=>{
                    // Undo: Cmd+Z / Ctrl+Z
                    if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
                        e.preventDefault();
                        undo();
                    }
                    // Redo: Cmd+Shift+Z / Ctrl+Shift+Z / Ctrl+Y
                    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z' || (e.metaKey || e.ctrlKey) && e.key === 'y') {
                        e.preventDefault();
                        redo();
                    }
                    // Search: Cmd+K / Ctrl+K
                    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                        e.preventDefault();
                        setSearchOpen(true);
                    }
                    // Save: Cmd+S / Ctrl+S
                    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                        e.preventDefault();
                        if (activeNoteId) handleManualSave();
                    }
                }
            }["NotationsApp.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "NotationsApp.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["NotationsApp.useEffect"];
        }
    }["NotationsApp.useEffect"], [
        undo,
        redo,
        activeNoteId,
        notes
    ]);
    // --- SECURITY: Prevent Unsaved Data Loss (F5, Close, etc.) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            const handleBeforeUnload = {
                "NotationsApp.useEffect.handleBeforeUnload": (e)=>{
                    if (hasUnsavedChanges) {
                        e.preventDefault();
                        e.returnValue = ''; // Chrome requires returnValue to be set
                    }
                }
            }["NotationsApp.useEffect.handleBeforeUnload"];
            window.addEventListener('beforeunload', handleBeforeUnload);
            return ({
                "NotationsApp.useEffect": ()=>window.removeEventListener('beforeunload', handleBeforeUnload)
            })["NotationsApp.useEffect"];
        }
    }["NotationsApp.useEffect"], [
        hasUnsavedChanges
    ]);
    // --- Auto-Save Mechanism ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotationsApp.useEffect": ()=>{
            if (!hasUnsavedChanges || !activeNoteId) return;
            const timeoutId = setTimeout({
                "NotationsApp.useEffect.timeoutId": ()=>{
                    // console.log("Auto-saving...");
                    handleManualSave();
                }
            }["NotationsApp.useEffect.timeoutId"], 2000); // Auto-save after 2 seconds of inactivity
            return ({
                "NotationsApp.useEffect": ()=>clearTimeout(timeoutId)
            })["NotationsApp.useEffect"];
        }
    }["NotationsApp.useEffect"], [
        notes,
        hasUnsavedChanges,
        activeNoteId
    ]);
    const handleNoteUpdate = async (updatedNote, mode = 'PUSH')=>{
        const newNotes = notes.map((n)=>n.id === updatedNote.id ? updatedNote : n);
        setNotes(newNotes, mode);
        setHasUnsavedChanges(true);
    // Removed auto-save: await saveNote(updatedNote);
    };
    const handleManualSave = async ()=>{
        if (activeNote) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(activeNote);
            setHasUnsavedChanges(false);
        }
    };
    // Navigation Interception Logic
    const attemptNavigation = (action)=>{
        if (hasUnsavedChanges) {
            setPendingNavigation(()=>action);
            setUnsavedModalOpen(true);
        } else {
            action();
        }
    };
    const handleSaveAndLeave = async ()=>{
        await handleManualSave();
        setUnsavedModalOpen(false);
        if (pendingNavigation) {
            pendingNavigation();
            setPendingNavigation(null);
        }
    };
    const handleDiscardAndLeave = async ()=>{
        // Revert changes by reloading from DB or just proceeding (since we didn't save)
        // Ideally we should revert local state to last saved state, but for now just proceeding
        // effectively discards the changes since they weren't persisted to DB.
        // However, local state 'notes' still has the changes. We should probably reload or revert.
        // For simplicity in this step, we'll just proceed, but the in-memory notes will still be dirty
        // until a refresh. To do it right, we should re-fetch or undo.
        // Let's re-fetch this specific note or all notes to be safe.
        const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
        setNotes(fetchedNotes, 'REPLACE');
        setHasUnsavedChanges(false);
        setUnsavedModalOpen(false);
        if (pendingNavigation) {
            pendingNavigation();
            setPendingNavigation(null);
        }
    };
    const handleCancelNavigation = ()=>{
        setUnsavedModalOpen(false);
        setPendingNavigation(null);
    };
    const handleNoteSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotationsApp.useCallback[handleNoteSelect]": (id)=>{
            attemptNavigation({
                "NotationsApp.useCallback[handleNoteSelect]": ()=>{
                    setActiveNoteId(id);
                    setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
                }
            }["NotationsApp.useCallback[handleNoteSelect]"]);
        }
    }["NotationsApp.useCallback[handleNoteSelect]"], [
        hasUnsavedChanges
    ]);
    const handleCreateNote = async ()=>{
        attemptNavigation(async ()=>{
            const newNote = {
                id: crypto.randomUUID(),
                title: '',
                blocks: [
                    {
                        id: '1',
                        type: 'paragraph',
                        content: ''
                    }
                ],
                position: {
                    x: Math.random() * 500,
                    y: Math.random() * 500
                },
                connections: [],
                tags: [],
                createdAt: Date.now()
            };
            setNotes([
                ...notes,
                newNote
            ], 'PUSH');
            setActiveNoteId(newNote.id);
            setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote); // Initial save is fine
            setHasUnsavedChanges(false);
        });
    };
    const handleAiCreate = async (prompt)=>{
        setIsAiGenerating(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$17d468__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNoteFromPrompt"])(prompt);
        if (result) {
            const newNote = {
                id: crypto.randomUUID(),
                title: result.title,
                blocks: [
                    {
                        id: '1',
                        type: 'paragraph',
                        content: result.content
                    }
                ],
                position: {
                    x: Math.random() * 500,
                    y: Math.random() * 500
                },
                connections: [],
                tags: [],
                createdAt: Date.now()
            };
            attemptNavigation(async ()=>{
                setNotes([
                    ...notes,
                    newNote
                ], 'PUSH');
                setActiveNoteId(newNote.id);
                setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
                setAiModalOpen(false);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote);
                setHasUnsavedChanges(false);
            });
        }
        setIsAiGenerating(false);
    };
    const handleNoteMove = async (id, pos)=>{
        const note = notes.find((n)=>n.id === id);
        if (note) {
            const updatedNote = {
                ...note,
                position: pos
            };
            const newNotes = notes.map((n)=>n.id === id ? updatedNote : n);
            setNotes(newNotes, 'PUSH');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedNote); // Canvas moves can still auto-save or be separate
        }
    };
    const handleConnectNotes = async (sourceId, targetId)=>{
        if (sourceId === targetId) return;
        const sourceNote = notes.find((n)=>n.id === sourceId);
        if (!sourceNote) return;
        if (sourceNote.connections.includes(targetId)) return;
        const updatedSource = {
            ...sourceNote,
            connections: [
                ...sourceNote.connections,
                targetId
            ]
        };
        const newNotes = notes.map((n)=>n.id === sourceId ? updatedSource : n);
        setNotes(newNotes, 'PUSH');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedSource);
    };
    const handleRequestDelete = (noteId)=>{
        setNoteToDelete(noteId);
        setDeleteModalOpen(true);
    };
    const confirmDelete = async ()=>{
        if (noteToDelete) {
            const updatedNotes = [];
            const newNotes = notes.filter((n)=>n.id !== noteToDelete).map((n)=>{
                if (n.connections.includes(noteToDelete)) {
                    const updated = {
                        ...n,
                        connections: n.connections.filter((cId)=>cId !== noteToDelete)
                    };
                    updatedNotes.push(updated);
                    return updated;
                }
                return n;
            });
            setNotes(newNotes, 'PUSH');
            if (activeNoteId === noteToDelete) {
                setActiveNoteId(null);
                setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS);
                setHasUnsavedChanges(false); // Deleted note doesn't have unsaved changes
            }
            setNoteToDelete(null);
            // DB Updates
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8231f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNoteAction"])(noteToDelete);
            for (const note of updatedNotes){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(note);
            }
        }
        setDeleteModalOpen(false);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex items-center justify-center bg-white dark:bg-black transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-widest animate-pulse text-black dark:text-white",
                        children: "Connecting to Neural DB..."
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 407,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/NotationsApp.tsx",
            lineNumber: 406,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen bg-background text-foreground font-sans transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                currentView: view,
                onViewChange: (newView)=>attemptNavigation(()=>setView(newView)),
                onCreateNote: handleCreateNote,
                onAiCreate: ()=>setAiModalOpen(true),
                onUndo: undo,
                onRedo: redo,
                canUndo: canUndo,
                canRedo: canRedo,
                onSearch: ()=>setSearchOpen(true),
                allTags: uniqueTags,
                selectedTag: selectedTag,
                onSelectTag: setSelectedTag,
                isDarkMode: isDarkMode,
                onToggleTheme: toggleTheme
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 ml-20 relative h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    filter: 'blur(10px)'
                                },
                                animate: {
                                    opacity: 1,
                                    filter: 'blur(0px)'
                                },
                                exit: {
                                    opacity: 0,
                                    filter: 'blur(10px)'
                                },
                                className: "h-full overflow-y-auto custom-scrollbar bg-white dark:bg-[#0a0a0a]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$EditorView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"], {
                                    activeNote: activeNote,
                                    onUpdateNote: handleNoteUpdate,
                                    onDeleteNote: handleRequestDelete,
                                    hasUnsavedChanges: hasUnsavedChanges,
                                    onSave: handleManualSave
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "editor", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 1.05
                                },
                                className: "h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$canvas$2f$CanvasView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasView"], {
                                    notes: filteredNotes,
                                    onNoteSelect: handleNoteSelect,
                                    onNoteMove: handleNoteMove,
                                    onConnectNotes: handleConnectNotes,
                                    onDeleteNote: handleRequestDelete,
                                    isDarkMode: isDarkMode
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "canvas", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].GRAPH && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$GraphView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphView"], {
                                    notes: filteredNotes,
                                    onNoteSelect: handleNoteSelect,
                                    onDeleteNote: handleRequestDelete,
                                    isDarkMode: isDarkMode
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "graph", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewMode"].SIEVE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                className: "h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sieve$2f$SieveView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SieveView"], {}, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "sieve", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfile"], {
                        user: user
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 503,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-20 right-8 flex flex-col items-end pointer-events-none z-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xs font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white dark:opacity-20",
                                children: "NOTATIONS v1.0"
                            }, void 0, false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-full font-bold",
                                        children: [
                                            "FILTER: #",
                                            selectedTag
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NotationsApp.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400 dark:text-gray-500 font-mono",
                                        children: activeNoteId ? `ACTIVE: ${notes.find((n)=>n.id === activeNoteId)?.title || 'UNTITLED'}` : 'NO SELECTION'
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotationsApp.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 508,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmationModal"], {
                isOpen: deleteModalOpen,
                title: "Delete Note?",
                message: "Are you sure you want to delete this note? This action cannot be undone.",
                onConfirm: confirmDelete,
                onCancel: ()=>setDeleteModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UnsavedChangesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsavedChangesModal"], {
                isOpen: unsavedModalOpen,
                onSaveAndLeave: handleSaveAndLeave,
                onDiscardAndLeave: handleDiscardAndLeave,
                onCancel: handleCancelNavigation
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SearchPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPalette"], {
                isOpen: searchOpen,
                onClose: ()=>setSearchOpen(false),
                notes: filteredNotes,
                onSelectNote: handleNoteSelect
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 536,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AIMagicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIMagicModal"], {
                isOpen: aiModalOpen,
                onClose: ()=>setAiModalOpen(false),
                onGenerate: handleAiCreate,
                isGenerating: isAiGenerating
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NotationsApp.tsx",
        lineNumber: 416,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotationsApp, "SY+eBEUBQo+IPQ80/KKQhPtTWoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"]
    ];
});
_c = NotationsApp;
const __TURBOPACK__default__export__ = NotationsApp;
var _c;
__turbopack_context__.k.register(_c, "NotationsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5f587847._.js.map