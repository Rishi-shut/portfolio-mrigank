'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button 
        className="search-orb" 
        aria-label="Search"
        onClick={() => setIsOpen(true)}
      >
        <Search size={20} strokeWidth={1.7} color="rgba(255,255,255,.62)" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="search-close" 
              onClick={() => setIsOpen(false)}
              aria-label="Close search"
            >
              <X size={24} color="white" />
            </button>

            <div className="search-content">
              <span className="mono-label">Search Archive [Ctrl+K]</span>
              <div className="search-input-wrap">
                <input 
                  ref={inputRef}
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="type command or project name..."
                  className="search-input"
                />
                <Search size={24} color="rgba(255,255,255,.4)" />
              </div>
              <div className="search-results">
                {query ? (
                  <div className="search-no-results">
                    <p className="mono-label">No matching nodes found for &ldquo;{query}&rdquo;</p>
                  </div>
                ) : (
                  <div className="search-suggestions">
                    <p className="mono-label">Try searching:</p>
                    <div className="search-suggestions-list">
                      <button onClick={() => setQuery('photobooth')} className="search-suggestion-btn">photobooth</button>
                      <button onClick={() => setQuery('skills')} className="search-suggestion-btn">skills</button>
                      <button onClick={() => setQuery('terminal')} className="search-suggestion-btn">terminal</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
