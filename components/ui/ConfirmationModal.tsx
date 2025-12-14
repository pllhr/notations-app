'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, AlertTriangle, X, Loader2 } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: 'danger' | 'warning' | 'info';
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  variant = 'danger',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar'
}) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsConfirming(false);
      setShowSuccess(false);
    }
  }, [isOpen]);

  // Handle keyboard
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  const handleConfirm = async () => {
    setIsConfirming(true);

    // Show brief loading state
    await new Promise(resolve => setTimeout(resolve, 200));

    setShowSuccess(true);

    // Execute after success animation
    setTimeout(() => {
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
      Icon: Trash2
    },
    warning: {
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
      iconColor: 'text-amber-400',
      confirmBg: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
      confirmShadow: 'shadow-amber-500/30 hover:shadow-amber-500/50',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      Icon: AlertTriangle
    },
    info: {
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
      iconColor: 'text-blue-400',
      confirmBg: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
      confirmShadow: 'shadow-blue-500/30 hover:shadow-blue-500/50',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      Icon: AlertTriangle
    }
  };

  const style = variantStyles[variant];
  const IconComponent = style.Icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onCancel}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.8
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[101]"
          >
            <div
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden"
              style={{
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${style.glowColor}`
              }}
            >
              {/* Animated glow border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1/2 opacity-20"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, ${style.glowColor}, transparent 30%)`
                  }}
                />
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onCancel}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white z-10"
              >
                <X size={18} />
              </motion.button>

              {/* Content */}
              <div className="relative p-6">
                {/* Icon with pulse animation */}
                <div className="flex justify-center mb-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25, delay: 0.1 }}
                    className={`relative w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center`}
                  >
                    {/* Pulse rings */}
                    <motion.div
                      animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-2xl ${style.iconBg}`}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      className={`absolute inset-0 rounded-2xl ${style.iconBg}`}
                    />

                    <motion.div
                      animate={showSuccess ? { rotate: -15, scale: 1.1 } : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent size={28} className={style.iconColor} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-xl font-bold text-center text-white mb-2"
                >
                  {title}
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-center text-white/60 mb-6 leading-relaxed"
                >
                  {message}
                </motion.p>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex gap-3"
                >
                  {/* Cancel Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCancel}
                    disabled={isConfirming}
                    className="flex-1 py-3 px-4 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {cancelText}
                  </motion.button>

                  {/* Confirm Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleConfirm}
                    disabled={isConfirming}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm text-white ${style.confirmBg} shadow-lg ${style.confirmShadow} transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    <AnimatePresence mode="wait">
                      {isConfirming ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                          >
                            <Loader2 size={16} />
                          </motion.div>
                          <span>Removendo...</span>
                        </motion.div>
                      ) : showSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            ✓
                          </motion.span>
                          <span>Removido!</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {confirmText}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${style.glowColor}, transparent)`
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};