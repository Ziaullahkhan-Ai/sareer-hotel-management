import React from 'react';
import { Room } from '../types';
import { Wifi, User, Star } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-sand-100 transition-transform hover:-translate-y-1 hover:shadow-xl group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.imageUrl} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-pomegranate-800 text-white px-3 py-1 text-sm font-semibold rounded-full">
          PKR {room.price.toLocaleString()}/night
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-serif text-pomegranate-900 font-bold">{room.name}</h3>
          <div className="flex items-center text-gold-600">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{room.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>Up to {room.capacity} Guests</span>
          </div>
          <div className="flex items-center">
            <Wifi className="w-4 h-4 mr-1" />
            <span>Free Wifi</span>
          </div>
        </div>

        <button 
          onClick={() => onBook(room)}
          className="w-full bg-pomegranate-800 hover:bg-pomegranate-900 text-white font-medium py-3 rounded transition-colors uppercase tracking-wider text-sm flex justify-center items-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};