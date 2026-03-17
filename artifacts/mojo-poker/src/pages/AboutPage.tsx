import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import SEO from '@/components/SEO';

const TG_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
  </svg>
);

export function AboutPage() {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/about"
        ru={{
          title: 'О нас — MOJO Poker Club',
          description: 'MOJO Poker Club — официальный агент в сети GGClub и Massiv Poker Union. Рейкбек, поддержка, выгодные условия для покеристов. Контакт: @Mojo_Adm.',
          keywords: 'MOJO Poker Club о нас, GGClub агент, Massiv Poker Union агент, покер поддержка, @Mojo_Adm',
        }}
        en={{
          title: 'About Us — MOJO Poker Club',
          description: 'MOJO Poker Club — official agent on GGClub and Massiv Poker Union network. Rakeback, support, best conditions for poker players. Contact: @Mojo_Adm.',
          keywords: 'MOJO Poker Club about, GGClub agent, Massiv Poker Union agent, poker support, Telegram Mojo_Adm',
        }}
      />
      <Navbar />
      <PageHeader
        label={t('pages.about.label')}
        title='MOJO Poker Club'
        subtitle={t('pages.about.pageSubtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.about.label') },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '40px 0 64px' : '72px 0 100px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px' }}>

          {/* Main info */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48, marginBottom: isMobile ? 48 : 72, alignItems: 'start' }}>

            {/* Left: about text */}
            <div>
              <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
                {t('pages.about.whoWeAre')}
              </p>
              <h2 style={{ margin: '0 0 20px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {t('pages.about.heading')}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                  {t('pages.about.para1')}
                </p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                  {t('pages.about.para2')}
                </p>
              </div>
            </div>

            {/* Right: stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { value: '2025', label: t('pages.about.founded'), sub: t('pages.about.foundedSub') },
                { value: '1 724', label: t('pages.about.chatMembers'), sub: t('pages.about.chatSub') },
                { value: '50%', label: t('pages.about.rakeback'), sub: t('pages.about.rakebackSub') },
                { value: '24/7', label: t('pages.about.support'), sub: t('pages.about.supportSub') },
              ].map((item) => (
                <div key={item.value} style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '16px 20px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: 'white', minWidth: 64, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                    {item.value}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{item.label}</p>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 56 }} />

          {/* Telegram community */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 24px', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
              {t('pages.about.community')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              <a
                href="https://t.me/MOJOPoker"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '24px 28px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    {TG_ICON}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Telegram</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: 'white' }}>
                    {t('pages.about.officialChannel')}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>@MOJOPoker</p>
                </div>
              </a>

              <a
                href="https://t.me/+63QXd66PAuwyNjQ6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '24px 28px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    {TG_ICON}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Telegram</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: 'white' }}>
                    {t('pages.about.playerChat')}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                    1 724 {t('pages.about.members')}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Massiv Union mention */}
          <div style={{
            padding: isMobile ? '20px' : '28px 32px', borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 16 : 24,
          }}>
            <img
              src="/images/massiv-union-logo-nobg.png"
              alt="Massiv Union"
              style={{ width: isMobile ? 70 : 100, height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.35, flexShrink: 0 }}
            />
            <div>
              <p style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
                {t('pages.about.officialPartner')}
              </p>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)' }}>
                {t('pages.about.massivDesc')}
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
