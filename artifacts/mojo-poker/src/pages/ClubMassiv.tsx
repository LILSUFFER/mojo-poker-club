import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNSidebar } from '@/components/VPNSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

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
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const features = isRu ? [
    { img: '/images/perk-chip.png', title: 'Фишка 1к1', desc: 'Прямой обмен без комиссии — покупай и продавай фишки по курсу 1 к 1.' },
    { img: '/images/perk-rakeback.png', title: 'Рейкбек 50%', desc: 'Один из лучших рейкбеков на рынке клубного покера — 50% от рейка возвращается тебе.' },
    { img: '/images/perk-chip-2.png', title: 'Огромный пул', desc: 'Тысячи игроков со всего мира. Столы запускаются круглосуточно на любых лимитах.' },
    { img: '/images/perk-rakeback-2.png', title: 'Экшн 24/7', desc: 'Благодаря глобальному пулу игроков Massiv Union никогда не спит — раздачи в любое время.' },
  ] : [
    { img: '/images/perk-chip.png', title: '1:1 Chip Rate', desc: 'Direct exchange with no commission — buy and sell chips at a 1:1 rate.' },
    { img: '/images/perk-rakeback.png', title: '50% Rakeback', desc: 'One of the best rakeback rates in club poker — 50% of rake returned to you.' },
    { img: '/images/perk-chip-2.png', title: 'Massive Pool', desc: 'Thousands of players from around the world. Tables running around the clock at any stake.' },
    { img: '/images/perk-rakeback-2.png', title: '24/7 Action', desc: 'Thanks to a global player pool, Massiv Union never sleeps — hands at any time of day.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label="Massiv Poker Union"
        title="MOJO: Massiv Poker Union"
        subtitle={isRu
          ? 'Один из крупнейших покерных союзов в ClubGG — огромный пул игроков, экшн 24/7'
          : 'One of the largest poker unions on ClubGG — massive player pool, 24/7 action'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Наши клубы' : 'Our Clubs', href: '/#clubs' },
          { label: 'Massiv Poker Union' },
        ]}
      />

      <main style={{ flex: 1, padding: '72px 0 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>

          {/* ── Top: logo + join info + VPN ── */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 56, alignItems: 'flex-start' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, flex: 1, alignItems: 'start' }}>

            {/* Logo card */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)' }}>
              <div style={{ background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', position: 'relative' }}>
                <img src="/images/mojo2-logo.png" alt="MOJO 2" style={{ width: '100%', maxWidth: 240, height: 'auto', display: 'block', objectFit: 'contain' }} />
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <img src="/images/union-badge-orig.png" alt="Union" style={{ width: 48, height: 48, objectFit: 'contain', display: 'block' }} />
                </div>
              </div>
              <div style={{ padding: '18px 22px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ margin: '0 0 3px', fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                  {isRu ? 'Название клуба' : 'Club Name'}
                </p>
                <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'white' }}>MOJO: Massiv Poker Union</p>
              </div>
            </div>

            {/* Join info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

              {/* Club ID */}
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-card)' }}>
                <div style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Club ID</span>
                </div>
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}>{CLUB_ID}</span>
                  <CopyBtn value={CLUB_ID} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                </div>
              </div>

              {/* Referral code — neutral */}
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-card)' }}>
                <div style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
                    {isRu ? 'Реферальный код — обязательно' : 'Referral code — required'}
                  </span>
                </div>
                <div style={{ padding: '12px 20px 8px' }}>
                  <p style={{ margin: '0 0 8px', fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {isRu ? 'Привязывает все бонусы к вашему аккаунту' : 'Links all bonuses to your account'}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 24, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.05em' }}>{REF_CODE}</span>
                    <CopyBtn value={REF_CODE} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                  </div>
                </div>
                <div style={{ height: 8 }} />
              </div>

              {/* GEO notice — neutral */}
              <div style={{ padding: '12px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>
                    {isRu ? 'Требуется ГЕО — смотри инструкцию ниже' : 'GEO required — see instructions below'}
                  </p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {isRu ? 'Аккаунт нужно создавать через VPN с нужным гео.' : 'Account must be created with VPN and the correct geo.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link href="/join" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '14px 24px', borderRadius: 4, textDecoration: 'none',
                background: 'hsl(4 80% 45%)', color: 'white',
                fontSize: 14, fontWeight: 700, marginTop: 4,
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
              >
                {isRu ? 'Вступить в клуб →' : 'Join the Club →'}
              </Link>
            </div>
          </div>
          <VPNSidebar />
          </div>

          {/* ── Chip + RB stat cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 72 }}>
            {[
              { img: '/images/perk-chip.png', label: isRu ? 'Фишка' : 'Chip', value: '1к1', sub: isRu ? 'Прямой обмен без комиссии' : 'Direct exchange, no fee' },
              { img: '/images/perk-rakeback.png', label: isRu ? 'Рейкбек' : 'Rakeback', value: '50%', sub: isRu ? 'Лучший рейкбек на рынке' : 'Best rakeback on the market' },
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

          {/* ── Features ── */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              /// {isRu ? 'Преимущества' : 'Features'}
            </p>
            <h2 style={{ margin: '0 0 36px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              {isRu ? 'Почему Massiv Poker Union?' : 'Why Massiv Poker Union?'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src="/images/mojo1-logo.png" alt="MOJO 1" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {isRu ? 'Покерный клуб' : 'Poker Club'}
                  </p>
                  <p style={{ margin: '0 0 2px', fontSize: 16, fontWeight: 700, color: 'white' }}>MOJO 1</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                    {isRu ? 'Фишка 1к1 · Рейкбек 55%' : 'Chip 1:1 · Rakeback 55%'}
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
