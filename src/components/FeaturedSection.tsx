
import React from 'react';
import { useSearch } from '@/hooks/useSearch';

const FeaturedSection = () => {
  const { setSearchQuery, setActiveCategory } = useSearch();

  const destinations = [
    {
      name: "Goa",
      description: "Tropical beaches and vibrant nightlife",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "beachfront"
    },
    {
      name: "Kerala",
      description: "Backwaters and hill stations",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "countryside"
    },
    {
      name: "Rajasthan",
      description: "Royal palaces and desert adventures",
      image: "https://images.unsplash.com/photo-1599661046827-dacde2a11954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "luxury"
    },
    {
      name: "Himachal Pradesh",
      description: "Snow-capped mountains and valleys",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "mountains"
    }
  ];

  const handleDestinationClick = (destination: any) => {
    setSearchQuery(destination.name);
    setActiveCategory(destination.category);
    // Scroll to property grid
    const propertyGrid = document.querySelector('#property-grid');
    if (propertyGrid) {
      propertyGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore nearby destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover amazing places close to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              onClick={() => handleDestinationClick(destination)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
