'use client';

import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Sidebar } from './layout/Sidebar';
import { EditorView } from './editor/EditorView';
import { CanvasView } from './canvas/CanvasView';
import { GraphView } from './graph/GraphView';
import { ViewMode, Note } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { ConfirmationModal } from './ui/ConfirmationModal';
import { UnsavedChangesModal } from './ui/UnsavedChangesModal';
import { useHistory, HistoryMode } from '../hooks/useHistory';
import { SearchPalette } from './ui/SearchPalette';
import { AIMagicModal } from './ui/AIMagicModal';
import { generateNoteFromPrompt } from '../services/geminiService';
import { getNotes, saveNote, deleteNoteAction, getTags } from '../app/actions';
import { User } from '../types';
import { UserProfile } from './auth/UserProfile';
import { SieveView } from './sieve/SieveView';

interface NotationsAppProps {
  user?: Partial<User> | null;
}

const NotationsApp: React.FC<NotationsAppProps> = ({ user }) => {
  const [view, setView] = useState<ViewMode>(ViewMode.CANVAS);
  const [isLoading, setIsLoading] = useState(true);

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Replaced standard state with History Hook
  const {
    state: notes,
    set: setNotes,
    undo,
    redo,
    canUndo,
    canRedo
  } = useHistory<Note[]>([]);

  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  // Unsaved Changes State
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<(() => void) | null>(null);
  const [unsavedModalOpen, setUnsavedModalOpen] = useState(false);

  // Filter State
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);

  // Search State
  const [searchOpen, setSearchOpen] = useState(false);

  // AI Magic Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // Load Notes from DB and Local Backup
  useEffect(() => {
    const loadNotes = async () => {
      const fetchedNotes = await getNotes();

      // Local Backup Check
      const localBackup = localStorage.getItem('notations_backup');
      if (localBackup) {
        try {
          const parsedBackup: Note[] = JSON.parse(localBackup);
          // Simple conflict resolution: If local has more notes or different data, we could prompt.
          // For now, we'll merge: if local has notes not in DB (offline created), add them.
          // If DB is empty but local has data, restore local.

          if (fetchedNotes.length === 0 && parsedBackup.length > 0) {
            console.log("Restoring from local backup...");
            setNotes(parsedBackup, 'REPLACE');
            // Trigger sync to server
            parsedBackup.forEach(n => saveNote(n));
            setIsLoading(false);
            return;
          }

          // If both have data, we prefer server for now but could implement smarter merge.
          // A simple "Safety Net" is: if server fails to load, use local.
        } catch (e) {
          console.error("Failed to parse local backup", e);
        }
      }

      setNotes(fetchedNotes, 'REPLACE');
      if (fetchedNotes.length > 0 && !activeNoteId) {
        // Don't auto-select first note to avoid confusion with navigation trap immediately
        // setActiveNoteId(fetchedNotes[0].id);
      }
      setIsLoading(false);
    };
    loadNotes();
  }, []);

  // Local Backup Effect
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notations_backup', JSON.stringify(notes));
    }
  }, [notes]);

  // Initialize Theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const activeNote = notes.find(n => n.id === activeNoteId) || null;

  // Computed filtered notes
  const filteredNotes = useMemo(() => {
    if (!selectedTag) return notes;
    return notes.filter(n => n.tags?.includes(selectedTag));
  }, [notes, selectedTag]);

  // Compute unique tags for Sidebar (from DB + notes)
  const [globalTags, setGlobalTags] = useState<string[]>([]);

  useEffect(() => {
    const loadGlobalTags = async () => {
      const dbTags = await getTags();
      setGlobalTags(dbTags.map(t => t.name));
    };
    loadGlobalTags();
  }, []);

  const uniqueTags = useMemo(() => {
    // Merge global tags from DB with tags from notes
    const allTags = new Set<string>(globalTags);
    notes.forEach(note => {
      note.tags?.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
  }, [notes, globalTags]);

  // Keyboard Shortcuts: Undo/Redo, Search, and Magic Create
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Undo: Cmd+Z / Ctrl+Z
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      // Redo: Cmd+Shift+Z / Ctrl+Shift+Z / Ctrl+Y
      if (
        ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') ||
        ((e.metaKey || e.ctrlKey) && e.key === 'y')
      ) {
        e.preventDefault();
        redo();
      }
      // Search: Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      // Save: Cmd+S / Ctrl+S
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        if (activeNoteId) handleManualSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, activeNoteId, notes]);


  // --- SECURITY: Prevent Unsaved Data Loss (F5, Close, etc.) ---
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = ''; // Chrome requires returnValue to be set
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // --- Auto-Save Mechanism ---
  useEffect(() => {
    if (!hasUnsavedChanges || !activeNoteId) return;

    const timeoutId = setTimeout(() => {
      // console.log("Auto-saving...");
      handleManualSave();
    }, 2000); // Auto-save after 2 seconds of inactivity

    return () => clearTimeout(timeoutId);
  }, [notes, hasUnsavedChanges, activeNoteId]);


  const handleNoteUpdate = async (updatedNote: Note, mode: HistoryMode = 'PUSH') => {
    const newNotes = notes.map(n => n.id === updatedNote.id ? updatedNote : n);
    setNotes(newNotes, mode);
    setHasUnsavedChanges(true);
    // Removed auto-save: await saveNote(updatedNote);
  };

  const handleManualSave = async () => {
    if (activeNote) {
      await saveNote(activeNote);
      setHasUnsavedChanges(false);
    }
  };

  // Navigation Interception Logic
  const attemptNavigation = (action: () => void) => {
    if (hasUnsavedChanges) {
      setPendingNavigation(() => action);
      setUnsavedModalOpen(true);
    } else {
      action();
    }
  };

  const handleSaveAndLeave = async () => {
    await handleManualSave();
    setUnsavedModalOpen(false);
    if (pendingNavigation) {
      pendingNavigation();
      setPendingNavigation(null);
    }
  };

  const handleDiscardAndLeave = async () => {
    // Revert changes by reloading from DB or just proceeding (since we didn't save)
    // Ideally we should revert local state to last saved state, but for now just proceeding
    // effectively discards the changes since they weren't persisted to DB.
    // However, local state 'notes' still has the changes. We should probably reload or revert.
    // For simplicity in this step, we'll just proceed, but the in-memory notes will still be dirty
    // until a refresh. To do it right, we should re-fetch or undo.
    // Let's re-fetch this specific note or all notes to be safe.

    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes, 'REPLACE');

    setHasUnsavedChanges(false);
    setUnsavedModalOpen(false);
    if (pendingNavigation) {
      pendingNavigation();
      setPendingNavigation(null);
    }
  };

  const handleCancelNavigation = () => {
    setUnsavedModalOpen(false);
    setPendingNavigation(null);
  };


  const handleNoteSelect = useCallback((id: string) => {
    attemptNavigation(() => {
      setActiveNoteId(id);
      setView(ViewMode.EDITOR);
    });
  }, [hasUnsavedChanges]);

  const handleCreateNote = async () => {
    attemptNavigation(async () => {
      const newNote: Note = {
        id: crypto.randomUUID(),
        title: '',
        blocks: [{ id: '1', type: 'paragraph', content: '' }],
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        connections: [],
        tags: [],
        createdAt: Date.now()
      };
      setNotes([...notes, newNote], 'PUSH');
      setActiveNoteId(newNote.id);
      setView(ViewMode.EDITOR);
      await saveNote(newNote); // Initial save is fine
      setHasUnsavedChanges(false);
    });
  };

  const handleAiCreate = async (prompt: string) => {
    setIsAiGenerating(true);
    const result = await generateNoteFromPrompt(prompt);

    if (result) {
      const newNote: Note = {
        id: crypto.randomUUID(),
        title: result.title,
        blocks: [{ id: '1', type: 'paragraph', content: result.content }],
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        connections: [],
        tags: [],
        createdAt: Date.now()
      };

      attemptNavigation(async () => {
        setNotes([...notes, newNote], 'PUSH');
        setActiveNoteId(newNote.id);
        setView(ViewMode.EDITOR);
        setAiModalOpen(false);
        await saveNote(newNote);
        setHasUnsavedChanges(false);
      });
    }
    setIsAiGenerating(false);
  };

  const handleNoteMove = async (id: string, pos: { x: number, y: number }) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      const updatedNote = { ...note, position: pos };
      const newNotes = notes.map(n => n.id === id ? updatedNote : n);
      setNotes(newNotes, 'PUSH');
      await saveNote(updatedNote); // Canvas moves can still auto-save or be separate
    }
  };

  const handleConnectNotes = async (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;

    const sourceNote = notes.find(n => n.id === sourceId);
    if (!sourceNote) return;

    if (sourceNote.connections.includes(targetId)) return;

    const updatedSource = { ...sourceNote, connections: [...sourceNote.connections, targetId] };

    const newNotes = notes.map(n =>
      n.id === sourceId
        ? updatedSource
        : n
    );

    setNotes(newNotes, 'PUSH');
    await saveNote(updatedSource);
  };

  const handleRequestDelete = (noteId: string) => {
    setNoteToDelete(noteId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (noteToDelete) {
      const updatedNotes: Note[] = [];

      const newNotes = notes
        .filter(n => n.id !== noteToDelete)
        .map(n => {
          if (n.connections.includes(noteToDelete)) {
            const updated = { ...n, connections: n.connections.filter(cId => cId !== noteToDelete) };
            updatedNotes.push(updated);
            return updated;
          }
          return n;
        });

      setNotes(newNotes, 'PUSH');

      if (activeNoteId === noteToDelete) {
        setActiveNoteId(null);
        setView(ViewMode.CANVAS);
        setHasUnsavedChanges(false); // Deleted note doesn't have unsaved changes
      }
      setNoteToDelete(null);

      // DB Updates
      await deleteNoteAction(noteToDelete);
      for (const note of updatedNotes) {
        await saveNote(note);
      }
    }
    setDeleteModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-black transition-colors">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-bold uppercase tracking-widest animate-pulse text-black dark:text-white">Connecting to Neural DB...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen bg-background text-foreground font-sans transition-colors duration-300">
      <Sidebar
        currentView={view}
        onViewChange={(newView) => attemptNavigation(() => setView(newView))}
        onCreateNote={handleCreateNote}
        onAiCreate={() => setAiModalOpen(true)}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        onSearch={() => setSearchOpen(true)}
        allTags={uniqueTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 ml-20 relative h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {view === ViewMode.EDITOR && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              className="h-full overflow-y-auto custom-scrollbar bg-white dark:bg-[#0a0a0a]"
            >
              <EditorView
                activeNote={activeNote}
                onUpdateNote={handleNoteUpdate}
                onDeleteNote={handleRequestDelete}
                hasUnsavedChanges={hasUnsavedChanges}
                onSave={handleManualSave}
              />
            </motion.div>
          )}

          {view === ViewMode.CANVAS && (
            <motion.div
              key="canvas"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="h-full w-full"
            >
              <CanvasView
                notes={filteredNotes}
                onNoteSelect={handleNoteSelect}
                onNoteMove={handleNoteMove}
                onConnectNotes={handleConnectNotes}
                onDeleteNote={handleRequestDelete}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          )}

          {view === ViewMode.GRAPH && (
            <motion.div
              key="graph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <GraphView
                notes={filteredNotes}
                onNoteSelect={handleNoteSelect}
                onDeleteNote={handleRequestDelete}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          )}

          {view === ViewMode.SIEVE && (
            <motion.div
              key="sieve"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full w-full"
            >
              <SieveView />
            </motion.div>
          )}
        </AnimatePresence>

        {user && <UserProfile user={user} />}

        {/* Context Indicator */}
        <div className="fixed top-20 right-8 flex flex-col items-end pointer-events-none z-40">
          <h1 className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 dark:text-white dark:opacity-20">NOTATIONS v1.0</h1>
          <div className="flex items-center gap-2 mt-1">
            {selectedTag && (
              <span className="text-[10px] bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-full font-bold">
                FILTER: #{selectedTag}
              </span>
            )}
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
              {activeNoteId ? `ACTIVE: ${notes.find(n => n.id === activeNoteId)?.title || 'UNTITLED'}` : 'NO SELECTION'}
            </span>
          </div>
        </div>
      </main>

      <ConfirmationModal
        isOpen={deleteModalOpen}
        title="Delete Note?"
        message="Are you sure you want to delete this note? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModalOpen(false)}
      />

      <UnsavedChangesModal
        isOpen={unsavedModalOpen}
        onSaveAndLeave={handleSaveAndLeave}
        onDiscardAndLeave={handleDiscardAndLeave}
        onCancel={handleCancelNavigation}
      />

      <SearchPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        notes={filteredNotes}
        onSelectNote={handleNoteSelect}
      />

      <AIMagicModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onGenerate={handleAiCreate}
        isGenerating={isAiGenerating}
      />
    </div>
  );
};

export default NotationsApp;