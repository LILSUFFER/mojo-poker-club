import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { useIsMobile } from '@/hooks/useIsMobile';

export function About() {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const perks = [
    {
      img: '/images/perk-chip-2.png',
      value: t('about.chipValue'),
      label: t('about.chipLabel'),
      desc: t('about.chipDesc'),
    },
    {
      img: '/images/perk-rakeback-2.png',
      value: t('about.rakebackValue'),
      label: t('about.rakebackLabel'),
      desc: t('about.rakebackDesc'),
    },
  ];

  return (
    <section id="about" style={{ padding: isMobile ? '60px 0' : '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>

        {/* ── TOP: Massiv Union perks ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
            /// {t('about.title')}
          </div>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 0 : 48, flexDirection: isMobile ? 'column' : 'row' }}>
            {/* Left: badge + text */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flex: '1 1 auto' }}>
              <div style={{ flexShrink: 0, paddingTop: 4 }}>
                <img
                  src="/images/union-badge-orig.png"
                  alt="Union"
                  style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 10, display: 'block' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: isMobile ? 26 : 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: '0 0 10px 0' }}>
                  {t('about.heading')}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-faint)', letterSpacing: '0.01em', marginBottom: 16 }}>
                  {t('about.massivLabel')}
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 20px 0' }}>
                  {t('about.massivDesc')}
                </p>
                <Link
                  href="/create-account"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--text)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    borderRadius: 4,
                    padding: '10px 20px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                >
                  {t('about.createAccountLink')} →
                </Link>
              </div>
            </div>
            {/* Right: Massiv Union logo — hidden on mobile */}
            {!isMobile && (
              <div style={{ flexShrink: 0 }}>
                <img
                  src="/images/massiv-union-logo-nobg.png"
                  alt="Massiv Union ClubGG"
                  style={{ width: 280, height: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.55 }}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Perk cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: isMobile ? 0 : 80 }}
        >
          {perks.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08 }}
              style={{
                padding: isMobile ? '20px 24px' : '28px 32px',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
            >
              <div style={{ flexShrink: 0, width: isMobile ? 80 : 120, height: isMobile ? 80 : 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontSize: isMobile ? 26 : 32, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {p.value}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 4 }}>
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
