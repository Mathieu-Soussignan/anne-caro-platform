import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Anne-Caro (@annecaroaction) | Site Officiel & Media Kit TikTok",
  description: "Découvrez les pépites, codes promos et la sélection exclusive d'Anne-Caro (524K+ abonnés TikTok). Media Kit interactif certifié pour les marques et agences PR.",
  keywords: ["Anne-Caro", "annecaroaction", "TikTok France", "Media Kit TikTok", "Bons plans lifestyle", "Codes promo beauté"],
  openGraph: {
    title: "Anne-Caro (@annecaroaction) | Plateforme Officielle & Media Kit",
    description: "524K+ Abonnés • 613M+ Vues Cumulées • 81% Audience Féminine",
    images: ["/images/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
