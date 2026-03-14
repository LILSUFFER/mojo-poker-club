import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, LayoutPanelTop, Headset } from 'lucide-react';

export function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: t('stats.players'),
      label: t('stats.playersLabel')
    },
    {
      icon: <LayoutPanelTop className="w-8 h-8" />,
      value: t('stats.tables'),
      label: t('stats.tablesLabel')
    },
    {
      icon: <Headset className="w-8 h-8" />,
      value: t('stats.support'),
      label: t('stats.supportLabel')
    }
  ];

  return (
    <section className="py-24 relative bg-background border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            {t('stats.title')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-display text-white">
            {t('stats.subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card/50 p-8 rounded-lg border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-display text-white mb-2">{stat.value}</h4>
              <p className="text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
