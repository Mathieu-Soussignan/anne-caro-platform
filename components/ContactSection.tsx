'use client';

import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { MEDIA_KIT_DATA } from '@/data/creatorData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('Sketch Dédié 60s (1 500 €)');
  const [budgetRange, setBudgetRange] = useState('1 500 € - 3 000 €');
  const [projectMessage, setProjectMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !contactEmail) return;

    setSubmitted(true);
    onShowToast(`Demande de partenariat envoyée pour ${brandName} ! Équipe réactive sous 24h.`);
    
    setTimeout(() => {
      setBrandName('');
      setContactEmail('');
      setProjectMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4">
          <Mail className="w-4 h-4 text-[#F0E5D8]" />
          <span>Partenariats & Contact Marque</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#F0E5D8] mb-4 leading-tight">
          Lancer une Campagne 🚀
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed">
          Discutons de votre projet. Notre équipe étudie chaque opportunité et vous recontacte sous 24h avec un concept sur-mesure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Info Card */}
        <div className="lg:col-span-5 bg-[#23272C] rounded-3xl p-6 sm:p-8 border border-[#F0E5D8]/15 shadow-xl space-y-6">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F0E5D8] p-0.5 bg-[#181A1D] shrink-0">
              <img
                src={MEDIA_KIT_DATA.avatarUrl}
                alt={MEDIA_KIT_DATA.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">
                {MEDIA_KIT_DATA.name}
              </div>
              <div className="text-xs font-mono text-[#10B981] flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Réponse garantie sous 24h</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#9DA4B0] leading-relaxed italic border-t border-b border-white/10 py-4">
            "{MEDIA_KIT_DATA.quote}"
          </p>

          <div className="space-y-4 text-xs font-mono">
            <div className="bg-[#181A1D] p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F0E5D8]" />
              <div>
                <div className="text-[#9DA4B0] text-[10px] uppercase font-bold">Email Direct :</div>
                <a href={`mailto:${MEDIA_KIT_DATA.email}`} className="text-white font-bold hover:underline">
                  {MEDIA_KIT_DATA.email}
                </a>
              </div>
            </div>

            <div className="bg-[#181A1D] p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#F0E5D8]" />
              <div>
                <div className="text-[#9DA4B0] text-[10px] uppercase font-bold">Localisation & Rayonnement :</div>
                <div className="text-white font-bold">{MEDIA_KIT_DATA.location}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Brand Inquiry Terminal Form */}
        <div className="lg:col-span-7 bg-[#23272C] rounded-3xl p-6 sm:p-10 border border-[#F0E5D8]/20 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                  Nom de la Marque / Agence *
                </label>
                <input
                  type="text"
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="ex: Sephora, L'Oréal, Startup XYZ..."
                  className="w-full bg-[#181A1D] border border-white/15 rounded-xl p-3.5 text-xs text-white placeholder-[#9DA4B0] focus:outline-none focus:border-[#F0E5D8] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                  Email Professionnel *
                </label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="prenom@marque.com"
                  className="w-full bg-[#181A1D] border border-white/15 rounded-xl p-3.5 text-xs text-white placeholder-[#9DA4B0] focus:outline-none focus:border-[#F0E5D8] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                  Format Envisagé
                </label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full bg-[#181A1D] border border-white/15 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#F0E5D8] transition-all"
                >
                  <option value="Sketch Dédié 60s (1 500 €)">Sketch Dédié 60s (1 500 €)</option>
                  <option value="Saga de Marque (3 Vidéos - 3 800 €)">Saga de Marque (3 Vidéos - 3 800 €)</option>
                  <option value="Testing Pépite & Canal Privé">Testing Pépite & Canal Privé</option>
                  <option value="Ambassadrice Annuelle / Sur Devis">Ambassadrice Annuelle / Sur Devis</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                  Enveloppe Budgétaire
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-[#181A1D] border border-white/15 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#F0E5D8] transition-all"
                >
                  <option value="1 500 € - 3 000 €">1 500 € - 3 000 €</option>
                  <option value="3 000 € - 5 000 €">3 000 € - 5 000 €</option>
                  <option value="5 000 € - 10 000 €+">5 000 € - 10 000 €+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#F0E5D8] mb-2">
                Détails du projet / Objectifs
              </label>
              <textarea
                rows={4}
                value={projectMessage}
                onChange={(e) => setProjectMessage(e.target.value)}
                placeholder="Décrivez brièvement le produit à promouvoir, la période souhaitée et vos attentes..."
                className="w-full bg-[#181A1D] border border-white/15 rounded-xl p-3.5 text-xs text-white placeholder-[#9DA4B0] focus:outline-none focus:border-[#F0E5D8] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="btn-primary w-full text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-2xl"
            >
              <Send className="w-4 h-4 text-[#181A1D]" />
              <span>{submitted ? 'Demande Envoyée avec Succès !' : 'Envoyer ma Demande de Partenariat'}</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};
