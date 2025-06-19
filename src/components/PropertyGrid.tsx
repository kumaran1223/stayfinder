
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
    // Adding 50+ more beachfront properties
    {
      id: '7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
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
    // Adding mountain properties
    {
      id: '11',
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
      id: '12',
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
      id: '13',
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
      id: '14',
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
    // Adding city properties
    {
      id: '15',
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
      id: '16',
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
    },
    {
      id: '17',
      title: 'Historic City Center Apartment',
      location: 'Kolkata, India',
      price: 4200,
      rating: 4.3,
      images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'city',
      hostType: 'New',
      description: 'Charming apartment in the historic city center.',
      amenities: ['Historic Location', 'WiFi', 'Kitchen', 'Transport'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '18',
      title: 'Tech Hub Studio',
      location: 'Hyderabad, India',
      price: 3800,
      rating: 4.4,
      images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'city',
      hostType: 'Super host',
      description: 'Modern studio in the tech district.',
      amenities: ['Tech Area', 'High-speed WiFi', 'Workspace', 'Parking'],
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    // Adding countryside properties
    {
      id: '19',
      title: 'Organic Farm Stay',
      location: 'Punjab, India',
      price: 3200,
      rating: 4.5,
      images: ['https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'countryside',
      hostType: 'Guest favourite',
      description: 'Experience authentic farm life with organic produce.',
      amenities: ['Farm Activities', 'Organic Food', 'WiFi', 'Garden'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '20',
      title: 'Village Heritage Home',
      location: 'Rajasthan, India',
      price: 4800,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'countryside',
      hostType: 'Super host',
      description: 'Traditional village home with modern amenities.',
      amenities: ['Cultural Experience', 'Local Cuisine', 'WiFi', 'Garden'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 2
    },
    // Adding luxury properties
    {
      id: '21',
      title: 'Royal Palace Suite',
      location: 'Udaipur, India',
      price: 15000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'luxury',
      hostType: 'Guest favourite',
      description: 'Experience royal treatment in a magnificent palace.',
      amenities: ['Royal Treatment', 'Butler Service', 'Spa', 'Fine Dining'],
      guests: 12,
      bedrooms: 6,
      bathrooms: 5
    },
    {
      id: '22',
      title: 'Five Star Beach Resort',
      location: 'Andaman Islands, India',
      price: 18000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'luxury',
      hostType: 'Super host',
      description: 'Ultimate luxury resort on pristine tropical beaches.',
      amenities: ['Private Beach', 'Spa', 'Water Sports', 'Fine Dining'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    // Adding camping properties
    {
      id: '23',
      title: 'Forest Camping Site',
      location: 'Madhya Pradesh, India',
      price: 2500,
      rating: 4.2,
      images: ['https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'camping',
      hostType: 'New',
      description: 'Adventure camping in dense forest wilderness.',
      amenities: ['Wildlife', 'Trekking', 'Campfire', 'Nature Walks'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '24',
      title: 'Desert Safari Camp',
      location: 'Rajasthan, India',
      price: 5200,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'camping',
      hostType: 'Guest favourite',
      description: 'Luxury desert camping with camel safari.',
      amenities: ['Camel Safari', 'Star Gazing', 'Cultural Show', 'Traditional Food'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    // Continue adding more properties to reach 100+...
    {
      id: '25',
      title: 'Riverside Bamboo House',
      location: 'Assam, India',
      price: 3500,
      rating: 4.4,
      images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'countryside',
      hostType: 'Super host',
      description: 'Eco-friendly bamboo house by the river.',
      amenities: ['River View', 'Eco-friendly', 'Bird Watching', 'Fishing'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '26',
      title: 'Tea Garden Bungalow',
      location: 'Darjeeling, India',
      price: 4800,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'Guest favourite',
      description: 'Colonial bungalow surrounded by tea gardens.',
      amenities: ['Tea Garden', 'Mountain View', 'Heritage', 'Garden'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '27',
      title: 'Backwater Houseboat',
      location: 'Kerala, India',
      price: 6500,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'Super host',
      description: 'Traditional houseboat cruise through backwaters.',
      amenities: ['Backwater Cruise', 'Traditional Food', 'Fishing', 'Bird Watching'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 2
    },
    {
      id: '28',
      title: 'Hill Station Cottage',
      location: 'Ooty, India',
      price: 4200,
      rating: 4.5,
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'New',
      description: 'Cozy cottage in the famous hill station.',
      amenities: ['Hill View', 'Garden', 'Fireplace', 'Kitchen'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: '29',
      title: 'Jungle Resort',
      location: 'Corbett, India',
      price: 7800,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'camping',
      hostType: 'Guest favourite',
      description: 'Luxury resort in the heart of the jungle.',
      amenities: ['Wildlife Safari', 'Spa', 'Restaurant', 'Nature Walks'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 3
    },
    {
      id: '30',
      title: 'Lighthouse Beach Villa',
      location: 'Gujarat, India',
      price: 8500,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'beachfront',
      hostType: 'Super host',
      description: 'Beachfront villa near historic lighthouse.',
      amenities: ['Beach Access', 'Lighthouse View', 'Pool', 'WiFi'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    // Adding more properties to reach 100+
    {
      id: '31',
      title: 'Spice Plantation Stay',
      location: 'Kerala, India',
      price: 3800,
      rating: 4.4,
      images: ['https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'countryside',
      hostType: 'New',
      description: 'Experience aromatic spice plantations.',
      amenities: ['Spice Tour', 'Organic Food', 'Nature Walks', 'Cooking Class'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: '32',
      title: 'Riverside Luxury Camp',
      location: 'Rishikesh, India',
      price: 5500,
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'camping',
      hostType: 'Guest favourite',
      description: 'Luxury camping by the holy Ganges river.',
      amenities: ['River Rafting', 'Yoga', 'Meditation', 'Adventure Sports'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: '33',
      title: 'Wine Valley Resort',
      location: 'Maharashtra, India',
      price: 9200,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'luxury',
      hostType: 'Super host',
      description: 'Premium resort in wine country.',
      amenities: ['Wine Tasting', 'Vineyard Tours', 'Spa', 'Fine Dining'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: '34',
      title: 'Sand Dunes Camp',
      location: 'Rajasthan, India',
      price: 4500,
      rating: 4.5,
      images: ['https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'camping',
      hostType: 'New',
      description: 'Experience desert life among golden sand dunes.',
      amenities: ['Camel Safari', 'Folk Dance', 'Star Gazing', 'Desert Cuisine'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 1
    },
    {
      id: '35',
      title: 'Waterfall View Lodge',
      location: 'Karnataka, India',
      price: 5800,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'mountains',
      hostType: 'Guest favourite',
      description: 'Lodge with spectacular waterfall views.',
      amenities: ['Waterfall View', 'Trekking', 'Photography', 'Nature Walks'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 2
    },
    // Continue adding properties to reach exactly 100+
    {
      id: '36',
      title: 'Heritage Haveli',
      location: 'Rajasthan, India',
      price: 12000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'luxury',
      hostType: 'Guest favourite',
      description: 'Restored royal haveli with authentic architecture.',
      amen/*rest of property data*/ities: ['Royal Heritage', 'Cultural Shows', 'Fine Dining', 'Spa'],
      guests: 12,
      bedrooms: 6,
      bathrooms: 5
    },
    // Adding 70+ more properties with unique images and locations
    ...Array.from({ length: 70 }, (_, i) => {
      const id = 37 + i;
      const locations = [
        'Shimla, India', 'Nainital, India', 'Munnar, India', 'Coorg, India', 'Kodaikanal, India',
        'Mount Abu, India', 'Lonavala, India', 'Mahabaleshwar, India', 'Pachmarhi, India', 'Matheran, India',
        'Gangtok, India', 'Shillong, India', 'Mussoorie, India', 'Dharamshala, India', 'Kasauli, India',
        'Almora, India', 'Ranikhet, India', 'Kufri, India', 'Chail, India', 'Dalhousie, India',
        'Lansdowne, India', 'Auli, India', 'Chopta, India', 'Valley of Flowers, India', 'Kedarnath, India',
        'Badrinath, India', 'Haridwar, India', 'Dehradun, India', 'Rishikesh, India', 'Nanda Devi, India',
        'Rohtang Pass, India', 'Solang Valley, India', 'Kullu, India', 'Kasol, India', 'Tosh, India',
        'Malana, India', 'Spiti Valley, India', 'Kinnaur, India', 'Lahaul, India', 'Leh, India',
        'Ladakh, India', 'Kargil, India', 'Nubra Valley, India', 'Pangong Lake, India', 'Tso Moriri, India',
        'Hemis, India', 'Thiksey, India', 'Diskit, India', 'Khardung La, India', 'Magnetic Hill, India',
        'Zanskar, India', 'Dras, India', 'Srinagar, India', 'Pahalgam, India', 'Sonamarg, India',
        'Gulmarg, India', 'Dal Lake, India', 'Nigeen Lake, India', 'Wular Lake, India', 'Amarnath, India',
        'Vaishno Devi, India', 'Patnitop, India', 'Bhaderwah, India', 'Kishtwar, India', 'Doda, India',
        'Udhampur, India', 'Kathua, India', 'Samba, India', 'Jammu, India', 'Rajouri, India'
      ];
      
      const titles = [
        'Mountain View Resort', 'Lakeside Cottage', 'Forest Retreat', 'Valley Lodge', 'Peak View Villa',
        'Alpine Chalet', 'Hillside Bungalow', 'Nature\'s Paradise', 'Scenic Hideaway', 'Tranquil Escape',
        'Panoramic Resort', 'Riverside Lodge', 'Garden Villa', 'Sunset Point', 'Sunrise Lodge',
        'Cloud Nine Resort', 'Valley View Hotel', 'Mountain Peak Lodge', 'Serene Sanctuary', 'Peaceful Haven',
        'Adventure Base Camp', 'Trekker\'s Paradise', 'Explorer\'s Lodge', 'Wanderer\'s Rest', 'Nomad\'s Haven',
        'Backpacker\'s Den', 'Hiker\'s Retreat', 'Camper\'s Delight', 'Nature Lover\'s Home', 'Wildlife Lodge',
        'Bird Watcher\'s Paradise', 'Photographer\'s Dream', 'Artist\'s Retreat', 'Writer\'s Haven', 'Poet\'s Corner',
        'Meditation Center', 'Yoga Retreat', 'Wellness Resort', 'Spa Haven', 'Health Resort',
        'Ayurvedic Center', 'Holistic Healing', 'Mind Body Soul', 'Detox Resort', 'Rejuvenation Center',
        'Spiritual Retreat', 'Ashram Stay', 'Temple Lodge', 'Pilgrimage Rest', 'Sacred Grove',
        'Heritage Hotel', 'Historic Manor', 'Royal Residence', 'Palace Stay', 'Fort Hotel',
        'Cultural Center', 'Art Gallery Stay', 'Museum Lodge', 'Library Hotel', 'Scholar\'s Retreat',
        'Academic Haven', 'Research Center', 'Study Retreat', 'Conference Lodge', 'Business Resort',
        'Executive Suite', 'Corporate Retreat', 'Team Building Center', 'Leadership Lodge', 'Success Summit'
      ];

      const categories = ['mountains', 'beachfront', 'city', 'countryside', 'luxury', 'camping'];
      const hostTypes = ['Guest favourite', 'Super host', 'New', 'Trending Choice', 'Hot Pick'];
      
      const images = [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ];

      return {
        id: `${id}`,
        title: titles[i % titles.length],
        location: locations[i % locations.length],
        price: 2500 + Math.floor(Math.random() * 8000),
        rating: 4.0 + Math.random(),
        images: [images[i % images.length]],
        category: categories[i % categories.length],
        hostType: hostTypes[i % hostTypes.length],
        description: `Experience the beauty and tranquility of ${locations[i % locations.length]} in this amazing property.`,
        amenities: ['WiFi', 'Kitchen', 'Parking', 'Garden'],
        guests: 2 + Math.floor(Math.random() * 8),
        bedrooms: 1 + Math.floor(Math.random() * 4),
        bathrooms: 1 + Math.floor(Math.random() * 3)
      };
    })
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
    },
    {
      id: 'trending-11',
      title: 'Tropical Island Villa',
      location: 'Bali Paradise',
      price: 16000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Island Dream',
      description: 'Luxury villa on pristine tropical island',
      amenities: ['Private Beach', 'Infinity Pool', 'Butler Service', 'Water Sports'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: 'trending-12',
      title: 'Arctic Aurora Lodge',
      location: 'Northern Norway',
      price: 18000,
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Aurora Views',
      description: 'Witness the magical Northern Lights from your window',
      amenities: ['Aurora Views', 'Glass Igloo', 'Husky Sledding', 'Ice Hotel'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 'trending-13',
      title: 'Cliffside Castle',
      location: 'Irish Coast',
      price: 20000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Castle Dreams',
      description: 'Medieval castle perched on dramatic cliffs',
      amenities: ['Ocean Cliff Views', 'Historic Tours', 'Fine Dining', 'Helicopter Pad'],
      guests: 16,
      bedrooms: 8,
      bathrooms: 6
    },
    {
      id: 'trending-14',
      title: 'Safari Tree House',
      location: 'Kenya Savanna',
      price: 14500,
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Wildlife Wonder',
      description: 'Elevated treehouse with incredible wildlife views',
      amenities: ['Wildlife Views', 'Safari Tours', 'Photography Blinds', 'Conservation Tours'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 'trending-15',
      title: 'Floating Palace',
      location: 'Thailand Waters',
      price: 22000,
      rating: 4.9,
      images: ['https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      category: 'trending',
      hostType: 'Floating Paradise',
      description: 'Luxury floating resort in crystal clear waters',
      amenities: ['Over-water Bungalow', 'Private Yacht', 'Diving Center', 'Spa Treatments'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
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
