import { UserPlus, BookOpen, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import CertifiedBadge from './CertifiedBadge';

export default function HowItWorks() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="how-it-works" className="py-32 bg-[#15181b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {t('howItWorks.title1')} <span className="text-[#FFB800]">{t('howItWorks.title2')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-[48px] left-[10%] w-[80%] h-[1px] bg-[#FFB800]/30 hidden md:block origin-left z-0"
          ></motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
          >
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="w-24 h-24 rounded-full bg-[#111315] border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] transition-colors duration-300">
                  <UserPlus size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FFB800] text-black flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                  01
                </div>
              </div>
              <h3 className="text-[#FFB800] font-bold text-xl mb-3 transition-colors duration-300">{t('howItWorks.step1Title')}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm text-center px-2 pb-4">
                    {t('howItWorks.step1Desc')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="w-24 h-24 rounded-full bg-[#111315] border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] transition-colors duration-300">
                  <BookOpen size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FFB800] text-black flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                  02
                </div>
              </div>
              <h3 className="text-[#FFB800] font-bold text-xl mb-3 transition-colors duration-300">{t('howItWorks.step2Title')}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm text-center px-2 pb-4">
                    {t('howItWorks.step2Desc')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="w-24 h-24 rounded-full bg-[#111315] border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] transition-colors duration-300">
                  <Hammer size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FFB800] text-black flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                  03
                </div>
              </div>
              <h3 className="text-[#FFB800] font-bold text-xl mb-3 transition-colors duration-300">{t('howItWorks.step3Title')}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm text-center px-2 pb-4">
                    {t('howItWorks.step3Desc')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <CertifiedBadge className="w-24 h-24 drop-shadow-[0_0_15px_rgba(255,184,0,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,184,0,0.5)] transition-all duration-300" />
              </div>
              <h3 className="text-[#FFB800] font-bold text-xl uppercase tracking-wider mb-3">{t('howItWorks.step4Title')}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm text-center px-2 pb-4">
                    {t('howItWorks.step4Desc')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB800] text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap z-20 shadow-[0_0_20px_rgba(255,184,0,0.5)]">
                  {t('howItWorks.step5Badge')}
                </div>
                <div className="w-24 h-24 rounded-full border-2 border-[#FFB800] overflow-hidden relative z-10 group-hover:shadow-[0_0_30px_rgba(255,184,0,0.4)] transition-shadow duration-300">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1iefT26tARQu5H7tEhmmHCtvf8b8RAlsN" 
                    alt="Vehicle" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="text-[#FFB800] font-bold text-xl uppercase tracking-wider text-center mb-3">{t('howItWorks.step5Title')}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm text-center px-2 pb-4">
                    {t('howItWorks.step5Desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
