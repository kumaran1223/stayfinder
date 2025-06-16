
import React from 'react';
import { Star, MapPin, Calendar } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';

const FeaturedSection = () => {
  const { setSearchQuery } = useSearch();

  const destinations = [
    {
      id: 1,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop',
      distance: '2 hours away',
      properties: '500+ stays'
    },
    {
      id: 2,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop',
      distance: '4 hours away',
      properties: '300+ stays'
    },
    {
      id: 3,
      name: 'Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      distance: '6 hours away',
      properties: '200+ stays'
    },
    {
      id: 4,
      name: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop',
      distance: '8 hours away',
      properties: '400+ stays'
    }
  ];

  const handleDestinationClick = (destinationName: string) => {
    setSearchQuery(destinationName);
    console.log('Exploring destination:', destinationName);
    // You can add navigation logic here
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore nearby destinations</h2>
          <p className="text-lg text-gray-600">Plan your next adventure with ease</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleDestinationClick(destination.name)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                  <div className="flex items-center space-x-1 text-sm opacity-90">
                    <MapPin className="h-3 w-3" />
                    <span>{destination.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm opacity-90">
                    <Calendar className="h-3 w-3" />
                    <span>{destination.properties}</span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg">
                    Explore {destination.name}
                  </span>
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
