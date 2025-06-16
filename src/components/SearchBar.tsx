
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
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
  };

  if (isMobile) {
    return (
      <div className="relative" ref={searchRef}>
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-3 border">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="flex-1 bg-transparent text-sm placeholder-gray-500 border-0 focus:ring-0 p-0"
            onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
          />
        </div>
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 z-50">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 border-b last:border-b-0"
              >
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{suggestion}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center bg-white border rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 max-w-2xl">
        <div className="flex-1 px-6 py-2">
          <div className="flex items-center">
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-800">Where</span>
              <input
                type="text"
                placeholder="Search destinations"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="block w-full text-sm text-gray-700 placeholder-gray-400 border-0 focus:ring-0 p-0"
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
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
            <Button
              size="sm"
              onClick={handleSearch}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full p-2 ml-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 z-50">
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
