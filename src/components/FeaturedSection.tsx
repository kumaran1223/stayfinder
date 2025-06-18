
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Users, Bed, Bath } from 'lucide-react';

const FeaturedSection = () => {
  const featuredDestinations = [
    {
      id: 1,
      title: "Magical Goa Beaches",
      location: "Goa, India",
      rating: 4.8,
      reviews: 324,
      price: 4500,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience pristine beaches, vibrant nightlife, and Portuguese heritage",
      guests: 4,
      beds: 2,
      baths: 2,
      attractions: ["Baga Beach", "Fort Aguada", "Spice Plantations"]
    },
    {
      id: 2,
      title: "Serene Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.9,
      reviews: 189,
      price: 6500,
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Float through tranquil waters in traditional houseboats",
      guests: 6,
      beds: 3,
      baths: 2,
      attractions: ["Houseboat Cruise", "Kumarakom Bird Sanctuary", "Spice Gardens"]
    },
    {
      id: 3,
      title: "Royal Rajasthan Heritage",
      location: "Jaipur, Rajasthan",
      rating: 4.9,
      reviews: 267,
      price: 8500,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Stay in magnificent palaces and explore royal heritage",
      guests: 8,
      beds: 4,
      baths: 3,
      attractions: ["Amber Fort", "City Palace", "Hawa Mahal"]
    },
    {
      id: 4,
      title: "Himalayan Adventures",
      location: "Manali, Himachal Pradesh",
      rating: 4.7,
      reviews: 156,
      price: 5200,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Adventure sports, snow-capped peaks, and mountain serenity",
      guests: 6,
      beds: 3,
      baths: 2,
      attractions: ["Rohtang Pass", "Solang Valley", "Old Manali"]
    }
  ];

  const scrollToProperties = () => {
    const propertyGrid = document.getElementById('property-grid');
    if (propertyGrid) {
      propertyGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Famous Places to Explore</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover India's most enchanting destinations, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{destination.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {destination.guests}
                    </span>
                    <span className="flex items-center">
                      <Bed className="h-3 w-3 mr-1" />
                      {destination.beds}
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-3 w-3 mr-1" />
                      {destination.baths}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {destination.attractions.slice(0, 2).map((attraction, index) => (
                      <span key={index} className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
                        {attraction}
                      </span>
                    ))}
                    {destination.attractions.length > 2 && (
                      <span className="text-xs text-gray-400">+{destination.attractions.length - 2} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900">₹{destination.price}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  <span className="text-xs text-gray-500">({destination.reviews} reviews)</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToProperties}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All 50+ Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
