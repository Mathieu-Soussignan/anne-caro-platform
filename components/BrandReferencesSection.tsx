'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, CheckCircle2, Play } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const BrandReferencesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 px-4 sm:px-8 bg-[#FAF7F2] border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#FAF7F2] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Concepts Viraux & Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1A1A1A] mb-4">
            Formats de Vidéos Virales
          </h2>
          <p className="text-base text-[#6E6763] leading-relaxed">
            Découvrez comment l'univers d'Anne-Caro transforme un message de marque en un contenu drôle, spontané et largement partagé.
          </p>
        </div>

        {/* 3 Creative Formats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {MEDIA_KIT_DATA.creativeFormats.map((format, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-[#EBE4DC] shadow-sm flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#C58B5C] mb-6 border border-[#EBE4DC] group-hover:bg-[#C58B5C] group-hover:text-white transition-colors">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>

                <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-3 leading-snug">
                  {format.title}
                </h3>

                <p className="text-xs text-[#6E6763] leading-relaxed mb-6">
                  {format.description}
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EBE4DC] text-center">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#6E6763]">Indicateur de Performance</div>
                <div className="text-sm font-bold text-[#C58B5C] font-serif mt-0.5">{format.metric}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white rounded-3xl p-8 border border-[#EBE4DC] text-center max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Transparence & Sur-Mesure</span>
          </div>
          <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-2">
            Chaque vidéo est écrite sur-mesure pour votre marque
          </h3>
          <p className="text-xs text-[#6E6763] leading-relaxed max-w-xl mx-auto">
            Pas de script pré-conçu. Anne-Caro imagine un scénario adapté à votre produit, avec validation préalable du script avant le tournage.
          </p>
        </div>

      </div>
    </section>
  );
};
