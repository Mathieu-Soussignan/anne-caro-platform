'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Heart, Eye, Award, Repeat, Zap } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const CertifiedMetricsCockpit: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15 overflow-x-hidden w-full">
      
      {/* Header with Responsive Badge Pill */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4 max-w-full text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
          <span className="truncate">Données Certifiées TikTok Creator Marketplace</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-[#F0E5D8] mb-3 leading-tight break-words max-w-full">
          Performance & Métriques Clés
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed font-normal max-w-2xl mx-auto">
          Une audience captivée, 100% organique, avec des taux d'engagement et de complétion nettement supérieurs à la moyenne du marché.
        </p>
      </div>

      {/* Grid of 4 High-Impact Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        
        {/* Followers */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#23272C] p-5 sm:p-8 rounded-3xl border border-[#F0E5D8]/15 shadow-xl relative overflow-hidden group max-w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#181A1D] border border-white/10 flex items-center justify-center text-[#F0E5D8]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
              100% Organique
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
            {MEDIA_KIT_DATA.stats.followers}
          </div>
          <div className="text-[11px] sm:text-xs font-mono text-[#9DA4B0] font-semibold uppercase tracking-wider">
            Abonnés Qualifiés
          </div>
        </motion.div>

        {/* Total Views */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#23272C] p-5 sm:p-8 rounded-3xl border border-[#F0E5D8]/15 shadow-xl relative overflow-hidden group max-w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#181A1D] border border-white/10 flex items-center justify-center text-[#F0E5D8]">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#F0E5D8] bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
              +14M / Mois
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
            {MEDIA_KIT_DATA.stats.views}
          </div>
          <div className="text-[11px] sm:text-xs font-mono text-[#9DA4B0] font-semibold uppercase tracking-wider">
            Vues Cumulées
          </div>
        </motion.div>

        {/* Engagement Rate */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#23272C] p-5 sm:p-8 rounded-3xl border border-[#F0E5D8]/15 shadow-xl relative overflow-hidden group max-w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#181A1D] border border-white/10 flex items-center justify-center text-[#F0E5D8]">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 fill-red-500" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#F0E5D8] bg-[#F0E5D8]/10 px-2.5 py-1 rounded-full border border-[#F0E5D8]/30">
              3x Moyenne
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
            {MEDIA_KIT_DATA.stats.engagementRate}
          </div>
          <div className="text-[11px] sm:text-xs font-mono text-[#9DA4B0] font-semibold uppercase tracking-wider">
            Taux d'Engagement
          </div>
        </motion.div>

        {/* Avg Views per Video */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[#23272C] p-5 sm:p-8 rounded-3xl border border-[#F0E5D8]/15 shadow-xl relative overflow-hidden group max-w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#181A1D] border border-white/10 flex items-center justify-center text-[#F0E5D8]">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#10B981]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
              Top 1% France
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
            {MEDIA_KIT_DATA.stats.avgViewsPerVideo}
          </div>
          <div className="text-[11px] sm:text-xs font-mono text-[#9DA4B0] font-semibold uppercase tracking-wider">
            Vues Moyennes / Vidéo
          </div>
        </motion.div>

      </div>

      {/* Additional Certified Indicators */}
      <div className="bg-[#181A1D] rounded-3xl p-5 sm:p-8 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center max-w-full">
        
        <div className="flex flex-col items-center gap-1.5 p-2 sm:p-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F0E5D8]">
            <Repeat className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>Taux de Complétion : 74%</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#9DA4B0]">
            Les abonnés regardent les sketchs jusqu'à la dernière seconde.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5 p-2 sm:p-3 border-y md:border-y-0 md:border-x border-white/10">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F0E5D8]">
            <Zap className="w-4 h-4 text-[#F0E5D8] shrink-0" />
            <span>Partages Moyens : 18.2K / vidéo</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#9DA4B0]">
            Un pouvoir de viralité et de bouche-à-oreille exceptionnel.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5 p-2 sm:p-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F0E5D8]">
            <Award className="w-4 h-4 text-[#F0E5D8] shrink-0" />
            <span>Top 1% Créatrice Humour</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#9DA4B0]">
            Positionnement premium sur le thème du quotidien et du bureau.
          </p>
        </div>

      </div>

    </section>
  );
};
