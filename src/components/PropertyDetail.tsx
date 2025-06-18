
import React, { useState } from 'react';
import { X, Star, Heart, Share, MapPin, Wifi, Car, Coffee, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

interface PropertyDetailProps {
  property: any;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetail = ({ property, isOpen, onClose }: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen || !property) return null;

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Free Parking' },
    { icon: Coffee, name: 'Kitchen' },
    { icon: Users, name: 'Family Friendly' }
  ];

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return nights * property.price;
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Booking confirmed for ${property.title}!\nCheck-in: ${format(checkIn, 'PPP')}\nCheck-out: ${format(checkOut, 'PPP')}\nGuests: ${guests}\nTotal: ₹${calculateTotal().toLocaleString()}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Left Side - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                {/* Image Navigation */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {property.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className="bg-white/80 hover:bg-white"
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white/80 hover:bg-white"
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Property Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{property.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-black" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Hosted by Sumeet</h3>
                  <p className="text-sm text-gray-600">Superhost · 7 months hosting</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm">
                    <span>4 guests</span>
                    <span>1 bedroom</span>
                    <span>1 bed</span>
                    <span>1 bathroom</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-semibold mb-3">What this place offers</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <amenity.icon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2">About this place</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Welcome to a cozy, boho-inspired studio retreat! Soft beige tones and airy design create 
                    a calm atmosphere. Enjoy serene hill views, a comfy sofa for relaxing, and a compact 
                    kitchen for easy meals. Perfect getaway place, well connected with city and tourist attractions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-2xl font-bold">₹{property.price.toLocaleString()}</span>
                    <span className="text-gray-600">for 2 nights</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Check-in/Check-out */}
                    <div className="grid grid-cols-2 gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal h-12"
                          >
                            <div>
                              <div className="text-xs text-gray-500">CHECK-IN</div>
                              <div className="text-sm">
                                {checkIn ? format(checkIn, 'dd/MM/yyyy') : 'Add dates'}
                              </div>
                            </div>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal h-12"
                          >
                            <div>
                              <div className="text-xs text-gray-500">CHECK-OUT</div>
                              <div className="text-sm">
                                {checkOut ? format(checkOut, 'dd/MM/yyyy') : 'Add dates'}
                              </div>
                            </div>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Guests */}
                    <div className="relative">
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg appearance-none bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map(num => (
                          <option key={num} value={num}>
                            {num} guest{num > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                      <div className="absolute top-2 left-3 text-xs text-gray-500">GUESTS</div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  {checkIn && checkOut && (
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span>₹{property.price.toLocaleString()} x {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                        <span>₹{calculateTotal().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>₹{Math.round(calculateTotal() * 0.1).toLocaleString()}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₹{(calculateTotal() + Math.round(calculateTotal() * 0.1)).toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handleBooking}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3"
                  >
                    Reserve
                  </Button>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
