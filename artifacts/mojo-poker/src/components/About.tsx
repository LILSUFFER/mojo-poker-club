import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Trophy, Users } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: <Users className="w-6 h-6 text-primary" />, value: "5000+", label: t('about.stats.players') },
    { icon: <Trophy className="w-6 h-6 text-primary" />, value: "200+", label: t('about.stats.tables') },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, value: "24/7", label: t('about.stats.support') },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              {t('about.title')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display text-white mb-8">
              {t('about.subtitle')}
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>{t('about.content1')}</p>
              <p>{t('about.content2')}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  {stat.icon}
                  <div className="text-3xl font-display text-white mt-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden glass-panel relative p-8 flex flex-col justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full"></div>
              
              <div className="relative z-10 flex justify-end">
                <div className="w-16 h-16 border border-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-3xl font-display mb-4">GGClub App</h4>
                <p className="text-white/60 font-light mb-8">
                  Powered by one of the most reliable and feature-rich poker platforms in the world. Enjoy seamless gameplay, fair RNG, and cross-platform compatibility.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 border border-white/20 rounded-md text-xs font-semibold tracking-wider uppercase text-white/80">iOS</div>
                  <div className="px-4 py-2 border border-white/20 rounded-md text-xs font-semibold tracking-wider uppercase text-white/80">Android</div>
                  <div className="px-4 py-2 border border-white/20 rounded-md text-xs font-semibold tracking-wider uppercase text-white/80">PC</div>
                </div>
              </div>
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-white/10 p-6 rounded-lg shadow-2xl w-64 backdrop-blur-xl">
              <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Security</div>
              <div className="text-white font-medium">100% Certified RNG & Anti-Bot Protection</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
