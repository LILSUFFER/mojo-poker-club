import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2, Users, Layers } from 'lucide-react';
import { useState } from 'react';

export function Clubs() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const clubs = [
    {
      id: 'mojo1',
      clubId: '356323',
      name: t('clubs.mojo.name'),
      desc: t('clubs.mojo.desc'),
      features: [t('clubs.mojo.feature1'), t('clubs.mojo.feature2'), t('clubs.mojo.feature3')],
      logo: '/images/mojo1-logo.png',
      logoBg: '#1a0000',
      members: '5 000+',
      tables: '200+',
      badge: null,
    },
    {
      id: 'massiv',
      clubId: '799798',
      name: t('clubs.massiv.name'),
      desc: t('clubs.massiv.desc'),
      features: [t('clubs.massiv.feature1'), t('clubs.massiv.feature2'), t('clubs.massiv.feature3')],
      logo: '/images/mojo2-logo.png',
      logoBg: '#f5f5f5',
      members: '570+',
      tables: '233+',
      badge: '🇺🇸 Union',
    },
  ];

  return (
    <section id="clubs" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">{t('clubs.title')}</div>
          <h2 className="section-title">{t('clubs.subtitle')}</h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28, maxWidth: 880, margin: '0 auto' }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ borderRadius: 20, border: '1px solid var(--border-color)', background: 'var(--bg-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s', boxShadow: '0 4px 32px rgba(0,0,0,0.35)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(204,21,21,0.4)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 48px rgba(204,21,21,0.12)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.09)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.35)'; }}
            >
              {/* Logo area */}
              <div style={{ position: 'relative', background: club.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 32px', minHeight: 200 }}>
                <img src={club.logo} alt={club.name} style={{ width: '100%', maxWidth: 280, height: 'auto', display: 'block', objectFit: 'contain' }} />
                {club.badge && (
                  <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 7, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)' }}>
                    {club.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flex: 1, padding: '14px 16px', borderRadius: 12, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Users size={14} style={{ color: 'var(--text-faint)' }} />
                    <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{club.members}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t('clubs.members')}</span>
                  </div>
                  <div style={{ flex: 1, padding: '14px 16px', borderRadius: 12, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Layers size={14} style={{ color: 'var(--text-faint)' }} />
                    <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{club.tables}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t('clubs.tables')}</span>
                  </div>
                </div>

                {/* Club ID */}
                <div style={{ padding: '16px 18px', borderRadius: 12, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Club ID</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 28, fontWeight: 900, color: 'hsl(4 80% 48%)', letterSpacing: '0.06em', fontVariantNumeric: 'tabular-nums' }}>{club.clubId}</span>
                    <button onClick={() => copy(club.clubId)}
                      style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 13px', borderRadius: 7, border: `1px solid ${copied === club.clubId ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.1)'}`, background: copied === club.clubId ? 'rgba(34,197,94,0.08)' : 'transparent', color: copied === club.clubId ? '#22c55e' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(204,21,21,0.45)'; el.style.color = 'hsl(4 80% 55%)'; } }}
                      onMouseLeave={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = 'rgba(255,255,255,0.5)'; } }}
                    >
                      {copied === club.clubId
                        ? <><CheckCircle2 size={12} /> {t('clubs.copied')}</>
                        : <><Copy size={12} /> {t('clubs.copyId')}</>
                      }
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{club.desc}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
                  {club.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'hsl(4 80% 45%)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
