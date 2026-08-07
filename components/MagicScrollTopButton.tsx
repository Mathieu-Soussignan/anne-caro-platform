'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MagicScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-full bg-[#23272C]/90 backdrop-blur-md border-2 border-[#F0E5D8]/40 text-[#F0E5D8] shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer flex items-center justify-center gap-2 group transition-colors hover:bg-[#F0E5D8] hover:text-[#181A1D] hover:border-[#F0E5D8] no-print"
          title="Remonter en haut de la page"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5] transition-transform group-hover:-translate-y-0.5" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline">Haut</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
