'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Building2, ExternalLink, Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const BrandReferencesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15 overflow-x-hidden w-full">
      
      {/* Header without AI emojis */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
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

      {/* TikTok Smartphone Player Grid (No Cropped Selfies) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {MEDIA_KIT_DATA.skits.map((skit) => (
          <motion.div
            key={skit.id}
            whileHover={{ y: -6 }}
            className="bg-[#23272C] rounded-3xl p-5 sm:p-6 border border-[#F0E5D8]/15 shadow-2xl flex flex-col justify-between group overflow-hidden max-w-full"
          >
            <div>
              {/* Realistic TikTok Smartphone Frame */}
              <div className="relative w-full aspect-[9/16] rounded-[28px] bg-[#181A1D] border-2 border-[#353B43] shadow-2xl overflow-hidden mb-5">
                
                {/* Photo with Object Cover Top framing */}
                <img
                  src={skit.thumbnailUrl}
                  alt={skit.title}
                  className="w-full h-full object-cover object-top filter brightness-95"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 bg-[#181A1D]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#F0E5D8] border border-white/10 z-20">
                  {skit.category}
                </div>
                <div className="absolute top-3 right-3 bg-[#10B981] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md z-20">
                  {skit.views}
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current text-white translate-x-0.5" />
                  </div>
                </div>

                {/* TikTok UI Elements */}
                <div className="absolute right-2.5 bottom-12 flex flex-col items-center gap-3 text-white z-20">
                  <div className="w-7 h-7 rounded-full border border-white overflow-hidden">
                    <img src="/images/Anne-caro-logo.jpeg" alt="Anne-Caro" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span className="text-[9px] font-bold font-mono">{skit.engagementRate || '8.5%'}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span className="text-[9px] font-bold font-mono">{skit.shares || '18K'}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center animate-spin-slow">
                    <Music className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute left-3 bottom-3 right-12 text-white z-20 space-y-0.5">
                  <div className="text-[11px] font-bold font-mono">@annecaroaction</div>
                  <div className="text-[10px] text-white/80 line-clamp-1">
                    {skit.title}
                  </div>
                </div>

              </div>

              {/* Title & Stats */}
              <div className="space-y-2 mb-4 px-1">
                <h3 className="font-serif font-bold text-base text-white leading-snug">
                  {skit.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-[#9DA4B0] border-t border-white/10 pt-2">
                  <span>Taux d'Engagement : <strong className="text-[#10B981]">{skit.engagementRate || '8.5%'}</strong></span>
                  <span>Partages : <strong className="text-white">{skit.shares || '18.2K'}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={skit.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-xs py-3 px-4 flex items-center justify-center gap-2 rounded-2xl"
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
