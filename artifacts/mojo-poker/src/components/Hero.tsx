import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

// Native CSS device dimensions (devices.css)
const MACBOOK_W = 740, MACBOOK_H = 434;
const IPHONE_W  = 428, IPHONE_H  = 868;

const MAC_ZOOM = 0.95;   // displayed: 703 × 412 px
const PHN_ZOOM = 0.52;   // displayed: 223 × 451 px

function DeviceMacbook({ src }: { src: string }) {
  return (
    <div className="device device-macbook-pro" style={{ zoom: MAC_ZOOM }}>
      <div className="device-frame">
        <img className="device-screen" src={src} alt="Poker on MacBook"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
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
    <div className="device device-iphone-x" style={{ zoom: PHN_ZOOM }}>
      <div className="device-frame">
        <img className="device-screen" src={src} alt="Poker on iPhone"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
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

  // Zoomed display sizes
  const macW = Math.round(MACBOOK_W * MAC_ZOOM); // 703
  const phnW = Math.round(IPHONE_W  * PHN_ZOOM); // 223
  // iPhone overlaps ~45% of its width onto the MacBook's right edge
  const phnLeft = Math.round(macW - phnW * 0.45); // 603

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: 60,
      background: 'var(--bg)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* ── LEFT column: text centred vertically ── */}
      <div style={{
        position: 'absolute',
        top: 60,
        left: 0,
        bottom: 0,
        width: '44%',
        maxWidth: 560,
        padding: '0 0 0 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
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
          style={{ fontSize: 'clamp(42px, 4.5vw, 68px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.03em' }}
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

      {/* ── RIGHT: Devices anchored to bottom-right, peeking below fold ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        style={{
          position: 'absolute',
          right: -20,          // bleed slightly off right edge
          bottom: -30,         // bleed below fold → only trackpad base is cut
          zIndex: 0,
        }}
      >
        {/* MacBook Pro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            zIndex: 1,
            filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.85))',
          }}
        >
          <DeviceMacbook src="/images/game-plo5.png" />
        </motion.div>

        {/* iPhone X — overlapping MacBook's right portion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            position: 'absolute',
            left: phnLeft,
            bottom: 0,
            zIndex: 2,
            filter: 'drop-shadow(-8px 24px 48px rgba(0,0,0,0.9))',
          }}
        >
          <DeviceIPhone src="/images/phone-nlh.png" />
        </motion.div>

        {/* Spacer to give the absolutely-positioned parent a size */}
        <div style={{
          width: phnLeft + phnW + 40,
          height: Math.round(Math.max(MACBOOK_H * MAC_ZOOM, IPHONE_H * PHN_ZOOM)) + 30,
        }} />
      </motion.div>

    </section>
  );
}
