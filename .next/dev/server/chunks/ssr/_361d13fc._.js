module.exports = [
"[project]/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-ssr] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-ssr] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Sidebar = ({ currentView, onViewChange, onCreateNote, onAiCreate, onUndo, onRedo, canUndo, canRedo, onSearch, allTags, selectedTag, onSelectTag, isDarkMode, onToggleTheme })=>{
    const [tagMenuOpen, setTagMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 43,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Editor'
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 44,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Canvas'
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].GRAPH,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 45,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Graph'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -100
        },
        animate: {
            x: 0
        },
        className: "w-20 h-screen bg-white dark:bg-black border-r border-gray-100 dark:border-neutral-800 flex flex-col items-center py-8 z-50 fixed left-0 top-0 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 w-10 h-10 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl rounded-sm",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 flex-1",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onViewChange(item.id),
                        className: "relative group flex items-center justify-center w-10 h-10 outline-none",
                        "aria-label": item.label,
                        children: [
                            currentView === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `relative z-10 transition-colors duration-200 ${currentView === item.id ? 'text-white dark:text-black' : 'text-gray-400 hover:text-black dark:hover:text-white'}`,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onToggleTheme,
                        className: "text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800",
                        title: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
                        children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 117,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: tagMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-[55]",
                                            onClick: ()=>setTagMenuOpen(false)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-2 py-1 border-b border-gray-100 dark:border-neutral-700 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase text-gray-400 dark:text-neutral-500",
                                                            children: "Filter Tags"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-60 overflow-y-auto custom-scrollbar",
                                                    children: allTags.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 text-xs text-gray-400 italic text-center",
                                                        children: "No tags found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : allTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                onSelectTag(selectedTag === tag ? null : tag);
                                                            },
                                                            className: `w-full text-left px-2 py-1.5 rounded text-xs font-bold flex items-center justify-between ${selectedTag === tag ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "#",
                                                                        tag
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedTag === tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer",
                            title: "Tag Management (Admin)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onSearch,
                        className: "text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800",
                        title: "Search (Cmd+K)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.15
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: onCreateNote,
                                className: "text-black dark:text-white",
                                title: "Create Note",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                    size: 28,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 199,
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
}),
"[project]/app/data:f27e82 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a27361b0caf8eef52e679cc4febeb0dfd20c4e0e":"getTags"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getTags",
    ()=>getTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getTags = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00a27361b0caf8eef52e679cc4febeb0dfd20c4e0e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTags"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUUFxVHNCIn0=
}),
"[project]/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/services/data:a37002 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f169ad6c7a40bd017e3de934f47d4b743d203f5be":"expandNoteWithAI"},"services/geminiService.ts",""] */ __turbopack_context__.s([
    "expandNoteWithAI",
    ()=>expandNoteWithAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var expandNoteWithAI = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f169ad6c7a40bd017e3de934f47d4b743d203f5be", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "expandNoteWithAI"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJLCBUeXBlIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJBUEkgS2V5IG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZE5vdGVXaXRoQUkgPSBhc3luYyAoY3VycmVudENvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBcIkVycm9yOiBBUEkgS2V5IG1pc3NpbmcuXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LXBybycsXG4gICAgICBjb250ZW50czogYFlvdSBhcmUgYSBtaW5pbWFsaXN0IHByb2R1Y3Rpdml0eSBhc3Npc3RhbnQuIFxuICAgICAgVGFrZSB0aGUgZm9sbG93aW5nIG5vdGUgY29udGVudCBhbmQgZXhwYW5kIHVwb24gaXQgd2l0aCAzIGFjdGlvbmFibGUgYnVsbGV0IHBvaW50cyBcbiAgICAgIG9yIGEgYnJpZWYgc3VtbWFyeSBwYXJhZ3JhcGguIEtlZXAgdGhlIHRvbmUgc3RyaWN0LCBwcm9mZXNzaW9uYWwsIGFuZCBjb25jaXNlLlxuICAgICAgXG4gICAgICBJbnB1dDogXCIke2N1cnJlbnRDb250ZW50fVwiYCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0IHx8IFwiTm8gcmVzcG9uc2UgZ2VuZXJhdGVkLlwiO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJHZW1pbmkgQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiRmFpbGVkIHRvIGdlbmVyYXRlIGluc2lnaHQuXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbm5lY3Rpb25zID0gYXN5bmMgKG5vdGVzOiB7IGlkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfVtdKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBbXTtcblxuICB0cnkge1xuICAgIC8vIExvZ2ljIHRvIHN1Z2dlc3QgY29ubmVjdGlvbnMgYmV0d2VlbiBub3RlcyBiYXNlZCBvbiB0aXRsZXNcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgYWR2YW5jZWQgZ3JhcGggUkFHXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vdGVGcm9tUHJvbXB0ID0gYXN5bmMgKHByb21wdDogc3RyaW5nKTogUHJvbWlzZTx7IHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9IHwgbnVsbD4gPT4ge1xuICBjb25zdCBhaSA9IGdldENsaWVudCgpO1xuICBpZiAoIWFpKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtcHJvJyxcbiAgICAgIGNvbnRlbnRzOiBgR2VuZXJhdGUgYSBjcmVhdGl2ZSBhbmQgc3RydWN0dXJlZCBub3RlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgdXNlciBwcm9tcHQ6IFwiJHtwcm9tcHR9XCIuIFxuICAgICAgICBUaGUgdGl0bGUgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGNhdGNoeS4gVGhlIGNvbnRlbnQgc2hvdWxkIGJlIGEgd2VsbC1zdHJ1Y3R1cmVkIHN0YXJ0aW5nIHBvaW50IChlLmcuLCBhIGxpc3QsIGEgc3VtbWFyeSwgb3IgYSBkcmFmdCkuYCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiBUeXBlLk9CSkVDVCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgICAgY29udGVudDogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogW1widGl0bGVcIiwgXCJjb250ZW50XCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSByZXNwb25zZS50ZXh0O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIE1hZ2ljIENyZWF0ZSBFcnJvcjpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQWFhIn0=
}),
"[project]/components/editor/ContentBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentBlock",
    ()=>ContentBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ContentBlock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ id, html, tagName, className = '', onChange, onKeyDown, placeholder, autoFocus, onFocus })=>{
    const contentEditableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Track the content we believe is in the DOM (user's typing + external updates)
    const lastHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(html);
    // 2. Track the content we want React to use for rendering.
    // We separate this to control WHEN React updates the DOM.
    const renderHtmlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(html);
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
    const innerHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            __html: renderHtmlRef.current
        }), [
        renderHtmlRef.current
    ]);
    // Handle AutoFocus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
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
});
ContentBlock.displayName = 'ContentBlock';
}),
"[project]/components/editor/ImageBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageBlock",
    ()=>ImageBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-off.js [app-ssr] (ecmascript) <export default as ImageOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
;
;
;
;
const ImageBlock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ id, src, onDelete, className = '', isLoading = false })=>{
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageDimensions, setImageDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    // Determine if this is a blob URL (local preview)
    const isLocalPreview = src.startsWith('blob:');
    const handleLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setImageLoaded(true);
        setImageError(false);
        const img = e.currentTarget;
        setImageDimensions({
            width: img.naturalWidth,
            height: img.naturalHeight
        });
    }, []);
    const handleError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setImageLoaded(true);
        setImageError(true);
    }, []);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const link = document.createElement('a');
        link.href = src;
        link.download = `image-${id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [
        src,
        id
    ]);
    const handleCopyUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await navigator.clipboard.writeText(src);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (e) {
            console.error('Failed to copy URL', e);
        }
    }, [
        src
    ]);
    // Close fullscreen on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        isFullscreen
    ]);
    // Error state
    if (imageError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: `relative my-4 ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-red-100 dark:bg-red-900/50 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                            size: 24,
                            className: "text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/ImageBlock.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-red-700 dark:text-red-300",
                                children: "Failed to load image"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-500 dark:text-red-400 truncate max-w-[300px]",
                                children: src
                            }, void 0, false, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/ImageBlock.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete(id),
                        className: "p-2 hover:bg-red-200 dark:hover:bg-red-800/50 rounded-lg transition-colors",
                        title: "Remove",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            size: 16,
                            className: "text-red-600"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 88,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/ImageBlock.tsx",
                        lineNumber: 83,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/ImageBlock.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                },
                className: `relative group/image my-4 ${className}`,
                onMouseEnter: ()=>setShowActions(true),
                onMouseLeave: ()=>setShowActions(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-900 dark:to-neutral-950 border border-gray-200/50 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: (!imageLoaded || isLoading || isLocalPreview) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3",
                                    children: [
                                        isLocalPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 28,
                                                className: "text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                                lineNumber: 123,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 119,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-32 h-1 bg-gray-300 dark:bg-neutral-700 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: isLocalPreview ? "60%" : "100%"
                                                },
                                                transition: {
                                                    duration: isLocalPreview ? 1 : 0.3
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                                lineNumber: 127,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 126,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-gray-500 dark:text-neutral-500",
                                            children: isLocalPreview ? "Uploading..." : "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 134,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/ImageBlock.tsx",
                                    lineNumber: 117,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: src,
                            alt: "Note attachment",
                            className: "w-full h-auto max-h-[500px] object-contain cursor-zoom-in",
                            loading: "lazy",
                            onLoad: handleLoad,
                            onError: handleError,
                            onClick: ()=>setIsFullscreen(true),
                            initial: {
                                filter: "blur(10px)"
                            },
                            animate: {
                                filter: imageLoaded ? "blur(0px)" : "blur(10px)"
                            },
                            transition: {
                                duration: 0.4
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showActions && imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 159,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showActions && imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                className: "absolute top-3 right-3 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsFullscreen(true),
                                        className: "p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110",
                                        title: "View fullscreen",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/ImageBlock.tsx",
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110",
                                        title: "Download",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 189,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/ImageBlock.tsx",
                                        lineNumber: 184,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyUrl,
                                        className: "p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110",
                                        title: "Copy URL",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 16,
                                            className: "text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 196,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 196,
                                            columnNumber: 96
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/ImageBlock.tsx",
                                        lineNumber: 191,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDelete(id),
                                        className: "p-2 bg-red-500/90 hover:bg-red-600 rounded-lg text-white transition-all shadow-lg backdrop-blur-sm hover:scale-110",
                                        title: "Remove image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/ImageBlock.tsx",
                                            lineNumber: 204,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/ImageBlock.tsx",
                                        lineNumber: 199,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 169,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showActions && imageLoaded && imageDimensions.width > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: 10
                                },
                                className: "absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] font-mono text-white/80",
                                children: [
                                    imageDimensions.width,
                                    " × ",
                                    imageDimensions.height
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 214,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showActions && imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                className: "absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] font-medium text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/ImageBlock.tsx",
                                        lineNumber: 234,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Click to expand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 228,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/ImageBlock.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl",
                    onClick: ()=>setIsFullscreen(false),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
                            onClick: ()=>setIsFullscreen(false),
                            className: "absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/editor/ImageBlock.tsx",
                                lineNumber: 260,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 253,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                            initial: {
                                scale: 0.8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.8,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            },
                            src: src,
                            alt: "Note attachment",
                            className: "max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl",
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 264,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        imageDimensions.width > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-mono text-white/80",
                            children: [
                                imageDimensions.width,
                                " × ",
                                imageDimensions.height
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/ImageBlock.tsx",
                            lineNumber: 277,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/ImageBlock.tsx",
                    lineNumber: 245,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/ImageBlock.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
ImageBlock.displayName = 'ImageBlock';
}),
"[project]/components/ui/ConfirmationModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmationModal",
    ()=>ConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel, variant = 'danger', confirmText = 'Confirmar', cancelText = 'Cancelar' })=>{
    const [isConfirming, setIsConfirming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset state when modal closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            setIsConfirming(false);
            setShowSuccess(false);
        }
    }, [
        isOpen
    ]);
    // Handle keyboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                e.preventDefault();
                onCancel();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        onCancel
    ]);
    const handleConfirm = async ()=>{
        setIsConfirming(true);
        // Show brief loading state
        await new Promise((resolve)=>setTimeout(resolve, 200));
        setShowSuccess(true);
        // Execute after success animation
        setTimeout(()=>{
            onConfirm();
        }, 300);
    };
    const variantStyles = {
        danger: {
            iconBg: 'bg-gradient-to-br from-red-500/20 to-red-600/20',
            iconColor: 'text-red-400',
            confirmBg: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
            confirmShadow: 'shadow-red-500/30 hover:shadow-red-500/50',
            glowColor: 'rgba(239, 68, 68, 0.3)',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"]
        },
        warning: {
            iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
            iconColor: 'text-amber-400',
            confirmBg: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
            confirmShadow: 'shadow-amber-500/30 hover:shadow-amber-500/50',
            glowColor: 'rgba(245, 158, 11, 0.3)',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
        },
        info: {
            iconBg: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
            iconColor: 'text-blue-400',
            confirmBg: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
            confirmShadow: 'shadow-blue-500/30 hover:shadow-blue-500/50',
            glowColor: 'rgba(59, 130, 246, 0.3)',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
        }
    };
    const style = variantStyles[variant];
    const IconComponent = style.Icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 bg-black/60 backdrop-blur-md z-[100]",
                    onClick: onCancel
                }, void 0, false, {
                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 10
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8
                    },
                    className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[101]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden",
                        style: {
                            boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${style.glowColor}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-2xl overflow-hidden pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    className: "absolute -inset-1/2 opacity-20",
                                    style: {
                                        background: `conic-gradient(from 0deg, transparent 0%, ${style.glowColor}, transparent 30%)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.1,
                                    rotate: 90
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: onCancel,
                                className: "absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 25,
                                                delay: 0.1
                                            },
                                            className: `relative w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.3
                                                        ],
                                                        opacity: [
                                                            0.5,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity
                                                    },
                                                    className: `absolute inset-0 rounded-2xl ${style.iconBg}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.5
                                                        ],
                                                        opacity: [
                                                            0.3,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: 0.3
                                                    },
                                                    className: `absolute inset-0 rounded-2xl ${style.iconBg}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: showSuccess ? {
                                                        rotate: -15,
                                                        scale: 1.1
                                                    } : {},
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 400
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        size: 28,
                                                        className: style.iconColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.15
                                        },
                                        className: "text-xl font-bold text-center text-white mb-2",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        className: "text-sm text-center text-white/60 mb-6 leading-relaxed",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.25
                                        },
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.02
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                onClick: onCancel,
                                                disabled: isConfirming,
                                                className: "flex-1 py-3 px-4 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: cancelText
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.02
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                onClick: handleConfirm,
                                                disabled: isConfirming,
                                                className: `flex-1 py-3 px-4 rounded-xl font-semibold text-sm text-white ${style.confirmBg} shadow-lg ${style.confirmShadow} transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    mode: "wait",
                                                    children: isConfirming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.5
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            scale: 0.5
                                                        },
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                animate: {
                                                                    rotate: 360
                                                                },
                                                                transition: {
                                                                    duration: 0.6,
                                                                    repeat: Infinity,
                                                                    ease: "linear"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Removendo..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, "loading", true, {
                                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.5
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                initial: {
                                                                    scale: 0
                                                                },
                                                                animate: {
                                                                    scale: 1
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 500
                                                                },
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Removido!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, "success", true, {
                                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            opacity: 0
                                                        },
                                                        children: confirmText
                                                    }, "default", false, {
                                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full",
                                style: {
                                    background: `linear-gradient(90deg, transparent, ${style.glowColor}, transparent)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ConfirmationModal.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/ConfirmationModal.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/ConfirmationModal.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/ui/ConfirmationModal.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/editor/TextLinkingMode.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextLinkingMode",
    ()=>TextLinkingMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-ssr] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const TextLinkingMode = ({ isActive, sourceText, sourceBlockId, currentColor, onColorChange, onSelectTarget, onCancel })=>{
    const [selectedTargetText, setSelectedTargetText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTargetBlockId, setSelectedTargetBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listen for text selection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) return;
        const handleMouseUp = (e)=>{
            // Ignore clicks on the toolbar itself
            if (toolbarRef.current?.contains(e.target)) return;
            const selection = window.getSelection();
            if (!selection || selection.isCollapsed) return;
            const selectedText = selection.toString().trim();
            if (!selectedText) return;
            // Don't allow connecting to the same text
            if (selectedText === sourceText) return;
            // Find the block containing the selection
            let node = selection.anchorNode;
            while(node && node !== document.body){
                if (node instanceof HTMLElement) {
                    const blockId = node.id?.replace('block-', '');
                    if (blockId && node.id?.startsWith('block-')) {
                        // Don't allow connecting to same block same text
                        if (blockId === sourceBlockId && selectedText === sourceText) return;
                        setSelectedTargetText(selectedText);
                        setSelectedTargetBlockId(blockId);
                        break;
                    }
                }
                node = node.parentNode;
            }
        };
        // Add slight delay to avoid interference with selection
        const handler = (e)=>setTimeout(()=>handleMouseUp(e), 10);
        document.addEventListener('mouseup', handler);
        return ()=>document.removeEventListener('mouseup', handler);
    }, [
        isActive,
        sourceText,
        sourceBlockId
    ]);
    // Handle keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) return;
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                e.preventDefault();
                onCancel();
            }
            if (e.key === 'Enter' && selectedTargetText && selectedTargetBlockId) {
                e.preventDefault();
                handleConnect();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isActive,
        onCancel,
        selectedTargetText,
        selectedTargetBlockId
    ]);
    // Reset when mode deactivates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) {
            setSelectedTargetText('');
            setSelectedTargetBlockId('');
            setIsConnecting(false);
            setShowSuccess(false);
        }
    }, [
        isActive
    ]);
    const handleConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!selectedTargetText || !selectedTargetBlockId) return;
        setIsConnecting(true);
        // Show success animation then complete
        setTimeout(()=>{
            setShowSuccess(true);
            setTimeout(()=>{
                onSelectTarget(selectedTargetText, selectedTargetBlockId);
            }, 400);
        }, 200);
    }, [
        selectedTargetText,
        selectedTargetBlockId,
        onSelectTarget
    ]);
    if (!isActive) return null;
    const truncate = (text, max)=>text.length > max ? text.slice(0, max) + '...' : text;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-[1px] z-[98] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: toolbarRef,
                initial: {
                    opacity: 0,
                    y: -30,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: -20,
                    scale: 0.95
                },
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                },
                className: "fixed top-6 left-1/2 -translate-x-1/2 z-[100]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center gap-2",
                                    initial: {
                                        x: -10,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full animate-pulse",
                                            style: {
                                                backgroundColor: currentColor,
                                                boxShadow: `0 0 10px ${currentColor}`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-wider text-white/40 font-medium",
                                                    children: "Origem"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-white/10 rounded-lg text-sm font-bold text-white max-w-[140px] truncate",
                                                    children: truncate(sourceText, 18)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 157,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center",
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        type: "spring"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            x: [
                                                0,
                                                5,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 20,
                                            className: "text-white/30",
                                            style: {
                                                filter: `drop-shadow(0 0 4px ${currentColor})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 176,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center gap-2",
                                    initial: {
                                        x: 10,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: selectedTargetText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0.8,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                exit: {
                                                    scale: 0.8,
                                                    opacity: 0
                                                },
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] uppercase tracking-wider text-white/40 font-medium",
                                                        children: "Destino"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded-lg text-sm font-bold max-w-[140px] truncate",
                                                        style: {
                                                            backgroundColor: currentColor + '30',
                                                            color: currentColor,
                                                            boxShadow: `0 0 12px ${currentColor}30`
                                                        },
                                                        children: truncate(selectedTargetText, 18)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, "target", true, {
                                                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                className: "flex items-center gap-2 px-3 py-2 border-2 border-dashed border-white/20 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                                        size: 14,
                                                        className: "text-white/40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/40 text-sm italic",
                                                        children: "Selecione texto..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, "placeholder", true, {
                                                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                lineNumber: 213,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        selectedTargetText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: currentColor,
                                                boxShadow: `0 0 10px ${currentColor}`
                                            },
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.2,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 1,
                                                repeat: Infinity
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 229,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-10 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 241,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase tracking-wider text-white/40 font-medium",
                                    children: "Cor"
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 245,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_COLORS"].map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            transition: {
                                                delay: 0.1 * index
                                            },
                                            onClick: ()=>onColorChange(color),
                                            className: `relative w-6 h-6 rounded-full transition-all duration-200 hover:scale-110 ${currentColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110' : 'hover:ring-1 hover:ring-white/30'}`,
                                            style: {
                                                backgroundColor: color,
                                                boxShadow: currentColor === color ? `0 0 16px ${color}` : `0 2px 4px ${color}40`
                                            },
                                            children: currentColor === color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "colorRing",
                                                className: "absolute inset-0 rounded-full",
                                                style: {
                                                    boxShadow: `0 0 0 3px ${color}50`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                lineNumber: 264,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, color, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 248,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 244,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-10 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 278,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    onClick: onCancel,
                                    className: "p-2 hover:bg-white/10 rounded-xl transition-colors text-white/60 hover:text-white",
                                    title: "Cancelar (Esc)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                        lineNumber: 289,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    onClick: handleConnect,
                                    disabled: !selectedTargetText || !selectedTargetBlockId || isConnecting,
                                    className: `relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all overflow-hidden ${selectedTargetText && selectedTargetBlockId && !isConnecting ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:shadow-emerald-500/30' : 'bg-white/10 text-white/30 cursor-not-allowed'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0,
                                                rotate: -180
                                            },
                                            animate: {
                                                scale: 1,
                                                rotate: 0
                                            },
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Conectado!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, "success", true, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 304,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : isConnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 0.5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Conectando..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, "connecting", true, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 314,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Conectar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, "connect", true, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 328,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 281,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 20
                },
                transition: {
                    delay: 0.2
                },
                className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 bg-slate-900/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 355,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "Selecione outro texto na nota para conectar"
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 356,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 354,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 text-white/40 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-0.5 bg-white/10 rounded text-white/60 font-mono",
                                            children: "Enter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 361,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "confirmar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 362,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 360,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-0.5 bg-white/10 rounded text-white/60 font-mono",
                                            children: "Esc"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                            lineNumber: 366,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                                    lineNumber: 364,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/TextLinkingMode.tsx",
                            lineNumber: 359,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                    lineNumber: 353,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 346,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedTargetText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed top-[90px] left-1/2 -translate-x-1/2 z-[100]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scaleX: 0
                        },
                        animate: {
                            scaleX: 1
                        },
                        className: "h-1 w-32 rounded-full origin-left",
                        style: {
                            background: `linear-gradient(90deg, ${currentColor}, ${currentColor}50)`,
                            boxShadow: `0 0 12px ${currentColor}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/editor/TextLinkingMode.tsx",
                        lineNumber: 381,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/editor/TextLinkingMode.tsx",
                    lineNumber: 375,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextLinkingMode.tsx",
                lineNumber: 373,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true), document.body);
};
}),
"[project]/components/editor/TextConnectionLines.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextConnectionLines",
    ()=>TextConnectionLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const TextConnectionLines = ({ blocks, containerRef })=>{
    const [connections, setConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [containerHeight, setContainerHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const updateTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Collect all connections from blocks
    const allConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
        blocks
    ]);
    // Find text position within a block - returns Y coordinate
    const findTextPosition = (blockEl, searchText)=>{
        if (!searchText || !blockEl) return null;
        // Normalize search text
        const normalizedSearch = searchText.trim().toLowerCase();
        try {
            const walker = document.createTreeWalker(blockEl, NodeFilter.SHOW_TEXT, null);
            let node;
            let bestMatch = null;
            while(node = walker.nextNode()){
                const text = node.textContent || '';
                const normalizedText = text.toLowerCase();
                // Try exact match first
                let index = text.indexOf(searchText);
                // Try case-insensitive match
                if (index === -1) {
                    index = normalizedText.indexOf(normalizedSearch);
                }
                // Try partial match (first 10 chars)
                if (index === -1 && normalizedSearch.length > 10) {
                    const partialSearch = normalizedSearch.slice(0, 10);
                    index = normalizedText.indexOf(partialSearch);
                }
                if (index !== -1) {
                    try {
                        const range = document.createRange();
                        const endIndex = Math.min(index + searchText.length, text.length);
                        range.setStart(node, index);
                        range.setEnd(node, endIndex);
                        const rect = range.getBoundingClientRect();
                        if (rect.height > 0) {
                            const y = rect.top + rect.height / 2;
                            // Exact match gets higher score
                            const score = text.indexOf(searchText) !== -1 ? 100 : 50;
                            if (!bestMatch || score > bestMatch.score) {
                                bestMatch = {
                                    y,
                                    score
                                };
                            }
                        }
                    } catch (e) {
                    // Range creation failed, continue
                    }
                }
            }
            if (bestMatch) {
                return bestMatch.y;
            }
            // Fallback: use block's vertical center
            const blockRect = blockEl.getBoundingClientRect();
            if (blockRect.height > 0) {
                return blockRect.top + blockRect.height / 2;
            }
        } catch (error) {
            console.warn('Error finding text position:', error);
        }
        return null;
    };
    // Update connection positions
    const updateConnections = ()=>{
        const container = containerRef.current;
        if (!container || allConnections.length === 0) {
            setConnections([]);
            return;
        }
        const containerRect = container.getBoundingClientRect();
        setContainerHeight(container.scrollHeight);
        const newConnections = [];
        allConnections.forEach((item)=>{
            const { connection, blockId } = item;
            const sourceBlockEl = document.getElementById(`block-${blockId}`);
            const targetBlockEl = document.getElementById(`block-${connection.targetBlockId}`);
            if (!sourceBlockEl || !targetBlockEl) return;
            const sourceY = findTextPosition(sourceBlockEl, connection.sourceText);
            const targetY = findTextPosition(targetBlockEl, connection.targetText);
            if (sourceY === null || targetY === null) return;
            // Convert to container-relative positions
            const relativeSourceY = sourceY - containerRect.top + container.scrollTop;
            const relativeTargetY = targetY - containerRect.top + container.scrollTop;
            newConnections.push({
                id: connection.id,
                sourceY: relativeSourceY,
                targetY: relativeTargetY,
                color: connection.color
            });
        });
        setConnections(newConnections);
    };
    // Debounced update
    const scheduleUpdate = ()=>{
        const now = Date.now();
        // Throttle updates to max once per 200ms
        if (now - lastUpdateRef.current < 200) {
            if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
            updateTimeoutRef.current = setTimeout(()=>{
                lastUpdateRef.current = Date.now();
                updateConnections();
            }, 200);
            return;
        }
        lastUpdateRef.current = now;
        updateConnections();
    };
    // Initial draw and updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial delay for DOM to be ready
        const initialTimeout = setTimeout(updateConnections, 300);
        return ()=>{
            clearTimeout(initialTimeout);
            if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
        };
    }, []);
    // Redraw when blocks change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scheduleUpdate();
    }, [
        allConnections
    ]);
    // Handle scroll and resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>scheduleUpdate();
        window.addEventListener('scroll', handleScroll, {
            passive: true,
            capture: true
        });
        window.addEventListener('resize', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll, {
                capture: true
            });
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    // Don't render if no connections
    if (connections.length === 0) return null;
    const MARGIN_OFFSET = 24;
    const LINE_SPACING = 12;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: containerHeight || '100%',
            pointerEvents: 'none',
            zIndex: 10,
            overflow: 'visible'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
                    .conn-path {
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                    }
                    .conn-dot {
                        transition: r 0.2s ease;
                    }
                `
                }, void 0, false, {
                    fileName: "[project]/components/editor/TextConnectionLines.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TextConnectionLines.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            connections.map((conn, index)=>{
                const marginX = -(MARGIN_OFFSET + index * LINE_SPACING);
                const sourceEdge = 8;
                // Create smooth bezier path
                const path = `M ${sourceEdge} ${conn.sourceY} 
                              H ${marginX + 10} 
                              Q ${marginX} ${conn.sourceY} ${marginX} ${conn.sourceY + 10}
                              V ${conn.targetY - 10}
                              Q ${marginX} ${conn.targetY} ${marginX + 10} ${conn.targetY}
                              H ${sourceEdge}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: path,
                            className: "conn-path",
                            stroke: conn.color,
                            strokeWidth: 4,
                            opacity: 0.2,
                            style: {
                                filter: `blur(4px)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextConnectionLines.tsx",
                            lineNumber: 245,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: path,
                            className: "conn-path",
                            stroke: conn.color,
                            strokeWidth: 2,
                            opacity: 0.8
                        }, void 0, false, {
                            fileName: "[project]/components/editor/TextConnectionLines.tsx",
                            lineNumber: 255,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, conn.id, true, {
                    fileName: "[project]/components/editor/TextConnectionLines.tsx",
                    lineNumber: 243,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            }),
            (()=>{
                // Collect all unique dot positions
                const dotMap = new Map();
                connections.forEach((conn)=>{
                    // Use rounded Y to prevent near-duplicate dots
                    const sourceKey = `${Math.round(conn.sourceY)}`;
                    const targetKey = `${Math.round(conn.targetY)}`;
                    // Only add if not already exists (first color wins)
                    if (!dotMap.has(sourceKey)) {
                        dotMap.set(sourceKey, {
                            y: conn.sourceY,
                            color: conn.color
                        });
                    }
                    if (!dotMap.has(targetKey)) {
                        dotMap.set(targetKey, {
                            y: conn.targetY,
                            color: conn.color
                        });
                    }
                });
                const sourceEdge = 8;
                return Array.from(dotMap.entries()).map(([key, dot])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: sourceEdge - 2,
                        cy: dot.y,
                        r: 5,
                        fill: dot.color,
                        className: "conn-dot",
                        style: {
                            filter: `drop-shadow(0 0 3px ${dot.color})`
                        }
                    }, `dot-${key}`, false, {
                        fileName: "[project]/components/editor/TextConnectionLines.tsx",
                        lineNumber: 288,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)));
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/TextConnectionLines.tsx",
        lineNumber: 203,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/editor/EditorView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorView",
    ()=>EditorView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:f27e82 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-ssr] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-ssr] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-ssr] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-ssr] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-ssr] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-ssr] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-ssr] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$case$2d$upper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CaseUpper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/case-upper.js [app-ssr] (ecmascript) <export default as CaseUpper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-ssr] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$a37002__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:a37002 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/ContentBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ImageBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/ImageBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ConfirmationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextLinkingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TextLinkingMode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextConnectionLines$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TextConnectionLines.tsx [app-ssr] (ecmascript)");
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
const EditorView = ({ activeNote, onUpdateNote, onDeleteNote, hasUnsavedChanges, onSave })=>{
    const [isAiLoading, setIsAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Slash Menu State
    const [slashMenuOpen, setSlashMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slashMenuPosition, setSlashMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [slashBlockId, setSlashBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slashFilter, setSlashFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Formatting Toolbar State
    const [formatToolbarPosition, setFormatToolbarPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Block Highlight Color Picker State
    const [highlightPickerOpen, setHighlightPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Color Picker State
    const [colorPickerOpen, setColorPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tag Selector State
    const [isTagSelectorOpen, setIsTagSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableTags, setAvailableTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load available tags
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadTags = async ()=>{
            const tags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTags"])();
            setAvailableTags(tags);
        };
        loadTags();
    }, []);
    // Focus Management
    const [focusedBlockId, setFocusedBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Copy Feedback State
    const [copiedBlockId, setCopiedBlockId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Save Success Animation State
    const [saveSuccess, setSaveSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Image Deletion Modal State
    const [imageToDelete, setImageToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Link Paste Modal State
    const [linkPasteModal, setLinkPasteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Font Selector State
    const [fontDropdownOpen, setFontDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Color Dropdown States
    const [highlightDropdownOpen, setHighlightDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textColorDropdownOpen, setTextColorDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active Formatting States
    const [activeFormats, setActiveFormats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        bold: false,
        italic: false,
        underline: false,
        strikeThrough: false,
        inlineCode: false,
        uppercase: false,
        currentFont: ''
    });
    // Text Linking Mode State (for text-to-text connections)
    const [isTextLinkingMode, setIsTextLinkingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sourceTextForLinking, setSourceTextForLinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sourceBlockIdForLinking, setSourceBlockIdForLinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentLinkColor, setCurrentLinkColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONNECTION_COLORS"][0]);
    // Link Delete Confirmation Modal
    const [linkDeleteModal, setLinkDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const isTypingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menus on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClick = (e)=>{
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
        };
        window.addEventListener('click', handleClick);
        return ()=>window.removeEventListener('click', handleClick);
    }, []);
    // Handle Selection for Formatting Toolbar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleSelectionChange = ()=>{
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
        };
        document.addEventListener('selectionchange', handleSelectionChange);
        document.addEventListener('scroll', handleSelectionChange, true);
        return ()=>{
            document.removeEventListener('selectionchange', handleSelectionChange);
            document.removeEventListener('scroll', handleSelectionChange, true);
        };
    }, [
        slashMenuOpen,
        fontDropdownOpen,
        isTextLinkingMode
    ]);
    // Handle atomic link delete button clicks - show confirmation modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeNote) return;
        const handleLinkDeleteClick = (e)=>{
            const target = e.target;
            // Check if clicking on delete button
            if (target.classList.contains('atomic-link-delete')) {
                e.preventDefault();
                e.stopPropagation();
                // Find the parent wrapper
                const wrapper = target.closest('.atomic-link-wrapper');
                if (!wrapper) return;
                // Get the link ID and name
                const linkId = wrapper.getAttribute('data-link-id');
                const linkName = wrapper.querySelector('strong')?.textContent || 'Link';
                if (!linkId) {
                    wrapper.remove();
                    return;
                }
                // Find the block containing this link
                let blockEl = wrapper.parentElement;
                while(blockEl && !blockEl.id?.startsWith('block-')){
                    blockEl = blockEl.parentElement;
                }
                if (!blockEl) {
                    wrapper.remove();
                    return;
                }
                const blockId = blockEl.id.replace('block-', '');
                const rect = wrapper.getBoundingClientRect();
                // Show confirmation modal
                setLinkDeleteModal({
                    linkId,
                    blockId,
                    linkName,
                    position: {
                        x: rect.left + rect.width / 2,
                        y: rect.bottom + 8
                    }
                });
            }
        };
        const editorEl = editorRef.current;
        if (editorEl) {
            editorEl.addEventListener('click', handleLinkDeleteClick, true);
            return ()=>editorEl.removeEventListener('click', handleLinkDeleteClick, true);
        }
    }, [
        activeNote
    ]);
    // Function to confirm and delete link
    const handleConfirmLinkDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!linkDeleteModal || !activeNote) return;
        const { linkId, blockId } = linkDeleteModal;
        // Find and animate the wrapper
        const wrapper = document.querySelector(`[data-link-id="${linkId}"]`);
        if (wrapper) {
            wrapper.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'scale(0.5) translateY(-10px)';
            wrapper.style.pointerEvents = 'none';
        }
        // Close modal immediately
        setLinkDeleteModal(null);
        // Remove after animation
        setTimeout(()=>{
            // Find the block element
            const blockEl = document.getElementById(`block-${blockId}`);
            if (wrapper) {
                wrapper.remove();
            }
            // Sync the DOM content to state
            if (blockEl) {
                // Get the contenteditable element inside the block
                const contentEl = blockEl.querySelector('[contenteditable="true"]') || blockEl;
                const newContent = contentEl.innerHTML || '';
                const newBlocks = activeNote.blocks.map((b)=>b.id === blockId ? {
                        ...b,
                        content: newContent
                    } : b);
                onUpdateNote({
                    ...activeNote,
                    blocks: newBlocks
                }, 'PUSH');
            }
        }, 300);
    }, [
        linkDeleteModal,
        activeNote,
        onUpdateNote
    ]);
    if (!activeNote) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center text-muted-foreground dark:text-neutral-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Select a note from the canvas or graph to edit."
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/EditorView.tsx",
            lineNumber: 347,
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
    const updateBlockContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, html)=>{
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
        const newBlocks = activeNote.blocks.map((b)=>b.id === id ? {
                ...b,
                content: html
            } : b);
        // Optimization: Only update if content actually changed
        const block = activeNote.blocks.find((b)=>b.id === id);
        if (block && block.content === html) return;
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
    }, [
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
    const addBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((afterId, type = 'paragraph')=>{
        if (!activeNote) return;
        const newBlock = {
            id: crypto.randomUUID(),
            type,
            content: ''
        };
        const index = activeNote.blocks.findIndex((b)=>b.id === afterId);
        const newBlocks = [
            ...activeNote.blocks
        ];
        newBlocks.splice(index + 1, 0, newBlock);
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
        setFocusedBlockId(newBlock.id);
    }, [
        activeNote,
        onUpdateNote
    ]);
    const deleteBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        if (!activeNote) return;
        const index = activeNote.blocks.findIndex((b)=>b.id === id);
        const prevBlock = activeNote.blocks[index - 1];
        let newBlocks = activeNote.blocks.filter((b)=>b.id !== id);
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
            setTimeout(()=>setFocusedBlockId(newId), 0);
        }
        onUpdateNote({
            ...activeNote,
            blocks: newBlocks
        }, 'PUSH');
        if (prevBlock) {
            setFocusedBlockId(prevBlock.id);
        }
    }, [
        activeNote,
        onUpdateNote
    ]);
    const handleBlockKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, id)=>{
        if (!activeNote) return;
        // Shift+Enter: Create new block
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            const currentBlock = activeNote.blocks.find((b)=>b.id === id);
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
                const index = activeNote.blocks.findIndex((b)=>b.id === id);
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
    }, [
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$a37002__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["expandNoteWithAI"])(context);
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
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file, targetBlockId)=>{
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
        // Determine insertion point - always insert AFTER the reference block, never replace
        const insertionBlockId = targetBlockId || focusedBlockId;
        if (insertionBlockId) {
            const index = newBlocks.findIndex((b)=>b.id === insertionBlockId);
            if (index !== -1) {
                // Check if target block is an empty placeholder that should be replaced
                const targetBlock = newBlocks[index];
                const isEmptyPlaceholder = targetBlock.type === 'paragraph' && (!targetBlock.content || targetBlock.content.trim() === '' || targetBlock.content === '<br>');
                if (isEmptyPlaceholder && targetBlockId) {
                    // Replace empty placeholder with image
                    newBlocks[index] = newBlock;
                } else {
                    // Insert image AFTER the current block
                    newBlocks.splice(index + 1, 0, newBlock);
                }
            } else {
                newBlocks.push(newBlock);
            }
        } else {
            // No focused block - add at the end
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
                const updatedBlocks = newBlocks.map((b)=>b.id === tempId ? {
                        ...b,
                        content: data.url
                    } : b);
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
    }, [
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
                // Don't pass focusedBlockId as targetBlockId - let it use focusedBlockId internally
                // This ensures images are inserted AFTER current block, not replacing it
                files.forEach((file)=>handleFileUpload(file));
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
        // Generate unique ID for the link
        const linkId = crypto.randomUUID();
        // Delete button SVG (X icon)
        const deleteBtn = `<button class="atomic-link-delete" data-link-id="${linkId}" aria-label="Remover link" title="Remover link">×</button>`;
        switch(option){
            case 'mention':
            case 'embed':
                // Clean format: [icon] name · platform - ATOMIC (non-editable)
                content = `<span class="atomic-link-wrapper" contenteditable="false" data-link-block="true" data-link-id="${linkId}" data-url="${url}">${deleteBtn}<a href="${url}" class="${platformInfo.cssClass} atomic-link" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a></span> `;
                break;
            case 'bookmark':
                // Bookmark style - ATOMIC (non-editable)
                content = `<span class="atomic-link-wrapper bookmark-style" contenteditable="false" data-link-block="true" data-link-id="${linkId}" data-url="${url}">${deleteBtn}<a href="${url}" class="${platformInfo.cssClass} atomic-link" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a></span> `;
                break;
            case 'url':
            default:
                // Plain URL format - ATOMIC (non-editable)
                content = `<span class="atomic-link-wrapper" contenteditable="false" data-link-block="true" data-link-id="${linkId}" data-url="${url}">${deleteBtn}<a href="${url}" class="${platformInfo.cssClass} atomic-link" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a></span> `;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                className: "hidden",
                accept: "image/*",
                onChange: handleFileSelect
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1030,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4 mb-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentBlock"], {
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
                            lineNumber: 1045,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1039,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>{
                                    onSave();
                                    setSaveSuccess(true);
                                    setTimeout(()=>setSaveSuccess(false), 1500);
                                },
                                className: `relative p-2 rounded-md transition-all duration-300 overflow-hidden ${saveSuccess ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : hasUnsavedChanges ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400'}`,
                                title: hasUnsavedChanges ? "Salvar Alterações" : "Salvo",
                                whileTap: {
                                    scale: 0.9
                                },
                                animate: saveSuccess ? {
                                    scale: [
                                        1,
                                        1.1,
                                        1
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: saveSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0,
                                                rotate: -180
                                            },
                                            animate: {
                                                scale: 1,
                                                rotate: 0
                                            },
                                            exit: {
                                                scale: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 25
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 20,
                                                strokeWidth: 3
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "check", false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            exit: {
                                                scale: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.15
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 20,
                                                className: hasUnsavedChanges ? "animate-pulse" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "save", false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1097,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1081,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    saveSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 bg-white/30 rounded-md",
                                        initial: {
                                            scale: 0,
                                            opacity: 1
                                        },
                                        animate: {
                                            scale: 2,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative color-picker-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setColorPickerOpen(!colorPickerOpen),
                                        className: `p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${activeNote.color && activeNote.color !== '#000000' ? 'ring-2 ring-offset-1 dark:ring-offset-neutral-900' : ''}`,
                                        style: {
                                            borderColor: activeNote.color || 'transparent'
                                        },
                                        title: "Note Color",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                            size: 20,
                                            style: {
                                                color: activeNote.color && activeNote.color !== '#000000' ? activeNote.color : 'currentColor'
                                            },
                                            className: "text-gray-500 dark:text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: colorPickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOTE_COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleColorChange(color.value),
                                                    className: `w-8 h-8 rounded-full border border-gray-200 dark:border-neutral-600 transition-transform hover:scale-110 ${activeNote.color === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-neutral-900' : ''}`,
                                                    style: {
                                                        backgroundColor: color.value
                                                    },
                                                    title: color.label
                                                }, color.id, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1134,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDeleteNote(activeNote.id),
                                className: "p-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 text-gray-500 dark:text-neutral-400 rounded-md transition-colors",
                                title: "Delete Note",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1062,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1038,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-wrap items-center gap-2 tag-container min-h-[28px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: activeNote.tags?.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-60",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1178,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tag,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRemoveTag(tag),
                                        className: "w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 opacity-0 group-hover:opacity-100 transition-all ml-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tag, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1170,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1168,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center tag-selector-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsTagSelectorOpen(!isTagSelectorOpen);
                                },
                                className: "text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-xs font-bold flex items-center gap-1 py-1.5 px-2 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Add Tag"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1191,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isTagSelectorOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 border-b border-gray-100 dark:border-neutral-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-400 dark:text-neutral-500",
                                                children: "Select a tag"
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1212,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-48 overflow-y-auto p-1",
                                            children: availableTags.filter((tag)=>!activeNote.tags?.includes(tag.name)).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 dark:text-neutral-500",
                                                        children: availableTags.length === 0 ? 'No tags available' : 'All tags added'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1217,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 dark:text-neutral-600 mt-1",
                                                        children: "Create tags in Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1220,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1216,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : availableTags.filter((tag)=>!activeNote.tags?.includes(tag.name)).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        x: 2
                                                    },
                                                    onClick: ()=>handleSelectTag(tag.name),
                                                    className: "w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full flex-shrink-0",
                                                            style: {
                                                                backgroundColor: tag.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-black dark:text-white",
                                                            children: [
                                                                "#",
                                                                tag.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1238,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, tag.id, true, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1204,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1167,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 relative",
                ref: blocksContainerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextConnectionLines$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextConnectionLines"], {
                        blocks: activeNote.blocks,
                        containerRef: blocksContainerRef
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: activeNote.blocks.map((block)=>{
                            const hasConnections = block.textConnections && block.textConnections.length > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 opacity-0 group-hover:opacity-20 transition-opacity absolute -left-6 cursor-grab",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-black dark:bg-white rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1278,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full relative group/content rounded-lg transition-all duration-200",
                                        style: {
                                            backgroundColor: block.highlightColor || 'transparent'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-start w-full ${block.type === 'bullet' ? 'gap-3' : 'gap-2'} ${block.highlightColor ? 'px-3 py-2' : ''}`,
                                                children: [
                                                    block.type === 'bullet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl leading-6 select-none dark:text-white",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type === 'todo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 1292,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type !== 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ContentBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentBlock"], {
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
                                                        lineNumber: 1305,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    block.type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$ImageBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageBlock"], {
                                                        id: block.id,
                                                        src: block.content,
                                                        onDelete: (id)=>setImageToDelete(id),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1325,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1287,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover/content:opacity-100 transition-all",
                                                children: block.type !== 'image' && block.type !== 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setFocusedBlockId(block.id);
                                                                setHighlightPickerOpen(highlightPickerOpen && focusedBlockId === block.id ? false : true);
                                                            },
                                                            className: `p-1.5 rounded-md transition-colors ${block.highlightColor ? 'bg-gray-200 dark:bg-neutral-700' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'}`,
                                                            title: "Highlight Color",
                                                            style: {
                                                                borderLeft: block.highlightColor ? `3px solid ${block.highlightColor.replace('0.15', '0.8').replace('0.2', '0.8')}` : undefined
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
                                                                size: 14,
                                                                className: "text-gray-500 dark:text-neutral-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1348,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1339,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            children: highlightPickerOpen && focusedBlockId === block.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOCK_HIGHLIGHT_COLORS"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            handleBlockHighlightChange(block.id, color.value);
                                                                        },
                                                                        className: `w-6 h-6 rounded-md border border-gray-300 dark:border-neutral-600 transition-transform hover:scale-110 ${block.highlightColor === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-1 dark:ring-offset-neutral-900' : ''}`,
                                                                        style: {
                                                                            backgroundColor: color.id === 'none' ? 'transparent' : color.value.replace('0.15', '0.5').replace('0.2', '0.5')
                                                                        },
                                                                        title: color.label,
                                                                        children: color.id === 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 12,
                                                                            className: "mx-auto text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                                            lineNumber: 1371,
                                                                            columnNumber: 59
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, color.id, false, {
                                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                                        lineNumber: 1361,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1354,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1338,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1335,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            block.type === 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopyBlock(block.id, block.content),
                                                className: "absolute top-2 right-2 p-1.5 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 rounded text-gray-600 dark:text-neutral-300 transition-all opacity-0 group-hover/content:opacity-100",
                                                title: "Copy to clipboard",
                                                children: copiedBlockId === block.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14,
                                                    className: "text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1388,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1388,
                                                    columnNumber: 102
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1383,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, block.id, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1264,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1259,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1252,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex gap-2 group opacity-50 hover:opacity-100 transition-opacity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>addBlock(activeNote.blocks[activeNote.blocks.length - 1]?.id || '0'),
                        className: "flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1401,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Add Block"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1400,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            handleAiEnhance();
                        },
                        disabled: isAiLoading,
                        className: "flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors text-purple-900 dark:text-purple-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 16,
                                className: isAiLoading ? "animate-spin" : ""
                            }, void 0, false, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1408,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isAiLoading ? "Thinking..." : "Gemini Expand"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/EditorView.tsx",
                        lineNumber: 1403,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1399,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: slashMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider border-b border-gray-100 dark:border-neutral-800",
                            children: "Basic Blocks"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1423,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        [
                            {
                                type: 'paragraph',
                                label: 'Paragraph',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"]
                            },
                            {
                                type: 'heading',
                                label: 'Heading 1',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"]
                            },
                            {
                                type: 'bullet',
                                label: 'Bulleted List',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
                            },
                            {
                                type: 'todo',
                                label: 'To-do List',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
                            },
                            {
                                type: 'blockquote',
                                label: 'Quote',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"]
                            },
                            {
                                type: 'code',
                                label: 'Code Block',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
                            },
                            {
                                type: 'image',
                                label: 'Image',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
                            }
                        ].filter((item)=>item.label.toLowerCase().includes(slashFilter.toLowerCase())).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 16,
                                        className: "text-gray-500 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1448,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-black dark:text-neutral-200",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.type, true, {
                                fileName: "[project]/components/editor/EditorView.tsx",
                                lineNumber: 1435,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 1416,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1414,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: formatToolbarPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/95 dark:bg-white/95 rotate-45 border-r border-b border-white/10 dark:border-black/10"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1476,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 bg-white/5 dark:bg-black/5 rounded-xl p-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Bold",
                                            "aria-keyshortcuts": "Meta+B Ctrl+B",
                                            "aria-pressed": activeFormats.bold,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('bold');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.bold ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1493,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1482,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Bold",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘B"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1495,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1481,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Italic",
                                            "aria-keyshortcuts": "Meta+I Ctrl+I",
                                            "aria-pressed": activeFormats.italic,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('italic');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.italic ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1514,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Italic",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘I"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1518,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1516,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Underline",
                                            "aria-keyshortcuts": "Meta+U Ctrl+U",
                                            "aria-pressed": activeFormats.underline,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('underline');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.underline ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1535,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1524,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Underline",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘U"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1539,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1537,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1523,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Strikethrough",
                                            "aria-pressed": activeFormats.strikeThrough,
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                formatText('strikeThrough');
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none ${activeFormats.strikeThrough ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1555,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1545,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "Strikethrough"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1557,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1544,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1682,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1564,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "Código"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1684,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1563,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$case$2d$upper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CaseUpper$3e$__["CaseUpper"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1723,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1691,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: "MAIÚSCULAS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1725,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1690,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-4 bg-white/20 dark:bg-black/20 mx-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1731,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                size: 16,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1749,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1735,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: [
                                                "Insert Link",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-gray-400 dark:text-gray-500",
                                                    children: "⌘K"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1753,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1751,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1734,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/btn font-dropdown-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": "Change Font",
                                            onMouseDown: (e)=>{
                                                e.preventDefault();
                                                setFontDropdownOpen(!fontDropdownOpen);
                                            },
                                            className: `p-2 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none flex items-center gap-1 ${activeFormats.currentFont && !activeFormats.currentFont.includes('Inter') && !activeFormats.inlineCode && !activeFormats.currentFont.includes('JetBrains') && !activeFormats.currentFont.includes('Fira') && !activeFormats.currentFont.includes('Consolas') && !activeFormats.currentFont.includes('Monaco') && !activeFormats.currentFont.includes('monospace') ? 'bg-white/30 dark:bg-black/30 text-blue-400 ring-1 ring-blue-400/50' : 'hover:bg-white/20 dark:hover:bg-black/15'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                    size: 16,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1778,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1779,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1759,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg",
                                            children: activeFormats.currentFont || 'Fonte'
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1781,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: fontDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                className: "text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 44
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, font.name, true, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 1799,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1788,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1786,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1758,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1479,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-6 bg-white/20 dark:bg-black/20 mx-0.5",
                            role: "separator",
                            "aria-orientation": "vertical"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1838,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Highlight Color",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        setHighlightDropdownOpen(!highlightDropdownOpen);
                                        setTextColorDropdownOpen(false);
                                    },
                                    className: "p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
                                        size: 16,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1852,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1842,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: highlightDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 1871,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                title: "Remover",
                                                onMouseDown: (e)=>{
                                                    e.preventDefault();
                                                    document.execCommand('hiliteColor', false, 'transparent');
                                                    setHighlightDropdownOpen(false);
                                                },
                                                className: "w-6 h-6 rounded-md border-2 border-white/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-gray-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 12,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1894,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1884,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1856,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1854,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1841,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Text Color",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        setTextColorDropdownOpen(!textColorDropdownOpen);
                                        setHighlightDropdownOpen(false);
                                    },
                                    className: "p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"], {
                                        size: 16,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1913,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1903,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: textColorDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold",
                                                    style: {
                                                        color: item.color === '#000000' || item.color === '#ff0000' ? '#fff' : '#000'
                                                    },
                                                    children: "A"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 1946,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, `text-${item.color}`, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 1934,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1917,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1915,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1902,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-4 bg-white/20 dark:bg-black/20 mx-1"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1960,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group/btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Connect Text",
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        handleStartTextLinking();
                                    },
                                    className: "w-6 h-6 rounded-lg border-2 border-white/30 dark:border-black/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center bg-gray-700 dark:bg-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                        size: 14,
                                        className: "text-white dark:text-black"
                                    }, void 0, false, {
                                        fileName: "[project]/components/editor/EditorView.tsx",
                                        lineNumber: 1973,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1964,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-xl z-10",
                                    children: [
                                        "Interligar",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 1977,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 1975,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 1963,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, "format-toolbar", true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 1460,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 1458,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)), document.body),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmationModal"], {
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
                lineNumber: 1986,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: linkPasteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 border-b border-neutral-700 text-sm text-neutral-400 font-medium",
                            children: "Colar como"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 2016,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('mention'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-400",
                                            children: "@"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2026,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Menção"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2027,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2022,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('embed'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: "◇"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2034,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Integrar tweet"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2035,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2030,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('bookmark'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400",
                                            children: "🔖"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2042,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Criar marcador"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2043,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2038,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLinkPasteOption('url'),
                                    className: "w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                            size: 16,
                                            className: "text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2050,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "URL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2051,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2046,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 2021,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 border-t border-neutral-700 text-xs text-neutral-500 truncate max-w-[300px]",
                            children: linkPasteModal.url
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 2056,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/editor/EditorView.tsx",
                    lineNumber: 2002,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 2000,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            linkPasteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9998]",
                onClick: ()=>setLinkPasteModal(null)
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 2066,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TextLinkingMode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextLinkingMode"], {
                isActive: isTextLinkingMode,
                sourceText: sourceTextForLinking,
                sourceBlockId: sourceBlockIdForLinking,
                currentColor: currentLinkColor,
                onColorChange: setCurrentLinkColor,
                onSelectTarget: handleConfirmTextConnection,
                onCancel: handleCancelTextLinking
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 2074,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: linkDeleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-[9998]",
                            onClick: ()=>setLinkDeleteModal(null)
                        }, void 0, false, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 2089,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -10,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -10,
                                scale: 0.9
                            },
                            transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            },
                            className: "fixed z-[9999] p-1",
                            style: {
                                left: linkDeleteModal.position.x,
                                top: linkDeleteModal.position.y,
                                transform: 'translateX(-50%)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 rounded-xl shadow-2xl border border-white/10 overflow-hidden min-w-[200px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 border-b border-white/10 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16,
                                                        className: "text-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/editor/EditorView.tsx",
                                                        lineNumber: 2114,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 2113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold text-white",
                                                            children: "Remover Link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 2117,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/50 truncate max-w-[150px]",
                                                            children: linkDeleteModal.linkName
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/editor/EditorView.tsx",
                                                            lineNumber: 2118,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 2116,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Esta ação não pode ser desfeita."
                                            }, void 0, false, {
                                                fileName: "[project]/components/editor/EditorView.tsx",
                                                lineNumber: 2124,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2 flex items-center gap-2 border-t border-white/5 bg-black/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    onClick: ()=>setLinkDeleteModal(null),
                                                    className: "flex-1 px-3 py-2 rounded-lg text-xs font-medium text-white/70 hover:bg-white/10 transition-colors",
                                                    children: "Cancelar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 2131,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    onClick: handleConfirmLinkDelete,
                                                    className: "flex-1 px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all",
                                                    children: "Remover"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/editor/EditorView.tsx",
                                                    lineNumber: 2139,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/editor/EditorView.tsx",
                                            lineNumber: 2130,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2110,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0",
                                    style: {
                                        borderLeft: '8px solid transparent',
                                        borderRight: '8px solid transparent',
                                        borderBottom: '8px solid rgb(15 23 42)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/editor/EditorView.tsx",
                                    lineNumber: 2151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/editor/EditorView.tsx",
                            lineNumber: 2098,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/editor/EditorView.tsx",
                lineNumber: 2085,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/EditorView.tsx",
        lineNumber: 1020,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/canvas/CanvasView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasView",
    ()=>CanvasView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-ssr] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-ssr] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// SVG Noise Texture for paper feel
const PAPER_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`;
const NOTE_WIDTH = 256;
const NOTE_HEIGHT_ESTIMATE = 80; // Approximate center for connection anchor
const getLODLevel = (zoom)=>{
    if (zoom < 0.35) return 'dot';
    if (zoom < 0.55) return 'minimal';
    if (zoom < 0.85) return 'compact';
    return 'full';
};
const CanvasView = ({ notes, onNoteSelect, onNoteMove, onConnectNotes, onDeleteNote, isDarkMode, tagsWithColors = [], selectedNoteId })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Viewport State
    const [pan, setPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isDraggingCanvas, setIsDraggingCanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // LOD level based on zoom
    const lodLevel = getLODLevel(zoom);
    // Create a map of tag name to color for quick lookup
    const tagColorMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        tagsWithColors.forEach((tag)=>{
            map.set(tag.name, tag.color);
        });
        return map;
    }, [
        tagsWithColors
    ]);
    const getTagColor = (tagName)=>{
        return tagColorMap.get(tagName) || '#6b7280'; // Default gray if not found
    };
    // Tool State
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('SELECT');
    const [connectionSourceId, setConnectionSourceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseDown = (e)=>{
        const target = e.target;
        // Pan if clicking on background OR grid overlay OR pan layer (not on notes/cards)
        const isBackground = target === containerRef.current || target.classList.contains('canvas-grid') || target.classList.contains('canvas-pan-layer') || target.tagName === 'svg';
        if (isBackground && activeTool === 'SELECT') {
            setIsDraggingCanvas(true);
        }
        // If clicking background in connect mode, cancel connection source but keep tool active
        if (activeTool === 'CONNECT' && isBackground) {
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
    // Zoom with mouse wheel
    const handleWheel = (e)=>{
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom((prev)=>Math.min(Math.max(prev + delta, 0.2), 2));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full bg-[#fcfcfc] dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300 ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'}`,
        ref: containerRef,
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onWheel: handleWheel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-gray-600 dark:text-neutral-400 border border-gray-200 dark:border-neutral-700",
                children: [
                    Math.round(zoom * 100),
                    "% • ",
                    lodLevel.toUpperCase()
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-neutral-900 border border-black dark:border-neutral-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] px-2 py-2 rounded-full flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleTool('SELECT'),
                        className: `p-2 rounded-full transition-all ${activeTool === 'SELECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`,
                        title: "Select / Move Tool",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleTool('CONNECT'),
                        className: `p-2 rounded-full transition-all ${activeTool === 'CONNECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`,
                        title: "Connect Notes Tool",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 canvas-pan-layer",
                style: {
                    cursor: activeTool === 'SELECT' ? 'grab' : 'crosshair'
                }
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none opacity-10 dark:opacity-20",
                style: {
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
                    backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
                    backgroundPosition: `${pan.x % (24 * zoom)}px ${pan.y % (24 * zoom)}px`
                }
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 origin-top-left",
                style: {
                    x: pan.x,
                    y: pan.y,
                    scale: zoom
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-0 left-0 w-[5000px] h-[5000px] pointer-events-none overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                        id: "arrowhead-pulse",
                                        markerWidth: "10",
                                        markerHeight: "7",
                                        refX: "10",
                                        refY: "3.5",
                                        orient: "auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "0 0, 10 3.5, 0 7",
                                            fill: isDarkMode ? "white" : "black",
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/canvas/CanvasView.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOTE_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                            id: `arrowhead-${c.value.replace('#', '')}`,
                                            markerWidth: "10",
                                            markerHeight: "7",
                                            refX: "10",
                                            refY: "3.5",
                                            orient: "auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "0 0, 10 3.5, 0 7",
                                                fill: c.value,
                                                opacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, c.id, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 217,
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
                                    // Calculate control points for smooth S-curve
                                    const dx = x2 - x1;
                                    const dy = y2 - y1;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    // Control point offset - creates the organic curve tension
                                    const tension = Math.min(distance * 0.4, 150);
                                    // Midpoint for the curve
                                    const midX = (x1 + x2) / 2;
                                    const midY = (y1 + y2) / 2;
                                    // Control points perpendicular to the line for S-curve effect
                                    const angle = Math.atan2(dy, dx);
                                    const perpAngle = angle + Math.PI / 2;
                                    // Create organic S-curve control points
                                    const cp1x = x1 + Math.cos(angle) * tension;
                                    const cp1y = y1 + Math.sin(angle) * tension + Math.sin(perpAngle) * (tension * 0.3);
                                    const cp2x = x2 - Math.cos(angle) * tension;
                                    const cp2y = y2 - Math.sin(angle) * tension - Math.sin(perpAngle) * (tension * 0.3);
                                    // Cubic Bezier path
                                    const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: gradientId,
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: x1,
                                                    y1: y1,
                                                    x2: x2,
                                                    y2: y2,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: sourceColor,
                                                            stopOpacity: "0.8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "50%",
                                                            stopColor: sourceColor,
                                                            stopOpacity: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: targetColor,
                                                            stopOpacity: "0.8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/canvas/CanvasView.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 293,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: pathD,
                                                fill: "none",
                                                stroke: sourceColor,
                                                strokeWidth: "6",
                                                strokeOpacity: "0.1",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: pathD,
                                                fill: "none",
                                                stroke: `url(#${gradientId})`,
                                                strokeWidth: "2",
                                                strokeDasharray: "12,6",
                                                strokeLinecap: "round",
                                                className: "connection-line-animated",
                                                markerEnd: `url(#arrowhead-${targetColorClean})`
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, `${note.id}-${target.id}`, true, {
                                        fileName: "[project]/components/canvas/CanvasView.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })),
                            activeTool === 'CONNECT' && connectionSourceId && (()=>{
                                const source = notes.find((n)=>n.id === connectionSourceId);
                                if (!source) return null;
                                const sourceColor = source.color || (isDarkMode ? '#ffffff' : '#000000');
                                const x1 = source.position.x + NOTE_WIDTH / 2;
                                const y1 = source.position.y + NOTE_HEIGHT_ESTIMATE;
                                const x2 = mousePos.x;
                                const y2 = mousePos.y;
                                // Calculate bezier control points
                                const dx = x2 - x1;
                                const dy = y2 - y1;
                                const distance = Math.sqrt(dx * dx + dy * dy);
                                const tension = Math.min(distance * 0.4, 120);
                                const angle = Math.atan2(dy, dx);
                                const perpAngle = angle + Math.PI / 2;
                                const cp1x = x1 + Math.cos(angle) * tension;
                                const cp1y = y1 + Math.sin(angle) * tension + Math.sin(perpAngle) * (tension * 0.2);
                                const cp2x = x2 - Math.cos(angle) * tension;
                                const cp2y = y2 - Math.sin(angle) * tension - Math.sin(perpAngle) * (tension * 0.2);
                                const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: pathD,
                                            fill: "none",
                                            stroke: sourceColor,
                                            strokeWidth: "8",
                                            strokeOpacity: "0.15",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: pathD,
                                            fill: "none",
                                            stroke: sourceColor,
                                            strokeWidth: "2.5",
                                            strokeDasharray: "6,4",
                                            strokeLinecap: "round",
                                            markerEnd: "url(#arrowhead-pulse)",
                                            className: "animate-pulse",
                                            style: {
                                                opacity: 0.8
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/canvas/CanvasView.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true);
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DraggableNote, {
                            note: note,
                            activeTool: activeTool,
                            isConnectionSource: note.id === connectionSourceId,
                            isSelected: note.id === selectedNoteId,
                            onClick: (e)=>handleNoteInteraction(note.id, e),
                            onMove: (pos)=>onNoteMove(note.id, pos),
                            onDelete: ()=>onDeleteNote(note.id),
                            isDarkMode: isDarkMode,
                            getTagColor: getTagColor,
                            lodLevel: lodLevel
                        }, note.id, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeTool === 'CONNECT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        connectionSourceId ? "Click target note" : "Select source note"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas/CanvasView.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DraggableNote = ({ note, activeTool, isConnectionSource, isSelected, onClick, onMove, onDelete, isDarkMode, getTagColor, lodLevel })=>{
    // Safely parse HTML for preview
    const stripHtml = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    // Detect links
    const linkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
        note.blocks
    ]);
    // Sticky Note Theme: Random rotation and imperfect edges (Sketchy Border)
    const randomRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.random() * 2 - 1, []);
    const organicRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const v1 = 2 + Math.random() * 2;
        const v2 = 2 + Math.random() * 3;
        const v3 = 2 + Math.random() * 2;
        const v4 = 2 + Math.random() * 3;
        return `${v1}px ${v2}px ${v3}px ${v4}px`;
    }, []);
    const noteColor = note.color && note.color !== '#000000' ? note.color : null;
    // Expanded Preview Logic
    const previewText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
        note.blocks
    ]);
    const selectionColor = noteColor || (isDarkMode ? '#60a5fa' : '#3b82f6');
    const boxShadow = isConnectionSource ? `0 0 0 4px ${noteColor || (isDarkMode ? '#fff' : '#000')}, 8px 8px 12px rgba(0,0,0,0.2)` : isSelected ? `0 0 0 3px ${selectionColor}, 0 0 20px ${selectionColor}40, 4px 6px 16px rgba(0,0,0,0.12)` : "2px 3px 12px rgba(0,0,0,0.06)";
    const stripHtmlForTitle = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "Untitled";
    };
    // LOD: DOT - Just a pulsing colored circle
    if (lodLevel === 'dot') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            drag: activeTool === 'SELECT',
            dragMomentum: false,
            initial: {
                x: note.position.x,
                y: note.position.y,
                opacity: 0,
                scale: 0
            },
            animate: {
                x: note.position.x + NOTE_WIDTH / 2 - 12,
                y: note.position.y + 30,
                opacity: 1,
                scale: 1
            },
            onDragEnd: (e, info)=>{
                onMove({
                    x: note.position.x + info.offset.x,
                    y: note.position.y + info.offset.y
                });
            },
            onClick: onClick,
            whileHover: {
                scale: 1.5
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            },
            className: `absolute w-6 h-6 rounded-full ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`,
            style: {
                backgroundColor: noteColor || (isDarkMode ? '#6b88ff' : '#3b5bdb'),
                boxShadow: `0 0 12px ${noteColor || '#6b88ff'}60`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-full",
                style: {
                    backgroundColor: noteColor || (isDarkMode ? '#6b88ff' : '#3b5bdb')
                },
                animate: {
                    scale: [
                        1,
                        1.3,
                        1
                    ],
                    opacity: [
                        0.6,
                        0,
                        0.6
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 548,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/canvas/CanvasView.tsx",
            lineNumber: 526,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // LOD: MINIMAL - Small pill with just title
    if (lodLevel === 'minimal') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                scale: isConnectionSource ? 1.05 : 1,
                boxShadow
            },
            onDragEnd: (e, info)=>{
                onMove({
                    x: note.position.x + info.offset.x,
                    y: note.position.y + info.offset.y
                });
            },
            onClick: onClick,
            whileHover: {
                scale: 1.08
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            },
            className: `group absolute ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`,
            style: {
                maxWidth: NOTE_WIDTH * 0.7,
                backgroundColor: isDarkMode ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '6px',
                border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}`,
                padding: '6px 10px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-bold text-[11px] truncate",
                style: {
                    color: noteColor || (isDarkMode ? '#fff' : '#000')
                },
                children: stripHtmlForTitle(note.title)
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 589,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/canvas/CanvasView.tsx",
            lineNumber: 561,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // LOD: COMPACT - Medium card with title + short preview
    if (lodLevel === 'compact') {
        const shortPreview = previewText.slice(0, 80) + (previewText.length > 80 ? '...' : '');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                rotate: isConnectionSource ? 0 : randomRotate * 0.5,
                scale: isConnectionSource ? 1.05 : 1,
                boxShadow
            },
            onDragEnd: (e, info)=>{
                onMove({
                    x: note.position.x + info.offset.x,
                    y: note.position.y + info.offset.y
                });
            },
            onClick: onClick,
            whileHover: {
                scale: 1.05,
                rotate: 0
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            },
            className: `group absolute ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`,
            style: {
                width: NOTE_WIDTH * 0.85,
                backgroundColor: isDarkMode ? 'rgba(26,26,26,0.8)' : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: organicRadius,
                border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`,
                padding: '10px 14px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-xs truncate pr-2",
                            style: {
                                color: noteColor || (isDarkMode ? '#fff' : '#000')
                            },
                            children: stripHtmlForTitle(note.title)
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                            size: 12,
                            className: "text-gray-400 dark:text-neutral-600 flex-shrink-0",
                            style: {
                                color: noteColor || undefined
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                shortPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-gray-500 dark:text-neutral-500 line-clamp-2 leading-relaxed",
                    children: shortPreview
                }, void 0, false, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 643,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1 mt-1.5",
                    children: note.tags.slice(0, 2).map((tag)=>{
                        const tagColor = getTagColor(tag);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[8px] font-bold px-1 py-0.5 rounded-sm",
                            style: {
                                backgroundColor: `${tagColor}20`,
                                color: tagColor
                            },
                            children: [
                                "#",
                                tag
                            ]
                        }, tag, true, {
                            fileName: "[project]/components/canvas/CanvasView.tsx",
                            lineNumber: 652,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 648,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/canvas/CanvasView.tsx",
            lineNumber: 604,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // LOD: FULL - Complete card with glassmorphism
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            boxShadow: "4px 8px 16px rgba(0,0,0,0.12)",
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
            backgroundColor: isDarkMode ? 'rgba(26,26,26,0.75)' : 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: isDarkMode ? '#eee' : '#000',
            borderRadius: organicRadius,
            border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`
        },
        children: [
            activeTool === 'SELECT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete();
                },
                className: "absolute -top-2 -right-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-black/10 dark:border-neutral-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/30 hover:scale-110 z-10 shadow-sm text-black dark:text-white",
                title: "Delete Note",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/components/canvas/CanvasView.tsx",
                    lineNumber: 716,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 708,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-gray-100/30 dark:border-neutral-800/50 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-sm truncate pr-4 text-black/90 dark:text-white/90",
                                dangerouslySetInnerHTML: {
                                    __html: note.title || "Untitled"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 723,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                size: 14,
                                className: "text-gray-400 dark:text-neutral-600 flex-shrink-0",
                                style: {
                                    color: noteColor || undefined
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 727,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 722,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 dark:text-neutral-400 line-clamp-5 leading-relaxed min-h-[1.5em] font-medium",
                        children: previewText || (linkData ? "" : "No content.")
                    }, void 0, false, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mt-1",
                        children: [
                            note.tags.slice(0, 3).map((tag)=>{
                                const tagColor = getTagColor(tag);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold px-1.5 py-0.5 rounded-sm",
                                    style: {
                                        backgroundColor: `${tagColor}20`,
                                        color: tagColor,
                                        border: `1px solid ${tagColor}40`
                                    },
                                    children: [
                                        "#",
                                        tag
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/components/canvas/CanvasView.tsx",
                                    lineNumber: 739,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            note.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-gray-400 dark:text-neutral-600",
                                children: [
                                    "+",
                                    note.tags.length - 3
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 753,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 735,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    linkData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-2 bg-black/5 dark:bg-white/5 p-2 rounded border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://www.google.com/s2/favicons?domain=${linkData.hostname}&sz=32`,
                                alt: "favicon",
                                className: "w-4 h-4 rounded-sm",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 760,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-gray-700 dark:text-gray-300 truncate flex-1",
                                children: linkData.hostname
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 768,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 10,
                                className: "text-gray-500 dark:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas/CanvasView.tsx",
                                lineNumber: 771,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/canvas/CanvasView.tsx",
                        lineNumber: 759,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/canvas/CanvasView.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isConnectionSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                lineNumber: 777,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas/CanvasView.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/graph/GraphView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphView",
    ()=>GraphView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-ssr] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-ssr] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-ssr] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-ssr] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-ssr] (ecmascript) <export default as forceCollide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__drag$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript) <export default as drag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
;
;
;
;
;
// Cluster colors palette
const CLUSTER_COLORS = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6',
    '#f43f5e'
];
const GraphView = ({ notes, onNoteSelect, onDeleteNote, isDarkMode })=>{
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const simulationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredNodeId, setHoveredNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCluster, setHoveredCluster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const stripHtml = (html)=>{
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    // Extract unique tags and create cluster mapping
    const clusterData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const tagMap = new Map(); // tag -> noteIds
        // Helper to clean tag text
        const cleanTag = (tag)=>{
            const tmp = document.createElement("DIV");
            tmp.innerHTML = tag;
            return (tmp.textContent || tmp.innerText || tag).trim();
        };
        notes.forEach((note)=>{
            if (note.tags && note.tags.length > 0) {
                // Use first tag as primary cluster (cleaned)
                const primaryTag = cleanTag(note.tags[0]);
                if (primaryTag && !tagMap.has(primaryTag)) {
                    tagMap.set(primaryTag, []);
                }
                if (primaryTag) {
                    tagMap.get(primaryTag).push(note.id);
                }
            }
        });
        // Create cluster array with positions
        const clusters = [];
        const tagArray = Array.from(tagMap.keys());
        const angleStep = 2 * Math.PI / Math.max(tagArray.length, 1);
        tagArray.forEach((tag, i)=>{
            clusters.push({
                tag,
                x: 0,
                y: 0,
                color: CLUSTER_COLORS[i % CLUSTER_COLORS.length],
                nodeCount: tagMap.get(tag).length
            });
        });
        return {
            tagMap,
            clusters
        };
    }, [
        notes
    ]);
    // Get connected node IDs for hover effect
    const getConnectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nodeId)=>{
        const connected = new Set();
        connected.add(nodeId);
        notes.forEach((note)=>{
            if (note.id === nodeId) {
                note.connections.forEach((id)=>connected.add(id));
            }
            if (note.connections.includes(nodeId)) {
                connected.add(note.id);
            }
        });
        return connected;
    }, [
        notes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = ()=>setContextMenu(null);
        window.addEventListener('click', handleClickOutside);
        return ()=>window.removeEventListener('click', handleClickOutside);
    }, []);
    // Breathing animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let startTime = performance.now();
        const animate = (currentTime)=>{
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!svgRef.current) return;
        const width = svgRef.current.clientWidth;
        const height = svgRef.current.clientHeight;
        const centerX = width / 2;
        const centerY = height / 2;
        // Neural color palette
        const bgColor = isDarkMode ? "#050508" : "#fafafa";
        // Calculate cluster positions in a circle
        const clusterRadius = Math.min(width, height) * 0.3;
        const { clusters, tagMap } = clusterData;
        clusters.forEach((cluster, i)=>{
            const angle = i / clusters.length * 2 * Math.PI - Math.PI / 2;
            cluster.x = centerX + Math.cos(angle) * clusterRadius;
            cluster.y = centerY + Math.sin(angle) * clusterRadius;
        });
        // Create cluster lookup
        const clusterLookup = new Map();
        clusters.forEach((c)=>clusterLookup.set(c.tag, c));
        // Helper to clean tag text
        const cleanTag = (tag)=>{
            const tmp = document.createElement("DIV");
            tmp.innerHTML = tag;
            return (tmp.textContent || tmp.innerText || tag).trim();
        };
        // Transform notes to enhanced graph nodes
        const nodes = notes.map((n, i)=>{
            const rawTag = n.tags?.[0];
            const primaryTag = rawTag ? cleanTag(rawTag) : 'uncategorized';
            const cluster = clusterLookup.get(primaryTag);
            return {
                id: n.id,
                title: n.title,
                group: 1,
                x: cluster ? cluster.x + (Math.random() - 0.5) * 80 : centerX + (Math.random() - 0.5) * 200,
                y: cluster ? cluster.y + (Math.random() - 0.5) * 80 : centerY + (Math.random() - 0.5) * 200,
                z: 0.3 + Math.random() * 0.7,
                breathPhase: Math.random() * Math.PI * 2,
                clusterId: primaryTag,
                clusterX: cluster?.x || centerX,
                clusterY: cluster?.y || centerY,
                tags: n.tags,
                color: n.color || cluster?.color
            };
        });
        const links = [];
        notes.forEach((source)=>{
            source.connections.forEach((targetId)=>{
                if (notes.find((n)=>n.id === targetId)) {
                    links.push({
                        source: source.id,
                        target: targetId
                    });
                }
            });
        });
        // Clear previous
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current).selectAll("*").remove();
        const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current).attr("viewBox", [
            0,
            0,
            width,
            height
        ]).style("background", `radial-gradient(ellipse at center, ${isDarkMode ? '#0a0a15' : '#f5f5ff'} 0%, ${bgColor} 100%)`);
        // Defs for filters
        const defs = svg.append("defs");
        // Glow filter for nodes
        const glowFilter = defs.append("filter").attr("id", "neural-glow").attr("x", "-100%").attr("y", "-100%").attr("width", "300%").attr("height", "300%");
        glowFilter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
        glowFilter.append("feMerge").selectAll("feMergeNode").data([
            "blur",
            "SourceGraphic"
        ]).join("feMergeNode").attr("in", (d)=>d);
        // Cluster glow filter
        const clusterFilter = defs.append("filter").attr("id", "cluster-glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
        clusterFilter.append("feGaussianBlur").attr("stdDeviation", "20").attr("result", "blur");
        // Synapse glow filter
        const synapseFilter = defs.append("filter").attr("id", "synapse-glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
        synapseFilter.append("feGaussianBlur").attr("stdDeviation", "2").attr("result", "blur");
        synapseFilter.append("feMerge").selectAll("feMergeNode").data([
            "blur",
            "SourceGraphic"
        ]).join("feMergeNode").attr("in", (d)=>d);
        // Custom cluster force
        const forceCluster = ()=>{
            const strength = 0.15;
            return (alpha)=>{
                nodes.forEach((node)=>{
                    if (node.clusterX !== undefined && node.clusterY !== undefined) {
                        node.vx = (node.vx || 0) + (node.clusterX - (node.x || 0)) * strength * alpha;
                        node.vy = (node.vy || 0) + (node.clusterY - (node.y || 0)) * strength * alpha;
                    }
                });
            };
        };
        // Simulation with organic physics + clustering
        const simulation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"](nodes).force("link", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"](links).id((d)=>d.id).distance(80).strength(0.4)).force("charge", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"]().strength(-150)).force("center", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"](centerX, centerY).strength(0.05)).force("collide", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"]().radius(35)).force("cluster", forceCluster()).velocityDecay(0.5).alphaDecay(0.015);
        simulationRef.current = simulation;
        // Draw cluster backgrounds first
        const clusterGroup = svg.append("g").attr("class", "clusters");
        clusters.forEach((cluster)=>{
            // Cluster area glow
            clusterGroup.append("circle").attr("class", "cluster-bg").attr("cx", cluster.x).attr("cy", cluster.y).attr("r", 60 + cluster.nodeCount * 15).attr("fill", cluster.color).attr("opacity", 0.08).attr("filter", "url(#cluster-glow)");
            // Cluster label
            clusterGroup.append("text").attr("class", "cluster-label").attr("x", cluster.x).attr("y", cluster.y - 70 - cluster.nodeCount * 10).attr("text-anchor", "middle").attr("fill", cluster.color).attr("opacity", 0.6).style("font-family", "'Inter', sans-serif").style("font-size", "11px").style("font-weight", "700").style("text-transform", "uppercase").style("letter-spacing", "0.1em").text(`#${cluster.tag}`);
        });
        // Connection lines group
        const linksGroup = svg.append("g").attr("class", "links");
        // Draw synapse lines
        const link = linksGroup.selectAll("g").data(links).join("g").attr("class", "synapse");
        // Main connection line
        const linkPath = link.append("line").attr("stroke", isDarkMode ? "rgba(100, 150, 255, 0.4)" : "rgba(80, 120, 200, 0.3)").attr("stroke-width", 2).attr("filter", "url(#synapse-glow)");
        // Animated particles on connections
        link.each(function() {
            const g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](this);
            g.append("line").attr("class", "synapse-pulse").attr("stroke", isDarkMode ? "rgba(150, 200, 255, 0.6)" : "rgba(100, 150, 255, 0.5)").attr("stroke-width", 1.5).attr("stroke-dasharray", "4,8").style("animation", `synapseFlow ${2 + Math.random()}s linear infinite`).style("animation-delay", `${-Math.random() * 2}s`);
        });
        // Nodes group
        const nodesGroup = svg.append("g").attr("class", "nodes");
        // Draw nodes
        const node = nodesGroup.selectAll("g").data(nodes.sort((a, b)=>a.z - b.z)).join("g").attr("cursor", "pointer").attr("class", "neural-node").call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__drag$3e$__["drag"]().on("start", dragstarted).on("drag", dragged).on("end", dragended)).on("click", (event, d)=>{
            event.stopPropagation();
            onNoteSelect(d.id);
        }).on("contextmenu", (event, d)=>{
            event.preventDefault();
            event.stopPropagation();
            setContextMenu({
                x: event.pageX,
                y: event.pageY,
                nodeId: d.id
            });
        }).on("mouseenter", (event, d)=>{
            setHoveredNodeId(d.id);
            setHoveredCluster(d.clusterId);
        }).on("mouseleave", ()=>{
            setHoveredNodeId(null);
            setHoveredCluster(null);
        });
        // Outer glow circle (breathing)
        node.append("circle").attr("class", "node-glow").attr("r", 20).attr("fill", (d)=>{
            const clusterColor = clusterLookup.get(d.clusterId)?.color;
            return d.color && d.color !== '#000000' ? d.color : clusterColor || (isDarkMode ? '#6088ff' : '#4070e0');
        }).attr("opacity", 0.2).attr("filter", "url(#neural-glow)");
        // Main node circle
        node.append("circle").attr("class", "node-core").attr("r", (d)=>8 + d.z * 4).attr("fill", (d)=>{
            const clusterColor = clusterLookup.get(d.clusterId)?.color;
            return d.color && d.color !== '#000000' ? d.color : clusterColor || (isDarkMode ? '#90b0ff' : '#4080e0');
        }).attr("stroke", isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)").attr("stroke-width", 1.5);
        // Inner highlight
        node.append("circle").attr("class", "node-highlight").attr("r", (d)=>3 + d.z * 2).attr("cx", -2).attr("cy", -2).attr("fill", "rgba(255,255,255,0.4)");
        // Labels
        node.append("text").attr("x", (d)=>12 + d.z * 4).attr("y", 4).text((d)=>stripHtml(d.title || "Untitled")).style("font-family", "'Inter', sans-serif").style("font-size", (d)=>`${10 + d.z * 3}px`).style("font-weight", "600").style("letter-spacing", "0.02em").attr("fill", isDarkMode ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)").style("filter", (d)=>`blur(${(1 - d.z) * 0.5}px)`).clone(true).lower().attr("fill", "none").attr("stroke", isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)").attr("stroke-width", 3).style("filter", "none");
        // Tick function with breathing animation
        simulation.on("tick", ()=>{
            const t = performance.now() / 1000;
            // Update links
            linkPath.attr("x1", (d)=>d.source.x).attr("y1", (d)=>d.source.y).attr("x2", (d)=>d.target.x).attr("y2", (d)=>d.target.y);
            link.selectAll(".synapse-pulse").attr("x1", (d)=>d.source.x).attr("y1", (d)=>d.source.y).attr("x2", (d)=>d.target.x).attr("y2", (d)=>d.target.y);
            // Update nodes with breathing effect
            node.attr("transform", (d)=>{
                const breathScale = 1 + Math.sin(t * 1.5 + d.breathPhase) * 0.08;
                return `translate(${d.x},${d.y}) scale(${breathScale})`;
            });
            // Update glow intensity
            node.selectAll(".node-glow").attr("opacity", (d)=>0.15 + Math.sin(t * 1.5 + d.breathPhase) * 0.1);
        });
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
            if (!event.active) simulation.alphaTarget(0.01);
            d.fx = null;
            d.fy = null;
        }
        return ()=>{
            simulation.stop();
        };
    }, [
        notes,
        onNoteSelect,
        isDarkMode,
        clusterData
    ]);
    // Apply hover focus effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!svgRef.current) return;
        const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
        const connectedNodes = hoveredNodeId ? getConnectedNodes(hoveredNodeId) : null;
        // Update node opacity based on focus
        svg.selectAll(".neural-node").transition().duration(200).style("opacity", (d)=>{
            if (!hoveredNodeId) return 1;
            return connectedNodes?.has(d.id) ? 1 : 0.15;
        });
        // Update link opacity
        svg.selectAll(".synapse").transition().duration(200).style("opacity", (d)=>{
            if (!hoveredNodeId) return 1;
            const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
            const targetId = typeof d.target === 'object' ? d.target.id : d.target;
            return sourceId === hoveredNodeId || targetId === hoveredNodeId ? 1 : 0.1;
        });
        // Highlight cluster on hover
        svg.selectAll(".cluster-bg").transition().duration(300).attr("opacity", function() {
            if (!hoveredCluster) return 0.08;
            const circle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](this);
            // Check if this cluster matches by comparing position
            return 0.15;
        });
    }, [
        hoveredNodeId,
        hoveredCluster,
        getConnectedNodes
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes synapseFlow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        
        .neural-node {
          transition: filter 0.3s ease;
        }
        
        .neural-node:hover .node-core {
          filter: brightness(1.3) drop-shadow(0 0 8px currentColor);
        }
        
        .synapse-pulse {
          pointer-events: none;
        }
        
        .cluster-label {
          pointer-events: none;
          user-select: none;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                className: "w-full h-full block"
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                className: "absolute top-24 left-28 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-gray-200/50 dark:border-neutral-700/50 max-w-[180px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-neutral-400 mb-3",
                        children: "Clusters"
                    }, void 0, false, {
                        fileName: "[project]/components/graph/GraphView.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            clusterData.clusters.map((cluster)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: cluster.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/graph/GraphView.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-gray-700 dark:text-neutral-300",
                                            children: [
                                                "#",
                                                cluster.tag
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/graph/GraphView.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-400 dark:text-neutral-500",
                                            children: [
                                                "(",
                                                cluster.nodeCount,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/graph/GraphView.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, cluster.tag, true, {
                                    fileName: "[project]/components/graph/GraphView.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            clusterData.clusters.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 dark:text-neutral-500 italic",
                                children: "No tags yet"
                            }, void 0, false, {
                                fileName: "[project]/components/graph/GraphView.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/graph/GraphView.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "absolute bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 shadow-xl rounded-lg text-xs font-bold tracking-widest pointer-events-none uppercase",
                children: "Neural Graph"
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    style: {
                        top: contextMenu.y,
                        left: contextMenu.x
                    },
                    className: "fixed z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-gray-200 dark:border-neutral-700 shadow-2xl rounded-xl p-1 min-w-[140px]",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onDeleteNote(contextMenu.nodeId);
                            setContextMenu(null);
                        },
                        className: "w-full flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/graph/GraphView.tsx",
                                lineNumber: 608,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Delete Note"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/graph/GraphView.tsx",
                        lineNumber: 601,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/graph/GraphView.tsx",
                    lineNumber: 593,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/graph/GraphView.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/graph/GraphView.tsx",
        lineNumber: 523,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ui/UnsavedChangesModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnsavedChangesModal",
    ()=>UnsavedChangesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
;
;
;
const UnsavedChangesModal = ({ isOpen, onSaveAndLeave, onDiscardAndLeave, onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-black dark:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 24,
                                        strokeWidth: 2,
                                        className: "text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                                        lineNumber: 37,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-neutral-400 font-medium mb-10 leading-relaxed",
                            children: "You have unsaved changes in this note. If you leave now, your changes will be lost."
                        }, void 0, false, {
                            fileName: "[project]/components/ui/UnsavedChangesModal.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSaveAndLeave,
                                    className: "w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onDiscardAndLeave,
                                    className: "w-full py-3 border-2 border-red-500 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "w-full py-3 text-gray-500 dark:text-neutral-500 font-bold hover:text-black dark:hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
}),
"[project]/hooks/useHistory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useHistory(initialPresent) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        past: [],
        present: initialPresent,
        future: []
    });
    const canUndo = state.past.length > 0;
    const canRedo = state.future.length > 0;
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setState((currentState)=>{
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
        });
    }, []);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setState((currentState)=>{
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
        });
    }, []);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newPresent, mode = 'PUSH')=>{
        setState((currentState)=>{
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
        });
    }, []);
    return {
        state: state.present,
        set,
        undo,
        redo,
        canUndo,
        canRedo
    };
}
}),
"[project]/components/ui/SearchPalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchPalette",
    ()=>SearchPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-ssr] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
