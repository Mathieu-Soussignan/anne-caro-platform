'use client';

import React, { useState } from 'react';
import { Heart, CheckCircle2, ShieldAlert, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MediaKitFooter: React.FC = () => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2] py-12 px-4 sm:px-8 border-t border-[#2C2623]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-serif text-2xl font-bold mb-1">
            ANNE-CARO
            <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest bg-[#C58B5C] text-white px-2 py-0.5 rounded-full">
              PRESS KIT
            </span>
          </div>
          <p className="text-xs text-white/60 max-w-sm">
            Fiche Média Officielle & Press Deck pour marques et agences PR. TikTok Creator Verified 2026.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-white/70">
          <a
            href="https://tiktok.com/@annecaroaction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C58B5C] transition-colors"
          >
            TikTok (@annecaroaction)
          </a>
          <span>•</span>
          <button
            onClick={() => window.print()}
            className="hover:text-[#C58B5C] transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Imprimer / Export PDF</span>
          </button>
          <span>•</span>
          <button
            onClick={() => setShowLegal(true)}
            className="hover:text-[#C58B5C] transition-colors underline"
          >
            Mentions Légales Pro
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 text-center md:text-right">
          © {new Date().getFullYear()} Anne-Caro • Tous droits réservés.<br />
          Official Influencer Media Kit Deck.
        </div>

      </div>

      {/* Legal Modal */}
      <AnimatePresence>
        {showLegal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#2C2623] text-white p-8 rounded-3xl max-w-lg w-full border border-[#C58B5C]/30 relative"
            >
              <button
                onClick={() => setShowLegal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#C58B5C]" />
                Mentions Légales Marques & PR
              </h3>
              <div className="space-y-3 text-xs text-white/80 leading-relaxed max-h-96 overflow-y-auto pr-2">
                <p>
                  <strong>Représentation Officielle :</strong> Ce Media Kit présente les données réelles et certifiées de la créatrice Anne-Caro (@annecaroaction) issues du TikTok Creator Marketplace.
                </p>
                <p>
                  <strong>Propriété Intellectuelle & Droits d'Auteur :</strong> L'ensemble des images, vidéos et éléments visuels créés par Anne-Caro restent la propriété exclusive de leur autrice. Toute réutilisation commerciale ou amplification publicitaire (Spark Ads, Meta Ads) nécessite la signature préalable d'un contrat de cession de droits.
                </p>
                <p>
                  <strong>Demandes de Devis & Agences :</strong> Les tarifs et propositions commerciales transmis suite aux formulaires de contact engagent les parties selon les modalités définies dans le devis officiel.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
