'use client';

import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const MediaKitFooter: React.FC = () => {
  return (
    <footer className="bg-[#181A1D] border-t border-[#F0E5D8]/15 py-12 px-4 sm:px-8 text-center">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#F0E5D8] p-0.5 bg-[#23272C]">
            <img src={MEDIA_KIT_DATA.avatarUrl} alt={MEDIA_KIT_DATA.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-serif font-bold text-lg text-white">Media Kit Officiel • {MEDIA_KIT_DATA.name}</span>
        </div>

        <p className="text-xs text-[#9DA4B0] max-w-md mx-auto leading-relaxed">
          Dossier de Presse & Tarifs Partenariats de Marque. Données certifiées TikTok Creator Marketplace.
        </p>

        <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#9DA4B0] flex flex-wrap items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} {MEDIA_KIT_DATA.name} • @annecaroaction</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            Données Certifiées
          </span>
        </div>

      </div>
    </footer>
  );
};
