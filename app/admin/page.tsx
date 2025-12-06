'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag as TagIcon, Plus, Trash2, Edit3, X, Check, ArrowLeft, Sparkles } from 'lucide-react';
import { Tag } from '../../types';
import { getTags, createTag, updateTag, deleteTag } from '../actions';
import Link from 'next/link';

const TAG_COLORS = [
    { color: '#3b82f6', name: 'Blue' },
    { color: '#10b981', name: 'Emerald' },
    { color: '#f59e0b', name: 'Amber' },
    { color: '#ef4444', name: 'Red' },
    { color: '#8b5cf6', name: 'Purple' },
    { color: '#ec4899', name: 'Pink' },
    { color: '#06b6d4', name: 'Cyan' },
    { color: '#f97316', name: 'Orange' },
    { color: '#6366f1', name: 'Indigo' },
    { color: '#84cc16', name: 'Lime' },
];

export default function AdminPage() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newTagName, setNewTagName] = useState('');
    const [newTagColor, setNewTagColor] = useState('#3b82f6');
    const [editingTag, setEditingTag] = useState<Tag | null>(null);
    const [editName, setEditName] = useState('');
    const [editColor, setEditColor] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState<Tag | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        loadTags();
    }, []);

    const loadTags = async () => {
        setIsLoading(true);
        const fetchedTags = await getTags();
        setTags(fetchedTags);
        setIsLoading(false);
    };

    const showSuccess = (message: string) => {
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    const handleCreateTag = async () => {
        if (!newTagName.trim()) {
            setError('Tag name is required');
            return;
        }

        const result = await createTag(newTagName, newTagColor);
        if (result.error) {
            setError(result.error);
        } else if (result.tag) {
            setTags([...tags, result.tag]);
            setNewTagName('');
            setNewTagColor('#3b82f6');
            setError(null);
            showSuccess('Tag created successfully!');
        }
    };

    const handleUpdateTag = async () => {
        if (!editingTag || !editName.trim()) return;

        const result = await updateTag(editingTag.id, editName, editColor);
        if (result.error) {
            setError(result.error);
        } else {
            setTags(tags.map(t => t.id === editingTag.id ? { ...t, name: editName.toLowerCase(), color: editColor } : t));
            setEditingTag(null);
            setError(null);
            showSuccess('Tag updated successfully!');
        }
    };

    const handleDeleteTag = async () => {
        if (!deleteConfirm) return;

        const result = await deleteTag(deleteConfirm.id, deleteConfirm.name);
        if (result.error) {
            setError(result.error);
        } else {
            setTags(tags.filter(t => t.id !== deleteConfirm.id));
            setDeleteConfirm(null);
            setError(null);
            showSuccess('Tag deleted successfully!');
        }
    };

    const startEdit = (tag: Tag) => {
        setEditingTag(tag);
        setEditName(tag.name);
        setEditColor(tag.color);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-10"
                >
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                        >
                            <ArrowLeft size={24} className="text-white" />
                        </motion.div>
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight">Tag Management</h1>
                        <p className="text-gray-400 text-sm mt-1">Create, edit, and manage your global tags</p>
                    </div>
                </motion.div>

                {/* Success Message */}
                <AnimatePresence>
                    {successMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 flex items-center gap-3"
                        >
                            <Sparkles size={20} />
                            <span className="font-medium">{successMessage}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400 flex items-center justify-between"
                        >
                            <span className="font-medium">{error}</span>
                            <button onClick={() => setError(null)} className="hover:bg-red-500/20 p-1.5 rounded-lg transition-colors">
                                <X size={18} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Create New Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-8 shadow-2xl overflow-visible relative z-20"
                >
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                            <Plus size={20} className="text-white" />
                        </div>
                        Create New Tag
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                        {/* Tag Name Input */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Tag Name</label>
                            <input
                                type="text"
                                value={newTagName}
                                onChange={(e) => setNewTagName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleCreateTag()}
                                placeholder="Enter tag name..."
                                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                        </div>

                        {/* Color Picker */}
                        <div className="relative z-30">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Color</label>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                className="w-16 h-14 rounded-2xl border-2 border-white/20 transition-all hover:border-white/40 shadow-lg relative overflow-hidden"
                                style={{ backgroundColor: newTagColor }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            </motion.button>

                            <AnimatePresence>
                                {showColorPicker && (
                                    <>
                                        <div className="fixed inset-0 z-[99]" onClick={() => setShowColorPicker(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                            className="absolute top-full mt-3 right-0 bg-neutral-900 border border-white/10 rounded-2xl p-4 shadow-2xl z-[100]"
                                            style={{ minWidth: '220px' }}
                                        >
                                            <p className="text-xs font-medium text-gray-400 mb-3">Select a color</p>
                                            <div className="grid grid-cols-5 gap-3">
                                                {TAG_COLORS.map(({ color, name }) => (
                                                    <motion.button
                                                        key={color}
                                                        whileHover={{ scale: 1.15 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => { setNewTagColor(color); setShowColorPicker(false); }}
                                                        className={`w-9 h-9 rounded-xl transition-all relative ${newTagColor === color ? 'ring-2 ring-offset-2 ring-offset-neutral-900 ring-white' : 'hover:ring-2 hover:ring-white/30'}`}
                                                        style={{ backgroundColor: color }}
                                                        title={name}
                                                    >
                                                        {newTagColor === color && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="absolute inset-0 flex items-center justify-center"
                                                            >
                                                                <Check size={16} className="text-white drop-shadow-lg" />
                                                            </motion.div>
                                                        )}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Create Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleCreateTag}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
                        >
                            <Plus size={20} />
                            Create Tag
                        </motion.button>
                    </div>
                </motion.div>

                {/* Tags List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
                >
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl">
                            <TagIcon size={20} className="text-white" />
                        </div>
                        All Tags
                        <span className="ml-auto text-sm font-normal text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                            {tags.length} {tags.length === 1 ? 'tag' : 'tags'}
                        </span>
                    </h2>

                    {isLoading ? (
                        <div className="flex items-center justify-center py-16">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full"
                            />
                        </div>
                    ) : tags.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
                                <TagIcon size={32} className="text-gray-500" />
                            </div>
                            <p className="text-gray-400 font-medium">No tags created yet</p>
                            <p className="text-gray-500 text-sm mt-1">Create your first tag above!</p>
                        </motion.div>
                    ) : (
                        <div className="space-y-3">
                            <AnimatePresence mode="popLayout">
                                {tags.map((tag, index) => (
                                    <motion.div
                                        key={tag.id}
                                        layout
                                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 30, scale: 0.9 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.05 }}
                                        className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/[0.08] rounded-2xl group transition-all border border-transparent hover:border-white/10"
                                    >
                                        {editingTag?.id === tag.id ? (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-center gap-4 flex-1"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="w-8 h-8 rounded-xl cursor-pointer border-2 border-white/20 shadow-lg relative overflow-hidden"
                                                    style={{ backgroundColor: editColor }}
                                                    onClick={() => {
                                                        const idx = TAG_COLORS.findIndex(c => c.color === editColor);
                                                        setEditColor(TAG_COLORS[(idx + 1) % TAG_COLORS.length].color);
                                                    }}
                                                    title="Click to change color"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                                </motion.div>
                                                <input
                                                    type="text"
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    onKeyDown={(e) => e.key === 'Enter' && handleUpdateTag()}
                                                    className="flex-1 px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                                    autoFocus
                                                />
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={handleUpdateTag}
                                                    className="p-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-400 transition-colors"
                                                >
                                                    <Check size={18} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setEditingTag(null)}
                                                    className="p-2.5 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                                                >
                                                    <X size={18} />
                                                </motion.button>
                                            </motion.div>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-8 h-8 rounded-xl shadow-lg relative overflow-hidden"
                                                        style={{ backgroundColor: tag.color }}
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                                    </div>
                                                    <span className="font-semibold text-white text-lg">#{tag.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => startEdit(tag)}
                                                        className="p-2.5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Edit3 size={18} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => setDeleteConfirm(tag)}
                                                        className="p-2.5 hover:bg-red-500/20 rounded-xl text-gray-400 hover:text-red-400 transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </motion.button>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
                {deleteConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
                        onClick={() => setDeleteConfirm(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="bg-neutral-900 rounded-3xl shadow-2xl p-8 max-w-md w-full border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                                    className="p-4 bg-red-500/20 rounded-2xl"
                                >
                                    <Trash2 size={28} className="text-red-400" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Delete Tag?</h3>
                                    <p className="text-sm text-gray-400">This action cannot be undone</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Are you sure you want to delete <strong className="text-white">#{deleteConfirm.name}</strong>?
                                This will also remove it from all notes using this tag.
                            </p>
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 px-6 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/15 transition-colors"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleDeleteTag}
                                    className="flex-1 px-6 py-4 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-400 transition-colors"
                                >
                                    Delete Tag
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
