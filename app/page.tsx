'use client';

import React, { useState } from 'react';
import { MediaKitHeader } from '@/components/MediaKitHeader';
import { MediaKitHero } from '@/components/MediaKitHero';
import { AboutSection } from '@/components/AboutSection';
import { AudienceSection } from '@/components/AudienceSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BrandReferencesSection } from '@/components/BrandReferencesSection';
import { ContactSection } from '@/components/ContactSection';
import { MediaKitFooter } from '@/components/MediaKitFooter';
import { Toast } from '@/components/Toast';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] font-sans antialiased text-[#1A1A1A]">
      {/* Press Deck Header */}
      <MediaKitHeader />

      {/* Hero Cover Presentation Deck */}
      <MediaKitHero />

      {/* About & Creator Positioning */}
      <AboutSection />

      {/* Audience Demographics & TikTok Analytics */}
      <AudienceSection />

      {/* Collaboration Services & Rates */}
      <ServicesSection />

      {/* Brand Partnerships & Case Studies */}
      <BrandReferencesSection />

      {/* Brand Inquiries & Contact Form */}
      <ContactSection onShowToast={handleShowToast} />

      {/* Press Footer */}
      <MediaKitFooter />

      {/* Floating Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </main>
  );
}
