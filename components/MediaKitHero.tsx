'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, ArrowRight, Download, Play, Building2, Flame } from 'lucide-react';
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
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F0E5D8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: B2B Brand Pitch */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Verified Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>{MEDIA_KIT_DATA.verifiedBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F0E5D8] leading-tight tracking-tight">
            Associez votre marque au <span className="italic font-normal underline decoration-[#F0E5D8]/40">phénomène</span> humour du quotidien.
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA4B0] leading-relaxed max-w-2xl font-normal">
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
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
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

        {/* Right Column: Hero Cover Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[36px] overflow-hidden border-4 border-[#23272C] shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
            
            <img
              src="/images/Anne-caro-logo.jpeg"
              alt="Anne-Caro Creator"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />

            {/* Subtle Gradient & Badge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 bg-[#181A1D]/90 backdrop-blur-md p-5 rounded-2xl border border-[#F0E5D8]/30 shadow-2xl">
              <div className="font-serif font-bold text-lg text-white flex items-center justify-between">
                <span>Anne-Caro</span>
                <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                  @annecaroaction
                </span>
              </div>
              <p className="text-xs text-[#9DA4B0] mt-1 font-normal leading-relaxed">
                Créatrice de contenus humoristiques viraux • Sagas de marque sur-mesure.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
