import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Note, GraphNode, GraphLink } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';
import { Trash2, X } from 'lucide-react';

interface GraphViewProps {
  notes: Note[];
  onNoteSelect: (noteId: string) => void;
  onDeleteNote: (noteId: string) => void;
  isDarkMode: boolean;
}

interface ContextMenuState {
  x: number;
  y: number;
  nodeId: string;
}

export const GraphView: React.FC<GraphViewProps> = ({ notes, onNoteSelect, onDeleteNote, isDarkMode }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Colors
    const bgColor = isDarkMode ? "#0a0a0a" : "#fff";
    const defaultNodeColor = isDarkMode ? "#ffffff" : "#000000";
    const strokeColor = isDarkMode ? "#404040" : "#e5e5e5";
    const textStrokeColor = isDarkMode ? "#0a0a0a" : "#fff";
    const nodeStrokeColor = isDarkMode ? "#0a0a0a" : "#fff";

    // Transform notes to graph data
    const nodes: GraphNode[] = notes.map(n => ({
      id: n.id,
      title: n.title,
      group: 1,
      x: Math.random() * width,
      y: Math.random() * height,
      color: n.color
    }));

    const links: GraphLink[] = [];
    notes.forEach(source => {
      source.connections.forEach(targetId => {
        if (notes.find(n => n.id === targetId)) {
          links.push({ source: source.id, target: targetId });
        }
      });
    });

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("background-color", bgColor);

    // Simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(40));

    // Draw Lines
    const link = svg.append("g")
      .attr("stroke", strokeColor)
      .attr("stroke-opacity", 0.8)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2);

    // Draw Nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(d3.drag<SVGGElement, GraphNode>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any)
      .on("click", (event, d) => {
        event.stopPropagation();
        onNoteSelect(d.id);
      })
      .on("contextmenu", (event, d) => {
        event.preventDefault();
        event.stopPropagation();
        setContextMenu({
          x: event.pageX,
          y: event.pageY,
          nodeId: d.id
        });
      });

    // Circle
    node.append("circle")
      .attr("r", 10)
      .attr("fill", d => d.color && d.color !== '#000000' ? d.color : defaultNodeColor)
      .attr("stroke", nodeStrokeColor)
      .attr("stroke-width", 2);

    // Labels
    node.append("text")
      .attr("x", 14)
      .attr("y", 4)
      .text(d => stripHtml(d.title || "Untitled"))
      .style("font-family", "Inter")
      .style("font-size", "12px")
      .style("font-weight", "500")
      .attr("fill", isDarkMode ? "#eee" : "#000")
      .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", textStrokeColor)
      .attr("stroke-width", 3);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [notes, onNoteSelect, isDarkMode]);

  return (
    <div className="w-full h-full relative">
      <svg ref={svgRef} className="w-full h-full block transition-colors duration-300" />
      <div className="absolute bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black px-4 py-2 shadow-xl rounded-none text-xs font-bold pointer-events-none">
        KNOWLEDGE GRAPH
      </div>

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ top: contextMenu.y, left: contextMenu.x }}
            className="fixed z-50 bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] p-1 min-w-[120px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                onDeleteNote(contextMenu.nodeId);
                setContextMenu(null);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors uppercase tracking-wide"
            >
              <Trash2 size={14} />
              Delete Note
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};