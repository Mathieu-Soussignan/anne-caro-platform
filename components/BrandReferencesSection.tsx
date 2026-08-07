'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Building2, ExternalLink, Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const BrandReferencesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15 overflow-x-hidden w-full break-inside-avoid">
      
      {/* Header without AI emojis */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4 whitespace-nowrap">
          <Building2 className="w-3.5 h-3.5 text-[#F0E5D8]" />
          <span>Case Studies & Formats Viraux</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-[#F0E5D8] mb-3 leading-tight break-words max-w-full">
          Exemples de Réalisations
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed max-w-2xl mx-auto font-normal">
          Découvrez la force d'intégration d'Anne-Caro dans ses séries cultes à fort impact communautaire.
        </p>
      </div>

      {/* TikTok Smartphone Player Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 skit-grid-print gap-6 sm:gap-10">
        {MEDIA_KIT_DATA.skits.map((skit) => (
          <motion.div
            key={skit.id}
            whileHover={{ y: -6 }}
            className="bg-[#23272C] rounded-3xl p-4 sm:p-6 border border-[#F0E5D8]/15 shadow-2xl flex flex-col justify-between group overflow-hidden max-w-full break-inside-avoid"
          >
            <div>
              {/* Realistic TikTok Smartphone Frame with Print max-height constraint */}
              <div className="relative w-full aspect-[9/16] skit-phone-print rounded-[24px] bg-[#181A1D] border-2 border-[#353B43] shadow-2xl overflow-hidden mb-4">
                
                {/* Photo with Object Cover Top framing */}
                <img
                  src={skit.thumbnailUrl}
                  alt={skit.title}
                  className="w-full h-full object-cover object-top filter brightness-95"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 bg-[#181A1D]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-[#F0E5D8] border border-white/10 z-20">
                  {skit.category}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-[#10B981] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full shadow-md z-20">
                  {skit.views}
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current text-white translate-x-0.5" />
                  </div>
                </div>

                {/* TikTok UI Elements */}
                <div className="absolute right-2 bottom-10 flex flex-col items-center gap-2.5 text-white z-20">
                  <div className="w-6 h-6 rounded-full border border-white overflow-hidden">
                    <img src="/images/Anne-caro-logo.jpeg" alt="Anne-Caro" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span className="text-[8px] font-bold font-mono">{skit.engagementRate || '8.5%'}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span className="text-[8px] font-bold font-mono">{skit.shares || '18K'}</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-black border border-white/40 flex items-center justify-center animate-spin-slow">
                    <Music className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute left-2.5 bottom-2.5 right-10 text-white z-20 space-y-0.5">
                  <div className="text-[10px] font-bold font-mono">@annecaroaction</div>
                  <div className="text-[9px] text-white/80 line-clamp-1">
                    {skit.title}
                  </div>
                </div>

              </div>

              {/* Title & Stats */}
              <div className="space-y-1.5 mb-3 px-1">
                <h3 className="font-serif font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2">
                  {skit.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#9DA4B0] border-t border-white/10 pt-1.5">
                  <span>Engagement : <strong className="text-[#10B981]">{skit.engagementRate || '8.5%'}</strong></span>
                  <span>Partages : <strong className="text-white">{skit.shares || '18.2K'}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-1 no-print">
              <a
                href={skit.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-xs py-2.5 px-4 flex items-center justify-center gap-2 rounded-2xl"
              >
                <Play className="w-3 h-3 fill-current text-[#F0E5D8]" />
                <span>Voir la vidéo sur TikTok</span>
                <ExternalLink className="w-3 h-3 text-[#9DA4B0]" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};
