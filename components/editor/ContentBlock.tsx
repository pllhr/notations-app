
import React, { useRef, useEffect, useMemo } from 'react';

interface ContentBlockProps {
  id: string;
  html: string;
  tagName: string;
  className?: string;
  onChange: (id: string, html: string) => void;
  onKeyDown: (e: React.KeyboardEvent, id: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onFocus?: (id: string) => void;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  id,
  html,
  tagName,
  className = '',
  onChange,
  onKeyDown,
  placeholder,
  autoFocus,
  onFocus
}) => {
  const contentEditableRef = useRef<HTMLElement>(null);

  // 1. Track the content we believe is in the DOM (user's typing + external updates)
  const lastHtmlRef = useRef(html);

  // 2. Track the content we want React to use for rendering.
  // We separate this to control WHEN React updates the DOM.
  const renderHtmlRef = useRef(html);

  // 3. Reconcile Props vs Local State
  // If 'html' (prop) differs from 'lastHtmlRef' (local), it is an EXTERNAL change 
  // (like Undo, Redo, AI, or loading a new note). We must apply it.
  if (html !== lastHtmlRef.current) {
    lastHtmlRef.current = html;
    renderHtmlRef.current = html;
  }
  // If 'html' === 'lastHtmlRef', it is a LOOPBACK (User typed -> State updated -> Prop passed back).
  // We do NOT update 'renderHtmlRef' in this case.

  // 4. Memoize the innerHTML object.
  // React checks if props have changed. If we pass the exact same object reference 
  // for dangerouslySetInnerHTML, React skips the DOM update entirely.
  // We rely on 'renderHtmlRef.current' staying stable during loopbacks.
  const innerHTML = useMemo(() => ({ __html: renderHtmlRef.current }), [renderHtmlRef.current]);

  // Handle AutoFocus
  useEffect(() => {
    if (autoFocus && contentEditableRef.current) {
      contentEditableRef.current.focus();
      // Move cursor to end safely
      const range = document.createRange();
      const sel = window.getSelection();
      if (sel) {
        range.selectNodeContents(contentEditableRef.current);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }, [autoFocus]);

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    const newHtml = e.currentTarget.innerHTML;
    // Update local tracker immediately so next render knows it matches
    lastHtmlRef.current = newHtml;
    onChange(id, newHtml);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Rich Text Shortcuts
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey) {
      if (e.key === 'b') { e.preventDefault(); document.execCommand('bold'); }
      else if (e.key === 'i') { e.preventDefault(); document.execCommand('italic'); }
      else if (e.key === 'u') { e.preventDefault(); document.execCommand('underline'); }
    }
    onKeyDown(e, id);
  };

  const Tag = tagName as React.ElementType;

  return (
    <Tag
      ref={contentEditableRef}
      className={`outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300 ${className}`}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onFocus={() => onFocus?.(id)}
      data-placeholder={placeholder}
      dangerouslySetInnerHTML={innerHTML}
    />
  );
};
