'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Laugh, Quote } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const MediaKitHero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-8 bg-[#FAF7F2] overflow-hidden border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Press Kit Badge */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#FAF7F2] mb-3 sm:mb-4 shadow-xs"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A373]" />
            <span>TikTok Creator & Humor Storyteller • Press Deck 2026</span>
          </motion.div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1A1A] font-serif mb-2 leading-tight">
            ANNE-CARO <span className="text-[#C58B5C] italic font-serif font-normal text-2xl sm:text-5xl block sm:inline">@annecaroaction</span>
          </h1>

          <p className="text-sm sm:text-xl font-medium text-[#C58B5C] max-w-2xl mx-auto font-serif italic mb-3">
            {MEDIA_KIT_DATA.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-[#6E6763]">
            {MEDIA_KIT_DATA.categories.map((cat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="hidden sm:inline">•</span>}
                <span className="bg-white px-2.5 py-1 rounded-full border border-[#EBE4DC] shadow-xs">{cat}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Magazine Cover Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-5 sm:p-10 rounded-3xl border border-[#EBE4DC] shadow-xl">
          
          {/* Left Visual Cover (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl relative border-4 border-[#FAF7F2]">
              <img
                src={MEDIA_KIT_DATA.portraits.heroCover}
                alt={MEDIA_KIT_DATA.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <div className="font-serif italic text-2xl sm:text-4xl text-[#E8DCD1] mb-0.5">
                  Anne-Caro
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                  Sketchs & Parodies Virales • 524K+ Abonnés
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-2 sm:-right-3 bg-[#1A1A1A] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-xl text-[10px] sm:text-xs font-bold flex items-center gap-1.5 border border-[#D4A373]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Certifié TikTok Analytics</span>
            </div>
          </div>

          {/* Right Presentation Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C58B5C] mb-2 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8DCD1]">
                <Laugh className="w-3.5 h-3.5" />
                <span>L'Humour Viral comme Levier Marque</span>
              </div>
              
              <h2 className="text-xl sm:text-4xl font-bold font-serif text-[#1A1A1A] mb-3 sm:mb-4 leading-snug">
                Faites rayonner votre marque grâce à des sketchs décalés et du contenu authentique.
              </h2>

              <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border-l-4 border-[#C58B5C] text-xs sm:text-base text-[#6E6763] italic relative leading-relaxed mb-4 sm:mb-6">
                <Quote className="w-5 h-5 text-[#C58B5C] mb-1 opacity-50" />
                "{MEDIA_KIT_DATA.quote}"
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#EBE4DC]">
              <div className="bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#EBE4DC] text-center">
                <div className="text-xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">524K+</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#6E6763] uppercase tracking-wider">Abonnés TikTok</div>
              </div>
              <div className="bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#EBE4DC] text-center">
                <div className="text-xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">69.3M+</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#6E6763] uppercase tracking-wider">Likes Cumulés</div>
              </div>
              <div className="bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#EBE4DC] text-center">
                <div className="text-xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">139.8M</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#6E6763] uppercase tracking-wider">Vues (12 Mois)</div>
              </div>
              <div className="bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#EBE4DC] text-center">
                <div className="text-xl sm:text-3xl font-bold font-serif text-[#C58B5C]">87.8%</div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#6E6763] uppercase tracking-wider">Audience France</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={scrollToContact}
                className="btn-primary text-xs sm:text-sm px-6 py-3.5 justify-center shadow-xl w-full sm:w-auto"
              >
                <span>Proposer un partenariat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#about"
                className="btn-secondary text-xs sm:text-sm px-5 py-3.5 justify-center text-center w-full sm:w-auto"
              >
                <span>Découvrir l'univers d'Anne-Caro</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
