import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Palette, FileText, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import type { Project } from '@shared/schema';

export function Portfolio() {
  const { language, t } = useLanguage();

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

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

  const getGradientByIndex = (index: number) => {
    return index % 2 === 0 
      ? 'from-primary/20 to-accent/10' 
      : 'from-accent/20 to-primary/10';
  };

  const getBorderByIndex = (index: number) => {
    return index % 2 === 0 
      ? 'border-primary/30' 
      : 'border-accent/30';
  };

  const getHoverBorderByIndex = (index: number) => {
    return index % 2 === 0 
      ? 'hover:border-primary/50' 
      : 'hover:border-accent/50';
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

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-card/50 rounded-md animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              {language === 'ID' ? 'Belum ada proyek yang ditampilkan' : 'No projects to display yet'}
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
                data-testid={`card-project-${project.id}`}
              >
                <Card
                  className={`aspect-square bg-gradient-to-br ${getGradientByIndex(index)} border ${getBorderByIndex(index)} ${getHoverBorderByIndex(index)} backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] relative`}
                >
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={language === 'ID' ? project.title : (project.titleEn || project.title)}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-testid={`img-project-${project.id}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  <div className="h-full p-6 flex flex-col justify-between relative z-10">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 bg-background/50 backdrop-blur-sm border ${getBorderByIndex(index)} rounded-xl flex items-center justify-center font-display font-bold text-xl text-foreground`}>
                        {index + 1}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 visibility-visible">
                        <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className={`w-10 h-10 mb-4 bg-background/50 backdrop-blur-sm border ${getBorderByIndex(index)} rounded-xl flex items-center justify-center`}>
                        {project.category === 'graphicDesign' ? (
                          <Palette className="w-5 h-5 text-primary" />
                        ) : (
                          <FileText className="w-5 h-5 text-accent" />
                        )}
                      </div>
                      <h3 
                        className="font-display text-xl md:text-2xl font-bold text-foreground mb-2"
                        data-testid={`text-project-title-${project.id}`}
                      >
                        {language === 'ID' ? project.title : (project.titleEn || project.title)}
                      </h3>
                      <span className={`inline-block px-3 py-1.5 bg-background/50 backdrop-blur-sm border ${getBorderByIndex(index)} rounded-full font-sans font-medium text-xs uppercase tracking-wide text-muted-foreground`}>
                        {project.category === 'graphicDesign' 
                          ? t.services.graphicDesign.title 
                          : t.services.academicHelp.title}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
