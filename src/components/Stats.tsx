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
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '72px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, border: '1px solid var(--border-subtle)' }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--bg-card)', position: 'relative' }}
              >
                {i > 0 && <div style={{ position: 'absolute', top: '20%', left: 0, bottom: '20%', width: 1, background: 'var(--border-subtle)' }} />}
                <div style={{ width: 44, height: 44, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-faint)', margin: '0 auto 16px' }}>
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: 38, fontWeight: 700, color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 10 }}>{stat.value}</div>
                <div style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
