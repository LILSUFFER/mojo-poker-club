import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const featuresData = {
  ru: [
    { icon: ShieldCheck, title: 'Безопасность', desc: 'Лицензированная платформа с защитой средств игроков' },
    { icon: Zap, title: 'Быстрые выплаты', desc: 'Вывод средств в течение нескольких часов' },
    { icon: Globe, title: 'Поддержка 24/7', desc: 'Персональный менеджер всегда на связи' },
  ],
  en: [
    { icon: ShieldCheck, title: 'Security', desc: 'Licensed platform with full player fund protection' },
    { icon: Zap, title: 'Fast Payouts', desc: 'Withdrawals processed within hours, not days' },
    { icon: Globe, title: '24/7 Support', desc: 'Personal manager always available for you' },
  ],
};

export function About() {
  const { t, language } = useLanguage();
  const features = featuresData[language];

  return (
    <section id="about" style={{ padding: '100px 0', background: '#0a0c12', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label">{t('about.title')}</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              {t('about.subtitle')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, marginBottom: 18 }}>
              {t('about.content1')}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75 }}>
              {t('about.content2')}
            </p>
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i}
                  style={{ display: 'flex', gap: 18, padding: '22px 24px', borderRadius: 12, background: '#12151d', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s, background 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(249,115,22,0.3)'; el.style.background = '#14172000'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.background = '#12151d'; }}
                >
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(25 95% 60%)' }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'white', marginBottom: 5 }}>{f.title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{f.desc}</div>
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
