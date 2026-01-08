
import React, { useState } from 'react';
import { sendPaymentNotification } from '../services/notificationService';
import { CartItem } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSuccess: () => void;
  cart?: CartItem[];
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, onSuccess, cart = [] }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'form' | 'notifying' | 'success'>('form');
  const [method, setMethod] = useState<'transfer' | 'card'>('transfer'); // Defaulted to transfer
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleCopy = (account: string) => {
    navigator.clipboard.writeText(account);
    setCopiedAccount(account);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    const ref = `OLA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderId(ref);

    // 1. Simulate payment/verification delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // 2. Switch to Notification phase
    setIsProcessing(false);
    setStep('notifying');

    // 3. Trigger Admin Notification (via the service)
    await sendPaymentNotification({
      customerEmail: email || 'concierge@guest.com',
      amount,
      paymentMethod: method,
      cartItems: cart,
      orderId: ref
    });

    // 4. Success step
    setStep('success');
    onSuccess();
  };

  const NIGERIAN_BANKS = [
    { name: 'Zenith Bank', account: '1012345678', label: 'OlaXlay Atelier Main' },
    { name: 'Guaranty Trust Bank', account: '0123456789', label: 'Couture Operations' },
    { name: 'Access Bank', account: '0012345678', label: 'Global Logistics' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-zinc-950 border border-white/10 p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh] custom-scrollbar">
        {step === 'form' ? (
          <div className="space-y-8 animate-fade-up">
            <div className="text-center space-y-3">
              <div className="logo-gold font-script text-4xl mb-2">Checkout</div>
              <h2 className="text-lg font-serif italic text-zinc-400">Secure Acquisition</h2>
              <div className="bg-white/5 py-4 border-y border-white/5">
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em]">Total Investment</p>
                <p className="text-2xl font-serif text-amber-200 mt-1">{formatNaira(amount)}</p>
              </div>
            </div>

            <div className="flex border-b border-white/5">
              <button 
                onClick={() => setMethod('transfer')}
                className={`flex-1 pb-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all ${method === 'transfer' ? 'text-amber-200 border-b border-amber-200' : 'text-zinc-600'}`}
              >
                Bank Transfer
              </button>
              <button 
                onClick={() => setMethod('card')}
                className={`flex-1 pb-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all ${method === 'card' ? 'text-amber-200 border-b border-amber-200' : 'text-zinc-600'}`}
              >
                Secure Card
              </button>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Your Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="concierge@luxury.com" 
                  className="w-full bg-black border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all uppercase tracking-widest" 
                />
              </div>

              {method === 'transfer' ? (
                <div className="space-y-4 animate-fade-up">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest text-center italic">Transfer to any of our secure Nigerian accounts</p>
                  
                  <div className="space-y-3">
                    {NIGERIAN_BANKS.map((bank) => (
                      <div key={bank.account} className="p-4 bg-black border border-white/5 hover:border-amber-200/30 transition-all group relative">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[10px] font-bold text-amber-100 uppercase tracking-widest">{bank.name}</span>
                          <span className="text-[7px] text-zinc-600 uppercase tracking-widest">{bank.label}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-mono text-white tracking-[0.2em]">{bank.account}</span>
                          <button 
                            type="button"
                            onClick={() => handleCopy(bank.account)}
                            className="text-[8px] uppercase tracking-widest px-3 py-1 border border-white/10 hover:border-amber-200 transition-all text-zinc-400 hover:text-amber-200"
                          >
                            {copiedAccount === bank.account ? 'COPIED' : 'COPY'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-amber-200/5 border border-amber-200/10 rounded-sm">
                    <p className="text-[9px] text-amber-200/60 leading-relaxed text-center uppercase tracking-widest">
                      Please use your <span className="text-white font-bold">Email</span> as the transfer narration for instant verification.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-up">
                  <div className="bg-black border border-white/5 p-4 space-y-4">
                    <input required={method === 'card'} type="text" placeholder="CARD NUMBER" className="w-full bg-transparent text-xs text-white focus:outline-none tracking-[0.3em]" />
                    <div className="flex gap-4">
                      <input required={method === 'card'} type="text" placeholder="EXPIRY (MM/YY)" className="flex-1 bg-transparent text-xs text-white focus:outline-none tracking-[0.2em]" />
                      <input required={method === 'card'} type="text" placeholder="CVV" className="w-20 bg-transparent text-xs text-white focus:outline-none tracking-[0.2em]" />
                    </div>
                  </div>
                </div>
              )}

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-amber-100 transition-all flex items-center justify-center disabled:opacity-50 group"
              >
                {isProcessing ? (
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                ) : (
                  <span className="group-hover:tracking-[0.7em] transition-all duration-500">
                    {method === 'transfer' ? 'I Have Made The Transfer' : 'Complete Acquisition'}
                  </span>
                )}
              </button>
            </form>
          </div>
        ) : step === 'notifying' ? (
          <div className="text-center py-20 space-y-10 animate-fade-up">
            <div className="relative inline-block">
               <div className="w-20 h-20 border-t-2 border-amber-200 rounded-full animate-spin opacity-40"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-amber-200/10 rounded-full flex items-center justify-center animate-pulse">
                     <svg className="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                     </svg>
                  </div>
               </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif italic text-white">Transmitting Manifest</h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] max-w-xs mx-auto leading-relaxed">
                Notifying the Lagos fulfillment team and preparing your digital registry entry...
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-12 animate-fade-up">
            <div className="w-24 h-24 bg-amber-200/20 rounded-full flex items-center justify-center mx-auto text-amber-200 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-serif italic text-white">Acquisition Logged</h2>
                <p className="text-[10px] text-amber-200/60 uppercase tracking-widest font-bold">Reference: {orderId}</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto font-light">
                Your order is currently being verified. Our atelier team has been notified and will begin preparation upon confirmation.
              </p>
            </div>
            <div className="pt-4">
              <button 
                onClick={onClose}
                className="px-12 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
