'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AvatarFrameProps {
    role?: 'USER' | 'ADMIN';
    children: React.ReactNode;
    className?: string;
}

export const AvatarFrame = ({ role = 'USER', children, className = '' }: AvatarFrameProps) => {
    if (role === 'ADMIN') {
        return (
            <div className={`relative flex items-center justify-center ${className}`}>
                {/* Admin: Cyber Shield / Glitch Core */}

                {/* Rotating Outer Hexagon */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-8px] border-2 border-red-500/30 rounded-[30%] opacity-60"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />

                {/* Counter-Rotating Inner Hexagon */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-4px] border border-yellow-500/40 rounded-[30%] opacity-80"
                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                />

                {/* Glitch Spikes */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-[-12px] border-t-2 border-b-2 border-red-600/60 rounded-full"
                />

                {/* Core Glow */}
                <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full" />

                {/* Content Container */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] bg-black">
                    {children}
                </div>
            </div>
        );
    }

    // User: Holographic Gyroscope
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Outer Ring - Slow */}
            <motion.div
                animate={{ rotateX: 360, rotateY: 180 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-8px] rounded-full border border-blue-400/30 border-dashed"
                style={{ perspective: 1000 }}
            />

            {/* Middle Ring - Medium */}
            <motion.div
                animate={{ rotateY: -360, rotateZ: 45 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] rounded-full border border-purple-400/40"
            />

            {/* Inner Ring - Fast */}
            <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-b-2 border-cyan-400/60"
            />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-lg rounded-full" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-black">
                {children}
            </div>
        </div>
    );
};
