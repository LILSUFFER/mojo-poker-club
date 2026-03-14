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
    <section id="how-to-join" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">{t('howToJoin.title')}</div>
          <h2 className="section-title">{t('howToJoin.subtitle')}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 52 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative', padding: '28px 24px 24px', borderRadius: 14, background: 'var(--bg-card)', border: '1px solid var(--border-color)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 60, fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>{step.num}</div>

                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 7, background: 'rgba(204,21,21,0.1)', border: '1px solid rgba(204,21,21,0.18)', fontSize: 11, fontWeight: 700, color: 'hsl(4 80% 52%)', marginBottom: 16 }}>
                  {i + 1}
                </div>

                <div style={{ width: 46, height: 46, borderRadius: 11, background: 'rgba(204,21,21,0.07)', border: '1px solid rgba(204,21,21,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(4 80% 50%)', marginBottom: 16 }}>
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{step.desc}</p>

                {step.extra === 'ids' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
                    {[['MOJO 1', '356323'], ['MOJO 2 Massiv', '799798']].map(([name, id]) => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: 13, color: 'var(--text-faint)' }}>{name}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'hsl(4 80% 52%)', letterSpacing: '0.03em' }}>{id}</span>
                      </div>
                    ))}
                  </div>
                )}
                {step.extra === 'download' && (
                  <Link href="/download"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'hsl(4 80% 52%)', textDecoration: 'none', marginTop: 'auto' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 65%)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 52%)'; }}
                  >
                    {t('nav.download')} <ArrowRight size={13} />
                  </Link>
                )}
                {step.extra === 'tg' && (
                  <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'hsl(4 80% 52%)', textDecoration: 'none', marginTop: 'auto' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 65%)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'hsl(4 80% 52%)'; }}
                  >
                    @Mojo_Adm <ArrowRight size={13} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 32px', borderRadius: 9, background: 'hsl(4 80% 45%)', color: 'white', fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.15s', letterSpacing: '-0.01em' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 38%)'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 45%)'; el.style.transform = 'translateY(0)'; }}
          >
            <MessageCircle size={16} />
            @Mojo_Adm on Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
