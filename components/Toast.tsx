'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 bg-[#2C2623] text-white px-5 py-4 rounded-2xl shadow-2xl border border-[#D4A373]/30 flex items-center gap-3 max-w-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4A373]/20 flex items-center justify-center flex-shrink-0 text-[#D4A373]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 text-sm font-medium leading-snug">
            {message}
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
