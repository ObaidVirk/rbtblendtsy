"use client";

import HeroSection from "@/components/HeroSection";
import { useTranslation } from "@/lib/TranslationContext";
import { mockStats } from "@/lib/mockData";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <HeroSection
      tag="The Future of Financial Technology"
      title={t.hero.headline}
      subtitle={t.hero.subheadline}
      primaryCta={{ label: t.hero.cta, href: "/solutions" }}
      secondaryCta={{ label: t.hero.ctaSecondary, href: "/contact" }}
      stats={mockStats}
    />
  );
}
