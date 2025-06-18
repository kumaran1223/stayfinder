
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-500 to-red-700 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Find Your Perfect
          <span className="block text-yellow-300"> Stay</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Discover unique places to stay, from cozy apartments to luxury villas, all around the world. Your next adventure starts here.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
            <SearchBar />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-white/80">Properties</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-white/80">Happy Guests</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-white/80">Cities</div>
          </div>
          <div>
            <div className="text-3xl font-bold">25+</div>
            <div className="text-white/80">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
