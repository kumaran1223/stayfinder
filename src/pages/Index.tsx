
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import PropertyGrid from '@/components/PropertyGrid';
import FeaturedSection from '@/components/FeaturedSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoryFilter />
      <div id="property-grid">
        <PropertyGrid />
      </div>
      <FeaturedSection />
      <TestimonialSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
