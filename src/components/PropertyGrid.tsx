import React, { useState, useMemo } from 'react';
import { useSearch } from '@/hooks/useSearch';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PropertyGrid = () => {
  const { activeCategory } = useSearch();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const navigate = useNavigate();

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
        'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
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
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1570168005149-11dc996ac36c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154524-16471cd6f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1615594291595-1ea33653c139?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'luxury',
      hostType: 'Guest favourite',
      description: 'Live like royalty in this beautifully restored historic castle.',
      amenities: ['Castle View', 'Spa', 'WiFi', 'Fine Dining'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: '7',
      title: 'Royal Palace Suite',
      location: 'Udaipur, India',
      price: 15000,
      rating: 4.9,
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'luxury',
      hostType: 'Guest favourite',
      description: 'Experience royal treatment in a magnificent palace.',
      amenities: ['Royal Treatment', 'Butler Service', 'Spa', 'Fine Dining'],
      guests: 12,
      bedrooms: 6,
      bathrooms: 5
    },
    {
      id: '8',
      title: 'Sunrise Lodge',
      location: 'Himachal Pradesh, India',
      price: 5800,
      rating: 4.7,
      images: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'mountains',
      hostType: 'Guest favourite',
      description: 'Wake up to spectacular sunrise views over mountain peaks.',
      amenities: ['Sunrise View', 'Mountain View', 'WiFi', 'Kitchen'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '9',
      title: 'Poet\'s Corner',
      location: 'Rishikesh, India',
      price: 4500,
      rating: 4.4,
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'countryside',
      hostType: 'New',
      description: 'A peaceful retreat perfect for writers and artists.',
      amenities: ['Quiet Space', 'Library', 'WiFi', 'Garden'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '10',
      title: 'Fort Hotel',
      location: 'Jaisalmer, Rajasthan',
      price: 8500,
      rating: 4.6,
      images: [
        'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      category: 'luxury',
      hostType: 'Super host',
      description: 'Stay in a historic fort with authentic Rajasthani architecture.',
      amenities: ['Historic Fort', 'Desert View', 'Cultural Tours', 'Fine Dining'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    // ... keep existing code (remaining properties from 11 to 106)
    {
      id: '11',
      title: 'Beachfront Paradise Villa',
      location: 'Goa, India',
      price: 8500,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'Super host',
      description: 'Wake up to ocean waves at your doorstep.',
      amenities: ['Beach Access', 'Pool', 'WiFi', 'Kitchen'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '12',
      title: 'Coastal Luxury Resort',
      location: 'Kerala, India',
      price: 12000,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'Guest favourite',
      description: 'Luxury meets nature at this stunning coastal resort.',
      amenities: ['Beach Access', 'Spa', 'Restaurant', 'Pool'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: '13',
      title: 'Seaside Cottage Retreat',
      location: 'Tamil Nadu, India',
      price: 4500,
      rating: 4.4,
      images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'New',
      description: 'Charming cottage just steps from the beach.',
      amenities: ['Beach Access', 'Garden', 'WiFi', 'Kitchen'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '14',
      title: 'Ocean View Beach House',
      location: 'Karnataka, India',
      price: 6800,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'Super host',
      description: 'Panoramic ocean views from every room.',
      amenities: ['Ocean View', 'Deck', 'WiFi', 'Kitchen'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '15',
      title: 'Alpine Mountain Lodge',
      location: 'Himachal Pradesh, India',
      price: 5200,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'Guest favourite',
      description: 'Breathtaking mountain views and fresh alpine air.',
      amenities: ['Mountain View', 'Fireplace', 'Hiking', 'Kitchen'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 2
    },
    {
      id: '16',
      title: 'Himalayan Peak Cabin',
      location: 'Uttarakhand, India',
      price: 3800,
      rating: 4.5,
      images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'Super host',
      description: 'Remote cabin with stunning Himalayan views.',
      amenities: ['Mountain View', 'Trekking', 'WiFi', 'Fireplace'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '17',
      title: 'Valley View Resort',
      location: 'Kashmir, India',
      price: 7200,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'Guest favourite',
      description: 'Luxury resort overlooking pristine mountain valleys.',
      amenities: ['Valley View', 'Spa', 'Restaurant', 'Garden'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: '18',
      title: 'Mountain Peak Chalet',
      location: 'Arunachal Pradesh, India',
      price: 4800,
      rating: 4.4,
      images: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'New',
      description: 'Cozy chalet at the foot of snow-capped peaks.',
      amenities: ['Peak View', 'Heating', 'WiFi', 'Kitchen'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '19',
      title: 'Modern Downtown Loft',
      location: 'Delhi, India',
      price: 6500,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'city',
      hostType: 'Super host',
      description: 'Stylish loft in the heart of the capital.',
      amenities: ['City View', 'Gym', 'WiFi', 'Parking'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: '20',
      title: 'Skyline Penthouse',
      location: 'Bangalore, India',
      price: 9200,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'city',
      hostType: 'Guest favourite',
      description: 'Luxury penthouse with stunning city skyline views.',
      amenities: ['Skyline View', 'Pool', 'Gym', 'Concierge'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    }
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
    }
  ];

  const allPropertiesWithTrending = [...allProperties, ...trendingProperties];

  const filteredProperties = useMemo(() => {
    if (activeCategory === 'all') {
      return allPropertiesWithTrending;
    }
    return allPropertiesWithTrending.filter(property => property.category === activeCategory);
  }, [activeCategory]);

  const displayedProperties = showAllProperties ? filteredProperties : filteredProperties.slice(0, 20);
  const remainingCount = filteredProperties.length - 20;

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  const handleShowMore = () => {
    setShowAllProperties(true);
  };

  const handleFamousPlaces = () => {
    navigate('/famous-places');
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProperties.map((property) => (
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

            {!showAllProperties && remainingCount > 0 && (
              <div className="text-center mt-12 space-y-4">
                <Button
                  onClick={handleShowMore}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mr-4"
                >
                  Explore All 100+ Properties
                </Button>
                <Button
                  onClick={handleFamousPlaces}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 font-semibold px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Famous Places to Explore
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
