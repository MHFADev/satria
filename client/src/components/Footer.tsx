import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Twitter, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neu-yellow border-t-3 border-neu-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <button
              onClick={scrollToTop}
              className="font-display text-3xl md:text-4xl font-bold text-neu-black mb-4 block"
              data-testid="link-footer-logo"
            >
              {t.nav.logo}
            </button>
            <p className="font-sans text-neu-black/80 text-lg">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-neu-black mb-4 uppercase">
              {t.footer.social}
            </h4>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-neu-white border-3 border-neu-black shadow-brutal-sm flex items-center justify-center transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px]"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5 text-neu-black" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-neu-white border-3 border-neu-black shadow-brutal-sm flex items-center justify-center transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px]"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5 text-neu-black" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-neu-pink border-3 border-neu-black shadow-brutal-sm flex items-center justify-center transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px]"
                data-testid="link-social-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-neu-black" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-neu-cyan border-3 border-neu-black shadow-brutal-sm flex items-center justify-center transition-all duration-200 hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px]"
                data-testid="link-social-email"
              >
                <Mail className="w-5 h-5 text-neu-black" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-neu-black mb-4 uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-sans font-semibold text-neu-black hover:underline text-left"
                data-testid="link-footer-services"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-sans font-semibold text-neu-black hover:underline text-left"
                data-testid="link-footer-portfolio"
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('order');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-sans font-semibold text-neu-black hover:underline text-left"
                data-testid="link-footer-order"
              >
                {t.nav.order}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-3 border-neu-black">
          <p className="font-sans text-neu-black text-center font-medium">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
