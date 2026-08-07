export interface Product {
  id: string;
  title: string;
  category: string;
  recommendation: string;
  quote?: string;
  originalPrice?: string;
  discountedPrice?: string;
  price?: string;
  discountPercentage?: string;
  promoCode?: string;
  affiliateUrl: string;
  affiliateLink?: string;
  imageUrl: string;
  brand: string;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  badge?: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "micro-karaoke",
    title: "Micro Karaoké Sans Fil Shinepick",
    category: "Incontournables",
    brand: "Shinepick",
    rating: 4.8,
    reviewsCount: 1420,
    recommendation: "Le fameux micro pour chanter, rigoler et mettre l'ambiance !",
    quote: "Le fameux micro pour chanter, rigoler et mettre l'ambiance !",
    originalPrice: "29,99 €",
    discountedPrice: "24,99 €",
    price: "24,99 €",
    discountPercentage: "-17%",
    affiliateUrl: "https://amzn.to/4wei2kk",
    affiliateLink: "https://amzn.to/4wei2kk",
    imageUrl: "/images/amazon_partner/micro.jpg",
    featured: true,
    badge: "🔥 Top Ventes"
  },
  {
    id: "mug-favori",
    title: "Mug Design & Chill",
    category: "Maison & Déco",
    brand: "Oasis Home",
    rating: 4.9,
    reviewsCount: 890,
    recommendation: "Mon mug chouchou pour le café ou le thé de la journée ☕",
    quote: "Mon mug chouchou pour le café ou le thé de la journée ☕",
    originalPrice: "19,99 €",
    discountedPrice: "14,99 €",
    price: "14,99 €",
    discountPercentage: "-25%",
    affiliateUrl: "https://amzn.to/4hgXTWZ",
    affiliateLink: "https://amzn.to/4hgXTWZ",
    imageUrl: "/images/amazon_partner/mug.jpg",
    featured: true,
    badge: "🤍 Coup de Cœur"
  },
  {
    id: "carnet-smarpau-a5",
    title: "Carnet de Note Format A5 - Smarpau",
    category: "Organisation & Papeterie",
    brand: "Smarpau",
    rating: 4.7,
    reviewsCount: 650,
    recommendation: "Incontournable pour poser ses idées, sa To-Do list et s'organiser.",
    quote: "Incontournable pour poser ses idées, sa To-Do list et s'organiser.",
    originalPrice: "15,99 €",
    discountedPrice: "12,99 €",
    price: "12,99 €",
    affiliateUrl: "https://amzn.to/4bvspc0",
    affiliateLink: "https://amzn.to/4bvspc0",
    imageUrl: "/images/amazon_partner/carnet_a5.jpg",
    badge: "✨ Pépite Organisation"
  },
  {
    id: "stylos-kawaii",
    title: "Lot de Stylos Kawaii",
    category: "Organisation & Papeterie",
    brand: "Kawaii Studio",
    rating: 4.9,
    reviewsCount: 1120,
    recommendation: "Les stylos mignons qui donnent envie d'écrire tous les jours !",
    quote: "Les stylos mignons qui donnent envie d'écrire tous les jours !",
    originalPrice: "12,99 €",
    discountedPrice: "9,99 €",
    price: "9,99 €",
    affiliateUrl: "https://amzn.to/3Sk7PVp",
    affiliateLink: "https://amzn.to/3Sk7PVp",
    imageUrl: "/images/amazon_partner/stylo_kawaii.jpg",
    badge: "🌸 Trop Mignon"
  },
  {
    id: "trieur-a4",
    title: "Trieur & Organiseur A4",
    category: "Organisation & Papeterie",
    brand: "Office Pro",
    rating: 4.6,
    reviewsCount: 430,
    recommendation: "Le sauveur pour trier tous les papiers et garder un bureau propre.",
    quote: "Le sauveur pour trier tous les papiers et garder un bureau propre.",
    originalPrice: "18,99 €",
    price: "18,99 €",
    affiliateUrl: "https://amzn.to/4z0qRkl",
    affiliateLink: "https://amzn.to/4z0qRkl",
    imageUrl: "/images/amazon_partner/trieur_a4.jpg"
  },
  {
    id: "livre-theatre",
    title: "Livre - Cours de théâtre pour tous",
    category: "Incontournables",
    brand: "Éditions Théâtre",
    rating: 4.9,
    reviewsCount: 980,
    recommendation: "Un super livre pour développer sa prise de parole et s'amuser !",
    quote: "Un super livre pour développer sa prise de parole et s'amuser !",
    originalPrice: "22,00 €",
    price: "22,00 €",
    affiliateUrl: "https://amzn.to/4fO3jGk",
    affiliateLink: "https://amzn.to/4fO3jGk",
    imageUrl: "/images/amazon_partner/livre_theatre_.jpg",
    badge: "📚 Recommandation"
  }
];

export const productsData = PRODUCTS_DATA;
