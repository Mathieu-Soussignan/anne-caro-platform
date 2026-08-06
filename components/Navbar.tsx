'use client';

import React from 'react';
import { Sparkles, ShoppingBag, Briefcase, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeMode: 'b2c' | 'b2b';
  setActiveMode: (mode: 'b2c' | 'b2b') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeMode, setActiveMode }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-header px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-full bg-[#2C2623] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-bold shadow-md group-hover:scale-105 transition-transform">
            AC
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-serif text-xl font-bold tracking-tight text-[#2C2623]">
              Anne-Caro
              <CheckCircle2 className="w-4 h-4 text-[#C58B5C] fill-[#C58B5C]/20" />
            </div>
            <p className="text-[11px] text-[#6E6763] font-medium tracking-wide">@annecaroaction • TikTok Creator</p>
          </div>
        </div>

        {/* Dynamic Mode Switcher */}
        <div className="bg-[#F4ECE4] p-1.5 rounded-full border border-[#EBE4DC] flex items-center gap-1 shadow-inner">
          <button
            onClick={() => {
              setActiveMode('b2c');
              scrollToSection('pepites');
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeMode === 'b2c'
                ? 'bg-[#2C2623] text-white shadow-lg scale-[1.02]'
                : 'text-[#6E6763] hover:text-[#2C2623]'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-[#D4A373]" />
            <span>Espace Fan / Shopping</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('b2b');
              scrollToSection('mediakit');
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeMode === 'b2b'
                ? 'bg-[#2C2623] text-white shadow-lg scale-[1.02]'
                : 'text-[#6E6763] hover:text-[#2C2623]'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#D4A373]" />
            <span>Espace Marque / Media Kit</span>
          </button>
        </div>

        {/* Navigation Quick Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#6E6763]">
          <button onClick={() => scrollToSection('pepites')} className="hover:text-[#2C2623] transition-colors">
            Pépites & Offres
          </button>
          <button onClick={() => scrollToSection('mediakit')} className="hover:text-[#2C2623] transition-colors">
            Statistiques
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-[#2C2623] transition-colors text-[#C58B5C] bg-[#C58B5C]/10 px-3 py-1.5 rounded-full border border-[#C58B5C]/20"
          >
            Partenariat 💼
          </button>
        </nav>

      </div>
    </header>
  );
};
