import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: '1',
    titleId: 'Poster Event Musik',
    titleEn: 'Music Event Poster',
    category: 'graphicDesign',
    color: 'bg-neu-yellow',
  },
  {
    id: '2',
    titleId: 'Desain Feed Instagram',
    titleEn: 'Instagram Feed Design',
    category: 'graphicDesign',
    color: 'bg-neu-pink',
  },
  {
    id: '3',
    titleId: 'Makalah Ekonomi',
    titleEn: 'Economics Paper',
    category: 'academicHelp',
    color: 'bg-neu-cyan',
  },
  {
    id: '4',
    titleId: 'UI/UX Mobile App',
    titleEn: 'Mobile App UI/UX',
    category: 'graphicDesign',
    color: 'bg-neu-pink',
  },
  {
    id: '5',
    titleId: 'Presentasi Bisnis',
    titleEn: 'Business Presentation',
    category: 'academicHelp',
    color: 'bg-neu-yellow',
  },
  {
    id: '6',
    titleId: 'Brosur Produk',
    titleEn: 'Product Brochure',
    category: 'graphicDesign',
    color: 'bg-neu-cyan',
  },
];

export function Portfolio() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-neu-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neu-white mb-4">
            {t.portfolio.sectionTitle}
          </h2>
          <p className="font-sans text-lg md:text-xl text-neu-white/70 max-w-2xl mx-auto">
            {t.portfolio.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`${item.color} border-3 border-neu-white aspect-square p-6 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]`}
                style={{
                  boxShadow: '6px 6px 0px 0px #FFFFFF',
                }}
              >
                <div className="absolute inset-0 bg-neu-black/0 group-hover:bg-neu-black/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center p-4">
                    <ExternalLink className="w-8 h-8 text-neu-white mx-auto mb-3" />
                    <span className="font-sans font-bold text-neu-white uppercase tracking-wide text-sm">
                      {t.portfolio.viewProject}
                    </span>
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-neu-white border-3 border-neu-black flex items-center justify-center font-display font-bold text-xl">
                    {item.id}
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-neu-black mb-2">
                      {language === 'ID' ? item.titleId : item.titleEn}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-neu-white border-2 border-neu-black font-sans font-semibold text-xs uppercase tracking-wide">
                      {item.category === 'graphicDesign' 
                        ? t.services.graphicDesign.title 
                        : t.services.academicHelp.title}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
