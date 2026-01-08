import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
  user: User | null;
  onAuthOpen: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartOpen, activeTab, onNavigate, user, onAuthOpen, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Collection', id: 'collection' },
    { name: 'About', id: 'about' },
    { name: 'AI Stylist', id: 'stylist' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="group flex flex-col items-center transition-transform hover:scale-105 active:scale-95 text-center"
        >
          <div className="logo-gold font-luxury text-2xl md:text-3xl font-bold leading-none uppercase">
            Olaxlay
          </div>
          <span className="text-[6px] md:text-[7px] uppercase tracking-[0.4em] font-bold mt-1 text-amber-500/60 group-hover:text-amber-200 transition-colors">
            Your Daily Dose of Drip
          </span>
        </button>
        
        <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`relative py-2 transition-all duration-300 hover:text-amber-200 ${
                activeTab === link.id ? 'text-amber-200' : 'text-zinc-400'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-amber-200 transition-all duration-500 ${
                activeTab === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-200/80">Hello, {user.name.split(' ')[0]}</span>
                <button 
                  onClick={onLogout}
                  className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button 
                onClick={onAuthOpen}
                className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border-r border-white/10 pr-4"
              >
                Sign up/log in
              </button>
            )}
          </div>

          <button 
            onClick={onCartOpen}
            className="relative p-2 text-white hover:text-amber-200 transition-all group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-black text-[8px] font-bold flex items-center justify-center rounded-full animate-fade-up">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;