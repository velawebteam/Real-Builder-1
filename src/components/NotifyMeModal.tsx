import { X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const coursesList = [
  { id: 'tiles', name: 'courses.list.tiles' },
  { id: 'plastering', name: 'courses.list.plastering' },
  { id: 'cleaning', name: 'courses.list.cleaning' },
  { id: 'assistant', name: 'courses.list.assistant' },
  { id: 'masonry', name: 'courses.list.masonry' },
  { id: 'drywall', name: 'courses.list.drywall' },
  { id: 'framing', name: 'courses.list.framing' },
  { id: 'steel', name: 'courses.list.steel' },
  { id: 'logistics', name: 'courses.list.logistics' },
];

interface NotifyMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotifyMeModal({ isOpen, onClose }: NotifyMeModalProps) {
  const { t } = useTranslation();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCourseToggle = (courseId: string) => {
    setSelectedCourses(prev => {
      if (prev.includes(courseId)) {
        return prev.filter(id => id !== courseId);
      }
      if (prev.length < 2) {
        return [...prev, courseId];
      }
      return prev;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('coursesOfInterest', selectedCourses.join(', '));
    
    try {
      await fetch('https://formspree.io/f/mbdppqob', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedCourses([]);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('notify.errorMessage'));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#15181b] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 my-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-[#1a1d21] p-2 rounded-full"
            >
              <X size={20} />
            </button>
            
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#FFB800]/20">
                    <Bell className="text-[#FFB800]" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">
                    {t('notify.title')}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t('notify.subtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.firstName')}</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm"
                        placeholder={t('notify.firstNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.lastName')}</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm"
                        placeholder={t('notify.lastNamePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.phone')}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm"
                        placeholder="+351 900 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.city')}</label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm"
                        placeholder={t('notify.cityPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{t('notify.experience')}</label>
                    <select 
                      name="experience"
                      required
                      className="w-full bg-[#1a1d21] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors text-sm appearance-none"
                    >
                      <option value="" disabled selected>{t('notify.experiencePlaceholder')}</option>
                      <option value="less_than_1">{t('notify.experienceOptions.lessThan1')}</option>
                      <option value="1_to_2">{t('notify.experienceOptions.1to2')}</option>
                      <option value="3_to_5">{t('notify.experienceOptions.3to5')}</option>
                      <option value="5_plus">{t('notify.experienceOptions.5plus')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">
                      {t('notify.coursesOfInterest')}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {coursesList.map(course => {
                        const isSelected = selectedCourses.includes(course.id);
                        const isDisabled = !isSelected && selectedCourses.length >= 2;
                        
                        return (
                          <button
                            key={course.id}
                            type="button"
                            onClick={() => handleCourseToggle(course.id)}
                            disabled={isDisabled}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                              isSelected 
                                ? 'bg-[#FFB800] border-[#FFB800] text-black font-bold' 
                                : isDisabled
                                  ? 'bg-white/5 border-white/5 text-gray-600 cursor-not-allowed'
                                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-[#FFB800]/50'
                            }`}
                          >
                            {t(course.name)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#FFB800] text-black font-black py-4 rounded-xl tracking-widest hover:bg-[#FFB800]/90 transition-colors mt-6"
                  >
                    {t('notify.submit')}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
                  {t('notify.successTitle')}
                </h3>
                <p className="text-gray-400">
                  {t('notify.successMessage')}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
