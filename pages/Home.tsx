import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { MOCK_REVIEWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1036/1600/900" 
            alt="Quetta landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <span className="text-gold-500 tracking-[0.2em] uppercase text-sm font-bold mb-4 block animate-fade-in">Welcome to Balochistan</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Luxury in the Heart <br/> of Quetta
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the legendary hospitality of the Sareer Hotel. A perfect blend of traditional Balochi aesthetics and modern comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/rooms" className="bg-pomegranate-800 hover:bg-pomegranate-900 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
              Book a Room
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/50 px-8 py-3 rounded text-lg font-medium transition-colors">
              Explore Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/305/800/600" 
                alt="Balochi Rug" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-4xl font-bold text-pomegranate-900 mb-6">A Tribute to Culture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sareer Hotel is not just a place to stay; it is a gateway to the rich heritage of Balochistan. From our lobby adorned with hand-woven rugs from Kalat to our architecture inspired by the forts of the region, every detail tells a story.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Traditional Sajji & Landhi Dining
                </li>
                 <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Excursions to Hanna Lake & Urak Valley
                </li>
                 <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Balochi Live Music Evenings
                </li>
              </ul>
              <Link to="/services" className="inline-flex items-center text-pomegranate-800 font-bold hover:underline">
                Discover Experiences <ArrowRight size={16} className="ml-2"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Teaser */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Accommodation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Designed for comfort, styled with tradition. Choose from our range of exquisite rooms.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
               <img src="https://picsum.photos/id/1031/600/800" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-left">
                 <h3 className="text-white font-serif text-2xl font-bold">Suites</h3>
                 <p className="text-gray-300 text-sm mb-2">Starting from PKR 35,000</p>
                 <Link to="/rooms" className="text-gold-500 text-sm uppercase font-bold tracking-wider">View Details</Link>
               </div>
             </div>
             <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
               <img src="https://picsum.photos/id/1029/600/800" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-left">
                 <h3 className="text-white font-serif text-2xl font-bold">Deluxe Rooms</h3>
                 <p className="text-gray-300 text-sm mb-2">Starting from PKR 22,000</p>
                 <Link to="/rooms" className="text-gold-500 text-sm uppercase font-bold tracking-wider">View Details</Link>
               </div>
             </div>
             <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
               <img src="https://picsum.photos/id/164/600/800" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-left">
                 <h3 className="text-white font-serif text-2xl font-bold">Family Suites</h3>
                 <p className="text-gray-300 text-sm mb-2">Starting from PKR 28,000</p>
                 <Link to="/rooms" className="text-gold-500 text-sm uppercase font-bold tracking-wider">View Details</Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pomegranate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-12">Guest Whispers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_REVIEWS.map(review => (
              <div key={review.id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic mb-6 text-gray-200">"{review.text}"</p>
                <div>
                  <p className="font-bold font-serif">{review.author}</p>
                  <p className="text-xs text-gray-400 uppercase">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};