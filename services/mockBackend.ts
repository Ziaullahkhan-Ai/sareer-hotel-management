import { Booking, Room } from '../types';
import { MOCK_ROOMS } from '../constants';

// Simulates a backend delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class HotelService {
  private bookingsKey = 'sareer_bookings';

  async getRooms(): Promise<Room[]> {
    await delay(500);
    return MOCK_ROOMS;
  }

  async getRoomById(id: string): Promise<Room | undefined> {
    await delay(300);
    return MOCK_ROOMS.find(r => r.id === id);
  }

  async createBooking(booking: Omit<Booking, 'id' | 'status'>): Promise<Booking> {
    await delay(1500); // Simulate payment processing
    
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: 'confirmed'
    };

    const currentBookings = this.getBookingsSync();
    localStorage.setItem(this.bookingsKey, JSON.stringify([...currentBookings, newBooking]));
    
    return newBooking;
  }

  async getBookings(): Promise<Booking[]> {
    await delay(500);
    return this.getBookingsSync();
  }

  private getBookingsSync(): Booking[] {
    const data = localStorage.getItem(this.bookingsKey);
    return data ? JSON.parse(data) : [];
  }
}

export const hotelService = new HotelService();