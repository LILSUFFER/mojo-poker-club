import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const DOWNLOAD_URL = 'https://clubgg.app.link/MsyuYMuWu1b';
const CLUBGG_URL = 'https://www.clubgg.com/';

const devices = [
  {
    id: 'android',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17.523 15.341a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zm-11.046 0a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zM8.08 5.51l-.953-1.65a.24.24 0 0 1 .088-.328.24.24 0 0 1 .328.088l.965 1.67A6.14 6.14 0 0 1 12 4.656c1.01 0 1.963.244 2.8.666l.965-1.67a.24.24 0 0 1 .328-.088.24.24 0 0 1 .088.328l-.953 1.65A5.905 5.905 0 0 1 17.93 8.64H6.07A5.905 5.905 0 0 1 8.08 5.51zM10.2 7.2a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zm5.36 0a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zM6.07 9.6h11.86v7.296a1.344 1.344 0 0 1-1.344 1.344h-.576v2.4a.96.96 0 0 1-1.92 0V18.24H9.91v2.4a.96.96 0 0 1-1.92 0V18.24h-.576A1.344 1.344 0 0 1 6.07 16.896V9.6z"/>
      </svg>
    ),
    labelRu: 'Android',
    labelEn: 'Android',
    noteRu: 'APK · прямая установка',
    noteEn: 'APK · direct install',
  },
  {
    id: 'ios',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    labelRu: 'iPhone / iPad',
    labelEn: 'iPhone / iPad',
    noteRu: 'App Store · официально',
    noteEn: 'App Store · official',
  },
  {
    id: 'pc',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
      </svg>
    ),
    labelRu: 'Windows / PC',
    labelEn: 'Windows / PC',
    noteRu: 'Desktop · EXE файл',
    noteEn: 'Desktop · EXE file',
  },
];

export function Download() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <PageHeader
        label={isRu ? 'Загрузка' : 'Download'}
        title={isRu ? 'Скачать ClubGG' : 'Download ClubGG'}
        subtitle={isRu ? 'Два шага — и вы готовы к игре.' : 'Two steps — and you\'re ready to play.'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Скачать' : 'Download' },
        ]}
      />

      <main style={{ flex: 1, padding: '56px 0 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px', width: '100%' }}>

          {/* Two blocks side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

            {/* Block 1 */}
            <div style={{
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'var(--bg-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', height: 180, overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src="/images/clubgg-hero.png"
                  alt="ClubGG"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', opacity: 0.85 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,22,0.85) 0%, transparent 60%)' }} />
              </div>

              {/* Content */}
              <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 30, height: 30, borderRadius: '50%',
                    background: 'hsl(4 80% 45%)',
                    fontSize: 13, fontWeight: 800, color: 'white', marginBottom: 14,
                  }}>1</div>
                  <h2 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
                    {isRu ? 'Перейдите на страницу GGClub' : 'Go to the GGClub website'}
                  </h2>
                  <p style={{ margin: '0 0 20px', fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)' }}>
                    {isRu
                      ? 'Откройте официальный сайт GGClub — там актуальные ссылки для загрузки под любую платформу.'
                      : 'Open the official GGClub website — it has the latest download links for every platform.'}
                  </p>
                </div>
                <a
                  href={CLUBGG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    padding: '10px 18px', borderRadius: 4, textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600,
                    alignSelf: 'flex-start', transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  clubgg.com →
                </a>
              </div>
            </div>

            {/* Block 2 */}
            <div style={{
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'var(--bg-card)',
              padding: '24px 28px 28px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 30, height: 30, borderRadius: '50%',
                background: 'hsl(4 80% 45%)',
                fontSize: 13, fontWeight: 800, color: 'white', marginBottom: 14,
              }}>2</div>
              <h2 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
                {isRu ? 'Скачайте приложение' : 'Download the app'}
              </h2>
              <p style={{ margin: '0 0 20px', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                {isRu
                  ? 'Доступно для Android, iPhone и Windows.'
                  : 'Available for Android, iPhone and Windows.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, justifyContent: 'center' }}>
                {devices.map((d) => (
                  <div key={d.id} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '13px 16px', borderRadius: 6,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    gap: 12,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 6,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(255,255,255,0.55)', flexShrink: 0,
                      }}>
                        {d.icon}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'white' }}>
                          {isRu ? d.labelRu : d.labelEn}
                        </p>
                        <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>
                          {isRu ? d.noteRu : d.noteEn}
                        </p>
                      </div>
                    </div>
                    <a
                      href={DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 14px', borderRadius: 4, textDecoration: 'none',
                        background: d.id === 'android' ? 'hsl(4 80% 45%)' : 'transparent',
                        border: d.id === 'android' ? 'none' : '1px solid rgba(255,255,255,0.14)',
                        color: d.id === 'android' ? 'white' : 'rgba(255,255,255,0.65)',
                        fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (d.id === 'android') el.style.background = 'hsl(4 80% 38%)';
                        else { el.style.borderColor = 'rgba(255,255,255,0.32)'; el.style.color = 'white'; }
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (d.id === 'android') el.style.background = 'hsl(4 80% 45%)';
                        else { el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.color = 'rgba(255,255,255,0.65)'; }
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      {isRu ? 'Скачать' : 'Download'}
                    </a>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 20, fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
                {isRu ? 'После установки → ' : 'After install → '}
                <Link href="/join" style={{ color: 'hsl(220 5% 55%)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 600 }}>
                  {isRu ? 'Как вступить в клуб' : 'How to Join'}
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
