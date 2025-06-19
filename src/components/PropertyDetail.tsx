
import React, { useState } from 'react';
import { X, Star, Heart, Share, MapPin, Wifi, Car, Coffee, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

interface PropertyDetailProps {
  property: any;
  isOpen?: boolean;
  onClose: () => void;
}

const PropertyDetail = ({ property, isOpen = true, onClose }: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  if (!property) return null;

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

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 overflow-y-auto backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10">
          {/* Enhanced Header */}
          <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full hover:bg-gray-100 w-10 h-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Left Side - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Enhanced Image Gallery */}
              <div className="relative group">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Image Navigation */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {property.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Enhanced Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Property Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600 text-lg">{property.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-50 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-3">Hosted by Sumeet</h3>
                  <p className="text-gray-600 mb-4">Superhost · 7 months hosting</p>
                  <div className="flex items-center space-x-6 text-gray-700">
                    <span className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{property.guests || 4} guests</span>
                    </span>
                    <span>{property.bedrooms || 1} bedroom</span>
                    <span>1 bed</span>
                    <span>{property.bathrooms || 1} bathroom</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-4">What this place offers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <amenity.icon className="h-5 w-5 text-red-500" />
                        <span className="font-medium">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-3">About this place</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description || 'Welcome to a cozy, boho-inspired studio retreat! Soft beige tones and airy design create a calm atmosphere. Enjoy serene hill views, a comfy sofa for relaxing, and a compact kitchen for easy meals. Perfect getaway place, well connected with city and tourist attractions.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 border border-gray-200 shadow-xl rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-3xl font-bold text-gray-900">₹{property.price.toLocaleString()}</span>
                    <span className="text-gray-600">for 2 nights</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Enhanced Check-in/Check-out */}
                    <div className="grid grid-cols-2 gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal h-14 hover:border-red-300 focus:border-red-500"
                          >
                            <div>
                              <div className="text-xs text-gray-500 font-semibold">CHECK-IN</div>
                              <div className="text-sm font-medium">
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
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal h-14 hover:border-red-300 focus:border-red-500"
                          >
                            <div>
                              <div className="text-xs text-gray-500 font-semibold">CHECK-OUT</div>
                              <div className="text-sm font-medium">
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
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Fixed Guest Selector - Properly Aligned */}
                    <div className="relative">
                      <Popover open={showGuestSelector} onOpenChange={setShowGuestSelector}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between text-left font-normal h-14 hover:border-red-300 focus:border-red-500 px-4"
                          >
                            <div className="flex flex-col items-start">
                              <div className="text-xs text-gray-500 font-semibold">GUESTS</div>
                              <div className="text-sm font-medium">
                                {guests} guest{guests > 1 ? 's' : ''}
                              </div>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-4" align="start">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">Guests</div>
                                <div className="text-sm text-gray-500">Ages 13 or above</div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setGuests(Math.max(1, guests - 1))}
                                  disabled={guests <= 1}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  -
                                </Button>
                                <span className="text-sm font-medium w-8 text-center">{guests}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setGuests(Math.min(7, guests + 1))}
                                  disabled={guests >= 7}
                                  className="h-8 w-8 p-0 rounded-full"
                                >
                                  +
                                </Button>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">Maximum 7 guests allowed</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Enhanced Pricing Breakdown */}
                  {checkIn && checkOut && (
                    <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span>₹{property.price.toLocaleString()} x {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                        <span>₹{calculateTotal().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Service fee</span>
                        <span>₹{Math.round(calculateTotal() * 0.1).toLocaleString()}</span>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{(calculateTotal() + Math.round(calculateTotal() * 0.1)).toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Reserve
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
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
