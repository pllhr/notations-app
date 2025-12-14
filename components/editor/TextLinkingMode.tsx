'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Link2, ArrowRight, Sparkles, MousePointerClick } from 'lucide-react';
import { CONNECTION_COLORS } from '../../types';

interface TextLinkingModeProps {
    isActive: boolean;
    sourceText: string;
    sourceBlockId: string;
    currentColor: string;
    onColorChange: (color: string) => void;
    onSelectTarget: (targetText: string, targetBlockId: string) => void;
    onCancel: () => void;
}

export const TextLinkingMode: React.FC<TextLinkingModeProps> = ({
    isActive,
    sourceText,
    sourceBlockId,
    currentColor,
    onColorChange,
    onSelectTarget,
    onCancel
}) => {
    const [selectedTargetText, setSelectedTargetText] = useState('');
    const [selectedTargetBlockId, setSelectedTargetBlockId] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const toolbarRef = useRef<HTMLDivElement>(null);

    // Listen for text selection
    useEffect(() => {
        if (!isActive) return;

        const handleMouseUp = (e: MouseEvent) => {
            // Ignore clicks on the toolbar itself
            if (toolbarRef.current?.contains(e.target as Node)) return;

            const selection = window.getSelection();
            if (!selection || selection.isCollapsed) return;

            const selectedText = selection.toString().trim();
            if (!selectedText) return;

            // Don't allow connecting to the same text
            if (selectedText === sourceText) return;

            // Find the block containing the selection
            let node = selection.anchorNode;
            while (node && node !== document.body) {
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
        const handler = (e: MouseEvent) => setTimeout(() => handleMouseUp(e), 10);
        document.addEventListener('mouseup', handler as any);
        return () => document.removeEventListener('mouseup', handler as any);
    }, [isActive, sourceText, sourceBlockId]);

    // Handle keyboard shortcuts
    useEffect(() => {
        if (!isActive) return;

        const handleKeyDown = (e: KeyboardEvent) => {
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
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isActive, onCancel, selectedTargetText, selectedTargetBlockId]);

    // Reset when mode deactivates
    useEffect(() => {
        if (!isActive) {
            setSelectedTargetText('');
            setSelectedTargetBlockId('');
            setIsConnecting(false);
            setShowSuccess(false);
        }
    }, [isActive]);

    const handleConnect = useCallback(() => {
        if (!selectedTargetText || !selectedTargetBlockId) return;

        setIsConnecting(true);

        // Show success animation then complete
        setTimeout(() => {
            setShowSuccess(true);
            setTimeout(() => {
                onSelectTarget(selectedTargetText, selectedTargetBlockId);
            }, 400);
        }, 200);
    }, [selectedTargetText, selectedTargetBlockId, onSelectTarget]);

    if (!isActive) return null;

    const truncate = (text: string, max: number) =>
        text.length > max ? text.slice(0, max) + '...' : text;

    return createPortal(
        <>
            {/* Visual overlay backdrop - pointer-events: none to allow text selection */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-[1px] z-[98] pointer-events-none"
            />

            {/* Main toolbar */}
            <motion.div
                ref={toolbarRef}
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
            >
                <div className="flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-neutral-900 dark:to-neutral-800 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">

                    {/* Connection visualization */}
                    <div className="flex items-center gap-3">
                        {/* Source text badge */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div
                                className="w-3 h-3 rounded-full animate-pulse"
                                style={{ backgroundColor: currentColor, boxShadow: `0 0 10px ${currentColor}` }}
                            />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Origem</span>
                                <span className="px-2 py-1 bg-white/10 rounded-lg text-sm font-bold text-white max-w-[140px] truncate">
                                    {truncate(sourceText, 18)}
                                </span>
                            </div>
                        </motion.div>

                        {/* Animated connection arrow */}
                        <motion.div
                            className="flex items-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ArrowRight
                                    size={20}
                                    className="text-white/30"
                                    style={{ filter: `drop-shadow(0 0 4px ${currentColor})` }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Target text badge or placeholder */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <AnimatePresence mode="wait">
                                {selectedTargetText ? (
                                    <motion.div
                                        key="target"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        className="flex flex-col"
                                    >
                                        <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Destino</span>
                                        <span
                                            className="px-2 py-1 rounded-lg text-sm font-bold max-w-[140px] truncate"
                                            style={{
                                                backgroundColor: currentColor + '30',
                                                color: currentColor,
                                                boxShadow: `0 0 12px ${currentColor}30`
                                            }}
                                        >
                                            {truncate(selectedTargetText, 18)}
                                        </span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 px-3 py-2 border-2 border-dashed border-white/20 rounded-lg"
                                    >
                                        <MousePointerClick size={14} className="text-white/40" />
                                        <span className="text-white/40 text-sm italic">
                                            Selecione texto...
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {selectedTargetText && (
                                <motion.div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: currentColor, boxShadow: `0 0 10px ${currentColor}` }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-white/10" />

                    {/* Color picker */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Cor</span>
                        <div className="flex items-center gap-1.5">
                            {CONNECTION_COLORS.map((color, index) => (
                                <motion.button
                                    key={color}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => onColorChange(color)}
                                    className={`relative w-6 h-6 rounded-full transition-all duration-200 hover:scale-110 ${currentColor === color
                                        ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110'
                                        : 'hover:ring-1 hover:ring-white/30'
                                        }`}
                                    style={{
                                        backgroundColor: color,
                                        boxShadow: currentColor === color ? `0 0 16px ${color}` : `0 2px 4px ${color}40`
                                    }}
                                >
                                    {currentColor === color && (
                                        <motion.div
                                            layoutId="colorRing"
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                boxShadow: `0 0 0 3px ${color}50`
                                            }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-white/10" />

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onCancel}
                            className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/60 hover:text-white"
                            title="Cancelar (Esc)"
                        >
                            <X size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleConnect}
                            disabled={!selectedTargetText || !selectedTargetBlockId || isConnecting}
                            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all overflow-hidden ${selectedTargetText && selectedTargetBlockId && !isConnecting
                                ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:shadow-emerald-500/30'
                                : 'bg-white/10 text-white/30 cursor-not-allowed'
                                }`}
                        >
                            <AnimatePresence mode="wait">
                                {showSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Sparkles size={16} />
                                        <span>Conectado!</span>
                                    </motion.div>
                                ) : isConnecting ? (
                                    <motion.div
                                        key="connecting"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        <span>Conectando...</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="connect"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Link2 size={16} />
                                        <span>Conectar</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Bottom hint card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
            >
                <div className="flex items-center gap-4 bg-slate-900/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 shadow-xl">
                    <div className="flex items-center gap-2 text-white/50">
                        <MousePointerClick size={16} />
                        <span className="text-sm">Selecione outro texto na nota para conectar</span>
                    </div>

                    <div className="flex items-center gap-3 text-white/40 text-xs">
                        <div className="flex items-center gap-1">
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/60 font-mono">Enter</kbd>
                            <span>confirmar</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/60 font-mono">Esc</kbd>
                            <span>cancelar</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Connection preview line animation */}
            <AnimatePresence>
                {selectedTargetText && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-[90px] left-1/2 -translate-x-1/2 z-[100]"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="h-1 w-32 rounded-full origin-left"
                            style={{
                                background: `linear-gradient(90deg, ${currentColor}, ${currentColor}50)`,
                                boxShadow: `0 0 12px ${currentColor}`
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
};
