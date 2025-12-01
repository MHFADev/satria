import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, Sparkles, Palette, FileText, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
      className="min-h-screen pt-20 md:pt-24 pb-12 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              <span className="gradient-text">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToOrder}
                className="glow-primary text-lg px-8"
                data-testid="button-hero-cta"
              >
                <Zap className="w-5 h-5 mr-2" />
                {t.hero.cta}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="text-lg px-8"
                data-testid="button-hero-services"
              >
                {t.nav.services}
              </Button>
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
                className="absolute -top-8 -left-4 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <Palette className="w-10 h-10 md:w-14 md:h-14 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-8 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <FileText className="w-10 h-10 md:w-14 md:h-14 text-accent" />
              </motion.div>

              <div className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                <div className="aspect-square flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="font-display text-6xl md:text-8xl font-bold gradient-text mb-4">
                      C
                    </div>
                    <div className="font-sans font-semibold uppercase tracking-widest text-muted-foreground text-sm md:text-base">
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
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
