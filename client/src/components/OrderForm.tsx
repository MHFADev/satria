import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormSchema, type OrderFormData } from '@shared/schema';
import { Loader2, Send, CheckCircle, AlertCircle, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function OrderForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: '',
      contact: '',
      serviceCategory: undefined,
      subService: '',
      topic: '',
      deadline: '',
      budget: '',
    },
  });

  const selectedCategory = watch('serviceCategory');

  const getSubServiceOptions = () => {
    if (selectedCategory === 'graphicDesign') {
      return [
        { value: 'flyer', label: t.order.form.graphicDesignOptions.flyer },
        { value: 'poster', label: t.order.form.graphicDesignOptions.poster },
        { value: 'socialMedia', label: t.order.form.graphicDesignOptions.socialMedia },
        { value: 'uiux', label: t.order.form.graphicDesignOptions.uiux },
      ];
    }
    if (selectedCategory === 'academicHelp') {
      return [
        { value: 'essay', label: t.order.form.academicHelpOptions.essay },
        { value: 'ppt', label: t.order.form.academicHelpOptions.ppt },
        { value: 'resume', label: t.order.form.academicHelpOptions.resume },
      ];
    }
    return [];
  };

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        toast({
          title: t.order.success.title,
          description: t.order.success.message,
        });
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to submit order');
      }
    } catch (error) {
      toast({
        title: t.order.error.title,
        description: t.order.error.message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-20 md:py-28 bg-background relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="gradient-text">{t.order.sectionTitle}</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.order.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {t.order.success.title}
                    </h3>
                    <p className="font-sans text-muted-foreground text-lg">
                      {t.order.success.message}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.name}
                        </label>
                        <Input
                          {...register('name')}
                          placeholder={t.order.form.namePlaceholder}
                          className="bg-muted/30 border-border/50 focus:border-primary"
                          data-testid="input-name"
                        />
                        {errors.name && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.contact}
                        </label>
                        <Input
                          {...register('contact')}
                          placeholder={t.order.form.contactPlaceholder}
                          className="bg-muted/30 border-border/50 focus:border-primary"
                          data-testid="input-contact"
                        />
                        {errors.contact && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.contact.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.service}
                        </label>
                        <Select
                          value={selectedCategory}
                          onValueChange={(value) => {
                            setValue('serviceCategory', value as 'graphicDesign' | 'academicHelp');
                            setValue('subService', '');
                          }}
                        >
                          <SelectTrigger className="bg-muted/30 border-border/50 focus:border-primary" data-testid="select-service">
                            <SelectValue placeholder={t.order.form.servicePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="graphicDesign">{t.order.form.serviceOptions.graphicDesign}</SelectItem>
                            <SelectItem value="academicHelp">{t.order.form.serviceOptions.academicHelp}</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serviceCategory && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.serviceCategory.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.subService}
                        </label>
                        <Select
                          value={watch('subService')}
                          onValueChange={(value) => setValue('subService', value)}
                          disabled={!selectedCategory}
                        >
                          <SelectTrigger className="bg-muted/30 border-border/50 focus:border-primary disabled:opacity-50" data-testid="select-sub-service">
                            <SelectValue placeholder={t.order.form.subServicePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {getSubServiceOptions().map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.subService && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.subService.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedCategory && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className={`p-4 rounded-xl border ${
                            selectedCategory === 'academicHelp' 
                              ? 'bg-accent/10 border-accent/20' 
                              : 'bg-primary/10 border-primary/20'
                          }`}>
                            <p className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              {selectedCategory === 'academicHelp' 
                                ? t.order.form.academicHelperText 
                                : t.order.form.graphicHelperText}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      <label className="block font-sans font-medium text-sm text-foreground">
                        {t.order.form.topic}
                      </label>
                      <Textarea
                        {...register('topic')}
                        rows={4}
                        placeholder={t.order.form.topicPlaceholder}
                        className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                        data-testid="textarea-topic"
                      />
                      {errors.topic && (
                        <p className="font-sans text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.topic.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.deadline}
                        </label>
                        <Input
                          {...register('deadline')}
                          placeholder={t.order.form.deadlinePlaceholder}
                          className="bg-muted/30 border-border/50 focus:border-primary"
                          data-testid="input-deadline"
                        />
                        {errors.deadline && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.deadline.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block font-sans font-medium text-sm text-foreground">
                          {t.order.form.budget}
                        </label>
                        <Input
                          {...register('budget')}
                          placeholder={t.order.form.budgetPlaceholder}
                          className="bg-muted/30 border-border/50 focus:border-primary"
                          data-testid="input-budget"
                        />
                        {errors.budget && (
                          <p className="font-sans text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.budget.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full glow-primary text-lg"
                      data-testid="button-submit-order"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {t.order.form.submitting}
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          {t.order.form.submit}
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
