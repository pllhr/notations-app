import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Note, NoteBlock } from '../../types';
import { NOTE_COLORS } from '../../constants';
import {
  Plus, Trash2, Sparkles,
  Heading1, Type, List, CheckSquare, Quote, Code,
  Bold, Italic, Strikethrough, Palette, Hash, X, Copy, Check, Save
} from 'lucide-react';
import { expandNoteWithAI } from '../../services/geminiService';
import { HistoryMode } from '../../hooks/useHistory';
import { ContentBlock } from './ContentBlock';

interface EditorViewProps {
  activeNote: Note | null;
  onUpdateNote: (updatedNote: Note, mode?: HistoryMode) => void;
  onDeleteNote: (id: string) => void;
  hasUnsavedChanges: boolean;
  onSave: () => void;
}

export const EditorView: React.FC<EditorViewProps> = ({
  activeNote,
  onUpdateNote,
  onDeleteNote,
  hasUnsavedChanges,
  onSave
}) => {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  // Slash Menu State
  const [slashMenuOpen, setSlashMenuOpen] = useState(false);
  const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 });
  const [slashBlockId, setSlashBlockId] = useState<string | null>(null);
  const [slashFilter, setSlashFilter] = useState('');

  // Formatting Toolbar State
  const [formatToolbarPosition, setFormatToolbarPosition] = useState<{ top: number; left: number } | null>(null);

  // Color Picker State
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  // Tag Input State
  const [tagInput, setTagInput] = useState('');
  const [isTagInputVisible, setIsTagInputVisible] = useState(false);
  const tagInputRef = useRef<HTMLInputElement>(null);

  // Focus Management
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);

  // Copy Feedback State
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);

  // Typing detection refs
  const isTypingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setSlashMenuOpen(false);
      // Only close color picker if clicking outside the color picker UI
      if (!(e.target as HTMLElement).closest('.color-picker-container')) {
        setColorPickerOpen(false);
      }
      if (!(e.target as HTMLElement).closest('.tag-container') && !tagInput) {
        setIsTagInputVisible(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [tagInput]);

  // Handle Selection for Formatting Toolbar
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();

      // Validate selection
      if (!selection || selection.isCollapsed || !editorRef.current) {
        setFormatToolbarPosition(null);
        return;
      }

      // Check if selection anchor is descendant of editor
      let node = selection.anchorNode;
      let isInside = false;
      while (node) {
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
      if (rect.width > 1 && !slashMenuOpen) {
        setFormatToolbarPosition({
          // Ensure it doesn't go off-screen top
          top: Math.max(10, rect.top - 60),
          left: rect.left + rect.width / 2
        });
      } else {
        setFormatToolbarPosition(null);
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('scroll', handleSelectionChange, true);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('scroll', handleSelectionChange, true);
    };
  }, [slashMenuOpen]);

  useEffect(() => {
    if (isTagInputVisible) {
      tagInputRef.current?.focus();
    }
  }, [isTagInputVisible]);


  if (!activeNote) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground dark:text-neutral-400">
        <p>Select a note from the canvas or graph to edit.</p>
      </div>
    );
  }

  // --- Helper Functions ---

  const handleTextChange = (updater: (n: Note) => Note) => {
    const mode: HistoryMode = isTypingRef.current ? 'REPLACE' : 'PUSH';
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    isTypingRef.current = true;
    timeoutRef.current = setTimeout(() => {
      isTypingRef.current = false;
    }, 1000);
    onUpdateNote(updater(activeNote), mode);
  };

  const updateBlockContent = (id: string, html: string) => {
    // Check for Slash Command
    if (html.endsWith('/')) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSlashMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
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

    handleTextChange(note => {
      const updatedBlocks = note.blocks.map(b =>
        b.id === id ? { ...b, content: html } : b
      );
      return { ...note, blocks: updatedBlocks };
    });
  };

  const updateBlockType = (id: string, type: NoteBlock['type']) => {
    handleTextChange(note => ({
      ...note,
      blocks: note.blocks.map(b => {
        if (b.id === id) {
          const cleanContent = b.content.replace(/\/[\w]*$/, '');
          return { ...b, type, content: cleanContent };
        }
        return b;
      })
    }));
    setSlashMenuOpen(false);
    setTimeout(() => {
      document.getElementById(`block-${id}`)?.focus();
    }, 0);
  };

  const addBlock = (afterId: string, type: NoteBlock['type'] = 'paragraph') => {
    const newBlock: NoteBlock = {
      id: Date.now().toString(),
      type,
      content: ''
    };
    const index = activeNote.blocks.findIndex(b => b.id === afterId);
    const newBlocks = [...activeNote.blocks];
    newBlocks.splice(index + 1, 0, newBlock);

    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
    setFocusedBlockId(newBlock.id);
  };

  const deleteBlock = (id: string) => {
    if (activeNote.blocks.length <= 1) return; // Don't delete last block

    const index = activeNote.blocks.findIndex(b => b.id === id);
    const prevBlock = activeNote.blocks[index - 1];

    const newBlocks = activeNote.blocks.filter(b => b.id !== id);
    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');

    if (prevBlock) {
      setFocusedBlockId(prevBlock.id);
    }
  };

  const handleBlockKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const currentBlock = activeNote.blocks.find(b => b.id === id);
      const nextType = currentBlock?.type === 'bullet' ? 'bullet' : 'paragraph';
      addBlock(id, nextType);
      setSlashMenuOpen(false);
    } else if (e.key === 'Backspace') {
      const element = e.currentTarget as HTMLElement;
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
        const index = activeNote.blocks.findIndex(b => b.id === id);
        // Only merge/delete if not the first block
        if (index > 0) {
          e.preventDefault();
          const currentBlock = activeNote.blocks[index];
          const prevBlock = activeNote.blocks[index - 1];

          // Merge current block content into previous block
          const newContent = prevBlock.content + currentBlock.content;

          const newBlocks = [...activeNote.blocks];
          newBlocks[index - 1] = { ...prevBlock, content: newContent };
          newBlocks.splice(index, 1);

          onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
          setFocusedBlockId(prevBlock.id);
        }
      }
    }
  };

  const handleTitleChange = (html: string) => {
    handleTextChange(note => ({ ...note, title: html }));
  };

  const handleAiEnhance = async () => {
    setIsAiLoading(true);

    const selection = window.getSelection();
    const selectedText = selection ? selection.toString() : '';
    const hasSelection = selectedText.trim().length > 0;

    const context = hasSelection
      ? selectedText
      : activeNote.blocks.map(b => b.content).join('\n');

    const result = await expandNoteWithAI(context);

    const newBlock: NoteBlock = {
      id: Date.now().toString(),
      type: 'paragraph',
      content: result
    };

    let newBlocks = [...activeNote.blocks];

    // If text was selected, insert the expanded content after the focused block
    if (hasSelection && focusedBlockId) {
      const index = newBlocks.findIndex(b => b.id === focusedBlockId);
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

  const formatText = (command: string) => {
    document.execCommand(command);
  };

  const handleColorChange = (color: string) => {
    onUpdateNote({ ...activeNote, color }, 'PUSH');
    setColorPickerOpen(false);
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();

      if (tagInput.trim()) {
        const newTag = tagInput.trim().toLowerCase();
        const currentTags = activeNote.tags || [];

        if (!currentTags.includes(newTag)) {
          const updatedTags = [...currentTags, newTag];
          onUpdateNote({ ...activeNote, tags: updatedTags }, 'PUSH');
        }
        setTagInput('');
      } else {
        // If empty and enter is pressed, close the input
        setIsTagInputVisible(false);
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = activeNote.tags?.filter(t => t !== tagToRemove) || [];
    onUpdateNote({ ...activeNote, tags: updatedTags }, 'PUSH');
  };

  const handleCopyBlock = (id: string, htmlContent: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;
    const text = temp.textContent || temp.innerText || "";
    navigator.clipboard.writeText(text);
    setCopiedBlockId(id);
    setTimeout(() => setCopiedBlockId(null), 2000);
  };

  return (
    <motion.div
      ref={editorRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto pt-12 pb-32 px-8 relative text-foreground"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <ContentBlock
            id="note-title"
            html={activeNote.title}
            tagName="h1"
            className="text-5xl font-black bg-transparent border-none outline-none placeholder-gray-300 dark:placeholder-neutral-700 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300 dark:empty:before:text-neutral-700 text-black dark:text-white"
            placeholder="Untitled"
            onChange={(id, html) => handleTitleChange(html)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById(`block-${activeNote.blocks[0]?.id}`)?.focus();
              }
            }}
          />
        </motion.div>

        {/* Header Actions (Always visible for better UX) */}
        <div className="flex items-center gap-1">
          {/* Save Button */}
          <button
            onClick={onSave}
            className={`p-2 rounded-md transition-all duration-300 ${hasUnsavedChanges ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-110' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400'}`}
            title={hasUnsavedChanges ? "Save Changes" : "Saved"}
          >
            <Save size={20} className={hasUnsavedChanges ? "animate-pulse" : ""} />
          </button>

          <div className="relative color-picker-container">
            <button
              onClick={() => setColorPickerOpen(!colorPickerOpen)}
              className={`p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-colors ${activeNote.color && activeNote.color !== '#000000' ? 'ring-2 ring-offset-1 dark:ring-offset-neutral-900' : ''}`}
              style={{ borderColor: activeNote.color || 'transparent' }}
              title="Note Color"
            >
              <Palette
                size={20}
                style={{ color: activeNote.color && activeNote.color !== '#000000' ? activeNote.color : 'currentColor' }}
                className="text-gray-500 dark:text-neutral-400"
              />
            </button>

            <AnimatePresence>
              {colorPickerOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute right-0 top-full mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-3 flex gap-2 z-50 w-48 flex-wrap"
                >
                  {NOTE_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorChange(color.value)}
                      className={`w-8 h-8 rounded-full border border-gray-200 dark:border-neutral-600 transition-transform hover:scale-110 ${activeNote.color === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-neutral-900' : ''}`}
                      style={{ backgroundColor: color.value }}
                      title={color.label}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onMouseDown={(e) => {
              e.preventDefault();
              document.execCommand('bold');
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-md transition-colors"
            title="Bold Title"
          >
            <Bold size={20} />
          </button>
          <button
            onClick={() => onDeleteNote(activeNote.id)}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 text-gray-500 dark:text-neutral-400 rounded-md transition-colors"
            title="Delete Note"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Tag Section */}
      <div className="mb-8 flex flex-wrap items-center gap-2 tag-container min-h-[28px]">
        <AnimatePresence>
          {activeNote.tags?.map(tag => (
            <motion.div
              key={tag}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-neutral-300 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 group border border-gray-200 dark:border-neutral-700"
            >
              <span className="opacity-60">#</span>
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600 opacity-0 group-hover:opacity-100 transition-all ml-1"
              >
                <X size={10} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="relative flex items-center">
          {!isTagInputVisible && (
            <button
              onClick={() => setIsTagInputVisible(true)}
              className="text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors text-xs font-bold flex items-center gap-1 py-1"
            >
              <Hash size={12} />
              Add Tag
            </button>
          )}
          {isTagInputVisible && (
            <motion.input
              ref={tagInputRef}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              onBlur={() => {
                if (!tagInput) setIsTagInputVisible(false);
              }}
              placeholder="Type tag..."
              className="text-xs font-bold bg-transparent outline-none border-b border-black dark:border-white placeholder-gray-300 dark:placeholder-neutral-600 py-1 text-black dark:text-white"
            />
          )}
        </div>
      </div>

      {/* Blocks */}
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {activeNote.blocks.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="group flex items-start gap-2 relative"
            >
              {/* Hover Handle */}
              <div className="mt-2 opacity-0 group-hover:opacity-20 transition-opacity absolute -left-6 cursor-grab">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
              </div>

              <div className="w-full relative group/content">
                <div className={`flex items-start w-full ${block.type === 'bullet' ? 'gap-3' : 'gap-2'}`}>
                  {block.type === 'bullet' && (
                    <span className="text-2xl leading-6 select-none dark:text-white">•</span>
                  )}
                  {block.type === 'todo' && (
                    <div
                      className={`mt-1.5 w-5 h-5 border-2 border-black dark:border-white cursor-pointer transition-colors flex-shrink-0 ${block.checked ? 'bg-black dark:bg-white' : 'bg-transparent'}`}
                      contentEditable={false}
                      onClick={() => {
                        handleTextChange(note => ({
                          ...note,
                          blocks: note.blocks.map(b => b.id === block.id ? { ...b, checked: !b.checked } : b)
                        }));
                      }}
                    />
                  )}

                  <ContentBlock
                    id={block.id}
                    html={block.content}
                    tagName={block.type === 'heading' ? 'h1' : 'div'}
                    className={`w-full outline-none resize-none overflow-hidden text-black dark:text-white
                            ${block.type === 'heading' ? 'text-3xl font-bold mb-4 mt-6' : ''}
                            ${block.type === 'paragraph' ? 'text-lg leading-relaxed mb-2' : ''}
                            ${block.type === 'todo' ? (block.checked ? 'text-lg line-through text-gray-400 dark:text-neutral-600' : 'text-lg') : ''}
                            ${block.type === 'bullet' ? 'text-lg leading-relaxed' : ''}
                            ${block.type === 'blockquote' ? 'text-xl italic border-l-4 border-black dark:border-white pl-4 py-2 text-gray-600 dark:text-neutral-400 my-4' : ''}
                            ${block.type === 'code' ? 'font-mono text-sm bg-gray-50 dark:bg-neutral-900 p-4 rounded-md text-gray-800 dark:text-neutral-200 my-2 whitespace-pre-wrap' : ''}
                        `}
                    placeholder={block.type === 'paragraph' ? "Type '/' for commands" : "Type something..."}
                    onChange={updateBlockContent}
                    onKeyDown={handleBlockKeyDown}
                    autoFocus={focusedBlockId === block.id}
                    onFocus={setFocusedBlockId}
                  />
                </div>

                {/* Copy Button for Code Blocks */}
                {block.type === 'code' && (
                  <button
                    onClick={() => handleCopyBlock(block.id, block.content)}
                    className="absolute top-2 right-2 p-1.5 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 rounded text-gray-600 dark:text-neutral-300 transition-all opacity-0 group-hover/content:opacity-100"
                    title="Copy to clipboard"
                  >
                    {copiedBlockId === block.id ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="mt-8 flex gap-2 group opacity-50 hover:opacity-100 transition-opacity">
        <button onClick={() => addBlock(activeNote.blocks[activeNote.blocks.length - 1]?.id || '0')} className="flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors">
          <Plus size={16} /> Add Block
        </button>
        <button
          onMouseDown={(e) => { e.preventDefault(); handleAiEnhance(); }}
          disabled={isAiLoading}
          className="flex items-center gap-2 text-sm font-medium hover:bg-muted dark:hover:bg-neutral-800 px-3 py-1.5 rounded-md transition-colors text-purple-900 dark:text-purple-300"
        >
          <Sparkles size={16} className={isAiLoading ? "animate-spin" : ""} />
          {isAiLoading ? "Thinking..." : "Gemini Expand"}
        </button>
      </div>

      {/* Slash Menu */}
      <AnimatePresence>
        {slashMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ top: slashMenuPosition.top, left: slashMenuPosition.left }}
            className="absolute z-50 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg w-48 overflow-hidden flex flex-col py-1"
          >
            <div className="px-3 py-2 text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider border-b border-gray-100 dark:border-neutral-800">
              Basic Blocks
            </div>
            {[
              { type: 'paragraph', label: 'Paragraph', icon: Type },
              { type: 'heading', label: 'Heading 1', icon: Heading1 },
              { type: 'bullet', label: 'Bulleted List', icon: List },
              { type: 'todo', label: 'To-do List', icon: CheckSquare },
              { type: 'blockquote', label: 'Quote', icon: Quote },
              { type: 'code', label: 'Code Block', icon: Code },
            ].filter(item => item.label.toLowerCase().includes(slashFilter.toLowerCase())).map(item => (
              <button
                key={item.type}
                onClick={(e) => {
                  e.stopPropagation();
                  if (slashBlockId) updateBlockType(slashBlockId, item.type as any);
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors text-left"
              >
                <item.icon size={16} className="text-gray-500 dark:text-neutral-400" />
                <span className="text-sm font-medium text-black dark:text-neutral-200">{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formatting Toolbar - Portaled for z-index safety */}
      {createPortal(
        <AnimatePresence>
          {formatToolbarPosition && (
            <motion.div
              key="format-toolbar"
              role="toolbar"
              aria-label="Text formatting"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                top: formatToolbarPosition.top,
                left: formatToolbarPosition.left,
                translateX: "-50%"
              }}
              className="fixed z-[9999] bg-black dark:bg-white text-white dark:text-black rounded-lg shadow-2xl px-2 py-1.5 flex items-center gap-1 border border-gray-800 dark:border-gray-200 pointer-events-auto"
            >
              <button
                type="button"
                aria-label="Bold"
                aria-keyshortcuts="Meta+B Ctrl+B"
                onMouseDown={(e) => { e.preventDefault(); formatText('bold'); }}
                className="p-1.5 hover:bg-gray-700 dark:hover:bg-gray-200 rounded-md transition-colors focus:outline-none focus:bg-gray-700"
                title="Bold (Cmd+B)"
              >
                <Bold size={14} />
              </button>
              <button
                type="button"
                aria-label="Italic"
                aria-keyshortcuts="Meta+I Ctrl+I"
                onMouseDown={(e) => { e.preventDefault(); formatText('italic'); }}
                className="p-1.5 hover:bg-gray-700 dark:hover:bg-gray-200 rounded-md transition-colors focus:outline-none focus:bg-gray-700"
                title="Italic (Cmd+I)"
              >
                <Italic size={14} />
              </button>
              <button
                type="button"
                aria-label="Strikethrough"
                onMouseDown={(e) => { e.preventDefault(); formatText('strikeThrough'); }}
                className="p-1.5 hover:bg-gray-700 dark:hover:bg-gray-200 rounded-md transition-colors focus:outline-none focus:bg-gray-700"
                title="Strikethrough"
              >
                <Strikethrough size={14} />
              </button>
              <div className="w-px h-4 bg-gray-700 dark:bg-gray-300 mx-1" role="separator" aria-orientation="vertical" />
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 px-1 uppercase tracking-wide select-none">Format</span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};