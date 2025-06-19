
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-500 to-red-700 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect
          <span className="block text-yellow-300 text-5xl md:text-7xl"> Stay</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover unique places to stay, from cozy apartments to luxury villas, all around the world. Your next adventure starts here.
        </p>
        
        {/* Clean Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-1 shadow-2xl border border-white/30 transform hover:scale-[1.02] transition-all duration-300">
            <SearchBar />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold">10K+</div>
            <div className="text-white/80 text-sm md:text-base">Properties</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold">50K+</div>
            <div className="text-white/80 text-sm md:text-base">Happy Guests</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold">100+</div>
            <div className="text-white/80 text-sm md:text-base">Cities</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300 hover:bg-white/10 rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold">25+</div>
            <div className="text-white/80 text-sm md:text-base">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
