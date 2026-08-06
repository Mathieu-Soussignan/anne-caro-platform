'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Laugh, Award } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-8 bg-white border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Photo & Stat Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF7F2]">
              <img
                src={MEDIA_KIT_DATA.portraits.aboutMe}
                alt="Anne-Caro About"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EBE4DC] text-center shadow-lg">
                <div className="font-serif text-lg font-bold text-[#1A1A1A]">Anne-Caro</div>
                <div className="text-xs text-[#C58B5C] font-bold uppercase tracking-wider">Créatrice de Sketchs & Lifestyle</div>
              </div>
            </div>

            {/* Experience Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              {MEDIA_KIT_DATA.experienceStats.map((item, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE4DC] text-center">
                  <div className="text-2xl font-bold font-serif text-[#1A1A1A]">{item.value}</div>
                  <div className="text-[11px] font-bold text-[#6E6763] uppercase tracking-wider mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio & Content Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF7F2] text-[#8C6239] border border-[#E8DCD1]">
              <Laugh className="w-3.5 h-3.5 text-[#C58B5C]" />
              <span>Humour, Storytelling & ADN Créateur</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1A1A1A] leading-tight">
              Une touche d'humour irrésistible qui captive et fédère au quotidien.
            </h2>

            <p className="text-base text-[#6E6763] leading-relaxed">
              Basée en France, <strong>Anne-Caro (@annecaroaction)</strong> est devenue l'une des figures les plus pétillantes et spontanées de TikTok. Réputée pour ses <strong>sketchs humoristiques percutants</strong>, ses parodies du quotidien et ses réactions sur les scènes de la vie réelle, elle rassemble une communauté engagée de plus de <strong>524 000 abonnés</strong>.
            </p>

            <p className="text-base text-[#6E6763] leading-relaxed">
              Pour les marques, l'intégration au cœur des sketchs d'Anne-Caro permet de <strong>dédramatiser le message commercial</strong> et d'inscrire le produit dans une démarche positive, mémorable et naturelle auprès d'une audience <strong>81% féminine</strong>.
            </p>

            {/* Content Pillars Cards */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Les 3 Piliers de Contenu d'Anne-Caro :</div>
              {MEDIA_KIT_DATA.contentPillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE4DC] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#C58B5C] shadow-xs flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                      <span>{pillar.title}</span>
                      <span className="text-[10px] bg-[#C58B5C]/15 text-[#C58B5C] px-2 py-0.5 rounded-full font-bold uppercase">
                        {pillar.tag}
                      </span>
                    </div>
                    <div className="text-xs text-[#6E6763] mt-1 leading-relaxed">{pillar.description}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
