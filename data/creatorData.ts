export interface Skit {
  id: string;
  title: string;
  views: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const CREATOR_DATA = {
  name: "Anne-Caro",
  handle: "@annecaroaction",
  secondaryHandle: "@annecaroinlife",
  title: "Créatrice de Contenu Humour & Situations du Quotidien",
  tagline: "Des situations du quotidien, parfois gênantes... parfois vraies. T'aurais réagi comment ?",
  avatarUrl: "/images/Anne-caro-logo.jpeg",
  portraitStory: "/images/Anne-caro-1.JPG",
  stats: {
    followers: "524.1K",
    likes: "69.6M",
    views: "613M+",
    engagementRate: "8.4%",
    avgViewsPerVideo: "450K",
  },
  audience: {
    ageGroup: "18-35 ans (82%)",
    genderSplit: "68% Femmes / 32% Hommes",
    topLocation: "France (85%), Belgique (8%), Suisse (4%)",
    interests: "Humour du quotidien, vie de bureau, parodies, lifestyle, dénicheuse de pépites",
  },
  services: [
    {
      id: "skit-sponsor",
      title: "Sketch Dédié & Intégration Marque",
      description: "Scénarisation sur-mesure d'un sketch humoristique du quotidien intégrant naturellement votre produit ou service.",
      price: "Sur Devis",
      features: [
        "Écriture du script & concept original",
        "Publication sur TikTok (@annecaroaction)",
        "Droits de réutilisation réseaux sociaux (30 jours)",
        "Rapport de performances analytiques complet"
      ]
    },
    {
      id: "brand-ambassador",
      title: "Ambassadrice & Saga Multi-Vidéos",
      description: "Accompagnement long terme avec création d'une série récurrente de vidéos ou saga humoristique.",
      price: "Sur Devis",
      features: [
        "3 à 5 sketchs scénarisés par mois",
        "Exclusivité sectorielle",
        "Storytelling incarné & testing pépites",
        "Présence sur le canal privé 'Ici on papote'"
      ]
    }
  ],
  skits: [
    {
      id: "skit-1",
      title: "La Chargée d'Accueil : Quand Mathilde gère l'arrivée du nouveau stagiaire",
      views: "3.8M Vues",
      category: "Série Culte",
      thumbnailUrl: "/images/Anne-caro-logo-2.JPG",
      videoUrl: "https://tiktok.com/@annecaroaction",
    },
    {
      id: "skit-2",
      title: "Les réunions RH qui auraient pu être un simple mail",
      views: "2.9M Vues",
      category: "Parodie Bureau",
      thumbnailUrl: "/images/Anne-caro-logo-3.jpeg",
      videoUrl: "https://tiktok.com/@annecaroaction",
    },
    {
      id: "skit-3",
      title: "Drama en Vacances : Épisode 1 - La réservation AirBnb douteuse",
      views: "2.4M Vues",
      category: "Série Été",
      thumbnailUrl: "/images/Anne-caro-logo-4.JPG",
      videoUrl: "https://tiktok.com/@annecaroaction",
    }
  ] as Skit[]
};
