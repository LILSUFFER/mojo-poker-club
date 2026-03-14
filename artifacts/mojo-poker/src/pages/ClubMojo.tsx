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
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const isMobile = useIsMobile();

  const features = isRu ? [
    { img: '/images/perk-chip.png', title: 'Фишка 1к1', desc: 'Прямой обмен без комиссии — покупай и продавай фишки по курсу 1 к 1.' },
    { img: '/images/perk-rakeback.png', title: 'Рейкбек 55%', desc: 'Максимальный рейкбек для членов MOJO 1 — 55% от рейка возвращается тебе.' },
    { img: '/images/perk-chip-2.png', title: 'Эксклюзивные столы', desc: 'Закрытый клуб с отборными игроками. Комфортная атмосфера и контролируемый состав.' },
    { img: '/images/perk-rakeback-2.png', title: 'Экшн 24/7', desc: 'Столы работают круглосуточно — раздачи идут в любое время дня и ночи.' },
  ] : [
    { img: '/images/perk-chip.png', title: '1:1 Chip Rate', desc: 'Direct exchange with no commission — buy and sell chips at a 1:1 rate.' },
    { img: '/images/perk-rakeback.png', title: '55% Rakeback', desc: 'Maximum rakeback for MOJO 1 members — 55% of rake returned to you.' },
    { img: '/images/perk-chip-2.png', title: 'Exclusive Tables', desc: 'A closed club with hand-picked players. A comfortable atmosphere and controlled roster.' },
    { img: '/images/perk-rakeback-2.png', title: '24/7 Action', desc: 'Tables run around the clock — hands are dealt at any time of day or night.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/clubs/mojo"
        ru={{
          title: 'MOJO 1 — покер клуб в сети GGClub',
          description: 'MOJO 1 на GGClub — клуб с высоким рейкбеком 55%, фишками 1к1, 62+ игроков онлайн, 58+ столов. ID клуба 356323. Реферальный код 3383-3619.',
          keywords: 'MOJO 1 покер, GGClub покер клуб, ClubGG клуб, покер рейкбек 55%, покер онлайн, клубный покер GG',
        }}
        en={{
          title: 'MOJO 1 — GGClub Poker Club',
          description: 'MOJO 1 on GGClub — high-rakeback poker club. 55% rakeback, 1:1 chips, 62+ players online, 58+ tables. Club ID 356323. Referral code 3383-3619.',
          keywords: 'MOJO 1 poker, GGClub poker club, ClubGG club, 55% rakeback poker, online poker club',
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SportsClub',
          name: 'MOJO 1 Poker Club',
          description: 'MOJO 1 poker club on GGClub network with 55% rakeback',
          url: 'https://mojo-poker.com/clubs/mojo',
          identifier: '356323',
        }}
      />
      <Navbar />
      <PageHeader
        label="MOJO"
        title="MOJO 1"
        subtitle={isRu
          ? 'Закрытый клуб с отборными игроками, эксклюзивными столами и высоким рейкбеком'
          : 'A closed club with hand-picked players, exclusive tables and top rakeback'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Наши клубы' : 'Our Clubs', href: '/#clubs' },
          { label: 'MOJO 1' },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '40px 0 64px' : '72px 0 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

          {/* ── Top: unified club info card ── */}
          <div style={{ marginBottom: isMobile ? 36 : 56 }}>
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)' }}>

              {/* Club header: logo thumb + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ background: '#1a1a1a', width: 100, flexShrink: 0, alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 12px' }}>
                  <img src="/images/mojo1-logo.png" alt="MOJO 1" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '18px 24px' }}>
                  <p style={{ margin: '0 0 3px', fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {isRu ? 'Название клуба' : 'Club Name'}
                  </p>
                  <p style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>MOJO 1</p>
                  <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
                    {isRu ? 'Сеть ClubGG · GGClub' : 'ClubGG · GGClub network'}
                  </p>
                </div>
              </div>

              {/* ID + Ref in a 2-col grid */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

                {/* Club ID */}
                <div style={{ padding: '20px 24px', borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)', borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Club ID</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 32, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.03em' }}>{CLUB_ID}</span>
                    <CopyBtn value={CLUB_ID} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                  </div>
                </div>

                {/* Referral code */}
                <div style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                      {isRu ? 'Реф. код — обязательно' : 'Ref. code — required'}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 32, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}>{REF_CODE}</span>
                    <CopyBtn value={REF_CODE} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
                    {isRu ? 'Привязывает бонусы к аккаунту' : 'Links bonuses to your account'}
                  </p>
                </div>
              </div>

              {/* CTA footer */}
              <div style={{ padding: '16px 24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                  {isRu ? 'После заявки напишите менеджеру' : 'After applying, contact the manager'}{' '}
                  <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'rgba(37,211,102,0.75)', textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(37,211,102,0.75)'; }}
                  >@Mojo_Adm</a>
                </p>
                <Link href="/join" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexShrink: 0,
                  padding: '12px 28px', borderRadius: 4, textDecoration: 'none',
                  background: 'hsl(4 80% 45%)', color: 'white',
                  fontSize: 14, fontWeight: 700, transition: 'background 0.15s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
                >
                  {isRu ? 'Вступить в клуб →' : 'Join the Club →'}
                </Link>
              </div>
            </div>
          </div>

          {/* ── Chip + RB stat cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: isMobile ? 48 : 72 }}>
            {[
              { img: '/images/perk-chip.png', label: isRu ? 'Фишка' : 'Chip', value: '1к1', sub: isRu ? 'Прямой обмен без комиссии' : 'Direct exchange, no fee' },
              { img: '/images/perk-rakeback.png', label: isRu ? 'Рейкбек' : 'Rakeback', value: '55%', sub: isRu ? 'Максимальный рейкбек MOJO' : 'Maximum MOJO rakeback' },
            ].map(stat => (
              <div key={stat.label} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: '24px 28px', borderRadius: 8,
                background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <img src={stat.img} alt={stat.label} style={{ width: 56, height: 56, objectFit: 'contain', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: '0 0 2px', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{stat.label}</p>
                  <p style={{ margin: '0 0 4px', fontSize: 28, fontWeight: 900, color: 'white', lineHeight: 1, letterSpacing: '-0.02em' }}>{stat.value}</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── How to join ── */}
          <JoinNextSteps clubId={CLUB_ID} refCode={REF_CODE} requiresVpn={false} />

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 72 }} />

          {/* ── Features ── */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              /// {isRu ? 'Преимущества' : 'Features'}
            </p>
            <h2 style={{ margin: '0 0 36px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              {isRu ? 'Почему MOJO 1?' : 'Why MOJO 1?'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} style={{ padding: '24px 26px', borderRadius: 8, background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <img src={f.img} alt={f.title} style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }} />
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
                {isRu ? 'Также в MOJO' : 'Also in MOJO'}
              </span>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/images/mojo2-logo.png" alt="Massiv" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    Massiv Poker Union
                  </p>
                  <p style={{ margin: '0 0 2px', fontSize: 16, fontWeight: 700, color: 'white' }}>MOJO: Massiv Poker Union</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                    {isRu ? 'Фишка 1к1 · Рейкбек 50%' : 'Chip 1:1 · Rakeback 50%'}
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
                {isRu ? 'Подробнее о клубе →' : 'Learn More →'}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
