
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import PaymentModal from './components/PaymentModal';
import AuthModal from './components/AuthModal';
import ProductDetailModal from './components/ProductDetailModal';
import { CartItem, Product, User } from './types';
import { PRODUCTS } from './constants';
import { supabase } from './services/supabaseClient';
import { submitInquiry } from './services/inquiryService';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeProductForDetail, setActiveProductForDetail] = useState<Product | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser({
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Client',
          email: session.user.email || '',
          isLoggedIn: true
        });
      }
    };
    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Client',
          email: session.user.email || '',
          isLoggedIn: true
        });
      } else {
        setUser(null);
      }
    });

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthSuccess = (userData: User) => {
    if (userData.isLoggedIn) {
      setUser(userData);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navigate = (tab: string) => {
    window.location.hash = tab;
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency', currency: 'NGN', minimumFractionDigits: 0,
    }).format(amount);
  };

  const InquirySection = () => {
    const [formData, setFormData] = useState({ name: user?.name || '', email: user?.email || '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleInquiry = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError('');
      try {
        await submitInquiry(formData);
        setIsSuccess(true);
        setFormData({ ...formData, message: '' });
      } catch (err: any) {
        setError(err.message || 'Transmission failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section className="bg-black py-48 px-6 md:px-12 text-white border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500/60 block">Private Concierge</span>
              <h2 className="text-6xl font-serif italic text-amber-100 leading-[1.1]">The <br /> Atelier <br /> Consult.</h2>
            </div>
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              For bespoke couture, white-glove events, or private fittings, our team is available globally. Entrust us with your vision.
            </p>
            <div className="pt-12 grid grid-cols-2 gap-8 border-t border-white/5">
              <div className="space-y-2">
                <p className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold">Lagos Atelier</p>
                <p className="text-xs text-zinc-400">Victoria Island Headquarters</p>
              </div>
              <div className="space-y-2">
                <p className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold">Paris Showroom</p>
                <p className="text-xs text-zinc-400">12 Rue de la Mode</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/40 border border-white/5 p-8 md:p-16 backdrop-blur-xl relative group">
            <div className="absolute -inset-px border border-white/10 group-hover:border-amber-200/20 transition-all duration-1000"></div>
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-up">
                <div className="w-20 h-20 rounded-full border border-amber-200/20 flex items-center justify-center text-amber-200">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="space-y-2">
                   <h3 className="text-3xl font-serif italic text-white">Registry Updated</h3>
                   <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">A stylist will contact you momentarily.</p>
                </div>
                <button onClick={() => setIsSuccess(false)} className="text-[9px] font-bold uppercase tracking-[0.4em] text-amber-200 hover:text-white transition-colors pt-6 underline underline-offset-8 decoration-amber-200/20">Send another transmission</button>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-10 animate-fade-up">
                <div className="space-y-2 relative">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Full Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="JEAN DOE" className="w-full bg-transparent border-b border-white/10 py-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest" />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="CONCIERGE@LUXURY.COM" className="w-full bg-transparent border-b border-white/10 py-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest" />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Inquiry Details</label>
                  <textarea required rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="DESCRIBE YOUR VISION..." className="w-full bg-transparent border-b border-white/10 py-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest resize-none" />
                </div>
                {error && <p className="text-[9px] text-red-500 uppercase tracking-widest">{error}</p>}
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-amber-100 transition-all flex items-center justify-center group"
                >
                  {isSubmitting ? 'Transmitting...' : 'Establish Connection'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  };

  const FeaturedSection = () => (
    <section className="py-48 bg-black relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-950/40 pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/60 block">Seasonal Archive</span>
            <h2 className="text-7xl md:text-9xl font-serif italic text-white leading-[0.8]">Latest <br /> <span className="text-zinc-800">Couture.</span></h2>
          </div>
          <button onClick={() => navigate('collection')} className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.5em] text-amber-200 py-4">
            View Full Archive
            <span className="h-px w-16 bg-amber-200/20 group-hover:w-24 group-hover:bg-amber-200 transition-all duration-700"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <div key={product.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'lg:translate-y-24' : ''}`} onClick={() => setActiveProductForDetail(product)}>
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950 border border-white/5">
                <img src={product.images[0]} className="w-full h-full object-cover object-center grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2.5s] ease-out" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-all duration-1000"></div>
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-1000">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-white">
                    <span>Explore Piece</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-3">
                <p className="text-[8px] uppercase tracking-[0.4em] text-zinc-600 font-bold">{product.category}</p>
                <h3 className="text-2xl font-serif italic text-white group-hover:text-amber-200 transition-colors duration-500">{product.name}</h3>
                <p className="text-sm font-serif text-zinc-500 tracking-wider">{formatNaira(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const HomeView = () => (
    <div className="animate-fade-up">
      <Hero onNavigate={navigate} />
      
      {/* Refined Ticker */}
      <div className="bg-amber-200 py-4 overflow-hidden border-y border-black">
        <div className="flex whitespace-nowrap animate-fast-ticker">
          {[1,2,3,4,5,6].map(i => (
            <span key={i} className="text-black text-[11px] font-bold uppercase tracking-[0.7em] mx-16">
              ASO-OKE COUTURE • NIGERIAN HERITAGE • GLOBAL LUXURY • ATELIER DISPATCH • BOLD SILHOUETTES
            </span>
          ))}
        </div>
      </div>
      
      <FeaturedSection />

      {/* Manifesto Section - Refined Architectural Layout */}
      <section className="py-60 px-6 md:px-12 bg-black overflow-hidden border-y border-white/5 relative">
        <div className="absolute top-0 left-0 text-[300px] font-luxury opacity-[0.01] pointer-events-none select-none tracking-tighter leading-none -translate-x-20 -translate-y-20">MANIFESTO</div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16 order-2 lg:order-1">
            <div className="space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/60 block">Our Philosophy</span>
              <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.9]">Threaded <br /> <span className="not-italic text-zinc-600">Ancestry.</span></h2>
            </div>
            <p className="text-zinc-500 text-2xl font-light leading-relaxed max-w-xl italic">
              "We believe fashion is the only time machine that works both ways. We weave the wisdom of the past into the silhouettes of the future."
            </p>
            <div className="pt-8 border-t border-white/5 space-y-10">
               <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
                 Every Ola X Lay piece is a structural narrative—crafted by hand in our Lagos atelier using heritage techniques passed through generations, refined for the modern vanguard.
               </p>
               <button onClick={() => navigate('about')} className="group flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.5em] text-white py-4">
                 The Story
                 <span className="relative h-1 w-32 bg-zinc-900 overflow-hidden">
                    <span className="absolute inset-0 bg-amber-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></span>
                 </span>
               </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-16 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-zinc-950 overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1618333244971-da0373059637?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover object-center transition-transform duration-[5s] group-hover:scale-110" 
                alt="Editorial African Fashion Shot" 
              />
              <div className="absolute inset-0 border-[20px] border-black opacity-100 group-hover:opacity-0 transition-opacity duration-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <InquirySection />
      
      <style>{`
        @keyframes fast-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-fast-ticker {
          animation: fast-ticker 35s linear infinite;
        }
      `}</style>
    </div>
  );

  return (
    <div className="min-h-screen bg-black selection:bg-amber-200/30">
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onCartOpen={() => setIsCartOpen(true)} activeTab={activeTab} onNavigate={navigate} user={user} onAuthOpen={() => setIsAuthOpen(true)} onLogout={handleLogout} />
      <main className="min-h-[80vh]">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'collection' && <div className="pt-24 animate-fade-up"><Collection onAddToCart={addToCart} onShowDetail={setActiveProductForDetail} /></div>}
        {activeTab === 'about' && (
          <div className="animate-fade-up pt-24 bg-black">
            <section id="about" className="pt-32 pb-48 overflow-hidden">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-32 mb-40">
                  <div className="lg:col-span-7 relative group">
                    <div className="absolute -inset-12 border border-white/5 scale-95 group-hover:scale-100 transition-transform duration-1000 pointer-events-none"></div>
                    <div className="aspect-[3/4] overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 bg-zinc-950 shadow-2xl border border-white/10">
                      <img src="https://images.unsplash.com/photo-1596462502278-27bfad45f1f6?q=80&w=2070&auto=format&fit=crop" alt="OlaXlay Genesis Editorial" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[5s] object-center" />
                    </div>
                  </div>
                  <div className="lg:col-span-5 space-y-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600">Our Heritage</span>
                    <h2 className="text-7xl md:text-8xl font-serif leading-[0.8] text-white">Lagos <br /><span className="italic text-amber-200">Reimagined</span></h2>
                    <p className="text-zinc-500 text-xl font-light leading-relaxed">
                      Born in the vibrant, architectural complexity of Victoria Island and refined in the quiet elegance of Paris, Ola X Lay is a testament to the modern African renaissance.
                    </p>
                    <div className="pt-8">
                      <button onClick={() => navigate('collection')} className="px-12 py-5 border border-amber-200/30 text-amber-200 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-amber-200 hover:text-black transition-all">
                        Experience The Ethos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <InquirySection />
          </div>
        )}
        {activeTab === 'stylist' && <div className="pt-24 animate-fade-up"><AIStylist /></div>}
      </main>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} onCheckout={handleCheckout} />
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} amount={cartTotal} onSuccess={handlePaymentSuccess} cart={cart} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onAuthSuccess={handleAuthSuccess} />
      {activeProductForDetail && <ProductDetailModal product={activeProductForDetail} onClose={() => setActiveProductForDetail(null)} onAddToCart={addToCart} />}
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
