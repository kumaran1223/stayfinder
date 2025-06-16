
import React from 'react';
import PropertyCard from './PropertyCard';
import { useSearch } from '@/hooks/useSearch';

const PropertyGrid = () => {
  const { activeCategory } = useSearch();

  // Expanded property data with diverse Indian locations
  const allProperties = [
    {
      id: '1',
      title: 'Luxury Apartment in Marine Drive',
      location: 'Mumbai, Maharashtra',
      price: 8500,
      rating: 4.9,
      category: 'luxury',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '2',
      title: 'Beach Villa in Goa',
      location: 'Goa, India',
      price: 12000,
      rating: 4.8,
      category: 'beachfront',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '3',
      title: 'Heritage Haveli in Old Delhi',
      location: 'Delhi, India',
      price: 6500,
      rating: 4.7,
      category: 'city',
      images: [
        'https://images.unsplash.com/photo-1551361415-69c87720eacc?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1562790351-d4cc6e2de575?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '4',
      title: 'Houseboat in Alleppey',
      location: 'Kerala, India',
      price: 4500,
      rating: 4.9,
      category: 'countryside',
      images: [
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '5',
      title: 'Palace Suite in Udaipur',
      location: 'Rajasthan, India',
      price: 15000,
      rating: 5.0,
      category: 'luxury',
      images: [
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '6',
      title: 'Mountain Cottage in Manali',
      location: 'Himachal Pradesh, India',
      price: 3500,
      rating: 4.8,
      category: 'mountains',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '7',
      title: 'Temple View Room in Madurai',
      location: 'Tamil Nadu, India',
      price: 2800,
      rating: 4.6,
      category: 'city',
      images: [
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '8',
      title: 'Modern Flat in Bengaluru',
      location: 'Karnataka, India',
      price: 4200,
      rating: 4.7,
      category: 'city',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '9',
      title: 'Riverside Camping in Rishikesh',
      location: 'Uttarakhand, India',
      price: 1500,
      rating: 4.5,
      category: 'camping',
      images: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '10',
      title: 'Farm Stay in Amritsar',
      location: 'Punjab, India',
      price: 3200,
      rating: 4.8,
      category: 'countryside',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '11',
      title: 'Desert Camp in Jaisalmer',
      location: 'Rajasthan, India',
      price: 5500,
      rating: 4.9,
      category: 'camping',
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop'
      ]
    },
    {
      id: '12',
      title: 'Floating Resort in Kashmir',
      location: 'Jammu & Kashmir, India',
      price: 7800,
      rating: 5.0,
      category: 'mountains',
      images: [
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=500&h=300&fit=crop'
      ]
    }
  ];

  // Filter properties based on active category
  const filteredProperties = activeCategory === 'all' 
    ? allProperties 
    : allProperties.filter(property => property.category === activeCategory);

  const [showAll, setShowAll] = React.useState(false);
  const displayProperties = showAll ? filteredProperties : filteredProperties.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {activeCategory === 'all' 
            ? 'Popular homes across India' 
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} stays`}
        </h2>
        <p className="text-gray-600">
          {activeCategory === 'all' 
            ? 'Discover the most loved stays across the country'
            : `Explore amazing ${activeCategory} destinations`}
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayProperties.map((property) => (
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

      {/* Show More Button */}
      {filteredProperties.length > 8 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            {showAll ? 'Show less' : `Show ${filteredProperties.length - 8} more`}
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
