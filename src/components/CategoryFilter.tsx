
import React from 'react';
import { Home, Mountain, Waves, TreePine, Building, Tent, Castle, Star } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';

const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useSearch();

  const categories = [
    { id: 'all', label: 'All', icon: Home },
    { id: 'beachfront', label: 'Beachfront', icon: Waves },
    { id: 'mountains', label: 'Mountains', icon: Mountain },
    { id: 'countryside', label: 'Countryside', icon: TreePine },
    { id: 'city', label: 'City', icon: Building },
    { id: 'camping', label: 'Camping', icon: Tent },
    { id: 'luxury', label: 'Luxury', icon: Castle },
    { id: 'trending', label: 'Trending', icon: Star }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    console.log('Category selected:', categoryId);
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white sticky top-16 z-40 border-b border-gray-200 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`group flex flex-col items-center space-y-2 min-w-max pb-2 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105 -translate-y-1'
                    : 'hover:bg-white hover:shadow-md text-gray-600 hover:text-gray-900'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`p-2 rounded-lg transition-all duration-300 transform group-hover:rotateY-12 ${
                  activeCategory === category.id 
                    ? 'bg-white/20 shadow-inner' 
                    : 'group-hover:bg-red-50 group-hover:shadow-md'
                }`}>
                  <IconComponent className={`h-6 w-6 transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'text-white drop-shadow-lg' 
                      : 'group-hover:text-red-500'
                  }`} />
                </div>
                <span className={`text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'text-white font-semibold drop-shadow-sm' 
                    : 'group-hover:font-semibold'
                }`}>
                  {category.label}
                </span>
                {activeCategory === category.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* 3D Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 pointer-events-none" />
    </div>
  );
};

export default CategoryFilter;
