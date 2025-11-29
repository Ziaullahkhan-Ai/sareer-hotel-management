import React, { useState, useEffect } from 'react';
import { hotelService } from '../services/mockBackend';
import { Booking } from '../types';
import { LayoutDashboard, Users, BedDouble, DollarSign, Loader2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const Admin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await hotelService.getBookings();
      setBookings(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalRevenue = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  
  // Prepare chart data
  const chartData = bookings.reduce((acc: any[], curr) => {
    const existing = acc.find(item => item.name === curr.roomName);
    if (existing) {
      existing.bookings += 1;
    } else {
      acc.push({ name: curr.roomName, bookings: 1 });
    }
    return acc;
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-2xl font-bold text-gray-800">Administrator Dashboard</h1>
           <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Sareer Admin</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
               <DollarSign className="text-green-500" size={20} />
             </div>
             <p className="text-2xl font-bold text-gray-900">PKR {totalRevenue.toLocaleString()}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-gray-500 text-sm font-medium">Total Bookings</h3>
               <Users className="text-blue-500" size={20} />
             </div>
             <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-gray-500 text-sm font-medium">Occupancy Rate</h3>
               <LayoutDashboard className="text-purple-500" size={20} />
             </div>
             <p className="text-2xl font-bold text-gray-900">78%</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-gray-500 text-sm font-medium">Active Rooms</h3>
               <BedDouble className="text-pomegranate-600" size={20} />
             </div>
             <p className="text-2xl font-bold text-gray-900">4</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 col-span-2">
            <h3 className="font-bold text-gray-800 mb-6">Booking Popularity</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} tick={{fill: '#6b7280'}} />
                  <YAxis fontSize={12} tick={{fill: '#6b7280'}} />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#9f1239" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Bookings List */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Recent Bookings</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {bookings.length === 0 ? (
                <p className="text-gray-500 text-sm">No bookings yet.</p>
              ) : (
                bookings.slice().reverse().map((booking, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium text-sm text-gray-900">{booking.guestName}</p>
                      <p className="text-xs text-gray-500">{booking.roomName}</p>
                    </div>
                    <div className="text-right">
                       <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-bold">
                         {booking.status}
                       </span>
                       <p className="text-xs text-gray-400 mt-1">{booking.checkIn}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};