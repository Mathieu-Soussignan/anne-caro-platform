'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15 overflow-x-hidden w-full">
      
      {/* Header without AI emojis */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4 whitespace-nowrap">
          <Video className="w-4 h-4 text-[#F0E5D8]" />
          <span>Formats & Tarifs Partenariats</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-[#F0E5D8] mb-3 leading-tight break-words max-w-full">
          Offres de Collaboration
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed max-w-2xl mx-auto font-normal">
          Des formules adaptées aux objectifs de votre marque : de la notoriété immédiate à l'engagement long terme.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {MEDIA_KIT_DATA.services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -6 }}
            className={`rounded-3xl p-6 sm:p-10 border transition-all flex flex-col justify-between relative shadow-2xl max-w-full ${
              service.popular
                ? 'bg-[#23272C] border-[#F0E5D8] ring-1 ring-[#F0E5D8]/40'
                : 'bg-[#181A1D] border-white/15'
            }`}
          >
            {/* Top Popular Badge */}
            {service.badge && (
              <div className="absolute -top-3.5 left-8 bg-[#F0E5D8] text-[#181A1D] text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {service.badge}
              </div>
            )}

            <div>
              <div className="text-xs font-mono text-[#9DA4B0] uppercase font-bold mb-1">
                {service.subtitle}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#9DA4B0] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price Tag */}
              <div className="bg-[#181A1D] p-4 rounded-2xl border border-white/10 mb-6 flex items-baseline justify-between">
                <span className="text-xs font-mono text-[#9DA4B0] uppercase font-bold">Investissement :</span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F0E5D8]">
                  {service.startingRate}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono font-bold text-[#F0E5D8] uppercase tracking-wider">
                  Livrables & Garanties :
                </div>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9DA4B0] leading-relaxed">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={scrollToContact}
              className={`w-full text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-xl ${
                service.popular
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              <span>Demander un Devis pour ce Format</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-[#9DA4B0] flex items-center justify-center gap-2 px-2 max-w-full">
        <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
        <span className="break-words">Toutes nos collaborations sont encadrées par contrat professionnel et respectent scrupuleusement la loi ARPP.</span>
      </div>

    </section>
  );
};
