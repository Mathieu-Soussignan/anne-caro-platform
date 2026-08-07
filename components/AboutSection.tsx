'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Laugh, Compass } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial Photo & Stat Grid (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#23272C] bg-[#181A1D]">
            <img
              src="/images/Anne-caro-1.JPG"
              alt="Anne-Caro Story"
              className="w-full aspect-[4/5] object-cover filter brightness-95"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#181A1D]/95 backdrop-blur-md p-4 rounded-2xl border border-[#F0E5D8]/30 text-center shadow-xl">
              <div className="font-serif text-lg font-bold text-[#F0E5D8] flex items-center justify-center gap-1.5">
                <Compass className="w-4 h-4 text-[#F0E5D8]" />
                Anne-Caro
              </div>
              <div className="text-xs text-[#F0E5D8] font-mono font-bold mt-0.5">Créatrice de Contenus Humour & Lifestyle</div>
            </div>
          </div>

          {/* Experience Counters Grid */}
          <div className="grid grid-cols-3 gap-3">
            {MEDIA_KIT_DATA.experienceStats.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-[#23272C] p-3.5 rounded-2xl border border-white/10 text-center">
                <div className="text-xl font-serif font-bold text-white">{item.value}</div>
                <div className="text-[10px] font-mono text-[#9DA4B0] uppercase font-bold mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bio & Content Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-white/5 text-[#F0E5D8] border border-[#F0E5D8]/20">
            <Laugh className="w-3.5 h-3.5 text-[#F0E5D8]" />
            <span>Storytelling, Humour & ADN Marque</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#F0E5D8] leading-tight">
            Une touche d'humour irrésistible qui captive et intègre les marques avec naturel.
          </h2>

          <p className="text-sm sm:text-base text-[#9DA4B0] leading-relaxed">
            Basée en France, <strong>Anne-Caro (@annecaroaction)</strong> est l'une des figures les plus pétillantes et spontanées de TikTok. Réputée pour ses <strong>sketchs humoristiques percutants</strong>, ses parodies du quotidien au bureau et ses répliques cultes, elle rassemble une communauté engagée de plus de <strong>524 100 abonnés</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#9DA4B0] leading-relaxed">
            Pour les marques, l'intégration au cœur des sketchs d'Anne-Caro permet de <strong>dédramatiser le message commercial</strong> et d'inscrire le produit dans une démarche positive, virale et mémorable.
          </p>

          {/* Content Pillars Cards */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F0E5D8]">
              Les Piliers de Contenu d'Anne-Caro :
            </div>
            {MEDIA_KIT_DATA.contentPillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#23272C] p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#181A1D] flex items-center justify-center text-[#F0E5D8] shrink-0 mt-0.5 border border-white/10">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <span>{pillar.title}</span>
                    <span className="text-[10px] bg-white/10 text-[#F0E5D8] px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="text-xs text-[#9DA4B0] mt-1 leading-relaxed">{pillar.description}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
