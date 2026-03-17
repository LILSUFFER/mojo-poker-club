import { useLanguage } from '@/contexts/LanguageContext';

const VPN_ANDROID = 'https://play.google.com/store/apps/details?id=com.free.vpn.super.hotspot.open';
const VPN_IOS = 'https://apps.apple.com/app/id1370293473';

const countries = [
  { code: 'US', tKey: 'pages.vpn.usa' },
  { code: 'DE', tKey: 'pages.vpn.germany' },
  { code: 'FR', tKey: 'pages.vpn.france' },
  { code: 'GB', tKey: 'pages.vpn.uk' },
  { code: 'CA', tKey: 'pages.vpn.canada' },
];

function FlagImg({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
      width="22"
      height="16"
      alt={code}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: 2, objectFit: 'cover' }}
    />
  );
}

export function VPNGuide() {
  const { language, t } = useLanguage();

  const steps = [
    { num: 1, text: t('pages.vpn.howStep1') },
    { num: 2, text: t('pages.vpn.howStep2') },
    { num: 3, text: t('pages.vpn.howStep3') },
    { num: 4, text: t('pages.vpn.howStep4') },
    { num: 5, text: t('pages.vpn.howStep5') },
    { num: 6, text: t('pages.vpn.howStep6') },
  ];

  const blue = 'hsl(217 91% 60%)';
  const blueAlpha = (a: number) => `rgba(59,130,246,${a})`;

  return (
    <div style={{
      borderRadius: 8,
      overflow: 'hidden',
      border: `1px solid ${blueAlpha(0.28)}`,
      background: `linear-gradient(135deg, ${blueAlpha(0.06)} 0%, rgba(255,255,255,0.01) 100%)`,
      marginBottom: 72,
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 24px',
        background: blueAlpha(0.1),
        borderBottom: `1px solid ${blueAlpha(0.18)}`,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: blueAlpha(0.6), textTransform: 'uppercase' }}>
            {t('pages.vpn.flagSub')} · 
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: blue }}>
            {t('pages.vpn.flagTitle')}
          </span>
        </div>
      </div>

      {/* Body: two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 0 }}>

        {/* Left: steps */}
        <div style={{ padding: '20px 24px', borderRight: `1px solid ${blueAlpha(0.12)}` }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0,
                  width: 22, height: 22, borderRadius: '50%',
                  background: blueAlpha(0.15),
                  border: `1px solid ${blueAlpha(0.3)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 800, color: blue,
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
            <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: blueAlpha(0.55), textTransform: 'uppercase' }}>
              {t('pages.vpn.downloadVpn')}
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
            <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: blueAlpha(0.55), textTransform: 'uppercase' }}>
              {t('pages.vpn.countriesTitle')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {countries.map(c => (
                <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                  <FlagImg code={c.code} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: blueAlpha(0.5), textTransform: 'uppercase', minWidth: 18 }}>{c.code}</span>
                  <span>{t(c.tKey)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
