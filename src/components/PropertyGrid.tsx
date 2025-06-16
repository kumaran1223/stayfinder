
import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = () => {
  // Sample property data - in real app this would come from Supabase
  const properties = [
    {
      id: '1',
      title: 'Flat in Bengaluru',
      location: 'Bengaluru, Karnataka',
      price: 2280,
      rating: 4.83,
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '2',
      title: 'Flat in Hebbal Kempapura',
      location: 'Bengaluru, Karnataka',
      price: 2280,
      rating: 4.92,
      images: [
        'https://images.unsplash.com/photo-1551361415-69c87720eacc?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1562790351-d4cc6e2de575?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '3',
      title: 'Flat in BTM Layout',
      location: 'Bengaluru, Karnataka',
      price: 2282,
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '4',
      title: 'Room in Bengaluru',
      location: 'Bengaluru, Karnataka',
      price: 2322,
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '5',
      title: 'Room in BTM Layout',
      location: 'Bengaluru, Karnataka',
      price: 3036,
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '6',
      title: 'Home in Raja Rajeshwari Nagar',
      location: 'Bengaluru, Karnataka',
      price: 3800,
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '7',
      title: 'Room in BTM Layout',
      location: 'Bengaluru, Karnataka',
      price: 1542,
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '8',
      title: 'Modern Apartment',
      location: 'Mumbai, Maharashtra',
      price: 4200,
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=300&fit=crop'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular homes in Bengaluru</h2>
        <p className="text-gray-600">Discover the most loved stays in the city</p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            rating={property.rating}
            images={property.images}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Show more
        </button>
      </div>
    </div>
  );
};

export default PropertyGrid;
