import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2, ExternalLink } from 'lucide-react';
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
      badge: null,
    },
    {
      id: 'massiv',
      clubId: '799798',
      name: t('clubs.massiv.name'),
      desc: t('clubs.massiv.desc'),
      features: [t('clubs.massiv.feature1'), t('clubs.massiv.feature2'), t('clubs.massiv.feature3')],
      badge: '🇺🇸 Union',
    },
  ];

  return (
    <section id="clubs" style={{ padding: '96px 0', background: 'hsl(220 13% 9%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'hsl(25 95% 53%)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t('clubs.title')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: 'white' }}>
            {t('clubs.subtitle')}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: 'hsl(220 13% 11%)', padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, transition: 'border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'white', lineHeight: 1.3 }}>{club.name}</h3>
                {club.badge && (
                  <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)', color: 'hsl(25 95% 53%)' }}>
                    {club.badge}
                  </span>
                )}
              </div>

              <div style={{ padding: '16px 20px', borderRadius: 10, background: 'rgba(15,17,23,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Club ID</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'hsl(25 95% 53%)', letterSpacing: '0.05em', fontFamily: 'Inter' }}>{club.clubId}</span>
                  <button onClick={() => copy(club.clubId)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', background: 'none', color: copied === club.clubId ? '#22c55e' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s' }}
                    onMouseEnter={e => { if (copied !== club.clubId) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    {copied === club.clubId
                      ? <><CheckCircle2 size={14} /> {t('clubs.copied')}</>
                      : <><Copy size={14} /> {t('clubs.copyId')}</>
                    }
                  </button>
                </div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.6 }}>{club.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {club.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(25 95% 53%)', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
