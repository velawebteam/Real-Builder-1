import { Info, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language.toUpperCase());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLang(i18n.language.toUpperCase());
  }, [i18n.language]);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: id === 'contact-form' ? 'center' : 'start'
        });
      }
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'EN' ? 'PT' : 'EN';
    i18n.changeLanguage(newLang.toLowerCase());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/d/1JcDlCqhCcECmb6aCnMHr_G_Qj-FeGBHn" 
            alt="Real Builder Logo" 
            className="h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300">
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">{t('nav.about')}</button>
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">{t('nav.howItWorks')}</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">{t('nav.pricing')}</button>
          <button onClick={() => scrollTo('courses')} className="hover:text-white transition-colors">{t('nav.courses')}</button>
          <button onClick={() => scrollTo('professionals')} className="hover:text-white transition-colors">{t('nav.professionals')}</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-white transition-colors">{t('nav.partners')}</button>
          <button onClick={() => scrollTo('contact-form')} className="hover:text-white transition-colors">{t('nav.contact')}</button>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={toggleLang} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer">
            <Globe size={16} />
            <span className="hidden sm:inline">{lang}</span>
          </button>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openNotifyMe'))}
            className="text-white px-2 py-2 rounded-md text-xs font-bold tracking-wider hover:text-[#FFB800] transition-colors"
          >
            {t('nav.notifyMe')}
          </button>
          
          <button 
            onClick={() => scrollTo('contact-form')}
            className="bg-[#FFB800] text-black px-4 md:px-6 py-2 rounded-md text-xs font-bold tracking-wider hover:bg-[#FFB800]/90 transition-colors"
          >
            {t('nav.getStarted')}
          </button>
        </div>
      </div>
    </nav>
  );
}
