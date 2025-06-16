
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  isFavorite?: boolean;
  hostType?: string;
}

const PropertyCard = ({ 
  id, 
  title, 
  location, 
  price, 
  rating, 
  images, 
  isFavorite = false,
  hostType = "Guest favourite"
}: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(isFavorite);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardContent className="p-0">
        <div className="relative">
          {/* Image Carousel */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Host Type Badge */}
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md">
              {hostType}
            </div>

            {/* Favorite Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 p-2 hover:bg-white/20"
              onClick={toggleFavorite}
            >
              <Heart 
                className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} drop-shadow-sm`} 
              />
            </Button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={prevImage}
                >
                  ←
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={nextImage}
                >
                  →
                </Button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Property Info */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{title}</h3>
              <div className="flex items-center space-x-1 ml-2">
                <Star className="h-4 w-4 fill-current text-black" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-2 line-clamp-1">{location}</p>
            
            <div className="flex items-baseline space-x-1">
              <span className="font-semibold text-gray-900">₹{price.toLocaleString()}</span>
              <span className="text-gray-600 text-sm">for 2 nights</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
