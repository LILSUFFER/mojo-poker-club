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
    <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '28px 20px', borderRadius: 12, background: 'hsl(220 13% 11%)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(25 95% 53%)', margin: '0 auto 16px' }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: 'white', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
