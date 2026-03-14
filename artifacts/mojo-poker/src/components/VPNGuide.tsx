import { useLanguage } from '@/contexts/LanguageContext';

const VPN_ANDROID = 'https://play.google.com/store/apps/details?id=com.free.vpn.super.hotspot.open';
const VPN_IOS = 'https://apps.apple.com/app/id1370293473';

const countries = [
  { flag: '🇺🇸', name: { ru: 'США', en: 'USA' } },
  { flag: '🇩🇪', name: { ru: 'Германия', en: 'Germany' } },
  { flag: '🇫🇷', name: { ru: 'Франция', en: 'France' } },
  { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: { ru: 'Англия', en: 'England' } },
  { flag: '🇬🇧', name: { ru: 'Великобритания', en: 'United Kingdom' } },
];

const steps = {
  ru: [
    {
      num: 1,
      title: 'Скачайте VPN',
      desc: 'Приложение бесплатное — внизу экрана есть кнопка «Продолжить с рекламой».',
      extra: 'vpn-links',
    },
    {
      num: 2,
      title: 'Отключите Wi-Fi',
      desc: 'Используйте только мобильный интернет. Wi-Fi может передавать реальный регион — это нужно исключить.',
      extra: null,
    },
    {
      num: 3,
      title: 'В VPN выберите страну',
      desc: 'Подключитесь к одной из следующих стран:',
      extra: 'countries',
    },
    {
      num: 4,
      title: 'Откройте ClubGG',
      desc: 'Убедитесь, что VPN активен, затем запустите приложение ClubGG.',
      extra: null,
    },
    {
      num: 5,
      title: 'Выйдите из аккаунта',
      desc: 'Зайдите в свой профиль и нажмите «Выход». Если у вас нет аккаунта — пропустите этот шаг.',
      extra: null,
    },
    {
      num: 6,
      title: 'Зарегистрируйтесь',
      desc: 'Нажмите «Зарегистрироваться» — уже на первом шаге отображается флаг страны, к которой вы подключились через VPN. Это значит, что всё настроено правильно.',
      extra: null,
    },
  ],
  en: [
    {
      num: 1,
      title: 'Download VPN',
      desc: 'The app is free — there\'s a "Continue with Ads" button at the bottom of the screen.',
      extra: 'vpn-links',
    },
    {
      num: 2,
      title: 'Turn Off Wi-Fi',
      desc: 'Use mobile data only. Wi-Fi may expose your real region — this needs to be avoided.',
      extra: null,
    },
    {
      num: 3,
      title: 'Select a Country in VPN',
      desc: 'Connect to one of the following countries:',
      extra: 'countries',
    },
    {
      num: 4,
      title: 'Open ClubGG',
      desc: 'Make sure VPN is active, then launch the ClubGG app.',
      extra: null,
    },
    {
      num: 5,
      title: 'Sign Out',
      desc: 'Go to your profile and tap "Sign Out". If you don\'t have an account yet — skip this step.',
      extra: null,
    },
    {
      num: 6,
      title: 'Register',
      desc: 'Tap "Register" — on the very first step you\'ll see the flag of the country you connected to via VPN. This means everything is set up correctly.',
      extra: null,
    },
  ],
};

export function VPNGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const list = isRu ? steps.ru : steps.en;

  return (
    <div style={{
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid rgba(234,179,8,0.3)',
      background: 'linear-gradient(135deg, rgba(234,179,8,0.07) 0%, rgba(255,255,255,0.01) 100%)',
      marginBottom: 72,
    }}>
      {/* Header */}
      <div style={{
        padding: '18px 28px',
        background: 'rgba(234,179,8,0.12)',
        borderBottom: '1px solid rgba(234,179,8,0.2)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <span style={{ fontSize: 20 }}>⚠️</span>
        <div>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(234,179,8,0.7)', textTransform: 'uppercase', marginBottom: 3 }}>
            {isRu ? 'Только для Massiv Poker Union' : 'For Massiv Poker Union Only'}
          </p>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'rgb(255,210,60)', lineHeight: 1.2 }}>
            {isRu ? 'Как получить американский флаг 🇺🇸 в профиле' : 'How to get the 🇺🇸 American flag in your profile'}
          </h3>
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: '28px 28px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {list.map((step, idx) => (
            <div key={step.num} style={{ display: 'flex', gap: 20, paddingBottom: 28, position: 'relative' }}>
              {/* Connector */}
              {idx < list.length - 1 && (
                <div style={{ position: 'absolute', left: 15, top: 34, width: 1, height: 'calc(100% - 6px)', background: 'rgba(234,179,8,0.2)' }} />
              )}

              {/* Number */}
              <div style={{
                flexShrink: 0,
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(234,179,8,0.15)',
                border: '1px solid rgba(234,179,8,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 800, color: 'rgb(255,210,60)',
                zIndex: 1,
              }}>
                {step.num}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: 5 }}>
                <p style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{step.title}</p>
                <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{step.desc}</p>

                {/* VPN download links */}
                {step.extra === 'vpn-links' && (
                  <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                    <a href={VPN_ANDROID} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '9px 16px', borderRadius: 4, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
                      transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.34l1.43-2.476a.553.553 0 0 0-.203-.755.553.553 0 0 0-.755.203l-1.449 2.508A8.608 8.608 0 0 0 12 14.086a8.608 8.608 0 0 0-4.546 1.734l-1.449-2.508a.553.553 0 0 0-.755-.203.553.553 0 0 0-.203.755l1.43 2.476C4.386 17.438 2.86 19.582 2.86 22h18.28c0-2.418-1.526-4.562-3.617-6.66zM9.017 19.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5.966 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5.145 9.232C5.145 5.783 8.218 3 12 3s6.855 2.783 6.855 6.232c0 3.449-3.073 6.232-6.855 6.232S5.145 12.681 5.145 9.232z"/></svg>
                      Android
                    </a>
                    <a href={VPN_IOS} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '9px 16px', borderRadius: 4, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
                      transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      iPhone
                    </a>
                  </div>
                )}

                {/* Country list */}
                {step.extra === 'countries' && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                    {countries.map(c => (
                      <div key={c.name.en} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '6px 14px', borderRadius: 100,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500,
                      }}>
                        <span>{c.flag}</span>
                        <span>{isRu ? c.name.ru : c.name.en}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
