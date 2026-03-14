import { useLanguage } from '@/contexts/LanguageContext';

interface Review {
  name: string;
  handle: string;
  text: { en: string; ru: string };
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Artem K.',
    handle: '@artem_k',
    text: {
      ru: 'Играю в MOJO уже 8 месяцев. Атмосфера приятная, трафик хороший в любое время суток. Менеджер всегда на связи — вопросы решаются быстро.',
      en: 'Been playing at MOJO for 8 months. Great atmosphere, good traffic at any time of day. Manager is always available — issues resolved quickly.',
    },
    rating: 5,
  },
  {
    name: 'Maxim V.',
    handle: '@max_v',
    text: {
      ru: 'Перешёл из другого клуба и не пожалел. Столов много, лимиты разные. Регистрация заняла 10 минут, сразу сел за стол.',
      en: 'Switched from another club and have no regrets. Lots of tables, various stakes. Registration took 10 minutes, sat down right away.',
    },
    rating: 5,
  },
  {
    name: 'Denis S.',
    handle: '@denis_s',
    text: {
      ru: 'Massiv Union — это уровень. Постоянный трафик, ни разу не ждал стол. Рекомендую всем, кто ищет серьёзную игру.',
      en: 'Massiv Union is top tier. Constant traffic, never waited for a table. Recommend to anyone looking for serious play.',
    },
    rating: 5,
  },
  {
    name: 'Igor P.',
    handle: '@igor_p',
    text: {
      ru: 'Честный клуб без лишних вопросов. Поддержка отвечает даже ночью. За год игры — ни одного нарушения условий.',
      en: 'Honest club, no unnecessary questions. Support replies even at night. One year of play — zero policy violations.',
    },
    rating: 5,
  },
  {
    name: 'Sergei M.',
    handle: '@s_m_poker',
    text: {
      ru: 'Начинал с низких лимитов, сейчас играю NL100+. Клуб вырос вместе со мной. Советую новичкам — здесь комфортно стартовать.',
      en: 'Started at low stakes, now playing NL100+. The club grew with me. Recommend to beginners — comfortable place to start.',
    },
    rating: 5,
  },
  {
    name: 'Andrei T.',
    handle: '@andrei_t',
    text: {
      ru: 'GGClub приложение стабильное, лагов нет. MOJO выбрал за репутацию — всё соответствует. Коллектив адекватный.',
      en: 'GGClub app is stable, no lag. Chose MOJO for its reputation — everything matches. Good community.',
    },
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < count ? 'hsl(4 80% 55%)' : 'rgba(255,255,255,0.1)'}>
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 8.903l-3.09 1.625.59-3.44L2 4.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <section id="reviews" style={{ padding: '100px 32px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: 'hsl(220 5% 50%)', textTransform: 'uppercase', marginBottom: 16 }}>
            /// {isRu ? 'ОТЗЫВЫ' : 'REVIEWS'}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.1 }}>
            {isRu ? 'Что говорят игроки' : 'What Players Say'}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
        }}>
          {reviews.map((r) => (
            <div key={r.handle} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 8,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <Stars count={r.rating} />
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', margin: 0, flex: 1 }}>
                "{isRu ? r.text.ru : r.text.en}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 4, borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'hsl(220 5% 22%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: 'hsl(220 5% 62%)',
                  flexShrink: 0,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{r.name}</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{r.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
