'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, Send, Eye, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

interface SimulatorFormat {
  id: string;
  name: string;
  baseViews: number;
  basePrice: number;
  description: string;
  tag: string;
}

const formats: SimulatorFormat[] = [
  {
    id: "skit-dedicated",
    name: "Sketch Dédié 60s",
    baseViews: 450000,
    basePrice: 1500,
    description: "1 vidéo humoristique scénarisée intégrant votre produit de manière naturelle et mémorable.",
    tag: "Format Star"
  },
  {
    id: "brand-saga",
    name: "Saga de Marque (3 Vidéos)",
    baseViews: 1450000,
    basePrice: 3800,
    description: "Série récurrente sur 3 semaines créant un véritable attachement de la communauté.",
    tag: "Impact Maximal"
  },
  {
    id: "testing-pepite",
    name: "Testing Pépite & Canal Privé",
    baseViews: 650000,
    basePrice: 2200,
    description: "Sketch dédié + relais exclusif dans le canal privé 'Ici on papote' avec code promo.",
    tag: "Haute Conversion"
  }
];

export const CampaignROISimulator: React.FC = () => {
  const [selectedFormatId, setSelectedFormatId] = useState<string>("skit-dedicated");
  const [videoCount, setVideoCount] = useState<number>(1);

  const selectedFormat = formats.find(f => f.id === selectedFormatId) || formats[0];

  // Dynamic Metrics Calculations
  const totalEstimatedViews = selectedFormat.baseViews * videoCount;
  const totalEstimatedReach = Math.round(totalEstimatedViews * 0.72);
  const estimatedShares = Math.round((totalEstimatedViews * 0.04));
  const estimatedPrice = selectedFormat.basePrice * videoCount;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulator" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4">
          <Calculator className="w-4 h-4 text-[#F0E5D8]" />
          <span>Calculateur de Portée & ROI de Campagne</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#F0E5D8] mb-4 leading-tight">
          Simulateur de Performances Marque 🧮
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed">
          Estimez en temps réel le volume de vues, la portée qualifiée et le budget prévisionnel pour votre prochaine campagne avec Anne-Caro.
        </p>
      </div>

      {/* Simulator Interactive Terminal */}
      <div className="bg-[#23272C] rounded-3xl border border-[#F0E5D8]/20 p-6 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Format & Multiplier Selection */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Format Selector */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-3">
                1. Choisissez le format de votre campagne :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {formats.map((fmt) => (
                  <button
                    key={fmt.id}
                    onClick={() => setSelectedFormatId(fmt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedFormatId === fmt.id
                        ? 'bg-[#F0E5D8] text-[#181A1D] border-[#F0E5D8] shadow-lg font-bold'
                        : 'bg-[#181A1D] text-[#9DA4B0] border-white/10 hover:border-[#F0E5D8]/40 hover:text-[#F0E5D8]'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full inline-block mb-2 ${
                        selectedFormatId === fmt.id ? 'bg-[#181A1D] text-[#F0E5D8]' : 'bg-white/10 text-[#F0E5D8]'
                      }`}>
                        {fmt.tag}
                      </span>
                      <div className="text-sm font-bold font-serif leading-tight mb-1">
                        {fmt.name}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold mt-2">
                      À partir de {fmt.basePrice} €
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Description of Selected Format */}
            <div className="bg-[#181A1D] p-4 rounded-2xl border border-white/10 text-xs text-[#9DA4B0] leading-relaxed">
              <span className="font-bold text-[#F0E5D8]">Détail du format : </span>
              {selectedFormat.description}
            </div>

            {/* Step 2: Slider for Multiplier / Video Count */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                <span>2. Nombre de vidéos / répétition :</span>
                <span className="text-base font-bold text-[#F0E5D8] font-serif">
                  {videoCount} {videoCount > 1 ? 'Vidéos' : 'Vidéo'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={videoCount}
                onChange={(e) => setVideoCount(parseInt(e.target.value))}
                className="w-full accent-[#F0E5D8] bg-[#181A1D] h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#9DA4B0] mt-1">
                <span>1 Vidéo (Ponctuel)</span>
                <span>3 Vidéos (Saga)</span>
                <span>5 Vidéos (Partenariat Annuel)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Projected Metrics Results & Direct Quote Trigger */}
          <div className="lg:col-span-5">
            <div className="bg-[#181A1D] rounded-3xl p-6 sm:p-8 border border-[#F0E5D8]/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono font-bold text-[#9DA4B0] uppercase">
                  Projections Campagne
                </span>
                <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  Estimations Certifiées
                </span>
              </div>

              {/* Estimated Views */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#9DA4B0] flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#F0E5D8]" />
                  <span>Vues Totales Estimées :</span>
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  {(totalEstimatedViews / 1000).toFixed(0)}K+ Vues
                </div>
              </div>

              {/* Estimated Reach & Shares */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <div className="text-[11px] font-mono text-[#9DA4B0] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#F0E5D8]" />
                    <span>Portée Unique</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-[#F0E5D8]">
                    {(totalEstimatedReach / 1000).toFixed(0)}K Personnes
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#9DA4B0] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Partages Estimés</span>
                  </div>
                  <div className="text-lg font-bold font-serif text-[#F0E5D8]">
                    {(estimatedShares / 1000).toFixed(1)}K Partages
                  </div>
                </div>
              </div>

              {/* Budget Estimation */}
              <div className="bg-[#23272C] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#9DA4B0] uppercase font-bold">
                    Budget Prévisionnel
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#F0E5D8]">
                    {estimatedPrice.toLocaleString('fr-FR')} €
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#10B981] font-bold">
                  ✓ HT • Droits Inclus
                </span>
              </div>

              {/* Direct Booking CTA */}
              <button
                onClick={scrollToContact}
                className="btn-primary w-full text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-2xl"
              >
                <Send className="w-4 h-4 text-[#181A1D]" />
                <span>Bloquer cette Option & Réserver</span>
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
