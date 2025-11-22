import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface AIMagicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (prompt: string) => void;
  isGenerating: boolean;
}

export const AIMagicModal: React.FC<AIMagicModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
  isGenerating
}) => {
  const [prompt, setPrompt] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setPrompt('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
    if (e.key === 'Escape') {
        onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={!isGenerating ? onClose : undefined}
            className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 p-0 z-[101] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <div className="bg-black dark:bg-white text-white dark:text-black p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles size={18} className="animate-pulse" />
                    <span className="font-bold tracking-wider text-sm uppercase">Gemini Magic Create</span>
                </div>
                <button onClick={onClose} disabled={isGenerating} className="hover:text-gray-300 dark:hover:text-gray-600 disabled:opacity-50">
                    <X size={18} />
                </button>
            </div>

            <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-neutral-400 font-mono mb-4 uppercase tracking-wide">
                    Describe your thought, project, or idea...
                </p>
                
                <textarea
                    ref={inputRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isGenerating}
                    placeholder="e.g., A marketing plan for a coffee shop in Tokyo..."
                    className="w-full h-32 text-xl font-bold resize-none outline-none placeholder:text-gray-200 dark:placeholder:text-neutral-700 bg-transparent text-black dark:text-white"
                />

                <div className="flex justify-end mt-6">
                    <button
                        onClick={handleSubmit}
                        disabled={!prompt.trim() || isGenerating}
                        className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-bold flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                    >
                        {isGenerating ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                                Creating...
                            </>
                        ) : (
                            <>
                                GENERATE
                                <ArrowRight size={16} />
                            </>
                        )}
                    </button>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};