'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, PieChart, MapPin, Sparkles, Heart } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4">
          <PieChart className="w-4 h-4 text-[#F0E5D8]" />
          <span>Démographie & Audience Cible</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#F0E5D8] mb-4 leading-tight">
          Profil des Abonnés 👥
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed">
          Une communauté urbaine, active, connectée et ultra-réceptive aux recommandations du quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Card: Gender & Age Split */}
        <div className="lg:col-span-6 bg-[#23272C] rounded-3xl p-6 sm:p-8 border border-[#F0E5D8]/15 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-serif font-bold text-xl text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-[#F0E5D8]" />
              <span>Répartition par Sexe & Âge</span>
            </h3>
            <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
              82% de 18-35 ans
            </span>
          </div>

          {/* Gender Split Visual */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#9DA4B0]">
              <span className="text-[#F0E5D8]">68% Femmes</span>
              <span className="text-white">32% Hommes</span>
            </div>
            <div className="w-full h-4 bg-[#181A1D] rounded-full overflow-hidden flex p-0.5 border border-white/10">
              <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-l-full w-[68%]" />
              <div className="h-full bg-blue-500 rounded-r-full w-[32%]" />
            </div>
          </div>

          {/* Age Demographics Bars */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono font-bold text-[#F0E5D8] uppercase tracking-wider">
              Tranches d'Âge :
            </div>
            {MEDIA_KIT_DATA.demographics.age.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-[#9DA4B0]">
                  <span>{item.range}</span>
                  <span className="font-mono font-bold text-white">{item.percentage}</span>
                </div>
                <div className="w-full h-2.5 bg-[#181A1D] rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-[#F0E5D8] rounded-full"
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Card: Geographical Distribution */}
        <div className="lg:col-span-6 bg-[#23272C] rounded-3xl p-6 sm:p-8 border border-[#F0E5D8]/15 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-serif font-bold text-xl text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F0E5D8]" />
              <span>Répartition Géographique</span>
            </h3>
            <span className="text-xs font-mono font-bold text-[#F0E5D8] bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Francophonie
            </span>
          </div>

          {/* Country Distribution List */}
          <div className="space-y-4">
            {MEDIA_KIT_DATA.demographics.countries.map((country, idx) => (
              <div key={idx} className="bg-[#181A1D] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <div className="font-bold text-sm text-white">{country.country}</div>
                    <div className="text-xs text-[#9DA4B0]">Audience Francophone</div>
                  </div>
                </div>
                <div className="text-xl font-serif font-bold text-[#F0E5D8]">
                  {country.percentage}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#9DA4B0] italic leading-relaxed pt-2">
            * Source : Analytics TikTok Creator Marketplace certifiées à jour.
          </p>

        </div>

      </div>

    </section>
  );
};
