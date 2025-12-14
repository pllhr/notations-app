import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { Note, GraphNode, GraphLink } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

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

interface ClusterCenter {
  x: number;
  y: number;
  tag: string;
  color: string;
  nodeCount: number;
}

interface EnhancedGraphNode extends GraphNode {
  z: number;
  breathPhase: number;
  clusterId: string;
  clusterX?: number;
  clusterY?: number;
  tags?: string[];
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

// Cluster colors palette
const CLUSTER_COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4',
  '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f43f5e'
];

export const GraphView: React.FC<GraphViewProps> = ({ notes, onNoteSelect, onDeleteNote, isDarkMode }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const simulationRef = useRef<d3.Simulation<EnhancedGraphNode, GraphLink> | null>(null);

  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Extract unique tags and create cluster mapping
  const clusterData = useMemo(() => {
    const tagMap = new Map<string, string[]>(); // tag -> noteIds

    // Helper to clean tag text
    const cleanTag = (tag: string): string => {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = tag;
      return (tmp.textContent || tmp.innerText || tag).trim();
    };

    notes.forEach(note => {
      if (note.tags && note.tags.length > 0) {
        // Use first tag as primary cluster (cleaned)
        const primaryTag = cleanTag(note.tags[0]);
        if (primaryTag && !tagMap.has(primaryTag)) {
          tagMap.set(primaryTag, []);
        }
        if (primaryTag) {
          tagMap.get(primaryTag)!.push(note.id);
        }
      }
    });

    // Create cluster array with positions
    const clusters: ClusterCenter[] = [];
    const tagArray = Array.from(tagMap.keys());
    const angleStep = (2 * Math.PI) / Math.max(tagArray.length, 1);

    tagArray.forEach((tag, i) => {
      clusters.push({
        tag,
        x: 0, // Will be set based on SVG dimensions
        y: 0,
        color: CLUSTER_COLORS[i % CLUSTER_COLORS.length],
        nodeCount: tagMap.get(tag)!.length
      });
    });

    return { tagMap, clusters };
  }, [notes]);

  // Get connected node IDs for hover effect
  const getConnectedNodes = useCallback((nodeId: string): Set<string> => {
    const connected = new Set<string>();
    connected.add(nodeId);

    notes.forEach(note => {
      if (note.id === nodeId) {
        note.connections.forEach(id => connected.add(id));
      }
      if (note.connections.includes(nodeId)) {
        connected.add(note.id);
      }
    });

    return connected;
  }, [notes]);

  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Breathing animation loop
  useEffect(() => {
    let startTime = performance.now();

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    // Neural color palette
    const bgColor = isDarkMode ? "#050508" : "#fafafa";

    // Calculate cluster positions in a circle
    const clusterRadius = Math.min(width, height) * 0.3;
    const { clusters, tagMap } = clusterData;

    clusters.forEach((cluster, i) => {
      const angle = (i / clusters.length) * 2 * Math.PI - Math.PI / 2;
      cluster.x = centerX + Math.cos(angle) * clusterRadius;
      cluster.y = centerY + Math.sin(angle) * clusterRadius;
    });

    // Create cluster lookup
    const clusterLookup = new Map<string, ClusterCenter>();
    clusters.forEach(c => clusterLookup.set(c.tag, c));

    // Helper to clean tag text
    const cleanTag = (tag: string): string => {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = tag;
      return (tmp.textContent || tmp.innerText || tag).trim();
    };

    // Transform notes to enhanced graph nodes
    const nodes: EnhancedGraphNode[] = notes.map((n, i) => {
      const rawTag = n.tags?.[0];
      const primaryTag = rawTag ? cleanTag(rawTag) : 'uncategorized';
      const cluster = clusterLookup.get(primaryTag);

      return {
        id: n.id,
        title: n.title,
        group: 1,
        x: cluster ? cluster.x + (Math.random() - 0.5) * 80 : centerX + (Math.random() - 0.5) * 200,
        y: cluster ? cluster.y + (Math.random() - 0.5) * 80 : centerY + (Math.random() - 0.5) * 200,
        z: 0.3 + Math.random() * 0.7,
        breathPhase: Math.random() * Math.PI * 2,
        clusterId: primaryTag,
        clusterX: cluster?.x || centerX,
        clusterY: cluster?.y || centerY,
        tags: n.tags,
        color: n.color || cluster?.color
      };
    });

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
      .style("background", `radial-gradient(ellipse at center, ${isDarkMode ? '#0a0a15' : '#f5f5ff'} 0%, ${bgColor} 100%)`);

    // Defs for filters
    const defs = svg.append("defs");

    // Glow filter for nodes
    const glowFilter = defs.append("filter")
      .attr("id", "neural-glow")
      .attr("x", "-100%")
      .attr("y", "-100%")
      .attr("width", "300%")
      .attr("height", "300%");

    glowFilter.append("feGaussianBlur")
      .attr("stdDeviation", "4")
      .attr("result", "blur");

    glowFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .join("feMergeNode")
      .attr("in", d => d);

    // Cluster glow filter
    const clusterFilter = defs.append("filter")
      .attr("id", "cluster-glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    clusterFilter.append("feGaussianBlur")
      .attr("stdDeviation", "20")
      .attr("result", "blur");

    // Synapse glow filter
    const synapseFilter = defs.append("filter")
      .attr("id", "synapse-glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    synapseFilter.append("feGaussianBlur")
      .attr("stdDeviation", "2")
      .attr("result", "blur");

    synapseFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .join("feMergeNode")
      .attr("in", d => d);

    // Custom cluster force
    const forceCluster = () => {
      const strength = 0.15;

      return (alpha: number) => {
        nodes.forEach(node => {
          if (node.clusterX !== undefined && node.clusterY !== undefined) {
            node.vx = (node.vx || 0) + (node.clusterX - (node.x || 0)) * strength * alpha;
            node.vy = (node.vy || 0) + (node.clusterY - (node.y || 0)) * strength * alpha;
          }
        });
      };
    };

    // Simulation with organic physics + clustering
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(80).strength(0.4))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(centerX, centerY).strength(0.05))
      .force("collide", d3.forceCollide().radius(35))
      .force("cluster", forceCluster())
      .velocityDecay(0.5)
      .alphaDecay(0.015);

    simulationRef.current = simulation;

    // Draw cluster backgrounds first
    const clusterGroup = svg.append("g").attr("class", "clusters");

    clusters.forEach(cluster => {
      // Cluster area glow
      clusterGroup.append("circle")
        .attr("class", "cluster-bg")
        .attr("cx", cluster.x)
        .attr("cy", cluster.y)
        .attr("r", 60 + cluster.nodeCount * 15)
        .attr("fill", cluster.color)
        .attr("opacity", 0.08)
        .attr("filter", "url(#cluster-glow)");

      // Cluster label
      clusterGroup.append("text")
        .attr("class", "cluster-label")
        .attr("x", cluster.x)
        .attr("y", cluster.y - 70 - cluster.nodeCount * 10)
        .attr("text-anchor", "middle")
        .attr("fill", cluster.color)
        .attr("opacity", 0.6)
        .style("font-family", "'Inter', sans-serif")
        .style("font-size", "11px")
        .style("font-weight", "700")
        .style("text-transform", "uppercase")
        .style("letter-spacing", "0.1em")
        .text(`#${cluster.tag}`);
    });

    // Connection lines group
    const linksGroup = svg.append("g").attr("class", "links");

    // Draw synapse lines
    const link = linksGroup.selectAll("g")
      .data(links)
      .join("g")
      .attr("class", "synapse");

    // Main connection line
    const linkPath = link.append("line")
      .attr("stroke", isDarkMode ? "rgba(100, 150, 255, 0.4)" : "rgba(80, 120, 200, 0.3)")
      .attr("stroke-width", 2)
      .attr("filter", "url(#synapse-glow)");

    // Animated particles on connections
    link.each(function () {
      const g = d3.select(this);

      g.append("line")
        .attr("class", "synapse-pulse")
        .attr("stroke", isDarkMode ? "rgba(150, 200, 255, 0.6)" : "rgba(100, 150, 255, 0.5)")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "4,8")
        .style("animation", `synapseFlow ${2 + Math.random()}s linear infinite`)
        .style("animation-delay", `${-Math.random() * 2}s`);
    });

    // Nodes group
    const nodesGroup = svg.append("g").attr("class", "nodes");

    // Draw nodes
    const node = nodesGroup.selectAll("g")
      .data(nodes.sort((a, b) => a.z - b.z))
      .join("g")
      .attr("cursor", "pointer")
      .attr("class", "neural-node")
      .call(d3.drag<SVGGElement, EnhancedGraphNode>()
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
      })
      .on("mouseenter", (event, d) => {
        setHoveredNodeId(d.id);
        setHoveredCluster(d.clusterId);
      })
      .on("mouseleave", () => {
        setHoveredNodeId(null);
        setHoveredCluster(null);
      });

    // Outer glow circle (breathing)
    node.append("circle")
      .attr("class", "node-glow")
      .attr("r", 20)
      .attr("fill", d => {
        const clusterColor = clusterLookup.get(d.clusterId)?.color;
        return d.color && d.color !== '#000000' ? d.color : (clusterColor || (isDarkMode ? '#6088ff' : '#4070e0'));
      })
      .attr("opacity", 0.2)
      .attr("filter", "url(#neural-glow)");

    // Main node circle
    node.append("circle")
      .attr("class", "node-core")
      .attr("r", d => 8 + d.z * 4)
      .attr("fill", d => {
        const clusterColor = clusterLookup.get(d.clusterId)?.color;
        return d.color && d.color !== '#000000' ? d.color : (clusterColor || (isDarkMode ? '#90b0ff' : '#4080e0'));
      })
      .attr("stroke", isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)")
      .attr("stroke-width", 1.5);

    // Inner highlight
    node.append("circle")
      .attr("class", "node-highlight")
      .attr("r", d => 3 + d.z * 2)
      .attr("cx", -2)
      .attr("cy", -2)
      .attr("fill", "rgba(255,255,255,0.4)");

    // Labels
    node.append("text")
      .attr("x", d => 12 + d.z * 4)
      .attr("y", 4)
      .text(d => stripHtml(d.title || "Untitled"))
      .style("font-family", "'Inter', sans-serif")
      .style("font-size", d => `${10 + d.z * 3}px`)
      .style("font-weight", "600")
      .style("letter-spacing", "0.02em")
      .attr("fill", isDarkMode ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)")
      .style("filter", d => `blur(${(1 - d.z) * 0.5}px)`)
      .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)")
      .attr("stroke-width", 3)
      .style("filter", "none");

    // Tick function with breathing animation
    simulation.on("tick", () => {
      const t = performance.now() / 1000;

      // Update links
      linkPath
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      link.selectAll(".synapse-pulse")
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      // Update nodes with breathing effect
      node.attr("transform", (d: any) => {
        const breathScale = 1 + Math.sin(t * 1.5 + d.breathPhase) * 0.08;
        return `translate(${d.x},${d.y}) scale(${breathScale})`;
      });

      // Update glow intensity
      node.selectAll(".node-glow")
        .attr("opacity", (d: any) => 0.15 + Math.sin(t * 1.5 + d.breathPhase) * 0.1);
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
      if (!event.active) simulation.alphaTarget(0.01);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [notes, onNoteSelect, isDarkMode, clusterData]);

  // Apply hover focus effect
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const connectedNodes = hoveredNodeId ? getConnectedNodes(hoveredNodeId) : null;

    // Update node opacity based on focus
    svg.selectAll(".neural-node")
      .transition()
      .duration(200)
      .style("opacity", (d: any) => {
        if (!hoveredNodeId) return 1;
        return connectedNodes?.has(d.id) ? 1 : 0.15;
      });

    // Update link opacity
    svg.selectAll(".synapse")
      .transition()
      .duration(200)
      .style("opacity", (d: any) => {
        if (!hoveredNodeId) return 1;
        const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
        const targetId = typeof d.target === 'object' ? d.target.id : d.target;
        return (sourceId === hoveredNodeId || targetId === hoveredNodeId) ? 1 : 0.1;
      });

    // Highlight cluster on hover
    svg.selectAll(".cluster-bg")
      .transition()
      .duration(300)
      .attr("opacity", function (this: any) {
        if (!hoveredCluster) return 0.08;
        const circle = d3.select(this);
        // Check if this cluster matches by comparing position
        return 0.15;
      });

  }, [hoveredNodeId, hoveredCluster, getConnectedNodes]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* CSS for synapse animation */}
      <style>{`
        @keyframes synapseFlow {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        
        .neural-node {
          transition: filter 0.3s ease;
        }
        
        .neural-node:hover .node-core {
          filter: brightness(1.3) drop-shadow(0 0 8px currentColor);
        }
        
        .synapse-pulse {
          pointer-events: none;
        }
        
        .cluster-label {
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <svg ref={svgRef} className="w-full h-full block" />

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-24 left-28 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-gray-200/50 dark:border-neutral-700/50 max-w-[180px]"
      >
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-neutral-400 mb-3">Clusters</h3>
        <div className="flex flex-col gap-2">
          {clusterData.clusters.map(cluster => (
            <div key={cluster.tag} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: cluster.color }}
              />
              <span className="text-xs font-medium text-gray-700 dark:text-neutral-300">
                #{cluster.tag}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-neutral-500">
                ({cluster.nodeCount})
              </span>
            </div>
          ))}
          {clusterData.clusters.length === 0 && (
            <span className="text-xs text-gray-400 dark:text-neutral-500 italic">
              No tags yet
            </span>
          )}
        </div>
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 shadow-xl rounded-lg text-xs font-bold tracking-widest pointer-events-none uppercase"
      >
        Neural Graph
      </motion.div>

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ top: contextMenu.y, left: contextMenu.x }}
            className="fixed z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-gray-200 dark:border-neutral-700 shadow-2xl rounded-xl p-1 min-w-[140px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                onDeleteNote(contextMenu.nodeId);
                setContextMenu(null);
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg"
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