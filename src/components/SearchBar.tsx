
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/hooks/useSearch';

const SearchBar = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const popularDestinations = [
    'Mumbai, Maharashtra',
    'Delhi, India',
    'Goa, India',
    'Kerala, India',
    'Rajasthan, India',
    'Himachal Pradesh, India',
    'Tamil Nadu, India',
    'Karnataka, India',
    'Uttarakhand, India',
    'Punjab, India'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      const filtered = popularDestinations.filter(dest =>
        dest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    setShowSuggestions(false);
    // Scroll to property grid
    const propertyGrid = document.getElementById('property-grid');
    if (propertyGrid) {
      propertyGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={searchRef}>
      <div className="bg-white rounded-2xl shadow-xl p-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Where */}
          <div className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer border-r md:border-r-gray-200">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-gray-800">Where</div>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full text-sm text-gray-700 placeholder-gray-400 border-0 focus:ring-0 p-0 bg-transparent"
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                />
              </div>
            </div>
          </div>

          {/* Check in */}
          <div className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer border-r md:border-r-gray-200">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-xs font-semibold text-gray-800">Check in</div>
                <div className="text-sm text-gray-400">Add dates</div>
              </div>
            </div>
          </div>

          {/* Check out */}
          <div className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer border-r md:border-r-gray-200">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-xs font-semibold text-gray-800">Check out</div>
                <div className="text-sm text-gray-400">Add dates</div>
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-xs font-semibold text-gray-800">Who</div>
                  <div className="text-sm text-gray-400">Add guests</div>
                </div>
              </div>
              <Button
                onClick={handleSearch}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full p-3 ml-2"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg mt-2 z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-6 py-3 hover:bg-gray-50 flex items-center space-x-3 border-b last:border-b-0"
            >
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
