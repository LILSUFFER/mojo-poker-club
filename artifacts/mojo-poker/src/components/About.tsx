import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Zap, Globe, Wallet, TrendingUp } from 'lucide-react';

const featuresData = {
  ru: [
    { icon: ShieldCheck, title: 'Надёжность', desc: 'Клуб с проверенной репутацией и тысячами игроков' },
    { icon: Zap, title: 'Активная игра', desc: 'Столы с живым трафиком в любое время суток' },
    { icon: Globe, title: 'Поддержка 24/7', desc: 'Персональный менеджер всегда на связи' },
  ],
  en: [
    { icon: ShieldCheck, title: 'Trusted Club', desc: 'Proven reputation and thousands of active players' },
    { icon: Zap, title: 'Active Games', desc: 'Live tables with real traffic around the clock' },
    { icon: Globe, title: '24/7 Support', desc: 'Personal manager always available for you' },
  ],
};

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
  const features = featuresData[language];
  const perks = perksData[language];

  const isRu = language === 'ru';

  return (
    <section id="about" style={{ padding: '100px 0 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
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
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 6 }}>
            {isRu ? 'Лучшие условия на рынке' : 'Best Conditions on the Market'}
          </h2>
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

        {/* ── DIVIDER ── */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: 80 }} />

        {/* ── BOTTOM: Premium experience + feature cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center', paddingBottom: 100 }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
              {t('about.subtitle')}
            </h2>
            <p style={{ color: 'var(--text-faint)', fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
              {t('about.content1')}
            </p>
            <p style={{ color: 'var(--text-faint)', fontSize: 15, lineHeight: 1.75 }}>
              {t('about.content2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i}
                  style={{ display: 'flex', gap: 16, padding: '18px 20px', borderRadius: 4, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', transition: 'border-color 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.55 }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
