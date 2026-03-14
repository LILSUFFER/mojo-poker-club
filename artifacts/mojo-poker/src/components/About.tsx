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
    { icon: ShieldCheck, title: 'Security', desc: 'Licensed platform with player fund protection' },
    { icon: Zap, title: 'Fast payouts', desc: 'Withdrawals processed within hours' },
    { icon: Globe, title: '24/7 Support', desc: 'Personal manager always available' },
  ],
};

export function About() {
  const { t, language } = useLanguage();
  const features = featuresData[language];

  return (
    <section id="about" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: 'hsl(25 95% 53%)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
              {t('about.title')}
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: 20 }}>
              {t('about.subtitle')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
              {t('about.content1')}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7 }}>
              {t('about.content2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i}
                  style={{ display: 'flex', gap: 16, padding: '20px 24px', borderRadius: 12, background: 'hsl(220 13% 11%)', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.3)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(25 95% 53%)' }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{f.desc}</div>
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
