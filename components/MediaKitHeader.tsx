'use client';

import React from 'react';
import { Download, Send, ShieldCheck, Globe } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const MediaKitHeader: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#181A1D]/95 backdrop-blur-md border-b border-[#F0E5D8]/15 px-3 sm:px-8 py-3 transition-all no-print w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#F0E5D8] p-0.5 bg-[#23272C] shadow-md shrink-0">
            <img
              src={MEDIA_KIT_DATA.avatarUrl}
              alt={MEDIA_KIT_DATA.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-xs sm:text-base text-[#F0E5D8] flex items-center gap-1 truncate">
              <span className="truncate">{MEDIA_KIT_DATA.name}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
            </div>
            <div className="text-[9px] sm:text-xs font-mono text-[#9DA4B0] truncate hidden xs:block">
              {MEDIA_KIT_DATA.handle}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Link to Official Site annecaroaction.fr (Desktop/Tablet) */}
          <a
            href={MEDIA_KIT_DATA.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2 px-3 hidden lg:inline-flex items-center gap-1.5 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Site Officiel</span>
          </a>

          {/* PDF Download Button (Hidden on tiny mobile, shown sm+) */}
          <button
            onClick={handleDownloadPDF}
            className="btn-secondary text-[11px] sm:text-xs py-2 px-2.5 sm:px-4 hidden sm:inline-flex items-center gap-1.5 shadow-sm print-keep"
            title="Télécharger le Dossier de Presse en PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#F0E5D8]" />
            <span>PDF HD</span>
          </button>

          {/* Direct Brand Inquiry Button */}
          <button
            onClick={scrollToContact}
            className="btn-primary text-xs py-2 px-3.5 sm:px-5 inline-flex items-center gap-1.5 shadow-lg print-keep shrink-0 whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5 text-[#181A1D]" />
            <span className="hidden sm:inline">Demander un Devis</span>
            <span className="sm:hidden">Devis</span>
          </button>

        </div>

      </div>
    </header>
  );
};
