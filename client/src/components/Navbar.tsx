import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neu-yellow border-b-3 border-neu-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-2xl md:text-3xl font-bold text-neu-black tracking-tight"
            data-testid="link-logo"
          >
            {t.nav.logo}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('services')}
              className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm transition-all duration-200 border-b-2 border-transparent hover:border-neu-black"
              data-testid="link-services"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm transition-all duration-200 border-b-2 border-transparent hover:border-neu-black"
              data-testid="link-portfolio"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('order')}
              className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm transition-all duration-200 border-b-2 border-transparent hover:border-neu-black"
              data-testid="link-contact"
            >
              {t.nav.contact}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-neu-white border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-sm transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              {language}
            </button>

            <button
              onClick={() => scrollToSection('order')}
              className="px-6 py-2 bg-neu-pink border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-sm text-neu-black transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]"
              data-testid="button-order-nav"
            >
              {t.nav.order}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 bg-neu-white border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-xs"
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="w-3 h-3" />
              {language}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-neu-white border-3 border-neu-black shadow-brutal-sm"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neu-yellow border-t-3 border-neu-black"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('services')}
                className="w-full py-3 bg-neu-white border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-sm text-center"
                data-testid="link-services-mobile"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="w-full py-3 bg-neu-white border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-sm text-center"
                data-testid="link-portfolio-mobile"
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('order')}
                className="w-full py-3 bg-neu-pink border-3 border-neu-black shadow-brutal-sm font-sans font-bold uppercase text-sm text-center"
                data-testid="button-order-mobile"
              >
                {t.nav.order}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
