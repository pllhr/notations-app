
export enum ViewMode {
  EDITOR = 'EDITOR',
  CANVAS = 'CANVAS',
  GRAPH = 'GRAPH',
  SIEVE = 'SIEVE',
  ADMIN = 'ADMIN'
}

// Global Tag for management
export interface Tag {
  id: string;
  name: string;
  color: string;
  createdAt: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface NoteBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'todo' | 'bullet' | 'blockquote' | 'code' | 'image';
  content: string;
  checked?: boolean;
  highlightColor?: string; // Optional background/highlight color for the block
}

export interface Note {
  id: string;
  title: string;
  blocks: NoteBlock[];
  position: Point; // For Canvas view
  connections: string[]; // IDs of connected notes
  color?: string; // Hex code for note color
  tags?: string[]; // Array of tag strings
  createdAt: number;
}

export interface User {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: number;
  name?: string;
  image?: string;
}

// Manually defining d3 simulation types to avoid namespace errors if d3 types aren't global
export interface SimulationNodeDatum {
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface SimulationLinkDatum<NodeDatum> {
  source: string | number | NodeDatum;
  target: string | number | NodeDatum;
  index?: number;
}

export interface GraphNode extends SimulationNodeDatum {
  id: string;
  title: string;
  group: number;
  color?: string;
}

export interface GraphLink extends SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
}