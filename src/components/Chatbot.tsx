
import React, { useState } from 'react';
import { MessageCircle, X, Send, MapPin, DollarSign, Heart, RefreshCw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  propertyRecommendations?: PropertyRecommendation[];
}

interface PropertyRecommendation {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your StayFinder assistant. I can help you find the perfect place to stay based on your location, budget, and preferences. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickSuggestions = [
    { icon: MapPin, text: "Beach places in Goa", query: "beach places in goa" },
    { icon: DollarSign, text: "Budget under ₹5000", query: "properties under 5000 rupees" },
    { icon: Heart, text: "Luxury stays", query: "luxury properties" },
    { icon: MapPin, text: "Mountain retreats", query: "mountain properties in himachal" },
    { icon: DollarSign, text: "Mid-range stays", query: "properties between 5000 to 10000" },
    { icon: Heart, text: "Family-friendly", query: "family properties with kids" }
  ];

  const propertyRecommendations = {
    goa: [
      {
        id: "1",
        title: "Luxury Beach Villa",
        location: "Goa, India",
        price: 8500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "47",
        title: "Beach Shack in Arambol",
        location: "Arambol, Goa",
        price: 2800,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    luxury: [
      {
        id: "4",
        title: "Historic Haveli in Jaipur",
        location: "Jaipur, Rajasthan",
        price: 15000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "9",
        title: "Royal Palace Stay",
        location: "Udaipur, Rajasthan",
        price: 18000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    budget: [
      {
        id: "26",
        title: "Riverside Camp",
        location: "Rishikesh, Uttarakhand",
        price: 2800,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "30",
        title: "Urban Studio",
        location: "Pune, Maharashtra",
        price: 3200,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    mountain: [
      {
        id: "3",
        title: "Mountain Resort",
        location: "Manali, Himachal Pradesh",
        price: 7200,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "15",
        title: "Lakefront Resort",
        location: "Nainital, Uttarakhand",
        price: 8900,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ]
  };

  const handleRefreshChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm your StayFinder assistant. I can help you find the perfect place to stay based on your location, budget, and preferences. How can I help you today?",
        isBot: true,
        timestamp: new Date()
      }
    ]);
    setInputValue('');
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response with property recommendations
    setTimeout(() => {
      const { botResponse, recommendations } = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
        propertyRecommendations: recommendations
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): { botResponse: string; recommendations?: PropertyRecommendation[] } => {
    const input = userInput.toLowerCase();
    
    if (input.includes('goa') || input.includes('beach')) {
      return {
        botResponse: "Great choice! Goa has amazing beach properties. Here are some beautiful beachfront options I found for you:",
        recommendations: propertyRecommendations.goa
      };
    } else if (input.includes('budget') || input.includes('cheap') || input.includes('under')) {
      return {
        botResponse: "Perfect! I found some great budget-friendly options for you. These properties offer excellent value:",
        recommendations: propertyRecommendations.budget
      };
    } else if (input.includes('luxury') || input.includes('expensive')) {
      return {
        botResponse: "For luxury stays, here are our premium properties that offer exceptional experiences:",
        recommendations: propertyRecommendations.luxury
      };
    } else if (input.includes('mountain') || input.includes('hill')) {
      return {
        botResponse: "Mountain retreats are perfect for peaceful getaways! Here are some stunning options:",
        recommendations: propertyRecommendations.mountain
      };
    } else if (input.includes('family') || input.includes('kids')) {
      return {
        botResponse: "For family-friendly stays, I recommend properties with multiple bedrooms and kid-friendly amenities. How many guests will be staying?",
        recommendations: propertyRecommendations.budget
      };
    } else {
      return {
        botResponse: "I'd be happy to help you find the perfect stay! Could you tell me more about your preferences - location, budget, or type of accommodation you're looking for?"
      };
    }
  };

  const handleSuggestionClick = (query: string) => {
    setInputValue(query);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-2xl transform hover:scale-110 transition-all duration-300"
        size="sm"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 h-[500px] shadow-2xl border-0 transform animate-in slide-in-from-bottom-5">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">StayFinder Assistant</h3>
                <p className="text-xs text-red-100">Always here to help!</p>
              </div>
              <Button
                onClick={handleRefreshChat}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-md'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                  
                  {/* Property Recommendations */}
                  {message.propertyRecommendations && (
                    <div className="mt-3 space-y-2">
                      {message.propertyRecommendations.map((property) => (
                        <div key={property.id} className="bg-white rounded-lg p-3 shadow-md border hover:shadow-lg transition-shadow">
                          <div className="flex space-x-3">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-gray-900">{property.title}</h4>
                              <p className="text-xs text-gray-600">{property.location}</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-sm font-bold text-red-600">₹{property.price.toLocaleString()}</span>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 fill-current text-yellow-500" />
                                  <span className="text-xs">{property.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center font-medium">Quick suggestions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-xs h-auto p-2 hover:bg-red-50 hover:border-red-300"
                        onClick={() => handleSuggestionClick(suggestion.query)}
                      >
                        <suggestion.icon className="h-3 w-3 mr-1" />
                        <span className="text-xs">{suggestion.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 rounded-lg px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
