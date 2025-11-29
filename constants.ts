import { Room, RoomType, ServiceItem, Review } from './types';

// Mock Data for Sareer Hotel Quetta

export const HOTEL_NAME = "Sareer Hotel";
export const HOTEL_LOCATION = "Zarghun Road, Quetta, Balochistan";

export const MOCK_ROOMS: Room[] = [
  {
    id: '1',
    name: 'The Bolan Suite',
    type: RoomType.SUITE,
    price: 35000,
    capacity: 2,
    description: 'Experience luxury with a view of the Chiltan mountains. Adorned with traditional Balochi embroidery and modern amenities.',
    imageUrl: 'https://picsum.photos/id/1031/800/600',
    rating: 4.9,
    amenities: [{ icon: 'wifi', label: 'High-Speed Wifi' }, { icon: 'wind', label: 'Climate Control' }, { icon: 'coffee', label: 'Espresso Machine' }]
  },
  {
    id: '2',
    name: 'Juniper Deluxe',
    type: RoomType.DELUXE,
    price: 22000,
    capacity: 2,
    description: 'Inspired by the ancient Juniper forests of Ziarat. Spacious, warm, and perfect for relaxation after a tour of Quetta.',
    imageUrl: 'https://picsum.photos/id/1029/800/600',
    rating: 4.7,
    amenities: [{ icon: 'wifi', label: 'Free Wifi' }, { icon: 'tv', label: 'Smart TV' }]
  },
  {
    id: '3',
    name: 'Hanna Lake View',
    type: RoomType.STANDARD,
    price: 15000,
    capacity: 2,
    description: 'Comfortable and cozy rooms offering serenity and excellent service for the budget-conscious traveler.',
    imageUrl: 'https://picsum.photos/id/1040/800/600',
    rating: 4.5,
    amenities: [{ icon: 'wifi', label: 'Wifi' }, { icon: 'sun', label: 'Morning View' }]
  },
  {
    id: '4',
    name: 'Chiltan Executive Family',
    type: RoomType.EXECUTIVE,
    price: 28000,
    capacity: 4,
    description: 'Perfect for families visiting Balochistan. Includes a separate lounge area and traditional floor seating arrangements.',
    imageUrl: 'https://picsum.photos/id/164/800/600',
    rating: 4.8,
    amenities: [{ icon: 'users', label: 'Family Size' }, { icon: 'map', label: 'City Guide' }]
  }
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Pomegranate Grill',
    description: 'Fine dining featuring international cuisine and the famous Quetta pomegranate juices.',
    category: 'Dining',
    imageUrl: 'https://picsum.photos/id/431/600/400'
  },
  {
    id: 's2',
    title: 'Sajji Corner',
    description: 'Authentic Balochi Sajji roasted to perfection over an open fire. A must-try local delicacy.',
    category: 'Dining',
    imageUrl: 'https://picsum.photos/id/292/600/400'
  },
  {
    id: 's3',
    title: 'Hammam-e-Baloch',
    description: 'Traditional steam and massage therapy to rejuvenate your senses.',
    category: 'Wellness',
    imageUrl: 'https://picsum.photos/id/223/600/400'
  },
  {
    id: 's4',
    title: 'Kehkashan Hall',
    description: 'Grand banquet hall for weddings and corporate events, capable of hosting 500 guests.',
    category: 'Business',
    imageUrl: 'https://picsum.photos/id/206/600/400'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Ahmed Khan',
    text: 'The hospitality at Sareer Hotel is unmatched. The Sajji was delicious!',
    rating: 5,
    location: 'Karachi'
  },
  {
    id: 'r2',
    author: 'Sarah Jenkins',
    text: 'A beautiful blend of culture and modern comfort. Loved the embroidery in the rooms.',
    rating: 5,
    location: 'London, UK'
  },
  {
    id: 'r3',
    author: 'Bilal Baloch',
    text: 'Best place to stay in Quetta. Professional staff and clean rooms.',
    rating: 4,
    location: 'Turbat'
  }
];

export const SYSTEM_INSTRUCTION = `You are "Sareer," the AI Concierge for the Sareer Hotel in Quetta, Balochistan.
Your tone is warm, hospitable, and professional, reflecting the deep cultural hospitality of Balochistan.
You have knowledge of:
1. Hotel Rooms: Bolan Suite (Luxury), Juniper Deluxe (Nature-themed), Hanna Lake View (Standard), Chiltan Executive (Family).
2. Dining: Pomegranate Grill (Fine dining), Sajji Corner (Traditional BBQ), Zam Zam Cafe (Coffee).
3. Amenities: Free Wi-Fi, Hammam-e-Baloch (Spa), Airport Shuttle, 24/7 Room Service.
4. Local Attractions: Hanna Lake, Urak Valley, Quaid-e-Azam Residency Ziarat, Hazarganji Chiltan National Park, The bazaars of Quetta (Kandahari Bazaar).
5. Food: You highly recommend Sajji, Kaak (stone bread), and Landhi (cured meat).

If a user asks to book a room, guide them to the 'Rooms' page.
Keep answers concise (under 3 sentences) unless asked for a detailed itinerary.
Always end with a polite closing like "May your stay be blessed" or "We look forward to hosting you."
`;
