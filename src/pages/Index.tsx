
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import PropertyGrid from '@/components/PropertyGrid';
import FeaturedSection from '@/components/FeaturedSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import { SearchProvider } from '@/hooks/useSearch';

const Index = () => {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <CategoryFilter />
        <PropertyGrid />
        <FeaturedSection />
        <TestimonialSection />
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Index;
