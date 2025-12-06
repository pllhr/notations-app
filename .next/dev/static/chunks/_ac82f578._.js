(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewMode",
    ()=>ViewMode
]);
var ViewMode = /*#__PURE__*/ function(ViewMode) {
    ViewMode["EDITOR"] = "EDITOR";
    ViewMode["CANVAS"] = "CANVAS";
    ViewMode["GRAPH"] = "GRAPH";
    ViewMode["SIEVE"] = "SIEVE";
    return ViewMode;
}({});
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
;
var _s = __turbopack_context__.k.signature();
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
                lineNumber: 42,
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
                lineNumber: 43,
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
                lineNumber: 44,
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
                lineNumber: 45,
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
                lineNumber: 54,
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
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `relative z-10 transition-colors duration-200 ${currentView === item.id ? 'text-white dark:text-black' : 'text-gray-400 hover:text-black dark:hover:text-white'}`,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-[60]",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 58,
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
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 86,
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
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 85,
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
                            lineNumber: 117,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 117,
                            columnNumber: 45
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 110,
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
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 122,
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
                                            lineNumber: 138,
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
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onSelectTag(null),
                                                            className: "text-[10px] text-red-500 hover:underline",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-60 overflow-y-auto custom-scrollbar",
                                                    children: allTags.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 text-xs text-gray-400 italic text-center",
                                                        children: "No tags found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                                        lineNumber: 155,
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
                                                                    lineNumber: 165,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedTag === tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 121,
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
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 177,
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
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 188,
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
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 49,
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
"[project]/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_NAME",
    ()=>APP_NAME,
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
const ContentBlock = ({ id, html, tagName, className = '', onChange, onKeyDown, placeholder, autoFocus, onFocus })=>{
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
        const newHtml = e.currentTarget.innerHTML;
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
    const Tag = tagName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: contentEditableRef,
        className: `outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300 ${className}`,
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: handleInput,
        onKeyDown: handleKeyDown,
        onFocus: ()=>onFocus?.(id),
        "data-placeholder": placeholder,
        dangerouslySetInnerHTML: innerHTML
    }, void 0, false, {
        fileName: "[project]/components/editor/ContentBlock.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContentBlock, "RtBgStpnRS38XE1injgXSxm8SLc=");
_c = ContentBlock;
var _c;
__turbopack_context__.k.register(_c, "ContentBlock");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
;
const ImageBlock = ({ id, src, onDelete, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative group/image ${className} my-4`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: "Note attachment",
                className: "max-w-full rounded-lg border border-gray-200 dark:border-neutral-800 shadow-sm"
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    if (window.confirm('Are you sure you want to delete this image?')) {
                        onDelete(id);
                    }
                },
                className: "absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/80 hover:bg-red-500 hover:text-white rounded-full text-gray-600 dark:text-gray-300 transition-all opacity-0 group-hover/image:opacity-100 backdrop-blur-sm",
                title: "Remove image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/components/editor/ImageBlock.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/ImageBlock.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageBlock;
var _c;
__turbopack_context__.k.register(_c, "ImageBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/EditorView.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/editor/EditorView.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
                    lineNumber: 412,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 404,
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
                                lineNumber: 419,
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
                                lineNumber: 423,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 dark:text-neutral-400 line-clamp-5 leading-relaxed min-h-[1.5em] font-medium",
                        children: previewText || (linkData ? "" : "No content.")
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 425,
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
                                    lineNumber: 433,
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
                                lineNumber: 438,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 431,
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
                                lineNumber: 445,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-gray-700 dark:text-gray-300 truncate flex-1",
                                children: linkData.hostname
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 10,
                                className: "text-gray-500 dark:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 417,
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
                lineNumber: 462,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas/CanvasView.tsx",
        lineNumber: 369,
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
"[project]/app/data:bb9f1c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a069e8f1f4f1494200b20c0bc84072e394479fe9":"getNotes"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getNotes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a069e8f1f4f1494200b20c0bc84072e394479fe9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNotes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1JBNklzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:26ddc6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401cd273f71d2e0f903f4f9a93d8fe00cb48938531":"saveNote"},"app/actions.ts",""] */ __turbopack_context__.s([
    "saveNote",
    ()=>saveNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var saveNote = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401cd273f71d2e0f903f4f9a93d8fe00cb48938531", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveNote"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1JBNEtzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:5cb948 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404a74e22b5abf525b0b3284acc53bad418d3e5a87":"deleteNoteAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "deleteNoteAction",
    ()=>deleteNoteAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteNoteAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404a74e22b5abf525b0b3284acc53bad418d3e5a87", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNoteAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBbU5zQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:31831c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006e4d292e2cbdbf295400e16cc531e51233b7a991":"signOutAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("006e4d292e2cbdbf295400e16cc531e51233b7a991", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVJBd0lzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:e0166c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6001f311435a739c25682d5782f498ba891734c6d3":"updateUserProfile"},"app/actions.ts",""] */ __turbopack_context__.s([
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateUserProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6001f311435a739c25682d5782f498ba891734c6d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBbUdzQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$31831c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:31831c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$e0166c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:e0166c [app-client] (ecmascript) <text/javascript>");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$e0166c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserProfile"])(name, image);
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
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$31831c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$bb9f1c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:bb9f1c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:26ddc6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$5cb948__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:5cb948 [app-client] (ecmascript) <text/javascript>");
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
                    const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$bb9f1c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
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
                                    "NotationsApp.useEffect.loadNotes": (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(n)
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
    // Compute unique tags for Sidebar
    const uniqueTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotationsApp.useMemo[uniqueTags]": ()=>{
            const tags = new Set();
            notes.forEach({
                "NotationsApp.useMemo[uniqueTags]": (note)=>{
                    note.tags?.forEach({
                        "NotationsApp.useMemo[uniqueTags]": (tag)=>tags.add(tag)
                    }["NotationsApp.useMemo[uniqueTags]"]);
                }
            }["NotationsApp.useMemo[uniqueTags]"]);
            return Array.from(tags).sort();
        }
    }["NotationsApp.useMemo[uniqueTags]"], [
        notes
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(activeNote);
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
        const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$bb9f1c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote); // Initial save is fine
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedNote); // Canvas moves can still auto-save or be separate
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedSource);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$5cb948__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNoteAction"])(noteToDelete);
            for (const note of updatedNotes){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$26ddc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(note);
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
                        lineNumber: 397,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-widest animate-pulse text-black dark:text-white",
                        children: "Connecting to Neural DB..."
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/NotationsApp.tsx",
            lineNumber: 395,
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
                lineNumber: 406,
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
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "editor", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 426,
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
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "canvas", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 444,
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
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "graph", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 463,
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
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "sieve", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfile"], {
                        user: user
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 492,
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
                                lineNumber: 496,
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
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400 dark:text-gray-500 font-mono",
                                        children: activeNoteId ? `ACTIVE: ${notes.find((n)=>n.id === activeNoteId)?.title || 'UNTITLED'}` : 'NO SELECTION'
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotationsApp.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 423,
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
                lineNumber: 510,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UnsavedChangesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsavedChangesModal"], {
                isOpen: unsavedModalOpen,
                onSaveAndLeave: handleSaveAndLeave,
                onDiscardAndLeave: handleDiscardAndLeave,
                onCancel: handleCancelNavigation
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SearchPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPalette"], {
                isOpen: searchOpen,
                onClose: ()=>setSearchOpen(false),
                notes: filteredNotes,
                onSelectNote: handleNoteSelect
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AIMagicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIMagicModal"], {
                isOpen: aiModalOpen,
                onClose: ()=>setAiModalOpen(false),
                onGenerate: handleAiCreate,
                isGenerating: isAiGenerating
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NotationsApp.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotationsApp, "3fU5ZGnybOe6ukyesOFvF/5rfQM=", false, function() {
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

//# sourceMappingURL=_ac82f578._.js.map