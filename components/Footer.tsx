'use client';

import React, { useState } from 'react';
import { Heart, CheckCircle2, ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="bg-[#1E1A18] text-[#FAF8F5] py-12 px-4 sm:px-8 border-t border-[#3D3531]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Handle */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-serif text-2xl font-bold mb-1">
            Anne-Caro
            <CheckCircle2 className="w-5 h-5 text-[#D4A373]" />
          </div>
          <p className="text-xs text-[#FAF8F5]/60 max-w-sm">
            Plateforme officielle & Media Kit interactif d'Anne-Caro (@annecaroaction). Contenus Lifestyle, Beauté & Bons Plans.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a
            href="https://tiktok.com/@annecaroaction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4A373] transition-colors flex items-center gap-2"
          >
            <span>TikTok (524K+)</span>
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-[#D4A373] transition-colors flex items-center gap-2"
          >
            <span>Instagram</span>
          </a>
          <span>•</span>
          <button
            onClick={() => setShowLegal(true)}
            className="hover:text-[#D4A373] transition-colors text-xs text-[#FAF8F5]/70 underline"
          >
            Mentions Légales
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#FAF8F5]/40 text-center md:text-right">
          © {new Date().getFullYear()} Anne-Caro • Tous droits réservés.<br />
          Fait avec <Heart className="w-3 h-3 text-[#C58B5C] inline-block mx-0.5 fill-[#C58B5C]" /> pour la communauté.
        </div>

      </div>

      {/* Legal Modal */}
      <AnimatePresence>
        {showLegal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#2C2623] text-white p-8 rounded-3xl max-w-lg w-full border border-[#D4A373]/30 relative"
            >
              <button
                onClick={() => setShowLegal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#D4A373]" />
                Mentions Légales & Affiliation
              </h3>
              <div className="space-y-3 text-xs text-white/80 leading-relaxed max-h-96 overflow-y-auto pr-2">
                <p>
                  <strong>Éditeur de la plateforme :</strong> Représentation officielle Anne-Caro (@annecaroaction).
                </p>
                <p>
                  <strong>Transparence Affiliation :</strong> Conformément à la réglementation sur la transparence commerciale, certains liens vers des produits présentés sur cette plateforme sont des liens d'affiliation. Lorsque vous effectuez un achat via ces liens, une faible commission peut être reversée sans aucun surcoût pour vous.
                </p>
                <p>
                  <strong>Engagements & Éthique :</strong> Les avis et conseils exprimés par Anne-Caro sont 100% authentiques et basés sur des tests réels de produits. Aucun partenariat ne modifie l'impartialité des avis donnés à la communauté.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
