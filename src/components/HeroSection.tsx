
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="h-[60vh] bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Find your perfect stay
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
              Discover amazing places to stay around the world
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="px-6 py-4 border-r border-gray-200 last:border-r-0">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Where</label>
                    <input 
                      type="text" 
                      placeholder="Search destinations" 
                      className="w-full text-sm placeholder-gray-400 border-0 focus:ring-0 p-0 font-medium"
                    />
                  </div>
                  
                  <div className="px-6 py-4 border-r border-gray-200 last:border-r-0">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Check in</label>
                    <input 
                      type="text" 
                      placeholder="Add dates" 
                      className="w-full text-sm placeholder-gray-400 border-0 focus:ring-0 p-0 font-medium"
                    />
                  </div>
                  
                  <div className="px-6 py-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Who</label>
                    <input 
                      type="text" 
                      placeholder="Add guests" 
                      className="w-full text-sm placeholder-gray-400 border-0 focus:ring-0 p-0 font-medium"
                    />
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-xl px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default HeroSection;
