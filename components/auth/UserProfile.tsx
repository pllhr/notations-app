'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, LogOut, Camera, X, Save, Shield, User as UserIcon, Check } from 'lucide-react';
import { signOutAction, updateUserProfile } from '../../app/actions';
import { useSession } from 'next-auth/react';
import { AvatarFrame } from './AvatarFrame';

interface UserProfileProps {
    user: {
        name?: string;
        email?: string;
        image?: string;
        role?: 'USER' | 'ADMIN';
    };
}

export const UserProfile = ({ user }: UserProfileProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name || '');
    const [image, setImage] = useState(user.image || '');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const { update } = useSession();
    const menuRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setIsEditing(false);
                setShowSuccessMessage(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                alert("File size too large. Please upload an image smaller than 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        setIsLoading(true);
        const result = await updateUserProfile(name, image);
        if (result.success) {
            await update({ name, image });
            setShowSuccessMessage(true);
            setIsEditing(false);
        }
        setIsLoading(false);
    };

    const initials = user.name
        ? user.name.substring(0, 2).toUpperCase()
        : user.email?.substring(0, 2).toUpperCase() || 'U';

    const renderMedia = (src: string, className: string) => {
        const isVideo = src.startsWith('data:video') || src.endsWith('.mp4') || src.endsWith('.webm');
        if (isVideo) {
            return (
                <video
                    src={src}
                    className={className}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover' }}
                />
            );
        }
        return <img src={src} alt="Profile" className={className} />;
    };

    return (
        <div className="fixed top-4 right-4 z-50" ref={menuRef}>
            {/* Trigger */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 flex items-center justify-center group focus:outline-none"
            >
                <AvatarFrame role={user.role} className="w-10 h-10">
                    {image ? (
                        renderMedia(image, "w-full h-full")
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <span className="text-xs font-bold text-white">{initials}</span>
                        </div>
                    )}
                </AvatarFrame>
            </motion.button>

            {/* Dropdown / Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ type: 'spring', duration: 0.3 }}
                        className="absolute top-16 right-0 w-80 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header Background */}
                        <div className="h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            {user.role === 'ADMIN' && (
                                <div className="absolute top-2 right-2 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[10px] font-bold text-red-400 flex items-center gap-1">
                                    <Shield size={10} /> ADMIN
                                </div>
                            )}
                        </div>

                        {/* Profile Content */}
                        <div className="px-6 pb-6 -mt-12 relative flex flex-col items-center">
                            {/* Avatar */}
                            <div className="mb-4 relative">
                                <AvatarFrame role={user.role} className="w-24 h-24">
                                    {image ? (
                                        renderMedia(image, "w-full h-full")
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                                            <span className="text-3xl font-bold text-gray-500">{initials}</span>
                                        </div>
                                    )}

                                    {/* Edit Overlay */}
                                    {(isEditing) && (
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-black/70 transition-colors z-20"
                                        >
                                            <Camera size={24} className="text-white/80" />
                                            <span className="text-[8px] text-white/60 uppercase font-bold tracking-wider">Change</span>
                                        </button>
                                    )}

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*,video/mp4,video/webm"
                                        onChange={handleFileChange}
                                    />
                                </AvatarFrame>
                            </div>

                            {/* Success Message */}
                            <AnimatePresence>
                                {showSuccessMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="overflow-hidden w-full"
                                    >
                                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                                                <div className="p-1 bg-green-500/20 rounded-full">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                PROFILE UPDATED
                                            </div>
                                            <p className="text-[10px] text-green-300/80 leading-relaxed">
                                                Your neural identity has been rewritten. <br />
                                                <span className="text-white font-bold">Please refresh the page</span> or <span className="text-white font-bold">re-login</span> to see changes take full effect.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Info */}
                            <div className="space-y-4 w-full">
                                {!isEditing ? (
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-white">{user.name || 'User'}</h3>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase">Display Name</label>
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase">Avatar URL</label>
                                            <input
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="pt-4 border-t border-white/5 space-y-2">
                                    {!isEditing ? (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            <Settings size={16} /> Settings
                                        </button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                <X size={16} /> Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                disabled={isLoading}
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
                                            >
                                                {isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={16} />}
                                                Save
                                            </button>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => signOutAction()}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                                    >
                                        <LogOut size={16} /> Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
