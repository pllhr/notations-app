
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

export const ContentBlock = React.memo<ContentBlockProps>(({
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
    let newHtml = e.currentTarget.innerHTML;

    // Clean up empty or broken anchor tags
    // Remove anchor tags with empty or whitespace-only content
    newHtml = newHtml.replace(/<a[^>]*>(\s*)<\/a>/gi, '$1');
    // Remove anchor tags with only formatting tags but no text
    newHtml = newHtml.replace(/<a[^>]*>(<(strong|em|span|b|i)[^>]*>\s*<\/\2>)*<\/a>/gi, '');

    // Platform links should be ATOMIC - any modification removes the entire link
    // These are platform links that should be deleted entirely if edited at all
    const platformLinkClasses = ['twitter-mention-link', 'youtube-link', 'instagram-link', 'github-link', 'linkedin-link', 'tiktok-link', 'spotify-link', 'reddit-link', 'generic-link'];

    // Create a temporary element to parse and clean the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newHtml;

    // Find all anchor tags and check if they're platform links that have been modified
    const anchors = tempDiv.querySelectorAll('a');
    anchors.forEach(anchor => {
      const classList = anchor.className;
      const isPlatformLink = platformLinkClasses.some(cls => classList.includes(cls));

      if (isPlatformLink) {
        // Check if the link structure is intact - platform links must have:
        // 1. A .link-logo span with an SVG inside
        // 2. A .link-text span 
        // 3. A strong tag inside .link-text
        // 4. A .link-separator span (the · character)
        // 5. A .link-platform span
        const hasLinkLogo = anchor.querySelector('.link-logo') !== null;
        const hasLinkText = anchor.querySelector('.link-text') !== null;
        const hasStrong = anchor.querySelector('.link-text strong') !== null;
        const hasSeparator = anchor.querySelector('.link-separator') !== null;
        const hasPlatform = anchor.querySelector('.link-platform') !== null;
        const hasSvg = anchor.querySelector('svg') !== null;

        // If ANY required component is missing, the link was edited - delete it entirely
        const isIntact = hasLinkLogo && hasLinkText && hasStrong && hasSeparator && hasPlatform && hasSvg;

        if (!isIntact) {
          // Remove the entire anchor - don't leave any text behind
          anchor.remove();
        }
      }
    });

    newHtml = tempDiv.innerHTML;

    // Remove twitter preview cards that are orphaned (outside of anchor)
    newHtml = newHtml.replace(/<div class="twitter-preview-card"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi, '');

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

  // Handle clicks on links inside contentEditable
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor && anchor.href) {
      e.preventDefault();
      e.stopPropagation();
      window.open(anchor.href, '_blank', 'noopener,noreferrer');
    }
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
      onClick={handleClick}
      onFocus={() => onFocus?.(id)}
      data-placeholder={placeholder}
      dangerouslySetInnerHTML={innerHTML}
    />
  );
});

ContentBlock.displayName = 'ContentBlock';
