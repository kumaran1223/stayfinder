
import React from 'react';
import PropertyCard from './PropertyCard';
import { useSearch } from '@/hooks/useSearch';

const PropertyGrid = () => {
  const { activeCategory, searchQuery } = useSearch();

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
      title: "Royal Palace Stay in Udaipur",
      location: "Udaipur, Rajasthan",
      price: 15000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
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
      images: ["https://images.unsplash.com/photo-1539650116574-75c0c6d57d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
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
      title: "Historic Haveli in Jaipur",
      location: "Jaipur, Rajasthan",
      price: 8000,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
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
    {
      id: "11",
      title: "Beach Shack in Varkala",
      location: "Varkala, Kerala",
      price: 3500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "12",
      title: "Urban Loft in Delhi",
      location: "New Delhi, India",
      price: 6000,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesCategory = activeCategory === 'all' || property.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchQuery ? `Search results for "${searchQuery}"` : 'Popular destinations'}
        </h2>
        <span className="text-gray-600">{filteredProperties.length} places</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No properties found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
