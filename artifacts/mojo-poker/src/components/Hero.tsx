import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

const MACBOOK_W = 740, MACBOOK_H = 434;
const IPHONE_W = 428, IPHONE_H = 868;

const MAC_SCALE = 0.80;
const PHN_SCALE = 0.42;

function ScaledDevice({ nativeW, nativeH, scale, children }: {
  nativeW: number; nativeH: number; scale: number; children: React.ReactNode;
}) {
  return (
    <div style={{ position: 'relative', width: nativeW * scale, height: nativeH * scale, flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}

function DeviceMacbook({ src }: { src: string }) {
  return (
    <div className="device device-macbook-pro">
      <div className="device-frame">
        <img className="device-screen" src={src} alt="Mojo Poker on MacBook" />
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
      <div className="device-home" />
    </div>
  );
}

function DeviceIPhone({ src }: { src: string }) {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <img className="device-screen" src={src} alt="Mojo Poker on iPhone" />
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
      <div className="device-home" />
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

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
        maxWidth: 1280,
        margin: '0 auto',
        padding: '60px 32px',
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: 48,
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
            style={{ fontSize: 'clamp(36px, 3.5vw, 56px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.035em' }}
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

        {/* RIGHT: Device composition
            MacBook: 740×434 at scale MAC_SCALE → (429×252)px
            iPhone X: 428×868 at scale PHN_SCALE → (154×312)px
            Layout: MacBook flush left, iPhone overlaps right edge of MacBook
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'relative',
            height: Math.max(MACBOOK_H * MAC_SCALE, IPHONE_H * PHN_SCALE) + 30,
            overflow: 'visible',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {/* MacBook Pro — full left, behind */}
          <motion.div
            initial={{ opacity: 0, x: -16, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              zIndex: 1,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
            }}
          >
            <ScaledDevice nativeW={MACBOOK_W} nativeH={MACBOOK_H} scale={MAC_SCALE}>
              <DeviceMacbook src="/images/game-nlh.png" />
            </ScaledDevice>
          </motion.div>

          {/* iPhone X — overlapping MacBook's right edge, in front */}
          <motion.div
            initial={{ opacity: 0, x: 16, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              position: 'absolute',
              left: Math.round(MACBOOK_W * MAC_SCALE - IPHONE_W * PHN_SCALE * 0.6),
              bottom: 0,
              zIndex: 2,
              filter: 'drop-shadow(-8px 20px 36px rgba(0,0,0,0.9))',
            }}
          >
            <ScaledDevice nativeW={IPHONE_W} nativeH={IPHONE_H} scale={PHN_SCALE}>
              <DeviceIPhone src="/images/game-aof.png" />
            </ScaledDevice>
          </motion.div>

          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            bottom: -16,
            left: '10%',
            right: '10%',
            height: 32,
            background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
        </motion.div>

      </div>
    </section>
  );
}
