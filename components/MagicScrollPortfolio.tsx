'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Heart, MessageCircle, Share2, Music, ExternalLink, Clapperboard } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bureau' | 'Vacances' | 'Communauté' | 'Pépites';
  categoryLabel: string;
  views: string;
  likes: string;
  comments: string;
  photoUrl: string;
  videoUrl: string;
  badge: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "p-1",
    title: "La Chargée d'Accueil : Quand Mathilde gère l'arrivée du stagiaire",
    category: "Bureau",
    categoryLabel: "Parodie Bureau",
    views: "3.8M Vues",
    likes: "184.5K",
    comments: "4.2K",
    photoUrl: "/images/Anne-caro-logo-2.JPG",
    videoUrl: "https://tiktok.com/@annecaroaction",
    badge: "Série Culte"
  },
  {
    id: "p-2",
    title: "Les réunions RH qui auraient pu être un simple mail",
    category: "Bureau",
    categoryLabel: "Parodie Bureau",
    views: "2.9M Vues",
    likes: "152.1K",
    comments: "3.8K",
    photoUrl: "/images/Anne-caro-logo-3.jpeg",
    videoUrl: "https://tiktok.com/@annecaroaction",
    badge: "Top 1% TikTok"
  },
  {
    id: "p-3",
    title: "Drama en Vacances : Épisode 1 - La réservation Airbnb douteuse",
    category: "Vacances",
    categoryLabel: "Saga d'Été",
    views: "2.4M Vues",
    likes: "142.9K",
    comments: "3.1K",
    photoUrl: "/images/Anne-caro-logo-4.JPG",
    videoUrl: "https://tiktok.com/@annecaroaction",
    badge: "Saga Été"
  },
  {
    id: "p-4",
    title: "Vos Prénoms : Les stéréotypes des prénoms au bureau",
    category: "Communauté",
    categoryLabel: "100% Participatif",
    views: "3.1M Vues",
    likes: "195.8K",
    comments: "5.6K",
    photoUrl: "/images/Anne-caro-logo.jpeg",
    videoUrl: "https://tiktok.com/@annecaroaction",
    badge: "Participatif"
  },
  {
    id: "p-5",
    title: "Testing Pépite : Mon crash test du micro karaoké nomade",
    category: "Pépites",
    categoryLabel: "Recommandation Pépite",
    views: "1.8M Vues",
    likes: "112.4K",
    comments: "2.7K",
    photoUrl: "/images/Anne-caro-1.JPG",
    videoUrl: "https://tiktok.com/@annecaroaction",
    badge: "Pépite Oasis"
  }
];

export const MagicScrollPortfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const filteredItems = selectedCategory === 'Tous'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E5D8]/15 overflow-x-hidden w-full break-inside-avoid">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#23272C] text-[#F0E5D8] border border-[#F0E5D8]/20 mb-4 whitespace-nowrap">
          <Clapperboard className="w-4 h-4 text-[#F0E5D8]" />
          <span>Portfolio & Showcase Interactif</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-[#F0E5D8] mb-3 leading-tight break-words max-w-full">
          Le Portfolio de Sagas Virales
        </h2>
        <p className="text-xs sm:text-base text-[#9DA4B0] leading-relaxed max-w-2xl mx-auto font-normal">
          Explorez l'ensemble des créations cultes et des séries récurrentes d'Anne-Caro.
        </p>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 no-print">
        {['Tous', 'Bureau', 'Vacances', 'Communauté', 'Pépites'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-[#F0E5D8] text-[#181A1D] shadow-lg scale-105'
                : 'bg-[#23272C] text-[#9DA4B0] border border-white/10 hover:text-white hover:border-[#F0E5D8]/40'
            }`}
          >
            {cat === 'Tous' ? 'Toutes les Sagas' : cat}
          </button>
        ))}
      </div>

      {/* Horizontal Smooth Magic Scroll Container */}
      <div className="overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-6 min-w-max skit-grid-print">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="w-[280px] sm:w-[320px] bg-[#23272C] rounded-3xl p-5 border border-[#F0E5D8]/15 shadow-2xl flex flex-col justify-between group overflow-hidden shrink-0 break-inside-avoid"
            >
              <div>
                {/* Smartphone Mockup */}
                <div className="relative w-full aspect-[9/16] skit-phone-print rounded-[28px] bg-[#181A1D] border-2 border-[#353B43] shadow-2xl overflow-hidden mb-4">
                  
                  {/* Photo with Object Cover Top framing */}
                  <img
                    src={item.photoUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 bg-[#181A1D]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#F0E5D8] border border-white/10 z-20">
                    {item.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#10B981] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md z-20">
                    {item.views}
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current text-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* TikTok Action Bar (Right Side) */}
                  <div className="absolute right-2.5 bottom-12 flex flex-col items-center gap-3 text-white z-20">
                    <div className="w-7 h-7 rounded-full border border-white overflow-hidden">
                      <img src="/images/Anne-caro-logo.jpeg" alt="Anne-Caro" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      <span className="text-[9px] font-bold font-mono">{item.likes}</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span className="text-[9px] font-bold font-mono">{item.comments}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center animate-spin-slow">
                      <Music className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Bottom Overlay Text */}
                  <div className="absolute left-3 bottom-3 right-12 text-white z-20 space-y-0.5">
                    <div className="text-[11px] font-bold font-mono">@annecaroaction</div>
                    <div className="text-[10px] text-white/80 line-clamp-1">
                      {item.title}
                    </div>
                  </div>

                </div>

                {/* Title & Category Info */}
                <div className="space-y-2 mb-4 px-1">
                  <h3 className="font-serif font-bold text-sm text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9DA4B0] border-t border-white/10 pt-2">
                    <span>Format : <strong className="text-[#F0E5D8]">{item.categoryLabel}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 no-print">
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary text-xs py-3 px-4 flex items-center justify-center gap-2 rounded-2xl"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#F0E5D8]" />
                  <span>Voir sur TikTok</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9DA4B0]" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
