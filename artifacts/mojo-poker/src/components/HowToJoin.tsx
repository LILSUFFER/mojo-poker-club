import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Search, MessageCircle } from 'lucide-react';

export function HowToJoin() {
  const { t } = useLanguage();

  const steps = [
    { icon: <Download className="w-6 h-6" />, title: t('howToJoin.step1.title'), desc: t('howToJoin.step1.desc') },
    { icon: <Search className="w-6 h-6" />, title: t('howToJoin.step2.title'), desc: t('howToJoin.step2.desc') },
    { icon: <MessageCircle className="w-6 h-6" />, title: t('howToJoin.step3.title'), desc: t('howToJoin.step3.desc') },
  ];

  return (
    <section id="how-to-join" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            {t('howToJoin.title')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-display text-white">
            {t('howToJoin.subtitle')}
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Half */}
                  <div className={`flex-1 sm:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} ml-16 sm:ml-0`}>
                    <h4 className="text-xl font-display text-white mb-2">{step.title}</h4>
                    <p className="text-muted-foreground font-light">{step.desc}</p>
                  </div>

                  {/* Icon Center */}
                  <div className="absolute left-0 sm:relative sm:left-auto md:w-16 md:h-16 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)] md:mx-auto shrink-0 mt-1 sm:mt-0">
                    <span className="md:hidden block">{step.icon}</span>
                    <span className="hidden md:block scale-125">{step.icon}</span>
                  </div>

                  {/* Empty Half for layout balance on desktop */}
                  <div className="hidden md:block flex-1 w-1/2"></div>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
             <a
              href="https://t.me/Mojo_Adm" 
              target="_blank" 
              rel="norenoopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-primary/30 text-white font-bold tracking-wider rounded-sm text-sm hover:bg-primary/10 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              {t('howToJoin.step3.title')} (@Mojo_Adm)
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
