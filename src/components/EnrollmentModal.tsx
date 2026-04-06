import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Upload, HelpCircle, Clock, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('course', selectedCourse);
    
    try {
      await fetch('https://formspree.io/f/xwvwwaoa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#15181b] rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header (Fixed) */}
        <div className="p-6 border-b border-white/10 flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-2xl font-bold text-white mb-2">{t('enrollment.title')}</h2>
          <p className="text-gray-400 text-sm mb-6">{t('enrollment.subtitle')}</p>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-xs font-semibold">{t('enrollment.formCompletion')}</span>
            <span className="text-[#FFB800] text-xs font-bold">0%</span>
          </div>
          <div className="w-full h-1.5 bg-[#111315] rounded-full overflow-hidden">
            <div className="h-full bg-[#FFB800] w-0 rounded-full"></div>
          </div>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent space-y-8">
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-green-500" size={40} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
                {t('enrollment.success.title')}
              </h3>
              <p className="text-gray-400">
                {t('enrollment.success.message')}
              </p>
            </div>
          ) : (
            <>
              {/* PERSONAL INFORMATION */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">{t('enrollment.personalInfo.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.personalInfo.firstName')} *</label>
                    <input type="text" name="firstName" required placeholder={t('enrollment.personalInfo.firstNamePlaceholder')} className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.personalInfo.lastName')} *</label>
                    <input type="text" name="lastName" required placeholder={t('enrollment.personalInfo.lastNamePlaceholder')} className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.personalInfo.email')} *</label>
                    <input type="email" name="email" required placeholder={t('enrollment.personalInfo.emailPlaceholder')} className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.personalInfo.phone')} *</label>
                    <input type="tel" name="phone" required placeholder={t('enrollment.personalInfo.phonePlaceholder')} className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.personalInfo.city')} *</label>
                    <input type="text" name="city" required placeholder={t('enrollment.personalInfo.cityPlaceholder')} className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm" />
                  </div>
                </div>
              </section>

              {/* SELECT YOUR COURSE */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2">{t('enrollment.course.title')} *</h3>
                <p className="text-gray-400 text-xs mb-4">{t('enrollment.course.subtitle')}</p>
                
                <div className="space-y-3">
                  {/* Course Option 1 */}
                  <div onClick={() => setSelectedCourse('pladur')} className={`bg-[#111315] border ${selectedCourse === 'pladur' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t('enrollment.course.pladur.title')}</h4>
                      <p className="text-gray-400 text-xs mb-2">{t('enrollment.course.pladur.subtitle')}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">{t('enrollment.course.spotsLeft', { count: 15 })}</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Option 2 */}
                  <div onClick={() => setSelectedCourse('tiles')} className={`bg-[#111315] border ${selectedCourse === 'tiles' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t('enrollment.course.tiles.title')}</h4>
                      <p className="text-gray-400 text-xs mb-2">{t('enrollment.course.tiles.subtitle')}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">{t('enrollment.course.spotsLeft', { count: 15 })}</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Option 3 */}
                  <div onClick={() => setSelectedCourse('heating')} className={`bg-[#111315] border ${selectedCourse === 'heating' ? 'border-[#FFB800]' : 'border-white/10'} rounded-xl p-4 flex gap-4 cursor-pointer hover:border-[#FFB800]/50 transition-colors group`}>
                    <div className="w-10 h-10 rounded-lg bg-[#1a1d21] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFB800]/30">
                      <GraduationCap size={20} className="text-[#FFB800]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t('enrollment.course.heating.title')}</h4>
                      <p className="text-gray-400 text-xs mb-2">{t('enrollment.course.heating.subtitle')}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#FFB800] font-bold">{t('enrollment.course.spotsLeft', { count: 15 })}</span>
                        <span className="text-gray-500">• PT/EN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SKILLS ASSESSMENT */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">{t('enrollment.skills.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.skills.reading')} *</label>
                    <select name="readingSkills" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                      <option value="" disabled>{t('enrollment.skills.readingPlaceholder')}</option>
                      <option value="basic">{t('enrollment.skills.levels.basic')}</option>
                      <option value="intermediate">{t('enrollment.skills.levels.intermediate')}</option>
                      <option value="advanced">{t('enrollment.skills.levels.advanced')}</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.skills.portuguese')} *</label>
                      <select name="portugueseLevel" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                        <option value="" disabled>{t('enrollment.skills.languagePlaceholder')}</option>
                        <option value="none">{t('enrollment.skills.levels.none')}</option>
                        <option value="basic">{t('enrollment.skills.levels.basicLang')}</option>
                        <option value="intermediate">{t('enrollment.skills.levels.intermediateLang')}</option>
                        <option value="fluent">{t('enrollment.skills.levels.fluent')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.skills.english')} *</label>
                      <select name="englishLevel" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                        <option value="" disabled>{t('enrollment.skills.languagePlaceholder')}</option>
                        <option value="none">{t('enrollment.skills.levels.none')}</option>
                        <option value="basic">{t('enrollment.skills.levels.basicLang')}</option>
                        <option value="intermediate">{t('enrollment.skills.levels.intermediateLang')}</option>
                        <option value="fluent">{t('enrollment.skills.levels.fluent')}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.skills.digital')} *</label>
                    <select name="digitalSkills" required defaultValue="" className="w-full bg-[#111315] border border-white/10 rounded-lg p-3 text-white focus:border-[#FFB800] outline-none transition-colors text-sm appearance-none cursor-pointer">
                      <option value="" disabled>{t('enrollment.skills.digitalPlaceholder')}</option>
                      <option value="basic">{t('enrollment.skills.levels.digitalBasic')}</option>
                      <option value="intermediate">{t('enrollment.skills.levels.digitalIntermediate')}</option>
                      <option value="advanced">{t('enrollment.skills.levels.digitalAdvanced')}</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* CONSTRUCTION EXPERIENCE */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">{t('enrollment.experience.title')}</h3>
                
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="experience" className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">{t('enrollment.experience.hasExperience')}</span>
                      <span className="text-gray-400 text-xs">{t('enrollment.experience.experienceDesc')}</span>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">{t('enrollment.experience.upload')} ({t('enrollment.experience.optional')})</label>
                  <div className="relative">
                    <input type="file" name="documentation" accept=".pdf,.doc,.docx,.jpg,.png" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="border border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#FFB800]/50 transition-colors cursor-pointer bg-[#111315]/50">
                      <Upload size={20} className="text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-sm">{t('enrollment.experience.uploadDesc')}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[10px] mt-2">{t('enrollment.experience.uploadFormats')}</p>
                </div>
              </section>

              {/* NEED ASSISTANCE? */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle size={16} className="text-[#FFB800]" />
                  <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase">{t('enrollment.assistance.title')}</h3>
                </div>
                
                <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="assistance" className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">{t('enrollment.assistance.needHelp')}</span>
                      <span className="text-gray-400 text-xs leading-relaxed block">{t('enrollment.assistance.helpDesc')}</span>
                    </div>
                  </label>
                </div>
              </section>

              {/* COMMITMENT */}
              <section>
                <h3 className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">{t('enrollment.commitment.title')}</h3>
                
                <div className="bg-[#111315] border border-white/10 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="mindset" required className="accent-[#FFB800] w-5 h-5 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">{t('enrollment.commitment.mindset')} *</span>
                      <span className="text-gray-400 text-xs leading-relaxed block">{t('enrollment.commitment.mindsetDesc')}</span>
                    </div>
                  </label>
                </div>
              </section>

              {/* Closed Warning */}
              <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-5">
                <div className="flex items-center gap-2 text-[#FFB800] font-bold mb-2">
                  <Clock size={18} />
                  {t('enrollment.closed.title')}
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {t('enrollment.closed.message')}
                </p>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#FFB800] to-[#FF9500] text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  <Mail size={16} />
                  {isSubmitting ? t('enrollment.closed.processing') : t('enrollment.closed.button')}
                </button>
              </div>
            </>
          )}
        </form>

        {/* Footer (Fixed) */}
        <div className="p-4 border-t border-white/10 bg-[#111315] flex-shrink-0">
          <button 
            onClick={onClose}
            className="w-full border border-white/20 text-[#FFB800] font-bold py-3 rounded-lg hover:bg-white/5 transition-colors text-sm"
          >
            {t('enrollment.cancel')}
          </button>
        </div>

      </div>
    </div>
  );
}
