import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import SEO from '@/components/SEO';

const CLUBGG_URL = 'https://www.clubgg.com/';

const deviceIcons = {
  android: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.523 15.341a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zm-11.046 0a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zM8.08 5.51l-.953-1.65a.24.24 0 0 1 .088-.328.24.24 0 0 1 .328.088l.965 1.67A6.14 6.14 0 0 1 12 4.656c1.01 0 1.963.244 2.8.666l.965-1.67a.24.24 0 0 1 .328-.088.24.24 0 0 1 .088.328l-.953 1.65A5.905 5.905 0 0 1 17.93 8.64H6.07A5.905 5.905 0 0 1 8.08 5.51zM10.2 7.2a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zm5.36 0a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zM6.07 9.6h11.86v7.296a1.344 1.344 0 0 1-1.344 1.344h-.576v2.4a.96.96 0 0 1-1.92 0V18.24H9.91v2.4a.96.96 0 0 1-1.92 0V18.24h-.576A1.344 1.344 0 0 1 6.07 16.896V9.6z"/>
    </svg>
  ),
  ios: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  pc: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  ),
};

export function Download() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const devices = [
    { id: 'android', label: 'Android', note: t('pages.download.apkNote'), icon: deviceIcons.android },
    { id: 'ios', label: 'iPhone / iPad', note: t('pages.download.officialNote'), icon: deviceIcons.ios },
    { id: 'pc', label: 'Windows / PC', note: t('pages.download.exeNote'), icon: deviceIcons.pc },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/download"
        langs={{
          ru: { title: "Скачать ClubGG — MOJO Poker Club", description: "Скачайте приложение ClubGG для Android, iOS или Windows. Два шага — и вы готовы к игре в клубе MOJO.", keywords: "скачать ClubGG, ClubGG Android, ClubGG iOS, ClubGG Windows" },
          en: { title: "Download ClubGG — MOJO Poker Club", description: "Download the ClubGG app for Android, iOS or Windows. Two steps and you are ready to play at MOJO Poker Club.", keywords: "download ClubGG, ClubGG Android, ClubGG iOS, ClubGG Windows, club poker app" },
          es: { title: "Descargar ClubGG — MOJO Poker Club", description: "Descarga la app ClubGG para Android, iOS o Windows. Dos pasos y estarás listo para jugar en MOJO Poker Club." },
          de: { title: "ClubGG herunterladen — MOJO Poker Club", description: "Lade die ClubGG-App für Android, iOS oder Windows herunter. Zwei Schritte und du bist bereit, im MOJO Poker Club zu spielen." },
          fr: { title: "Télécharger ClubGG — MOJO Poker Club", description: "Téléchargez l'application ClubGG pour Android, iOS ou Windows. Deux étapes et vous êtes prêt à jouer au MOJO Poker Club." },
          it: { title: "Scarica ClubGG — MOJO Poker Club", description: "Scarica l'app ClubGG per Android, iOS o Windows. Due passaggi e sei pronto a giocare al MOJO Poker Club." },
          pt: { title: "Baixar ClubGG — MOJO Poker Club", description: "Baixe o aplicativo ClubGG para Android, iOS ou Windows. Dois passos e você estará pronto para jogar no MOJO Poker Club." },
          ar: { title: "تحميل ClubGG — MOJO Poker Club", description: "نزّل تطبيق ClubGG لنظام Android أو iOS أو Windows. خطوتان وستكون جاهزاً للعب في MOJO Poker Club." },
          hi: { title: "ClubGG डाउनलोड — MOJO Poker Club", description: "Android, iOS या Windows के लिए ClubGG ऐप डाउनलोड करें। दो कदम और आप MOJO Poker Club में खेलने के लिए तैयार हैं।" },
          fa: { title: "دانلود ClubGG — MOJO Poker Club", description: "اپلیکیشن ClubGG را برای Android، iOS یا Windows دانلود کنید. دو مرحله و آماده بازی در MOJO Poker Club هستید." },
          tr: { title: "ClubGG İndir — MOJO Poker Club", description: "Android, iOS veya Windows için ClubGG uygulamasını indirin. İki adım ve MOJO Poker Club'da oynamaya hazırsınız." },
          az: { title: "ClubGG Yüklə — MOJO Poker Club", description: "Android, iOS və ya Windows üçün ClubGG tətbiqini yükləyin. İki addım və MOJO Poker Club-da oynamağa hazırsınız." },
          zh: { title: "下载 ClubGG — MOJO Poker Club", description: "下载适用于 Android、iOS 或 Windows 的 ClubGG 应用。两个步骤，您就可以在 MOJO Poker Club 开始游戏。" },
          ja: { title: "ClubGGをダウンロード — MOJO Poker Club", description: "Android、iOS、またはWindows用のClubGGアプリをダウンロードしてください。2ステップでMOJO Poker Clubでのプレイが始められます。" },
        }}
      />
      <Navbar />

      <PageHeader
        label={t('pages.download.pageTitle')}
        title={t('pages.download.pageTitle')}
        subtitle={t('pages.download.pageSubtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.download.pageTitle') },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '40px 0 60px' : '56px 0 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px', width: '100%', boxSizing: 'border-box' }}>

          {/* Two blocks side by side → stack on mobile */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>

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
                    {t('pages.download.step1Title')}
                  </h2>
                  <p style={{ margin: '0 0 20px', fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.download.step1Desc')}
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
                {t('pages.download.step2Title')}
              </h2>
              <p style={{ margin: '0 0 20px', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                {t('pages.download.step2Desc')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, justifyContent: 'center' }}>
                {devices.map((d) => (
                  <div key={d.id} style={{
                    display: 'flex', alignItems: 'center',
                    padding: '13px 16px', borderRadius: 6,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    gap: 12,
                  }}>
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
                        {d.label}
                      </p>
                      <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>
                        {d.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Next steps */}
          <div style={{ marginTop: 48 }}>
            <p style={{ margin: '0 0 20px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
              {t('pages.download.whatsNext')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>

              <Link href="/create-account" style={{ textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <div style={{
                  padding: '24px 28px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'var(--bg-card)',
                  transition: 'border-color 0.15s',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
                    {t('pages.download.createAccountTitle')}
                  </h3>
                  <p style={{ margin: '0 0 16px', fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.download.createAccountDesc')}
                  </p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
                    {t('pages.download.createAccountLink')}
                  </span>
                </div>
              </Link>

              <Link href="/join" style={{ textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.22)'; }}
              >
                <div style={{
                  padding: '24px 28px',
                  borderRadius: 8,
                  border: '1px solid rgba(220,38,38,0.22)',
                  background: 'rgba(220,38,38,0.04)',
                  transition: 'border-color 0.15s',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(4 80% 55%)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
                    {t('pages.download.joinTitle')}
                  </h3>
                  <p style={{ margin: '0 0 16px', fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.download.joinDesc')}
                  </p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'hsl(4 80% 55%)' }}>
                    {t('pages.download.joinLink')}
                  </span>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
