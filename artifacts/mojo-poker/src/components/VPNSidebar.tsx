import { useLanguage } from '@/contexts/LanguageContext';

const VPN_ANDROID = 'https://play.google.com/store/apps/details?id=com.free.vpn.super.hotspot.open';
const VPN_IOS = 'https://apps.apple.com/app/id1370293473';

const countries = [
  { code: 'US', ru: 'США', en: 'USA' },
  { code: 'DE', ru: 'Германия', en: 'Germany' },
  { code: 'FR', ru: 'Франция', en: 'France' },
  { code: 'GB', ru: 'Великобритания', en: 'UK' },
  { code: 'CA', ru: 'Канада', en: 'Canada' },
];

function FlagImg({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
      width="20" height="14" alt={code}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: 2, objectFit: 'cover', flexShrink: 0 }}
    />
  );
}

export function VPNSidebar() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const steps = isRu ? [
    'Подключите VPN и выберите страну из списка',
    'Зарегистрируйте аккаунт ClubGG',
    'Отключите VPN',
    'Заходите в ClubGG — VPN больше не нужен',
  ] : [
    'Connect VPN and select a country from the list',
    'Register your ClubGG account',
    'Disconnect VPN',
    'Log into ClubGG — no VPN needed anymore',
  ];

  return (
    <div style={{
      position: 'sticky',
      top: 100,
      width: 300,
      flexShrink: 0,
    }}>
      <div style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'hsl(220 10% 13%)',
      }}>

        {/* Red top accent bar */}
        <div style={{
          padding: '14px 18px',
          background: 'hsl(4 80% 42%)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
            {isRu ? 'Внимание — только для Massiv Union' : 'Attention — Massiv Union only'}
          </p>
        </div>

        <div style={{ padding: '16px 18px' }}>

          {/* Logo + notice */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <img
              src="/images/massiv-union-logo-nobg.png"
              alt="Massiv Poker Union"
              style={{ width: 36, height: 36, objectFit: 'contain', flexShrink: 0 }}
            />
            <div>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Massiv Poker Union</p>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.65)', lineHeight: 1.35 }}>
                {isRu ? 'Обязательное условие для регистрации' : 'Required for registration'}
              </p>
            </div>
          </div>

          {/* Warning text */}
          <div style={{
            padding: '10px 12px',
            borderRadius: 6,
            background: 'rgba(220,38,38,0.08)',
            border: '1px solid rgba(220,38,38,0.2)',
            marginBottom: 16,
          }}>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
              {isRu
                ? 'Если вы не находитесь в одной из стран ниже — аккаунт нужно регистрировать обязательно через VPN. Иначе — блокировка.'
                : 'If you are not in one of the countries below — you must register your account using VPN. Otherwise — account ban.'}
            </p>
          </div>

          {/* How to: 4 steps */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ margin: '0 0 10px', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              {isRu ? 'Порядок действий' : 'How to do it'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 18, height: 18, borderRadius: '50%',
                    background: i === steps.length - 1 ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.07)',
                    border: `1px solid ${i === steps.length - 1 ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.12)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 800,
                    color: i === steps.length - 1 ? 'rgb(34,197,94)' : 'rgba(255,255,255,0.45)',
                    marginTop: 1,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)' }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 16 }} />

          {/* Download VPN */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ margin: '0 0 8px', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              {isRu ? 'Скачать VPN' : 'Download VPN'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                {
                  href: VPN_ANDROID,
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.34l1.43-2.476a.553.553 0 0 0-.203-.755.553.553 0 0 0-.755.203l-1.449 2.508A8.608 8.608 0 0 0 12 14.086a8.608 8.608 0 0 0-4.546 1.734l-1.449-2.508a.553.553 0 0 0-.755-.203.553.553 0 0 0-.203.755l1.43 2.476C4.386 17.438 2.86 19.582 2.86 22h18.28c0-2.418-1.526-4.562-3.617-6.66zM9.017 19.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5.966 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5.145 9.232C5.145 5.783 8.218 3 12 3s6.855 2.783 6.855 6.232c0 3.449-3.073 6.232-6.855 6.232S5.145 12.681 5.145 9.232z"/></svg>,
                  label: 'Android',
                },
                {
                  href: VPN_IOS,
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
                  label: 'iPhone',
                },
              ].map(btn => (
                <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 12px', borderRadius: 4, textDecoration: 'none',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                  fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}>
                  {btn.icon}
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              {isRu ? 'Страны — VPN не нужен' : 'Countries — no VPN needed'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {countries.map(c => (
                <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FlagImg code={c.code} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', minWidth: 20 }}>{c.code}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{isRu ? c.ru : c.en}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
