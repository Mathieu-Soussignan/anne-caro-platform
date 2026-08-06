'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Video, Smartphone, Crown, Zap, ArrowRight } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

export const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'sketch-dedie': return <Video className="w-6 h-6 text-[#C58B5C]" />;
      case 'pack-story-coulisses': return <Smartphone className="w-6 h-6 text-[#C58B5C]" />;
      case 'ambassadrice-marque': return <Crown className="w-6 h-6 text-[#C58B5C]" />;
      case 'spark-ads': return <Zap className="w-6 h-6 text-[#C58B5C]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C58B5C]" />;
    }
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-8 bg-white border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF7F2] text-[#8C6239] border border-[#E8DCD1] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C58B5C]" />
            <span>Offres & Dispositifs Marketing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1A1A1A] mb-4">
            Services & Formats de Collaboration
          </h2>
          <p className="text-base text-[#6E6763] leading-relaxed">
            Des formats de contenu adaptés aux objectifs stratégiques des marques (Notoriété, Engagement, Conversion).
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_KIT_DATA.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-[#FAF7F2] rounded-3xl p-6 border shadow-sm flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-[#C58B5C] ring-2 ring-[#C58B5C]/20' : 'border-[#EBE4DC]'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#FAF7F2] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Format Populaire
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-[#EBE4DC]">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 font-serif">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-[#C58B5C] mb-4 uppercase tracking-wider">{service.subtitle}</p>
                
                <p className="text-xs text-[#6E6763] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">Livrables inclus :</div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A] font-medium">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-white p-3 rounded-2xl border border-[#EBE4DC] text-center mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#6E6763]">Tarification</div>
                  <div className="text-sm font-bold font-serif text-[#1A1A1A]">{service.startingRate}</div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#1A1A1A] text-white font-bold py-3 rounded-2xl text-xs hover:bg-[#C58B5C] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
