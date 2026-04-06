import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-32 bg-[#111315] relative border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
          {t('about.title1')}<span className="text-[#FFB800]">{t('about.title2')}</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto uppercase tracking-wide">
          {t('about.description')}
        </p>
        
        <p className="text-white text-xl font-bold mb-12 uppercase tracking-wide">
          {t('about.subtitle')}
        </p>

        <button 
          onClick={() => scrollTo('how-it-works')}
          className="inline-flex items-center gap-2 border border-[#FFB800]/30 text-[#FFB800] px-6 py-3 rounded-lg text-sm font-bold tracking-wider hover:bg-[#FFB800]/10 transition-colors"
        >
          {t('about.button')}
          <ChevronDown size={16} />
        </button>
      </motion.div>
    </section>
  );
}
