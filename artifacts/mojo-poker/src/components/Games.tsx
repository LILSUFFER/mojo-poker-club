import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';

type LangText = Record<string, string>;

interface GameEntry {
  img: string;
  tag: string;
  title: LangText;
  desc: LangText;
}

const gamesData: GameEntry[] = [
  {
    img: '/images/game-nlh.png',
    tag: 'NLH',
    title: { ru: "No-Limit Hold'em", en: "No-Limit Hold'em", es: "No-Limit Hold'em", de: "No-Limit Hold'em", fr: "No-Limit Hold'em", it: "No-Limit Hold'em", pt: "No-Limit Hold'em", ar: "No-Limit Hold'em", hi: "No-Limit Hold'em", fa: "No-Limit Hold'em", tr: "No-Limit Hold'em", az: "No-Limit Hold'em", zh: "无限注德州扑克", ja: "ノーリミットホールデム" },
    desc: {
      ru: 'Классический покер. Неограниченные ставки, живой трафик 24/7 на всех лимитах.',
      en: 'Classic poker. Unlimited betting, live traffic 24/7 across all stakes.',
      es: 'Póker clásico. Apuestas ilimitadas, tráfico en vivo 24/7 en todos los límites.',
      de: 'Klassisches Poker. Unbegrenzte Einsätze, Live-Traffic 24/7 auf allen Limits.',
      fr: 'Poker classique. Mises illimitées, trafic en direct 24/7 sur toutes les mises.',
      it: 'Poker classico. Puntate illimitate, traffico live 24/7 su tutti gli stakes.',
      pt: 'Pôquer clássico. Apostas ilimitadas, tráfico ao vivo 24/7 em todos os níveis.',
      ar: 'بوكر كلاسيكي. رهانات غير محدودة، حركة مرور مباشرة 24/7 على جميع الحصص.',
      hi: 'क्लासिक पोकर। असीमित दांव, सभी स्तरों पर 24/7 लाइव ट्रैफिक।',
      fa: 'پوکر کلاسیک. شرط‌بندی نامحدود، ترافیک زنده 24/7 در تمام استیک‌ها.',
      tr: 'Klasik poker. Sınırsız bahis, tüm limitlerdeki 24/7 canlı trafik.',
      az: 'Klassik poker. Limitsiz bahis, bütün limitlərdə 24/7 canlı trafik.',
      zh: '经典扑克。无限下注，24/7在所有级别的实时流量。',
      ja: 'クラシックポーカー。無制限のベット、全ステークスで24/7ライブトラフィック。',
    },
  },
  {
    img: '/images/game-plo4.png',
    tag: 'PLO4',
    title: { ru: 'Pot-Limit Omaha 4', en: 'Pot-Limit Omaha 4', es: 'Pot-Limit Omaha 4', de: 'Pot-Limit Omaha 4', fr: 'Pot-Limit Omaha 4', it: 'Pot-Limit Omaha 4', pt: 'Pot-Limit Omaha 4', ar: 'Pot-Limit Omaha 4', hi: 'Pot-Limit Omaha 4', fa: 'Pot-Limit Omaha 4', tr: 'Pot-Limit Omaha 4', az: 'Pot-Limit Omaha 4', zh: '底池限注奥马哈4', ja: 'ポットリミットオマハ4' },
    desc: {
      ru: 'Четыре карты на руках, больше экшена и комбинаций на каждой улице.',
      en: 'Four hole cards, more action and combinations at every street.',
      es: 'Cuatro cartas en mano, más acción y combinaciones en cada calle.',
      de: 'Vier Hole-Cards, mehr Aktion und Kombinationen an jeder Straße.',
      fr: 'Quatre cartes en main, plus d\'action et de combinaisons à chaque rue.',
      it: 'Quattro carte in mano, più azione e combinazioni a ogni strada.',
      pt: 'Quatro cartas na mão, mais ação e combinações em cada rua.',
      ar: 'أربع بطاقات في اليد، مزيد من الإثارة والمجموعات في كل شارع.',
      hi: 'हाथ में चार पत्ते, हर स्ट्रीट पर अधिक एक्शन और संयोजन।',
      fa: 'چهار کارت در دست، اکشن و ترکیب‌های بیشتر در هر استریت.',
      tr: 'Elde dört kart, her sokakta daha fazla aksiyon ve kombinasyon.',
      az: 'Əldə dörd kart, hər küçədə daha çox aksiya və kombinasiya.',
      zh: '手中四张牌，每条街更多动作和组合。',
      ja: '4枚のホールカード、ストリートごとにより多くのアクションとコンビネーション。',
    },
  },
  {
    img: '/images/game-plo5.png',
    tag: 'PLO5',
    title: { ru: 'Pot-Limit Omaha 5', en: 'Pot-Limit Omaha 5', es: 'Pot-Limit Omaha 5', de: 'Pot-Limit Omaha 5', fr: 'Pot-Limit Omaha 5', it: 'Pot-Limit Omaha 5', pt: 'Pot-Limit Omaha 5', ar: 'Pot-Limit Omaha 5', hi: 'Pot-Limit Omaha 5', fa: 'Pot-Limit Omaha 5', tr: 'Pot-Limit Omaha 5', az: 'Pot-Limit Omaha 5', zh: '底池限注奥马哈5', ja: 'ポットリミットオマハ5' },
    desc: {
      ru: 'Пять карт, максимальная дисперсия и острые ситуации в каждой раздаче.',
      en: 'Five cards, maximum variance and sharp decisions every hand.',
      es: 'Cinco cartas, máxima varianza y situaciones afiladas en cada mano.',
      de: 'Fünf Karten, maximale Varianz und scharfe Entscheidungen in jeder Hand.',
      fr: 'Cinq cartes, variance maximale et décisions tranchées à chaque main.',
      it: 'Cinque carte, massima varianza e decisioni acute in ogni mano.',
      pt: 'Cinco cartas, variância máxima e decisões difíceis em cada mão.',
      ar: 'خمس بطاقات، تباين أقصى وقرارات حادة في كل يد.',
      hi: 'पाँच पत्ते, अधिकतम विचरण और हर हाथ में तीखे निर्णय।',
      fa: 'پنج کارت، بیشترین واریانس و تصمیمات تیز در هر دست.',
      tr: 'Beş kart, maksimum varyans ve her elde keskin kararlar.',
      az: 'Beş kart, maksimum dispersiya və hər əldə kəskin qərarlar.',
      zh: '五张牌，最大方差，每手牌都有尖锐的决策。',
      ja: '5枚のカード、最大のバリアンス、毎ハンドでシャープな判断。',
    },
  },
  {
    img: '/images/game-plo6.png',
    tag: 'PLO6',
    title: { ru: 'Pot-Limit Omaha 6', en: 'Pot-Limit Omaha 6', es: 'Pot-Limit Omaha 6', de: 'Pot-Limit Omaha 6', fr: 'Pot-Limit Omaha 6', it: 'Pot-Limit Omaha 6', pt: 'Pot-Limit Omaha 6', ar: 'Pot-Limit Omaha 6', hi: 'Pot-Limit Omaha 6', fa: 'Pot-Limit Omaha 6', tr: 'Pot-Limit Omaha 6', az: 'Pot-Limit Omaha 6', zh: '底池限注奥马哈6', ja: 'ポットリミットオマハ6' },
    desc: {
      ru: 'Шесть карт — самый экшеновый формат Омахи для опытных игроков.',
      en: 'Six cards — the most action-packed Omaha format for experienced players.',
      es: 'Seis cartas — el formato de Omaha más emocionante para jugadores experimentados.',
      de: 'Sechs Karten — das actionreichste Omaha-Format für erfahrene Spieler.',
      fr: 'Six cartes — le format Omaha le plus riche en action pour les joueurs expérimentés.',
      it: 'Sei carte — il formato Omaha più ricco di azione per giocatori esperti.',
      pt: 'Seis cartas — o formato de Omaha mais emocionante para jogadores experientes.',
      ar: 'ست بطاقات — أكثر تنسيقات أوماها إثارةً للاعبين ذوي الخبرة.',
      hi: 'छह पत्ते — अनुभवी खिलाड़ियों के लिए सबसे एक्शन से भरा ओमाहा प्रारूप।',
      fa: 'شش کارت — پرهیجان‌ترین فرمت اوماها برای بازیکنان با تجربه.',
      tr: 'Altı kart — deneyimli oyuncular için en aksiyon dolu Omaha formatı.',
      az: 'Altı kart — təcrübəli oyunçular üçün ən aksiyalı Omaha formatı.',
      zh: '六张牌——经验丰富的玩家最刺激的奥马哈格式。',
      ja: '6枚のカード — 経験豊富なプレイヤーのための最もアクション豊かなオマハフォーマット。',
    },
  },
  {
    img: '/images/game-mtt.png',
    tag: 'MTT',
    title: {
      ru: 'Мультистольные турниры', en: 'Multi-Table Tournaments',
      es: 'Torneos Multimesa', de: 'Multi-Table-Turniere', fr: 'Tournois Multi-Tables',
      it: 'Tornei Multi-Tavolo', pt: 'Torneios Multi-Mesa', ar: 'بطولات متعددة الطاولات',
      hi: 'मल्टी-टेबल टूर्नामेंट', fa: 'تورنمنت‌های چند میزه', tr: 'Çok Masalı Turnuvalar',
      az: 'Çox Masalı Turnirler', zh: '多桌锦标赛', ja: 'マルチテーブルトーナメント',
    },
    desc: {
      ru: 'Ежедневные турниры с гарантией и гибким расписанием.',
      en: 'Daily guaranteed tournaments with a flexible schedule.',
      es: 'Torneos diarios garantizados con horario flexible.',
      de: 'Tägliche garantierte Turniere mit flexiblem Zeitplan.',
      fr: 'Tournois garantis quotidiens avec un programme flexible.',
      it: 'Tornei giornalieri garantiti con orario flessibile.',
      pt: 'Torneios diários garantidos com horário flexível.',
      ar: 'بطولات يومية مضمونة مع جدول مرن.',
      hi: 'लचीले शेड्यूल के साथ दैनिक गारंटीकृत टूर्नामेंट।',
      fa: 'تورنمنت‌های روزانه با گارانتی و برنامه انعطاف‌پذیر.',
      tr: 'Esnek programlı günlük garantili turnuvalar.',
      az: 'Elastik cədvəl ilə gündəlik zəmanətli turnirler.',
      zh: '每日有保证的赛事，时间灵活。',
      ja: '柔軟なスケジュールの毎日保証付きトーナメント。',
    },
  },
  {
    img: '/images/game-aof.png',
    tag: 'AOF',
    title: { ru: 'All-in or Fold', en: 'All-in or Fold', es: 'All-in or Fold', de: 'All-in or Fold', fr: 'All-in or Fold', it: 'All-in or Fold', pt: 'All-in or Fold', ar: 'All-in or Fold', hi: 'All-in or Fold', fa: 'All-in or Fold', tr: 'All-in or Fold', az: 'All-in or Fold', zh: '全押或弃牌', ja: 'オールインorフォールド' },
    desc: {
      ru: 'Быстрый формат — только олл-ин или фолд. Идеально для мобильной игры.',
      en: 'Fast-fold format — shove or muck. Perfect for mobile play.',
      es: 'Formato rápido — solo all-in o fold. Perfecto para jugar en móvil.',
      de: 'Schnell-Format — nur All-in oder Fold. Perfekt für mobiles Spielen.',
      fr: 'Format rapide — seulement all-in ou fold. Parfait pour jouer sur mobile.',
      it: 'Formato rapido — solo all-in o fold. Perfetto per il gioco mobile.',
      pt: 'Formato rápido — apenas all-in ou fold. Perfeito para jogar no celular.',
      ar: 'تنسيق سريع — فقط ذهاب أو انسحاب. مثالي للعب عبر الهاتف المحمول.',
      hi: 'तेज़ प्रारूप — केवल ऑल-इन या फोल्ड। मोबाइल पर खेलने के लिए आदर्श।',
      fa: 'فرمت سریع — فقط آل‌این یا فولد. ایده‌آل برای بازی موبایل.',
      tr: 'Hızlı format — sadece all-in veya fold. Mobil oyun için mükemmel.',
      az: 'Sürətli format — yalnız all-in və ya fold. Mobil oyun üçün idealdır.',
      zh: '快节奏格式——只有全押或弃牌。非常适合手机游戏。',
      ja: '高速フォーマット — オールインかフォールドのみ。モバイルプレイに最適。',
    },
  },
];

