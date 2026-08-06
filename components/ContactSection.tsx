'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

const BUDGET_RANGES = [
  "< 1 000 €",
  "1 000 € - 3 000 €",
  "3 000 € - 5 000 €",
  "5 000 € +",
];

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    budget: '1 000 € - 3 000 €',
    format: 'Sketch Humoristique Dédié',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onShowToast("Demande reçue ! L'équipe d'Anne-Caro étudie votre projet.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 bg-white border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF7F2] text-[#8C6239] border border-[#E8DCD1] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C58B5C]" />
            <span>Brand Inquiries & Booking</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#1A1A1A] mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-base text-[#6E6763] leading-relaxed">
            Vous souhaitez soumettre un brief de campagne ou solliciter le Media Kit PDF complet ? Remplissez ce formulaire et recevez une réponse sous 24h.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Executive Direct Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-3xl p-8 border border-[#EBE4DC] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-[#EBE4DC]">
                <img
                  src={MEDIA_KIT_DATA.portraits.contactCard}
                  alt="Anne-Caro Contact"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1">
                Anne-Caro
              </div>
              <div className="text-xs font-bold text-[#C58B5C] uppercase tracking-wider mb-4">
                Management Partenariats Marques
              </div>

              <p className="text-xs text-[#6E6763] leading-relaxed mb-6">
                Chaque partenariat est étudié sur-mesure afin de garantir un alignement parfait avec l'ADN de la marque et les attentes de l'audience.
              </p>

              <div className="space-y-3.5 text-xs font-bold text-[#1A1A1A]">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#EBE4DC]">
                  <Mail className="w-4 h-4 text-[#C58B5C]" />
                  <span>{MEDIA_KIT_DATA.email}</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#EBE4DC]">
                  <MapPin className="w-4 h-4 text-[#C58B5C]" />
                  <span>{MEDIA_KIT_DATA.location}</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#EBE4DC]">
                  <Clock className="w-4 h-4 text-[#10B981]" />
                  <span>Délai de réponse : &lt; 24h ouvrées</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EBE4DC] text-[11px] text-[#6E6763] text-center font-medium">
              Agences PR & Gestion de campagnes : Devis sur-mesure disponible sur demande.
            </div>
          </div>

          {/* Campaign Proposal Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#EBE4DC] shadow-sm">
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-8 rounded-3xl border border-[#C58B5C] text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1A1A1A]">
                  Demande de Partenariat Envoyée !
                </h3>
                <p className="text-sm text-[#6E6763] max-w-md mx-auto">
                  Merci d'avoir contacté l'équipe d'Anne-Caro. Nous avons bien reçu votre projet pour <strong>{formData.companyName}</strong> et reviendrons vers vous à l'adresse <strong>{formData.email}</strong> sous 24h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs font-bold"
                >
                  Envoyer un autre brief
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                      Nom de la Marque / Agence *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="ex: Votre Marque, Agence PR..."
                      className="w-full bg-white border border-[#EBE4DC] rounded-2xl py-3.5 px-4 text-sm text-[#1A1A1A] placeholder-[#9B948F] focus:outline-none focus:border-[#C58B5C] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@votremarque.com"
                      className="w-full bg-white border border-[#EBE4DC] rounded-2xl py-3.5 px-4 text-sm text-[#1A1A1A] placeholder-[#9B948F] focus:outline-none focus:border-[#C58B5C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    Enveloppe Budgétaire Estimée *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {BUDGET_RANGES.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`py-3 px-2 rounded-2xl text-xs font-bold border transition-all text-center ${
                          formData.budget === range
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                            : 'bg-white text-[#6E6763] border-[#EBE4DC] hover:border-[#C58B5C]'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    Format de Collaboration Souhaité
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full bg-white border border-[#EBE4DC] rounded-2xl py-3.5 px-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C58B5C] transition-all"
                  >
                    <option value="Sketch Humoristique Dédié">Sketch Humoristique Dédié (60-90s)</option>
                    <option value="Pack Stories & Coulisses">Pack Stories & Coulisses</option>
                    <option value="Ambassadrice de Marque">Ambassadrice de Marque (3-12 Mois)</option>
                    <option value="Amplification Spark Ads">Amplification Spark Ads</option>
                    <option value="Autre / Projet Sur-mesure">Autre / Projet Sur-mesure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    Brief Produit & Objectifs de Campagne *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement le produit, les dates clés de lancement et vos objectifs..."
                    className="w-full bg-white border border-[#EBE4DC] rounded-2xl p-4 text-sm text-[#1A1A1A] placeholder-[#9B948F] focus:outline-none focus:border-[#C58B5C] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-2xl text-sm hover:bg-[#C58B5C] transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Traitement en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer la demande de partenariat</span>
                      <Send className="w-4 h-4 text-[#D4A373]" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
