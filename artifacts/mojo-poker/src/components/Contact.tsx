import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative bg-card/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-gold rounded-full p-[1px]">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
              <Send className="w-8 h-8 text-primary ml-1" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <a
            href="https://t.me/mojopoker" 
            target="_blank" 
            rel="norenoopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-black font-bold tracking-wider rounded-sm text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            <Send className="w-5 h-5" />
            {t('contact.btn')}
          </a>

          <p className="mt-8 text-sm text-white/40 uppercase tracking-widest font-semibold">
            {t('contact.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
