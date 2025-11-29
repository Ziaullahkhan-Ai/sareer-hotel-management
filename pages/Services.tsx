import React from 'react';
import { MOCK_SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-pomegranate-900 py-20 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Dining & Wellness</h1>
        <p className="text-pomegranate-100 max-w-2xl mx-auto px-4">Indulge in the finest Balochi cuisine or rejuvenate at our world-class spa.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {['Dining', 'Wellness', 'Business'].map((category) => (
          <div key={category} className="mb-20 last:mb-0">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8 border-l-4 border-gold-500 pl-4">{category}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {MOCK_SERVICES.filter(s => s.category === category).map((service, index) => (
                <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-sand-50 rounded-lg overflow-hidden shadow-sm`}>
                   <div className="md:w-1/2">
                     <img src={service.imageUrl} alt={service.title} className="w-full h-64 md:h-full object-cover" />
                   </div>
                   <div className="md:w-1/2 p-8 flex flex-col justify-center">
                     <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                     <p className="text-gray-600 mb-6">{service.description}</p>
                     <button className="self-start text-pomegranate-800 font-bold hover:underline text-sm uppercase tracking-wide">
                       Learn More
                     </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};