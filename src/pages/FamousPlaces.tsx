
import React from 'react';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FamousPlaces = () => {
  const navigate = useNavigate();

  const famousPlaces = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      description: 'One of the Seven Wonders of the World, this ivory-white marble mausoleum is a symbol of eternal love.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      category: 'Historical Monument'
    },
    {
      id: 2,
      name: 'Red Fort',
      location: 'Delhi',
      description: 'A historic fortified palace that served as the main residence of the Mughal Emperors.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      category: 'Historical Monument'
    },
    {
      id: 3,
      name: 'Kerala Backwaters',
      location: 'Kerala',
      description: 'A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast.',
      image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      category: 'Natural Beauty'
    },
    {
      id: 4,
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      description: 'The holiest temple of Sikhism, known for its stunning golden architecture.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      category: 'Religious Site'
    },
    {
      id: 5,
      name: 'Rajasthan Desert',
      location: 'Rajasthan',
      description: 'Experience the golden sands of the Thar Desert with camel safaris and desert camps.',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      category: 'Adventure'
    },
    {
      id: 6,
      name: 'Goa Beaches',
      location: 'Goa',
      description: 'Pristine beaches with golden sand, perfect for relaxation and water sports.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      category: 'Beach'
    },
    {
      id: 7,
      name: 'Himalayas',
      location: 'Himachal Pradesh & Uttarakhand',
      description: 'Majestic mountain ranges offering trekking, skiing, and breathtaking views.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      category: 'Mountains'
    },
    {
      id: 8,
      name: 'Ajanta Caves',
      location: 'Maharashtra',
      description: 'Ancient Buddhist cave monuments dating back to 2nd century BCE.',
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.4,
      category: 'Historical Monument'
    },
    {
      id: 9,
      name: 'Kashmir Valley',
      location: 'Jammu & Kashmir',
      description: 'Paradise on Earth with stunning landscapes, houseboats, and pristine lakes.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      category: 'Natural Beauty'
    },
    {
      id: 10,
      name: 'Mysore Palace',
      location: 'Karnataka',
      description: 'A magnificent royal palace known for its Indo-Saracenic architecture.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      category: 'Historical Monument'
    },
    {
      id: 11,
      name: 'Ladakh',
      location: 'Ladakh',
      description: 'High-altitude desert with Buddhist monasteries and stunning landscapes.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      category: 'Adventure'
    },
    {
      id: 12,
      name: 'Andaman Islands',
      location: 'Andaman & Nicobar Islands',
      description: 'Tropical paradise with crystal clear waters and pristine beaches.',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      category: 'Beach'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Famous Places to Explore in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover India's most iconic destinations, from ancient monuments to natural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {famousPlaces.map((place) => (
            <Card key={place.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md">
                      {place.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{place.name}</h3>
                      <div className="flex items-center space-x-1 ml-2">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {place.location}
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {place.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FamousPlaces;
