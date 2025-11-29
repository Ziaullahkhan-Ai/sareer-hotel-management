export enum RoomType {
  STANDARD = 'Standard',
  DELUXE = 'Deluxe',
  SUITE = 'Suite',
  EXECUTIVE = 'Executive'
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  price: number;
  capacity: number;
  description: string;
  imageUrl: string;
  amenities: Amenity[];
  rating: number;
}

export interface Booking {
  id: string;
  roomId: string;
  roomName: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Dining' | 'Wellness' | 'Business';
}