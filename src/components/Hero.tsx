import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const calculateTimeLeft = () => {
    // Target date: April 24, 2026, 18:00:00 Lisbon Time (UTC+1)
    const targetDate = new Date('2026-04-24T18:00:00+01:00');
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <img 
          src="https://lh3.googleusercontent.com/d/1RTdRHOsWKZsJaji_g81puDUJib-hJKn-" 
          alt="Construction Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4 tracking-tight flex flex-col items-start">
            <div className="relative inline-flex whitespace-nowrap">
              <span>{t('hero.title1')}</span>
            </div>
            <span className="text-[#FFB800] mt-2">{t('hero.title2')}</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            {t('hero.subtitle1')}<br />
            {t('hero.subtitle2')}<br />
            <br />
            {t('hero.description')}
          </p>

          <div>
            <button 
              onClick={() => scrollTo('courses')}
              className="border border-white/20 text-white px-8 py-4 rounded-lg text-sm font-bold tracking-wider hover:bg-white/10 transition-colors"
            >
              {t('hero.exploreCourses')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar Countdown */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            <span className="text-white font-medium tracking-wide text-sm uppercase">
              {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 
                ? t('hero.registrationOpen') 
                : t('hero.registrationOpensIn')}
            </span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <span className="text-[#FFB800] text-2xl md:text-3xl font-black">{pad(timeLeft.days)}</span>
              <span className="text-gray-400 text-[10px] tracking-widest">{t('hero.days')}</span>
            </div>
            <span className="text-white/20 text-2xl font-light pb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[#FFB800] text-2xl md:text-3xl font-black">{pad(timeLeft.hours)}</span>
              <span className="text-gray-400 text-[10px] tracking-widest">{t('hero.hours')}</span>
            </div>
            <span className="text-white/20 text-2xl font-light pb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[#FFB800] text-2xl md:text-3xl font-black">{pad(timeLeft.minutes)}</span>
              <span className="text-gray-400 text-[10px] tracking-widest">{t('hero.mins')}</span>
            </div>
            <span className="text-white/20 text-2xl font-light pb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[#FFB800] text-2xl md:text-3xl font-black">{pad(timeLeft.seconds)}</span>
              <span className="text-gray-400 text-[10px] tracking-widest">{t('hero.secs')}</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
