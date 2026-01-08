
import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <button onClick={() => onNavigate('home')} className="inline-block group mb-8 transition-transform hover:scale-105 text-left">
              <div className="logo-gold font-script text-4xl md:text-5xl leading-none">
                Olaxlay
              </div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.4em] font-bold mt-1">
                Lagos Luxe • Abuja • Paris
              </p>
            </button>
            <p className="text-zinc-400 text-sm max-w-sm mb-8">
              A collision of architectural silhouettes and Nigerian excellence. We don't just dress; we define the aesthetic of the modern African experience.
            </p>
            <div className="flex space-x-6">
               {['Instagram', 'Pinterest', 'Vogue Africa'].map(social => (
                 <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-200 transition-colors">{social}</a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">The Collection</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><button onClick={() => onNavigate('collection')} className="hover:text-amber-200 transition-colors">Couture Gowns</button></li>
              <li><button onClick={() => onNavigate('collection')} className="hover:text-amber-200 transition-colors">Urban Streetwear</button></li>
              <li><button onClick={() => onNavigate('collection')} className="hover:text-amber-200 transition-colors">Bespoke Aso-Ebi</button></li>
              <li><button onClick={() => onNavigate('stylist')} className="hover:text-amber-200 transition-colors">Virtual Fitting</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">The Flagships</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>Lagos — Victoria Island</li>
              <li>Abuja — Maitama Heights</li>
              <li>Paris — 12 Rue de la Mode</li>
              <li>concierge@olaxlay.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Ola X Lay Fash. Proudly Nigerian. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Global Logistics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
