'use client';

import React, { useState } from 'react';
import { Product } from '@/data/productsData';
import { ShieldCheck, Copy, ExternalLink, Star, Heart, Check, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onCopyCode: (code: string, productTitle: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCopyCode }) => {
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleCopy = () => {
    if (!product.promoCode) return;
    navigator.clipboard.writeText(product.promoCode);
    setCopied(true);
    onCopyCode(product.promoCode, product.title);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden border border-[#EBE4DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
    >
      <div>
        {/* Product Image Wrapper with Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full bg-[#F4ECE4] overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            <span className="bg-[#2C2623]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
              {product.category}
            </span>
            {product.discountPercentage && (
              <span className="bg-[#C58B5C] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {product.discountPercentage}
              </span>
            )}
          </div>

          {/* Favorite Heart Toggle */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2C2623] hover:bg-white transition-colors shadow-md z-10"
          >
            <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'fill-[#C58B5C] text-[#C58B5C]' : ''}`} />
          </button>

          {/* Verified Badge Overlay */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#2C2623] border border-[#EBE4DC] flex items-center gap-1.5 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Vérifié & Testé</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2 text-xs font-bold text-[#8C6239] uppercase tracking-wider">
            <span>{product.brand}</span>
            <div className="flex items-center gap-1 text-[#C58B5C]">
              <Star className="w-3.5 h-3.5 fill-[#C58B5C]" />
              <span>{product.rating} ({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#2C2623] mb-3 leading-snug line-clamp-2 font-serif">
            {product.title}
          </h3>

          {/* Personal Quote */}
          <div className="bg-[#FAF6F1] p-4 rounded-2xl border border-[#E8DCD1] mb-5 text-xs text-[#6E6763] italic relative leading-relaxed">
            <Quote className="w-4 h-4 text-[#D4A373] mb-1 inline-block mr-1 opacity-70" />
            "{product.recommendation}"
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mb-2">
            {product.discountedPrice ? (
              <>
                <span className="text-2xl font-bold font-serif text-[#2C2623]">
                  {product.discountedPrice}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#9B948F] line-through">
                    {product.originalPrice}
                  </span>
                )}
              </>
            ) : (
              <span className="text-2xl font-bold font-serif text-[#2C2623]">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 space-y-3">
        {product.promoCode && (
          <div className="bg-[#F4ECE4] border border-dashed border-[#D4A373] p-3 rounded-2xl flex items-center justify-between gap-2">
            <div className="text-xs font-semibold text-[#6E6763] pl-1">
              Code promo: <span className="font-mono text-sm font-bold text-[#2C2623]">{product.promoCode}</span>
            </div>
            <button
              onClick={handleCopy}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                copied
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#2C2623] text-white hover:bg-[#3D3531]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copié !</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Copier</span>
                </>
              )}
            </button>
          </div>
        )}

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#2C2623] text-white font-bold py-3.5 px-4 rounded-2xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#C58B5C] transition-colors shadow-md"
        >
          <span>Obtenir l'offre / Voir le produit</span>
          <ExternalLink className="w-4 h-4 text-white/80" />
        </a>
      </div>
    </motion.div>
  );
};
