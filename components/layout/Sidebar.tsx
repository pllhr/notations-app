import React, { useState } from 'react';
import { ViewMode } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Grid, Share2, PlusCircle, Search, Undo2, Redo2, Sparkles, Hash, X, Moon, Sun, Box, Settings } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onCreateNote: () => void;
  onAiCreate: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onSearch: () => void;
  allTags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onViewChange,
  onCreateNote,
  onAiCreate,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onSearch,
  allTags,
  selectedTag,
  onSelectTag,
  isDarkMode,
  onToggleTheme
}) => {
  const [tagMenuOpen, setTagMenuOpen] = useState(false);

  const navItems = [
    { id: ViewMode.EDITOR, icon: <Type size={20} />, label: 'Editor' },
    { id: ViewMode.CANVAS, icon: <Grid size={20} />, label: 'Canvas' },
    { id: ViewMode.GRAPH, icon: <Share2 size={20} />, label: 'Graph' },
    { id: ViewMode.SIEVE, icon: <Box size={20} />, label: 'Sieve AI' },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="w-20 h-screen bg-white dark:bg-black border-r border-gray-100 dark:border-neutral-800 flex flex-col items-center py-8 z-50 fixed left-0 top-0 transition-colors"
    >
      <div className="mb-12 w-10 h-10 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xl rounded-sm">
        N
      </div>

      <div className="flex flex-col gap-8 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className="relative group flex items-center justify-center w-10 h-10 outline-none"
            aria-label={item.label}
          >
            {currentView === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-black dark:bg-white rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-200 ${currentView === item.id ? 'text-white dark:text-black' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}>
              {item.icon}
            </span>

            {/* Tooltip */}
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-[60]">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={onUndo}
          disabled={!canUndo}
          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${canUndo ? 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800' : 'text-gray-200 dark:text-neutral-700 cursor-not-allowed'}`}
          title="Undo (Cmd+Z)"
        >
          <Undo2 size={18} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={onRedo}
          disabled={!canRedo}
          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${canRedo ? 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800' : 'text-gray-200 dark:text-neutral-700 cursor-not-allowed'}`}
          title="Redo (Cmd+Shift+Z)"
        >
          <Redo2 size={18} />
        </motion.button>
      </div>

      <div className="flex flex-col gap-6 mt-auto">
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleTheme}
          className="text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Tag Filter Button */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTagMenuOpen(!tagMenuOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${selectedTag || tagMenuOpen ? 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800'}`}
            title="Filter by Tag"
          >
            <Hash size={20} />
            {selectedTag && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </motion.button>

          <AnimatePresence>
            {tagMenuOpen && (
              <>
                <div className="fixed inset-0 z-[55]" onClick={() => setTagMenuOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 20, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  className="absolute left-full bottom-0 w-48 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-2 z-[60] flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between px-2 py-1 border-b border-gray-100 dark:border-neutral-700 mb-1">
                    <span className="text-[10px] font-bold uppercase text-gray-400 dark:text-neutral-500">Filter Tags</span>
                    {selectedTag && (
                      <button onClick={() => onSelectTag(null)} className="text-[10px] text-red-500 hover:underline">
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {allTags.length === 0 ? (
                      <div className="p-2 text-xs text-gray-400 italic text-center">No tags found</div>
                    ) : (
                      allTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            onSelectTag(selectedTag === tag ? null : tag);
                          }}
                          className={`w-full text-left px-2 py-1.5 rounded text-xs font-bold flex items-center justify-between ${selectedTag === tag ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'}`}
                        >
                          <span>#{tag}</span>
                          {selectedTag === tag && <X size={10} />}
                        </button>
                      ))
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Admin/Tag Management Link */}
        <Link href="/admin">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            title="Tag Management (Admin)"
          >
            <Settings size={20} />
          </motion.div>
        </Link>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onSearch}
          className="text-gray-400 hover:text-black dark:hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800"
          title="Search (Cmd+K)"
        >
          <Search size={20} />
        </motion.button>

        <div className="flex flex-col gap-3 items-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            onClick={onAiCreate}
            className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 w-10 h-10 flex items-center justify-center rounded-lg"
            title="Magic Create with Gemini"
          >
            <Sparkles size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCreateNote}
            className="text-black dark:text-white"
            title="Create Note"
          >
            <PlusCircle size={28} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};