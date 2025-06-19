import React, { useState, useMemo } from 'react';
import { useSearch } from '@/hooks/useSearch';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';

const PropertyGrid = () => {
  const { activeCategory } = useSearch();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const allProperties = [
    {
      id: '1',
      title: 'Luxury Villa with Pool',
      location: 'Goa, India',
      price: 7500,
      rating: 4.7,
      images: [
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1615594291595-1ea33653c139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1582268611958-eb0b27c5359b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'beachfront',
      hostType: 'Guest favourite',
      description: 'A stunning villa with a private pool and beach access.',
      amenities: ['Pool', 'Beach Access', 'WiFi', 'Kitchen'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: '2',
      title: 'Cozy Cottage in the Mountains',
      location: 'Manali, India',
      price: 4200,
      rating: 4.5,
      images: [
        'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'mountains',
      hostType: 'Super host',
      description: 'A charming cottage nestled in the mountains with breathtaking views.',
      amenities: ['Mountain View', 'Fireplace', 'WiFi', 'Parking'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '3',
      title: 'Farmhouse Retreat',
      location: 'Kerala, India',
      price: 3800,
      rating: 4.2,
      images: [
        'https://images.unsplash.com/photo-1519710164239-da123140ef36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1570168005149-11dc996ac36c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'countryside',
      hostType: 'New',
      description: 'Experience the tranquility of rural life in this beautiful farmhouse.',
      amenities: ['Garden', 'Farm Animals', 'WiFi', 'Kitchen'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '4',
      title: 'City Apartment with Balcony',
      location: 'Mumbai, India',
      price: 5500,
      rating: 4.6,
      images: [
        'https://images.unsplash.com/photo-1600585154524-16471cd6f754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1519710164239-da123140ef36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'city',
      hostType: 'Guest favourite',
      description: 'A modern apartment in the heart of the city with a stunning balcony view.',
      amenities: ['City View', 'Gym', 'WiFi', 'Parking'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: '5',
      title: 'Glamping Tent with Nature Views',
      location: 'Rajasthan, India',
      price: 3200,
      rating: 4.3,
      images: [
        'https://images.unsplash.com/photo-1541480403-7655555f9961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'camping',
      hostType: 'Super host',
      description: 'Experience the great outdoors in this luxurious glamping tent.',
      amenities: ['Nature View', 'BBQ', 'WiFi', 'Parking'],
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: '6',
      title: 'Historic Castle Stay',
      location: 'Rajasthan, India',
      price: 9500,
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1615594291595-1ea33653c139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      category: 'luxury',
      hostType: 'Guest favourite',
      description: 'Live like royalty in this beautifully restored historic castle.',
      amenities: ['Castle View', 'Spa', 'WiFi', 'Fine Dining'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
  ];

  const trendingProperties = [
    {
      id: 'trending-1',
      title: 'Oceanfront Paradise Villa',
      location: 'Maldives Resort',
      price: 15000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Trending Choice',
      description: 'Ultimate tropical paradise with overwater bungalow',
      amenities: ['Ocean View', 'Private Pool', 'WiFi', 'Boat Access'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 'trending-2',
      title: 'Alpine Mountain Lodge',
      location: 'Swiss Alps',
      price: 12500,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Hot Pick',
      description: 'Cozy alpine retreat with stunning mountain views',
      amenities: ['Mountain View', 'Fireplace', 'Ski Access', 'Hot Tub'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 'trending-3',
      title: 'Forest Cabin Retreat',
      location: 'Scandinavian Woods',
      price: 8500,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Nature Pick',
      description: 'Peaceful forest cabin surrounded by pine trees',
      amenities: ['Forest View', 'Sauna', 'WiFi', 'Hiking Trails'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 'trending-4',
      title: 'Sunrise Mountain Peak',
      location: 'Himalayan Range',
      price: 11000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Epic Views',
      description: 'Wake up to breathtaking sunrise over mountain peaks',
      amenities: ['Sunrise View', 'Trekking Guide', 'Warm Meals', 'Photography Spot'],
      guests: 3,
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: 'trending-5',
      title: 'Misty Valley Lodge',
      location: 'Scottish Highlands',
      price: 9200,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Mystical Stay',
      description: 'Experience the magic of misty highlands',
      amenities: ['Valley View', 'Whiskey Tasting', 'WiFi', 'Castle Tours'],
      guests: 5,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 'trending-6',
      title: 'Sunbeam Forest Haven',
      location: 'Canadian Rockies',
      price: 10500,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Summit Special',
      description: 'Mountain summit lodge with panoramic views',
      amenities: ['Summit View', 'Helicopter Access', 'Gourmet Kitchen', 'Stargazing Deck'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 'trending-7',
      title: 'Ocean Wave Beach House',
      location: 'California Coast',
      price: 13500,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Beach Bliss',
      description: 'Perfect beachfront house with direct ocean access',
      amenities: ['Beach Access', 'Surfboard Rental', 'WiFi', 'BBQ Deck'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 'trending-8',
      title: 'Desert Oasis Retreat',
      location: 'Sahara Desert',
      price: 14000,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Desert Dream',
      description: 'Luxury desert camp with authentic Bedouin experience',
      amenities: ['Desert View', 'Camel Rides', 'Star Gazing', 'Traditional Meals'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 'trending-9',
      title: 'Rocky Mountain Lodge',
      location: 'Colorado Peaks',  
      price: 11500,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Mountain Magic',
      description: 'Rustic lodge with spectacular rocky mountain backdrop',
      amenities: ['Mountain View', 'Hot Springs', 'Wildlife Tours', 'Hiking Trails'],
      guests: 7,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 'trending-10',
      title: 'Sunbeam Forest Cabin',
      location: 'Oregon Wilderness',
      price: 7800,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Forest Escape',
      description: 'Cozy cabin where sunbeams filter through ancient trees',
      amenities: ['Forest View', 'Fire Pit', 'WiFi', 'Nature Walks'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    }
  ];

  const allPropertiesWithTrending = [...allProperties, ...trendingProperties];

  const filteredProperties = useMemo(() => {
    if (activeCategory === 'all') {
      return allPropertiesWithTrending;
    }
    return allPropertiesWithTrending.filter(property => property.category === activeCategory);
  }, [activeCategory]);

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  if (selectedProperty) {
    return (
      <PropertyDetail 
        property={selectedProperty} 
        onClose={handleCloseDetail} 
      />
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {activeCategory === 'all' ? 'All Properties' : 
             activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) + ' Properties'}
          </h2>
          <p className="text-lg text-gray-600">
            Discover amazing places to stay for your perfect getaway
          </p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your search criteria.</p>
            <p className="text-gray-400">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                rating={property.rating}
                images={property.images}
                hostType={property.hostType}
                onClick={() => handlePropertyClick(property)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
