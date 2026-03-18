import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import SEO from '@/components/SEO';
import { useIsMobile } from '@/hooks/useIsMobile';
import { JoinNextSteps } from '@/components/JoinNextSteps';

const CLUB_ID = '356323';
const REF_CODE = '3383-3619';

function CopyBtn({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const click = () => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={click} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '6px 12px', borderRadius: 4, cursor: 'pointer',
      border: `1px solid ${copied ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.12)'}`,
      background: copied ? 'rgba(34,197,94,0.07)' : 'transparent',
      color: copied ? '#22c55e' : 'rgba(255,255,255,0.4)',
      fontSize: 11, fontWeight: 600, transition: 'all 0.15s', whiteSpace: 'nowrap',
    }}>
      {copied ? <><CheckCircle2 size={11} /> {copiedLabel}</> : <><Copy size={11} /> {label}</>}
    </button>
  );
}

export function ClubMojo() {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();

  const featureIcons = [
    /* chip 1:1 */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="3" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="21" y2="12"/>
    </svg>,
    /* rakeback % */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
      <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" strokeDasharray="4 4"/>
    </svg>,
    /* exclusive tables / lock */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>,
    /* 24/7 clock */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
    </svg>,
  ];

  const features = [
    { title: t('pages.mojo.feat1Title'), desc: t('pages.mojo.feat1Desc') },
    { title: t('pages.mojo.feat2Title'), desc: t('pages.mojo.feat2Desc') },
    { title: t('pages.mojo.feat3Title'), desc: t('pages.mojo.feat3Desc') },
    { title: t('pages.mojo.feat4Title'), desc: t('pages.mojo.feat4Desc') },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/clubs/mojo"
        langs={{
          ru: { title: "MOJO Poker Club — приватный клуб на GGClub", description: "MOJO — приватный покерный клуб на GGClub. Рейкбек 55%, фишки 1к1, эксклюзивные столы. ID клуба 356323. Реферальный код 3383-3619.", keywords: "MOJO Poker Club, GGClub приватный клуб, покер рейкбек 55%" },
          en: { title: "MOJO Poker Club — Private Club on GGClub", description: "MOJO — exclusive private poker club on GGClub. 55% rakeback, 1:1 chips, VIP tables. Club ID 356323. Referral code 3383-3619.", keywords: "MOJO Poker Club, GGClub private club, poker rakeback 55%" },
          es: { title: "MOJO Poker Club — Club Privado en GGClub", description: "MOJO — club de póker privado exclusivo en GGClub. 55% de rakeback, fichas 1:1, mesas VIP. ID del club 356323. Código de referido 3383-3619." },
          de: { title: "MOJO Poker Club — Privater Club auf GGClub", description: "MOJO — exklusiver privater Pokerclub auf GGClub. 55% Rakeback, 1:1 Chips, VIP-Tische. Club-ID 356323. Referral-Code 3383-3619." },
          fr: { title: "MOJO Poker Club — Club Privé sur GGClub", description: "MOJO — club de poker privé exclusif sur GGClub. 55% de rakeback, jetons 1:1, tables VIP. ID du club 356323. Code de parrainage 3383-3619." },
          it: { title: "MOJO Poker Club — Club Privato su GGClub", description: "MOJO — club di poker privato esclusivo su GGClub. 55% di rakeback, chip 1:1, tavoli VIP. ID club 356323. Codice referral 3383-3619." },
          pt: { title: "MOJO Poker Club — Clube Privado no GGClub", description: "MOJO — clube de pôquer privado exclusivo no GGClub. 55% de rakeback, fichas 1:1, mesas VIP. ID do clube 356323. Código de referência 3383-3619." },
          ar: { title: "MOJO Poker Club — نادي خاص على GGClub", description: "MOJO — نادي بوكر خاص حصري على GGClub. 55% ريك باك، رقائق 1:1، طاولات VIP. رقم النادي 356323. رمز الإحالة 3383-3619." },
          hi: { title: "MOJO Poker Club — GGClub पर प्राइवेट क्लब", description: "MOJO — GGClub पर एक्सक्लूसिव प्राइवेट पोकर क्लब। 55% रेकबैक, 1:1 चिप्स, VIP टेबल। क्लब ID 356323। रेफरल कोड 3383-3619।" },
          fa: { title: "MOJO Poker Club — باشگاه خصوصی در GGClub", description: "MOJO — باشگاه پوکر خصوصی انحصاری در GGClub. 55% ریک‌بک، تراشه 1:1، میزهای VIP. شناسه باشگاه 356323. کد معرف 3383-3619." },
          tr: { title: "MOJO Poker Club — GGClub'da Özel Kulüp", description: "MOJO — GGClub'da özel ve özel poker kulübü. %55 rakeback, 1:1 chip, VIP masalar. Kulüp ID 356323. Referans kodu 3383-3619." },
          az: { title: "MOJO Poker Club — GGClub-da Özəl Klub", description: "MOJO — GGClub-da eksklüziv özəl poker klubu. 55% rakeback, 1:1 çips, VIP masalar. Klub ID 356323. Referral kodu 3383-3619." },
          zh: { title: "MOJO Poker Club — GGClub 私人俱乐部", description: "MOJO — GGClub 上的独家私人扑克俱乐部。55%返水，1:1筹码，VIP桌台。俱乐部 ID 356323。推荐码 3383-3619。" },
          ja: { title: "MOJO Poker Club — GGClubのプライベートクラブ", description: "MOJO — GGClubの限定プライベートポーカークラブ。55%レーキバック、1:1チップ、VIPテーブル。クラブID 356323。紹介コード 3383-3619。" },
        }}
      />
      <Navbar />
      <PageHeader
        label="MOJO"
        title="MOJO"
        subtitle={t('pages.mojo.pageSubtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.ourClubs'), href: '/#clubs' },
          { label: 'MOJO' },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '32px 0 64px' : '48px 0 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

          {/* ── Top: unified club info card ── */}
          <div style={{ marginBottom: isMobile ? 48 : 64 }}>
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)' }}>

              {/* Club header: square logo + name */}
              <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 120, minHeight: 120, flexShrink: 0, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <img src="/images/mojo-logo-red-full.svg" alt="MOJO" style={{ width: 88, height: 88, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ margin: '0 0 6px', fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {t('pages.clubName')}
                  </p>
                  <p style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>MOJO</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                    {t('pages.network')}
                  </p>
                </div>
              </div>

              {/* ID + Ref in a 2-col grid */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

                {/* Club ID */}
                <div style={{ padding: '24px 32px', borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)', borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Club ID</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 32, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>{CLUB_ID}</span>
                    <CopyBtn value={CLUB_ID} label={t('pages.copy')} copiedLabel={t('pages.copied')} />
                  </div>
                </div>

                {/* Referral code */}
                <div style={{ padding: '24px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                      {t('pages.refRequired')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 26, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{REF_CODE}</span>
                    <CopyBtn value={REF_CODE} label={t('pages.copy')} copiedLabel={t('pages.copied')} />
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: '#f5c518', lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                    {t('pages.bonusLink')}
                  </p>
                </div>
              </div>

              {/* CTA footer */}
              <div style={{ padding: '20px 32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>
                  {t('pages.mojo.afterApply')}{' '}
                  <a href="/support"
                    style={{ color: 'rgba(37,211,102,0.75)', textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,0.75)'; }}
                  >MOJO Contacts</a>
                </p>
                <Link href="/join" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexShrink: 0,
                  padding: '13px 32px', borderRadius: 4, textDecoration: 'none', whiteSpace: 'nowrap',
                  background: 'hsl(4 80% 45%)', color: 'white',
                  fontSize: 14, fontWeight: 700, transition: 'background 0.15s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
                >
                  {t('pages.joinClubBtn')}
                </Link>
              </div>
            </div>
          </div>

          {/* ── How to join ── */}
          <JoinNextSteps clubId={CLUB_ID} refCode={REF_CODE} requiresVpn={false} />

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 72 }} />

          {/* ── Features ── */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              /// {t('pages.features')}
            </p>
            <h2 style={{ margin: '0 0 36px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              {t('pages.mojo.whyTitle')}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} style={{ padding: '24px 26px', borderRadius: 8, background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'rgba(255,255,255,0.6)' }}>
                    {featureIcons[i]}
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{f.title}</h3>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Other club ── */}
          <div style={{ borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)', overflow: 'hidden' }}>
            <div style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                {t('pages.alsoInMojo')}
              </span>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/images/mojo-logo-dark.svg" alt="Massiv" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    Massiv Poker Union
                  </p>
                  <p style={{ margin: '0 0 2px', fontSize: 16, fontWeight: 700, color: 'white' }}>MOJO: Massiv Poker Union</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.massiv.chipAndRakeback')}
                  </p>
                </div>
              </div>
              <Link
                href="/clubs/massiv"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '11px 20px', borderRadius: 4, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600,
                  transition: 'background 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                {t('pages.learnMoreBtn')}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
