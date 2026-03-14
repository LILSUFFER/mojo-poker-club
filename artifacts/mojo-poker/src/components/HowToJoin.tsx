import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Download, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HowToJoin() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const steps = [
    { num: '01', icon: Download, title: t('howToJoin.step1.title'), desc: t('howToJoin.step1.desc'), extra: 'download' },
    { num: '02', icon: Search, title: t('howToJoin.step2.title'), desc: t('howToJoin.step2.desc'), extra: 'ids' },
    { num: '03', icon: MessageCircle, title: t('howToJoin.step3.title'), desc: t('howToJoin.step3.desc'), extra: 'tg' },
  ];

  return (
    <section id="how-to-join" style={{ padding: isMobile ? '60px 0' : '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>

        <div style={{ marginBottom: isMobile ? 36 : 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// {t('howToJoin.title')}
          </div>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em' }}>
            {t('howToJoin.subtitle')}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2, marginBottom: 36 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{ position: 'relative', padding: '24px', borderRadius: 4, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
              >
                {/* Big background number */}
                <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 56, fontWeight: 700, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>{step.num}</div>

                {/* Step number badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', fontSize: 10, fontWeight: 700, color: 'var(--text-faint)', marginBottom: 18 }}>
                  {i + 1}
                </div>

                {/* Icon */}
                <div style={{ width: 44, height: 44, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: 18 }}>
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.65, marginBottom: 16 }}>{step.desc}</p>

                {step.extra === 'ids' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 'auto' }}>
                    {[['MOJO', '356323'], ['MOJO 2 Massiv', '799798']].map(([name, id]) => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{name}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{id}</span>
                      </div>
                    ))}
                  </div>
                )}
                {step.extra === 'download' && (
                  <Link href="/download"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--text-faint)', textDecoration: 'none', marginTop: 'auto', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                  >
                    {t('nav.download')} <ArrowRight size={12} />
                  </Link>
                )}
                {step.extra === 'tg' && (
                  <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--text-faint)', textDecoration: 'none', marginTop: 'auto', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                  >
                    @Mojo_Adm <ArrowRight size={12} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <div>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 24px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.4)'; el.style.background = 'rgba(255,255,255,0.04)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.background = 'transparent'; }}
          >
            <MessageCircle size={15} />
            @Mojo_Adm on Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
