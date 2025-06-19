import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import { useSearch } from '@/hooks/useSearch';
import { Button } from '@/components/ui/button';

const PropertyGrid = () => {
  const { activeCategory, searchQuery } = useSearch();
  const [showAll, setShowAll] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const properties = [
    {
      id: "1",
      title: "Luxury Beach Villa in Goa",
      location: "Goa, India",
      price: 8500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "2",
      title: "Heritage Houseboat in Kerala",
      location: "Alleppey, Kerala",
      price: 6500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "3",
      title: "Mountain Resort in Manali",
      location: "Manali, Himachal Pradesh",
      price: 7200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "4",
      title: "Historic Haveli in Jaipur",
      location: "Jaipur, Rajasthan",
      price: 15000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "5",
      title: "Modern Apartment in Mumbai",
      location: "Mumbai, Maharashtra",
      price: 5500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "6",
      title: "Desert Camp in Jaisalmer",
      location: "Jaisalmer, Rajasthan",
      price: 4500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "7",
      title: "Tea Garden Cottage in Darjeeling",
      location: "Darjeeling, West Bengal",
      price: 3800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "8",
      title: "Luxury Resort in Andaman",
      location: "Port Blair, Andaman",
      price: 12000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "9",
      title: "Royal Palace Stay in Udaipur",
      location: "Udaipur, Rajasthan",
      price: 18000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "10",
      title: "Riverside Cottage in Rishikesh",
      location: "Rishikesh, Uttarakhand",
      price: 4200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "51",
      title: "Alpine Chalet in Kashmir",
      location: "Gulmarg, Kashmir",
      price: 9500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "52",
      title: "Waterfall Retreat in Meghalaya",
      location: "Shillong, Meghalaya",
      price: 5800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "53",
      title: "Valley View Lodge in Himachal",
      location: "Kullu, Himachal Pradesh",
      price: 6200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "54",
      title: "Pine Forest Cabin in Himachal",
      location: "Kasol, Himachal Pradesh",
      price: 4800,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "55",
      title: "Sunrise Point Villa in Uttarakhand",
      location: "Mussoorie, Uttarakhand",
      price: 7800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "56",
      title: "Mountain Peak Resort in HP",
      location: "Dalhousie, Himachal Pradesh",
      price: 8900,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "57",
      title: "Misty Hills Retreat in Himachal",
      location: "McLeod Ganj, Himachal Pradesh",
      price: 5400,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "58",
      title: "Sunset Beach House in Goa",
      location: "Anjuna, Goa",
      price: 7200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "59",
      title: "Mountain Lodge in Alps Style",
      location: "Auli, Uttarakhand",
      price: 9200,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "60",
      title: "Rocky Mountain Cabin in UK",
      location: "Chopta, Uttarakhand",
      price: 5600,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "61",
      title: "Heritage Palace in Rajasthan",
      location: "Bikaner, Rajasthan",
      price: 16500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "62",
      title: "Mosque View Heritage Stay",
      location: "Lucknow, Uttar Pradesh",
      price: 8500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "63",
      title: "Shepherd's Cottage in Hills",
      location: "Pahalgam, Kashmir",
      price: 4200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "64",
      title: "Cozy Pet-Friendly Cottage",
      location: "Lansdowne, Uttarakhand",
      price: 3800,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "65",
      title: "Highland Cattle Farm Stay",
      location: "Spiti Valley, Himachal Pradesh",
      price: 3200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "66",
      title: "Shepherd's Mountain Hut",
      location: "Rohtang Pass, Himachal Pradesh",
      price: 3200,
      rating: 4.3,
      images: ["https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "67",
      title: "Ocean View Whale Watching Lodge",
      location: "Mirissa, Sri Lanka",
      price: 8900,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "68",
      title: "Forest Wildlife Lodge",
      location: "Jim Corbett, Uttarakhand",
      price: 6800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "69",
      title: "Deer Park Cottage",
      location: "Kanha National Park, MP",
      price: 5400,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "70",
      title: "Lakeside Meditation Retreat",
      location: "Rishikesh, Uttarakhand",
      price: 4500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    },
    {
      id: "71",
      title: "Valley of Flowers Lodge",
      location: "Valley of Flowers, Uttarakhand",
      price: 6200,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "72",
      title: "Green Mountain Eco Lodge",
      location: "Munnar, Kerala",
      price: 5800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "73",
      title: "Modern Glass House",
      location: "Chandigarh, Punjab",
      price: 7200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "74",
      title: "Riverside Camping Tents",
      location: "Bir Billing, Himachal Pradesh",
      price: 3500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "75",
      title: "Royal Train Coach Stay",
      location: "Alwar, Rajasthan",
      price: 12000,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "76",
      title: "Bamboo Eco House",
      location: "Kaziranga, Assam",
      price: 4800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "77",
      title: "Coastal Lighthouse Stay",
      location: "Daman, Gujarat",
      price: 5200,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "78",
      title: "Hillstation Bungalow",
      location: "Panchgani, Maharashtra",
      price: 6800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "79",
      title: "Tribal Village Homestay",
      location: "Mawlynnong, Meghalaya",
      price: 3200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    },
    {
      id: "80",
      title: "Urban Rooftop Apartment",
      location: "Connaught Place, Delhi",
      price: 6800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "81",
      title: "Floating Houseboat",
      location: "Dal Lake, Kashmir",
      price: 8500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "82",
      title: "Desert Glamping Tents",
      location: "Sam Dunes, Rajasthan",
      price: 6200,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Guest favourite"
    },
    {
      id: "83",
      title: "Cliff Edge Villa",
      location: "Mahabaleshwar, Maharashtra",
      price: 9800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "84",
      title: "Royal Courtyard Stay",
      location: "Orchha, Madhya Pradesh",
      price: 11500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "85",
      title: "Sunrise Safari Lodge",
      location: "Ranthambore, Rajasthan",
      price: 7800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "86",
      title: "Coastal Fort Hotel",
      location: "Sindhudurg, Maharashtra",
      price: 6500,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "87",
      title: "Tea Estate Bungalow",
      location: "Coonoor, Tamil Nadu",
      price: 5800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Guest favourite"
    },
    {
      id: "88",
      title: "Riverside Temple Stay",
      location: "Haridwar, Uttarakhand",
      price: 3800,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    },
    {
      id: "89",
      title: "Industrial Loft Apartment",
      location: "Gurgaon, Haryana",
      price: 5200,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "90",
      title: "Coconut Grove Retreat",
      location: "Kumbakonam, Tamil Nadu",
      price: 4200,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "91",
      title: "Mountain Monastery Stay",
      location: "Hemis, Ladakh",
      price: 3500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "92",
      title: "Beach Shack Paradise",
      location: "Tarkarli, Maharashtra",
      price: 3800,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "93",
      title: "Royal Garden Suite",
      location: "Mysore Palace, Karnataka",
      price: 13500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "94",
      title: "Spice Plantation Lodge",
      location: "Thekkady, Kerala",
      price: 5400,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "95",
      title: "Urban Rooftop Apartment",
      location: "Connaught Place, Delhi",
      price: 6800,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "96",
      title: "Snow Peak Lodge",
      location: "Keylong, Himachal Pradesh",
      price: 7200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "97",
      title: "Island Paradise Resort",
      location: "Neil Island, Andaman",
      price: 15000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Superhost"
    },
    {
      id: "98",
      title: "Heritage Mansion Stay",
      location: "Chettinad, Tamil Nadu",
      price: 9200,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "99",
      title: "Jungle Tree House",
      location: "Periyar, Kerala",
      price: 4800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "100",
      title: "IT Hub Studio",
      location: "Whitefield, Bangalore",
      price: 4200,
      rating: 4.4,
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "city",
      hostType: "Guest favourite"
    },
    {
      id: "101",
      title: "Glacier View Camp",
      location: "Ladakh, J&K",
      price: 8500,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "camping",
      hostType: "Superhost"
    },
    {
      id: "102",
      title: "Coral Reef Resort",
      location: "Lakshadweep Islands",
      price: 18000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "103",
      title: "Ancient Fort Stay",
      location: "Golconda, Hyderabad",
      price: 10500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "104",
      title: "Coffee Estate Cottage",
      location: "Sakleshpur, Karnataka",
      price: 4500,
      rating: 4.6,
      images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Guest favourite"
    },
    {
      id: "105",
      title: "Luxury Desert Resort",
      location: "Osian, Rajasthan",
      price: 12500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "106",
      title: "Riverside Meditation Ashram",
      location: "Rishikesh Valley, Uttarakhand",
      price: 3800,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    },
    {
      id: "107",
      title: "Cliffside Beach House",
      location: "Varkala Cliff, Kerala",
      price: 7800,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "beachfront",
      hostType: "Guest favourite"
    },
    {
      id: "108",
      title: "Snow Resort Chalet",
      location: "Solang Valley, Himachal Pradesh",
      price: 9500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "mountains",
      hostType: "Superhost"
    },
    {
      id: "109",
      title: "Floating Palace Hotel",
      location: "Lake Pichola, Udaipur",
      price: 25000,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "luxury",
      hostType: "Superhost"
    },
    {
      id: "110",
      title: "Eco Jungle Resort",
      location: "Wayanad Hills, Kerala",
      price: 5500,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      category: "countryside",
      hostType: "Superhost"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesCategory = activeCategory === 'all' || property.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 16);

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {searchQuery ? `Search results for "${searchQuery}"` : 'Popular destinations'}
        </h2>
        <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">{filteredProperties.length} places</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {displayedProperties.map((property) => (
          <div key={property.id} className="transform hover:scale-105 transition-all duration-300">
            <PropertyCard 
              {...property} 
              onClick={() => handlePropertyClick(property)}
            />
          </div>
        ))}
      </div>
      
      {filteredProperties.length > 16 && !showAll && (
        <div className="text-center">
          <Button 
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All {filteredProperties.length} Properties
          </Button>
        </div>
      )}
      
      {showAll && (
        <div className="text-center">
          <Button 
            onClick={() => setShowAll(false)}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Show Less
          </Button>
        </div>
      )}
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">No properties found matching your search criteria.</p>
          <p className="text-gray-400 text-lg mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}

      {/* Property Detail Modal */}
      <PropertyDetail
        property={selectedProperty}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default PropertyGrid;
