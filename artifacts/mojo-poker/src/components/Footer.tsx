import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer style={{ background: '#0a0c12', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Main row */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>

          {/* Logo */}
          <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 22, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>MOJO</span>

          {/* Center: links */}
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              ['#about', t('nav.about')],
              ['#clubs', t('nav.clubs')],
              ['#how-to-join', t('nav.howToJoin')],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
              >{label}</a>
            ))}
          </div>

          {/* Right: legal */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
              © {new Date().getFullYear()} MOJO Poker Club. {t('footer.rights')}
            </p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', marginTop: 3 }}>
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 20 }} />

        {/* Powered by ClubGG */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em' }}>
            {language === 'ru' ? 'Работает на платформе' : 'Powered by'}
          </span>
          <a href="https://www.clubgg.com/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', opacity: 0.45, transition: 'opacity 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.45'; }}
          >
            <img src="/images/clubgg-logo.png" alt="ClubGG" style={{ height: 24, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>

      </div>
    </footer>
  );
}
