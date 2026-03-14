import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: '#0a0c12', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '36px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: 'hsl(25 95% 53%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 900, fontSize: 13, color: 'white' }}>M</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 16, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>MOJO</span>
        </div>

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
    </footer>
  );
}
