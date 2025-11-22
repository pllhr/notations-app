import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, CornerDownLeft, X } from 'lucide-react';
import { Note } from '../../types';

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  notes: Note[];
  onSelectNote: (noteId: string) => void;
}

export const SearchPalette: React.FC<SearchPaletteProps> = ({
  isOpen,
  onClose,
  notes,
  onSelectNote
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filtering Logic
  const filteredNotes = notes.filter(note => {
    if (!query) return true;
    const lowerQuery = query.toLowerCase();
    // Naive stripping for search comparison
    const cleanTitle = (note.title || "").replace(/<[^>]*>?/gm, '').toLowerCase();
    const tagsMatch = note.tags?.some(t => t.toLowerCase().includes(lowerQuery));
    
    return (
      cleanTitle.includes(lowerQuery) ||
      tagsMatch ||
      note.blocks.some(b => b.content.toLowerCase().includes(lowerQuery))
    );
  }).slice(0, 5); // Limit to 5 results for clean UI

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredNotes.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredNotes.length) % filteredNotes.length);
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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredNotes, selectedIndex, onSelectNote, onClose]);

  const stripHtml = (html: string) => {
     const tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-[60]"
          />
          
          {/* Palette Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-xl z-[70] px-4 pointer-events-none"
          >
             <div className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] pointer-events-auto overflow-hidden flex flex-col">
                {/* Search Input */}
                <div className="flex items-center border-b-2 border-black/5 dark:border-white/5 px-4 py-4">
                    <Search className="text-black dark:text-white w-5 h-5 mr-3" strokeWidth={3} />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        placeholder="Search notes or #tags..."
                        className="flex-1 bg-transparent text-xl font-bold placeholder:text-gray-300 dark:placeholder:text-neutral-700 outline-none text-black dark:text-white"
                    />
                    <button onClick={onClose} className="text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-transform hover:scale-110">
                        <X size={20} />
                    </button>
                </div>

                {/* Results List */}
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar p-2 space-y-1">
                    {filteredNotes.length === 0 ? (
                         <div className="py-8 text-center text-gray-400 dark:text-neutral-600 font-medium">
                             No results found.
                         </div>
                    ) : (
                        filteredNotes.map((note, index) => (
                            <motion.div
                                key={note.id}
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                    opacity: 1, 
                                    x: index === selectedIndex ? 6 : 0,
                                    scale: index === selectedIndex ? 1.02 : 1,
                                    backgroundColor: index === selectedIndex ? '#000000' : 'transparent',
                                    color: index === selectedIndex ? '#ffffff' : 'inherit'
                                }}
                                style={index !== selectedIndex ? { 
                                    backgroundColor: 'transparent',
                                    color: 'inherit'
                                } : undefined}
                                whileHover={{ scale: 1.02, x: 6 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                onClick={() => {
                                    onSelectNote(note.id);
                                    onClose();
                                }}
                                onMouseEnter={() => setSelectedIndex(index)}
                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${index === selectedIndex ? 'dark:bg-white dark:text-black' : 'text-black dark:text-neutral-300'}`}
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <FileText size={18} className={`flex-shrink-0 transition-colors ${index === selectedIndex ? 'text-white dark:text-black' : 'text-gray-400 dark:text-neutral-600'}`} />
                                    <div className="flex flex-col overflow-hidden">
                                        <div className="flex items-center gap-2">
                                            <span 
                                                className="font-bold truncate"
                                                dangerouslySetInnerHTML={{ __html: note.title || "Untitled" }}
                                            />
                                            {note.tags && note.tags.length > 0 && (
                                                <div className="flex gap-1">
                                                    {note.tags.map(tag => (
                                                        <span 
                                                            key={tag} 
                                                            className={`text-[9px] px-1.5 rounded-sm font-bold uppercase ${
                                                                index === selectedIndex 
                                                                    ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black' 
                                                                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400'
                                                            }`}
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-xs truncate transition-colors ${index === selectedIndex ? 'text-gray-400 dark:text-neutral-500' : 'text-gray-500 dark:text-neutral-500'}`}>
                                            {stripHtml(note.blocks.find(b => b.content)?.content || "") || "Empty note"}
                                        </span>
                                    </div>
                                </div>
                                {index === selectedIndex && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <CornerDownLeft size={16} className="text-gray-500 dark:text-neutral-400 flex-shrink-0" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))
                    )}
                </div>
                
                {/* Footer */}
                <div className="bg-gray-50 dark:bg-neutral-800 px-4 py-2 flex justify-between text-[10px] text-gray-400 dark:text-neutral-500 font-mono uppercase tracking-wider border-t border-black/5 dark:border-white/5">
                     <span>Pro Tip: Use arrow keys to navigate</span>
                     <span>ESC to close</span>
                </div>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};