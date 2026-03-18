import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';

type LangText = Record<string, string>;

interface Review {
  name: string;
  handle: string;
  text: LangText;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Artem K.',
    handle: '@artem_k',
    text: {
      ru: 'Играю в MOJO уже 8 месяцев. Атмосфера приятная, трафик хороший в любое время суток. Менеджер всегда на связи — вопросы решаются быстро.',
      en: 'Been playing at MOJO for 8 months. Great atmosphere, good traffic at any time of day. Manager is always available — issues resolved quickly.',
      es: 'Llevo 8 meses jugando en MOJO. Gran ambiente, buen tráfico a cualquier hora. El mánager siempre está disponible — los problemas se resuelven rápido.',
      de: 'Ich spiele seit 8 Monaten bei MOJO. Tolle Atmosphäre, guter Traffic zu jeder Tageszeit. Manager ist immer erreichbar — Probleme werden schnell gelöst.',
      fr: 'Je joue à MOJO depuis 8 mois. Super ambiance, bon trafic à toute heure. Le manager est toujours disponible — les problèmes se règlent vite.',
      it: 'Gioco a MOJO da 8 mesi. Ottima atmosfera, buon traffico in qualsiasi momento. Il manager è sempre disponibile — i problemi si risolvono rapidamente.',
      pt: 'Jogo no MOJO há 8 meses. Ótima atmosfera, bom tráfico em qualquer hora. O gerente está sempre disponível — os problemas se resolvem rapidamente.',
      ar: 'أنا ألعب في MOJO منذ 8 أشهر. جو رائع، حركة مرور جيدة في أي وقت. المدير متاح دائمًا — المشكلات تُحل بسرعة.',
      hi: 'मैं MOJO में 8 महीनों से खेल रहा हूं। बेहतरीन माहौल, दिन के किसी भी समय अच्छा ट्रैफिक। मैनेजर हमेशा उपलब्ध — समस्याएं जल्दी हल होती हैं।',
      fa: '۸ ماه است که در MOJO بازی می‌کنم. فضای عالی، ترافیک خوب در هر ساعتی. مدیر همیشه در دسترس است — مشکلات سریع حل می‌شوند.',
      tr: '8 aydır MOJO\'da oynuyorum. Harika atmosfer, günün her saatinde iyi trafik. Yönetici her zaman ulaşılabilir — sorunlar hızla çözülüyor.',
      az: '8 aydır MOJO-da oynayıram. Əla atmosfer, günün istənilən vaxtında yaxşı trafik. Menecer həmişə əlçatandır — problemlər tez həll olunur.',
      zh: '我在 MOJO 打了 8 个月。氛围很好，任何时间流量都不错。管理员随时在线——问题解决很快。',
      ja: 'MOJOで8ヶ月間プレイしています。雰囲気が良く、いつでもトラフィックが安定。マネージャーが常に対応 — 問題はすぐに解決されます。',
    },
    rating: 5,
  },
  {
    name: 'Lucas V.',
    handle: '@lucas_v',
    text: {
      ru: 'Перешёл из другого клуба и не пожалел. Столов много, лимиты разные. Регистрация заняла 10 минут, сразу сел за стол.',
      en: 'Switched from another club and have no regrets. Lots of tables, various stakes. Registration took 10 minutes, sat down right away.',
      es: 'Cambié de otro club y no me arrepiento. Muchas mesas, variedad de stakes. El registro tomó 10 minutos, me senté de inmediato.',
      de: 'Ich wechselte von einem anderen Club und bereue es nicht. Viele Tische, verschiedene Stakes. Registrierung 10 Minuten, sofort gespielt.',
      fr: 'Passé d\'un autre club et sans regrets. Beaucoup de tables, différents niveaux. Inscription 10 minutes, assis à la table tout de suite.',
      it: 'Passato da un altro club senza rimpianti. Molti tavoli, varie puntate. Registrazione 10 minuti, subito al tavolo.',
      pt: 'Mudei de outro clube e não me arrependi. Muitas mesas, diversas stakes. O registro levou 10 minutos, sentei imediatamente.',
      ar: 'انتقلت من ناد آخر ولا أندم. الكثير من الطاولات، وحصص متنوعة. التسجيل استغرق 10 دقائق، جلست فورًا.',
      hi: 'दूसरे क्लब से आया और पछतावा नहीं है। कई टेबल, विभिन्न दांव। रजिस्ट्रेशन 10 मिनट में, तुरंत खेलने बैठ गया।',
      fa: 'از باشگاه دیگری آمدم و پشیمان نشدم. میزهای زیاد، استیک‌های مختلف. ثبت‌نام ۱۰ دقیقه طول کشید، فورًا پشت میز نشستم.',
      tr: 'Başka bir kulüpten geçtim ve pişman olmadım. Çok masa, çeşitli limitler. Kayıt 10 dakika, hemen oturdum.',
      az: 'Başqa klubdan keçdim və peşman olmadım. Çox masa, müxtəlif limitlər. Qeydiyyat 10 dəqiqə, dərhal oturdum.',
      zh: '从另一个俱乐部转来，没有后悔。很多桌子，各种级别。注册花了10分钟，马上就开始打牌了。',
      ja: '別のクラブから移ってきて後悔なし。テーブルが多く、様々なステークス。登録は10分で完了、すぐに座りました。',
    },
    rating: 5,
  },
  {
    name: 'Denis S.',
    handle: '@denis_s',
    text: {
      ru: 'Massiv Union — это уровень. Постоянный трафик, ни разу не ждал стол. Рекомендую всем, кто ищет серьёзную игру.',
      en: 'Massiv Union is top tier. Constant traffic, never waited for a table. Recommend to anyone looking for serious play.',
      es: 'Massiv Union es de primer nivel. Tráfico constante, nunca esperé una mesa. Recomiendo a cualquiera que busque juego serio.',
      de: 'Massiv Union ist absolute Spitze. Ständiger Traffic, nie auf einen Tisch gewartet. Empfehle es jedem, der ernsthaftes Spiel sucht.',
      fr: 'Massiv Union est au top. Trafic constant, jamais attendu une table. Recommande à quiconque cherche un jeu sérieux.',
      it: 'Massiv Union è di primo livello. Traffico costante, mai aspettato un tavolo. Consiglio a chiunque cerchi gioco serio.',
      pt: 'Massiv Union é de alto nível. Tráfico constante, nunca esperei por uma mesa. Recomendo a quem busca jogo sério.',
      ar: 'Massiv Union من الطراز الأول. حركة مرور مستمرة، لم أنتظر طاولة أبداً. أوصي به لكل من يبحث عن لعب جاد.',
      hi: 'Massiv Union शीर्ष स्तर का है। निरंतर ट्रैफिक, कभी टेबल के लिए इंतजार नहीं किया। गंभीर खेल की तलाश करने वालों को सुझाव।',
      fa: 'Massiv Union در سطح بالایی است. ترافیک دائمی، هرگز منتظر میز نبودم. به هر کسی که دنبال بازی جدی است توصیه می‌کنم.',
      tr: 'Massiv Union birinci sınıf. Sürekli trafik, hiç masa beklemedim. Ciddi oyun arayanlar için tavsiye ederim.',
      az: 'Massiv Union ən yüksək səviyyədədir. Daimi trafik, heç vaxt masa gözləmədim. Ciddi oyun axtaranlara tövsiyə edirəm.',
      zh: 'Massiv Union 一流。持续有流量，从不需要等桌。推荐给所有寻求认真游戏的人。',
      ja: 'Massiv Unionはトップクラスです。常にトラフィックがあり、テーブルを待ったことがありません。本格的なプレイを求める方にお勧めします。',
    },
    rating: 5,
  },
  {
    name: 'Kemal P.',
    handle: '@kemal_p',
    text: {
      ru: 'Честный клуб без лишних вопросов. Поддержка отвечает даже ночью. За год игры — ни одного нарушения условий.',
      en: 'Honest club, no unnecessary questions. Support replies even at night. One year of play — zero policy violations.',
      es: 'Club honesto, sin preguntas innecesarias. El soporte responde incluso de noche. Un año de juego — cero violaciones de política.',
      de: 'Ehrlicher Club, keine unnötigen Fragen. Support antwortet sogar nachts. Ein Jahr Spiel — null Policy-Verstöße.',
      fr: 'Club honnête, sans questions inutiles. Le support répond même la nuit. Un an de jeu — zéro violation de règles.',
      it: 'Club onesto, nessuna domanda inutile. Il supporto risponde anche di notte. Un anno di gioco — zero violazioni.',
      pt: 'Clube honesto, sem perguntas desnecessárias. O suporte responde mesmo à noite. Um ano de jogo — zero violações.',
      ar: 'نادٍ صادق، بدون أسئلة غير ضرورية. الدعم يرد حتى في الليل. عام من اللعب — صفر انتهاكات.',
      hi: 'ईमानदार क्लब, बिना अनावश्यक सवालों के। सपोर्ट रात को भी जवाब देता है। एक साल का खेल — शून्य नीति उल्लंघन।',
      fa: 'باشگاه صادق، بدون سوالات غیرضروری. پشتیبانی حتی شب هم جواب می‌دهد. یک سال بازی — صفر تخلف.',
      tr: 'Dürüst kulüp, gereksiz sorular yok. Destek gece bile yanıt veriyor. Bir yıllık oyun — sıfır kural ihlali.',
      az: 'Dürüst klub, lazımsız suallar yoxdur. Dəstək gecə belə cavab verir. Bir il oyun — sıfır qayda pozuntusu.',
      zh: '诚实的俱乐部，没有不必要的问题。支持即使在晚上也会回复。一年游戏——零违规。',
      ja: '誠実なクラブ、余計な質問なし。サポートは夜でも対応します。1年間 — ポリシー違反ゼロ。',
    },
    rating: 5,
  },
  {
    name: 'Carlos M.',
    handle: '@carlos_m',
    text: {
      ru: 'Начинал с низких лимитов, сейчас играю NL100+. Клуб вырос вместе со мной. Советую новичкам — здесь комфортно стартовать.',
      en: 'Started at low stakes, now playing NL100+. The club grew with me. Recommend to beginners — comfortable place to start.',
      es: 'Empecé con stakes bajos, ahora juego NL100+. El club creció conmigo. Recomiendo a los principiantes — cómodo para empezar.',
      de: 'Angefangen mit niedrigen Stakes, jetzt NL100+. Der Club ist mit mir gewachsen. Empfehle Anfängern — komfortabler Einstieg.',
      fr: 'Commencé avec de petites mises, maintenant NL100+. Le club a grandi avec moi. Recommande aux débutants — confortable pour commencer.',
      it: 'Iniziato con piccole puntate, ora NL100+. Il club è cresciuto con me. Consiglio ai principianti — posto comodo per iniziare.',
      pt: 'Comecei com stakes baixas, agora jogo NL100+. O clube cresceu comigo. Recomendo para iniciantes — lugar confortável para começar.',
      ar: 'بدأت بحصص منخفضة، الآن ألعب NL100+. النادي نما معي. أوصي للمبتدئين — مكان مريح للبدء.',
      hi: 'कम दांव से शुरू किया, अब NL100+ खेल रहा हूं। क्लब मेरे साथ बढ़ा। शुरुआती खिलाड़ियों को सुझाव — शुरुआत के लिए आरामदायक।',
      fa: 'از استیک‌های پایین شروع کردم، الان NL100+ بازی می‌کنم. باشگاه با من رشد کرد. به مبتدیان توصیه می‌کنم — جای مناسب برای شروع.',
      tr: 'Düşük limitlerle başladım, şimdi NL100+ oynuyorum. Kulüp benimle büyüdü. Yeni başlayanlara tavsiye ederim — rahat bir başlangıç yeri.',
      az: 'Aşağı limitlərlə başladım, indi NL100+ oynayıram. Klub mənimlə böyüdü. Yeni başlayanlara tövsiyə edirəm — başlamaq üçün rahat yer.',
      zh: '从低筹码开始，现在打 NL100+。俱乐部和我一起成长。推荐给新手——舒适的起步之地。',
      ja: '低いステークスから始め、今はNL100+でプレイ。クラブと一緒に成長しました。初心者におすすめ — 始めやすい場所です。',
    },
    rating: 5,
  },
  {
    name: 'Andrei T.',
    handle: '@andrei_t',
    text: {
      ru: 'GGClub приложение стабильное, лагов нет. MOJO выбрал за репутацию — всё соответствует. Коллектив адекватный.',
      en: 'GGClub app is stable, no lag. Chose MOJO for its reputation — everything matches. Good community.',
      es: 'La app de GGClub es estable, sin lag. Elegí MOJO por su reputación — todo coincide. Buena comunidad.',
      de: 'Die GGClub-App ist stabil, kein Lag. MOJO wegen des Rufs gewählt — alles stimmt. Gute Community.',
      fr: 'L\'app GGClub est stable, pas de lag. Choisi MOJO pour sa réputation — tout correspond. Bonne communauté.',
      it: 'L\'app GGClub è stabile, nessun lag. Scelto MOJO per la reputazione — tutto corrisponde. Buona community.',
      pt: 'O app GGClub é estável, sem lag. Escolhi o MOJO pela reputação — tudo corresponde. Boa comunidade.',
      ar: 'تطبيق GGClub مستقر، لا تأخير. اخترت MOJO بسبب سمعته — كل شيء يتوافق. مجتمع جيد.',
      hi: 'GGClub ऐप स्थिर है, कोई लैग नहीं। MOJO को उसकी प्रतिष्ठा के लिए चुना — सब कुछ मेल खाता है। अच्छा समुदाय।',
      fa: 'اپلیکیشن GGClub پایدار است، لگ ندارد. MOJO را به خاطر شهرتش انتخاب کردم — همه چیز مطابقت دارد. جامعه خوب.',
      tr: 'GGClub uygulaması kararlı, gecikme yok. MOJO\'yu itibarı için seçtim — her şey uyuşuyor. İyi topluluk.',
      az: 'GGClub tətbiqi sabitdir, gecikmə yoxdur. MOJO-nu reputasiyasına görə seçdim — hər şey uyğun gəlir. Yaxşı icma.',
      zh: 'GGClub 应用稳定，没有延迟。因声誉选择了 MOJO——一切都名副其实。社区很好。',
      ja: 'GGClubアプリは安定、ラグなし。評判でMOJOを選びました — すべてが一致。良いコミュニティです。',
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
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  const getLang = (field: LangText) => field[language] ?? field.en;

  return (
    <section id="reviews" style={{ padding: isMobile ? '60px 0' : '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ marginBottom: isMobile ? 36 : 56 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 14 }}>
            /// {t('reviews.label')}
          </p>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--text)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontFamily: 'Space Grotesk, sans-serif' }}>
            {t('reviews.title')}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
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
                "{getLang(r.text)}"
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
