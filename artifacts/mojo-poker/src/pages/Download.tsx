import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M17.523 15.341a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zm-11.046 0a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zM8.08 5.51l-.953-1.65a.24.24 0 0 1 .088-.328.24.24 0 0 1 .328.088l.965 1.67A6.14 6.14 0 0 1 12 4.656c1.01 0 1.963.244 2.8.666l.965-1.67a.24.24 0 0 1 .328-.088.24.24 0 0 1 .088.328l-.953 1.65A5.905 5.905 0 0 1 17.93 8.64H6.07A5.905 5.905 0 0 1 8.08 5.51zM10.2 7.2a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zm5.36 0a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zM6.07 9.6h11.86v7.296a1.344 1.344 0 0 1-1.344 1.344h-.576v2.4a.96.96 0 0 1-1.92 0V18.24H9.91v2.4a.96.96 0 0 1-1.92 0V18.24h-.576A1.344 1.344 0 0 1 6.07 16.896V9.6z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

export function Download() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const platforms = [
    {
      id: 'android',
      icon: <AndroidIcon />,
      label: 'ANDROID',
      sublabel: isRu ? 'APK • Прямая установка' : 'APK • Direct Install',
      title: isRu ? 'Скачать для Android' : 'Download for Android',
      note: isRu ? 'Потребуется разрешить установку из неизвестных источников' : 'You\'ll need to allow installation from unknown sources',
      url: 'https://clp.gg/v2hVq',
      btn: isRu ? 'Скачать APK' : 'Download APK',
      accent: true,
    },
    {
      id: 'ios',
      icon: <AppleIcon />,
      label: 'iOS / iPadOS',
      sublabel: isRu ? 'App Store • Официальное' : 'App Store • Official',
      title: isRu ? 'Скачать для iPhone' : 'Download for iPhone',
      note: isRu ? 'Устанавливается напрямую через App Store' : 'Installed directly through the App Store',
      url: 'https://clp.gg/6jJ5A',
      btn: isRu ? 'Открыть App Store' : 'Open App Store',
      accent: false,
    },
    {
      id: 'pc',
      icon: <WindowsIcon />,
      label: 'WINDOWS / PC',
      sublabel: isRu ? 'Desktop • EXE файл' : 'Desktop • EXE file',
      title: isRu ? 'Скачать для PC' : 'Download for PC',
      note: isRu ? 'Стандартная установка через EXE установщик' : 'Standard installation via EXE installer',
      url: 'https://clp.gg/GDaqG',
      btn: isRu ? 'Скачать установщик' : 'Download Installer',
      accent: false,
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label={isRu ? 'Загрузка' : 'Download'}
        title={isRu ? 'Скачать ClubGG' : 'Download ClubGG'}
        subtitle={isRu ? 'Выберите платформу — установка займёт пару минут.' : 'Pick your platform — setup takes just a few minutes.'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Скачать' : 'Download' },
        ]}
      />

      <main style={{ flex: 1, padding: '72px 32px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {platforms.map(p => (
              <div key={p.id} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 8,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
                {/* Top row: icon + badge */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 8,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    {p.icon}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{p.label}</p>
                    <p style={{ margin: '4px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>{p.sublabel}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  {p.title}
                </h3>

                {/* Note */}
                <p style={{ margin: '0 0 32px', fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, flex: 1 }}>
                  {p.note}
                </p>

                {/* CTA */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '13px 24px',
                    borderRadius: 4,
                    background: p.accent ? 'hsl(4 80% 45%)' : 'transparent',
                    border: p.accent ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    color: p.accent ? 'white' : 'rgba(255,255,255,0.7)',
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    if (p.accent) { el.style.background = 'hsl(4 80% 38%)'; }
                    else { el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'white'; }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    if (p.accent) { el.style.background = 'hsl(4 80% 45%)'; }
                    else { el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.7)'; }
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {p.btn}
                </a>
              </div>
            ))}
          </div>

          {/* Bottom hint */}
          <p style={{ marginTop: 40, textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.01em' }}>
            {isRu
              ? 'После установки — вступите в клуб MOJO через раздел «Как вступить»'
              : 'After install — join the MOJO club via the "How to Join" section'}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
