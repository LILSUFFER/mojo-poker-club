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
  const [dir, setDir] = useState(1);
  const [prev, setPrev] = useState('nlh');

  const currentIdx = TABS.findIndex(t => t.id === active);
  const current = TABS[currentIdx];

  const switchTab = (id: string) => {
    const newIdx = TABS.findIndex(t => t.id === id);
    setDir(newIdx > currentIdx ? 1 : -1);
    setPrev(active);
    setActive(id);
  };

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: 60,
      background: 'var(--bg)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        padding: '48px 0 48px 64px',
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: 56,
        alignItems: 'center',
      }}>

        {/* LEFT: Text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>/// ClubGG Network</span>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            style={{ fontSize: 'clamp(38px, 3.5vw, 58px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.035em' }}
          >
            <span style={{ color: 'var(--text)' }}>{t('hero.title')}</span>
            <br />
            <span style={{ color: 'var(--text-muted)' }}>{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{ fontSize: 15, color: 'var(--text-faint)', marginBottom: 36, lineHeight: 1.75, maxWidth: 380 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{ display: 'flex', gap: 10, marginBottom: 52 }}
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
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: 36, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}
          >
            {[['5 000+', t('about.stats.players')], ['200+', t('about.stats.tables')], ['24/7', t('about.stats.support')]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{val}</div>
                <div style={{ fontSize: 9, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: App mockup window */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {/* Tab switcher above window */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12, paddingLeft: 2 }}>
            {TABS.map(tab => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  style={{
                    position: 'relative',
                    padding: '7px 18px',
                    borderRadius: 4,
                    border: isActive ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                    background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-faint)',
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.03em',
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    fontFamily: 'Space Grotesk, sans-serif',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; } }}
                  onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; } }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* App window frame */}
          <div style={{
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
            background: '#0a0a0a',
          }}>
            {/* Title bar */}
            <div style={{
              height: 38,
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 14px',
              gap: 7,
            }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28ca41', display: 'inline-block' }} />
              <span style={{ marginLeft: 12, fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: '0.02em' }}>
                ClubGG — {current.label}
              </span>
            </div>

            {/* Screenshot area */}
            <div style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active}
                  src={current.img}
                  alt={current.label}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
              </AnimatePresence>

              {/* Bottom overlay with dots */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 48,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: 12,
                gap: 6,
              }}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => switchTab(tab.id)}
                    style={{
                      width: tab.id === active ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: tab.id === active ? 'white' : 'rgba(255,255,255,0.35)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.25s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Reflection / glow under window */}
          <div style={{
            height: 40,
            background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 100%)',
            marginTop: -1,
          }} />
        </motion.div>

      </div>
    </section>
  );
}
