import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, FileText, Image, Layout, PenTool, FileSpreadsheet, BookOpen, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const graphicIcons = [
  { icon: Image, label: 'Flyer' },
  { icon: Layout, label: 'Poster' },
  { icon: PenTool, label: 'Social Media' },
  { icon: Palette, label: 'UI/UX' },
];

const academicIcons = [
  { icon: BookOpen, label: 'Essay' },
  { icon: FileSpreadsheet, label: 'PPT' },
  { icon: FileText, label: 'Resume' },
];

export function Services() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-neu-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neu-black mb-4">
            {t.services.sectionTitle}
          </h2>
          <p className="font-sans text-lg md:text-xl text-neu-black/70 max-w-2xl mx-auto">
            {t.services.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-neu-yellow border-3 border-neu-black shadow-brutal-lg p-8 md:p-10 transition-all duration-200 hover:shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-neu-white border-3 border-neu-black shadow-brutal-sm flex items-center justify-center">
                <Palette className="w-8 h-8 text-neu-black" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-neu-black">
                {t.services.graphicDesign.title}
              </h3>
            </div>

            <p className="font-sans text-neu-black/80 mb-6 text-lg">
              {t.services.graphicDesign.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {t.services.graphicDesign.items.map((item, index) => {
                const IconComponent = graphicIcons[index]?.icon || Image;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neu-white border-3 border-neu-black shadow-brutal-sm"
                  >
                    <IconComponent className="w-5 h-5 text-neu-black flex-shrink-0" />
                    <span className="font-sans font-semibold text-sm text-neu-black">{item}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-neu-pink border-3 border-neu-black shadow-brutal-lg p-8 md:p-10 transition-all duration-200 hover:shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-neu-white border-3 border-neu-black shadow-brutal-sm flex items-center justify-center">
                <FileText className="w-8 h-8 text-neu-black" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-neu-black">
                {t.services.academicHelp.title}
              </h3>
            </div>

            <p className="font-sans text-neu-black/80 mb-6 text-lg">
              {t.services.academicHelp.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {t.services.academicHelp.items.map((item, index) => {
                const IconComponent = academicIcons[index]?.icon || FileText;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neu-white border-3 border-neu-black shadow-brutal-sm"
                  >
                    <IconComponent className="w-5 h-5 text-neu-black flex-shrink-0" />
                    <span className="font-sans font-semibold text-sm text-neu-black">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-start gap-3 p-4 bg-neu-white/50 border-3 border-neu-black">
              <AlertCircle className="w-5 h-5 text-neu-black flex-shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-neu-black font-medium">
                {t.services.academicHelp.note}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-neu-cyan border-3 border-neu-black shadow-brutal p-6 text-center"
          >
            <div className="font-display text-4xl md:text-5xl font-bold text-neu-black mb-2">
              50+
            </div>
            <div className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm">
              Projects Done
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-neu-yellow border-3 border-neu-black shadow-brutal p-6 text-center"
          >
            <div className="font-display text-4xl md:text-5xl font-bold text-neu-black mb-2">
              30+
            </div>
            <div className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm">
              Happy Clients
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-neu-pink border-3 border-neu-black shadow-brutal p-6 text-center"
          >
            <div className="font-display text-4xl md:text-5xl font-bold text-neu-black mb-2">
              24h
            </div>
            <div className="font-sans font-semibold text-neu-black uppercase tracking-wide text-sm">
              Fast Response
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
