import React from 'react';
import { Trash2 } from 'lucide-react';

interface ImageBlockProps {
    id: string;
    src: string;
    onDelete?: (id: string) => void;
    className?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ id, src, onDelete, className = '' }) => {
    return (
        <div className={`relative group/image ${className} my-4`}>
            <img
                src={src}
                alt="Note attachment"
                className="max-w-full rounded-lg border border-gray-200 dark:border-neutral-800 shadow-sm"
            />
            {onDelete && (
                <button
                    onClick={() => onDelete(id)}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/80 hover:bg-red-500 hover:text-white rounded-full text-gray-600 dark:text-gray-300 transition-all opacity-0 group-hover/image:opacity-100 backdrop-blur-sm"
                    title="Remove image"
                >
                    <Trash2 size={16} />
                </button>
            )}
        </div>
    );
};
