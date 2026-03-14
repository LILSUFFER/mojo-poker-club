import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const DOWNLOAD_URL = 'https://clubgg.app.link/MsyuYMuWu1b';
const CLUBGG_URL = 'https://www.clubgg.net/';

const devices = [
  {
    id: 'android',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
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
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    labelRu: 'iPhone / iPad',
    labelEn: 'iPhone / iPad',
    noteRu: 'App Store · официальное',
    noteEn: 'App Store · official',
  },
  {
    id: 'pc',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
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

      <main style={{ flex: 1, padding: '72px 0 100px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>

          {/* Block 1 */}
          <div style={{
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--bg-card)',
            overflow: 'hidden',
            marginBottom: 20,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 280 }}>
              {/* Left: text */}
              <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'hsl(4 80% 45%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 20, flexShrink: 0,
                }}>1</div>
                <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                  {isRu ? 'Перейдите на страницу GGClub' : 'Go to the GGClub website'}
                </h2>
                <p style={{ margin: '0 0 24px', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)' }}>
                  {isRu
                    ? 'Откройте официальный сайт GGClub — там вы найдёте актуальные ссылки для загрузки под любую платформу.'
                    : 'Open the official GGClub website — there you\'ll find the latest download links for any platform.'}
                </p>
                <a
                  href={CLUBGG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '11px 22px', borderRadius: 4, textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600,
                    transition: 'all 0.15s', alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  clubgg.net →
                </a>
              </div>

              {/* Right: screenshot */}
              <div style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <img
                  src="/images/clubgg-hero.png"
                  alt="ClubGG"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                    opacity: 0.85,
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, rgba(20,20,22,0.4) 0%, transparent 60%)',
                }} />
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div style={{
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--bg-card)',
            overflow: 'hidden',
            marginBottom: 40,
          }}>
            <div style={{ padding: '40px 40px 36px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'hsl(4 80% 45%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 20, flexShrink: 0,
              }}>2</div>
              <h2 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {isRu ? 'Скачайте приложение' : 'Download the app'}
              </h2>
              <p style={{ margin: '0 0 28px', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                {isRu
                  ? 'Доступно для Android, iPhone и Windows. Нажмите кнопку — она ведёт на официальную страницу загрузки ClubGG.'
                  : 'Available for Android, iPhone and Windows. The button leads to the official ClubGG download page.'}
              </p>

              {/* Device rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {devices.map((d) => (
                  <div key={d.id} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', borderRadius: 6,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    gap: 16, flexWrap: 'wrap',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 6,
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(255,255,255,0.6)', flexShrink: 0,
                      }}>
                        {d.icon}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'white' }}>
                          {isRu ? d.labelRu : d.labelEn}
                        </p>
                        <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                          {isRu ? d.noteRu : d.noteEn}
                        </p>
                      </div>
                    </div>
                    <a
                      href={DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 18px', borderRadius: 4, textDecoration: 'none',
                        background: d.id === 'android' ? 'hsl(4 80% 45%)' : 'transparent',
                        border: d.id === 'android' ? 'none' : '1px solid rgba(255,255,255,0.15)',
                        color: d.id === 'android' ? 'white' : 'rgba(255,255,255,0.7)',
                        fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (d.id === 'android') el.style.background = 'hsl(4 80% 38%)';
                        else { el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'white'; }
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (d.id === 'android') el.style.background = 'hsl(4 80% 45%)';
                        else { el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.7)'; }
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      {isRu ? 'Скачать' : 'Download'}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom hint */}
          <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            {isRu ? 'После установки — вступите в клуб через раздел ' : 'After install — join the club via '}
            <Link href="/join" style={{ color: 'hsl(220 5% 62%)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 600 }}>
              {isRu ? '«Вступление в клуб»' : '"Join the Club"'}
            </Link>
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
}
