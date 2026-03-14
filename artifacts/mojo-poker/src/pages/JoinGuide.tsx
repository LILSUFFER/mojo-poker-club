import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';

const REFERRAL = '3383-3619';

const CLUBS = [
  { name: 'MOJO 2: Massiv Poker Union', id: '799798', main: true },
  { name: 'MOJO', id: '356323', main: false },
];

function CopyBtn({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const click = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={click} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '5px 11px', borderRadius: 4, cursor: 'pointer',
      border: `1px solid ${copied ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.12)'}`,
      background: copied ? 'rgba(34,197,94,0.07)' : 'transparent',
      color: copied ? '#22c55e' : 'rgba(255,255,255,0.4)',
      fontSize: 11, fontWeight: 600, transition: 'all 0.15s',
    }}>
      {copied ? <><CheckCircle2 size={11} /> {copiedLabel}</> : <><Copy size={11} /> {label}</>}
    </button>
  );
}

export function JoinGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  interface StepDef {
    num: number;
    title: { ru: string; en: string };
    desc: { ru: string; en: string };
    img?: string;
    extra?: 'clubs' | 'referral' | 'telegram';
    note?: { ru: string; en: string };
  }

  const steps: StepDef[] = [
    {
      num: 1,
      title: { ru: 'Откройте раздел «Клубы» в приложении', en: 'Open the "Clubs" section in the app' },
      desc: {
        ru: 'Запустите ClubGG и войдите в аккаунт. На главном экране вы увидите строку «Поиск Клуба» вверху — нажмите на неё. Это откроет форму поиска клуба.',
        en: 'Launch ClubGG and sign in. On the main screen you\'ll see a "Search Club" bar at the top — tap it. This opens the club search form.',
      },
      img: '/images/join/step1-search.png',
    },
    {
      num: 2,
      title: { ru: 'Введите ID клуба и ID реферера', en: 'Enter the Club ID and Referrer ID' },
      desc: {
        ru: 'Перед вами откроется форма с двумя полями:\n\n• Поле «ID клуба» — введите ID нужного клуба из списка ниже\n• Поле «ID реферера» — обязательно укажите реферальный код MOJO, чтобы нас нашли и одобрили вашу заявку\n\nПосле заполнения обоих полей нажмите «Подтвердить».',
        en: 'A form with two fields will open:\n\n• "Club ID" field — enter the ID of the desired club from the list below\n• "Referrer ID" field — enter the MOJO referral code so we can find you and approve your request\n\nAfter filling both fields tap "Confirm".',
      },
      img: '/images/join/step2-form-empty.png',
      extra: 'clubs',
    },
    {
      num: 3,
      title: { ru: 'Форма заполнена — нажмите «Подтвердить»', en: 'Form filled — tap "Confirm"' },
      desc: {
        ru: 'Убедитесь, что оба поля заполнены: Club ID и ID реферера (3383-3619). После этого кнопка «Подтвердить» станет активной — нажмите её.',
        en: 'Make sure both fields are filled: Club ID and Referrer ID (3383-3619). Once done, the "Confirm" button becomes active — tap it.',
      },
      img: '/images/join/step3-form-filled.png',
      note: {
        ru: 'Если кнопка «Подтвердить» не активна — проверьте, что оба поля заполнены.',
        en: 'If the "Confirm" button is not active — check that both fields are filled.',
      },
    },
    {
      num: 4,
      title: { ru: 'Страница клуба — нажмите «Присоединиться»', en: 'Club page — tap "Join"' },
      desc: {
        ru: 'Появится страница клуба MOJO. Вы увидите:\n\n• Название клуба и его ID\n• Количество членов клуба\n• Поле «Информация для проверки» — напишите туда краткое приветствие, например: «Привет! Я [ваш никнейм]»\n\nПосле этого нажмите зелёную кнопку «Присоединиться» внизу экрана.',
        en: 'The MOJO club page appears. You\'ll see:\n\n• Club name and ID\n• Number of members\n• "Verification info" field — write a short greeting, e.g. "Hi! I\'m [your nickname]"\n\nThen tap the green "Join" button at the bottom of the screen.',
      },
      img: '/images/join/step4-join.png',
      note: {
        ru: 'Заполните поле «Информация для проверки» — это ускорит одобрение заявки.',
        en: 'Fill in the "Verification info" field — this speeds up approval.',
      },
    },
    {
      num: 5,
      title: { ru: 'Напишите менеджеру в Telegram', en: 'Message the manager on Telegram' },
      desc: {
        ru: 'Заявка отправлена — теперь напишите менеджеру @Mojo_Adm в Telegram. Укажите:\n\n• Ваш никнейм в ClubGG\n• В какой клуб хотите вступить (MOJO или Massiv)\n\nОбычно одобрение приходит в течение нескольких минут. Менеджер может задать дополнительные вопросы.',
        en: 'Request sent — now message manager @Mojo_Adm on Telegram. Include:\n\n• Your ClubGG nickname\n• Which club you want to join (MOJO or Massiv)\n\nApproval usually takes just a few minutes. The manager may ask a few questions.',
      },
      extra: 'telegram',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/join"
        ru={{
          title: 'Как вступить в покер клуб GGClub — инструкция MOJO',
          description: 'Пошаговая инструкция как вступить в MOJO Poker Club на GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Реферальный код 3383-3619.',
          keywords: 'как вступить в GGClub, ClubGG инструкция, Massiv Poker Union регистрация, MOJO Poker вступить, покер клуб GG Club',
        }}
        en={{
          title: 'How to Join MOJO Poker Club on GGClub — Step by Step Guide',
          description: 'Step-by-step guide to join MOJO Poker Club on GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Referral code 3383-3619.',
          keywords: 'how to join GGClub, ClubGG guide, Massiv Poker Union sign up, MOJO Poker join, GG Club poker tutorial',
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Join MOJO Poker Club on GGClub',
          description: 'Guide to joining MOJO Poker Club on GGClub / Massiv Poker Union',
          url: 'https://mojo-poker.com/join',
        }}
      />
      <Navbar />
      <PageHeader
        label={isRu ? 'Вступление в клуб' : 'Join the Club'}
        title={isRu ? 'Как вступить в клуб MOJO' : 'How to Join MOJO Club'}
        subtitle={isRu
          ? 'Пошаговая инструкция — весь процесс занимает около 3 минут'
          : 'Step-by-step guide — the whole process takes about 3 minutes'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Как вступить' : 'How to Join' },
        ]}
      />

      <main style={{ flex: 1, padding: '80px 0 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>

          {steps.map((step, idx) => (
            <div key={step.num} style={{ marginBottom: idx < steps.length - 1 ? 80 : 0 }}>

              {/* Step header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'hsl(4 80% 45%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 13, fontWeight: 800, color: 'white',
                }}>
                  {step.num}
                </div>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {isRu ? step.title.ru : step.title.en}
                </h2>
              </div>

              {/* Content */}
              <div style={{ paddingLeft: 52 }}>

                {/* Description with line breaks */}
                <div style={{ marginBottom: 24 }}>
                  {(isRu ? step.desc.ru : step.desc.en).split('\n').map((line, i) => (
                    line === '' ? <div key={i} style={{ height: 8 }} /> :
                    line.startsWith('•') ? (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                        <span style={{ color: 'hsl(4 80% 45%)', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
                          {line.slice(2)}
                        </span>
                      </div>
                    ) : (
                      <p key={i} style={{ margin: '0 0 8px', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                        {line}
                      </p>
                    )
                  ))}
                </div>

                {/* Club IDs extra */}
                {step.extra === 'clubs' && (
                  <div style={{ marginBottom: 24 }}>

                    {/* ── Clubs section ── */}
                    <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
                      {isRu ? 'Клубы MOJO' : 'MOJO Clubs'}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>

                      {/* Massiv Poker Union */}
                      <div style={{
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '14px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                            <img src="/images/mojo2-logo.png" alt="MOJO Massiv" style={{ width: 38, height: 38, objectFit: 'contain' }} />
                          </div>
                          <div>
                            <p style={{ margin: '0 0 2px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              Massiv Poker Union
                            </p>
                            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO: Massiv Poker Union</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Club ID</p>
                            <span style={{ fontSize: 22, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>799798</span>
                          </div>
                          <CopyBtn value="799798" label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                        </div>
                      </div>

                      {/* MOJO */}
                      <div style={{
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '14px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <img src="/images/mojo1-logo.png" alt="MOJO" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 8 }} />
                          </div>
                          <div>
                            <p style={{ margin: '0 0 2px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              {isRu ? 'Покерный клуб' : 'Poker Club'}
                            </p>
                            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Club ID</p>
                            <span style={{ fontSize: 22, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>356323</span>
                          </div>
                          <CopyBtn value="356323" label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                        </div>
                      </div>
                    </div>

                    {/* ── Referral section ── */}
                    <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
                      {isRu ? 'Реферальный код' : 'Referral Code'}
                    </p>
                    <div style={{
                      borderRadius: 8,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        padding: '8px 18px',
                        background: 'rgba(255,255,255,0.03)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        display: 'flex', alignItems: 'center', gap: 8,
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>
                          {isRu ? 'Обязательно укажите — привязывает все бонусы к вашему аккаунту' : 'Required — links all bonuses to your account'}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div>
                          <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                            {isRu ? 'ID реферера' : 'Referrer ID'}
                          </p>
                          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO Poker Club</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              {isRu ? 'Код' : 'Code'}
                            </p>
                            <span style={{ fontSize: 26, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em' }}>
                              {REFERRAL}
                            </span>
                          </div>
                          <CopyBtn value={REFERRAL} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Telegram extra */}
                {step.extra === 'telegram' && (
                  <a
                    href="https://t.me/Mojo_Adm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24,
                      padding: '13px 22px', borderRadius: 4, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'white', fontSize: 14, fontWeight: 600,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
                    </svg>
                    @Mojo_Adm
                  </a>
                )}

                {/* Note */}
                {step.note && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderLeft: '3px solid hsl(4 80% 45%)',
                    marginBottom: 24,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.6,
                  }}>
                    {isRu ? step.note.ru : step.note.en}
                  </div>
                )}

                {/* Screenshot */}
                {step.img && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
                      display: 'inline-block',
                    }}>
                      <img
                        src={step.img}
                        alt={isRu ? step.title.ru : step.title.en}
                        style={{ width: 320, height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              {idx < steps.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '80px 0 0' }} />
              )}
            </div>
          ))}

          {/* Chips info block */}
          <div style={{
            marginTop: 72,
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--bg-card)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                {isRu ? 'После вступления' : 'After joining'}
              </span>
            </div>
            <div style={{ padding: '24px 24px', display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 32, lineHeight: 1 }}>🎯</div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                  {isRu ? 'Как получить фишки для игры' : 'How to get chips to play'}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>
                  {isRu
                    ? 'Напишите менеджеру в Telegram — он расскажет всё про фишки и сориентирует по дальнейшим шагам.'
                    : 'Message the manager on Telegram — they\'ll explain everything about chips and guide you through the next steps.'}
                </p>
                <a
                  href="https://t.me/Mojo_Adm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    padding: '11px 20px', borderRadius: 4, textDecoration: 'none',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white', fontSize: 13, fontWeight: 600,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
                  </svg>
                  @Mojo_Adm
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
