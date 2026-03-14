import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HowToJoin() {
  const { t } = useLanguage();

  const steps = [
    { num: '01', icon: Download, title: t('howToJoin.step1.title'), desc: t('howToJoin.step1.desc') },
    { num: '02', icon: Search, title: t('howToJoin.step2.title'), desc: t('howToJoin.step2.desc') },
    { num: '03', icon: MessageCircle, title: t('howToJoin.step3.title'), desc: t('howToJoin.step3.desc') },
  ];

  return (
    <section id="how-to-join" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'hsl(25 95% 53%)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t('howToJoin.title')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: 'white' }}>
            {t('howToJoin.subtitle')}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 48 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ position: 'relative', padding: '32px 28px', borderRadius: 16, background: 'hsl(220 13% 11%)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ position: 'absolute', top: 20, right: 24, fontSize: 48, fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1, fontFamily: 'Inter' }}>{step.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(25 95% 53%)', marginBottom: 20 }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'white', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{step.desc}</p>

                {i === 1 && (
                  <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[['MOJO 1', '356323'], ['MOJO 2 Massiv Union 🇺🇸', '799798']].map(([name, id]) => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', borderRadius: 8, background: 'rgba(15,17,23,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{name}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'hsl(25 95% 53%)' }}>{id}</span>
                      </div>
                    ))}
                  </div>
                )}

                {i === 2 && (
                  <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, fontWeight: 700, color: 'hsl(25 95% 53%)', textDecoration: 'none' }}>
                    @Mojo_Adm <ArrowRight size={14} />
                  </a>
                )}

                {i === 0 && (
                  <Link href="/download"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, fontWeight: 700, color: 'hsl(25 95% 53%)', textDecoration: 'none' }}>
                    {t('nav.download')} <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 10, background: 'hsl(25 95% 53%)', color: 'white', fontWeight: 700, fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 44%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 53%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <MessageCircle size={18} />
            @Mojo_Adm
          </a>
        </div>
      </div>
    </section>
  );
}
