
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity, onCheckout }) => {
  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-white/10 shadow-2xl flex flex-col">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-xl font-serif italic text-white">Your Selection</h2>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-zinc-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-zinc-500 font-light italic">The atelier awaits your choice.</p>
                <button 
                  onClick={onClose}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-200 hover:text-white transition-colors"
                >
                  Return to Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 group animate-fade-up">
                  <div className="w-24 aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-white mb-1">{item.name}</h3>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.category}</p>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div className="space-y-2">
                        <p className="text-xs text-amber-200 font-serif italic">{formatNaira(item.price)}</p>
                        {/* Quantity Adjuster */}
                        <div className="flex items-center gap-4 bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-sm">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-zinc-400 hover:text-white transition-colors text-lg leading-none"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-[10px] font-bold text-white min-w-[1rem] text-center tracking-widest">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-zinc-400 hover:text-white transition-colors text-lg leading-none"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1">Item Total</p>
                        <p className="text-sm text-white font-serif italic">{formatNaira(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 border-t border-white/5 bg-zinc-950/50 space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-1">Total Pieces: {cart.reduce((acc, i) => acc + i.quantity, 0)}</p>
                  <p className="text-2xl font-serif italic text-white">{formatNaira(total)}</p>
                </div>
                <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Complimentary Delivery</p>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-100 transition-all shadow-xl"
              >
                Secure Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
