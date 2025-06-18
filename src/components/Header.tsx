
import React, { useState } from 'react';
import { Menu, User, Heart, Home, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal } from './LoginModal';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const getUserInitials = (email: string) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-xl">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">StayFinder</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-red-500 hover:text-red-600">
                Home
              </Link>
              <Link to="/search" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Search
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </nav>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              {/* Become a Host */}
              <Link to="/host" className="hidden md:block text-sm font-semibold text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-full transition-colors">
                Become a host
              </Link>

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-red-500 text-white">
                            {getUserInitials(user.email || '')}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                          <p className="font-medium text-sm">{user.user_metadata?.name || 'User'}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/settings" className="flex items-center space-x-2">
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/support" className="flex items-center space-x-2">
                          <HelpCircle className="h-4 w-4" />
                          <span>Support</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2">
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      onClick={() => setIsLoginOpen(true)}
                      className="text-sm font-medium"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => setIsLoginOpen(true)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Home
              </Link>
              <Link to="/search" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Search
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Contact
              </Link>
              <Link to="/host" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Become a host
              </Link>
              {!user && (
                <Button
                  variant="ghost"
                  onClick={() => setIsLoginOpen(true)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Sign In / Sign Up
                </Button>
              )}
            </div>
          </div>
        )}
      </header>

      {!user && <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
    </>
  );
};

export default Header;
