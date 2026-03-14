import { useLanguage } from '@/contexts/LanguageContext';

const VPN_ANDROID = 'https://play.google.com/store/apps/details?id=com.free.vpn.super.hotspot.open';
const VPN_IOS = 'https://apps.apple.com/app/id1370293473';

const countries = [
  { flag: '🇺🇸', ru: 'США', en: 'USA' },
  { flag: '🇩🇪', ru: 'Германия', en: 'Germany' },
  { flag: '🇫🇷', ru: 'Франция', en: 'France' },
  { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', ru: 'Англия', en: 'England' },
  { flag: '🇬🇧', ru: 'Великобритания', en: 'UK' },
];

export function VPNGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const steps = isRu ? [
    { num: 1, text: 'Скачайте бесплатный VPN (кнопка «Продолжить с рекламой»)' },
    { num: 2, text: 'Отключите Wi-Fi — используйте только мобильный интернет' },
    { num: 3, text: 'Выберите страну в VPN из списка справа' },
    { num: 4, text: 'Подключитесь к VPN, затем откройте ClubGG' },
    { num: 5, text: 'Зайдите в профиль → нажмите «Выход»' },
    { num: 6, text: 'Нажмите «Зарегистрироваться» — на первом шаге увидите флаг страны VPN' },
  ] : [
    { num: 1, text: 'Download a free VPN (tap "Continue with Ads")' },
    { num: 2, text: 'Turn off Wi-Fi — use mobile data only' },
    { num: 3, text: 'Select a country in VPN from the list on the right' },
    { num: 4, text: 'Connect VPN, then open ClubGG' },
    { num: 5, text: 'Go to profile → tap "Sign Out"' },
    { num: 6, text: 'Tap "Register" — you\'ll see the VPN country flag on step one' },
  ];

  return (
    <div style={{
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid rgba(234,179,8,0.3)',
      background: 'linear-gradient(135deg, rgba(234,179,8,0.06) 0%, rgba(255,255,255,0.01) 100%)',
      marginBottom: 72,
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 24px',
        background: 'rgba(234,179,8,0.1)',
        borderBottom: '1px solid rgba(234,179,8,0.18)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 14 }}>⚠️</span>
        <div>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(234,179,8,0.6)', textTransform: 'uppercase' }}>
            {isRu ? 'Только для Massiv Poker Union · ' : 'Massiv Poker Union only · '}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'rgb(255,210,60)' }}>
            {isRu ? 'Как получить американский флаг 🇺🇸 в профиле' : 'How to get 🇺🇸 US flag in your profile'}
          </span>
        </div>
      </div>

      {/* Body: two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 0 }}>

        {/* Left: steps */}
        <div style={{ padding: '20px 24px', borderRight: '1px solid rgba(234,179,8,0.12)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0,
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(234,179,8,0.15)',
                  border: '1px solid rgba(234,179,8,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 800, color: 'rgb(255,200,50)',
                  marginTop: 1,
                }}>
                  {step.num}
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: VPN links + countries */}
        <div style={{ padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* VPN links */}
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(234,179,8,0.5)', textTransform: 'uppercase' }}>
              {isRu ? 'Скачать VPN' : 'Download VPN'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href={VPN_ANDROID} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px', borderRadius: 4, textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.34l1.43-2.476a.553.553 0 0 0-.203-.755.553.553 0 0 0-.755.203l-1.449 2.508A8.608 8.608 0 0 0 12 14.086a8.608 8.608 0 0 0-4.546 1.734l-1.449-2.508a.553.553 0 0 0-.755-.203.553.553 0 0 0-.203.755l1.43 2.476C4.386 17.438 2.86 19.582 2.86 22h18.28c0-2.418-1.526-4.562-3.617-6.66zM9.017 19.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5.966 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5.145 9.232C5.145 5.783 8.218 3 12 3s6.855 2.783 6.855 6.232c0 3.449-3.073 6.232-6.855 6.232S5.145 12.681 5.145 9.232z"/></svg>
                Android
              </a>
              <a href={VPN_IOS} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px', borderRadius: 4, textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                iPhone
              </a>
            </div>
          </div>

          {/* Countries */}
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(234,179,8,0.5)', textTransform: 'uppercase' }}>
              {isRu ? 'Страны VPN' : 'VPN Countries'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {countries.map(c => (
                <div key={c.en} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                  <span>{c.flag}</span>
                  <span>{isRu ? c.ru : c.en}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
