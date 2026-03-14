import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const REF_CODE = '3383-3619';

export function Clubs() {
  const { t, language } = useLanguage();
  const isRu = language === 'ru';
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
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
      cardBg: '#0d0d0d',
      light: false,
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
      cardBg: '#f0f0f0',
      light: true,
      members: '570+',
      tables: '233+',
      badge: '🇺🇸 Union',
    },
  ];

  const CopyButton = ({ val, copyKey, label }: { val: string; copyKey: string; label: string }) => {
    const isCopied = copied === copyKey;
    return (
      <button
        onClick={() => copy(val, copyKey)}
        style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '6px 12px', borderRadius: 4, cursor: 'pointer',
          border: `1px solid ${isCopied ? 'rgba(34,197,94,0.35)' : 'var(--border-subtle)'}`,
          background: isCopied ? 'rgba(34,197,94,0.07)' : 'transparent',
          color: isCopied ? '#22c55e' : 'var(--text-faint)',
          fontSize: 11, fontWeight: 600, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { if (!isCopied) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'var(--text-muted)'; } }}
        onMouseLeave={e => { if (!isCopied) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-faint)'; } }}
      >
        {isCopied ? <><CheckCircle2 size={11} /> {t('clubs.copied')}</> : <><Copy size={11} /> {label}</>}
      </button>
    );
  };

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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                border: `1px solid ${club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'}`,
                background: club.cardBg,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 8,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = club.light ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'; }}
            >
              {/* Logo area */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 48px', minHeight: 200 }}>
                <img src={club.logo} alt={club.name} style={{ width: '100%', maxWidth: 280, height: 'auto', display: 'block', objectFit: 'contain' }} />
                {club.badge && (
                  <div style={{ position: 'absolute', top: 14, right: 14 }}>
                    <img
                      src="/images/union-badge-orig.png"
                      alt="Union"
                      style={{ width: 56, height: 56, objectFit: 'contain', borderRadius: 6, display: 'block' }}
                    />
                  </div>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)', margin: '0 28px' }} />

              {/* Body */}
              <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { icon: '/images/icon-users.png', val: club.members, label: t('clubs.members') },
                    { icon: '/images/icon-table.png', val: club.tables, label: t('clubs.tables') },
                  ].map(({ icon, val, label }) => (
                    <div key={label} style={{
                      padding: '14px 16px', borderRadius: 6,
                      background: club.light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'}`,
                      display: 'flex', flexDirection: 'column', gap: 4
                    }}>
                      <img src={icon} alt="" style={{ width: 20, height: 20, objectFit: 'contain', filter: club.light ? 'invert(1)' : 'none' }} />
                      <span style={{ fontSize: 22, fontWeight: 700, color: club.light ? '#111' : 'var(--text)', lineHeight: 1 }}>{val}</span>
                      <span style={{ fontSize: 9, fontWeight: 600, color: club.light ? '#888' : 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Club ID + Ref Code side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {/* Club ID */}
                  <div style={{
                    padding: '14px 16px', borderRadius: 6,
                    background: club.light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'}`,
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: club.light ? '#888' : 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8 }}>Club ID</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: club.light ? '#111' : 'var(--text)', letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums' }}>{club.clubId}</span>
                      <CopyButton val={club.clubId} copyKey={`id-${club.id}`} label={isRu ? 'Копировать' : 'Copy'} />
                    </div>
                  </div>

                  {/* Ref Code */}
                  <div style={{
                    padding: '14px 16px', borderRadius: 6,
                    background: club.light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${club.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'}`,
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: club.light ? '#888' : 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8 }}>
                      {isRu ? 'Реф. код' : 'Ref Code'}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: club.light ? '#111' : 'var(--text)', letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums' }}>{REF_CODE}</span>
                      <CopyButton val={REF_CODE} copyKey={`ref-${club.id}`} label={isRu ? 'Копировать' : 'Copy'} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: club.light ? '#555' : 'var(--text-faint)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{club.desc}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
                  {club.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 1, height: 14, background: club.light ? 'rgba(0,0,0,0.2)' : 'var(--border-color)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: club.light ? '#444' : 'var(--text-muted)', fontWeight: 500 }}>{f}</span>
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
