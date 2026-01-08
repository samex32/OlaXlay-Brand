
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { CollectionCategory, Product } from '../types';

interface CollectionProps {
  onAddToCart: (product: Product) => void;
  onShowDetail: (product: Product) => void;
}

const Collection: React.FC<CollectionProps> = ({ onAddToCart, onShowDetail }) => {
  const [activeCategory, setActiveCategory] = useState<CollectionCategory>(CollectionCategory.ALL);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    setIsAnimate(false);
    const timer = setTimeout(() => setIsAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === CollectionCategory.ALL || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency', currency: 'NGN', minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="collection" className="py-32 px-6 md:px-12 bg-black text-white relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-16">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-6xl md:text-8xl font-serif italic leading-[1.1]">The <span className="text-zinc-500">Shop.</span></h2>
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-[10px] font-bold uppercase tracking-[0.4em]">
              {Object.values(CollectionCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-2 border-b transition-all ${activeCategory === cat ? 'text-amber-200 border-amber-200' : 'text-zinc-600 border-transparent hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search our atelier..."
            className="bg-transparent border-b border-white/10 py-4 w-full lg:w-80 text-[10px] uppercase tracking-widest focus:outline-none focus:border-amber-200"
          />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 transition-all duration-700 ${isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => onShowDetail(product)}>
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                <img src={product.images[0]} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white border border-white/20 px-6 py-3 backdrop-blur-md">Full Details</span>
                </div>
              </div>
              <div className="mt-8 space-y-2 text-center">
                <p className="text-[8px] uppercase tracking-[0.4em] text-amber-500/60 font-bold">{product.category}</p>
                <h3 className="text-2xl font-serif italic text-white group-hover:text-amber-200 transition-colors">{product.name}</h3>
                <p className="text-lg font-serif text-zinc-400">{formatNaira(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
