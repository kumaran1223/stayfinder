
import React, { useState } from 'react';
import { Menu, User, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal } from './LoginModal';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

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

            {/* Desktop Search Bar - Hidden, will show below */}
            <div className="hidden md:flex flex-1 justify-center mx-8">
              {/* Search moved below */}
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

          {/* Desktop Search Bar - Below navbar */}
          <div className="hidden md:flex justify-center pb-4">
            <SearchBar />
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <SearchBar isMobile />
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
