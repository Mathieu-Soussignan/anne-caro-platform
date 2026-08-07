export interface Skit {
  id: string;
  title: string;
  views: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  engagementRate?: string;
  shares?: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startingRate: string;
  price: string;
  popular?: boolean;
  badge?: string;
  deliverables: string[];
  features: string[];
}

export const MEDIA_KIT_DATA = {
  name: "Anne-Caro",
  handle: "@annecaroaction",
  secondaryHandle: "@annecaroinlife",
  title: "Créatrice de Contenu Humour & Parodies du Quotidien",
  subTitle: "La référence francophone des sketchs de bureau, réunions RH et quiproquos du quotidien.",
  tagline: "Des situations du quotidien... parfois gênantes, parfois vraies. T'aurais réagi comment ?",
  quote: "Mon engagement : transformer votre message de marque en une saga humoristique virale que la communauté adore et repartage.",
  email: "annecarolinehubertpro13@gmail.com",
  location: "Paris, France • Rayonnement France, Belgique, Suisse",
  avatarUrl: "/images/Anne-caro-logo.jpeg",
  portraitStory: "/images/Anne-caro-1.JPG",
  portraits: {
    aboutMe: "/images/Anne-caro-1.JPG",
    contactCard: "/images/Anne-caro-logo.jpeg",
    heroCover: "/images/Anne-caro-logo-2.JPG"
  },
  verifiedBadge: "Vérifié TikTok Creator Marketplace",
  categories: ["Humour Bureau", "Lifestyle", "Parodies", "Pépites & Testing"],
  
  stats: {
    followers: "524.1K",
    likes: "69.6M",
    views: "613M+",
    engagementRate: "8.4%",
    avgViewsPerVideo: "450K+",
    completionRate: "74%",
    sharesAvg: "18.2K"
  },

  experienceStats: [
    { label: "Vues Cumulées", value: "613M+", trend: "+14M ce mois" },
    { label: "Abonnés Fidèles", value: "524.1K", trend: "100% Organique" },
    { label: "Taux d'Engagement", value: "8.4%", trend: "3x Moyenne Secteur" },
    { label: "Vues Moyennes / Vidéo", value: "450K+", trend: "Top 1% France" }
  ],

  contentPillars: [
    { title: "Parodies de Bureau", desc: "Situations RH, réunions et collègues cultes", tag: "Série Culte", description: "Situations RH, réunions et collègues cultes" },
    { title: "Sagas d'Été & Vacances", desc: "Drama & galères de vacances racontés avec dérision", tag: "Saison", description: "Drama & galères de vacances racontés avec dérision" },
    { title: "Pépites & Testing", desc: "Trouvailles et recommandations authentiques testées en conditions réelles", tag: "Lifestyle", description: "Trouvailles et recommandations authentiques testées en conditions réelles" }
  ],

  demographics: {
    age: [
      { label: "18-24 ans", range: "18-24 ans", percentage: "45%" },
      { label: "25-34 ans", range: "25-34 ans", percentage: "37%" },
      { label: "35-44 ans", range: "35-44 ans", percentage: "12%" },
      { label: "45+ ans", range: "45+ ans", percentage: "6%" }
    ],
    countries: [
      { name: "France", country: "France", flag: "🇫🇷", percentage: "85%" },
      { name: "Belgique", country: "Belgique", flag: "🇧🇪", percentage: "8%" },
      { name: "Suisse", country: "Suisse", flag: "🇨🇭", percentage: "4%" },
      { name: "Autres", country: "Autres", flag: "🌍", percentage: "3%" }
    ]
  },

  audience: {
    ageGroup: "18-35 ans (82%)",
    genderSplit: "68% Femmes / 32% Hommes",
    topLocation: "France (85%), Belgique (8%), Suisse (4%)",
    interests: "Humour du quotidien, vie de bureau, parodies, lifestyle, dénicheuse de pépites",
    demographics: {
      age: [
        { label: "18-24 ans", range: "18-24 ans", percentage: "45%" },
        { label: "25-34 ans", range: "25-34 ans", percentage: "37%" }
      ],
      countries: [
        { name: "France", country: "France", flag: "🇫🇷", percentage: "85%" },
        { name: "Belgique", country: "Belgique", flag: "🇧🇪", percentage: "8%" },
        { name: "Suisse", country: "Suisse", flag: "🇨🇭", percentage: "4%" }
      ]
    }
  },

  creativeFormats: [
    { title: "Sketch Dédié (60s)", description: "Scénarisation sur-mesure d'un sketch humoristique incarné intégrant naturellement votre produit.", metric: "450K Vues Moyennes" },
    { title: "Série & Saga Multi-Vidéos", description: "Saga humoristique récurrente sur 3 à 5 épisodes créant un rendez-vous abonné.", metric: "Impact Mémoriel Maximum" },
    { title: "Testing Pépite & Recommandation", description: "Présentation authentique du produit dans l'Inventaire de l'Oasis avec lien privilégié.", metric: "Taux de Clic Élevé" }
  ],

  services: [
    {
      id: "skit-sponsor",
      title: "Sketch Dédié & Intégration Marque",
      subtitle: "Format court viral sur-mesure (60s)",
      description: "Scénarisation originale d'un sketch humoristique du quotidien intégrant naturellement votre produit ou service.",
      startingRate: "1 500 €",
      price: "1 500 €",
      popular: true,
      badge: "Recommandé Marque",
      deliverables: [
        "Écriture du script & concept original approuvé",
        "Tournage HD & montage dynamique aux normes TikTok",
        "Publication sur le compte principal @annecaroaction (524K+)",
        "Droits de réutilisation réseaux sociaux pour la marque (30 jours)",
        "Rapport analytique complet à J+7 et J+30"
      ],
      features: [
        "Écriture du script & concept original approuvé",
        "Tournage HD & montage dynamique aux normes TikTok",
        "Publication sur le compte principal @annecaroaction (524K+)",
        "Droits de réutilisation réseaux sociaux pour la marque (30 jours)",
        "Rapport analytique complet à J+7 et J+30"
      ]
    },
    {
      id: "brand-ambassador",
      title: "Ambassadrice & Saga Multi-Vidéos",
      subtitle: "Partenariat long terme & Storytelling incarné",
      description: "Accompagnement mensuel ou trimestriel avec création d'une série récurrente de vidéos humoristiques sur-mesure.",
      startingRate: "3 800 €",
      price: "Sur Devis",
      popular: false,
      badge: "Impact Maximum",
      deliverables: [
        "Pack 3 à 5 sketchs scénarisés par mois",
        "Exclusivité sectorielle garantie sur la durée du partenariat",
        "Storytelling incarné & testing pépites régulier",
        "Présence sponsorisée sur le canal privé 'Ici on papote'",
        "Droits de réutilisation publicitaire (TikTok Ads Allowed)"
      ],
      features: [
        "Pack 3 à 5 sketchs scénarisés par mois",
        "Exclusivité sectorielle garantie sur la durée du partenariat",
        "Storytelling incarné & testing pépites régulier",
        "Présence sponsorisée sur le canal privé 'Ici on papote'",
        "Droits de réutilisation publicitaire (TikTok Ads Allowed)"
      ]
    }
  ] as ServiceOffer[],

  skits: [
    {
      id: "skit-1",
      title: "La Chargée d'Accueil : Quand Mathilde gère l'arrivée du nouveau stagiaire",
      views: "3.8M Vues",
      category: "Série Culte",
      thumbnailUrl: "/images/Anne-caro-logo-2.JPG",
      videoUrl: "https://tiktok.com/@annecaroaction",
      engagementRate: "9.2%",
      shares: "24.5K"
    },
    {
      id: "skit-2",
      title: "Les réunions RH qui auraient pu être un simple mail",
      views: "2.9M Vues",
      category: "Parodie Bureau",
      thumbnailUrl: "/images/Anne-caro-logo-3.jpeg",
      videoUrl: "https://tiktok.com/@annecaroaction",
      engagementRate: "8.7%",
      shares: "19.1K"
    },
    {
      id: "skit-3",
      title: "Drama en Vacances : Épisode 1 - La réservation AirBnb douteuse",
      views: "2.4M Vues",
      category: "Série Été",
      thumbnailUrl: "/images/Anne-caro-logo-4.JPG",
      videoUrl: "https://tiktok.com/@annecaroaction",
      engagementRate: "8.1%",
      shares: "15.8K"
    }
  ] as Skit[]
};

export const CREATOR_DATA = MEDIA_KIT_DATA;
