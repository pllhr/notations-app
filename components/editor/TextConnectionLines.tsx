'use client';

import React, { useEffect, useRef, useMemo, useState } from 'react';
import { NoteBlock, TextConnection } from '../../types';

interface TextConnectionLinesProps {
    blocks: NoteBlock[];
    containerRef: React.RefObject<HTMLDivElement | null>;
}

interface ConnectionData {
    id: string;
    sourceY: number;
    targetY: number;
    color: string;
}

export const TextConnectionLines: React.FC<TextConnectionLinesProps> = ({
    blocks,
    containerRef
}) => {
    const [connections, setConnections] = useState<ConnectionData[]>([]);
    const [containerHeight, setContainerHeight] = useState(0);
    const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastUpdateRef = useRef<number>(0);

    // Collect all connections from blocks
    const allConnections = useMemo(() => {
        const result: { connection: TextConnection; blockId: string }[] = [];
        blocks.forEach(block => {
            if (block.textConnections && block.textConnections.length > 0) {
                block.textConnections.forEach(conn => {
                    result.push({ connection: conn, blockId: block.id });
                });
            }
        });
        return result;
    }, [blocks]);

    // Find text position within a block - returns Y coordinate
    const findTextPosition = (blockEl: HTMLElement, searchText: string): number | null => {
        if (!searchText || !blockEl) return null;

        // Normalize search text
        const normalizedSearch = searchText.trim().toLowerCase();

        try {
            const walker = document.createTreeWalker(blockEl, NodeFilter.SHOW_TEXT, null);
            let node: Text | null;
            let bestMatch: { y: number; score: number } | null = null;

            while ((node = walker.nextNode() as Text | null)) {
                const text = node.textContent || '';
                const normalizedText = text.toLowerCase();

                // Try exact match first
                let index = text.indexOf(searchText);

                // Try case-insensitive match
                if (index === -1) {
                    index = normalizedText.indexOf(normalizedSearch);
                }

                // Try partial match (first 10 chars)
                if (index === -1 && normalizedSearch.length > 10) {
                    const partialSearch = normalizedSearch.slice(0, 10);
                    index = normalizedText.indexOf(partialSearch);
                }

                if (index !== -1) {
                    try {
                        const range = document.createRange();
                        const endIndex = Math.min(index + searchText.length, text.length);
                        range.setStart(node, index);
                        range.setEnd(node, endIndex);
                        const rect = range.getBoundingClientRect();

                        if (rect.height > 0) {
                            const y = rect.top + rect.height / 2;
                            // Exact match gets higher score
                            const score = text.indexOf(searchText) !== -1 ? 100 : 50;

                            if (!bestMatch || score > bestMatch.score) {
                                bestMatch = { y, score };
                            }
                        }
                    } catch (e) {
                        // Range creation failed, continue
                    }
                }
            }

            if (bestMatch) {
                return bestMatch.y;
            }

            // Fallback: use block's vertical center
            const blockRect = blockEl.getBoundingClientRect();
            if (blockRect.height > 0) {
                return blockRect.top + blockRect.height / 2;
            }
        } catch (error) {
            console.warn('Error finding text position:', error);
        }

        return null;
    };

    // Update connection positions
    const updateConnections = () => {
        const container = containerRef.current;
        if (!container || allConnections.length === 0) {
            setConnections([]);
            return;
        }

        const containerRect = container.getBoundingClientRect();
        setContainerHeight(container.scrollHeight);

        const newConnections: ConnectionData[] = [];

        allConnections.forEach((item) => {
            const { connection, blockId } = item;

            const sourceBlockEl = document.getElementById(`block-${blockId}`);
            const targetBlockEl = document.getElementById(`block-${connection.targetBlockId}`);

            if (!sourceBlockEl || !targetBlockEl) return;

            const sourceY = findTextPosition(sourceBlockEl, connection.sourceText);
            const targetY = findTextPosition(targetBlockEl, connection.targetText);

            if (sourceY === null || targetY === null) return;

            // Convert to container-relative positions
            const relativeSourceY = sourceY - containerRect.top + container.scrollTop;
            const relativeTargetY = targetY - containerRect.top + container.scrollTop;

            newConnections.push({
                id: connection.id,
                sourceY: relativeSourceY,
                targetY: relativeTargetY,
                color: connection.color
            });
        });

        setConnections(newConnections);
    };

    // Debounced update
    const scheduleUpdate = () => {
        const now = Date.now();
        // Throttle updates to max once per 200ms
        if (now - lastUpdateRef.current < 200) {
            if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
            updateTimeoutRef.current = setTimeout(() => {
                lastUpdateRef.current = Date.now();
                updateConnections();
            }, 200);
            return;
        }

        lastUpdateRef.current = now;
        updateConnections();
    };

    // Initial draw and updates
    useEffect(() => {
        // Initial delay for DOM to be ready
        const initialTimeout = setTimeout(updateConnections, 300);

        return () => {
            clearTimeout(initialTimeout);
            if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
        };
    }, []);

    // Redraw when blocks change
    useEffect(() => {
        scheduleUpdate();
    }, [allConnections]);

    // Handle scroll and resize
    useEffect(() => {
        const handleScroll = () => scheduleUpdate();

        window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll, { capture: true });
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Don't render if no connections
    if (connections.length === 0) return null;

    const MARGIN_OFFSET = 24;
    const LINE_SPACING = 12;

    return (
        <svg
            aria-hidden="true"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: containerHeight || '100%',
                pointerEvents: 'none',
                zIndex: 10,
                overflow: 'visible',
            }}
        >
            <defs>
                <style>{`
                    .conn-path {
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                    }
                    .conn-dot {
                        transition: r 0.2s ease;
                    }
                `}</style>
            </defs>

            {/* Render paths first */}
            {connections.map((conn, index) => {
                const marginX = -(MARGIN_OFFSET + (index * LINE_SPACING));
                const sourceEdge = 8;

                // Create smooth bezier path
                const path = `M ${sourceEdge} ${conn.sourceY} 
                              H ${marginX + 10} 
                              Q ${marginX} ${conn.sourceY} ${marginX} ${conn.sourceY + 10}
                              V ${conn.targetY - 10}
                              Q ${marginX} ${conn.targetY} ${marginX + 10} ${conn.targetY}
                              H ${sourceEdge}`;

                return (
                    <g key={conn.id}>
                        {/* Glow effect */}
                        <path
                            d={path}
                            className="conn-path"
                            stroke={conn.color}
                            strokeWidth={4}
                            opacity={0.2}
                            style={{ filter: `blur(4px)` }}
                        />

                        {/* Main line */}
                        <path
                            d={path}
                            className="conn-path"
                            stroke={conn.color}
                            strokeWidth={2}
                            opacity={0.8}
                        />
                    </g>
                );
            })}

            {/* Render dots separately with deduplication */}
            {(() => {
                // Collect all unique dot positions
                const dotMap = new Map<string, { y: number; color: string }>();

                connections.forEach((conn) => {
                    // Use rounded Y to prevent near-duplicate dots
                    const sourceKey = `${Math.round(conn.sourceY)}`;
                    const targetKey = `${Math.round(conn.targetY)}`;

                    // Only add if not already exists (first color wins)
                    if (!dotMap.has(sourceKey)) {
                        dotMap.set(sourceKey, { y: conn.sourceY, color: conn.color });
                    }
                    if (!dotMap.has(targetKey)) {
                        dotMap.set(targetKey, { y: conn.targetY, color: conn.color });
                    }
                });

                const sourceEdge = 8;

                return Array.from(dotMap.entries()).map(([key, dot]) => (
                    <circle
                        key={`dot-${key}`}
                        cx={sourceEdge - 2}
                        cy={dot.y}
                        r={5}
                        fill={dot.color}
                        className="conn-dot"
                        style={{ filter: `drop-shadow(0 0 3px ${dot.color})` }}
                    />
                ));
            })()}
        </svg>
    );
};
