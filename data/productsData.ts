export interface Product {
  id: string;
  title: string;
  category: "🔥 Les Incontournables" | "💄 Beauté & Routine" | "🏠 Maison & Organisation" | "🎁 Bons Plans";
  brand: string;
  imageUrl: string;
  recommendation: string;
  originalPrice?: string;
  discountedPrice?: string;
  promoCode?: string;
  discountPercentage?: string;
  verified: boolean;
  affiliateUrl: string;
  rating: number;
  reviewsCount: number;
  badgeText?: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "serum-glow-eclat",
    title: "Sérum Éclat Intense & Anti-Taches Peau Neuve",
    category: "💄 Beauté & Routine",
    brand: "Lumière Botanique",
    imageUrl: "/images/serum.jpg",
    recommendation: "Mon indispensable absolu du matin ! Il donne un glow incroyable dès la première application sans effet gras.",
    originalPrice: "49,90 €",
    discountedPrice: "34,90 €",
    promoCode: "ANNECA20",
    discountPercentage: "-30%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.9,
    reviewsCount: 1420,
    badgeText: "Best-seller Routine"
  },
  {
    id: "lampe-champignon-oak",
    title: "Lampe Tactile d'Ambiance Sculpturale en Céramique",
    category: "🏠 Maison & Organisation",
    brand: "Maison Mura",
    imageUrl: "/images/lamp.jpg",
    recommendation: "Vous me la demandez à chaque vidéo TikTok ! Une lumière douce parfait pour créer une ambiance cocooning le soir.",
    originalPrice: "79,00 €",
    discountedPrice: "59,00 €",
    promoCode: "ANNECOZY",
    discountPercentage: "-25%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.95,
    reviewsCount: 860,
    badgeText: "Vu sur TikTok 🔥"
  },
  {
    id: "sac-vanity-voyage",
    title: "Trousse / Vanity de Voyage Compartimenté Nude",
    category: "🏠 Maison & Organisation",
    brand: "Nomade Chic",
    imageUrl: "/images/bag.jpg",
    recommendation: "L'organisateur rêvé. Il contient toute ma routine beauté sans rien écraser. Cuir végan ultra robuste !",
    originalPrice: "42,00 €",
    discountedPrice: "29,90 €",
    promoCode: "ANNETRAVEL",
    discountPercentage: "-28%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.88,
    reviewsCount: 630,
    badgeText: "Organisation Top"
  },
  {
    id: "baume-cleansing-silk",
    title: "Baume Démaquillant Fondant à l'Huile de Camélia",
    category: "💄 Beauté & Routine",
    brand: "Aura Skincare",
    imageUrl: "/images/serum.jpg",
    recommendation: "Fait disparaître le maquillage même waterproof en 30 secondes chrono sans piquer les yeux. Un pur bonheur.",
    originalPrice: "32,00 €",
    discountedPrice: "24,00 €",
    promoCode: "ANNECLEAN",
    discountPercentage: "-25%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.92,
    reviewsCount: 950,
    badgeText: "Coup de Cœur"
  },
  {
    id: "diffuseur-brume-gold",
    title: "Diffuseur d'Huiles Essentielles Design & Silencieux",
    category: "🔥 Les Incontournables",
    brand: "Aroma Zen",
    imageUrl: "/images/lamp.jpg",
    recommendation: "Mon rituel détente du soir avec de l'huile de lavande. Objet de décoration magnifique et brume ultra légère.",
    originalPrice: "65,00 €",
    discountedPrice: "45,50 €",
    promoCode: "ANNEZEN30",
    discountPercentage: "-30%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.85,
    reviewsCount: 410,
    badgeText: "Pépite Confort"
  },
  {
    id: "coffret-pinceaux-velours",
    title: "Coffret 10 Pinceaux Maquillage Soie Synthétique",
    category: "🎁 Bons Plans",
    brand: "Velvet Studio",
    imageUrl: "/images/bag.jpg",
    recommendation: "Qualité professionnelle à prix tout doux avec mon code exclusif. Une douceur inégalée pour le teint.",
    originalPrice: "58,00 €",
    discountedPrice: "34,80 €",
    promoCode: "ANNEBRUSH40",
    discountPercentage: "-40%",
    verified: true,
    affiliateUrl: "#",
    rating: 4.91,
    reviewsCount: 1180,
    badgeText: "Offre Exclusivité"
  }
];
