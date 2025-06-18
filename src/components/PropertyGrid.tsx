
import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { useSearch } from '@/hooks/useSearch';
import { Button } from '@/components/ui/button';

const PropertyGrid = () => {
  const { activeCategory, searchQuery } = useSearch();
  const [showAll, setShowAll] = useState(false);

  const properties = [
    {
      id: "1",
      title: "Luxury Beach Villa in Goa",
      location: "Goa, India",
      price: 8500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "2",
      title: "Heritage Houseboat in Kerala",
      location: "Alleppey, Kerala",
      price: 6500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "3",
      title: "Mountain Resort in Manali",
      location: "Manali, Himachal Pradesh",
      price: 7200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "4",
      title: "Historic Haveli in Jaipur",
      location: "Jaipur, Rajasthan",
      price: 15000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "5",
      title: "Modern Apartment in Mumbai",
      location: "Mumbai, Maharashtra",
      price: 5500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "6",
      title: "Desert Camp in Jaisalmer",
      location: "Jaisalmer, Rajasthan",
      price: 4500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "7",
      title: "Tea Garden Cottage in Darjeeling",
      location: "Darjeeling, West Bengal",
      price: 3800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "8",
      title: "Luxury Resort in Andaman",
      location: "Port Blair, Andaman",
      price: 12000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "9",
      title: "Royal Palace Stay in Udaipur",
      location: "Udaipur, Rajasthan",
      price: 18000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "10",
      title: "Riverside Cottage in Rishikesh",
      location: "Rishikesh, Uttarakhand",
      price: 4200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    // Adding more trending properties
    {
      id: "11",
      title: "Beach Shack in Varkala",
      location: "Varkala, Kerala",
      price: 3500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Guest favourite"
    },
    {
      id: "12",
      title: "Urban Loft in Delhi",
      location: "New Delhi, India",
      price: 6000,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Guest favourite"
    },
    {
      id: "13",
      title: "Cozy Beach House in Gokarna",
      location: "Gokarna, Karnataka",
      price: 5200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Superhost"
    },
    {
      id: "14",
      title: "Hill Station Villa in Ooty",
      location: "Ooty, Tamil Nadu",
      price: 7800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Guest favourite"
    },
    {
      id: "15",
      title: "Lakefront Resort in Nainital",
      location: "Nainital, Uttarakhand",
      price: 8900,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Superhost"
    },
    {
      id: "16",
      title: "Forest Retreat in Coorg",
      location: "Coorg, Karnataka",
      price: 6800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "trending",
      hostType: "Guest favourite"
    },
    // Adding 34 more properties to reach 50
    {
      id: "17",
      title: "Himalayan Retreat in Shimla",
      location: "Shimla, Himachal Pradesh",
      price: 5500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "18",
      title: "Backwater Villa in Kumarakom",
      location: "Kumarakom, Kerala",
      price: 7200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    },
    {
      id: "19",
      title: "Boutique Hotel in Pondicherry",
      location: "Pondicherry, India",
      price: 4800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "20",
      title: "Mountain Lodge in Dharamshala",
      location: "Dharamshala, Himachal Pradesh",
      price: 4500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "21",
      title: "Luxury Tent in Pushkar",
      location: "Pushkar, Rajasthan",
      price: 8500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "22",
      title: "Beach Resort in Mahabalipuram",
      location: "Mahabalipuram, Tamil Nadu",
      price: 6200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "23",
      title: "Heritage Mansion in Mysore",
      location: "Mysore, Karnataka",
      price: 9500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "24",
      title: "Tree House in Wayanad",
      location: "Wayanad, Kerala",
      price: 4200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "25",
      title: "City Apartment in Bangalore",
      location: "Bangalore, Karnataka",
      price: 3800,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "26",
      title: "Riverside Camp in Rishikesh",
      location: "Rishikesh, Uttarakhand",
      price: 2800,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "27",
      title: "Palace Suite in Jodhpur",
      location: "Jodhpur, Rajasthan",
      price: 12500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "28",
      title: "Beach Cottage in Alibaug",
      location: "Alibaug, Maharashtra",
      price: 5800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "29",
      title: "Spice Plantation Stay in Munnar",
      location: "Munnar, Kerala",
      price: 4500,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "30",
      title: "Urban Studio in Pune",
      location: "Pune, Maharashtra",
      price: 3200,
      rating: 4.3,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "31",
      title: "Glacier View Lodge in Leh",
      location: "Leh, Ladakh",
      price: 6800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "32",
      title: "Island Resort in Lakshadweep",
      location: "Lakshadweep, India",
      price: 15000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "33",
      title: "Fort Palace in Amber",
      location: "Amber, Rajasthan",
      price: 11000,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "34",
      title: "Coffee Estate in Chikmagalur",
      location: "Chikmagalur, Karnataka",
      price: 3800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "35",
      title: "Luxury Yacht in Goa",
      location: "Panaji, Goa",
      price: 25000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "36",
      title: "Traditional Homestay in Sikkim",
      location: "Gangtok, Sikkim",
      price: 2800,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "37",
      title: "Beach Villa in Kovalam",
      location: "Kovalam, Kerala",
      price: 8200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "38",
      title: "Desert Safari Camp in Bikaner",
      location: "Bikaner, Rajasthan",
      price: 4800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "39",
      title: "Hill Resort in Kodaikanal",
      location: "Kodaikanal, Tamil Nadu",
      price: 5500,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "40",
      title: "Modern Loft in Hyderabad",
      location: "Hyderabad, Telangana",
      price: 4200,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "41",
      title: "Monastery Stay in Spiti",
      location: "Spiti Valley, Himachal Pradesh",
      price: 2200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "42",
      title: "Beachfront Resort in Digha",
      location: "Digha, West Bengal",
      price: 3800,
      rating: 4.3,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "43",
      title: "Wine Estate in Nashik",
      location: "Nashik, Maharashtra",
      price: 6500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "44",
      title: "Jungle Lodge in Bandipur",
      location: "Bandipur, Karnataka",
      price: 5200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "45",
      title: "Luxury Spa Resort in Mount Abu",
      location: "Mount Abu, Rajasthan",
      price: 9800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "46",
      title: "Riverside Cottage in Hampi",
      location: "Hampi, Karnataka",
      price: 3500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "47",
      title: "Beach Shack in Arambol",
      location: "Arambol, Goa",
      price: 2800,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "48",
      title: "Snow Resort in Auli",
      location: "Auli, Uttarakhand",
      price: 7500,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "49",
      title: "Lake House in Udaipur",
      location: "Udaipur, Rajasthan",
      price: 12000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "50",
      title: "Eco Resort in Silent Valley",
      location: "Silent Valley, Kerala",
      price: 4800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesCategory = activeCategory === 'all' || property.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 16);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchQuery ? `Search results for "${searchQuery}"` : 'Popular destinations'}
        </h2>
        <span className="text-gray-600">{filteredProperties.length} places</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {displayedProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      
      {filteredProperties.length > 16 && !showAll && (
        <div className="text-center">
          <Button 
            onClick={() => setShowAll(true)}
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3"
          >
            View All {filteredProperties.length} Properties
          </Button>
        </div>
      )}
      
      {showAll && (
        <div className="text-center">
          <Button 
            onClick={() => setShowAll(false)}
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3"
          >
            Show Less
          </Button>
        </div>
      )}
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No properties found matching your search criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
