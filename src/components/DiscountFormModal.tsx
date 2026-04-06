import { X as CloseIcon, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

interface DiscountFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSubmitted: boolean;
  onSubmit: () => void;
}

export default function DiscountFormModal({ isOpen, onClose, isSubmitted, onSubmit }: DiscountFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      await fetch('https://formspree.io/f/mreoorpj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      setIsSubmitting(false);
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#111315] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1a1d21]">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  {isSubmitted ? 'Discount Secured' : 'Claim 100% Discount'}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {isSubmitted ? 'Your spot is reserved.' : 'Fill out the form below to secure your spot.'}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <CloseIcon size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Discount Claimed!</h4>
                  <p className="text-gray-400 mb-8">
                    Thank you. Our team will contact you shortly to apply your 100% discount to your chosen course.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full bg-white/10 text-white font-bold py-4 rounded-xl text-sm tracking-widest uppercase hover:bg-white/20 transition-colors"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        required
                        className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        required
                        className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                      placeholder="+351 900 000 000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-xs font-bold text-gray-400 uppercase tracking-widest">City</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        required
                        className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                        placeholder="Your city"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="district" className="text-xs font-bold text-gray-400 uppercase tracking-widest">District</label>
                      <input 
                        type="text" 
                        id="district" 
                        name="district"
                        required
                        className="w-full bg-[#1a1d21] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                        placeholder="Your district"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFB800] text-black font-bold py-4 rounded-xl text-sm tracking-widest uppercase hover:bg-white transition-colors mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
