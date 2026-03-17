import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNSidebar } from '@/components/VPNSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import SEO from '@/components/SEO';
import { useIsMobile } from '@/hooks/useIsMobile';
import { JoinNextSteps } from '@/components/JoinNextSteps';

const CLUB_ID = '799798';
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

export function ClubMassiv() {
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
    </svg>,
    /* massive pool / users */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>,
    /* 24/7 clock */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
    </svg>,
  ];

  const features = [
    { title: t('pages.massiv.feat1Title'), desc: t('pages.massiv.feat1Desc') },
    { title: t('pages.massiv.feat2Title'), desc: t('pages.massiv.feat2Desc') },
    { title: t('pages.massiv.feat3Title'), desc: t('pages.massiv.feat3Desc') },
    { title: t('pages.massiv.feat4Title'), desc: t('pages.massiv.feat4Desc') },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/clubs/massiv"
        ru={{
          title: 'MOJO: Massiv Poker Union — покер клуб GGClub',
          description: 'Massiv Poker Union на GGClub — один из крупнейших покерных союзов. Рейкбек 50%, фишки 1к1, 698+ игроков онлайн, 255+ столов 24/7. ID клуба 799798.',
          keywords: 'Massiv Poker Union, Massiv Union Poker, GGClub покер, ClubGG покер клуб, покер рейкбек, клубный покер онлайн, MOJO Poker Union',
        }}
        en={{
          title: 'MOJO: Massiv Poker Union — GGClub Poker Club',
          description: 'Massiv Poker Union on GGClub — one of the biggest poker unions. 50% rakeback, 1:1 chips, 698+ players online, 255+ tables 24/7. Club ID 799798.',
          keywords: 'Massiv Poker Union, GGClub poker club, ClubGG poker, online poker club, rakeback poker, MOJO Poker',
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SportsClub',
          name: 'MOJO: Massiv Poker Union',
          description: 'Massiv Poker Union poker club on GGClub network',
          url: 'https://mojo-poker.com/clubs/massiv',
          identifier: '799798',
        }}
      />
      <Navbar />
      <PageHeader
        label="Massiv Poker Union"
        title="MOJO: Massiv Poker Union"
        subtitle={t('pages.massiv.pageSubtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.ourClubs'), href: '/#clubs' },
          { label: 'Massiv Poker Union' },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '32px 0 64px' : '48px 0 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

          {/* ── Top: info card + VPN ── */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, marginBottom: isMobile ? 48 : 64, alignItems: 'flex-start' }}>

            {/* ── LEFT: combined club info card ── */}
            <div style={{ flex: 1, minWidth: 0, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)' }}>

              {/* Club header: square logo + name */}
              <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 120, minHeight: 120, flexShrink: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <img src="/images/mojo-logo-dark-full.svg" alt="Massiv Poker Union" style={{ width: 92, height: 92, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ margin: '0 0 6px', fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {t('pages.clubName')}
                  </p>
                  <p style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>MOJO: Massiv Poker Union</p>
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

              {/* GEO notice + manager + CTA */}
              <div style={{ padding: '20px 32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <div>
                    <p style={{ margin: '0 0 4px', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>
                      {t('pages.massiv.vpnNote')}
                    </p>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                      {t('pages.afterApply')}{' '}
                      <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'rgba(37,211,102,0.75)', textDecoration: 'none', fontWeight: 600 }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,1)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,0.75)'; }}
                      >@Mojo_Adm</a>
                    </p>
                  </div>
                </div>
                <Link href="/join" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px 32px', borderRadius: 4, textDecoration: 'none', flexShrink: 0,
                  background: 'hsl(4 80% 45%)', color: 'white',
                  fontSize: 14, fontWeight: 700, transition: 'background 0.15s', whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
                >
                  {t('pages.joinClubBtn')}
                </Link>
              </div>
            </div>

            {/* ── RIGHT: VPN sidebar (fixed width) ── */}
            <div style={{ flexShrink: 0, width: isMobile ? '100%' : 340 }}>
              <VPNSidebar />
            </div>
          </div>

          {/* ── How to join ── */}
          <JoinNextSteps clubId={CLUB_ID} refCode={REF_CODE} requiresVpn={true} />

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 72 }} />

          {/* ── Features ── */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              /// {t('pages.features')}
            </p>
            <h2 style={{ margin: '0 0 36px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              {t('pages.massiv.whyTitle')}
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
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/images/mojo-logo-red.svg" alt="MOJO" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {t('pages.pokerClub')}
                  </p>
                  <p style={{ margin: '0 0 2px', fontSize: 16, fontWeight: 700, color: 'white' }}>MOJO</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.mojo.chipAndRakeback')}
                  </p>
                </div>
              </div>
              <Link
                href="/clubs/mojo"
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
