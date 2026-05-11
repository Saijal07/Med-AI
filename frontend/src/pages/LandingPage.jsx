import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/common/HeroSection';
import FeaturesSection from '../components/common/FeaturesSection';
import CTASection from '../components/common/CTASection';
import Footer from '../components/layout/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
