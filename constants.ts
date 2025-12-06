
import { Note, NoteBlock } from './types';

export const APP_NAME = "NOTATIONS";

export const NOTE_COLORS = [
  { id: 'default', value: '#000000', label: 'Black' },
  { id: 'red', value: '#ef4444', label: 'Red' },
  { id: 'orange', value: '#f97316', label: 'Orange' },
  { id: 'yellow', value: '#eab308', label: 'Yellow' },
  { id: 'green', value: '#22c55e', label: 'Green' },
  { id: 'blue', value: '#3b82f6', label: 'Blue' },
  { id: 'purple', value: '#a855f7', label: 'Purple' },
];

// Highlight colors for individual content blocks (vibrant, readable versions)
export const BLOCK_HIGHLIGHT_COLORS = [
  { id: 'none', value: 'transparent', label: 'No Highlight' },
  { id: 'red', value: 'rgba(239, 68, 68, 0.35)', label: 'Red' },
  { id: 'orange', value: 'rgba(249, 115, 22, 0.35)', label: 'Orange' },
  { id: 'yellow', value: 'rgba(250, 204, 21, 0.4)', label: 'Yellow' },
  { id: 'green', value: 'rgba(34, 197, 94, 0.35)', label: 'Green' },
  { id: 'blue', value: 'rgba(59, 130, 246, 0.35)', label: 'Blue' },
  { id: 'purple', value: 'rgba(168, 85, 247, 0.4)', label: 'Purple' },
  { id: 'pink', value: 'rgba(236, 72, 153, 0.35)', label: 'Pink' },
  { id: 'cyan', value: 'rgba(6, 182, 212, 0.35)', label: 'Cyan' },
];

export const MOCK_NOTES: Note[] = [
  {
    id: '1',
    title: 'Project Manifesto',
    blocks: [
      { id: 'b1', type: 'heading', content: 'The Vision' },
      { id: 'b2', type: 'paragraph', content: 'A unified interface for thought.' },
      { id: 'b3', type: 'todo', content: 'Integrate Gemini AI', checked: false }
    ],
    position: { x: 100, y: 100 },
    connections: ['2', '3'],
    color: '#000000',
    tags: ['vision', 'strategy'],
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Design System',
    blocks: [
      { id: 'b4', type: 'heading', content: 'Monochrome' },
      { id: 'b5', type: 'paragraph', content: 'Strict black and white palette. No greys unless necessary for hierarchy.' }
    ],
    position: { x: 400, y: 200 },
    connections: ['1'],
    color: '#3b82f6',
    tags: ['design', 'ui'],
    createdAt: Date.now()
  },
  {
    id: '3',
    title: 'Tech Stack',
    blocks: [
      { id: 'b6', type: 'paragraph', content: 'React, D3, Framer Motion, Google GenAI.' }
    ],
    position: { x: 200, y: 400 },
    connections: ['1'],
    color: '#ef4444',
    tags: ['dev', 'stack'],
    createdAt: Date.now()
  }
];