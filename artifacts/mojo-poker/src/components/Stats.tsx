import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, LayoutPanelTop, Headset } from 'lucide-react';

export function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: t('stats.players'), label: t('stats.playersLabel') },
    { icon: LayoutPanelTop, value: t('stats.tables'), label: t('stats.tablesLabel') },
    { icon: Headset, value: t('stats.support'), label: t('stats.supportLabel') },
  ];

  return (
    <section style={{ background: '#0d1018', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '72px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, overflow: 'hidden', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)' }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '40px 24px', background: '#12151d', position: 'relative' }}
              >
                {i > 0 && <div style={{ position: 'absolute', top: '20%', left: 0, bottom: '20%', width: 1, background: 'rgba(255,255,255,0.06)' }} />}
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(204,21,21,0.09)', border: '1px solid rgba(204,21,21,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(4 80% 48%)', margin: '0 auto 16px' }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: 42, fontWeight: 900, color: 'white', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 10 }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
