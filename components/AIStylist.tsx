
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getStylistResponse } from '../services/geminiService';

const STYLE_PROMPETS = [
  { label: "Gala Night", prompt: "I need a show-stopping gown for a high-society gala in Victoria Island." },
  { label: "Urban Edge", prompt: "I'm looking for high-end streetwear that captures the Lagos Mainland energy." },
  { label: "Wedding Guest", prompt: "What should I wear to a traditional wedding with a modern luxury twist?" },
  { label: "Power Dressing", prompt: "I need a look for a board meeting that screams Nigerian excellence." }
];

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Greetings, darling. I am Ola. Welcome to the inner sanctum of the House. How shall we refine your silhouette today?", 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (messageText: string) => {
    const textToSubmit = messageText || input;
    if (!textToSubmit.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: textToSubmit, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const stylistText = await getStylistResponse(textToSubmit, messages.map(m => ({ role: m.role, text: m.text })));
    
    setMessages(prev => [...prev, { role: 'model', text: stylistText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <section id="stylist" className="relative min-h-screen py-24 px-6 md:px-12 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          alt="Atelier Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Info & Prompts */}
        <div className="lg:col-span-5 space-y-10 animate-fade-up">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-amber-500/60">Digital Concierge</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1]">
              Consult <br /> 
              <span className="not-italic text-zinc-500 uppercase tracking-tighter">The Visionary</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Ola, our AI Head Stylist, understands the heritage of Nigerian textiles and the precision of global couture.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">Select an Archetype</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STYLE_PROMPETS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSend(item.prompt)}
                  disabled={isLoading}
                  className="px-6 py-4 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-amber-200/30 text-left transition-all group disabled:opacity-50"
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-amber-200 transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-700">
             <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-[10px] font-bold">AI</div>
             <span className="text-[8px] uppercase tracking-widest font-bold">Powered by Gemini 3 Flash Luxury Engine</span>
          </div>
        </div>

        {/* Right Column: Chat Interface */}
        <div className="lg:col-span-7 h-[700px] flex flex-col bg-zinc-950/40 backdrop-blur-3xl border border-white/10 shadow-2xl relative">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-700 to-amber-200 p-[1px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-serif italic text-amber-200">O</div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full"></div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white block">Ola</span>
                <span className="text-[8px] text-zinc-500 uppercase tracking-widest">Head Stylist • Online</span>
              </div>
            </div>
            <div className="logo-gold font-script text-2xl opacity-50">Olaxlay</div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
                <div className={`max-w-[85%] space-y-2`}>
                  <div className={`p-5 text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-white text-black font-medium selection:bg-black selection:text-white' 
                    : 'bg-zinc-900/80 border border-white/5 text-zinc-200 italic font-light'
                  }`}>
                    {m.text}
                  </div>
                  <p className={`text-[8px] uppercase tracking-widest text-zinc-600 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {m.role === 'user' ? 'Your Inquiry' : 'Ola\'s Direction'}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900/50 border border-white/5 p-5 flex gap-2 items-center">
                  <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold mr-2">Consulting Shop</span>
                  <span className="w-1 h-1 bg-amber-200 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-amber-200 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-amber-200 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-black/40 border-t border-white/5">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(''); }} 
              className="relative flex items-center"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your desired aesthetic..."
                className="w-full bg-transparent border-b border-white/10 py-4 pr-32 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-200/50 transition-all uppercase tracking-widest"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-0 px-8 py-3 bg-white text-black text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-amber-100 transition-all disabled:opacity-30 disabled:grayscale"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
