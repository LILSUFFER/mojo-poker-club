import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

const TABS = [
  { id: 'nlh',  label: 'Холдем', img: '/images/game-nlh.png'  },
  { id: 'plo4', label: 'PLO4',   img: '/images/game-plo4.png' },
  { id: 'plo5', label: 'PLO5',   img: '/images/game-plo5.png' },
  { id: 'mtt',  label: 'MTT',    img: '/images/game-mtt.png'  },
  { id: 'aof',  label: 'AOF',    img: '/images/game-aof.png'  },
];

export function Hero() {
  const { t } = useLanguage();
  const [active, setActive] = useState('nlh');

  const current = TABS.find(t => t.id === active)!;

  return (
    <section style={{ minHeight: '100vh', paddingTop: 60, background: 'var(--bg)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '60px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, alignSelf: 'flex-start' }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>/// ClubGG Network</span>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Online</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.03em' }}
          >
            <span style={{ color: 'var(--text)' }}>{t('hero.title')}</span>{' '}
            <span style={{ color: 'var(--text-muted)' }}>{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--text-faint)', marginBottom: 36, lineHeight: 1.7, maxWidth: 420 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}
          >
            <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.5)'; el.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.25)'; el.style.background = 'transparent'; }}
            >
              {t('hero.cta')} <ArrowRight size={14} />
            </a>
            <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 4, border: '1px solid var(--border-subtle)', background: 'transparent', color: 'var(--text-muted)', fontWeight: 500, fontSize: 14, textDecoration: 'none', transition: 'all 0.15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'var(--text)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-muted)'; }}
            >
              <MessageCircle size={14} /> {t('hero.secondaryCta')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ display: 'flex', gap: 36, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}
          >
            {[['5 000+', t('about.stats.players')], ['200+', t('about.stats.tables')], ['24/7', t('about.stats.support')]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{val}</div>
                <div style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 5, fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: game type switcher + image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {/* Tab bar */}
          <div style={{ display: 'flex', gap: 2, marginBottom: 2, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderBottom: 'none', borderRadius: '4px 4px 0 0', padding: '6px 8px' }}>
            {TABS.map(tab => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 3,
                    border: 'none',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? 'var(--text)' : 'var(--text-faint)',
                    fontSize: 12,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Image with crossfade */}
          <div style={{ position: 'relative', border: '1px solid var(--border-subtle)', borderRadius: '0 0 4px 4px', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--bg-card)' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={current.img}
                alt={current.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </AnimatePresence>

            {/* Label overlay bottom-left */}
            <div style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 10px', borderRadius: 3, background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em', backdropFilter: 'blur(6px)' }}>
              {current.label}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
