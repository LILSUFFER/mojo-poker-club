import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const featuresData = {
  ru: [
    { icon: ShieldCheck, title: 'Надёжность', desc: 'Клуб с проверенной репутацией и тысячами игроков' },
    { icon: Zap, title: 'Активная игра', desc: 'Столы с живым трафиком в любое время суток' },
    { icon: Globe, title: 'Поддержка 24/7', desc: 'Персональный менеджер всегда на связи' },
  ],
  en: [
    { icon: ShieldCheck, title: 'Trusted Club', desc: 'Proven reputation and thousands of active players' },
    { icon: Zap, title: 'Active Games', desc: 'Live tables with real traffic around the clock' },
    { icon: Globe, title: '24/7 Support', desc: 'Personal manager always available for you' },
  ],
};

export function About() {
  const { t, language } = useLanguage();
  const features = featuresData[language];

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
              /// {t('about.title')}
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
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
            style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i}
                  style={{ display: 'flex', gap: 16, padding: '18px 20px', borderRadius: 4, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', transition: 'border-color 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.55 }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
