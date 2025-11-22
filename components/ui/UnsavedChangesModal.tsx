import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Save, X, Trash2 } from 'lucide-react';

interface UnsavedChangesModalProps {
    isOpen: boolean;
    onSaveAndLeave: () => void;
    onDiscardAndLeave: () => void;
    onCancel: () => void;
}

export const UnsavedChangesModal: React.FC<UnsavedChangesModalProps> = ({
    isOpen,
    onSaveAndLeave,
    onDiscardAndLeave,
    onCancel
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-[100]"
                        onClick={onCancel}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 p-8 z-[101] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3 text-black dark:text-white">
                                <AlertTriangle size={24} strokeWidth={2} className="text-yellow-500" />
                                <h2 className="text-xl font-black uppercase tracking-wide">Unsaved Changes</h2>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-neutral-400 font-medium mb-10 leading-relaxed">
                            You have unsaved changes in this note. If you leave now, your changes will be lost.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={onSaveAndLeave}
                                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                <Save size={16} />
                                Save & Leave
                            </button>

                            <button
                                onClick={onDiscardAndLeave}
                                className="w-full py-3 border-2 border-red-500 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                <Trash2 size={16} />
                                Discard Changes
                            </button>

                            <button
                                onClick={onCancel}
                                className="w-full py-3 text-gray-500 dark:text-neutral-500 font-bold hover:text-black dark:hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                <X size={16} />
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
