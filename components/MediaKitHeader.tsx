'use client';

import React from 'react';
import { Download, Send, ShieldCheck } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const MediaKitHeader: React.FC = () => {
  const handleDownloadPDF = () => {
    // Print window with exact Executive PDF styling
    window.print();
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#181A1D]/90 backdrop-blur-md border-b border-[#F0E5D8]/15 px-4 sm:px-8 py-3.5 transition-all no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F0E5D8] p-0.5 bg-[#23272C] shadow-md shrink-0">
            <img
              src={MEDIA_KIT_DATA.avatarUrl}
              alt={MEDIA_KIT_DATA.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="font-serif font-bold text-sm sm:text-base text-[#F0E5D8] flex items-center gap-1.5">
              <span>{MEDIA_KIT_DATA.name}</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#9DA4B0]">
              Media Kit Officiel • {MEDIA_KIT_DATA.handle}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* PDF Download Button */}
          <button
            onClick={handleDownloadPDF}
            className="btn-secondary text-xs py-2 px-3.5 sm:px-4 hidden sm:inline-flex items-center gap-1.5 shadow-sm print-keep"
            title="Télécharger le Dossier de Presse en PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#F0E5D8]" />
            <span>PDF Executive HD</span>
          </button>

          {/* Direct Brand Inquiry Button */}
          <button
            onClick={scrollToContact}
            className="btn-primary text-xs py-2 px-4 sm:px-5 inline-flex items-center gap-1.5 shadow-lg print-keep"
          >
            <Send className="w-3.5 h-3.5 text-[#181A1D]" />
            <span>Demander un Devis</span>
          </button>

        </div>

      </div>
    </header>
  );
};
