'use client';

import React, { useState } from 'react';
import { MediaKitHeader } from '@/components/MediaKitHeader';
import { MediaKitHero } from '@/components/MediaKitHero';
import { CertifiedMetricsCockpit } from '@/components/CertifiedMetricsCockpit';
import { CampaignROISimulator } from '@/components/CampaignROISimulator';
import { AboutSection } from '@/components/AboutSection';
import { AudienceSection } from '@/components/AudienceSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BrandReferencesSection } from '@/components/BrandReferencesSection';
import { MagicScrollPortfolio } from '@/components/MagicScrollPortfolio';
import { ContactSection } from '@/components/ContactSection';
import { MediaKitFooter } from '@/components/MediaKitFooter';
import { Toast } from '@/components/Toast';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#181A1D] font-sans antialiased text-[#F0E5D8] overflow-x-hidden">
      {/* Press Deck Header */}
      <MediaKitHeader />

      {/* Hero Cover Presentation Deck */}
      <MediaKitHero />

      {/* Certified Metrics Cockpit */}
      <CertifiedMetricsCockpit />

      {/* Interactive Campaign ROI Simulator */}
      <CampaignROISimulator />

      {/* About & Creator Positioning */}
      <AboutSection />

      {/* Audience Demographics & TikTok Analytics */}
      <AudienceSection />

      {/* Collaboration Services & Rates */}
      <ServicesSection />

      {/* Brand Partnerships & Case Studies */}
      <BrandReferencesSection />

      {/* Magic Scroll Interactive Portfolio */}
      <MagicScrollPortfolio />

      {/* Brand Inquiries & Contact Form */}
      <ContactSection onShowToast={handleShowToast} />

      {/* Press Footer */}
      <MediaKitFooter />

      {/* Floating Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </main>
  );
}
