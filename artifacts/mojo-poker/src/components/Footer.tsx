import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { useIsMobile } from '@/hooks/useIsMobile';

function TelegramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

const TG_CHANNELS = [
  { flag: 'ru', label: 'Русский канал', href: 'https://t.me/+gPq_KS_WWXJhZDc6' },
  { flag: 'gb', label: 'English channel', href: 'https://t.me/+05mQbZgpoEc1MDVi' },
  { flag: 'tr', label: 'Türkçe kanal',   href: 'https://t.me/+lwRi6Qatepw1ZDY6' },
];

export function Footer() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const cols = [
    {
      heading: t('footer.navHeading'),
      links: [
        { label: t('footer.aboutLink'), href: '/about' },
        { label: t('footer.joinLink'), href: '/join' },
        { label: t('nav.games'), href: '/games' },
      ],
    },
    {
      heading: t('footer.clubsHeading'),
      links: [
        { label: 'Massiv Poker Union', href: '/clubs/massiv' },
        { label: 'MOJO', href: '/clubs/mojo' },
      ],
    },
    {
      heading: t('footer.guidesHeading'),
      links: [
        { label: t('footer.downloadLink'), href: '/download' },
        { label: t('footer.installLink'), href: '/install' },
        { label: t('footer.createAccountLink'), href: '/create-account' },
      ],
    },
    {
      heading: t('footer.contactHeading'),
      links: [
        { label: t('footer.managerLink'), href: '/support', external: false },
      ],
    },
  ];

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)', paddingTop: 56, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>

        {/* Top row: logo + columns */}
        {isMobile ? (
          /* Mobile: brand on top, then 2-column link grid */
          <>
            {/* Brand */}
            <div style={{ marginBottom: 32 }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 14 }}>
                <img src="/images/mojo-logo.svg" alt="MOJO Poker Club" style={{ height: 32, width: 'auto', display: 'block' }} />
                <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
                <img
                  src="/images/massiv-union-logo-nobg.png"
                  alt="Massiv Union ClubGG"
                  style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.62 }}
                />
              </Link>
              <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
                {t('download.note')}
              </p>
            </div>

            {/* 2×2 link columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
              {cols.map(col => (
                <div key={col.heading}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 12 }}>
                    {col.heading}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.links.map(link => (
                      (link as any).external ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none' }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none' }}
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Telegram channels — mobile */}
            <div style={{ marginBottom: 40, padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                <TelegramIcon size={14} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                  Telegram
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {TG_CHANNELS.map(ch => (
                  <a
                    key={ch.href}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none' }}
                  >
                    <span className={`fi fi-${ch.flag}`} style={{ width: 16, height: 12, borderRadius: 2, flexShrink: 0 }} />
                    {ch.label}
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Desktop: 6-column grid */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto auto auto', gap: 40, alignItems: 'start', marginBottom: 48 }}>

            {/* Brand */}
            <div>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 14 }}>
                <img src="/images/mojo-logo.svg" alt="MOJO Poker Club" style={{ height: 32, width: 'auto', display: 'block' }} />
                <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
                <img
                  src="/images/massiv-union-logo-nobg.png"
                  alt="Massiv Union ClubGG"
                  style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.62 }}
                />
              </Link>
              <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.6, maxWidth: 220, margin: 0 }}>
                {t('footer.tagline')}
              </p>
            </div>

            {/* Link columns */}
            {cols.map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
                  {col.heading}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(link => (
                    (link as any).external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none', transition: 'color 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none', transition: 'color 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Telegram channels column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                <TelegramIcon size={13} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                  Telegram
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {TG_CHANNELS.map(ch => (
                  <a
                    key={ch.href}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                  >
                    <span className={`fi fi-${ch.flag}`} style={{ width: 16, height: 12, borderRadius: 2, flexShrink: 0 }} />
                    {ch.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-faint)', margin: 0 }}>
            © {new Date().getFullYear()} MOJO Poker Club.{' '}
            {t('footer.rights')}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--text-faint)', fontWeight: 500 }}>ClubGG Network</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-faint)', display: 'inline-block' }} />
            <span style={{ fontSize: 11, color: 'var(--text-faint)', fontWeight: 500 }}>
              {t('footer.referralCode')} 3383-3619
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
