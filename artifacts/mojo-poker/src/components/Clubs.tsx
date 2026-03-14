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
      logoBg: '#0d0d0d',
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
      logoBg: '#f0f0f0',
      members: '570+',
      tables: '233+',
      badge: '🇺🇸 Union',
    },
  ];

  return (
    <section id="clubs" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// {t('clubs.title')}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em' }}>
            {t('clubs.subtitle')}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 2, maxWidth: 880 }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: 4, transition: 'border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
            >
              {/* Logo area */}
              <div style={{ position: 'relative', background: club.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', minHeight: 180 }}>
                <img src={club.logo} alt={club.name} style={{ width: '100%', maxWidth: 260, height: 'auto', display: 'block', objectFit: 'contain' }} />
                {club.badge && (
                  <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 11, fontWeight: 600, padding: '4px 9px', borderRadius: 3, background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.9)' }}>
                    {club.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>

                {/* Stats */}
                <div style={{ display: 'flex', gap: 2 }}>
                  {[
                    { Icon: Users, val: club.members, label: t('clubs.members') },
                    { Icon: Layers, val: club.tables, label: t('clubs.tables') },
                  ].map(({ Icon, val, label }) => (
                    <div key={label} style={{ flex: 1, padding: '12px', borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <Icon size={13} style={{ color: 'var(--text-faint)' }} />
                      <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{val}</span>
                      <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Club ID */}
                <div style={{ padding: '14px 16px', borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8 }}>Club ID</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums' }}>{club.clubId}</span>
                    <button onClick={() => copy(club.clubId)}
                      style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 4, border: `1px solid ${copied === club.clubId ? 'rgba(34,197,94,0.35)' : 'var(--border-subtle)'}`, background: copied === club.clubId ? 'rgba(34,197,94,0.07)' : 'transparent', color: copied === club.clubId ? '#22c55e' : 'var(--text-faint)', cursor: 'pointer', fontSize: 11, fontWeight: 600, transition: 'all 0.2s' }}
                      onMouseEnter={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'var(--text-muted)'; } }}
                      onMouseLeave={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-faint)'; } }}
                    >
                      {copied === club.clubId
                        ? <><CheckCircle2 size={11} /> {t('clubs.copied')}</>
                        : <><Copy size={11} /> {t('clubs.copyId')}</>
                      }
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-faint)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{club.desc}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 'auto' }}>
                  {club.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 1, height: 14, background: 'var(--border-color)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{f}</span>
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
