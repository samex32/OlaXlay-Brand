
import React from 'react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background with Layered Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=2070&auto=format&fit=crop" 
          alt="OlaXlay - High Fashion Editorial" 
          className="w-full h-full object-cover object-center opacity-60 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      {/* Hero Content - Editorial Layout */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography & Action */}
        <div className="lg:col-span-8 text-left space-y-12">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-4">
               <span className="h-px w-12 bg-amber-200/40"></span>
               <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold text-amber-100/80">
                 The Vanguard of Nigerian Couture
               </p>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif italic text-white leading-[0.9] tracking-tight text-shadow-luxury">
              Sculpting <br />
              <span className="not-italic text-zinc-500">Ancient</span> <br />
              <span className="not-italic text-amber-200">Modernity.</span>
            </h1>
          </div>

          <div className="max-w-xl space-y-10 animate-fade-up [animation-delay:400ms]">
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
              Curating the definitive wardrobe for the modern Nigerian woman. From regally draped heritage ensembles to sharp, avant-garde silhouettes, we define the essence of the Lagos lady's daily drip.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <button 
                onClick={() => onNavigate('collection')}
                className="group relative flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.5em] text-white py-2"
              >
                Explore The Archive
                <span className="relative h-[40px] w-[40px] flex items-center justify-center border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={() => onNavigate('stylist')}
                className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 hover:text-amber-200 transition-colors py-2"
              >
                Digital Concierge
                <span className="h-[1px] w-12 bg-zinc-800 group-hover:w-20 group-hover:bg-amber-200 transition-all duration-700"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Decorative Metadata */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center text-right space-y-24 animate-fade-up [animation-delay:800ms]">
          <div className="space-y-4">
            <h3 className="font-luxury text-xl tracking-ultra text-amber-200/40">OLAXLAY</h3>
            <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold leading-loose">
              VICTORIA ISLAND, LAGOS<br />
              12 RUE DE LA MODE, PARIS<br />
              GLOBAL DISPATCH READY
            </p>
          </div>
          
          <div className="rotate-90 origin-right translate-y-12">
            <p className="text-[10px] uppercase tracking-[1em] text-zinc-500 font-bold whitespace-nowrap">
              SS25 PRE-ORDER ACTIVE
            </p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-zinc-600">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-200 to-transparent">
          <div className="w-full h-full bg-white animate-scroll-line origin-top"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-line {
          animation: scroll-line 3s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
