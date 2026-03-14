import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const gamesData = {
  ru: [
    { img: '/images/game-nlh.png',  tag: 'NLH',  title: 'No-Limit Hold\'em',      desc: 'Классический покер. Неограниченные ставки, живой трафик 24/7 на всех лимитах.' },
    { img: '/images/game-plo4.png', tag: 'PLO4', title: 'Pot-Limit Omaha 4',       desc: 'Четыре карты на руках, больше экшена и комбинаций на каждой улице.' },
    { img: '/images/game-plo5.png', tag: 'PLO5', title: 'Pot-Limit Omaha 5',       desc: 'Пять карт, максимальная дисперсия и острые ситуации в каждой раздаче.' },
    { img: '/images/game-plo5.png', tag: 'PLO6', title: 'Pot-Limit Omaha 6',       desc: 'Шесть карт — самый экшеновый формат Омахи для опытных игроков.' },
    { img: '/images/game-mtt.png',  tag: 'MTT',  title: 'Мультистольные турниры', desc: 'Ежедневные турниры с гарантией и гибким расписанием.' },
    { img: '/images/game-aof.png',  tag: 'AOF',  title: 'All-in or Fold',          desc: 'Быстрый формат — только олл-ин или фолд. Идеально для мобильной игры.' },
  ],
  en: [
    { img: '/images/game-nlh.png',  tag: 'NLH',  title: 'No-Limit Hold\'em',      desc: 'Classic poker. Unlimited betting, live traffic 24/7 across all stakes.' },
    { img: '/images/game-plo4.png', tag: 'PLO4', title: 'Pot-Limit Omaha 4',       desc: 'Four hole cards, more action and combinations at every street.' },
    { img: '/images/game-plo5.png', tag: 'PLO5', title: 'Pot-Limit Omaha 5',       desc: 'Five cards, maximum variance and sharp decisions every hand.' },
    { img: '/images/game-plo5.png', tag: 'PLO6', title: 'Pot-Limit Omaha 6',       desc: 'Six cards — the most action-packed Omaha format for experienced players.' },
    { img: '/images/game-mtt.png',  tag: 'MTT',  title: 'Multi-Table Tournaments', desc: 'Daily guaranteed tournaments with a flexible schedule.' },
    { img: '/images/game-aof.png',  tag: 'AOF',  title: 'All-in or Fold',          desc: 'Fast-fold format — shove or muck. Perfect for mobile play.' },
  ],
};

export function Games() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const games = gamesData[language];
  const [active, setActive] = useState(0);

  return (
    <section id="games" style={{ padding: '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
            /// {isRu ? 'ФОРМАТЫ ИГРЫ' : 'GAME FORMATS'}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: 0 }}>
            {isRu ? 'Доступные форматы' : 'Available Formats'}
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 56, alignItems: 'start' }}>

          {/* Left: game list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {games.map((g, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={g.tag}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.055 }}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'opacity 0.25s ease',
                    opacity: isActive ? 1 : 0.38,
                  }}
                >
                  {/* Sliding active indicator */}
                  <motion.div
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      left: -32,
                      top: 0,
                      bottom: 0,
                      width: 2,
                      background: 'var(--text)',
                      borderRadius: 1,
                      transformOrigin: 'top',
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--text-faint)', textTransform: 'uppercase', flexShrink: 0 }}>
                      {g.tag}
                    </span>
                    <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                      {g.title}
                    </span>
                  </div>

                  {/* Description — expands smoothly */}
                  <motion.div
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.7, margin: '8px 0 0' }}>
                      {g.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: image box — fixed height, all images stacked, opacity cross-fade */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 420,
                borderRadius: 12,
                overflow: 'hidden',
                background: '#0d0d0d',
              }}
            >
              {games.map((g, i) => (
                <img
                  key={g.tag}
                  src={g.img}
                  alt={g.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
