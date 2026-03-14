import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const TG_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
  </svg>
);

export function AboutPage() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/about"
        ru={{
          title: 'О нас — MOJO Poker Club',
          description: 'MOJO Poker Club — официальный агент в сети GGClub и Massiv Poker Union. Рейкбек, поддержка, выгодные условия для покеристов. Контакт: @Mojo_Adm.',
          keywords: 'MOJO Poker Club о нас, GGClub агент, Massiv Poker Union агент, покер поддержка, @Mojo_Adm',
        }}
        en={{
          title: 'About Us — MOJO Poker Club',
          description: 'MOJO Poker Club — official agent on GGClub and Massiv Poker Union network. Rakeback, support, best conditions for poker players. Contact: @Mojo_Adm.',
          keywords: 'MOJO Poker Club about, GGClub agent, Massiv Poker Union agent, poker support, Telegram Mojo_Adm',
        }}
      />
      <Navbar />
      <PageHeader
        label={isRu ? 'О нас' : 'About Us'}
        title={isRu ? 'MOJO Poker Club' : 'MOJO Poker Club'}
        subtitle={isRu
          ? 'Покерный клуб нового уровня в сети ClubGG — официальный партнёр Massiv Poker Union'
          : 'A next-level poker club on ClubGG — official partner of Massiv Poker Union'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'О нас' : 'About' },
        ]}
      />

      <main style={{ flex: 1, padding: '72px 0 100px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 48px' }}>

          {/* Main info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 72, alignItems: 'start' }}>

            {/* Left: about text */}
            <div>
              <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
                {isRu ? '/// Кто мы' : '/// Who We Are'}
              </p>
              <h2 style={{ margin: '0 0 20px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {isRu ? 'Лучшие условия для клубного покера' : 'Best conditions for club poker'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                  {isRu
                    ? 'MOJO Poker Club основан в 2025 году. Мы являемся официальным партнёром Massiv Poker Union — одного из крупнейших покерных союзов в сети ClubGG с игроками со всего мира.'
                    : 'MOJO Poker Club was founded in 2025. We are an official partner of Massiv Poker Union — one of the largest poker unions on the ClubGG network with players from around the world.'}
                </p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                  {isRu
                    ? 'Наша главная цель — предоставлять игрокам лучшие условия на рынке: максимальный рейкбек, честный обмен фишек и профессиональную поддержку на каждом этапе.'
                    : 'Our main goal is to provide players with the best conditions on the market: maximum rakeback, fair chip exchange, and professional support at every step.'}
                </p>
              </div>
            </div>

            {/* Right: stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { value: '2025', label: isRu ? 'Год основания' : 'Founded', sub: isRu ? 'Работаем с первого дня' : 'Operating from day one' },
                { value: '1 724', label: isRu ? 'Игроков в чате' : 'Players in chat', sub: isRu ? 'Активное сообщество' : 'Active community' },
                { value: '50%', label: isRu ? 'Рейкбек' : 'Rakeback', sub: isRu ? 'Один из лучших на рынке' : 'One of the best on the market' },
                { value: '24/7', label: isRu ? 'Поддержка' : 'Support', sub: isRu ? 'Всегда на связи' : 'Always available' },
              ].map((item) => (
                <div key={item.value} style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '16px 20px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: 'white', minWidth: 64, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                    {item.value}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{item.label}</p>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 56 }} />

          {/* Telegram community */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ margin: '0 0 24px', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
              {isRu ? '/// Сообщество' : '/// Community'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a
                href="https://t.me/MOJOPoker"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '24px 28px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    {TG_ICON}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Telegram</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: 'white' }}>
                    {isRu ? 'Официальный канал' : 'Official Channel'}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>@MOJOPoker</p>
                </div>
              </a>

              <a
                href="https://t.me/+63QXd66PAuwyNjQ6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '24px 28px', borderRadius: 8,
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    {TG_ICON}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Telegram</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: 'white' }}>
                    {isRu ? 'Чат игроков' : 'Player Chat'}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                    1 724 {isRu ? 'участника' : 'members'}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Massiv Union mention */}
          <div style={{
            padding: '28px 32px', borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', gap: 24,
          }}>
            <img
              src="/images/massiv-union-logo-nobg.png"
              alt="Massiv Union"
              style={{ width: 100, height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.35, flexShrink: 0 }}
            />
            <div>
              <p style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
                {isRu ? 'Официальный партнёр Massiv Poker Union' : 'Official Partner of Massiv Poker Union'}
              </p>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)' }}>
                {isRu
                  ? 'Massiv Poker Union — один из крупнейших покерных союзов в ClubGG. Огромный пул игроков, столы работают круглосуточно на всех лимитах.'
                  : 'Massiv Poker Union is one of the largest poker unions on ClubGG. Massive player pool, tables running around the clock at all stakes.'}
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
