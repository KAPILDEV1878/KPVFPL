
'use client';

import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProsperityRoadmap from '@/components/ProsperityRoadmap';
import WhoWeServe from '@/components/WhoWeServe';
import FinancityStandard from '@/components/FinancityStandard';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ProsperityRoadmap />
      <WhoWeServe />
      <FinancityStandard />
      <FAQ />
      <ContactSection />
    </div>
  );
}
