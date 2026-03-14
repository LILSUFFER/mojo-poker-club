import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { useIsMobile } from '@/hooks/useIsMobile';

export function Footer() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const isMobile = useIsMobile();

  const cols = isRu ? [
    {
      heading: 'Навигация',
      links: [
        { label: 'О нас', href: '/about' },
        { label: 'Как вступить', href: '/join' },
      ],
    },
    {
      heading: 'Клубы',
      links: [
        { label: 'Massiv Poker Union', href: '/clubs/massiv' },
        { label: 'MOJO', href: '/clubs/mojo' },
      ],
    },
    {
      heading: 'Инструкции',
      links: [
        { label: 'Скачать ClubGG', href: '/download' },
        { label: 'Как установить', href: '/install' },
        { label: 'Создать аккаунт', href: '/create-account' },
      ],
    },
    {
      heading: 'Контакты',
      links: [
        { label: '@Mojo_Adm — менеджер', href: 'https://t.me/Mojo_Adm', external: true },
        { label: 'Официальный канал', href: 'https://t.me/MOJOPoker', external: true },
        { label: 'Чат игроков · 1724', href: 'https://t.me/+63QXd66PAuwyNjQ6', external: true },
      ],
    },
  ] : [
    {
      heading: 'Navigation',
      links: [
        { label: 'About', href: '/about' },
        { label: 'How to Join', href: '/join' },
      ],
    },
    {
      heading: 'Clubs',
      links: [
        { label: 'Massiv Poker Union', href: '/clubs/massiv' },
        { label: 'MOJO', href: '/clubs/mojo' },
      ],
    },
    {
      heading: 'Guides',
      links: [
        { label: 'Download ClubGG', href: '/download' },
        { label: 'How to Install', href: '/install' },
        { label: 'Create Account', href: '/create-account' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: '@Mojo_Adm — Manager', href: 'https://t.me/Mojo_Adm', external: true },
        { label: 'Official Channel', href: 'https://t.me/MOJOPoker', external: true },
        { label: 'Player Chat · 1724', href: 'https://t.me/+63QXd66PAuwyNjQ6', external: true },
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
                {isRu
                  ? 'Покерный клуб в сети ClubGG. Премиум столы, честная игра, VIP поддержка 24/7.'
                  : 'Poker club on ClubGG network. Premium tables, fair play, VIP support 24/7.'}
              </p>
            </div>

            {/* 2×2 link columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 40 }}>
              {cols.map(col => (
                <div key={col.heading}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 12 }}>
                    {col.heading}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.links.map(link => (
                      link.external ? (
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
          </>
        ) : (
          /* Desktop: 5-column grid */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto auto', gap: 40, alignItems: 'start', marginBottom: 48 }}>

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
                {isRu
                  ? 'Покерный клуб в сети ClubGG. Премиум столы, честная игра, VIP поддержка 24/7.'
                  : 'Poker club on ClubGG network. Premium tables, fair play, VIP support 24/7.'}
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
                    link.external ? (
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
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-faint)', margin: 0 }}>
            © {new Date().getFullYear()} MOJO Poker Club.{' '}
            {isRu ? 'Все права защищены.' : 'All rights reserved.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--text-faint)', fontWeight: 500 }}>ClubGG Network</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-faint)', display: 'inline-block' }} />
            <span style={{ fontSize: 11, color: 'var(--text-faint)', fontWeight: 500 }}>
              {isRu ? 'Реферальный код:' : 'Referral code:'} 3383-3619
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
