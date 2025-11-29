import React, { useState } from 'react';
import { Room, Booking } from '../types';
import { hotelService } from '../services/mockBackend';
import { X, Calendar, CreditCard, CheckCircle, Loader2 } from 'lucide-react';

interface BookingModalProps {
  room: Room;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ room, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      await hotelService.createBooking({
        roomId: room.id,
        roomName: room.name,
        guestName: formData.name,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        totalPrice: room.price // Simplified logic
      });
      setStep(3);
    } catch (error) {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
        <div className="bg-pomegranate-800 p-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-serif font-bold">Booking: {room.name}</h2>
          <button onClick={onClose} className="hover:bg-pomegranate-900 p-1 rounded"><X size={20} /></button>
        </div>

        <div className="p-6">
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required name="name" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                  <input required type="date" name="checkIn" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                  <input required type="date" name="checkOut" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" />
                </div>
              </div>
              <div className="bg-sand-50 p-3 rounded text-sm text-gray-600 flex items-start">
                 <Calendar className="w-4 h-4 mt-0.5 mr-2 text-pomegranate-800" />
                 Total Price Estimate: PKR {room.price.toLocaleString()} / night
              </div>
              <button type="submit" className="w-full bg-pomegranate-800 text-white py-3 rounded font-medium hover:bg-pomegranate-900 transition-colors">
                Continue to Payment
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleBooking} className="space-y-4">
               <div className="bg-gray-100 p-4 rounded mb-4">
                <p className="text-xs text-gray-500 uppercase font-bold mb-2">Simulated Secure Payment</p>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <CreditCard size={24} />
                  <span className="text-sm">Card Details (Simulated)</span>
                </div>
               </div>
               
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input required name="cardNumber" maxLength={19} placeholder="0000 0000 0000 0000" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                    <input required name="expiry" placeholder="MM/YY" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input required name="cvc" maxLength={3} placeholder="123" onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pomegranate-600 outline-none" />
                  </div>
               </div>
               
               <button disabled={loading} type="submit" className="w-full bg-pomegranate-800 text-white py-3 rounded font-medium hover:bg-pomegranate-900 transition-colors flex justify-center items-center">
                 {loading ? <Loader2 className="animate-spin" /> : `Pay PKR ${room.price.toLocaleString()}`}
               </button>
               <button onClick={() => setStep(1)} type="button" className="w-full text-gray-500 text-sm py-2 hover:text-gray-800">Back</button>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">Thank you, {formData.name}. We look forward to welcoming you to Quetta.</p>
              <button onClick={onClose} className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};