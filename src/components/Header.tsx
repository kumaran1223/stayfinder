
import React, { useState } from 'react';
import { Search, Menu, User, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal } from './LoginModal';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-xl">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">StayFinder</span>
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center bg-white border rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 max-w-2xl flex-1 mx-8">
              <div className="flex-1 px-6 py-2">
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-gray-800">Where</span>
                    <input 
                      type="text" 
                      placeholder="Search destinations" 
                      className="block w-full text-sm text-gray-700 placeholder-gray-400 border-0 focus:ring-0 p-0"
                    />
                  </div>
                  <div className="border-l border-gray-300 h-8 mx-4"></div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-gray-800">Check in</span>
                    <input 
                      type="text" 
                      placeholder="Add dates" 
                      className="block w-full text-sm text-gray-700 placeholder-gray-400 border-0 focus:ring-0 p-0"
                    />
                  </div>
                  <div className="border-l border-gray-300 h-8 mx-4"></div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-gray-800">Who</span>
                    <input 
                      type="text" 
                      placeholder="Add guests" 
                      className="block w-full text-sm text-gray-700 placeholder-gray-400 border-0 focus:ring-0 p-0"
                    />
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full p-2 ml-2">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              {/* Become a Host */}
              <Link to="/host" className="hidden md:block text-sm font-semibold text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-full transition-colors">
                Become a host
              </Link>

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow"
                >
                  <Menu className="h-4 w-4" />
                  <User className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="flex items-center bg-gray-50 rounded-full px-4 py-3 border">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="flex-1 bg-transparent text-sm placeholder-gray-500 border-0 focus:ring-0 p-0"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link to="/host" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Become a host
              </Link>
              <Button
                variant="ghost"
                onClick={() => setIsLoginOpen(true)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Log in / Sign up
              </Button>
            </div>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
