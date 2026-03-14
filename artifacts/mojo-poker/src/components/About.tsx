import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wallet, TrendingUp } from 'lucide-react';

const perksData = {
  ru: [
    {
      icon: Wallet,
      value: '1к1',
      label: 'Фишка',
      desc: 'Прямой обмен без комиссии',
    },
    {
      icon: TrendingUp,
      value: '50%',
      label: 'Рейкбек',
      desc: 'Лучший рейкбек на рынке',
    },
  ],
  en: [
    {
      icon: Wallet,
      value: '1:1',
      label: 'Chip Rate',
      desc: 'Direct exchange, no commission',
    },
    {
      icon: TrendingUp,
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <img
              src="/images/union-badge.png"
              alt="Massiv Union"
              style={{ width: 72, height: 72, objectFit: 'contain', mixBlendMode: 'screen', flexShrink: 0 }}
            />
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: 0 }}>
              {isRu ? 'Лучшие условия на рынке' : 'Best Conditions on the Market'}
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'var(--text-faint)', letterSpacing: '0.01em', marginBottom: 20 }}>
            {isRu ? 'для Massiv Poker Union' : 'for Massiv Poker Union'}
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.75, maxWidth: 560 }}>
            {isRu
              ? 'Massiv Poker Union — один из самых крупных и популярных покерных союзов клубов. Здесь играет большое количество игроков со всего мира, благодаря чему столы запускаются практически в любое время и на разных лимитах. Союз известен своей активностью, большим пулом игроков и считается одним из лучших мест для игры среди клубных покерных сообществ.'
              : 'Massiv Poker Union is one of the largest and most popular poker club unions. Players from around the world keep the tables running at virtually any time and across a wide range of stakes. The union is known for its activity, massive player pool, and is considered one of the best places to play within club poker communities.'}
          </p>
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
            const Icon = p.icon;
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
                  gap: 24,
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
              >
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  <Icon size={22} />
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
