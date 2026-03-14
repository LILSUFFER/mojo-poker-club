import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const gamesData = {
  ru: [
    {
      img: '/images/game-nlh.png',
      tag: 'NLH',
      title: 'No-Limit Hold\'em',
      desc: 'Классический покер. Неограниченные ставки, живой трафик 24/7 на всех лимитах.',
      wide: true,
    },
    {
      img: '/images/game-plo4.png',
      tag: 'PLO4',
      title: 'Pot-Limit Omaha 4',
      desc: 'Четыре карты на руках, больше экшена и комбинаций.',
      wide: false,
    },
    {
      img: '/images/game-plo5.png',
      tag: 'PLO5',
      title: 'Pot-Limit Omaha 5',
      desc: 'Пять карт, максимальная дисперсия и острые ситуации.',
      wide: false,
    },
    {
      img: '/images/game-mtt.png',
      tag: 'MTT',
      title: 'Мультистол. турниры',
      desc: 'Ежедневные турниры с гарантией и гибким расписанием.',
      wide: false,
    },
    {
      img: '/images/game-aof.png',
      tag: 'AOF',
      title: 'All-in or Fold',
      desc: 'Быстрый формат — только олл-ин или фолд. Идеально для мобильной игры.',
      wide: false,
    },
  ],
  en: [
    {
      img: '/images/game-nlh.png',
      tag: 'NLH',
      title: 'No-Limit Hold\'em',
      desc: 'Classic poker. Unlimited betting, live traffic 24/7 across all stakes.',
      wide: true,
    },
    {
      img: '/images/game-plo4.png',
      tag: 'PLO4',
      title: 'Pot-Limit Omaha 4',
      desc: 'Four hole cards, more action and combinations at every street.',
      wide: false,
    },
    {
      img: '/images/game-plo5.png',
      tag: 'PLO5',
      title: 'Pot-Limit Omaha 5',
      desc: 'Five cards, maximum variance and sharp decisions every hand.',
      wide: false,
    },
    {
      img: '/images/game-mtt.png',
      tag: 'MTT',
      title: 'Multi-Table Tournaments',
      desc: 'Daily guaranteed tournaments with flexible scheduling.',
      wide: false,
    },
    {
      img: '/images/game-aof.png',
      tag: 'AOF',
      title: 'All-in or Fold',
      desc: 'Fast-fold format — shove or muck. Perfect for mobile play.',
      wide: false,
    },
  ],
};

export function Games() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const games = gamesData[language];
  const featured = games[0];
  const rest = games.slice(1);

  return (
    <section id="games" style={{ padding: '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
            /// {isRu ? 'ФОРМАТЫ ИГРЫ' : 'GAME FORMATS'}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: 0 }}>
            {isRu ? 'Доступные форматы' : 'Available Formats'}
          </h2>
        </motion.div>

        {/* Top row: featured (wide) + 2 small */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: 340, cursor: 'default' }}
          >
            <img
              src={featured.img}
              alt={featured.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '24px 28px' }}>
              <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 8 }}>
                {featured.tag}
              </span>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>
                {featured.title}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                {featured.desc}
              </p>
            </div>
          </motion.div>

          {/* 2 small right */}
          {rest.slice(0, 2).map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
              style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: 340, cursor: 'default' }}
            >
              <img
                src={g.img}
                alt={g.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.05) 55%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px 22px' }}>
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 6 }}>
                  {g.tag}
                </span>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {g.title}
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, margin: 0 }}>
                  {g.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 equal cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {rest.slice(2).map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.18 + i * 0.07 }}
              style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: 220, cursor: 'default' }}
            >
              <img
                src={g.img}
                alt={g.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.05) 55%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '18px 22px' }}>
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 5 }}>
                  {g.tag}
                </span>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {g.title}
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, margin: 0 }}>
                  {g.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
