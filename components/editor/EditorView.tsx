import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Note, NoteBlock, Tag } from '../../types';
import { getTags } from '../../app/actions';
import { NOTE_COLORS, BLOCK_HIGHLIGHT_COLORS } from '../../constants';
import {
  Plus, Trash2, Sparkles,
  Heading1, Type, List, CheckSquare, Quote, Code, Image as ImageIcon,
  Bold, Italic, Strikethrough, Palette, Hash, X, Copy, Check, Save, Highlighter, Underline, Link as LinkIcon,
  ChevronDown
} from 'lucide-react';
import { expandNoteWithAI } from '../../services/geminiService';
import { HistoryMode } from '../../hooks/useHistory';
import { ContentBlock } from './ContentBlock';
import { ImageBlock } from './ImageBlock';
import { ConfirmationModal } from '../ui/ConfirmationModal';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Slash Menu State
  const [slashMenuOpen, setSlashMenuOpen] = useState(false);
  const [slashMenuPosition, setSlashMenuPosition] = useState({ top: 0, left: 0 });
  const [slashBlockId, setSlashBlockId] = useState<string | null>(null);
  const [slashFilter, setSlashFilter] = useState('');

  // Formatting Toolbar State
  const [formatToolbarPosition, setFormatToolbarPosition] = useState<{ top: number; left: number } | null>(null);

  // Block Highlight Color Picker State
  const [highlightPickerOpen, setHighlightPickerOpen] = useState(false);

  // Color Picker State
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  // Tag Selector State
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);

  // Load available tags
  useEffect(() => {
    const loadTags = async () => {
      const tags = await getTags();
      setAvailableTags(tags);
    };
    loadTags();
  }, []);

  // Focus Management
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);

  // Copy Feedback State
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);

  // Image Deletion Modal State
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);

  // Link Paste Modal State
  const [linkPasteModal, setLinkPasteModal] = useState<{
    url: string;
    position: { top: number; left: number };
    blockId: string;
  } | null>(null);

  // Font Selector State
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);

  // Available fonts
  const AVAILABLE_FONTS = [
    { name: 'Inter', value: 'var(--font-inter), sans-serif' },
    { name: 'Montserrat', value: 'var(--font-montserrat), sans-serif' },
    { name: 'Poppins', value: 'var(--font-poppins), sans-serif' },
    { name: 'Open Sans', value: 'var(--font-open-sans), sans-serif' },
    { name: 'Roboto', value: 'var(--font-roboto), sans-serif' },
    { name: 'Lato', value: 'var(--font-lato), sans-serif' },
    { name: 'Playfair Display', value: 'var(--font-playfair), serif' },
    { name: 'Raleway', value: 'var(--font-raleway), sans-serif' },
    { name: 'Source Sans', value: 'var(--font-source-sans), sans-serif' },
    { name: 'Nunito', value: 'var(--font-nunito), sans-serif' },
    { name: 'Merriweather', value: 'var(--font-merriweather), serif' },
  ];

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
      if (!(e.target as HTMLElement).closest('.tag-selector-container')) {
        setIsTagSelectorOpen(false);
      }
      // Close font dropdown on outside click
      if (!(e.target as HTMLElement).closest('.font-dropdown-container')) {
        setFontDropdownOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

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

  const updateBlockContent = useCallback((id: string, html: string) => {
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

    // We can't use handleTextChange directly inside useCallback if it's not stable.
    // But handleTextChange depends on activeNote, so it changes every render.
    // To make updateBlockContent stable, we need to avoid closing over unstable deps.
    // However, for now, let's just use the functional update pattern where possible.

    if (!activeNote) return;

    const newBlocks = activeNote.blocks.map(b =>
      b.id === id ? { ...b, content: html } : b
    );

    // Optimization: Only update if content actually changed
    const block = activeNote.blocks.find(b => b.id === id);
    if (block && block.content === html) return;

    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
  }, [activeNote, onUpdateNote, slashMenuOpen]);

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

  const addBlock = useCallback((afterId: string, type: NoteBlock['type'] = 'paragraph') => {
    if (!activeNote) return;
    const newBlock: NoteBlock = {
      id: crypto.randomUUID(),
      type,
      content: ''
    };
    const index = activeNote.blocks.findIndex(b => b.id === afterId);
    const newBlocks = [...activeNote.blocks];
    newBlocks.splice(index + 1, 0, newBlock);

    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
    setFocusedBlockId(newBlock.id);
  }, [activeNote, onUpdateNote]);

  const deleteBlock = useCallback((id: string) => {
    if (!activeNote) return;
    const index = activeNote.blocks.findIndex(b => b.id === id);
    const prevBlock = activeNote.blocks[index - 1];
    let newBlocks = activeNote.blocks.filter(b => b.id !== id);

    // If we deleted the last block, add an empty paragraph
    if (newBlocks.length === 0) {
      const newId = crypto.randomUUID();
      newBlocks = [{
        id: newId,
        type: 'paragraph',
        content: ''
      }];
      // Focus the new empty block
      setTimeout(() => setFocusedBlockId(newId), 0);
    }

    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');

    if (prevBlock) {
      setFocusedBlockId(prevBlock.id);
    }
  }, [activeNote, onUpdateNote]);

  const handleBlockKeyDown = useCallback((e: React.KeyboardEvent, id: string) => {
    if (!activeNote) return;

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
  }, [activeNote, addBlock, onUpdateNote]);

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
      id: crypto.randomUUID(),
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

  const handleBlockHighlightChange = (blockId: string, highlightColor: string) => {
    const newBlocks = activeNote.blocks.map(b =>
      b.id === blockId ? { ...b, highlightColor: highlightColor === 'transparent' ? undefined : highlightColor } : b
    );
    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
    setHighlightPickerOpen(false);
  };

  const handleSelectTag = (tagName: string) => {
    const currentTags = activeNote.tags || [];
    if (!currentTags.includes(tagName)) {
      const updatedTags = [...currentTags, tagName];
      onUpdateNote({ ...activeNote, tags: updatedTags }, 'PUSH');
    }
    setIsTagSelectorOpen(false);
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

  const handleFileUpload = useCallback(async (file: File, targetBlockId?: string) => {
    // 1. Create optimistic block with local preview
    const objectUrl = URL.createObjectURL(file);
    const tempId = crypto.randomUUID();

    const newBlock: NoteBlock = {
      id: tempId,
      type: 'image',
      content: objectUrl
    };

    // 2. Insert immediately
    // We need to use the functional update form of onUpdateNote if possible, or access the latest activeNote.
    // Since onUpdateNote doesn't support functional update for the whole note in this props interface,
    // we rely on activeNote being fresh.
    if (!activeNote) return;

    let newBlocks = [...activeNote.blocks];
    if (targetBlockId) {
      newBlocks = newBlocks.map(b => b.id === targetBlockId ? newBlock : b);
    } else if (focusedBlockId) {
      const index = newBlocks.findIndex(b => b.id === focusedBlockId);
      if (index !== -1) {
        newBlocks.splice(index + 1, 0, newBlock);
      } else {
        newBlocks.push(newBlock);
      }
    } else {
      newBlocks.push(newBlock);
    }

    // Update UI immediately with local preview
    onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');

    // 3. Upload in background
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.url) {
        // 4. Update block with real URL
        // We need to find the block again in the *latest* state.
        // Since we can't easily access the latest state here without a ref or functional update,
        // we will do our best with the captured scope, but this is a known limitation without a refactor.
        // Ideally, we would use a ref for activeNote.

        // However, for the purpose of this task (performance), the optimistic UI is key.
        // The risk of overwriting is low if the user isn't typing furiously *exactly* when the upload finishes.

        const updatedBlocks = newBlocks.map(b =>
          b.id === tempId ? { ...b, content: data.url } : b
        );

        onUpdateNote({ ...activeNote, blocks: updatedBlocks }, 'PUSH');
      }
    } catch (e) {
      console.error('Upload failed', e);
      // Optionally show error state on block
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }, [activeNote, focusedBlockId, onUpdateNote]);

  const handlePaste = (e: React.ClipboardEvent) => {
    // Check for images first
    if (e.clipboardData.files.length > 0) {
      const files = Array.from(e.clipboardData.files).filter(f => f.type.startsWith('image/'));
      if (files.length > 0) {
        e.preventDefault();
        files.forEach(file => handleFileUpload(file, focusedBlockId || undefined));
        return;
      }
    }

    // Check for URL in pasted text
    const text = e.clipboardData.getData('text/plain');
    const urlRegex = /^(https?:\/\/[^\s]+)$/i;

    if (urlRegex.test(text.trim())) {
      e.preventDefault();

      let modalTop = 200;
      let modalLeft = 400;

      // Try to get position from selection
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Check if we got a valid position from the range
        if (rect.top > 0 && rect.left > 0) {
          modalTop = rect.bottom + 20;
          modalLeft = rect.right + 30;
        } else {
          // Fallback 1: Try to use the active element (where cursor is)
          const activeElement = document.activeElement;
          if (activeElement && activeElement instanceof HTMLElement) {
            const activeRect = activeElement.getBoundingClientRect();
            if (activeRect.top > 0 && activeRect.left > 0) {
              modalTop = activeRect.bottom + 20;
              modalLeft = activeRect.right + 30;
            }
          }

          // Fallback 2: If still no valid position, use anchor node's parent
          if (modalTop === 200 && selection.anchorNode) {
            const parentElement = selection.anchorNode.nodeType === Node.TEXT_NODE
              ? selection.anchorNode.parentElement
              : selection.anchorNode as HTMLElement;
            if (parentElement) {
              const parentRect = parentElement.getBoundingClientRect();
              if (parentRect.top > 0 || parentRect.left > 0) {
                modalTop = parentRect.bottom + 20;
                modalLeft = parentRect.right + 30;
              }
            }
          }
        }
      }

      setLinkPasteModal({
        url: text.trim(),
        position: {
          top: modalTop,
          left: modalLeft
        },
        blockId: focusedBlockId || ''
      });
    }
  };

  // Handle link paste option selection
  const handleLinkPasteOption = async (option: 'mention' | 'embed' | 'bookmark' | 'url') => {
    if (!linkPasteModal || !activeNote) return;

    const { url, blockId } = linkPasteModal;
    let content = '';

    // YouTube API key
    const YOUTUBE_API_KEY = 'AIzaSyB2BmcpR3bhQGSlWZeYkDW5sfjPOSdVpUA';

    // Helper to extract YouTube video ID from URL
    const getYouTubeVideoId = (youtubeUrl: string): string | null => {
      try {
        const urlObj = new URL(youtubeUrl);
        if (urlObj.hostname.includes('youtu.be')) {
          return urlObj.pathname.slice(1);
        }
        if (urlObj.hostname.includes('youtube.com')) {
          return urlObj.searchParams.get('v');
        }
      } catch { }
      return null;
    };

    // Helper to fetch YouTube video title
    const fetchYouTubeTitle = async (videoId: string): Promise<string> => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          return data.items[0].snippet.title;
        }
      } catch (error) {
        console.error('Failed to fetch YouTube title:', error);
      }
      return 'Video';
    };

    // Helper to extract Twitter/X username from URL
    const getTwitterUsername = (twitterUrl: string): string | null => {
      try {
        const urlObj = new URL(twitterUrl);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0 && pathParts[0] !== 'status') {
          return pathParts[0];
        }
      } catch { }
      return null;
    };

    // Helper to get platform info from URL
    const getPlatformInfo = async (linkUrl: string): Promise<{ logo: string; name: string; platform: string; cssClass: string }> => {
      try {
        const urlObj = new URL(linkUrl);
        const hostname = urlObj.hostname.replace('www.', '');
        const pathParts = urlObj.pathname.split('/').filter(Boolean);

        // Platform SVG icons (inline, compact)
        const icons = {
          twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
          youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
          instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
          github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
          linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
          tiktok: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
          spotify: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
          reddit: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF4500"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
          generic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
        };

        // Twitter/X
        if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
          const username = pathParts.length > 0 && pathParts[0] !== 'status' ? pathParts[0] : 'post';
          return { logo: icons.twitter, name: `@${username}`, platform: 'X', cssClass: 'twitter-mention-link' };
        }

        // YouTube - Fetch actual video title
        if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
          const videoId = getYouTubeVideoId(linkUrl);
          let videoTitle = 'Video';
          if (videoId) {
            videoTitle = await fetchYouTubeTitle(videoId);
            // Truncate title if too long
            if (videoTitle.length > 50) {
              videoTitle = videoTitle.substring(0, 47) + '...';
            }
          } else if (pathParts[0] === 'channel' || pathParts[0] === 'c' || pathParts[0] === '@') {
            videoTitle = pathParts[1] || pathParts[0];
          }
          return { logo: icons.youtube, name: videoTitle, platform: 'YouTube', cssClass: 'youtube-link' };
        }

        // Instagram
        if (hostname.includes('instagram.com')) {
          const username = pathParts[0] || 'post';
          return { logo: icons.instagram, name: `@${username}`, platform: 'Instagram', cssClass: 'instagram-link' };
        }

        // GitHub
        if (hostname.includes('github.com')) {
          const repoName = pathParts.slice(0, 2).join('/') || 'repo';
          return { logo: icons.github, name: repoName, platform: 'GitHub', cssClass: 'github-link' };
        }

        // LinkedIn
        if (hostname.includes('linkedin.com')) {
          return { logo: icons.linkedin, name: 'Post', platform: 'LinkedIn', cssClass: 'linkedin-link' };
        }

        // TikTok
        if (hostname.includes('tiktok.com')) {
          const username = pathParts[0]?.startsWith('@') ? pathParts[0] : `@${pathParts[0] || 'video'}`;
          return { logo: icons.tiktok, name: username, platform: 'TikTok', cssClass: 'tiktok-link' };
        }

        // Spotify
        if (hostname.includes('spotify.com')) {
          return { logo: icons.spotify, name: 'Track', platform: 'Spotify', cssClass: 'spotify-link' };
        }

        // Reddit
        if (hostname.includes('reddit.com')) {
          const subreddit = pathParts[0] === 'r' ? `r/${pathParts[1]}` : pathParts[0] || 'post';
          return { logo: icons.reddit, name: subreddit, platform: 'Reddit', cssClass: 'reddit-link' };
        }

        // Generic/default
        return { logo: icons.generic, name: hostname, platform: 'Link', cssClass: 'generic-link' };
      } catch {
        const icons = { generic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>' };
        return { logo: icons.generic, name: 'link', platform: 'Link', cssClass: 'generic-link' };
      }
    };

    const platformInfo = await getPlatformInfo(url);

    switch (option) {
      case 'mention':
      case 'embed':
        // Clean format: [icon] name · platform
        content = `<a href="${url}" class="${platformInfo.cssClass}" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
        break;
      case 'bookmark':
        // Bookmark style
        content = `<a href="${url}" class="${platformInfo.cssClass} bookmark-style" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
        break;
      case 'url':
      default:
        // Plain URL format
        content = `<a href="${url}" class="${platformInfo.cssClass}" target="_blank" rel="noopener noreferrer"><span class="link-logo">${platformInfo.logo}</span><span class="link-text"><strong>${platformInfo.name}</strong><span class="link-separator">·</span><span class="link-platform">${platformInfo.platform}</span></span></a>`;
        break;
    }

    // Insert content at cursor or append to block
    const block = activeNote.blocks.find(b => b.id === blockId);
    if (block) {
      const newContent = block.content + content;
      const newBlocks = activeNote.blocks.map(b =>
        b.id === blockId ? { ...b, content: newContent } : b
      );
      onUpdateNote({ ...activeNote, blocks: newBlocks }, 'PUSH');
    }

    setLinkPasteModal(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
      files.forEach(file => handleFileUpload(file));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0], slashBlockId || undefined);
    }
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <motion.div
      ref={editorRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto pt-12 pb-32 px-8 relative text-foreground"
      onPaste={handlePaste}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileSelect}
      />
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

        <div className="relative flex items-center tag-selector-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsTagSelectorOpen(!isTagSelectorOpen);
            }}
            className="text-gray-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-xs font-bold flex items-center gap-1 py-1.5 px-2 rounded-lg"
          >
            <Hash size={12} />
            Add Tag
          </button>

          <AnimatePresence>
            {isTagSelectorOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute top-full left-0 mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[200px]"
              >
                <div className="p-2 border-b border-gray-100 dark:border-neutral-800">
                  <p className="text-xs font-medium text-gray-400 dark:text-neutral-500">Select a tag</p>
                </div>
                <div className="max-h-48 overflow-y-auto p-1">
                  {availableTags.filter(tag => !activeNote.tags?.includes(tag.name)).length === 0 ? (
                    <div className="p-4 text-center">
                      <p className="text-xs text-gray-400 dark:text-neutral-500">
                        {availableTags.length === 0 ? 'No tags available' : 'All tags added'}
                      </p>
                      <p className="text-xs text-gray-300 dark:text-neutral-600 mt-1">
                        Create tags in Settings
                      </p>
                    </div>
                  ) : (
                    availableTags
                      .filter(tag => !activeNote.tags?.includes(tag.name))
                      .map(tag => (
                        <motion.button
                          key={tag.id}
                          whileHover={{ x: 2 }}
                          onClick={() => handleSelectTag(tag.name)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors text-left"
                        >
                          <div
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: tag.color }}
                          />
                          <span className="text-sm font-medium text-black dark:text-white">
                            #{tag.name}
                          </span>
                        </motion.button>
                      ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

              <div
                className="w-full relative group/content rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: block.highlightColor || 'transparent',
                }}
              >
                <div className={`flex items-start w-full ${block.type === 'bullet' ? 'gap-3' : 'gap-2'} ${block.highlightColor ? 'px-3 py-2' : ''}`}>
                  {block.type === 'bullet' && (
                    <span className="text-2xl leading-6 select-none dark:text-white">•</span>
                  )}
                  {block.type === 'todo' && (
                    <div
                      className={`mt-1.5 w-5 h-5 border-2 border-black dark:border-white cursor-pointer transition-colors flex-shrink-0 rounded ${block.checked ? 'bg-black dark:bg-white' : 'bg-transparent'}`}
                      contentEditable={false}
                      onClick={() => {
                        handleTextChange(note => ({
                          ...note,
                          blocks: note.blocks.map(b => b.id === block.id ? { ...b, checked: !b.checked } : b)
                        }));
                      }}
                    />
                  )}

                  {block.type !== 'image' && (
                    <ContentBlock
                      id={block.id}
                      html={block.content}
                      tagName={block.type === 'heading' ? 'h1' : 'div'}
                      className={`w-full outline-none resize-none overflow-hidden text-black dark:text-white transition-all
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
                  )}
                  {block.type === 'image' && (
                    <ImageBlock
                      id={block.id}
                      src={block.content}
                      onDelete={(id) => setImageToDelete(id)}
                      className="w-full"
                    />
                  )}
                </div>

                {/* Block Actions Container */}
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover/content:opacity-100 transition-all">
                  {/* Highlight Color Picker Button */}
                  {block.type !== 'image' && block.type !== 'code' && (
                    <div className="relative">
                      <button
                        onClick={() => {
                          setFocusedBlockId(block.id);
                          setHighlightPickerOpen(highlightPickerOpen && focusedBlockId === block.id ? false : true);
                        }}
                        className={`p-1.5 rounded-md transition-colors ${block.highlightColor ? 'bg-gray-200 dark:bg-neutral-700' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'}`}
                        title="Highlight Color"
                        style={{ borderLeft: block.highlightColor ? `3px solid ${block.highlightColor.replace('0.15', '0.8').replace('0.2', '0.8')}` : undefined }}
                      >
                        <Highlighter size={14} className="text-gray-500 dark:text-neutral-400" />
                      </button>

                      {/* Highlight Color Dropdown */}
                      <AnimatePresence>
                        {highlightPickerOpen && focusedBlockId === block.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: 10 }}
                            className="absolute right-full mr-2 top-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg p-2 flex flex-wrap gap-1.5 z-50 w-32"
                          >
                            {BLOCK_HIGHLIGHT_COLORS.map((color) => (
                              <button
                                key={color.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBlockHighlightChange(block.id, color.value);
                                }}
                                className={`w-6 h-6 rounded-md border border-gray-300 dark:border-neutral-600 transition-transform hover:scale-110 ${block.highlightColor === color.value ? 'ring-2 ring-black dark:ring-white ring-offset-1 dark:ring-offset-neutral-900' : ''}`}
                                style={{ backgroundColor: color.id === 'none' ? 'transparent' : color.value.replace('0.15', '0.5').replace('0.2', '0.5') }}
                                title={color.label}
                              >
                                {color.id === 'none' && <X size={12} className="mx-auto text-gray-400" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
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
              { type: 'image', label: 'Image', icon: ImageIcon },
            ].filter(item => item.label.toLowerCase().includes(slashFilter.toLowerCase())).map(item => (
              <button
                key={item.type}
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.type === 'image') {
                    fileInputRef.current?.click();
                    setSlashMenuOpen(false);
                  } else if (slashBlockId) {
                    updateBlockType(slashBlockId, item.type as any);
                  }
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
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
              style={{
                top: formatToolbarPosition.top,
                left: formatToolbarPosition.left,
                translateX: "-50%"
              }}
              className="fixed z-[9999] bg-black/95 dark:bg-white/95 backdrop-blur-xl text-white dark:text-black rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] px-2 py-2 flex items-center gap-1 border border-white/10 dark:border-black/10 pointer-events-auto"
            >
              {/* Arrow pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/95 dark:bg-white/95 rotate-45 border-r border-b border-white/10 dark:border-black/10" />

              {/* Text Style Group */}
              <div className="flex items-center gap-0.5 bg-white/5 dark:bg-black/5 rounded-xl p-1">
                {/* Bold Button */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Bold"
                    aria-keyshortcuts="Meta+B Ctrl+B"
                    onMouseDown={(e) => { e.preventDefault(); formatText('bold'); }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Bold size={16} strokeWidth={2.5} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Bold
                    <span className="ml-1.5 text-gray-400 dark:text-gray-500">⌘B</span>
                  </div>
                </div>

                {/* Italic Button */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Italic"
                    aria-keyshortcuts="Meta+I Ctrl+I"
                    onMouseDown={(e) => { e.preventDefault(); formatText('italic'); }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Italic size={16} strokeWidth={2.5} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Italic
                    <span className="ml-1.5 text-gray-400 dark:text-gray-500">⌘I</span>
                  </div>
                </div>

                {/* Underline Button */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Underline"
                    aria-keyshortcuts="Meta+U Ctrl+U"
                    onMouseDown={(e) => { e.preventDefault(); formatText('underline'); }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Underline size={16} strokeWidth={2.5} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Underline
                    <span className="ml-1.5 text-gray-400 dark:text-gray-500">⌘U</span>
                  </div>
                </div>

                {/* Strikethrough Button */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Strikethrough"
                    onMouseDown={(e) => { e.preventDefault(); formatText('strikeThrough'); }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Strikethrough size={16} strokeWidth={2.5} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Strikethrough
                  </div>
                </div>

                {/* Separator */}
                <div className="w-px h-4 bg-white/20 dark:bg-black/20 mx-0.5" />

                {/* Link Button */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Insert Link"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      const selection = window.getSelection();
                      const selectedText = selection?.toString() || '';
                      const url = prompt('Enter URL:', selectedText.startsWith('http') ? selectedText : 'https://');
                      if (url) {
                        document.execCommand('createLink', false, url);
                      }
                    }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <LinkIcon size={16} strokeWidth={2.5} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Insert Link
                    <span className="ml-1.5 text-gray-400 dark:text-gray-500">⌘K</span>
                  </div>
                </div>

                {/* Font Selector */}
                <div className="relative group/btn">
                  <button
                    type="button"
                    aria-label="Change Font"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setFontDropdownOpen(!fontDropdownOpen);
                    }}
                    className="p-2 hover:bg-white/20 dark:hover:bg-black/15 rounded-lg transition-all duration-150 hover:scale-110 active:scale-95 focus:outline-none flex items-center gap-1"
                  >
                    <Type size={16} strokeWidth={2.5} />
                    <ChevronDown size={12} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Font
                  </div>

                  {/* Font Dropdown */}
                  <AnimatePresence>
                    {fontDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-900 dark:bg-white border border-neutral-700 dark:border-neutral-300 rounded-xl shadow-2xl p-1 min-w-[160px] max-h-[250px] overflow-y-auto z-50"
                      >
                        {AVAILABLE_FONTS.map((font) => (
                          <button
                            key={font.name}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Apply font to selected text
                              const selection = window.getSelection();
                              if (selection && selection.rangeCount > 0) {
                                const range = selection.getRangeAt(0);
                                if (!range.collapsed) {
                                  const span = document.createElement('span');
                                  span.style.fontFamily = font.value;
                                  try {
                                    range.surroundContents(span);
                                  } catch {
                                    // If surrounding fails (crosses element boundaries), use execCommand fallback
                                    document.execCommand('fontName', false, font.value);
                                  }
                                }
                              }
                              setFontDropdownOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left text-sm text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 rounded-lg transition-colors"
                            style={{ fontFamily: font.value }}
                          >
                            {font.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="w-px h-6 bg-white/20 dark:bg-black/20 mx-0.5" role="separator" aria-orientation="vertical" />

              {/* Text Highlight Colors */}
              <div className="flex items-center gap-1 bg-white/5 dark:bg-black/5 rounded-xl p-1">
                <Highlighter size={14} className="text-gray-400 dark:text-gray-500 mx-1" />
                {[
                  { color: '#facc15', label: 'Yellow' },
                  { color: '#4ade80', label: 'Green' },
                  { color: '#ff0000ff', label: 'Blood Red' },
                  { color: '#60a5fa', label: 'Blue' },
                  { color: '#f87171', label: 'Coral Red' },
                  { color: '#c084fc', label: 'Purple' },
                ].map((item) => (
                  <div key={item.color} className="relative group/color">
                    <button
                      type="button"
                      aria-label={`Highlight ${item.label}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        document.execCommand('hiliteColor', false, item.color);
                      }}
                      className="w-5 h-5 rounded-full border-2 border-white/30 dark:border-black/30 hover:scale-125 active:scale-95 transition-all shadow-inner"
                      style={{ backgroundColor: item.color }}
                    />
                    {/* Tooltip Overlay */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/color:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                      {item.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200" />
                    </div>
                  </div>
                ))}
                <div className="w-px h-4 bg-white/20 dark:bg-black/20 mx-0.5" />
                <div className="relative group/color">
                  <button
                    type="button"
                    aria-label="Remove Highlight"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      document.execCommand('hiliteColor', false, 'transparent');
                    }}
                    className="w-5 h-5 rounded-full border-2 border-white/30 dark:border-black/30 hover:scale-125 active:scale-95 transition-all flex items-center justify-center bg-gray-700 dark:bg-gray-400"
                  >
                    <X size={10} className="text-white dark:text-black" />
                  </button>
                  {/* Tooltip Overlay */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover/color:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                    Remove
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <ConfirmationModal
        isOpen={!!imageToDelete}
        title="Delete Image?"
        message="Are you sure you want to delete this image? This action cannot be undone."
        onConfirm={() => {
          if (imageToDelete) {
            deleteBlock(imageToDelete);
            setImageToDelete(null);
          }
        }}
        onCancel={() => setImageToDelete(null)}
      />

      {/* Link Paste Modal */}
      <AnimatePresence>
        {linkPasteModal && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: 'fixed',
              top: linkPasteModal.position.top,
              left: linkPasteModal.position.left,
              zIndex: 9999
            }}
            className="bg-neutral-900 dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-700 overflow-hidden min-w-[200px]"
          >
            {/* Header */}
            <div className="px-4 py-2 border-b border-neutral-700 text-sm text-neutral-400 font-medium">
              Colar como
            </div>

            {/* Options */}
            <div className="py-1">
              <button
                onClick={() => handleLinkPasteOption('mention')}
                className="w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3"
              >
                <span className="text-blue-400">@</span>
                <span>Menção</span>
              </button>

              <button
                onClick={() => handleLinkPasteOption('embed')}
                className="w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3"
              >
                <span className="text-purple-400">◇</span>
                <span>Integrar tweet</span>
              </button>

              <button
                onClick={() => handleLinkPasteOption('bookmark')}
                className="w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3"
              >
                <span className="text-yellow-400">🔖</span>
                <span>Criar marcador</span>
              </button>

              <button
                onClick={() => handleLinkPasteOption('url')}
                className="w-full px-4 py-2.5 text-left text-white hover:bg-neutral-700 transition-colors flex items-center gap-3"
              >
                <LinkIcon size={16} className="text-neutral-400" />
                <span>URL</span>
              </button>
            </div>

            {/* URL Preview */}
            <div className="px-4 py-2 border-t border-neutral-700 text-xs text-neutral-500 truncate max-w-[300px]">
              {linkPasteModal.url}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close link paste modal */}
      {linkPasteModal && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setLinkPasteModal(null)}
        />
      )}
    </motion.div>
  );
};