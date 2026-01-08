
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency', currency: 'NGN', minimumFractionDigits: 0,
    }).format(amount);
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl transition-opacity duration-700" onClick={onClose}></div>
      
      <div className="relative w-full max-w-7xl bg-zinc-950 border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.9)] flex flex-col md:flex-row overflow-hidden animate-fade-up max-h-[90vh]">
        
        {/* Left: Immersive Media Gallery */}
        <div className="md:w-3/5 h-[50vh] md:h-auto flex flex-col bg-black relative group border-r border-white/5">
          <div className="flex-1 relative overflow-hidden">
            {product.images.map((img, idx) => (
              <img 
                key={img}
                src={img} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-out ${
                  activeImageIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                }`}
                alt={`${product.name} - View ${idx + 1}`}
              />
            ))}
            
            {/* Logo Overlay */}
            <div className="absolute bottom-10 right-10 pointer-events-none select-none">
              <div className="logo-gold font-script text-5xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000">Olaxlay</div>
            </div>
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="p-6 flex gap-4 overflow-x-auto custom-scrollbar bg-zinc-950/80 backdrop-blur-md border-t border-white/5">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-24 aspect-[3/4] flex-shrink-0 overflow-hidden border transition-all duration-500 ${
                    activeImageIdx === idx ? 'border-amber-200' : 'border-white/5 opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Refined Product Intel */}
        <div className="md:w-2/5 p-8 md:p-16 overflow-y-auto custom-scrollbar flex flex-col justify-between bg-zinc-950">
          <div className="space-y-12">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/60 block">{product.category}</span>
                <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">{product.name}</h2>
              </div>
              <button onClick={onClose} className="p-2 -mr-6 -mt-6 text-zinc-600 hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <p className="text-4xl font-serif text-amber-100/90">{formatNaira(product.price)}</p>
            
            <p className="text-zinc-500 text-lg leading-relaxed font-light border-l-2 border-amber-200/20 pl-6">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Select Size</span>
                <button className="text-[9px] uppercase tracking-widest text-amber-200/60 hover:text-amber-200 underline decoration-amber-200/20 underline-offset-4">Size Guide</button>
              </div>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-4 text-[10px] font-bold transition-all border ${
                      selectedSize === size 
                      ? 'bg-white text-black border-white' 
                      : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-2 pt-8">
              {[
                { id: 'care', title: 'Composition & Care', content: '100% Hand-woven Aso-Oke or Premium Italian Silk. Dry clean only. Handle with extreme care to preserve traditional embroidery.' },
                { id: 'shipping', title: 'Shipping & White-Glove Delivery', content: 'Complimentary worldwide shipping. Lagos orders delivered within 24 hours via private courier. International dispatch takes 3-5 business days.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-white/5">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all"
                  >
                    {section.title}
                    <svg className={`w-4 h-4 transition-transform duration-500 ${activeAccordion === section.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === section.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-16 space-y-4">
            <button 
              onClick={() => { onAddToCart(product); onClose(); }}
              className="w-full py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.5em] hover:bg-amber-100 transition-all flex items-center justify-center gap-4 group"
            >
              Add To Cart
              <span className="w-6 h-[1px] bg-black/20 group-hover:w-10 transition-all"></span>
            </button>
            <p className="text-[9px] text-center text-zinc-600 uppercase tracking-widest italic">In stock at Lagos Flagship</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
