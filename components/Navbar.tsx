
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo Recreation with SVG components for high quality */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 5 L61 35 L95 35 L68 55 L78 85 L50 66 L22 85 L32 55 L5 35 L39 35 Z" fill="#3b82f6" />
              <path d="M15 90 Q25 50 45 40 M25 95 Q35 60 48 45 M35 100 Q45 70 51 50" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-[#001A3D]' : 'text-[#001A3D]'}`}>
            Lightyears
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#advisor" className="hover:text-blue-600 transition-colors">AI Advisor</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="px-5 py-2.5 bg-[#001A3D] text-white rounded-full hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95">
            Book a Consultation
          </a>
        </div>

        <button className="md:hidden text-slate-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
