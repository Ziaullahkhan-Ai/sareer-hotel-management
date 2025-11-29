import React, { useState, useEffect } from 'react';
import { hotelService } from '../services/mockBackend';
import { Room, RoomType } from '../types';
import { RoomCard } from '../components/RoomCard';
import { BookingModal } from '../components/BookingModal';
import { Loader2 } from 'lucide-react';

export const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await hotelService.getRooms();
      setRooms(data);
      setFilteredRooms(data);
      setLoading(false);
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    if (filterType === 'All') {
      setFilteredRooms(rooms);
    } else {
      setFilteredRooms(rooms.filter(r => r.type === filterType));
    }
  }, [filterType, rooms]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-pomegranate-800" />
      </div>
    );
  }

  return (
    <div className="bg-sand-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Accommodations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Sanctuaries of peace, reflecting the quiet beauty of the Quetta valley.</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-10 space-x-2 overflow-x-auto pb-4">
           {['All', ...Object.values(RoomType)].map(type => (
             <button
               key={type}
               onClick={() => setFilterType(type)}
               className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                 filterType === type 
                 ? 'bg-pomegranate-800 text-white shadow-md' 
                 : 'bg-white text-gray-600 hover:bg-gray-100'
               }`}
             >
               {type}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} onBook={setSelectedRoom} />
          ))}
        </div>
      </div>

      {selectedRoom && (
        <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </div>
  );
};