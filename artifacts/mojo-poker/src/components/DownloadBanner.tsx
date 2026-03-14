import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const GGCLUB_URL = 'https://clubgg.app.link/MsyuYMuWu1b';

function AndroidIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9.045 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M2.94 8.627l1.553-2.69A1 1 0 0 1 6.22 5.5l1.48 2.564A9.014 9.014 0 0 0 3 14H21a9.014 9.014 0 0 0-4.7-5.936L17.78 5.5a1 1 0 0 1 1.727 1.007l-1.432 2.467C20.023 10.26 21 12.02 21 14v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1c0-1.98.977-3.74 2.94-5.373z"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.557L10.025 4.6v6.95H3V5.557zm0 12.886L10.025 19.4v-6.85H3v5.893zM10.975 4.45L21 3v8.55h-10.025V4.45zm0 15.1v-6.95H21V21l-10.025-1.45z"/>
    </svg>
  );
}

export function DownloadBanner() {
  const { t, language } = useLanguage();

  const isRu = language === 'ru';

  const platforms = [
    {
      icon: <AndroidIcon />,
      label: isRu ? 'Скачать APK' : 'Download APK',
      sub: 'Android',
      href: GGCLUB_URL,
    },
    {
      icon: <AppleIcon />,
      label: isRu ? 'App Store' : 'App Store',
      sub: 'iOS / iPadOS',
      href: GGCLUB_URL,
    },
    {
      icon: <WindowsIcon />,
      label: isRu ? 'Скачать .exe' : 'Download .exe',
      sub: 'Windows / PC',
      href: GGCLUB_URL,
    },
  ];

  return (
    <section style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '72px 0 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 16 }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            /// {isRu ? 'Скачать приложение' : 'Download App'}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}
        >
          {isRu ? 'Скачать сейчас' : 'Download Now'}
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 13, color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 48 }}
        >
          {isRu ? 'Покупка не требуется' : 'No purchase required'}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {platforms.map(({ icon, label, sub, href }) => (
            <a
              key={sub}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 28px',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.03)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.15s',
                minWidth: 200,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.35)';
                el.style.background = 'rgba(255,255,255,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.18)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>{icon}</span>
              <span style={{ textAlign: 'left' }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{sub}</span>
                <span style={{ display: 'block', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em' }}>{label}</span>
              </span>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
