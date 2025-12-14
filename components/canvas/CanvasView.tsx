import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Note, Tag } from '../../types';
import { StickyNote, MousePointer2, Link2, X, ExternalLink } from 'lucide-react';
import { NOTE_COLORS } from '../../constants';

// SVG Noise Texture for paper feel
const PAPER_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`;

const NOTE_WIDTH = 256;
const NOTE_HEIGHT_ESTIMATE = 80; // Approximate center for connection anchor

// LOD (Level of Detail) thresholds based on zoom
// dot: pulsing circles only (overview)
// minimal: small pill with title only  
// compact: medium card with title + preview snippet
// full: complete card with all content
type LODLevel = 'dot' | 'minimal' | 'compact' | 'full';
const getLODLevel = (zoom: number): LODLevel => {
  if (zoom < 0.35) return 'dot';
  if (zoom < 0.55) return 'minimal';
  if (zoom < 0.85) return 'compact';
  return 'full';
};

interface CanvasViewProps {
  notes: Note[];
  onNoteSelect: (noteId: string) => void;
  onNoteMove: (noteId: string, position: { x: number; y: number }) => void;
  onConnectNotes: (sourceId: string, targetId: string) => void;
  onDeleteNote: (noteId: string) => void;
  isDarkMode: boolean;
  tagsWithColors?: Tag[];
  selectedNoteId?: string | null;
}

type CanvasTool = 'SELECT' | 'CONNECT';

export const CanvasView: React.FC<CanvasViewProps> = ({
  notes,
  onNoteSelect,
  onNoteMove,
  onConnectNotes,
  onDeleteNote,
  isDarkMode,
  tagsWithColors = [],
  selectedNoteId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Viewport State
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDraggingCanvas, setIsDraggingCanvas] = useState(false);

  // LOD level based on zoom
  const lodLevel = getLODLevel(zoom);

  // Create a map of tag name to color for quick lookup
  const tagColorMap = useMemo(() => {
    const map = new Map<string, string>();
    tagsWithColors.forEach(tag => {
      map.set(tag.name, tag.color);
    });
    return map;
  }, [tagsWithColors]);

  const getTagColor = (tagName: string): string => {
    return tagColorMap.get(tagName) || '#6b7280'; // Default gray if not found
  };

  // Tool State
  const [activeTool, setActiveTool] = useState<CanvasTool>('SELECT');
  const [connectionSourceId, setConnectionSourceId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Pan if clicking on background OR grid overlay OR pan layer (not on notes/cards)
    const isBackground = target === containerRef.current ||
      target.classList.contains('canvas-grid') ||
      target.classList.contains('canvas-pan-layer') ||
      target.tagName === 'svg';

    if (isBackground && activeTool === 'SELECT') {
      setIsDraggingCanvas(true);
    }
    // If clicking background in connect mode, cancel connection source but keep tool active
    if (activeTool === 'CONNECT' && isBackground) {
      setConnectionSourceId(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingCanvas) {
      setPan(prev => ({ x: prev.x + e.movementX, y: prev.y + e.movementY }));
    }

    // Update mouse pos for drawing the temporary connection line
    if (activeTool === 'CONNECT') {
      // Calculate relative position inside the panned container
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left - pan.x,
          y: e.clientY - rect.top - pan.y
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingCanvas(false);
  };

  // Zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.min(Math.max(prev + delta, 0.2), 2));
  };

  const handleNoteInteraction = (noteId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    if (activeTool === 'CONNECT') {
      if (connectionSourceId === null) {
        // Start connection
        setConnectionSourceId(noteId);
      } else {
        // If clicking same node, toggle off selection
        if (connectionSourceId === noteId) {
          setConnectionSourceId(null);
        } else {
          // Complete connection
          onConnectNotes(connectionSourceId, noteId);
          setConnectionSourceId(null);
        }
      }
    } else {
      // Normal selection
      onNoteSelect(noteId);
    }
  };

  const toggleTool = (tool: CanvasTool) => {
    if (activeTool === tool) {
      // Toggle off if clicking same tool
      if (tool === 'CONNECT') {
        setActiveTool('SELECT');
        setConnectionSourceId(null);
      }
    } else {
      setActiveTool(tool);
      setConnectionSourceId(null);
    }
  };

  return (
    <div
      className={`w-full h-full bg-[#fcfcfc] dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300 ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Zoom Indicator */}
      <div className="absolute top-4 left-4 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-gray-600 dark:text-neutral-400 border border-gray-200 dark:border-neutral-700">
        {Math.round(zoom * 100)}% • {lodLevel.toUpperCase()}
      </div>
      {/* Toolbar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-neutral-900 border border-black dark:border-neutral-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] px-2 py-2 rounded-full flex gap-2">
        <button
          onClick={() => toggleTool('SELECT')}
          className={`p-2 rounded-full transition-all ${activeTool === 'SELECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`}
          title="Select / Move Tool"
        >
          <MousePointer2 size={18} />
        </button>
        <button
          onClick={() => toggleTool('CONNECT')}
          className={`p-2 rounded-full transition-all ${activeTool === 'CONNECT' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-black dark:text-white'}`}
          title="Connect Notes Tool"
        >
          <Link2 size={18} />
        </button>
      </div>

      {/* Invisible Pan Layer - for reliable panning */}
      <div
        className="absolute inset-0 z-0 canvas-pan-layer"
        style={{ cursor: activeTool === 'SELECT' ? 'grab' : 'crosshair' }}
      />

      {/* Grid Pattern - Infinite dots covering entire viewport */}
      <div
        className="absolute pointer-events-none opacity-10 dark:opacity-20"
        style={{
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
          backgroundPosition: `${pan.x % (24 * zoom)}px ${pan.y % (24 * zoom)}px`
        }}
      />

      <motion.div
        className="absolute inset-0 origin-top-left"
        style={{ x: pan.x, y: pan.y, scale: zoom }}
      >
        {/* Connections Layer */}
        <svg className="absolute top-0 left-0 w-[5000px] h-[5000px] pointer-events-none overflow-visible">
          <defs>
            <marker id="arrowhead-pulse" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill={isDarkMode ? "white" : "black"} className="animate-pulse" />
            </marker>

            {/* Dynamic Colored Arrowheads */}
            {NOTE_COLORS.map(c => (
              <marker
                key={c.id}
                id={`arrowhead-${c.value.replace('#', '')}`}
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill={c.value} opacity="0.8" />
              </marker>
            ))}

            <style>
              {`
                    @keyframes flowAnimation {
                        from { stroke-dashoffset: 16; }
                        to { stroke-dashoffset: 0; }
                    }
                    .connection-line-animated {
                        animation: flowAnimation 2s linear infinite;
                    }
                `}
            </style>
          </defs>

          {/* Existing Connections - Smooth Bezier Curves */}
          {notes.map(note =>
            note.connections.map(targetId => {
              const target = notes.find(n => n.id === targetId);
              if (!target) return null;

              const sourceColor = note.color || (isDarkMode ? '#ffffff' : '#000000');
              const targetColor = target.color || (isDarkMode ? '#ffffff' : '#000000');
              const targetColorClean = targetColor.replace('#', '');
              const gradientId = `grad-${note.id}-${target.id}`;

              const x1 = note.position.x + NOTE_WIDTH / 2;
              const y1 = note.position.y + NOTE_HEIGHT_ESTIMATE;
              const x2 = target.position.x + NOTE_WIDTH / 2;
              const y2 = target.position.y + NOTE_HEIGHT_ESTIMATE;

              // Calculate control points for smooth S-curve
              const dx = x2 - x1;
              const dy = y2 - y1;
              const distance = Math.sqrt(dx * dx + dy * dy);

              // Control point offset - creates the organic curve tension
              const tension = Math.min(distance * 0.4, 150);

              // Midpoint for the curve
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2;

              // Control points perpendicular to the line for S-curve effect
              const angle = Math.atan2(dy, dx);
              const perpAngle = angle + Math.PI / 2;

              // Create organic S-curve control points
              const cp1x = x1 + Math.cos(angle) * tension;
              const cp1y = y1 + Math.sin(angle) * tension + Math.sin(perpAngle) * (tension * 0.3);
              const cp2x = x2 - Math.cos(angle) * tension;
              const cp2y = y2 - Math.sin(angle) * tension - Math.sin(perpAngle) * (tension * 0.3);

              // Cubic Bezier path
              const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

              return (
                <React.Fragment key={`${note.id}-${target.id}`}>
                  <defs>
                    <linearGradient
                      id={gradientId}
                      gradientUnits="userSpaceOnUse"
                      x1={x1} y1={y1}
                      x2={x2} y2={y2}
                    >
                      <stop offset="0%" stopColor={sourceColor} stopOpacity="0.8" />
                      <stop offset="50%" stopColor={sourceColor} stopOpacity="0.5" />
                      <stop offset="100%" stopColor={targetColor} stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Glow layer */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={sourceColor}
                    strokeWidth="6"
                    strokeOpacity="0.1"
                    strokeLinecap="round"
                  />

                  {/* Main bezier curve */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeDasharray="12,6"
                    strokeLinecap="round"
                    className="connection-line-animated"
                    markerEnd={`url(#arrowhead-${targetColorClean})`}
                  />
                </React.Fragment>
              )
            })
          )}

          {/* Temporary Connection Line - Bezier */}
          {activeTool === 'CONNECT' && connectionSourceId && (
            (() => {
              const source = notes.find(n => n.id === connectionSourceId);
              if (!source) return null;
              const sourceColor = source.color || (isDarkMode ? '#ffffff' : '#000000');

              const x1 = source.position.x + NOTE_WIDTH / 2;
              const y1 = source.position.y + NOTE_HEIGHT_ESTIMATE;
              const x2 = mousePos.x;
              const y2 = mousePos.y;

              // Calculate bezier control points
              const dx = x2 - x1;
              const dy = y2 - y1;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const tension = Math.min(distance * 0.4, 120);
              const angle = Math.atan2(dy, dx);
              const perpAngle = angle + Math.PI / 2;

              const cp1x = x1 + Math.cos(angle) * tension;
              const cp1y = y1 + Math.sin(angle) * tension + Math.sin(perpAngle) * (tension * 0.2);
              const cp2x = x2 - Math.cos(angle) * tension;
              const cp2y = y2 - Math.sin(angle) * tension - Math.sin(perpAngle) * (tension * 0.2);

              const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

              return (
                <>
                  {/* Glow */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={sourceColor}
                    strokeWidth="8"
                    strokeOpacity="0.15"
                    strokeLinecap="round"
                  />
                  {/* Main line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={sourceColor}
                    strokeWidth="2.5"
                    strokeDasharray="6,4"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead-pulse)"
                    className="animate-pulse"
                    style={{ opacity: 0.8 }}
                  />
                </>
              )
            })()
          )}
        </svg>

        {notes.map((note) => (
          <DraggableNote
            key={note.id}
            note={note}
            activeTool={activeTool}
            isConnectionSource={note.id === connectionSourceId}
            isSelected={note.id === selectedNoteId}
            onClick={(e) => handleNoteInteraction(note.id, e)}
            onMove={(pos) => onNoteMove(note.id, pos)}
            onDelete={() => onDeleteNote(note.id)}
            isDarkMode={isDarkMode}
            getTagColor={getTagColor}
            lodLevel={lodLevel}
          />
        ))}
      </motion.div>

      {/* Mode Indicator */}
      <AnimatePresence>
        {activeTool === 'CONNECT' && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-xs font-bold uppercase tracking-widest rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] pointer-events-none flex items-center gap-2"
          >
            <Link2 size={12} />
            {connectionSourceId ? "Click target note" : "Select source note"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface DraggableNoteProps {
  note: Note;
  activeTool: CanvasTool;
  isConnectionSource: boolean;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onMove: (p: { x: number, y: number }) => void;
  onDelete: () => void;
  isDarkMode: boolean;
  getTagColor: (tagName: string) => string;
  lodLevel: LODLevel;
}

const DraggableNote: React.FC<DraggableNoteProps> = ({
  note,
  activeTool,
  isConnectionSource,
  isSelected,
  onClick,
  onMove,
  onDelete,
  isDarkMode,
  getTagColor,
  lodLevel
}) => {
  // Safely parse HTML for preview
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Detect links
  const linkData = useMemo(() => {
    for (const block of note.blocks) {
      const text = stripHtml(block.content);
      const match = text.match(/(https?:\/\/[^\s]+)/);
      if (match) {
        try {
          const url = new URL(match[0]);
          return { url: match[0], hostname: url.hostname };
        } catch (e) { continue; }
      }
    }
    return null;
  }, [note.blocks]);

  // Sticky Note Theme: Random rotation and imperfect edges (Sketchy Border)
  const randomRotate = useMemo(() => (Math.random() * 2 - 1), []);
  const organicRadius = useMemo(() => {
    const v1 = 2 + Math.random() * 2;
    const v2 = 2 + Math.random() * 3;
    const v3 = 2 + Math.random() * 2;
    const v4 = 2 + Math.random() * 3;
    return `${v1}px ${v2}px ${v3}px ${v4}px`;
  }, []);

  const noteColor = note.color && note.color !== '#000000' ? note.color : null;

  // Expanded Preview Logic
  const previewText = useMemo(() => {
    const segments: string[] = [];
    let charCount = 0;

    for (const block of note.blocks) {
      if (charCount > 200) break; // Stop if we have enough text
      if (block.type === 'image') {
        segments.push('[Image]');
        charCount += 7;
        continue;
      }

      const text = stripHtml(block.content).trim();
      if (!text) continue;

      let formatted = text;
      if (block.type === 'bullet') formatted = `• ${text}`;
      if (block.type === 'todo') formatted = `- ${text}`;

      segments.push(formatted);
      charCount += formatted.length;
    }

    return segments.join(' ');
  }, [note.blocks]);

  const selectionColor = noteColor || (isDarkMode ? '#60a5fa' : '#3b82f6');

  const boxShadow = isConnectionSource
    ? `0 0 0 4px ${noteColor || (isDarkMode ? '#fff' : '#000')}, 8px 8px 12px rgba(0,0,0,0.2)`
    : isSelected
      ? `0 0 0 3px ${selectionColor}, 0 0 20px ${selectionColor}40, 4px 6px 16px rgba(0,0,0,0.12)`
      : "2px 3px 12px rgba(0,0,0,0.06)";

  const stripHtmlForTitle = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "Untitled";
  };

  // LOD: DOT - Just a pulsing colored circle
  if (lodLevel === 'dot') {
    return (
      <motion.div
        drag={activeTool === 'SELECT'}
        dragMomentum={false}
        initial={{ x: note.position.x, y: note.position.y, opacity: 0, scale: 0 }}
        animate={{
          x: note.position.x + NOTE_WIDTH / 2 - 12,
          y: note.position.y + 30,
          opacity: 1,
          scale: 1
        }}
        onDragEnd={(e, info) => {
          onMove({ x: note.position.x + info.offset.x, y: note.position.y + info.offset.y });
        }}
        onClick={onClick}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`absolute w-6 h-6 rounded-full ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`}
        style={{
          backgroundColor: noteColor || (isDarkMode ? '#6b88ff' : '#3b5bdb'),
          boxShadow: `0 0 12px ${noteColor || '#6b88ff'}60`
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: noteColor || (isDarkMode ? '#6b88ff' : '#3b5bdb') }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    );
  }

  // LOD: MINIMAL - Small pill with just title
  if (lodLevel === 'minimal') {
    return (
      <motion.div
        drag={activeTool === 'SELECT'}
        dragMomentum={false}
        initial={{ x: note.position.x, y: note.position.y, opacity: 0, scale: 0.8 }}
        animate={{
          x: note.position.x,
          y: note.position.y,
          opacity: 1,
          scale: isConnectionSource ? 1.05 : 1,
          boxShadow
        }}
        onDragEnd={(e, info) => {
          onMove({ x: note.position.x + info.offset.x, y: note.position.y + info.offset.y });
        }}
        onClick={onClick}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`group absolute ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`}
        style={{
          maxWidth: NOTE_WIDTH * 0.7,
          backgroundColor: isDarkMode ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '6px',
          border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}`,
          padding: '6px 10px'
        }}
      >
        <div
          className="font-bold text-[11px] truncate"
          style={{ color: noteColor || (isDarkMode ? '#fff' : '#000') }}
        >
          {stripHtmlForTitle(note.title)}
        </div>
      </motion.div>
    );
  }

  // LOD: COMPACT - Medium card with title + short preview
  if (lodLevel === 'compact') {
    const shortPreview = previewText.slice(0, 80) + (previewText.length > 80 ? '...' : '');

    return (
      <motion.div
        drag={activeTool === 'SELECT'}
        dragMomentum={false}
        initial={{ x: note.position.x, y: note.position.y, opacity: 0, scale: 0.8 }}
        animate={{
          x: note.position.x,
          y: note.position.y,
          opacity: 1,
          rotate: isConnectionSource ? 0 : randomRotate * 0.5,
          scale: isConnectionSource ? 1.05 : 1,
          boxShadow
        }}
        onDragEnd={(e, info) => {
          onMove({ x: note.position.x + info.offset.x, y: note.position.y + info.offset.y });
        }}
        onClick={onClick}
        whileHover={{ scale: 1.05, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`group absolute ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`}
        style={{
          width: NOTE_WIDTH * 0.85,
          backgroundColor: isDarkMode ? 'rgba(26,26,26,0.8)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderRadius: organicRadius,
          border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`,
          padding: '10px 14px'
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <h3
            className="font-bold text-xs truncate pr-2"
            style={{ color: noteColor || (isDarkMode ? '#fff' : '#000') }}
          >
            {stripHtmlForTitle(note.title)}
          </h3>
          <StickyNote size={12} className="text-gray-400 dark:text-neutral-600 flex-shrink-0" style={{ color: noteColor || undefined }} />
        </div>
        {shortPreview && (
          <p className="text-[10px] text-gray-500 dark:text-neutral-500 line-clamp-2 leading-relaxed">
            {shortPreview}
          </p>
        )}
        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {note.tags.slice(0, 2).map(tag => {
              const tagColor = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className="text-[8px] font-bold px-1 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: `${tagColor}20`,
                    color: tagColor,
                  }}
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        )}
      </motion.div>
    );
  }

  // LOD: FULL - Complete card with glassmorphism
  return (
    <motion.div
      drag={activeTool === 'SELECT'}
      dragMomentum={false}
      initial={{ x: note.position.x, y: note.position.y, opacity: 0, scale: 0.8 }}
      animate={{
        x: note.position.x,
        y: note.position.y,
        opacity: 1,
        rotate: isConnectionSource ? 0 : randomRotate,
        scale: isConnectionSource ? 1.05 : 1,
        boxShadow,
        borderColor: noteColor || (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')
      }}
      onDragEnd={(e, info) => {
        onMove({ x: note.position.x + info.offset.x, y: note.position.y + info.offset.y });
      }}
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        boxShadow: "4px 8px 16px rgba(0,0,0,0.12)",
        zIndex: 10
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group absolute flex flex-col gap-2 ${activeTool === 'CONNECT' ? 'cursor-crosshair' : 'cursor-pointer'}`}
      style={{
        width: NOTE_WIDTH,
        backgroundColor: isDarkMode ? 'rgba(26,26,26,0.75)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: isDarkMode ? '#eee' : '#000',
        borderRadius: organicRadius,
        border: noteColor ? `2px solid ${noteColor}` : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`
      }}
    >
      {activeTool === 'SELECT' && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute -top-2 -right-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-black/10 dark:border-neutral-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/30 hover:scale-110 z-10 shadow-sm text-black dark:text-white"
          title="Delete Note"
        >
          <X size={12} />
        </button>
      )}

      {/* Note Content Container */}
      <div className="p-4 flex flex-col gap-2 pt-2">
        <div className="flex items-center justify-between border-b border-gray-100/30 dark:border-neutral-800/50 pb-2">
          <h3
            className="font-bold text-sm truncate pr-4 text-black/90 dark:text-white/90"
            dangerouslySetInnerHTML={{ __html: note.title || "Untitled" }}
          />
          <StickyNote size={14} className="text-gray-400 dark:text-neutral-600 flex-shrink-0" style={{ color: noteColor || undefined }} />
        </div>
        <p className="text-xs text-gray-600 dark:text-neutral-400 line-clamp-5 leading-relaxed min-h-[1.5em] font-medium">
          {previewText || (linkData ? "" : "No content.")}
        </p>

        {/* Tags */}
        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {note.tags.slice(0, 3).map(tag => {
              const tagColor = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: `${tagColor}20`,
                    color: tagColor,
                    border: `1px solid ${tagColor}40`
                  }}
                >
                  #{tag}
                </span>
              );
            })}
            {note.tags.length > 3 && (
              <span className="text-[10px] font-bold text-gray-400 dark:text-neutral-600">+{note.tags.length - 3}</span>
            )}
          </div>
        )}

        {linkData && (
          <div className="mt-2 flex items-center gap-2 bg-black/5 dark:bg-white/5 p-2 rounded border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <img
              src={`https://www.google.com/s2/favicons?domain=${linkData.hostname}&sz=32`}
              alt="favicon"
              className="w-4 h-4 rounded-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300 truncate flex-1">
              {linkData.hostname}
            </span>
            <ExternalLink size={10} className="text-gray-500 dark:text-gray-400" />
          </div>
        )}
      </div>

      {isConnectionSource && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded shadow-sm whitespace-nowrap"
          style={{ backgroundColor: noteColor || undefined }}
        >
          SOURCE SELECTED
        </motion.div>
      )}
    </motion.div>
  );
}