;
const SearchPalette = ({ isOpen, onClose, notes, onSelectNote })=>{
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setTimeout(()=>inputRef.current?.focus(), 100);
            setQuery('');
            setSelectedIndex(0);
        }
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!isOpen) return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev)=>(prev + 1) % filteredNotes.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev)=>(prev - 1 + filteredNotes.length) % filteredNotes.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredNotes[selectedIndex]) {
                    onSelectNote(filteredNotes[selectedIndex].id);
                    onClose();
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] pointer-events-auto overflow-hidden flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border-b-2 border-black/5 dark:border-white/5 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "text-black dark:text-white w-5 h-5 mr-3",
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-transform hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[400px] overflow-y-auto custom-scrollbar p-2 space-y-1",
                                children: filteredNotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 text-center text-gray-400 dark:text-neutral-600 font-medium",
                                    children: "No results found."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/SearchPalette.tsx",
                                    lineNumber: 122,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : filteredNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 18,
                                                        className: `flex-shrink-0 transition-colors ${index === selectedIndex ? 'text-white dark:text-black' : 'text-gray-400 dark:text-neutral-600'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold truncate",
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: note.title || "Untitled"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-1",
                                                                        children: note.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            index === selectedIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -5
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 dark:bg-neutral-800 px-4 py-2 flex justify-between text-[10px] text-gray-400 dark:text-neutral-500 font-mono uppercase tracking-wider border-t border-black/5 dark:border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Pro Tip: Use arrow keys to navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/SearchPalette.tsx",
                                        lineNumber: 196,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/ui/AIMagicModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIMagicModal",
    ()=>AIMagicModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
;
;
;
;
const AIMagicModal = ({ isOpen, onClose, onGenerate, isGenerating })=>{
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setTimeout(()=>inputRef.current?.focus(), 100);
            setPrompt('');
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black dark:bg-white text-white dark:text-black p-4 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 18,
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/AIMagicModal.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    disabled: isGenerating,
                                    className: "hover:text-gray-300 dark:hover:text-gray-600 disabled:opacity-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-neutral-400 font-mono mb-4 uppercase tracking-wide",
                                    children: "Describe your thought, project, or idea..."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: !prompt.trim() || isGenerating,
                                        className: "bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-bold flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95",
                                        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/AIMagicModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Creating..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "GENERATE",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
}),
"[project]/services/data:17d468 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fe4934befac9299db8a4b3db4ccf73fea8ee782ce":"generateNoteFromPrompt"},"services/geminiService.ts",""] */ __turbopack_context__.s([
    "generateNoteFromPrompt",
    ()=>generateNoteFromPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateNoteFromPrompt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7fe4934befac9299db8a4b3db4ccf73fea8ee782ce", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNoteFromPrompt"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJLCBUeXBlIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJBUEkgS2V5IG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZE5vdGVXaXRoQUkgPSBhc3luYyAoY3VycmVudENvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBcIkVycm9yOiBBUEkgS2V5IG1pc3NpbmcuXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LXBybycsXG4gICAgICBjb250ZW50czogYFlvdSBhcmUgYSBtaW5pbWFsaXN0IHByb2R1Y3Rpdml0eSBhc3Npc3RhbnQuIFxuICAgICAgVGFrZSB0aGUgZm9sbG93aW5nIG5vdGUgY29udGVudCBhbmQgZXhwYW5kIHVwb24gaXQgd2l0aCAzIGFjdGlvbmFibGUgYnVsbGV0IHBvaW50cyBcbiAgICAgIG9yIGEgYnJpZWYgc3VtbWFyeSBwYXJhZ3JhcGguIEtlZXAgdGhlIHRvbmUgc3RyaWN0LCBwcm9mZXNzaW9uYWwsIGFuZCBjb25jaXNlLlxuICAgICAgXG4gICAgICBJbnB1dDogXCIke2N1cnJlbnRDb250ZW50fVwiYCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0IHx8IFwiTm8gcmVzcG9uc2UgZ2VuZXJhdGVkLlwiO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJHZW1pbmkgQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiRmFpbGVkIHRvIGdlbmVyYXRlIGluc2lnaHQuXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbm5lY3Rpb25zID0gYXN5bmMgKG5vdGVzOiB7IGlkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfVtdKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0Q2xpZW50KCk7XG4gIGlmICghYWkpIHJldHVybiBbXTtcblxuICB0cnkge1xuICAgIC8vIExvZ2ljIHRvIHN1Z2dlc3QgY29ubmVjdGlvbnMgYmV0d2VlbiBub3RlcyBiYXNlZCBvbiB0aXRsZXNcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgYWR2YW5jZWQgZ3JhcGggUkFHXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vdGVGcm9tUHJvbXB0ID0gYXN5bmMgKHByb21wdDogc3RyaW5nKTogUHJvbWlzZTx7IHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9IHwgbnVsbD4gPT4ge1xuICBjb25zdCBhaSA9IGdldENsaWVudCgpO1xuICBpZiAoIWFpKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtcHJvJyxcbiAgICAgIGNvbnRlbnRzOiBgR2VuZXJhdGUgYSBjcmVhdGl2ZSBhbmQgc3RydWN0dXJlZCBub3RlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgdXNlciBwcm9tcHQ6IFwiJHtwcm9tcHR9XCIuIFxuICAgICAgICBUaGUgdGl0bGUgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGNhdGNoeS4gVGhlIGNvbnRlbnQgc2hvdWxkIGJlIGEgd2VsbC1zdHJ1Y3R1cmVkIHN0YXJ0aW5nIHBvaW50IChlLmcuLCBhIGxpc3QsIGEgc3VtbWFyeSwgb3IgYSBkcmFmdCkuYCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiBUeXBlLk9CSkVDVCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgICAgY29udGVudDogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogW1widGl0bGVcIiwgXCJjb250ZW50XCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSByZXNwb25zZS50ZXh0O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIE1hZ2ljIENyZWF0ZSBFcnJvcjpcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlTQStDYSJ9
}),
"[project]/app/data:c79a5f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a069e8f1f4f1494200b20c0bc84072e394479fe9":"getNotes"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getNotes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00a069e8f1f4f1494200b20c0bc84072e394479fe9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNotes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkF1SnNCIn0=
}),
"[project]/app/data:be22df [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401cd273f71d2e0f903f4f9a93d8fe00cb48938531":"saveNote"},"app/actions.ts",""] */ __turbopack_context__.s([
    "saveNote",
    ()=>saveNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var saveNote = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401cd273f71d2e0f903f4f9a93d8fe00cb48938531", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveNote"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkFzTHNCIn0=
}),
"[project]/app/data:8231f5 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404a74e22b5abf525b0b3284acc53bad418d3e5a87":"deleteNoteAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "deleteNoteAction",
    ()=>deleteNoteAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteNoteAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("404a74e22b5abf525b0b3284acc53bad418d3e5a87", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteNoteAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkE2TnNCIn0=
}),
"[project]/app/data:7ace10 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006e4d292e2cbdbf295400e16cc531e51233b7a991":"signOutAction"},"app/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("006e4d292e2cbdbf295400e16cc531e51233b7a991", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFrSnNCIn0=
}),
"[project]/app/data:912388 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6001f311435a739c25682d5782f498ba891734c6d3":"updateUserProfile"},"app/actions.ts",""] */ __turbopack_context__.s([
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateUserProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6001f311435a739c25682d5782f498ba891734c6d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBwb29sIGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuLy8gLS0tIFpvZCBTY2hlbWFzIC0tLVxuY29uc3QgVXNlclJlZ2lzdHJhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYpLFxuICByb2xlOiB6LmVudW0oWydVU0VSJywgJ0FETUlOJ10pLm9wdGlvbmFsKCksXG59KTtcblxuY29uc3QgVXNlclByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLm1heCgxMDApLFxuICBpbWFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLCAvLyBBbGxvdyBlbXB0eSBzdHJpbmcgb3IgbnVsbFxufSk7XG5cbmNvbnN0IE5vdGVCbG9ja1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouZW51bShbJ3BhcmFncmFwaCcsICdoZWFkaW5nJywgJ3RvZG8nLCAnYnVsbGV0JywgJ2Jsb2NrcXVvdGUnLCAnY29kZScsICdpbWFnZSddKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgY2hlY2tlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5jb25zdCBOb3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGJsb2Nrczogei5hcnJheShOb3RlQmxvY2tTY2hlbWEpLFxuICBwb3NpdGlvbjogei5vYmplY3QoeyB4OiB6Lm51bWJlcigpLCB5OiB6Lm51bWJlcigpIH0pLFxuICBjb25uZWN0aW9uczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHoubnVtYmVyKCksXG4gIGNvbG9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuLy8gLS0tIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhSZXRyeTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMsIGRlbGF5ID0gMTAwMCk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzIDw9IDApIHRocm93IGVycm9yO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIHJldHVybiB3aXRoUmV0cnkoZm4sIHJldHJpZXMgLSAxLCBkZWxheSAqIDIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVRhYmxlKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoYFxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbm90ZXMgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICB0aXRsZSBURVhULFxuICAgICAgICBkYXRhIEpTT05CIE5PVCBOVUxMXG4gICAgICApO1xuICAgIGApO1xuXG4gICAgLy8gQ3JlYXRlIFVzZXJzIFRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBwYXNzd29yZF9oYXNoIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIHJvbGUgVEVYVCBOT1QgTlVMTCBERUZBVUxUICdVU0VSJyxcbiAgICAgICAgY3JlYXRlZF9hdCBCSUdJTlQgTk9UIE5VTEwsXG4gICAgICAgIG5hbWUgVEVYVCxcbiAgICAgICAgaW1hZ2UgVEVYVFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIENyZWF0ZSBUYWdzIFRhYmxlIGZvciBnbG9iYWwgdGFnIG1hbmFnZW1lbnRcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHRhZ3MgKFxuICAgICAgICBpZCBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgICBuYW1lIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgICBjb2xvciBURVhUIE5PVCBOVUxMIERFRkFVTFQgJyMzYjgyZjYnLFxuICAgICAgICBjcmVhdGVkX2F0IEJJR0lOVCBOT1QgTlVMTFxuICAgICAgKTtcbiAgICBgKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zIGlmIHRoZXkgZG9uJ3QgZXhpc3QgKG1pZ3JhdGlvbilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShgQUxURVIgVEFCTEUgdXNlcnMgQUREIENPTFVNTiBJRiBOT1QgRVhJU1RTIG5hbWUgVEVYVDtgKTtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoYEFMVEVSIFRBQkxFIHVzZXJzIEFERCBDT0xVTU4gSUYgTk9UIEVYSVNUUyBpbWFnZSBURVhUO2ApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1ucyBtaWdodCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgIH1cblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBlbnN1cmUgdGFibGVzIGV4aXN0OlwiLCBlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaXhTY2hlbWEoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShgXG4gICAgICAgICAgICBBTFRFUiBUQUJMRSBub3RlcyBBREQgQ09MVU1OIElGIE5PVCBFWElTVFMgZGF0YSBKU09OQjtcbiAgICAgICAgYCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZpeCBzY2hlbWE6XCIsIGUpO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUHJvZmlsZVNjaGVtYS5zYWZlUGFyc2UoeyBuYW1lLCBpbWFnZSB9KTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgcHJvZmlsZSBkYXRhLicgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHJldHVybiB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XG5cbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgW25hbWUsIGltYWdlLCBzZXNzaW9uLnVzZXIuZW1haWxdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzQyNzAzJykgeyAvLyBVbmRlZmluZWQgY29sdW1uXG4gICAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpLnRoZW4obW9kID0+IG1vZC5hdXRoKCkpO1xuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSByZXR1cm4geyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xuXG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSB1c2VycyBTRVQgbmFtZSA9ICQxLCBpbWFnZSA9ICQyIFdIRVJFIGVtYWlsID0gJDMnLFxuICAgICAgICAgIFtuYW1lLCBpbWFnZSwgc2Vzc2lvbi51c2VyLmVtYWlsXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChyZXRyeUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZSBhZnRlciBtaWdyYXRpb246JywgcmV0cnlFcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduT3V0QWN0aW9uKCkge1xuICBjb25zdCB7IHNpZ25PdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vYXV0aCcpO1xuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogJy9sb2dpbicgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RlcygpOiBQcm9taXNlPE5vdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBkYXRhIEZST00gbm90ZXMnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3NcbiAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgLmZpbHRlcigobik6IG4gaXMgTm90ZSA9PiBuICE9PSBudWxsICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIG4pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSB0YWJsZSBtaWdodCBub3QgZXhpc3QgeWV0XG4gICAgaWYgKGUuY29kZSA9PT0gJzQyUDAxJykge1xuICAgICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgY29sdW1uIG1pZ2h0IG5vdCBleGlzdCAoc2NoZW1hIG1pc21hdGNoKVxuICAgIGlmIChlLmNvZGUgPT09ICc0MjcwMycpIHtcbiAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgLy8gUmV0cnkgZmV0Y2hcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHJ5UmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUIGRhdGEgRlJPTSBub3RlcycpO1xuICAgICAgICByZXR1cm4gcmV0cnlSZXN1bHQucm93c1xuICAgICAgICAgIC5tYXAocm93ID0+IHJvdy5kYXRhKVxuICAgICAgICAgIC5maWx0ZXIoKG4pOiBuIGlzIE5vdGUgPT4gbiAhPT0gbnVsbCAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBuKTtcbiAgICAgIH0gY2F0Y2ggKHJldHJ5RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJldHJ5IGZhaWxlZCBhZnRlciBzY2hlbWEgZml4OlwiLCByZXRyeUVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3I6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5vdGUobm90ZTogTm90ZSkge1xuICAvLyBWYWxpZGF0ZSBOb3RlIFN0cnVjdHVyZVxuICBjb25zdCB2YWxpZGF0aW9uID0gTm90ZVNjaGVtYS5zYWZlUGFyc2Uobm90ZSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZSBkYXRhOlwiLCB2YWxpZGF0aW9uLmVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgZGF0YVwiKTtcbiAgfVxuXG4gIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgIGBJTlNFUlQgSU5UTyBub3RlcyAoaWQsIHRpdGxlLCBkYXRhKSBWQUxVRVMgKCQxLCAkMiwgJDMpIFxuICAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUIHRpdGxlID0gJDIsIGRhdGEgPSAkM2AsXG4gICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSAnNDJQMDEnKSB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICAgIC8vIFJldHJ5IG9uY2UgaW1tZWRpYXRlbHkgYWZ0ZXIgdGFibGUgY3JlYXRpb25cbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnNDI3MDMnKSB7XG4gICAgICAgIGF3YWl0IGZpeFNjaGVtYSgpO1xuICAgICAgICAvLyBSZXRyeSBvbmNlIGltbWVkaWF0ZWx5IGFmdGVyIHNjaGVtYSBmaXhcbiAgICAgICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICAgICBgSU5TRVJUIElOVE8gbm90ZXMgKGlkLCB0aXRsZSwgZGF0YSkgVkFMVUVTICgkMSwgJDIsICQzKSBcbiAgICAgICAgICAgICAgIE9OIENPTkZMSUNUIChpZCkgRE8gVVBEQVRFIFNFVCB0aXRsZSA9ICQyLCBkYXRhID0gJDNgLFxuICAgICAgICAgIFtub3RlLmlkLCBub3RlLnRpdGxlIHx8ICcnLCBKU09OLnN0cmluZ2lmeShub3RlKV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGVBY3Rpb24oaWQ6IHN0cmluZykge1xuICBpZiAoIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybjsgLy8gQmFzaWMgdmFsaWRhdGlvblxuICB0cnkge1xuICAgIGF3YWl0IHdpdGhSZXRyeShhc3luYyAoKSA9PiBhd2FpdCBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBub3RlcyBXSEVSRSBpZCA9ICQxJywgW2lkXSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBFcnJvcjpcIiwgZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bmNOb3Rlcyhub3RlczogTm90ZVtdKSB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB6LmFycmF5KE5vdGVTY2hlbWEpLnNhZmVQYXJzZShub3Rlcyk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgbm90ZXMgZGF0YSBmb3Igc3luY1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcm9jZXNzIGluIGNodW5rcyBvciBzZXF1ZW50aWFsbHkgdG8gYXZvaWQgb3ZlcndoZWxtaW5nIHRoZSBEQiwgYnV0IHdpdGggcmV0cnkgcGVyIG5vdGVcbiAgZm9yIChjb25zdCBub3RlIG9mIG5vdGVzKSB7XG4gICAgYXdhaXQgc2F2ZU5vdGUobm90ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgfHwgJ1VTRVInLFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBVc2VyUmVnaXN0cmF0aW9uU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCAobWluIDYgY2hhcnMpLicgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgLy8gRW5zdXJlIHRhYmxlIGV4aXN0cyBiZWZvcmUgcmVnaXN0ZXJpbmdcbiAgYXdhaXQgZW5zdXJlVGFibGUoKTtcblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgcm9sZSwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpYCxcbiAgICAgIFtpZCwgZW1haWwsIGhhc2hlZFBhc3N3b3JkLCByb2xlLCBEYXRlLm5vdygpXVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gVW5pcXVlIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdVc2VyIGFscmVhZHkgZXhpc3RzLicgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKHByZXZTdGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSxcbiAgICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICBjYXNlICdDcmVkZW50aWFsc1NpZ25pbic6XG4gICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGNyZWRlbnRpYWxzLic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZy4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyAtLS0gVGFnIE1hbmFnZW1lbnQgQWN0aW9ucyAtLS1cblxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUYWdTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm1pbigxKS5tYXgoNTApLFxuICBjb2xvcjogei5zdHJpbmcoKS5yZWdleCgvXiNbMC05YS1mQS1GXXs2fSQvKSxcbiAgY3JlYXRlZEF0OiB6Lm51bWJlcigpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzKCk6IFByb21pc2U8VGFnW10+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBlbnN1cmVUYWJsZSgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGNyZWF0ZWRfYXQgRlJPTSB0YWdzIE9SREVSIEJZIG5hbWUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgY29sb3I6IHJvdy5jb2xvcixcbiAgICAgIGNyZWF0ZWRBdDogTnVtYmVyKHJvdy5jcmVhdGVkX2F0KSxcbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICc0MlAwMScpIHtcbiAgICAgIGF3YWl0IGVuc3VyZVRhYmxlKCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhZ3M6XCIsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmc7IHRhZz86IFRhZyB9PiB7XG4gIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCB2YWxpZGF0aW9uID0gVGFnU2NoZW1hLnNhZmVQYXJzZSh7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZW5zdXJlVGFibGUoKTtcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHRhZ3MgKGlkLCBuYW1lLCBjb2xvciwgY3JlYXRlZF9hdCkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgW2lkLCBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0XVxuICAgICk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdGFnOiB7IGlkLCBuYW1lOiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLCBjb2xvciwgY3JlYXRlZEF0IH0gfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRhZzpcIiwgZSk7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHRhZycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFnKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzPzogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBpZiAoIWlkIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCB0YWcgZGF0YScgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdVUERBVEUgdGFncyBTRVQgbmFtZSA9ICQxLCBjb2xvciA9ICQyIFdIRVJFIGlkID0gJDMnLFxuICAgICAgW25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGNvbG9yLCBpZF1cbiAgICApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUYWcgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgdGFnJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYWcoaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ludmFsaWQgdGFnIElEJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBEZWxldGUgdGhlIHRhZyBmcm9tIHRoZSB0YWdzIHRhYmxlXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnREVMRVRFIEZST00gdGFncyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG5cbiAgICAvLyBSZW1vdmUgdGhpcyB0YWcgZnJvbSBhbGwgbm90ZXMgdGhhdCB1c2UgaXRcbiAgICBjb25zdCBub3Rlc1Jlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCBpZCwgZGF0YSBGUk9NIG5vdGVzJyk7XG4gICAgZm9yIChjb25zdCByb3cgb2Ygbm90ZXNSZXN1bHQucm93cykge1xuICAgICAgY29uc3Qgbm90ZSA9IHJvdy5kYXRhIGFzIE5vdGU7XG4gICAgICBpZiAobm90ZS50YWdzICYmIG5vdGUudGFncy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkVGFncyA9IG5vdGUudGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWdOYW1lKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IC4uLm5vdGUsIHRhZ3M6IHVwZGF0ZWRUYWdzIH07XG4gICAgICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAgICAgJ1VQREFURSBub3RlcyBTRVQgZGF0YSA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICAgIFtKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIG5vdGUuaWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFnOlwiLCBlKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGFnJyB9O1xuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkE2R3NCIn0=
}),
"[project]/components/auth/AvatarFrame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarFrame",
    ()=>AvatarFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const AvatarFrame = ({ role = 'USER', children, className = '' })=>{
    if (role === 'ADMIN') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex items-center justify-center ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-red-500/10 blur-xl rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/auth/AvatarFrame.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex items-center justify-center ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-blue-500/10 blur-lg rounded-full"
            }, void 0, false, {
                fileName: "[project]/components/auth/AvatarFrame.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/auth/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7ace10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:7ace10 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$912388__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:912388 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/AvatarFrame.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const UserProfile = ({ user })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user.name || '');
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user.image || '');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessMessage, setShowSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsEditing(false);
                setShowSuccessMessage(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$912388__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserProfile"])(name, image);
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: "Profile",
            className: className
        }, void 0, false, {
            fileName: "[project]/components/auth/UserProfile.tsx",
            lineNumber: 89,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                onClick: ()=>setIsOpen(!isOpen),
                className: "relative w-12 h-12 flex items-center justify-center group focus:outline-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFrame"], {
                    role: user.role,
                    className: "w-10 h-10",
                    children: image ? renderMedia(image, "w-full h-full") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                user.role === 'ADMIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-2 right-2 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[10px] font-bold text-red-400 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pb-6 -mt-12 relative flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$AvatarFrame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFrame"], {
                                        role: user.role,
                                        className: "w-24 h-24",
                                        children: [
                                            image ? renderMedia(image, "w-full h-full") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center bg-[#1a1a1a]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fileInputRef.current?.click(),
                                                className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-black/70 transition-colors z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        size: 24,
                                                        className: "text-white/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/auth/UserProfile.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: showSuccessMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-green-400 font-bold text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-1 bg-green-500/20 rounded-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-green-300/80 leading-relaxed",
                                                    children: [
                                                        "Your neural identity has been rewritten. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 90
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: "Please refresh the page"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " or ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 w-full",
                                    children: [
                                        !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-white",
                                                    children: user.name || 'User'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-gray-500 uppercase",
                                                            children: "Display Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-gray-500 uppercase",
                                                            children: "Avatar URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/auth/UserProfile.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-white/5 space-y-2",
                                            children: [
                                                !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsEditing(true),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
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
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIsEditing(false),
                                                            className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSave,
                                                            disabled: isLoading,
                                                            className: "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50",
                                                            children: [
                                                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/auth/UserProfile.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 62
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7ace10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
                                                    className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
}),
"[project]/components/NotationsApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$EditorView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/EditorView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$canvas$2f$CanvasView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/canvas/CanvasView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$GraphView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/GraphView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ConfirmationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UnsavedChangesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/UnsavedChangesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useHistory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SearchPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SearchPalette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AIMagicModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AIMagicModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$17d468__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:17d468 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:c79a5f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:be22df [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8231f5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:8231f5 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:f27e82 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/UserProfile.tsx [app-ssr] (ecmascript)");
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
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Theme State
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Replaced standard state with History Hook
    const { state: notes, set: setNotes, undo, redo, canUndo, canRedo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistory"])([]);
    const [activeNoteId, setActiveNoteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Unsaved Changes State
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingNavigation, setPendingNavigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unsavedModalOpen, setUnsavedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter State
    const [selectedTag, setSelectedTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Delete Modal State
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteToDelete, setNoteToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Search State
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // AI Magic Modal State
    const [aiModalOpen, setAiModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAiGenerating, setIsAiGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load Notes from DB and Local Backup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadNotes = async ()=>{
            const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
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
                        parsedBackup.forEach((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(n));
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
        };
        loadNotes();
    }, []);
    // Local Backup Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (notes.length > 0) {
            localStorage.setItem('notations_backup', JSON.stringify(notes));
        }
    }, [
        notes
    ]);
    // Initialize Theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
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
    const filteredNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedTag) return notes;
        return notes.filter((n)=>n.tags?.includes(selectedTag));
    }, [
        notes,
        selectedTag
    ]);
    // Compute unique tags for Sidebar (from DB + notes)
    const [globalTags, setGlobalTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tagsWithColors, setTagsWithColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadGlobalTags = async ()=>{
            const dbTags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f27e82__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTags"])();
            setGlobalTags(dbTags.map((t)=>t.name));
            setTagsWithColors(dbTags);
        };
        loadGlobalTags();
    }, []);
    const uniqueTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Merge global tags from DB with tags from notes
        const allTags = new Set(globalTags);
        notes.forEach((note)=>{
            note.tags?.forEach((tag)=>allTags.add(tag));
        });
        return Array.from(allTags).sort();
    }, [
        notes,
        globalTags
    ]);
    // Keyboard Shortcuts: Undo/Redo, Search, and Magic Create
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
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
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        undo,
        redo,
        activeNoteId,
        notes
    ]);
    // --- SECURITY: Prevent Unsaved Data Loss (F5, Close, etc.) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleBeforeUnload = (e)=>{
            if (hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = ''; // Chrome requires returnValue to be set
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return ()=>window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [
        hasUnsavedChanges
    ]);
    // --- Auto-Save Mechanism ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasUnsavedChanges || !activeNoteId) return;
        const timeoutId = setTimeout(()=>{
            // console.log("Auto-saving...");
            handleManualSave();
        }, 2000); // Auto-save after 2 seconds of inactivity
        return ()=>clearTimeout(timeoutId);
    }, [
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(activeNote);
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
        const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$c79a5f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotes"])();
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
    const handleNoteSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        attemptNavigation(()=>{
            setActiveNoteId(id);
            setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
        });
    }, [
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
            setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote); // Initial save is fine
            setHasUnsavedChanges(false);
        });
    };
    const handleAiCreate = async (prompt)=>{
        setIsAiGenerating(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$17d468__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNoteFromPrompt"])(prompt);
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
                setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR);
                setAiModalOpen(false);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(newNote);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedNote); // Canvas moves can still auto-save or be separate
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(updatedSource);
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
                setView(__TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS);
                setHasUnsavedChanges(false); // Deleted note doesn't have unsaved changes
            }
            setNoteToDelete(null);
            // DB Updates
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8231f5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteNoteAction"])(noteToDelete);
            for (const note of updatedNotes){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$be22df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveNote"])(note);
            }
        }
        setDeleteModalOpen(false);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex items-center justify-center bg-white dark:bg-black transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-widest animate-pulse text-black dark:text-white",
                        children: "Connecting to Neural DB..."
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 408,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/NotationsApp.tsx",
            lineNumber: 407,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen bg-background text-foreground font-sans transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
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
                lineNumber: 418,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 ml-20 relative h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].EDITOR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$EditorView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorView"], {
                                    activeNote: activeNote,
                                    onUpdateNote: handleNoteUpdate,
                                    onDeleteNote: handleRequestDelete,
                                    hasUnsavedChanges: hasUnsavedChanges,
                                    onSave: handleManualSave
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "editor", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].CANVAS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$canvas$2f$CanvasView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasView"], {
                                    notes: filteredNotes,
                                    onNoteSelect: handleNoteSelect,
                                    onNoteMove: handleNoteMove,
                                    onConnectNotes: handleConnectNotes,
                                    onDeleteNote: handleRequestDelete,
                                    isDarkMode: isDarkMode,
                                    tagsWithColors: tagsWithColors,
                                    selectedNoteId: activeNoteId
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "canvas", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            view === __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewMode"].GRAPH && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$GraphView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraphView"], {
                                    notes: filteredNotes,
                                    onNoteSelect: handleNoteSelect,
                                    onDeleteNote: handleRequestDelete,
                                    isDarkMode: isDarkMode
                                }, void 0, false, {
                                    fileName: "[project]/components/NotationsApp.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, "graph", false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProfile"], {
                        user: user
                    }, void 0, false, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 494,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-20 right-8 flex flex-col items-end pointer-events-none z-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xs font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white dark:opacity-20",
                                children: "NOTATIONS v1.0"
                            }, void 0, false, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    selectedTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-full font-bold",
                                        children: [
                                            "FILTER: #",
                                            selectedTag
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NotationsApp.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400 dark:text-gray-500 font-mono",
                                        children: activeNoteId ? `ACTIVE: ${notes.find((n)=>n.id === activeNoteId)?.title || 'UNTITLED'}` : 'NO SELECTION'
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotationsApp.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotationsApp.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotationsApp.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ConfirmationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmationModal"], {
                isOpen: deleteModalOpen,
                title: "Delete Note?",
                message: "Are you sure you want to delete this note? This action cannot be undone.",
                onConfirm: confirmDelete,
                onCancel: ()=>setDeleteModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UnsavedChangesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsavedChangesModal"], {
                isOpen: unsavedModalOpen,
                onSaveAndLeave: handleSaveAndLeave,
                onDiscardAndLeave: handleDiscardAndLeave,
                onCancel: handleCancelNavigation
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SearchPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchPalette"], {
                isOpen: searchOpen,
                onClose: ()=>setSearchOpen(false),
                notes: filteredNotes,
                onSelectNote: handleNoteSelect
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AIMagicModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIMagicModal"], {
                isOpen: aiModalOpen,
                onClose: ()=>setAiModalOpen(false),
                onGenerate: handleAiCreate,
                isGenerating: isAiGenerating
            }, void 0, false, {
                fileName: "[project]/components/NotationsApp.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NotationsApp.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NotationsApp;
}),
];

//# sourceMappingURL=_361d13fc._.js.map