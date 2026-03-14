import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)', padding: '28px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>

          <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 20, color: 'var(--text-faint)', letterSpacing: '0.06em' }}>MOJO</span>

          <div style={{ display: 'flex', gap: 24 }}>
            {[
              ['#about', t('nav.about')],
              ['#clubs', t('nav.clubs')],
              ['#how-to-join', t('nav.howToJoin')],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
              >{label}</a>
            ))}
          </div>

          <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} MOJO Poker Club. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
