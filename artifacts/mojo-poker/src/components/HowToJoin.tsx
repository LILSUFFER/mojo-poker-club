import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HowToJoin() {
  const { t } = useLanguage();

  const steps = [
    { num: '01', icon: Download, title: t('howToJoin.step1.title'), desc: t('howToJoin.step1.desc'), extra: 'download' },
    { num: '02', icon: Search, title: t('howToJoin.step2.title'), desc: t('howToJoin.step2.desc'), extra: 'ids' },
    { num: '03', icon: MessageCircle, title: t('howToJoin.step3.title'), desc: t('howToJoin.step3.desc'), extra: 'tg' },
  ];

  return (
    <section id="how-to-join" style={{ padding: '100px 0', background: '#0a0c12' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">{t('howToJoin.title')}</div>
          <h2 className="section-title">{t('howToJoin.subtitle')}</h2>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 52 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative', padding: '32px 28px 28px', borderRadius: 14, background: '#12151d', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 0 }}
              >
                {/* Big number watermark */}
                <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 64, fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{step.num}</div>

                {/* Step number pill */}
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 7, background: 'rgba(204,21,21,0.12)', border: '1px solid rgba(204,21,21,0.2)', fontSize: 12, fontWeight: 800, color: 'hsl(4 80% 50%)', marginBottom: 18 }}>
                  {i + 1}
                </div>

                {/* Icon */}
                <div style={{ width: 50, height: 50, borderRadius: 12, background: 'rgba(204,21,21,0.08)', border: '1px solid rgba(204,21,21,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(4 80% 48%)', marginBottom: 18 }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'white', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 18 }}>{step.desc}</p>

                {/* Extra content */}
                {step.extra === 'ids' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 'auto' }}>
                    {[['MOJO 1', '356323'], ['MOJO 2 Massiv', '799798']].map(([name, id]) => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 13px', borderRadius: 8, background: '#0a0c12', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{name}</span>
                        <span style={{ fontSize: 14, fontWeight: 800, color: 'hsl(4 80% 50%)', letterSpacing: '0.04em' }}>{id}</span>
                      </div>
                    ))}
                  </div>
                )}
                {step.extra === 'download' && (
                  <Link href="/download"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'hsl(4 80% 50%)', textDecoration: 'none', marginTop: 'auto' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 62%)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 50%)'; }}
                  >
                    {t('nav.download')} <ArrowRight size={13} />
                  </Link>
                )}
                {step.extra === 'tg' && (
                  <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'hsl(4 80% 50%)', textDecoration: 'none', marginTop: 'auto' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 62%)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 50%)'; }}
                  >
                    @Mojo_Adm <ArrowRight size={13} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 34px', borderRadius: 10, background: 'hsl(4 80% 45%)', color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 37%)'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 45%)'; el.style.transform = 'translateY(0)'; }}
          >
            <MessageCircle size={17} />
            @Mojo_Adm on Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
