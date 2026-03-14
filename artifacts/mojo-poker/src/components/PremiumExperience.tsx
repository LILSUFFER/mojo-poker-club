import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const featuresData = {
  ru: [
    { img: '/images/icon-shield.png',  title: 'Надёжность',     desc: 'Клуб с проверенной репутацией и тысячами игроков' },
    { img: '/images/icon-bolt.png',    title: 'Активная игра',  desc: 'Столы с живым трафиком в любое время суток' },
    { img: '/images/icon-support.png', title: 'Поддержка 24/7', desc: 'Персональный менеджер всегда на связи' },
  ],
  en: [
    { img: '/images/icon-shield.png',  title: 'Trusted Club',  desc: 'Proven reputation and thousands of active players' },
    { img: '/images/icon-bolt.png',    title: 'Active Games',  desc: 'Live tables with real traffic around the clock' },
    { img: '/images/icon-support.png', title: '24/7 Support',  desc: 'Personal manager always available for you' },
  ],
};

export function PremiumExperience() {
  const { t, language } = useLanguage();
  const features = featuresData[language];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
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
                  <img
                    src={f.img}
                    alt={f.title}
                    style={{ width: 40, height: 40, objectFit: 'contain', display: 'block' }}
                  />
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
