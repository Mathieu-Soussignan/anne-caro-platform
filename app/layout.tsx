import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Media Kit Officiel | Anne-Caro (@annecaroaction)",
  description: "Dossier de Presse & Tarifs Partenariats Officiels d'Anne-Caro (@annecaroaction). 524.1K Abonnés, 69.6M Likes, 613M+ Vues. Opportunités de sponsoring et sagas de marque.",
  metadataBase: new URL("https://www.annecaroaction.fr"),
  keywords: ["Media Kit Anne Caro", "Partenariat TikTok", "Sponsor TikTok", "Anne Caro Tarifs", "Créatrice Humour TikTok", "Dossier de Presse Anne Caro"],
  openGraph: {
    title: "Media Kit Officiel | Anne-Caro (@annecaroaction)",
    description: "Découvrez les métadonnées certifiées, l'audience et les opportunités de partenariat avec Anne-Caro (524K+ Abonnés).",
    url: "https://www.annecaroaction.fr",
    siteName: "Media Kit Anne-Caro",
    locale: "fr_FR",
    type: "website",
    images: ["/images/Anne-caro-logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Kit Officiel | Anne-Caro (@annecaroaction)",
    description: "Partenariats de marque & Sagas vidéo humoristiques sur-mesure sur TikTok.",
    images: ["/images/Anne-caro-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth overflow-x-hidden">
      <body className="overflow-x-hidden w-full max-w-full bg-[#181A1D] text-[#F0E5D8] antialiased">
        {children}
      </body>
    </html>
  );
}
