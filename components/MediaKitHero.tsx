'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, ArrowRight, Eye, Heart, MessageCircle, Music, Globe } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const MediaKitHero: React.FC = () => {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden w-full break-inside-avoid">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F0E5D8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: B2B Brand Pitch */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Badges Strip (TikTok Verified + Official Website Link) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>{MEDIA_KIT_DATA.verifiedBadge}</span>
            </div>

            <a
              href={MEDIA_KIT_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981]/20 transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#10B981]" />
              <span>annecaroaction.fr ↗</span>
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F0E5D8] leading-tight tracking-tight break-words max-w-full">
            Associez votre marque au <span className="italic font-normal underline decoration-[#F0E5D8]/40">phénomène</span> humour du quotidien.
          </h1>

          <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed max-w-2xl font-normal">
            {MEDIA_KIT_DATA.title}. Un univers culte réunissant <strong className="text-white">524.1K abonnés engagés</strong> et accumulant plus de <strong className="text-white">613 Millions de vues</strong> sur TikTok.
          </p>

          {/* Key Stats Strip */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-b border-white/10 py-4">
            <div>
              <div className="text-xl sm:text-3xl font-serif font-bold text-[#F0E5D8]">
                {MEDIA_KIT_DATA.stats.followers}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-[#9DA4B0] font-semibold">Abonnés Qualifiés</div>
            </div>

            <div>
              <div className="text-xl sm:text-3xl font-serif font-bold text-[#F0E5D8]">
                {MEDIA_KIT_DATA.stats.views}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-[#9DA4B0] font-semibold">Vues Cumulées</div>
            </div>

            <div>
              <div className="text-xl sm:text-3xl font-serif font-bold text-[#10B981]">
                {MEDIA_KIT_DATA.stats.engagementRate}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-[#9DA4B0] font-semibold">Engagement (3x Moyenne)</div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 no-print">
            <button
              onClick={scrollToContact}
              className="btn-primary text-xs sm:text-sm py-4 px-8 inline-flex items-center gap-2 shadow-2xl"
            >
              <span>Demander un Devis Partenariat</span>
              <ArrowRight className="w-4 h-4 text-[#181A1D]" />
            </button>

            <button
              onClick={scrollToSimulator}
              className="btn-secondary text-xs sm:text-sm py-4 px-6 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F0E5D8]" />
              <span>Simuler le ROI</span>
            </button>
          </div>

        </div>

        {/* Right Column: TikTok Phone Player Frame (God Tier Visual Standard) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 sm:w-80 aspect-[9/16] hero-phone-print rounded-[36px] bg-[#181A1D] border-4 border-[#353B43] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden group">
            
            {/* Real Photo with Object Cover Top framing */}
            <img
              src="/images/Anne-caro-logo.jpeg"
              alt="Anne-Caro Creator"
              className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Top Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full border border-white/10 z-20" />

            {/* TikTok Action Bar (Right Side) */}
            <div className="absolute right-3 bottom-16 flex flex-col items-center gap-3.5 text-white z-20">
              
              <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img src="/images/Anne-caro-logo.jpeg" alt="Anne-Caro" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                </div>
                <span className="text-[10px] font-bold font-mono">69.6M</span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-bold font-mono">524.1K</span>
              </div>

              <div className="w-8 h-8 rounded-full bg-black border-2 border-white/40 flex items-center justify-center animate-spin-slow mt-1">
                <Music className="w-3.5 h-3.5 text-white" />
              </div>

            </div>

            {/* Bottom Text Overlay */}
            <div className="absolute left-4 bottom-4 right-14 text-white z-20 space-y-1">
              <div className="text-xs font-bold font-mono flex items-center gap-1">
                <span>@annecaroaction</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
              <div className="text-[11px] text-white/90 leading-snug font-normal">
                Créatrice de contenus humoristiques viraux • Sagas de marque sur-mesure.
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
