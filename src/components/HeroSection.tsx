
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-500 to-red-700 py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect
          <span className="block text-yellow-300 text-5xl md:text-7xl"> Stay</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
          Discover unique places to stay, from cozy apartments to luxury villas, all around the world. Your next adventure starts here.
        </p>
        
        {/* Enhanced 3D Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl transform rotate-1 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/5 rounded-2xl transform -rotate-1 scale-105"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-3">
            <div className="text-2xl md:text-3xl font-bold">10K+</div>
            <div className="text-white/80 text-sm md:text-base">Properties</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-3">
            <div className="text-2xl md:text-3xl font-bold">50K+</div>
            <div className="text-white/80 text-sm md:text-base">Happy Guests</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-3">
            <div className="text-2xl md:text-3xl font-bold">100+</div>
            <div className="text-white/80 text-sm md:text-base">Cities</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-3">
            <div className="text-2xl md:text-3xl font-bold">25+</div>
            <div className="text-white/80 text-sm md:text-base">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
