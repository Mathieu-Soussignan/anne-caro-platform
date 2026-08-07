'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, CheckCircle2, Play, Building2, ExternalLink } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const BrandReferencesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4">
          <Building2 className="w-4 h-4 text-[#F0E5D8]" />
          <span>Case Studies & Formats Viraux</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#F0E5D8] mb-4 leading-tight">
          Exemples de Réalisations 🎬
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed">
          Découvrez la force d'intégration d'Anne-Caro dans ses séries cultes à fort impact communautaire.
        </p>
      </div>

      {/* Skits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MEDIA_KIT_DATA.skits.map((skit) => (
          <motion.div
            key={skit.id}
            whileHover={{ y: -6 }}
            className="bg-[#23272C] rounded-3xl overflow-hidden border border-[#F0E5D8]/15 shadow-xl group flex flex-col justify-between"
          >
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full bg-[#181A1D] overflow-hidden">
                <img
                  src={skit.thumbnailUrl}
                  alt={skit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute top-3 left-3 bg-[#181A1D]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#F0E5D8] border border-white/10">
                  {skit.category}
                </div>
                <div className="absolute top-3 right-3 bg-[#10B981] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                  {skit.views}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif font-bold text-lg text-white leading-snug">
                  {skit.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-mono text-[#9DA4B0]">
                  <span>Engagement : <strong className="text-[#F0E5D8]">{skit.engagementRate || '8.5%'}</strong></span>
                  <span>Partages : <strong className="text-white">{skit.shares || '18K'}</strong></span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={skit.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-xs py-3 px-4 flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#F0E5D8]" />
                <span>Voir la vidéo sur TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9DA4B0]" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};
