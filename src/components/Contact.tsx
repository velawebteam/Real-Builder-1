import { Send, ChevronDown, Upload } from 'lucide-react';
import { useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const handlePlanSelection = (e: CustomEvent) => {
      setSelectedPlan(e.detail);
    };
    
    const handleVehicleSelection = (e: CustomEvent) => {
      setSelectedVehicle(e.detail);
    };
    
    window.addEventListener('planSelected', handlePlanSelection as EventListener);
    window.addEventListener('vehicleSelected', handleVehicleSelection as EventListener);
    
    return () => {
      window.removeEventListener('planSelected', handlePlanSelection as EventListener);
      window.removeEventListener('vehicleSelected', handleVehicleSelection as EventListener);
    };
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            {t('contact.title1')} <span className="text-[#FFB800]">{t('contact.title2')}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div id="contact-form" className="bg-[#111315] rounded-3xl p-8 md:p-12 border border-white/10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert(t('contact.successMessage')); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.firstName')}</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                  placeholder={t('contact.firstNamePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.lastName')}</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                  placeholder={t('contact.lastNamePlaceholder')}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.email')}</label>
              <input 
                type="email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.city')}</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                placeholder={t('contact.cityPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.interest')}</label>
              <div className="relative">
                <select 
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.interestPlaceholder')}</option>
                  <option value="course_vehicle" className="bg-[#111315] text-white">{t('contact.interests.courseVehicle')}</option>
                  <option value="course_only" className="bg-[#111315] text-white">{t('contact.interests.courseOnly')}</option>
                  <option value="doubts" className="bg-[#111315] text-white">{t('contact.interests.doubts')}</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {selectedPlan && (
              <div className={`grid grid-cols-1 ${selectedPlan === 'course_vehicle' ? 'md:grid-cols-2' : ''} gap-6`}>
                {(selectedPlan === 'course_vehicle' || selectedPlan === 'course_only') && (
                  <>
                    <div>
                      <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.coursesOfInterest')}</label>
                      <div className="relative">
                        <select 
                          required
                          defaultValue=""
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none"
                        >
                          <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.coursePlaceholder')}</option>
                          <option value="tiles" className="bg-[#111315] text-white">{t('courses.list.tiles')}</option>
                          <option value="plaster" className="bg-[#111315] text-white">{t('courses.list.plastering')}</option>
                          <option value="cleaning" className="bg-[#111315] text-white">{t('courses.list.cleaning')}</option>
                          <option value="servente" className="bg-[#111315] text-white">{t('courses.list.assistant')}</option>
                          <option value="masonry" className="bg-[#111315] text-white">{t('courses.list.masonry')}</option>
                          <option value="drywall" className="bg-[#111315] text-white">{t('courses.list.drywall')}</option>
                          <option value="framing" className="bg-[#111315] text-white">{t('courses.list.framing')}</option>
                          <option value="steel" className="bg-[#111315] text-white">{t('courses.list.steel')}</option>
                          <option value="logistics" className="bg-[#111315] text-white">{t('courses.list.logistics')}</option>
                          <option value="multiple" className="bg-[#111315] text-white">{t('contact.multipleCourses')}</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {selectedPlan === 'course_vehicle' && (
                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.vehicleOfInterest')}</label>
                        <div className="relative">
                          <select 
                            required
                            value={selectedVehicle}
                            onChange={(e) => setSelectedVehicle(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none"
                          >
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.vehiclePlaceholder')}</option>
                            <option value="mobile_toolbox" className="bg-[#111315] text-white">{t('contact.vehicles.toolbox')}</option>
                            <option value="electric_3_wheeler" className="bg-[#111315] text-white">{t('contact.vehicles.threewheeler')}</option>
                            <option value="tool_buggy" className="bg-[#111315] text-white">{t('contact.vehicles.buggy')}</option>
                            <option value="tool_van" className="bg-[#111315] text-white">{t('contact.vehicles.van')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    )}

                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-6 border-t border-white/5">
                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.readingSkills')}</label>
                        <div className="relative">
                          <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none">
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.levelPlaceholder')}</option>
                            <option value="basic" className="bg-[#111315] text-white">{t('contact.levels.basic')}</option>
                            <option value="intermediate" className="bg-[#111315] text-white">{t('contact.levels.intermediate')}</option>
                            <option value="fluent" className="bg-[#111315] text-white">{t('contact.levels.fluent')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.portugueseLevel')}</label>
                        <div className="relative">
                          <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none">
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.levelPlaceholder')}</option>
                            <option value="basic" className="bg-[#111315] text-white">{t('contact.levels.basic')}</option>
                            <option value="intermediate" className="bg-[#111315] text-white">{t('contact.levels.intermediate')}</option>
                            <option value="fluent" className="bg-[#111315] text-white">{t('contact.levels.fluent')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.englishLevel')}</label>
                        <div className="relative">
                          <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none">
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.levelPlaceholder')}</option>
                            <option value="basic" className="bg-[#111315] text-white">{t('contact.levels.basic')}</option>
                            <option value="intermediate" className="bg-[#111315] text-white">{t('contact.levels.intermediate')}</option>
                            <option value="fluent" className="bg-[#111315] text-white">{t('contact.levels.fluent')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.digitalSkills')}</label>
                        <div className="relative">
                          <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none">
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.levelPlaceholder')}</option>
                            <option value="basic" className="bg-[#111315] text-white">{t('contact.levels.basic')}</option>
                            <option value="intermediate" className="bg-[#111315] text-white">{t('contact.levels.intermediate')}</option>
                            <option value="fluent" className="bg-[#111315] text-white">{t('contact.levels.fluent')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.experience')}</label>
                        <div className="relative">
                          <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none">
                            <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.selectPlaceholder')}</option>
                            <option value="yes" className="bg-[#111315] text-white">{t('contact.yes')}</option>
                            <option value="no" className="bg-[#111315] text-white">{t('contact.no')}</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.upload')}</label>
                        <div className="relative">
                          <input 
                            type="file" 
                            accept=".png,.jpg,.jpeg,.pdf"
                            className="hidden" 
                            id="doc-upload"
                            onChange={handleFileChange}
                          />
                          <label 
                            htmlFor="doc-upload"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 flex items-center justify-between cursor-pointer hover:border-[#FFB800] transition-colors"
                          >
                            <span className="text-sm truncate pr-2">
                              {fileName || t('contact.uploadPlaceholder')}
                            </span>
                            <Upload size={16} className="shrink-0" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selectedPlan === 'doubts' && (
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.about')}</label>
                    <div className="relative">
                      <select 
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-[#111315] text-gray-400">{t('contact.topicPlaceholder')}</option>
                        <option value="general" className="bg-[#111315] text-white">{t('contact.topics.general')}</option>
                        <option value="courses" className="bg-[#111315] text-white">{t('contact.topics.courses')}</option>
                        <option value="vehicles" className="bg-[#111315] text-white">{t('contact.topics.vehicles')}</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">{t('contact.message')}</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors resize-none"
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#FFB800] text-black py-4 rounded-xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#FFB800]/90 transition-colors"
            >
              <Send size={18} />
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
