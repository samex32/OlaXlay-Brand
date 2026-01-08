
import React, { useState } from 'react';
import { User } from '../types';
import { supabase } from '../services/supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Log In
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;

        if (data.user) {
          onAuthSuccess({
            name: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'Client',
            email: data.user.email || '',
            isLoggedIn: true
          });
          onClose();
        }
      } else {
        // Sign Up
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            },
          },
        });

        if (signUpError) throw signUpError;

        if (data.user) {
          // If auto-confirm is enabled, it logs them in. If not, they see this.
          const isSessionPresent = !!data.session;
          
          onAuthSuccess({
            name: formData.name,
            email: formData.email,
            isLoggedIn: isSessionPresent
          });

          if (!isSessionPresent) {
            alert("Invitation sent! Please verify your email address to enter the atelier.");
          }
          onClose();
        }
      }
    } catch (err: any) {
      console.error("Auth Error:", err);
      setError(err.message || 'An unexpected error occurred. Please verify your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-fade-up">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand Identity */}
        <div className="text-center space-y-4 mb-10">
          <div className="logo-gold font-luxury text-3xl font-bold tracking-widest uppercase">Olaxlay</div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">
            {isLogin ? 'Private Client Access' : 'Create Your Profile'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Full Name</label>
              <input 
                required 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="JEAN DOE" 
                className="w-full bg-black border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest" 
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Email Address</label>
            <input 
              required 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="CONCIERGE@LUXURY.COM" 
              className="w-full bg-black border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Password</label>
            <input 
              required 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••" 
              className="w-full bg-black border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all" 
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/20 text-red-400 text-[10px] uppercase tracking-widest text-center animate-fade-up">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-100 transition-all flex items-center justify-center group disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex gap-1.5">
                <span className="w-1 h-1 bg-black rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            ) : (
              <span className="group-hover:tracking-[0.6em] transition-all duration-500">
                {isLogin ? 'Enter Atelier' : 'Join The Vanguard'}
              </span>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
          <button 
            type="button"
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-amber-200 transition-colors"
          >
            {isLogin ? "Become a Member — Register" : "Existing Member? Sign In"}
          </button>
        </div>

        {/* Footer Accent */}
        <div className="mt-12 flex items-center justify-center gap-4 opacity-10">
          <div className="h-px w-8 bg-white"></div>
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold whitespace-nowrap">Nigeria • Paris • Global</span>
          <div className="h-px w-8 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
