
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Star, Calendar, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Host = () => {
  const benefits = [
    {
      icon: Star,
      title: 'Earn extra income',
      description: 'Make money by sharing your space with travelers from around the world'
    },
    {
      icon: Calendar,
      title: 'Host on your schedule',
      description: 'You control when your space is available and who can book it'
    },
    {
      icon: Users,
      title: 'Meet new people',
      description: 'Connect with interesting guests and share local experiences'
    },
    {
      icon: Shield,
      title: 'We have your back',
      description: 'Host protection and 24/7 support to help you feel confident'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-2xl inline-block mb-6">
            <Home className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Become a Host
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your extra space into extra income. Join millions of hosts who earn money by sharing their homes.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Get started hosting
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Tell us about your place</h3>
              <p className="text-gray-600">Share basic info about your space, like where it is and how many guests can stay.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Make it stand out</h3>
              <p className="text-gray-600">Add photos, a description, and set your price. We'll help you present your space beautifully.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Finish and publish</h3>
              <p className="text-gray-600">Choose if you'd like to start with an experienced guest, then publish your listing.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Host;
