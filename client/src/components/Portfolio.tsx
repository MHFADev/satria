import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Palette, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const portfolioItems = [
  {
    id: '1',
    titleId: 'Poster Event Musik',
    titleEn: 'Music Event Poster',
    category: 'graphicDesign',
    gradient: 'from-primary/20 to-accent/10',
    borderColor: 'border-primary/30',
    hoverBorder: 'hover:border-primary/50',
  },
  {
    id: '2',
    titleId: 'Desain Feed Instagram',
    titleEn: 'Instagram Feed Design',
    category: 'graphicDesign',
    gradient: 'from-accent/20 to-primary/10',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/50',
  },
  {
    id: '3',
    titleId: 'Makalah Ekonomi',
    titleEn: 'Economics Paper',
    category: 'academicHelp',
    gradient: 'from-primary/20 to-accent/10',
    borderColor: 'border-primary/30',
    hoverBorder: 'hover:border-primary/50',
  },
  {
    id: '4',
    titleId: 'UI/UX Mobile App',
    titleEn: 'Mobile App UI/UX',
    category: 'graphicDesign',
    gradient: 'from-accent/20 to-primary/10',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/50',
  },
  {
    id: '5',
    titleId: 'Presentasi Bisnis',
    titleEn: 'Business Presentation',
    category: 'academicHelp',
    gradient: 'from-primary/20 to-accent/10',
    borderColor: 'border-primary/30',
    hoverBorder: 'hover:border-primary/50',
  },
  {
    id: '6',
    titleId: 'Brosur Produk',
    titleEn: 'Product Brochure',
    category: 'graphicDesign',
    gradient: 'from-accent/20 to-primary/10',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/50',
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
    <section id="portfolio" className="py-20 md:py-28 bg-card/30 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="gradient-text">{t.portfolio.sectionTitle}</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
              className="group"
            >
              <Card
                className={`aspect-square bg-gradient-to-br ${item.gradient} border ${item.borderColor} ${item.hoverBorder} backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="h-full p-6 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className={`w-12 h-12 bg-background/50 backdrop-blur-sm border ${item.borderColor} rounded-xl flex items-center justify-center font-display font-bold text-xl text-foreground`}>
                      {item.id}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 mb-4 bg-background/50 backdrop-blur-sm border ${item.borderColor} rounded-xl flex items-center justify-center`}>
                      {item.category === 'graphicDesign' ? (
                        <Palette className="w-5 h-5 text-primary" />
                      ) : (
                        <FileText className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      {language === 'ID' ? item.titleId : item.titleEn}
                    </h3>
                    <span className={`inline-block px-3 py-1.5 bg-background/50 backdrop-blur-sm border ${item.borderColor} rounded-full font-sans font-medium text-xs uppercase tracking-wide text-muted-foreground`}>
                      {item.category === 'graphicDesign' 
                        ? t.services.graphicDesign.title 
                        : t.services.academicHelp.title}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
