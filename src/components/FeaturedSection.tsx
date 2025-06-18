
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const FeaturedSection = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Loft in Downtown",
      location: "New York, NY",
      rating: 4.8,
      reviews: 124,
      price: 120,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Apartment",
      guests: 4,
      beds: 2,
      baths: 2
    },
    {
      id: 2,
      title: "Cozy Beach House",
      location: "Malibu, CA",
      rating: 4.9,
      reviews: 89,
      price: 280,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "House",
      guests: 8,
      beds: 4,
      baths: 3
    },
    {
      id: 3,
      title: "Luxury Villa with Pool",
      location: "Miami, FL",
      rating: 5.0,
      reviews: 67,
      price: 450,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Villa",
      guests: 10,
      beds: 5,
      baths: 4
    },
    {
      id: 4,
      title: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      rating: 4.7,
      reviews: 156,
      price: 200,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Cabin",
      guests: 6,
      beds: 3,
      baths: 2
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional stays, each offering unique experiences and outstanding hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {property.badge}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 p-2 hover:bg-white/20"
                >
                  <span className="text-white text-lg">♡</span>
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{property.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{property.rating}</span>
                    <span className="text-xs text-gray-500">({property.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>{property.guests} guests</span>
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-semibold text-gray-900">${property.price}</span>
                  <span className="text-gray-600 text-sm">/night</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-50"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
