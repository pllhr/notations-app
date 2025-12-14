import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Download, Maximize2, X, Loader2, ImageOff, ZoomIn, Copy, Check } from 'lucide-react';

interface ImageBlockProps {
    id: string;
    src: string;
    onDelete?: (id: string) => void;
    className?: string;
    isLoading?: boolean;
}

export const ImageBlock = React.memo<ImageBlockProps>(({ id, src, onDelete, className = '', isLoading = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const [copied, setCopied] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    // Determine if this is a blob URL (local preview)
    const isLocalPreview = src.startsWith('blob:');

    const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
        setImageLoaded(true);
        setImageError(false);
        const img = e.currentTarget;
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    }, []);

    const handleError = useCallback(() => {
        setImageLoaded(true);
        setImageError(true);
    }, []);

    const handleDownload = useCallback(() => {
        const link = document.createElement('a');
        link.href = src;
        link.download = `image-${id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [src, id]);

    const handleCopyUrl = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(src);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error('Failed to copy URL', e);
        }
    }, [src]);

    // Close fullscreen on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen]);

    // Error state
    if (imageError) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative my-4 ${className}`}
            >
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl">
                    <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                        <ImageOff size={24} className="text-red-500" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-red-700 dark:text-red-300">Failed to load image</p>
                        <p className="text-xs text-red-500 dark:text-red-400 truncate max-w-[300px]">{src}</p>
                    </div>
                    {onDelete && (
                        <button
                            onClick={() => onDelete(id)}
                            className="p-2 hover:bg-red-200 dark:hover:bg-red-800/50 rounded-lg transition-colors"
                            title="Remove"
                        >
                            <Trash2 size={16} className="text-red-600" />
                        </button>
                    )}
                </div>
            </motion.div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative group/image my-4 ${className}`}
                onMouseEnter={() => setShowActions(true)}
                onMouseLeave={() => setShowActions(false)}
            >
                {/* Container with aspect ratio preservation */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-900 dark:to-neutral-950 border border-gray-200/50 dark:border-neutral-800">

                    {/* Loading skeleton */}
                    <AnimatePresence>
                        {(!imageLoaded || isLoading || isLocalPreview) && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 z-10"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    {isLocalPreview && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Loader2 size={28} className="text-blue-500" />
                                        </motion.div>
                                    )}
                                    <div className="relative w-32 h-1 bg-gray-300 dark:bg-neutral-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: isLocalPreview ? "60%" : "100%" }}
                                            transition={{ duration: isLocalPreview ? 1 : 0.3 }}
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 dark:text-neutral-500">
                                        {isLocalPreview ? "Uploading..." : "Loading..."}
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main image */}
                    <motion.img
                        src={src}
                        alt="Note attachment"
                        className="w-full h-auto max-h-[500px] object-contain cursor-zoom-in"
                        loading="lazy"
                        onLoad={handleLoad}
                        onError={handleError}
                        onClick={() => setIsFullscreen(true)}
                        initial={{ filter: "blur(10px)" }}
                        animate={{ filter: imageLoaded ? "blur(0px)" : "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Gradient overlay on hover */}
                    <AnimatePresence>
                        {showActions && imageLoaded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    {/* Action buttons */}
                    <AnimatePresence>
                        {showActions && imageLoaded && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-3 right-3 flex gap-2"
                            >
                                <button
                                    onClick={() => setIsFullscreen(true)}
                                    className="p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110"
                                    title="View fullscreen"
                                >
                                    <Maximize2 size={16} />
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110"
                                    title="Download"
                                >
                                    <Download size={16} />
                                </button>
                                <button
                                    onClick={handleCopyUrl}
                                    className="p-2 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-lg text-gray-700 dark:text-gray-200 transition-all shadow-lg backdrop-blur-sm hover:scale-110"
                                    title="Copy URL"
                                >
                                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                </button>
                                {onDelete && (
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="p-2 bg-red-500/90 hover:bg-red-600 rounded-lg text-white transition-all shadow-lg backdrop-blur-sm hover:scale-110"
                                        title="Remove image"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Image dimensions badge */}
                    <AnimatePresence>
                        {showActions && imageLoaded && imageDimensions.width > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] font-mono text-white/80"
                            >
                                {imageDimensions.width} × {imageDimensions.height}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Zoom hint */}
                    <AnimatePresence>
                        {showActions && imageLoaded && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] font-medium text-white/80"
                            >
                                <ZoomIn size={12} />
                                Click to expand
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Fullscreen modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                        onClick={() => setIsFullscreen(false)}
                    >
                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onClick={() => setIsFullscreen(false)}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110"
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Fullscreen image */}
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            src={src}
                            alt="Note attachment"
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Dimensions in fullscreen */}
                        {imageDimensions.width > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-mono text-white/80"
                            >
                                {imageDimensions.width} × {imageDimensions.height}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
});

ImageBlock.displayName = 'ImageBlock';
