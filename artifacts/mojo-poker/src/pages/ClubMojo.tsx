import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

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

  const features = isRu ? [
    { icon: '🃏', title: 'Эксклюзивные VIP-столы', desc: 'Закрытый клуб с отборными игроками. Комфортная атмосфера и контролируемый состав участников.' },
    { icon: '♠️', title: 'Активные столы 24/7', desc: 'Столы работают круглосуточно — раздачи идут в любое время дня и ночи.' },
    { icon: '🤝', title: 'Сплочённое комьюнити', desc: 'Небольшой дружный клуб, где каждого знают в лицо. Честная игра и взаимное уважение.' },
    { icon: '💰', title: 'Высокий рейкбек', desc: 'Члены клуба MOJO получают конкурентный рейкбек и эксклюзивные бонусы для постоянных игроков.' },
  ] : [
    { icon: '🃏', title: 'Exclusive VIP Tables', desc: 'A closed club with hand-picked players. A comfortable atmosphere and controlled player roster.' },
    { icon: '♠️', title: 'Active Tables 24/7', desc: 'Tables run around the clock — hands are dealt at any time of day or night.' },
    { icon: '🤝', title: 'Tight-knit Community', desc: 'A small, friendly club where everyone knows each other. Fair play and mutual respect.' },
    { icon: '💰', title: 'High Rakeback', desc: 'MOJO club members receive competitive rakeback and exclusive bonuses for regular players.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label="MOJO"
        title="MOJO 1"
        subtitle={isRu
          ? 'Закрытый клуб с отборными игроками, эксклюзивными столами и сплочённым комьюнити'
          : 'A closed club with hand-picked players, exclusive tables and a tight-knit community'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Наши клубы' : 'Our Clubs', href: '/#clubs' },
          { label: 'MOJO 1' },
        ]}
      />

      <main style={{ flex: 1, padding: '72px 0 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 48px' }}>

          {/* Top: logo + join info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 72, alignItems: 'start' }}>

            {/* Logo card */}
            <div style={{
              borderRadius: 8, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'var(--bg-card)',
            }}>
              <div style={{
                background: '#1a1a1a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '48px 40px',
              }}>
                <img src="/images/mojo1-logo.png" alt="MOJO 1"
                  style={{ width: '100%', maxWidth: 260, height: 'auto', display: 'block', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  {isRu ? 'Название' : 'Name'}
                </p>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'white' }}>MOJO 1</p>
              </div>
            </div>

            {/* Join info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Club ID */}
              <div style={{
                borderRadius: 8, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'var(--bg-card)',
              }}>
                <div style={{ padding: '5px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Club ID</span>
                </div>
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}>{CLUB_ID}</span>
                  <CopyBtn value={CLUB_ID} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                </div>
              </div>

              {/* Referral code */}
              <div style={{
                borderRadius: 8, overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(217,155,0,0.1) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(217,155,0,0.4)',
                boxShadow: '0 0 0 3px rgba(217,155,0,0.06)',
              }}>
                <div style={{ padding: '6px 16px', background: 'rgba(217,155,0,0.15)', borderBottom: '1px solid rgba(217,155,0,0.2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12 }}>⚠️</span>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgb(255,200,60)', textTransform: 'uppercase' }}>
                    {isRu ? 'Реферальный код — обязательно' : 'Referral code — required'}
                  </span>
                </div>
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <div>
                    <p style={{ margin: '0 0 2px', fontSize: 11, color: 'rgba(255,200,60,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {isRu ? 'Привязывает все бонусы к аккаунту' : 'Links all bonuses to your account'}
                    </p>
                    <span style={{ fontSize: 24, fontWeight: 900, color: 'rgb(255,210,70)', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}>{REF_CODE}</span>
                  </div>
                  <CopyBtn value={REF_CODE} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                </div>
              </div>

              {/* CTA */}
              <Link href="/join" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '15px 24px', borderRadius: 4, textDecoration: 'none',
                background: 'hsl(4 80% 45%)', color: 'white',
                fontSize: 14, fontWeight: 700, marginTop: 4,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
              >
                {isRu ? 'Вступить в клуб →' : 'Join the Club →'}
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 72 }} />

          {/* Features */}
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              /// {isRu ? 'Преимущества' : 'Features'}
            </p>
            <h2 style={{ margin: '0 0 40px', fontSize: 28, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              {isRu ? 'Почему MOJO 1?' : 'Why MOJO 1?'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  padding: '24px 28px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 700, color: 'white' }}>{f.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
