import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg py-3 shadow-lg border-b border-primary/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              APOLLO <span className="text-accent font-medium">CLASSES</span>
            </h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-sans transition-colors duration-300 ${isScrolled ? 'text-primary/60' : 'text-white/60'}`}>Kota's Excellence</p>
          </div>
        </div>

        <nav className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <a href="#why-choose" className="hover:text-accent smooth-hover">Why Us</a>
          <a href="#courses" className="hover:text-accent smooth-hover">Courses</a>
          <a href="#results" className="hover:text-accent smooth-hover">Results</a>
          <a href="#contact" className="hover:text-accent smooth-hover">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+911234567890" 
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border smooth-hover ${
              isScrolled ? 'border-primary/10 text-primary hover:border-accent hover:text-accent' : 'border-white/20 text-white hover:border-accent hover:text-accent'
            }`}
          >
            <Phone size={16} />
            <span className="text-sm font-semibold">Call Now</span>
          </a>
          <a 
            href="https://wa.me/911234567890" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full gold-gradient text-white shadow-md hover:scale-105 smooth-hover"
          >
            <MessageCircle size={16} />
            <span className="text-sm font-semibold">Demo Class</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
