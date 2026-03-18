import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';

export function PremiumExperience() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const features = [
    { img: '/images/icon-shield.png',  title: t('features.trusted.title'), desc: t('features.trusted.desc') },
    { img: '/images/icon-bolt.png',    title: t('features.active.title'),  desc: t('features.active.desc') },
    { img: '/images/icon-support.png', title: t('features.support.title'), desc: t('features.support.desc') },
  ];

  return (
    <section style={{ padding: isMobile ? '60px 0' : '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? 32 : 80, alignItems: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 style={{ fontSize: isMobile ? 24 : 'clamp(22px, 2.8vw, 34px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
              {t('about.subtitle')}
            </h2>
            <p style={{ color: 'var(--text-faint)', fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
              {t('about.content1')}
            </p>
            <p style={{ color: 'var(--text-faint)', fontSize: 15, lineHeight: 1.75 }}>
              {t('about.content2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '20px 28px',
                  borderRadius: 4,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
              >
                <div style={{ flexShrink: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={f.img} alt={f.title} style={{ width: 40, height: 40, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
