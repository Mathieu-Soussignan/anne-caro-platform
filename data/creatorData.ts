export interface AgeDemographic {
  range: string;
  percentage: number;
}

export interface CountryDemographic {
  country: string;
  flag: string;
  percentage: number;
}

export interface CollabService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  startingRate?: string;
  popular?: boolean;
}

export interface ContentPillar {
  title: string;
  tag: string;
  description: string;
  iconName: string;
}

export const MEDIA_KIT_DATA = {
  name: "Anne-Caro",
  handle: "@annecaroaction",
  title: "Créatrice de Contenu Humoristique, Sketchs & Lifestyle",
  tagline: "L'art d'allier humour viral, storytelling authentique et impact marque.",
  categories: ["Sketchs & Humour", "Vie Quotidienne & Situations Réelles", "Lifestyle & Storytelling"],
  quote: "Transformer les scènes du quotidien en sketchs viraux désopilants pour créer un attachement émotionnel fort entre votre marque et ma communauté.",
  bio: "Incontournable sur TikTok avec ses sketchs humoristiques percutants et ses parodies du quotidien, Anne-Caro captive plus de 524 000 abonnés. Son style : un humour fin, pétillant et relatable qui cumule plus de 613 millions de vues.",
  location: "France (Paris)",
  email: "contact@annecaroaction.com",
  status: "Disponible pour partenariats & campagnes 2026",
  
  portraits: {
    heroCover: "/images/portrait1.jpg",
    aboutMe: "/images/portrait2.jpg",
    contactCard: "/images/portrait3.jpg",
  },

  keyStats: [
    { label: "Abonnés TikTok", value: "524K+", subtext: "Communauté engagée" },
    { label: "Mentions J'aime", value: "69.3M+", subtext: "Engagement viral" },
    { label: "Vues Cumulées", value: "613M+", subtext: "Portée globale" },
    { label: "Vues Annuelles", value: "139.8M", subtext: "12 derniers mois" },
    { label: "Visites Profil/An", value: "3.7M+", subtext: "Intention & Clics bio" },
  ],

  experienceStats: [
    { value: "613M+", label: "Vues Cumulées TikTok" },
    { value: "139.8M", label: "Vues sur 12 Mois" },
    { value: "81%", label: "Audience Féminine" },
    { value: "87.8%", label: "Audience en France" },
  ],

  contentPillars: [
    {
      title: "Sketchs Humoristiques & Parodies",
      tag: "Humour Viral",
      description: "Des mises en scène désopilantes et des situations réelles du quotidien (travail, relations, absurdités de la vie) qui déclenchent un partage massif.",
      iconName: "Laugh"
    },
    {
      title: "Storytelling & Authenticité",
      tag: "Proximité",
      description: "Un ton spontané, chaleureux et complice qui instaure un climat de confiance naturelle avec une communauté active à 81% féminine.",
      iconName: "Sparkles"
    },
    {
      title: "Intégration Marque Fluide",
      tag: "Placement Mémorable",
      description: "Le produit ou service est sublimé au cœur du scénario sans rupture publicitaire, garantissant mémorisation et sympathie.",
      iconName: "TrendingUp"
    }
  ] as ContentPillar[],

  demographics: {
    gender: [
      { label: "Femmes", percentage: 81, color: "#C58B5C" },
      { label: "Hommes", percentage: 18, color: "#1A1A1A" },
      { label: "Autres", percentage: 1, color: "#E8DCD1" },
    ],
    age: [
      { range: "25 - 34 ans", percentage: 38.3 },
      { range: "18 - 24 ans", percentage: 32.7 },
      { range: "35 - 44 ans", percentage: 15.9 },
      { range: "45 ans et +", percentage: 13.1 },
    ] as AgeDemographic[],
    countries: [
      { country: "France", flag: "🇫🇷", percentage: 87.8 },
      { country: "Belgique", flag: "🇧🇪", percentage: 2.4 },
      { country: "Canada", flag: "🇨🇦", percentage: 2.1 },
      { country: "La Réunion", flag: "🇷🇪", percentage: 1.9 },
      { country: "Suisse", flag: "🇨🇭", percentage: 1.7 },
    ] as CountryDemographic[],
  },

  services: [
    {
      id: "sketch-dedie",
      title: "Sketch Humoristique Dédié",
      subtitle: "Vidéo TikTok Scénarisée (60s - 90s)",
      description: "Création d'une vidéo originale humoristique dans laquelle votre marque devient un élément clé du scénario avec un ton décalé et percutant.",
      deliverables: [
        "Ecriture du script sur-mesure",
        "Tournage, montage & direction artistique HD",
        "Lien permanent dans la bio (30 jours)",
        "Code promo / lien tracké en légende",
        "Bilan complet des performances à J+14"
      ],
      startingRate: "Sur mesure",
      popular: true,
    },
    {
      id: "pack-story-coulisses",
      title: "Pack Stories & Coulisses",
      subtitle: "Immersion & Témoignage Spontané",
      description: "Prises de parole informelles, coulisses de tournage et présentation spontanée de votre marque avec lien direct.",
      deliverables: [
        "3 à 5 Stories immersives en direct",
        "Sticker de lien direct vers l'offre",
        "Mise en avant en Story à la Une",
        "Interaction naturelle avec la communauté"
      ],
      startingRate: "Sur mesure",
    },
    {
      id: "ambassadrice-marque",
      title: "Ambassadrice & Contenu Récurrent",
      subtitle: "Partenariat Long Terme (3 à 12 Mois)",
      description: "Présence régulière dans mes sketchs mensuels pour inscrire durablement votre marque dans l'esprit de ma communauté.",
      deliverables: [
        "Série de vidéos dédiées + Stories mensuelles",
        "Droits d'amplification publicitaire Spark Ads",
        "Exclusivité sectorielle garantie",
        "Co-création de concepts viraux exclusifs"
      ],
      startingRate: "Sur mesure",
      popular: true,
    },
    {
      id: "spark-ads",
      title: "Amplification Spark Ads (Whitelisting)",
      subtitle: "TikTok Ads & Multi-diffusions",
      description: "Droits d'utilisation et d'amplification publicitaire du contenu vidéo sur votre propre gestionnaire de publicités TikTok / Meta.",
      deliverables: [
        "Code d'autorisation Spark Ads fourni",
        "Droits de diffusion 30, 60 ou 90 jours",
        "Accroches vidéo déclinées",
        "Optimisation du taux de conversion pub"
      ],
      startingRate: "Sur mesure",
    }
  ] as CollabService[],

  creativeFormats: [
    {
      title: "Parodies & Situations du Quotidien",
      description: "Humour fin sur la vie de tous les jours, les relations et le travail. Le produit résout une situation avec humour.",
      metric: "1M+ Vues Moyennes / Vidéo Virale"
    },
    {
      title: "Placement Produit Décalé & Spontané",
      description: "Intégration produit au second degré avec un rôle clé qui marque les esprits.",
      metric: "Taux de rétention élevé"
    },
    {
      title: "Storytelling & Clin d'œil Complice",
      description: "Un échange direct et chaleureux avec l'audience qui suscite des commentaires très engagés.",
      metric: "81% Audience Féminine Captive"
    }
  ]
};
