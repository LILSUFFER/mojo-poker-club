import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

const MACBOOK_W = 740, MACBOOK_H = 434;
const IPHONE_W = 428, IPHONE_H = 868;
const MAC_SCALE = 0.72;
const PHN_SCALE = 0.38;

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
        <img className="device-screen" src={src} alt="Mojo Poker on MacBook" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
        <img className="device-screen" src={src} alt="Mojo Poker on iPhone" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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

  // Computed composition dimensions
  const macW = MACBOOK_W * MAC_SCALE;   // 533px
  const macH = MACBOOK_H * MAC_SCALE;   // 312px
  const phnW = IPHONE_W * PHN_SCALE;    // 163px
  const phnH = IPHONE_H * PHN_SCALE;    // 330px
  const overlap = Math.round(phnW * 0.55); // how far iPhone overlaps MacBook from right edge
  const phnLeft = macW - overlap;          // iPhone left position
  const totalH = Math.max(macH, phnH);

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: 60,
      background: 'var(--bg)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: '48px 48px',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        gap: '5%',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Text ── */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>/// ClubGG Network</span>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            style={{ fontSize: 'clamp(38px, 4.2vw, 62px)', fontWeight: 700, lineHeight: 1.06, marginBottom: 18, letterSpacing: '-0.03em' }}
          >
            <span style={{ color: 'var(--text)', display: 'block' }}>{t('hero.title')}</span>
            <span style={{ color: 'var(--text-muted)', display: 'block' }}>{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            style={{ fontSize: 14, color: 'var(--text-faint)', marginBottom: 32, lineHeight: 1.75 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}
          >
            <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.5)'; el.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.25)'; el.style.background = 'transparent'; }}
            >
              {t('hero.cta')} <ArrowRight size={14} />
            </a>
            <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 4, border: '1px solid var(--border-subtle)', background: 'transparent', color: 'var(--text-muted)', fontWeight: 500, fontSize: 14, textDecoration: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'var(--text)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-muted)'; }}
            >
              <MessageCircle size={14} /> {t('hero.secondaryCta')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38 }}
            style={{ display: 'flex', gap: 32, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}
          >
            {[['5 000+', t('about.stats.players')], ['200+', t('about.stats.tables')], ['24/7', t('about.stats.support')]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{val}</div>
                <div style={{ fontSize: 9, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 5, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Device composition ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            position: 'relative',
            height: totalH + 24,
            minWidth: 0,
          }}
        >
          {/* MacBook Pro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              zIndex: 1,
              filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.75))',
            }}
          >
            <ScaledDevice nativeW={MACBOOK_W} nativeH={MACBOOK_H} scale={MAC_SCALE}>
              <DeviceMacbook src="/images/game-plo5.png" />
            </ScaledDevice>
          </motion.div>

          {/* iPhone X — overlapping right part of MacBook */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            style={{
              position: 'absolute',
              left: phnLeft,
              bottom: 0,
              zIndex: 2,
              filter: 'drop-shadow(-6px 16px 32px rgba(0,0,0,0.9))',
            }}
          >
            <ScaledDevice nativeW={IPHONE_W} nativeH={IPHONE_H} scale={PHN_SCALE}>
              <DeviceIPhone src="/images/phone-nlh.png" />
            </ScaledDevice>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
