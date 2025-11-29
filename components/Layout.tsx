import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { AIConcierge } from './AIConcierge';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-pomegranate-600 font-bold' : 'text-gray-700 hover:text-pomegranate-800';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
               <div className="w-10 h-10 bg-pomegranate-800 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-serif font-bold text-xl">S</div>
               <div>
                 <h1 className="text-xl font-serif font-bold text-gray-900 leading-none">SAREER</h1>
                 <span className="text-xs text-gold-600 uppercase tracking-widest">Hotel Quetta</span>
               </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/rooms" className={isActive('/rooms')}>Rooms & Suites</Link>
              <Link to="/services" className={isActive('/services')}>Dining & Spa</Link>
              <Link to="/admin" className={isActive('/admin')}>Admin</Link>
            </div>
            
             <Link to="/rooms" className="hidden md:block bg-pomegranate-800 text-white px-6 py-2 rounded hover:bg-pomegranate-900 transition-colors">
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-800">
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
             <Link to="/" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
             <Link to="/rooms" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
             <Link to="/services" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Services</Link>
             <Link to="/admin" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Admin</Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      <AIConcierge />

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-gold-500">Sareer Hotel</h3>
              <p className="text-gray-400 text-sm">Experince the warmth of Balochi hospitality mixed with modern luxury. The jewel of Quetta.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/rooms" className="hover:text-white">Rooms</Link></li>
                <li><Link to="/services" className="hover:text-white">Dining</Link></li>
                <li><Link to="/services" className="hover:text-white">Spa & Wellness</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center"><MapPin size={16} className="mr-2 text-pomegranate-600"/> Zarghun Road, Quetta</li>
                <li className="flex items-center"><Phone size={16} className="mr-2 text-pomegranate-600"/> +92 81 2820000</li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20}/></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20}/></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20}/></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Sareer Hotel Quetta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};