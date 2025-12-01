import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, Sparkles, Palette, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useLanguage();

  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 md:pt-24 pb-12 bg-neu-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-neu-yellow border-3 border-neu-black opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 -left-32 w-48 h-48 bg-neu-pink border-3 border-neu-black opacity-20"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-16 right-1/4 w-56 h-56 bg-neu-cyan border-3 border-neu-black opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[calc(100vh-8rem)]">
          <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-neu-cyan border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-xs md:text-sm tracking-wider">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neu-black leading-tight mb-6"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-neu-black/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToOrder}
                className="px-8 py-4 bg-neu-pink border-3 border-neu-black shadow-brutal font-display font-bold uppercase text-lg text-neu-black transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-brutal-active active:translate-x-[6px] active:translate-y-[6px]"
                data-testid="button-hero-cta"
              >
                {t.hero.cta}
              </button>

              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-neu-white border-3 border-neu-black shadow-brutal font-display font-bold uppercase text-lg text-neu-black transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-brutal-active active:translate-x-[6px] active:translate-y-[6px]"
                data-testid="button-hero-services"
              >
                {t.nav.services}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -left-4 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-neu-yellow border-3 border-neu-black shadow-brutal flex items-center justify-center"
              >
                <Palette className="w-10 h-10 md:w-14 md:h-14 text-neu-black" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-8 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-neu-pink border-3 border-neu-black shadow-brutal flex items-center justify-center"
              >
                <FileText className="w-10 h-10 md:w-14 md:h-14 text-neu-black" />
              </motion.div>

              <div className="relative bg-neu-cyan border-3 border-neu-black shadow-brutal-lg p-8 md:p-12">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl md:text-8xl font-bold text-neu-black mb-4">
                      C
                    </div>
                    <div className="font-sans font-bold uppercase tracking-widest text-neu-black text-sm md:text-base">
                      Creative Studio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-2 text-neu-black/60 hover:text-neu-black transition-colors"
            data-testid="button-scroll-down"
          >
            <span className="font-sans text-xs uppercase tracking-wider">{t.hero.scrollDown}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
