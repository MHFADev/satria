import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Twitter, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: '#', testId: 'link-social-instagram' },
    { icon: Twitter, href: '#', testId: 'link-social-twitter' },
    { icon: MessageCircle, href: '#', testId: 'link-social-whatsapp' },
    { icon: Mail, href: '#', testId: 'link-social-email' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <button
              onClick={scrollToTop}
              className="font-display text-3xl md:text-4xl font-bold mb-4 block"
              data-testid="link-footer-logo"
            >
              <span className="gradient-text">{t.nav.logo}</span>
            </button>
            <p className="font-sans text-muted-foreground text-lg">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-4">
              {t.footer.social}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-muted/30 border border-border/50 rounded-xl flex items-center justify-center transition-colors hover:bg-muted/50 hover:border-primary/30"
                  data-testid={social.testId}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start px-0 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="link-footer-services"
              >
                {t.nav.services}
              </Button>
              <Button
                variant="ghost"
                className="justify-start px-0 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="link-footer-portfolio"
              >
                {t.nav.portfolio}
              </Button>
              <Button
                variant="ghost"
                className="justify-start px-0 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  const el = document.getElementById('order');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="link-footer-order"
              >
                {t.nav.order}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="font-sans text-muted-foreground text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
