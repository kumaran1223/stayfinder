
import React, { useState } from 'react';
import { MessageCircle, X, Send, MapPin, DollarSign, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
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
    { icon: MapPin, text: "Find places in Goa", query: "beach places in goa" },
    { icon: DollarSign, text: "Budget under ₹5000", query: "properties under 5000 rupees" },
    { icon: Heart, text: "Luxury stays", query: "luxury properties" }
  ];

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

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('goa') || input.includes('beach')) {
      return "Great choice! Goa has amazing beach properties. I found some beautiful beachfront villas and beach shacks. Would you like to see luxury options or budget-friendly stays?";
    } else if (input.includes('budget') || input.includes('cheap') || input.includes('under')) {
      return "I can help you find budget-friendly options! What's your preferred price range per night? I have great properties starting from ₹2,500.";
    } else if (input.includes('luxury') || input.includes('expensive')) {
      return "For luxury stays, I recommend our palace suites in Rajasthan, luxury resorts in Andaman, or heritage properties in Udaipur. These range from ₹10,000 to ₹25,000 per night.";
    } else if (input.includes('mountain') || input.includes('hill')) {
      return "Mountain retreats are perfect for peaceful getaways! I suggest properties in Manali, Shimla, or Darjeeling. Would you prefer a cozy cottage or a luxury resort?";
    } else if (input.includes('family') || input.includes('kids')) {
      return "For family-friendly stays, I recommend properties with multiple bedrooms and kid-friendly amenities. How many guests will be staying?";
    } else {
      return "I'd be happy to help you find the perfect stay! Could you tell me more about your preferences - location, budget, or type of accommodation you're looking for?";
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg"
        size="sm"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-xl border-0">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="bg-red-500 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">StayFinder Assistant</h3>
              <p className="text-xs text-red-100">Always here to help!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick suggestions:</p>
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs h-8"
                      onClick={() => handleSuggestionClick(suggestion.query)}
                    >
                      <suggestion.icon className="h-3 w-3 mr-2" />
                      {suggestion.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-gray-50 rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-red-500 hover:bg-red-600"
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
