
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-red-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Find your perfect
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500"> stay</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover unique places to stay around the world. From cozy homes to luxury villas.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
