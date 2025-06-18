
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
    <div className="bg-white sticky top-16 z-40 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col items-center space-y-2 min-w-max pb-2 border-b-2 transition-all hover:text-gray-900 hover:border-gray-300 ${
                  activeCategory === category.id
                    ? 'border-red-500 text-red-500'
                    : 'border-transparent text-gray-600'
                }`}
              >
                <IconComponent className="h-6 w-6" />
                <span className="text-xs font-medium whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