export function Games() {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const getLang = (field: LangText) => field[language] ?? field.en;

  return (
    <section id="games" style={{ padding: isMobile ? '60px 0' : '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>

        {isMobile ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 24 }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
                /// {t('games.label')}
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: 0 }}>
                {t('games.title')}
              </h2>
            </motion.div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 12, overflow: 'hidden', background: '#0d0d0d' }}>
                {gamesData.map((g, i) => (
                  <img key={g.tag} src={g.img} alt={getLang(g.title)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', opacity: i === active ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {gamesData.map((g, i) => {
                const isActive = i === active;
                return (
                  <motion.div key={g.tag} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.055 }} onClick={() => setActive(i)} style={{ padding: '16px 0', borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', position: 'relative', transition: 'opacity 0.25s ease', opacity: isActive ? 1 : 0.38 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--text-faint)', textTransform: 'uppercase', flexShrink: 0, minWidth: 36 }}>{g.tag}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>{getLang(g.title)}</span>
                    </div>
                    <motion.div animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.7, margin: '6px 0 0' }}>{getLang(g.desc)}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 40 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>
                  /// {t('games.label')}
                </div>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', margin: 0 }}>
                  {t('games.title')}
                </h2>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {gamesData.map((g, i) => {
                  const isActive = i === active;
                  return (
                    <motion.div key={g.tag} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.055 }} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} style={{ padding: '18px 0', borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', position: 'relative', transition: 'opacity 0.25s ease', opacity: isActive ? 1 : 0.38 }}>
                      <motion.div animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} style={{ position: 'absolute', left: -32, top: 0, bottom: 0, width: 2, background: 'var(--text)', borderRadius: 1, transformOrigin: 'top' }} />
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--text-faint)', textTransform: 'uppercase', flexShrink: 0, minWidth: 36 }}>{g.tag}</span>
                        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>{getLang(g.title)}</span>
                      </div>
                      <motion.div animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.7, margin: '6px 0 0' }}>{getLang(g.desc)}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div style={{ position: 'sticky', top: 80 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 20, overflow: 'hidden', background: '#0d0d0d' }}>
                {gamesData.map((g, i) => (
                  <img key={g.tag} src={g.img} alt={getLang(g.title)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', opacity: i === active ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
