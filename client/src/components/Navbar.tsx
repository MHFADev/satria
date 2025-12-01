import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight flex items-center gap-2"
            data-testid="link-logo"
          >
            <span className="text-primary">{t.nav.logo}</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground"
              data-testid="link-services"
            >
              {t.nav.services}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-foreground"
              data-testid="link-portfolio"
            >
              {t.nav.portfolio}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('order')}
              className="text-muted-foreground hover:text-foreground"
              data-testid="link-contact"
            >
              {t.nav.contact}
            </Button>

            <div className="w-px h-6 bg-border mx-2" />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => scrollToSection('order')}
              className="ml-2 glow-primary"
              data-testid="button-order-nav"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t.nav.order}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('services')}
                className="w-full justify-start"
                data-testid="link-services-mobile"
              >
                {t.nav.services}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('portfolio')}
                className="w-full justify-start"
                data-testid="link-portfolio-mobile"
              >
                {t.nav.portfolio}
              </Button>
              <Button
                onClick={() => scrollToSection('order')}
                className="w-full mt-2"
                data-testid="button-order-mobile"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t.nav.order}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
