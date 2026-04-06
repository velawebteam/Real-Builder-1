import { Info, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [lang, setLang] = useState('EN');
  const location = useLocation();
  const navigate = useNavigate();

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
    setLang(prev => prev === 'EN' ? 'PT' : 'EN');
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
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">ABOUT</button>
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">HOW IT WORKS</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">PRICING</button>
          <button onClick={() => scrollTo('courses')} className="hover:text-white transition-colors">COURSES</button>
          <button onClick={() => scrollTo('professionals')} className="hover:text-white transition-colors">PROFESSIONALS</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-white transition-colors">PARTNERS</button>
          <button onClick={() => scrollTo('contact-form')} className="hover:text-white transition-colors">CONTACT</button>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-gray-300 transition-colors text-xs font-semibold">
            <Globe size={16} />
            <span className="hidden sm:inline">EN</span>
          </div>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openNotifyMe'))}
            className="text-white px-2 py-2 rounded-md text-xs font-bold tracking-wider hover:text-[#FFB800] transition-colors"
          >
            NOTIFY ME
          </button>
          
          <button 
            onClick={() => scrollTo('contact-form')}
            className="bg-[#FFB800] text-black px-4 md:px-6 py-2 rounded-md text-xs font-bold tracking-wider hover:bg-[#FFB800]/90 transition-colors"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </nav>
  );
}
