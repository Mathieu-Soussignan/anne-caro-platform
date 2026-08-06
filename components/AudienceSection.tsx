'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart3, Globe, TrendingUp, Users, Eye, Heart, ShieldCheck } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-16 px-4 sm:px-8 bg-[#FAF7F2] border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#FAF7F2] mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Audience Overview & Performance Stats</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1A1A1A] mb-4">
            Statistiques & Profil de l'Audience
          </h2>
          <p className="text-base text-[#6E6763] leading-relaxed">
            Données certifiées issues du tableau de bord TikTok Creator Marketplace.
          </p>
        </div>

        {/* 4 Social Media Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-3xl border border-[#EBE4DC] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C58B5C]">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full">
                En Croissance
              </span>
            </div>
            <div className="text-3xl font-bold font-serif text-[#1A1A1A] mb-0.5">524K+</div>
            <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Abonnés TikTok</div>
            <div className="text-[11px] text-[#6E6763] mt-1">@annecaroaction</div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#EBE4DC] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C58B5C]">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Viralité
              </span>
            </div>
            <div className="text-3xl font-bold font-serif text-[#1A1A1A] mb-0.5">139.8M</div>
            <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Vues Annuelles</div>
            <div className="text-[11px] text-[#6E6763] mt-1">12 derniers mois</div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#EBE4DC] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C58B5C]">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#C58B5C] bg-[#C58B5C]/10 px-2.5 py-1 rounded-full">
                High Engagement
              </span>
            </div>
            <div className="text-3xl font-bold font-serif text-[#1A1A1A] mb-0.5">69.3M+</div>
            <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Likes Cumulés</div>
            <div className="text-[11px] text-[#6E6763] mt-1">Taux d'engagement fort</div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#EBE4DC] shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#C58B5C]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full">
                Intent d'achat
              </span>
            </div>
            <div className="text-3xl font-bold font-serif text-[#1A1A1A] mb-0.5">3.7M+</div>
            <div className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Visites Profil / An</div>
            <div className="text-[11px] text-[#6E6763] mt-1">Redirection lien bio</div>
          </div>

        </div>

        {/* Detailed Demographics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gender & Age Breakdown (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#EBE4DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#1A1A1A]">Répartition Genre & Tranches d'Âge</h3>
                  <p className="text-xs text-[#6E6763]">Audience ciblée avec 71% des personnes âgées entre 18 et 34 ans.</p>
                </div>
                <PieChart className="w-6 h-6 text-[#C58B5C]" />
              </div>

              {/* Gender Visual Pill */}
              <div className="mb-8 bg-[#FAF7F2] p-5 rounded-2xl border border-[#EBE4DC]">
                <div className="flex justify-between text-sm font-bold text-[#1A1A1A] mb-3">
                  <span>81% Audience Féminine</span>
                  <span>18% Hommes</span>
                </div>
                <div className="h-4 w-full bg-[#EBE4DC] rounded-full overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '81%' }}
                    transition={{ duration: 1 }}
                    className="bg-[#C58B5C] h-full"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '18%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-[#1A1A1A] h-full"
                  />
                  <div className="bg-[#E8DCD1] w-[1%] h-full" />
                </div>
                <div className="flex justify-between text-[11px] text-[#6E6763] mt-2 font-medium">
                  <span>Pouvoir d'achat actif (Femmes 81%)</span>
                  <span>Hommes 18% • Autres 1%</span>
                </div>
              </div>

              {/* Age Range Distribution */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#6E6763]">Tranches d'âge principales</div>
                {MEDIA_KIT_DATA.demographics.age.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-bold text-[#1A1A1A] mb-1">
                      <span>{item.range}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#FAF7F2] rounded-full overflow-hidden border border-[#EBE4DC]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="bg-[#1A1A1A] h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Geographic Reach (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#EBE4DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#1A1A1A]">Portée Géographique</h3>
                  <p className="text-xs text-[#6E6763]">Marché francophone européen et international.</p>
                </div>
                <Globe className="w-6 h-6 text-[#C58B5C]" />
              </div>

              {/* Country List */}
              <div className="space-y-3.5">
                {MEDIA_KIT_DATA.demographics.countries.map((country, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EBE4DC]">
                    <div className="flex items-center justify-between text-sm font-bold text-[#1A1A1A] mb-1">
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.country}</span>
                      </span>
                      <span className="font-mono text-xs font-bold text-[#C58B5C]">{country.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#EBE4DC] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${country.percentage}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="bg-[#C58B5C] h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EBE4DC] flex items-center justify-between text-xs text-[#6E6763]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" /> Source: TikTok Analytics
              </span>
              <span>Mise à jour 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
