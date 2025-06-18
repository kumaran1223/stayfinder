
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Users, Shield, Star, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About StayFinder
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted platform for discovering amazing places to stay around the world
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What is StayFinder */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What is StayFinder?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  StayFinder is your ultimate destination for discovering unique and comfortable accommodations across India and beyond. Whether you're looking for a cozy apartment in Mumbai, a heritage houseboat in Kerala, or a luxury resort in Goa, we've got you covered.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our platform connects travelers with amazing hosts who offer everything from budget-friendly stays to luxury experiences. With over 10,000+ properties across 100+ cities in 25+ countries, your perfect stay is just a search away.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Home className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl">10K+</h3>
                    <p className="text-gray-600">Properties</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl">50K+</h3>
                    <p className="text-gray-600">Happy Guests</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl">100+</h3>
                    <p className="text-gray-600">Cities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl">4.8</h3>
                    <p className="text-gray-600">Average Rating</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How StayFinder Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-red-500">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Search & Discover</h3>
                  <p className="text-gray-600">
                    Use our powerful search to find the perfect stay based on location, dates, and guest count.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-red-500">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Book Instantly</h3>
                  <p className="text-gray-600">
                    Choose from verified properties with detailed photos, reviews, and instant booking options.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-red-500">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Enjoy Your Stay</h3>
                  <p className="text-gray-600">
                    Experience amazing hospitality and create unforgettable memories with our trusted hosts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Become a Host */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Host</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Share your space and earn money by hosting travelers from around the world
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Why Host with StayFinder?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Host Protection</h4>
                      <p className="text-gray-600">Comprehensive insurance and 24/7 support</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Easy Management</h4>
                      <p className="text-gray-600">Simple tools to manage bookings and communicate</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Global Reach</h4>
                      <p className="text-gray-600">Connect with travelers from all over the world</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hosting"
                  className="rounded-lg mb-6"
                />
                <Link to="/host">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                    Start Hosting Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of travelers who trust StayFinder for their accommodation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                  Explore Properties
                </Button>
              </Link>
              <Link to="/host">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3">
                  Become a Host
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
