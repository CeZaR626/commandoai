
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ProcessSteps from '@/components/ProcessSteps';
import GamificationSection from '@/components/GamificationSection';
import BenefitsSection from '@/components/BenefitsSection';
import FounderSection from '@/components/FounderSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSteps />
      <GamificationSection />
      <BenefitsSection />
      <FounderSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
