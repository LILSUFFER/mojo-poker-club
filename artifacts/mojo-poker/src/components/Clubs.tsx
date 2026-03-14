import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2, Users } from 'lucide-react';
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
      accent: 'hsl(25 95% 53%)',
    },
    {
      id: 'massiv',
      clubId: '799798',
      name: t('clubs.massiv.name'),
      desc: t('clubs.massiv.desc'),
      features: [t('clubs.massiv.feature1'), t('clubs.massiv.feature2'), t('clubs.massiv.feature3')],
      accent: 'hsl(25 95% 53%)',
      badge: '🇺🇸 Union',
    },
  ];

  return (
    <section id="clubs" style={{ padding: '100px 0', background: '#0d1018', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">{t('clubs.title')}</div>
          <h2 className="section-title">{t('clubs.subtitle')}</h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: '#12151d', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(249,115,22,0.35)'; el.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.transform = 'translateY(0)'; }}
            >
              {/* Card top stripe */}
              <div style={{ height: 3, background: 'linear-gradient(to right, hsl(25 95% 53%), hsl(25 95% 70%))' }} />

              <div style={{ padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
                {/* Club name + badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 24 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <Users size={15} style={{ color: 'rgba(255,255,255,0.3)' }} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Club</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>{club.name}</h3>
                  </div>
                  {club.badge && (
                    <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 700, padding: '5px 11px', borderRadius: 6, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', color: 'hsl(25 95% 65%)' }}>
                      {club.badge}
                    </span>
                  )}
                </div>

                {/* Club ID block */}
                <div style={{ padding: '18px 20px', borderRadius: 10, background: '#0a0c12', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Club ID</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 32, fontWeight: 900, color: 'hsl(25 95% 58%)', letterSpacing: '0.06em', fontVariantNumeric: 'tabular-nums' }}>{club.clubId}</span>
                    <button onClick={() => copy(club.clubId)}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 7, border: `1px solid ${copied === club.clubId ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.1)'}`, background: copied === club.clubId ? 'rgba(34,197,94,0.08)' : 'transparent', color: copied === club.clubId ? '#22c55e' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(249,115,22,0.45)'; el.style.color = 'hsl(25 95% 65%)'; } }}
                      onMouseLeave={e => { if (copied !== club.clubId) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = 'rgba(255,255,255,0.5)'; } }}
                    >
                      {copied === club.clubId
                        ? <><CheckCircle2 size={13} /> {t('clubs.copied')}</>
                        : <><Copy size={13} /> {t('clubs.copyId')}</>
                      }
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.65, marginBottom: 24 }}>{club.desc}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 'auto' }}>
                  {club.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'hsl(25 95% 53%)', flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{f}</span>
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
