
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-500 to-red-700 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find Your Perfect
          <span className="block text-yellow-300"> Stay</span>
        </h1>
        <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
          Discover unique places to stay, from cozy apartments to luxury villas, all around the world. Your next adventure starts here.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
            <SearchBar />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-2xl font-bold">10K+</div>
            <div className="text-white/80 text-xs">Properties</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-2xl font-bold">50K+</div>
            <div className="text-white/80 text-xs">Happy Guests</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-2xl font-bold">100+</div>
            <div className="text-white/80 text-xs">Cities</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-2xl font-bold">25+</div>
            <div className="text-white/80 text-xs">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
