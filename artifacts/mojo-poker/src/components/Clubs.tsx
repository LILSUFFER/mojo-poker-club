import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

const clubs = [
  {
    id: 'massiv',
    href: '/clubs/massiv',
    logo: '/images/mojo2-logo.png',
    logoBg: '#ffffff',
    label: 'MOJO: Massiv Poker Union',
    rb: '50%',
    chip: '1к1',
    badge: '/images/union-badge-orig.png',
  },
  {
    id: 'mojo1',
    href: '/clubs/mojo',
    logo: '/images/mojo1-logo.png',
    logoBg: '#222222',
    label: 'MOJO 1',
    rb: '55%',
    chip: '1к1',
    badge: null,
  },
];

export function Clubs() {
  const { t, language } = useLanguage();
  const isRu = language === 'ru';

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, maxWidth: 720 }}>
          {clubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                borderRadius: 8,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Logo */}
              <div style={{ position: 'relative', background: club.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', minHeight: 160 }}>
                <img src={club.logo} alt={club.label} style={{ width: '100%', maxWidth: 200, height: 'auto', objectFit: 'contain', display: 'block' }} />
                {club.badge && (
                  <div style={{ position: 'absolute', top: 12, right: 12 }}>
                    <img src={club.badge} alt="Union" style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 6 }} />
                  </div>
                )}
              </div>

              <div style={{ height: 1, background: 'var(--border-subtle)' }} />

              {/* Body */}
              <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>

                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {club.label}
                </h3>

                {/* Stats: Chip + RB */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div style={{ padding: '12px 14px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 5 }}>
                      {isRu ? 'Фишка' : 'Chip'}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{club.chip}</div>
                  </div>
                  <div style={{ padding: '12px 14px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 5 }}>
                      {isRu ? 'Рейкбек' : 'Rakeback'}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{club.rb}</div>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href={club.href}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '11px 16px', borderRadius: 4, textDecoration: 'none',
                    fontSize: 13, fontWeight: 600, color: 'var(--text)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'rgba(255,255,255,0.04)',
                    marginTop: 'auto',
                    transition: 'background 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
                >
                  {isRu ? 'Подробнее о клубе' : 'Learn More'} →
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
