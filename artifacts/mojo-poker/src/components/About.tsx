import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

function UnionBadge() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Shield shape */}
      <path d="M32 4 L56 14 L56 36 C56 50 44 60 32 62 C20 60 8 50 8 36 L8 14 Z"
        fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />

      {/* Globe */}
      <circle cx="32" cy="31" r="13" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
      {/* Latitude lines */}
      <ellipse cx="32" cy="31" rx="6" ry="13" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9" />
      <line x1="19" y1="31" x2="45" y2="31" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9" />
      <line x1="20" y1="25" x2="44" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
      <line x1="20" y1="37" x2="44" y2="37" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />

      {/* Left laurel */}
      <path d="M10 30 Q8 26 11 23 Q9 27 12 28 Q10 24 14 22 Q12 26 15 27 Q13 23 17 22 Q15 26 18 28"
        fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
      {/* Right laurel */}
      <path d="M54 30 Q56 26 53 23 Q55 27 52 28 Q54 24 50 22 Q52 26 49 27 Q51 23 47 22 Q49 26 46 28"
        fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />

      {/* UNION text */}
      <text x="32" y="52" textAnchor="middle" fill="rgba(255,255,255,0.7)"
        fontSize="7" fontWeight="700" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
        UNION
      </text>

      {/* Stars */}
      <g fill="rgba(255,255,255,0.35)">
        <polygon points="26,57 26.4,58.2 27.6,58.2 26.7,58.9 27,60.1 26,59.4 25,60.1 25.3,58.9 24.4,58.2 25.6,58.2" transform="scale(0.6) translate(16,36)"/>
        <polygon points="26,57 26.4,58.2 27.6,58.2 26.7,58.9 27,60.1 26,59.4 25,60.1 25.3,58.9 24.4,58.2 25.6,58.2" transform="scale(0.6) translate(26,36)"/>
        <polygon points="26,57 26.4,58.2 27.6,58.2 26.7,58.9 27,60.1 26,59.4 25,60.1 25.3,58.9 24.4,58.2 25.6,58.2" transform="scale(0.6) translate(36,36)"/>
      </g>
    </svg>
  );
}

const perksData = {
  ru: [
    {
      img: '/images/perk-chip.png',
      value: '1к1',
      label: 'Фишка',
      desc: 'Прямой обмен без комиссии',
    },
    {
      img: '/images/perk-rakeback.png',
      value: '50%',
      label: 'Рейкбек',
      desc: 'Лучший рейкбек на рынке',
    },
  ],
  en: [
    {
      img: '/images/perk-chip.png',
      value: '1:1',
      label: 'Chip Rate',
      desc: 'Direct exchange, no commission',
    },
    {
      img: '/images/perk-rakeback.png',
      value: '50%',
      label: 'Rakeback',
      desc: 'Best rakeback on the market',
    },
  ],
};

export function About() {
  const { t, language } = useLanguage();
  const perks = perksData[language];

  const isRu = language === 'ru';

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

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
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
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
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: '0 0 10px 0' }}>
                  {isRu ? 'Лучшие условия на рынке' : 'Best Conditions on the Market'}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-faint)', letterSpacing: '0.01em', marginBottom: 16 }}>
                  {isRu ? 'для Massiv Poker Union' : 'for Massiv Poker Union'}
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 20px 0' }}>
                  {isRu
                    ? 'Massiv Poker Union — один из самых крупных и популярных покерных союзов клубов. Здесь играет большое количество игроков со всего мира, благодаря чему столы запускаются практически в любое время и на разных лимитах. Союз известен своей активностью, большим пулом игроков и считается одним из лучших мест для игры среди клубных покерных сообществ.'
                    : 'Massiv Poker Union is one of the largest and most popular poker club unions. Players from around the world keep the tables running at virtually any time and across a wide range of stakes. The union is known for its activity, massive player pool, and is considered one of the best places to play within club poker communities.'}
                </p>
                <Link
                  href="/massiv-guide"
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
                  {isRu ? 'Как создать аккаунт' : 'How to Create Account'} →
                </Link>
              </div>
            </div>
            {/* Right: Massiv Union logo */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/massiv-union-logo.png"
                alt="Massiv Union ClubGG"
                style={{ width: 280, height: 'auto', display: 'block', mixBlendMode: 'screen', filter: 'grayscale(1) brightness(0.7)' }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Perk cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 80 }}
        >
          {perks.map((p, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.08 }}
                style={{
                  padding: '28px 32px',
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
                <div style={{ flexShrink: 0, width: 240, height: 240, borderRadius: 8, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
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
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
