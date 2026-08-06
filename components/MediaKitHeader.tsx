'use client';

import React from 'react';
import { Mail, FileText } from 'lucide-react';

export const MediaKitHeader: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 glass-header px-4 sm:px-8 py-3 transition-all border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Brand Press Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] text-[#FAF7F2] flex items-center justify-center font-serif text-base sm:text-lg font-bold shadow-md flex-shrink-0">
            AC
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-serif text-base sm:text-xl font-bold tracking-tight text-[#1A1A1A]">
              ANNE-CARO
              <span className="text-[9px] sm:text-[10px] font-sans font-extrabold uppercase tracking-widest bg-[#1A1A1A] text-white px-2 py-0.5 rounded-full">
                MEDIA KIT
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#6E6763] font-medium tracking-wide">TikTok Press Deck • 2026</p>
          </div>
        </div>

        {/* Navigation Quick Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#6E6763]">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#1A1A1A] transition-colors">
            À Propos
          </button>
          <button onClick={() => scrollToSection('audience')} className="hover:text-[#1A1A1A] transition-colors">
            Audience & Stats
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#1A1A1A] transition-colors">
            Offres & Formats
          </button>
          <button onClick={() => scrollToSection('case-studies')} className="hover:text-[#1A1A1A] transition-colors">
            Concepts Viraux
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#1A1A1A] transition-colors text-[#C58B5C]">
            Contact Pro
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleDownloadPDF}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#1A1A1A] border border-[#EBE4DC] hover:border-[#C58B5C] transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#C58B5C]" />
            <span>Fiche PDF</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-xs font-bold py-2 sm:py-2.5 px-3.5 sm:px-5"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="hidden sm:inline">Demande de devis</span>
            <span className="sm:hidden">Devis</span>
          </button>
        </div>

      </div>
    </header>
  );
};
