export type Language = 'en' | 'ru' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'ar' | 'hi' | 'fa' | 'tr' | 'az' | 'zh' | 'ja';

export const RTL_LANGUAGES: Language[] = ['ar', 'fa'];
export function isRTL(lang: Language): boolean { return RTL_LANGUAGES.includes(lang); }

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English', ru: 'Русский', es: 'Español', de: 'Deutsch', fr: 'Français',
  it: 'Italiano', pt: 'Português', ar: 'العربية', hi: 'हिंदी', fa: 'فارسی',
  tr: 'Türkçe', az: 'Azərbaycanca', zh: '中文', ja: '日本語',
};
export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN', ru: 'RU', es: 'ES', de: 'DE', fr: 'FR', it: 'IT', pt: 'PT',
  ar: 'AR', hi: 'HI', fa: 'FA', tr: 'TR', az: 'AZ', zh: 'ZH', ja: 'JA',
};

// ---------------------------------------------------------------------------
// Helper to keep TypeScript happy without verbose typing
// ---------------------------------------------------------------------------
const t = <T extends object>(obj: T): T => obj;

// ---------------------------------------------------------------------------
// Short UI strings translated for ALL 14 languages
// Long descriptive content: EN + RU only (others fall back to EN via t())
// ---------------------------------------------------------------------------
export const translations = {

  // ─────────────── ENGLISH ───────────────
  en: t({
    nav: {
      clubs: 'Our Clubs', guides: 'Guides', about: 'About', reviews: 'Reviews',
      download: 'Download', contact: 'Contact',
      downloadGG: 'Download GGClub', createAccount: 'Create GGClub Account', joinClub: 'Join the Club',
    },
    hero: {
      title: 'Next Level', titleHighlight: 'Poker Club',
      subtitle: 'Join MOJO on the exclusive ClubGG network. Premium tables, exceptional service, and the highest stakes.',
      cta: 'Join Now', secondaryCta: 'Message Manager',
    },
    about: {
      title: 'About Us', subtitle: 'The Premier Poker Experience',
      content1: 'MOJO Poker Club is an exclusive community operating within the highly acclaimed ClubGG app network. We provide a secure, high-quality, and thrilling environment for poker enthusiasts of all levels.',
      content2: "Whether you're looking for casual low-stakes games or high-roller VIP tables, our club offers unparalleled action 24/7.",
      stats: { players: 'Active Players', tables: 'Daily Tables', support: 'Support' },
      heading: 'Best Conditions on the Market',
      massivLabel: 'for Massiv Poker Union',
      massivDesc: 'Massiv Poker Union is one of the largest and most popular poker club unions. Players from around the world keep the tables running at virtually any time and across a wide range of stakes. The union is known for its activity, massive player pool, and is considered one of the best places to play within club poker communities.',
      createAccountLink: 'How to Create Account',
      chipValue: '1:1', chipLabel: 'Chip Rate', chipDesc: 'Direct exchange, no commission',
      rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Best rakeback on the market',
    },
    features: {
      trusted: { title: 'Trusted Club', desc: 'Proven reputation and thousands of active players' },
      active: { title: 'Active Games', desc: 'Live tables with real traffic around the clock' },
      support: { title: '24/7 Support', desc: 'Personal manager always available for you' },
    },
    games: { label: 'GAME FORMATS', title: 'Available Formats' },
    reviews: { label: 'REVIEWS', title: 'What Players Say' },
    clubs: {
      title: 'Our Clubs', subtitle: 'Choose Your Arena',
      mojo: { name: 'MOJO', desc: 'Our flagship club offering exclusive tables, daily action, and a tight-knit community.', feature1: 'Exclusive VIP Tables', feature2: 'Active Tables 24/7', feature3: 'Tight-knit Community' },
      massiv: { name: 'MOJO 2 Massiv Union', desc: 'Access a massive pool of players. More action, tables at any stake, zero waiting.', feature1: 'Massive Player Pool', feature2: 'Tables for Any Stake', feature3: '24/7 Global Action' },
      copied: 'Copied!', copyId: 'Copy ID', members: 'Players', tables: 'Tables',
      chipLabel: 'Chip', rakebackLabel: 'Rakeback', onlineLabel: 'Online', learnMore: 'Learn More',
    },
    join: {
      label: 'How to join', title: 'How to join the club?',
      step1: { title: 'Download the GGClub app', desc: 'Available for Android and iOS. Free.', link: 'Go to download →' },
      step2: { title: 'Register a GGClub account', desc: 'Follow the account creation guide.', descVpn: 'Use VPN with the correct GEO — detailed registration guide.', link: 'Registration guide →' },
      step3: { title: 'Join the club — ID:', desc: 'Find the club by ID {id} and enter referral code {code}.', link: 'How to join →' },
      step4: { title: 'Message the manager', desc: 'After joining, contact @Mojo_Adm on Telegram.', link: 'Write to manager →' },
    },
    howToJoin: {
      title: 'How to Join', subtitle: 'Start Playing in Minutes',
      step1: { title: 'Download ClubGG', desc: 'Download the ClubGG Poker app from our download page for your device.' },
      step2: { title: 'Find Our Clubs', desc: 'Sign in and find our clubs using the Club IDs provided.' },
      step3: { title: 'Contact Manager', desc: 'Message @Mojo_Adm on Telegram with your nickname and which club you joined.' },
    },
    stats: {
      title: 'Club Statistics', subtitle: 'By the Numbers',
      players: '1 000+', playersLabel: 'Active Players',
      tables: '100+', tablesLabel: 'Daily Tables',
      support: '24/7', supportLabel: 'VIP Support',
    },
    download: {
      title: 'Download ClubGG Poker', subtitle: 'Choose your platform',
      label: 'Download App', cta: 'Download Now', note: 'No purchase required',
      apkLabel: 'Download APK', exeLabel: 'Download .exe',
      android: { title: 'Download for Android', badge: 'APK file • Direct install', btn: 'Download APK', step1: 'Click download button', step2: 'Allow installation from unknown sources', step3: 'Install the APK file', step4: 'Open the app' },
      ios: { title: 'Download for iPhone', badge: 'App Store • Official', btn: 'Open App Store', step1: 'Click button', step2: 'App Store will open', step3: 'Install the app', step4: 'Ready to play' },
      pc: { title: 'Download for PC', badge: 'Windows • Desktop version', btn: 'Download Installer', step1: 'Download the installer', step2: 'Run the EXE file', step3: 'Follow installation instructions', step4: 'Log into your account' },
      joinProcessTitle: 'Ready to join?', joinProcessSubtitle: 'Follow these steps to start playing',
    },
    contact: { title: 'Ready to Play?', subtitle: 'Contact our 24/7 support team to get started.', btn: 'Message on Telegram', note: 'Fast response • Personal manager • Active 24/7' },
    footer: {
      rights: 'All rights reserved.', disclaimer: '', referralCode: 'Referral code:',
      navHeading: 'Navigation', clubsHeading: 'Clubs', guidesHeading: 'Guides', contactHeading: 'Contacts',
      aboutLink: 'About', joinLink: 'How to Join', downloadLink: 'Download GGClub',
      installLink: 'How to Install', createAccountLink: 'Create Account',
      managerLink: '@Mojo_Adm — manager', channelLink: 'Official channel', chatLink: "Players' chat",
    },
  }),

  // ─────────────── RUSSIAN ───────────────
  ru: t({
    nav: {
      clubs: 'Наши клубы', guides: 'Инструкции', about: 'О нас', reviews: 'Отзывы',
      download: 'Скачать', contact: 'Связаться',
      downloadGG: 'Скачать GGClub', createAccount: 'Создание аккаунта GGClub', joinClub: 'Вступление в клуб',
    },
    hero: {
      title: 'Покерный клуб', titleHighlight: 'нового уровня',
      subtitle: 'Присоединяйтесь к MOJO в эксклюзивной сети ClubGG. Премиум столы, безупречный сервис и самые высокие ставки.',
      cta: 'Вступить сейчас', secondaryCta: 'Написать менеджеру',
    },
    about: {
      title: 'О нас', subtitle: 'Премиальный покерный опыт',
      content1: 'MOJO Poker Club — эксклюзивное сообщество в сети ClubGG. Безопасная, качественная и захватывающая среда для любителей покера всех уровней.',
      content2: 'Ищете расслабленную игру на низких лимитах или VIP-столы для хайроллеров — наш клуб предлагает непрерывный экшен 24/7.',
      stats: { players: 'Активных игроков', tables: 'Столов ежедневно', support: 'Поддержка' },
      heading: 'Лучшие условия на рынке',
      massivLabel: 'для Massiv Poker Union',
      massivDesc: 'Massiv Poker Union — один из самых крупных и популярных покерных союзов клубов. Здесь играет большое количество игроков со всего мира, благодаря чему столы запускаются практически в любое время и на разных лимитах. Союз известен своей активностью, большим пулом игроков и считается одним из лучших мест для игры среди клубных покерных сообществ.',
      createAccountLink: 'Как создать аккаунт',
      chipValue: '1к1', chipLabel: 'Фишка', chipDesc: 'Прямой обмен без комиссии',
      rakebackValue: '50%', rakebackLabel: 'Рейкбек', rakebackDesc: 'Лучший рейкбек на рынке',
    },
    features: {
      trusted: { title: 'Надёжность', desc: 'Клуб с проверенной репутацией и тысячами игроков' },
      active: { title: 'Активная игра', desc: 'Столы с живым трафиком в любое время суток' },
      support: { title: 'Поддержка 24/7', desc: 'Персональный менеджер всегда на связи' },
    },
    games: { label: 'ФОРМАТЫ ИГРЫ', title: 'Доступные форматы' },
    reviews: { label: 'ОТЗЫВЫ', title: 'Что говорят игроки' },
    clubs: {
      title: 'Наши клубы', subtitle: 'Выберите свою арену',
      mojo: { name: 'MOJO', desc: 'Флагманский клуб с эксклюзивными столами, ежедневным экшеном и сплочённым сообществом.', feature1: 'Эксклюзивные VIP столы', feature2: 'Активные столы 24/7', feature3: 'Сплочённое сообщество' },
      massiv: { name: 'MOJO 2 Massiv Union', desc: 'Огромный пул игроков через обширный союз. Больше экшена, столы на любой лимит, ноль ожидания.', feature1: 'Огромный пул игроков', feature2: 'Столы на любой лимит', feature3: 'Глобальная игра 24/7' },
      copied: 'Скопировано!', copyId: 'Скопировать ID', members: 'Игроки', tables: 'Столы',
      chipLabel: 'Фишка', rakebackLabel: 'Рейкбек', onlineLabel: 'Онлайн', learnMore: 'Подробнее о клубе',
    },
    join: {
      label: 'Инструкция', title: 'Как вступить в клуб?',
      step1: { title: 'Скачайте приложение GGClub', desc: 'Доступно для Android и iOS. Бесплатно.', link: 'Перейти к скачиванию →' },
      step2: { title: 'Зарегистрируйте аккаунт GGClub', desc: 'Следуйте инструкции по созданию аккаунта.', descVpn: 'Используйте VPN с нужным ГЕО — подробная инструкция по регистрации.', link: 'Инструкция по регистрации →' },
      step3: { title: 'Вступите в клуб — ID:', desc: 'Найдите клуб по ID {id} и введите реферальный код {code}.', link: 'Как вступить в клуб →' },
      step4: { title: 'Напишите менеджеру', desc: 'После вступления свяжитесь с @Mojo_Adm в Telegram.', link: 'Написать менеджеру →' },
    },
    howToJoin: {
      title: 'Как вступить', subtitle: 'Начните играть за считанные минуты',
      step1: { title: 'Скачать ClubGG', desc: 'Скачайте приложение ClubGG Poker на странице загрузки.' },
      step2: { title: 'Найти наши клубы', desc: 'Войдите в аккаунт и найдите клубы по Club ID.' },
      step3: { title: 'Написать менеджеру', desc: 'Свяжитесь с @Mojo_Adm в Telegram, укажите ник и клуб.' },
    },
    stats: {
      title: 'Статистика клуба', subtitle: 'В цифрах',
      players: '1 000+', playersLabel: 'Активных игроков',
      tables: '100+', tablesLabel: 'Столов ежедневно',
      support: '24/7', supportLabel: 'VIP Поддержка',
    },
    download: {
      title: 'Скачать ClubGG Poker', subtitle: 'Выберите вашу платформу',
      label: 'Скачать приложение', cta: 'Скачать сейчас', note: 'Покупка не требуется',
      apkLabel: 'Скачать APK', exeLabel: 'Скачать .exe',
      android: { title: 'Скачать для Android', badge: 'APK файл • Прямая установка', btn: 'Скачать APK', step1: 'Нажмите кнопку скачать', step2: 'Разрешите установку из неизвестных источников', step3: 'Установите APK файл', step4: 'Откройте приложение' },
      ios: { title: 'Скачать для iPhone', badge: 'App Store • Официально', btn: 'Открыть App Store', step1: 'Нажмите кнопку', step2: 'Откроется App Store', step3: 'Установите приложение', step4: 'Готово к игре' },
      pc: { title: 'Скачать для PC', badge: 'Windows • Desktop версия', btn: 'Скачать установщик', step1: 'Скачайте установщик', step2: 'Запустите EXE файл', step3: 'Следуйте инструкциям', step4: 'Войдите в аккаунт' },
      joinProcessTitle: 'Готовы присоединиться?', joinProcessSubtitle: 'Выполните эти шаги, чтобы начать играть',
    },
    contact: { title: 'Готовы играть?', subtitle: 'Свяжитесь с поддержкой 24/7 чтобы начать.', btn: 'Написать в Telegram', note: 'Быстрые ответы • Персональный менеджер • Онлайн 24/7' },
    footer: {
      rights: 'Все права защищены.', disclaimer: '', referralCode: 'Реферальный код:',
      navHeading: 'Навигация', clubsHeading: 'Клубы', guidesHeading: 'Инструкции', contactHeading: 'Контакты',
      aboutLink: 'О нас', joinLink: 'Как вступить', downloadLink: 'Скачать ClubGG',
      installLink: 'Как установить', createAccountLink: 'Создать аккаунт',
      managerLink: '@Mojo_Adm — менеджер', channelLink: 'Официальный канал', chatLink: 'Чат игроков',
    },
  }),

  // ─────────────── SPANISH ───────────────
  es: t({
    nav: { clubs: 'Nuestros Clubs', guides: 'Guías', about: 'Nosotros', reviews: 'Reseñas', download: 'Descargar', contact: 'Contacto', downloadGG: 'Descargar GGClub', createAccount: 'Crear cuenta GGClub', joinClub: 'Unirse al Club' },
    hero: { title: 'Club de Póker', titleHighlight: 'de élite', subtitle: 'Únete a MOJO en la red exclusiva ClubGG. Mesas premium, servicio excepcional y las apuestas más altas.', cta: 'Únete ahora', secondaryCta: 'Contactar manager' },
    about: {
      title: 'Sobre nosotros', subtitle: 'La experiencia poker premium',
      content1: 'MOJO Poker Club es una comunidad exclusiva en la red ClubGG. Ofrecemos un ambiente seguro y emocionante para jugadores de todos los niveles.',
      content2: 'Busques partidas casuales o mesas VIP, nuestro club ofrece acción 24/7.',
      stats: { players: 'Jugadores activos', tables: 'Mesas diarias', support: 'Soporte' },
      heading: 'Las Mejores Condiciones del Mercado', massivLabel: 'para Massiv Poker Union', massivDesc: '',
      createAccountLink: 'Cómo crear cuenta',
      chipValue: '1:1', chipLabel: 'Tasa de Fichas', chipDesc: 'Intercambio directo, sin comisión',
      rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Mejor rakeback del mercado',
    },
    features: { trusted: { title: 'Club de Confianza', desc: 'Reputación probada y miles de jugadores activos' }, active: { title: 'Juegos Activos', desc: 'Mesas en vivo con tráfico real las 24 horas' }, support: { title: 'Soporte 24/7', desc: 'Manager personal siempre disponible para ti' } },
    games: { label: 'FORMATOS DE JUEGO', title: 'Formatos Disponibles' },
    reviews: { label: 'RESEÑAS', title: 'Lo Que Dicen los Jugadores' },
    clubs: { title: 'Nuestros Clubs', subtitle: 'Elige tu arena', mojo: { name: 'MOJO', desc: 'Club insignia con mesas exclusivas, acción diaria y comunidad unida.', feature1: 'Mesas VIP exclusivas', feature2: 'Mesas activas 24/7', feature3: 'Comunidad unida' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Accede a un enorme pool de jugadores. Más acción, sin esperas.', feature1: 'Gran pool de jugadores', feature2: 'Mesas para cualquier apuesta', feature3: 'Acción global 24/7' }, copied: '¡Copiado!', copyId: 'Copiar ID', members: 'Jugadores', tables: 'Mesas', chipLabel: 'Ficha', rakebackLabel: 'Rakeback', onlineLabel: 'En línea', learnMore: 'Saber más' },
    join: { label: 'Cómo unirse', title: '¿Cómo unirse al club?', step1: { title: 'Descarga la app GGClub', desc: 'Disponible para Android e iOS. Gratis.', link: 'Ir a descargar →' }, step2: { title: 'Regístrate en GGClub', desc: 'Sigue la guía de creación de cuenta.', descVpn: 'Usa VPN con el GEO correcto.', link: 'Guía de registro →' }, step3: { title: 'Únete al club — ID:', desc: 'Encuentra el club por ID {id} e ingresa el código {code}.', link: 'Cómo unirse →' }, step4: { title: 'Escribe al manager', desc: 'Tras unirte, contacta a @Mojo_Adm en Telegram.', link: 'Escribir al manager →' } },
    howToJoin: { title: 'Cómo unirse', subtitle: 'Empieza a jugar en minutos', step1: { title: 'Descargar ClubGG', desc: 'Descarga la app ClubGG Poker.' }, step2: { title: 'Encontrar nuestros clubs', desc: 'Inicia sesión y busca los clubs.' }, step3: { title: 'Contactar al manager', desc: 'Escribe a @Mojo_Adm con tu apodo.' } },
    stats: { title: 'Estadísticas del club', subtitle: 'En números', players: '1 000+', playersLabel: 'Jugadores activos', tables: '100+', tablesLabel: 'Mesas diarias', support: '24/7', supportLabel: 'Soporte VIP' },
    download: { title: 'Descargar ClubGG Poker', subtitle: 'Elige tu plataforma', label: 'Descargar app', cta: 'Descargar ahora', note: 'Sin compra requerida', apkLabel: 'Descargar APK', exeLabel: 'Descargar .exe', android: { title: 'Para Android', badge: 'APK • Instalación directa', btn: 'Descargar APK', step1: 'Pulsa descargar', step2: 'Permite fuentes desconocidas', step3: 'Instala APK', step4: 'Abre la app' }, ios: { title: 'Para iPhone', badge: 'App Store • Oficial', btn: 'App Store', step1: 'Pulsa el botón', step2: 'Abre App Store', step3: 'Instala', step4: 'Listo' }, pc: { title: 'Para PC', badge: 'Windows', btn: 'Descargar', step1: 'Descarga', step2: 'Ejecuta EXE', step3: 'Sigue instrucciones', step4: 'Inicia sesión' }, joinProcessTitle: '¿Listo para unirte?', joinProcessSubtitle: 'Sigue estos pasos' },
    contact: { title: '¿Listo para jugar?', subtitle: 'Contacta con nuestro equipo 24/7.', btn: 'Escribir en Telegram', note: 'Respuesta rápida • Manager personal • 24/7' },
    footer: { rights: 'Todos los derechos reservados.', disclaimer: '', referralCode: 'Código de referido:', navHeading: 'Navegación', clubsHeading: 'Clubs', guidesHeading: 'Guías', contactHeading: 'Contacto', aboutLink: 'Nosotros', joinLink: 'Cómo unirse', downloadLink: 'Descargar GGClub', installLink: 'Cómo instalar', createAccountLink: 'Crear cuenta', managerLink: '@Mojo_Adm — manager', channelLink: 'Canal oficial', chatLink: 'Chat de jugadores' },
  }),

  // ─────────────── GERMAN ───────────────
  de: t({
    nav: { clubs: 'Unsere Clubs', guides: 'Anleitungen', about: 'Über uns', reviews: 'Bewertungen', download: 'Download', contact: 'Kontakt', downloadGG: 'GGClub herunterladen', createAccount: 'GGClub-Konto erstellen', joinClub: 'Club beitreten' },
    hero: { title: 'Poker Club', titleHighlight: 'der nächsten Stufe', subtitle: 'Trete MOJO im exklusiven ClubGG-Netzwerk bei. Premium-Tische, erstklassiger Service und die höchsten Einsätze.', cta: 'Jetzt beitreten', secondaryCta: 'Manager kontaktieren' },
    about: { title: 'Über uns', subtitle: 'Das Premium-Pokererlebnis', content1: 'MOJO Poker Club ist eine exklusive Gemeinschaft im ClubGG-Netzwerk.', content2: 'Ob entspanntes Spiel oder VIP-Tische – unser Club bietet 24/7 Action.', stats: { players: 'Aktive Spieler', tables: 'Tägliche Tische', support: 'Support' }, heading: 'Beste Konditionen auf dem Markt', massivLabel: 'für Massiv Poker Union', massivDesc: '', createAccountLink: 'Konto erstellen', chipValue: '1:1', chipLabel: 'Chip-Rate', chipDesc: 'Direkttausch, keine Provision', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Bestes Rakeback auf dem Markt' },
    features: { trusted: { title: 'Vertrauenswürdiger Club', desc: 'Bewährter Ruf und Tausende aktiver Spieler' }, active: { title: 'Aktive Spiele', desc: 'Live-Tische mit echtem Traffic rund um die Uhr' }, support: { title: '24/7 Support', desc: 'Persönlicher Manager immer für dich verfügbar' } },
    games: { label: 'SPIELFORMATE', title: 'Verfügbare Formate' },
    reviews: { label: 'BEWERTUNGEN', title: 'Was die Spieler sagen' },
    clubs: { title: 'Unsere Clubs', subtitle: 'Wähle deine Arena', mojo: { name: 'MOJO', desc: 'Flaggschiff-Club mit exklusiven Tischen und enger Gemeinschaft.', feature1: 'Exklusive VIP-Tische', feature2: '24/7 aktive Tische', feature3: 'Enge Gemeinschaft' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Zugang zu einem riesigen Spielerpool ohne Wartezeit.', feature1: 'Riesiger Spielerpool', feature2: 'Tische für jeden Einsatz', feature3: 'Globale Action 24/7' }, copied: 'Kopiert!', copyId: 'ID kopieren', members: 'Spieler', tables: 'Tische', chipLabel: 'Chip', rakebackLabel: 'Rakeback', onlineLabel: 'Online', learnMore: 'Mehr erfahren' },
    join: { label: 'Beitritt', title: 'Wie tritt man dem Club bei?', step1: { title: 'GGClub App herunterladen', desc: 'Für Android und iOS. Kostenlos.', link: 'Zum Download →' }, step2: { title: 'GGClub-Konto erstellen', desc: 'Folge der Anleitung zur Kontoerstellung.', descVpn: 'Nutze VPN mit dem richtigen GEO.', link: 'Registrierungsanleitung →' }, step3: { title: 'Club beitreten — ID:', desc: 'Finde den Club über ID {id} und gib Code {code} ein.', link: 'Wie beitreten →' }, step4: { title: 'Manager kontaktieren', desc: 'Nach dem Beitritt @Mojo_Adm auf Telegram kontaktieren.', link: 'Manager schreiben →' } },
    howToJoin: { title: 'So trittst du bei', subtitle: 'Fang in Minuten an zu spielen', step1: { title: 'ClubGG herunterladen', desc: 'Lade die ClubGG Poker App herunter.' }, step2: { title: 'Clubs finden', desc: 'Melde dich an und suche unsere Clubs.' }, step3: { title: 'Manager kontaktieren', desc: 'Schreibe @Mojo_Adm mit deinem Nickname.' } },
    stats: { title: 'Club-Statistiken', subtitle: 'In Zahlen', players: '1 000+', playersLabel: 'Aktive Spieler', tables: '100+', tablesLabel: 'Tägliche Tische', support: '24/7', supportLabel: 'VIP-Support' },
    download: { title: 'ClubGG Poker herunterladen', subtitle: 'Wähle deine Plattform', label: 'App herunterladen', cta: 'Jetzt herunterladen', note: 'Kein Kauf erforderlich', apkLabel: 'APK herunterladen', exeLabel: '.exe herunterladen', android: { title: 'Für Android', badge: 'APK-Datei', btn: 'APK laden', step1: 'Download drücken', step2: 'Unbekannte Quellen erlauben', step3: 'APK installieren', step4: 'App öffnen' }, ios: { title: 'Für iPhone', badge: 'App Store', btn: 'App Store öffnen', step1: 'Drücken', step2: 'App Store öffnet', step3: 'Installieren', step4: 'Bereit' }, pc: { title: 'Für PC', badge: 'Windows', btn: 'Installer laden', step1: 'Installer laden', step2: 'EXE ausführen', step3: 'Anweisungen folgen', step4: 'Einloggen' }, joinProcessTitle: 'Bereit beizutreten?', joinProcessSubtitle: 'Folge diesen Schritten' },
    contact: { title: 'Bereit zu spielen?', subtitle: 'Kontaktiere unser 24/7-Team.', btn: 'Auf Telegram schreiben', note: 'Schnelle Antwort • Persönlicher Manager • 24/7' },
    footer: { rights: 'Alle Rechte vorbehalten.', disclaimer: '', referralCode: 'Referral-Code:', navHeading: 'Navigation', clubsHeading: 'Clubs', guidesHeading: 'Anleitungen', contactHeading: 'Kontakte', aboutLink: 'Über uns', joinLink: 'Beitreten', downloadLink: 'GGClub herunterladen', installLink: 'Installation', createAccountLink: 'Konto erstellen', managerLink: '@Mojo_Adm — Manager', channelLink: 'Offizieller Kanal', chatLink: 'Spieler-Chat' },
  }),

  // ─────────────── FRENCH ───────────────
  fr: t({
    nav: { clubs: 'Nos Clubs', guides: 'Guides', about: 'À propos', reviews: 'Avis', download: 'Télécharger', contact: 'Contact', downloadGG: 'Télécharger GGClub', createAccount: 'Créer un compte GGClub', joinClub: 'Rejoindre le Club' },
    hero: { title: 'Club de Poker', titleHighlight: 'de haut niveau', subtitle: 'Rejoignez MOJO sur le réseau exclusif ClubGG. Tables premium, service exceptionnel et les enjeux les plus élevés.', cta: 'Rejoindre maintenant', secondaryCta: 'Contacter le manager' },
    about: { title: 'À propos', subtitle: "L'expérience poker premium", content1: 'MOJO Poker Club est une communauté exclusive dans le réseau ClubGG.', content2: 'Partidas décontractées ou tables VIP — notre club offre une action 24/7.', stats: { players: 'Joueurs actifs', tables: 'Tables quotidiennes', support: 'Support' }, heading: 'Meilleures Conditions du Marché', massivLabel: 'pour Massiv Poker Union', massivDesc: '', createAccountLink: 'Comment créer un compte', chipValue: '1:1', chipLabel: 'Taux de Jetons', chipDesc: 'Échange direct, sans commission', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Meilleur rakeback du marché' },
    features: { trusted: { title: 'Club de Confiance', desc: 'Réputation prouvée et des milliers de joueurs actifs' }, active: { title: 'Jeux Actifs', desc: 'Tables en direct avec trafic réel 24h/24' }, support: { title: 'Support 24/7', desc: 'Manager personnel toujours disponible' } },
    games: { label: 'FORMATS DE JEU', title: 'Formats Disponibles' },
    reviews: { label: 'AVIS', title: 'Ce que Disent les Joueurs' },
    clubs: { title: 'Nos Clubs', subtitle: 'Choisissez votre arène', mojo: { name: 'MOJO', desc: 'Notre club phare avec tables exclusives et communauté soudée.', feature1: 'Tables VIP exclusives', feature2: 'Tables actives 24/7', feature3: 'Communauté soudée' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Accès à un immense pool de joueurs, zéro attente.', feature1: 'Grand pool de joueurs', feature2: 'Tables pour toutes les mises', feature3: 'Action mondiale 24/7' }, copied: 'Copié !', copyId: "Copier l'ID", members: 'Joueurs', tables: 'Tables', chipLabel: 'Jeton', rakebackLabel: 'Rakeback', onlineLabel: 'En ligne', learnMore: 'En savoir plus' },
    join: { label: 'Comment rejoindre', title: 'Comment rejoindre le club?', step1: { title: "Télécharge l'app GGClub", desc: 'Disponible sur Android et iOS. Gratuit.', link: 'Aller au téléchargement →' }, step2: { title: 'Crée un compte GGClub', desc: 'Suis le guide de création de compte.', descVpn: 'Utilise un VPN avec le bon GEO.', link: "Guide d'inscription →" }, step3: { title: 'Rejoindre le club — ID:', desc: 'Trouve le club par ID {id} et entre le code {code}.', link: 'Comment rejoindre →' }, step4: { title: 'Contacter le manager', desc: 'Après avoir rejoint, contacte @Mojo_Adm sur Telegram.', link: 'Écrire au manager →' } },
    howToJoin: { title: 'Comment rejoindre', subtitle: 'Commencez à jouer en minutes', step1: { title: 'Télécharger ClubGG', desc: "Télécharge l'app ClubGG Poker." }, step2: { title: 'Trouver nos clubs', desc: 'Connecte-toi et cherche les clubs.' }, step3: { title: 'Contacter le manager', desc: 'Écris à @Mojo_Adm avec ton pseudo.' } },
    stats: { title: 'Statistiques du club', subtitle: 'En chiffres', players: '1 000+', playersLabel: 'Joueurs actifs', tables: '100+', tablesLabel: 'Tables quotidiennes', support: '24/7', supportLabel: 'Support VIP' },
    download: { title: 'Télécharger ClubGG Poker', subtitle: 'Choisissez votre plateforme', label: "Télécharger l'app", cta: 'Télécharger maintenant', note: 'Aucun achat requis', apkLabel: 'Télécharger APK', exeLabel: 'Télécharger .exe', android: { title: 'Pour Android', badge: 'APK', btn: 'Télécharger APK', step1: 'Cliquer', step2: 'Autoriser sources', step3: 'Installer APK', step4: 'Ouvrir' }, ios: { title: 'Pour iPhone', badge: 'App Store', btn: 'App Store', step1: 'Cliquer', step2: 'App Store ouvre', step3: 'Installer', step4: 'Prêt' }, pc: { title: 'Pour PC', badge: 'Windows', btn: 'Télécharger', step1: 'Télécharger', step2: 'Exécuter EXE', step3: 'Suivre instructions', step4: 'Se connecter' }, joinProcessTitle: 'Prêt à rejoindre ?', joinProcessSubtitle: 'Suivez ces étapes' },
    contact: { title: 'Prêt à jouer ?', subtitle: 'Contactez notre équipe 24/7.', btn: 'Écrire sur Telegram', note: 'Réponse rapide • Manager personnel • 24/7' },
    footer: { rights: 'Tous droits réservés.', disclaimer: '', referralCode: 'Code de parrainage:', navHeading: 'Navigation', clubsHeading: 'Clubs', guidesHeading: 'Guides', contactHeading: 'Contacts', aboutLink: 'À propos', joinLink: 'Rejoindre', downloadLink: 'Télécharger GGClub', installLink: 'Installation', createAccountLink: 'Créer compte', managerLink: '@Mojo_Adm — manager', channelLink: 'Canal officiel', chatLink: 'Chat joueurs' },
  }),

  // ─────────────── ITALIAN ───────────────
  it: t({
    nav: { clubs: 'I nostri Club', guides: 'Guide', about: 'Chi siamo', reviews: 'Recensioni', download: 'Scarica', contact: 'Contatto', downloadGG: 'Scarica GGClub', createAccount: 'Crea account GGClub', joinClub: 'Unisciti al Club' },
    hero: { title: 'Club Poker', titleHighlight: 'di alto livello', subtitle: 'Unisciti a MOJO sulla rete esclusiva ClubGG. Tavoli premium, servizio eccezionale e le puntate più alte.', cta: 'Unisciti ora', secondaryCta: 'Contatta il manager' },
    about: { title: 'Chi siamo', subtitle: "L'esperienza poker premium", content1: 'MOJO Poker Club è una comunità esclusiva nella rete ClubGG.', content2: 'Partite rilassate o tavoli VIP — il nostro club offre azione 24/7.', stats: { players: 'Giocatori attivi', tables: 'Tavoli giornalieri', support: 'Supporto' }, heading: 'Le Migliori Condizioni del Mercato', massivLabel: 'per Massiv Poker Union', massivDesc: '', createAccountLink: 'Come creare account', chipValue: '1:1', chipLabel: 'Tasso di Chip', chipDesc: 'Scambio diretto, nessuna commissione', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Miglior rakeback del mercato' },
    features: { trusted: { title: 'Club Affidabile', desc: 'Reputazione provata e migliaia di giocatori attivi' }, active: { title: 'Giochi Attivi', desc: 'Tavoli live con traffico reale tutto il giorno' }, support: { title: 'Supporto 24/7', desc: 'Manager personale sempre disponibile' } },
    games: { label: 'FORMATI DI GIOCO', title: 'Formati Disponibili' },
    reviews: { label: 'RECENSIONI', title: 'Cosa Dicono i Giocatori' },
    clubs: { title: 'I nostri Club', subtitle: 'Scegli la tua arena', mojo: { name: 'MOJO', desc: 'Il nostro club di punta con tavoli esclusivi e comunità unita.', feature1: 'Tavoli VIP esclusivi', feature2: 'Tavoli attivi 24/7', feature3: 'Comunità unita' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Accedi a un enorme pool di giocatori, zero attesa.', feature1: 'Enorme pool di giocatori', feature2: 'Tavoli per qualsiasi puntata', feature3: 'Azione globale 24/7' }, copied: 'Copiato!', copyId: 'Copia ID', members: 'Giocatori', tables: 'Tavoli', chipLabel: 'Chip', rakebackLabel: 'Rakeback', onlineLabel: 'Online', learnMore: 'Scopri di più' },
    join: { label: 'Come unirsi', title: 'Come unirsi al club?', step1: { title: "Scarica l'app GGClub", desc: 'Disponibile per Android e iOS. Gratuita.', link: 'Vai al download →' }, step2: { title: 'Crea un account GGClub', desc: "Segui la guida per la creazione dell'account.", descVpn: 'Usa VPN con il GEO corretto.', link: 'Guida alla registrazione →' }, step3: { title: 'Unisciti al club — ID:', desc: 'Trova il club per ID {id} e inserisci il codice {code}.', link: 'Come unirsi →' }, step4: { title: 'Scrivi al manager', desc: 'Dopo esserti unito, contatta @Mojo_Adm su Telegram.', link: 'Scrivi al manager →' } },
    howToJoin: { title: 'Come unirsi', subtitle: 'Inizia a giocare in pochi minuti', step1: { title: 'Scarica ClubGG', desc: "Scarica l'app ClubGG Poker." }, step2: { title: 'Trovare i club', desc: 'Accedi e cerca i nostri club.' }, step3: { title: 'Contatta il manager', desc: 'Scrivi a @Mojo_Adm con il tuo nickname.' } },
    stats: { title: 'Statistiche del club', subtitle: 'In numeri', players: '1 000+', playersLabel: 'Giocatori attivi', tables: '100+', tablesLabel: 'Tavoli giornalieri', support: '24/7', supportLabel: 'Supporto VIP' },
    download: { title: 'Scarica ClubGG Poker', subtitle: 'Scegli la tua piattaforma', label: "Scarica l'app", cta: 'Scarica ora', note: 'Nessun acquisto richiesto', apkLabel: 'Scarica APK', exeLabel: 'Scarica .exe', android: { title: 'Per Android', badge: 'APK', btn: 'Scarica APK', step1: 'Premi download', step2: 'Consenti fonti sconosciute', step3: 'Installa APK', step4: 'Apri' }, ios: { title: 'Per iPhone', badge: 'App Store', btn: 'App Store', step1: 'Premi', step2: "App Store apre", step3: 'Installa', step4: 'Pronto' }, pc: { title: 'Per PC', badge: 'Windows', btn: 'Scarica', step1: 'Scarica', step2: 'Esegui EXE', step3: 'Segui istruzioni', step4: 'Accedi' }, joinProcessTitle: 'Pronto a unirti?', joinProcessSubtitle: 'Segui questi passaggi' },
    contact: { title: 'Pronto a giocare?', subtitle: 'Contatta il nostro team 24/7.', btn: 'Scrivi su Telegram', note: 'Risposta rapida • Manager personale • 24/7' },
    footer: { rights: 'Tutti i diritti riservati.', disclaimer: '', referralCode: 'Codice referral:', navHeading: 'Navigazione', clubsHeading: 'Club', guidesHeading: 'Guide', contactHeading: 'Contatti', aboutLink: 'Chi siamo', joinLink: 'Unisciti', downloadLink: 'Scarica GGClub', installLink: 'Installazione', createAccountLink: 'Crea account', managerLink: '@Mojo_Adm — manager', channelLink: 'Canale ufficiale', chatLink: 'Chat giocatori' },
  }),

  // ─────────────── PORTUGUESE ───────────────
  pt: t({
    nav: { clubs: 'Nossos Clubes', guides: 'Guias', about: 'Sobre nós', reviews: 'Avaliações', download: 'Baixar', contact: 'Contato', downloadGG: 'Baixar GGClub', createAccount: 'Criar conta GGClub', joinClub: 'Entrar no Clube' },
    hero: { title: 'Clube de Poker', titleHighlight: 'de alto nível', subtitle: 'Junte-se ao MOJO na rede exclusiva ClubGG. Mesas premium, serviço excepcional e as maiores apostas.', cta: 'Entrar agora', secondaryCta: 'Contactar manager' },
    about: { title: 'Sobre nós', subtitle: 'A experiência premium de poker', content1: 'MOJO Poker Club é uma comunidade exclusiva na rede ClubGG.', content2: 'Jogos casuais ou mesas VIP — nosso clube oferece ação 24/7.', stats: { players: 'Jogadores ativos', tables: 'Mesas diárias', support: 'Suporte' }, heading: 'Melhores Condições do Mercado', massivLabel: 'para Massiv Poker Union', massivDesc: '', createAccountLink: 'Como criar conta', chipValue: '1:1', chipLabel: 'Taxa de Fichas', chipDesc: 'Troca direta, sem comissão', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Melhor rakeback do mercado' },
    features: { trusted: { title: 'Clube Confiável', desc: 'Reputação comprovada e milhares de jogadores ativos' }, active: { title: 'Jogos Ativos', desc: 'Mesas ao vivo com tráfego real 24 horas' }, support: { title: 'Suporte 24/7', desc: 'Manager pessoal sempre disponível' } },
    games: { label: 'FORMATOS DE JOGO', title: 'Formatos Disponíveis' },
    reviews: { label: 'AVALIAÇÕES', title: 'O Que Dizem os Jogadores' },
    clubs: { title: 'Nossos Clubes', subtitle: 'Escolha sua arena', mojo: { name: 'MOJO', desc: 'Nosso clube principal com mesas exclusivas e comunidade unida.', feature1: 'Mesas VIP exclusivas', feature2: 'Mesas ativas 24/7', feature3: 'Comunidade unida' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Acesse um enorme pool de jogadores, zero espera.', feature1: 'Grande pool de jogadores', feature2: 'Mesas para qualquer aposta', feature3: 'Ação global 24/7' }, copied: 'Copiado!', copyId: 'Copiar ID', members: 'Jogadores', tables: 'Mesas', chipLabel: 'Ficha', rakebackLabel: 'Rakeback', onlineLabel: 'Online', learnMore: 'Saber mais' },
    join: { label: 'Como entrar', title: 'Como entrar no clube?', step1: { title: 'Baixe o app GGClub', desc: 'Disponível para Android e iOS. Grátis.', link: 'Ir para download →' }, step2: { title: 'Crie uma conta GGClub', desc: 'Siga o guia de criação de conta.', descVpn: 'Use VPN com o GEO correto.', link: 'Guia de registro →' }, step3: { title: 'Entre no clube — ID:', desc: 'Encontre o clube pelo ID {id} e insira o código {code}.', link: 'Como entrar →' }, step4: { title: 'Escreva ao manager', desc: 'Após entrar, contate @Mojo_Adm no Telegram.', link: 'Escrever ao manager →' } },
    howToJoin: { title: 'Como entrar', subtitle: 'Comece a jogar em minutos', step1: { title: 'Baixar ClubGG', desc: 'Baixe o app ClubGG Poker.' }, step2: { title: 'Encontrar clubes', desc: 'Faça login e encontre nossos clubes.' }, step3: { title: 'Contactar o manager', desc: 'Escreva a @Mojo_Adm com seu apelido.' } },
    stats: { title: 'Estatísticas do clube', subtitle: 'Em números', players: '1 000+', playersLabel: 'Jogadores ativos', tables: '100+', tablesLabel: 'Mesas diárias', support: '24/7', supportLabel: 'Suporte VIP' },
    download: { title: 'Baixar ClubGG Poker', subtitle: 'Escolha sua plataforma', label: 'Baixar app', cta: 'Baixar agora', note: 'Sem compra necessária', apkLabel: 'Baixar APK', exeLabel: 'Baixar .exe', android: { title: 'Para Android', badge: 'APK', btn: 'Baixar APK', step1: 'Clique em baixar', step2: 'Permitir fontes desconhecidas', step3: 'Instale APK', step4: 'Abra o app' }, ios: { title: 'Para iPhone', badge: 'App Store', btn: 'App Store', step1: 'Clique', step2: 'App Store abre', step3: 'Instale', step4: 'Pronto' }, pc: { title: 'Para PC', badge: 'Windows', btn: 'Baixar', step1: 'Baixe', step2: 'Execute EXE', step3: 'Siga instruções', step4: 'Faça login' }, joinProcessTitle: 'Pronto para entrar?', joinProcessSubtitle: 'Siga estes passos' },
    contact: { title: 'Pronto para jogar?', subtitle: 'Contacte nossa equipe 24/7.', btn: 'Escrever no Telegram', note: 'Resposta rápida • Manager pessoal • 24/7' },
    footer: { rights: 'Todos os direitos reservados.', disclaimer: '', referralCode: 'Código de referral:', navHeading: 'Navegação', clubsHeading: 'Clubes', guidesHeading: 'Guias', contactHeading: 'Contatos', aboutLink: 'Sobre nós', joinLink: 'Como entrar', downloadLink: 'Baixar GGClub', installLink: 'Instalação', createAccountLink: 'Criar conta', managerLink: '@Mojo_Adm — manager', channelLink: 'Canal oficial', chatLink: 'Chat de jogadores' },
  }),

  // ─────────────── ARABIC ───────────────
  ar: t({
    nav: { clubs: 'نوادينا', guides: 'الأدلة', about: 'من نحن', reviews: 'التقييمات', download: 'تحميل', contact: 'تواصل', downloadGG: 'تحميل GGClub', createAccount: 'إنشاء حساب GGClub', joinClub: 'الانضمام للنادي' },
    hero: { title: 'نادي البوكر', titleHighlight: 'من المستوى التالي', subtitle: 'انضم إلى MOJO على شبكة ClubGG الحصرية. طاولات مميزة، خدمة استثنائية، وأعلى الرهانات.', cta: 'انضم الآن', secondaryCta: 'تواصل مع المدير' },
    about: { title: 'من نحن', subtitle: 'تجربة البوكر الممتازة', content1: 'MOJO Poker Club هو مجتمع حصري يعمل ضمن شبكة ClubGG.', content2: 'سواء ألعاب هادئة أو طاولات VIP — يقدم نادينا أكشناً 24/7.', stats: { players: 'لاعبون نشطون', tables: 'طاولات يومية', support: 'دعم فني' }, heading: 'أفضل الشروط في السوق', massivLabel: 'لـ Massiv Poker Union', massivDesc: '', createAccountLink: 'كيفية إنشاء حساب', chipValue: '1:1', chipLabel: 'معدل الرقائق', chipDesc: 'تبادل مباشر بدون عمولة', rakebackValue: '50%', rakebackLabel: 'ريك باك', rakebackDesc: 'أفضل ريك باك في السوق' },
    features: { trusted: { title: 'نادٍ موثوق', desc: 'سمعة مثبتة وآلاف اللاعبين النشطين' }, active: { title: 'ألعاب نشطة', desc: 'طاولات مباشرة بحركة حقيقية على مدار الساعة' }, support: { title: 'دعم 24/7', desc: 'مدير شخصي متاح دائماً' } },
    games: { label: 'أشكال اللعب', title: 'الأشكال المتاحة' },
    reviews: { label: 'التقييمات', title: 'ما يقوله اللاعبون' },
    clubs: { title: 'نوادينا', subtitle: 'اختر ساحتك', mojo: { name: 'MOJO', desc: 'ناديّنا الرئيسي مع طاولات حصرية ومجتمع متماسك.', feature1: 'طاولات VIP حصرية', feature2: 'طاولات نشطة 24/7', feature3: 'مجتمع متماسك' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'وصول إلى مجموعة ضخمة من اللاعبين، بلا انتظار.', feature1: 'قاعدة لاعبين ضخمة', feature2: 'طاولات لأي رهان', feature3: 'أكشن عالمي 24/7' }, copied: 'تم النسخ!', copyId: 'نسخ المعرف', members: 'لاعبون', tables: 'طاولات', chipLabel: 'رقاقة', rakebackLabel: 'ريك باك', onlineLabel: 'أونلاين', learnMore: 'اعرف المزيد' },
    join: { label: 'كيفية الانضمام', title: 'كيف تنضم للنادي؟', step1: { title: 'حمّل تطبيق GGClub', desc: 'متاح لأندرويد وiOS. مجاناً.', link: 'الذهاب للتحميل →' }, step2: { title: 'أنشئ حساب GGClub', desc: 'اتبع دليل إنشاء الحساب.', descVpn: 'استخدم VPN مع الموقع الجغرافي الصحيح.', link: 'دليل التسجيل →' }, step3: { title: 'انضم للنادي — المعرف:', desc: 'ابحث عن النادي بالمعرف {id} وأدخل الكود {code}.', link: 'كيفية الانضمام →' }, step4: { title: 'تواصل مع المدير', desc: 'بعد الانضمام، تواصل مع @Mojo_Adm على تيليجرام.', link: 'الكتابة للمدير →' } },
    howToJoin: { title: 'كيفية الانضمام', subtitle: 'ابدأ اللعب في دقائق', step1: { title: 'تحميل ClubGG', desc: 'حمّل تطبيق ClubGG Poker.' }, step2: { title: 'البحث عن نوادينا', desc: 'سجّل الدخول وابحث عن النوادي.' }, step3: { title: 'التواصل مع المدير', desc: 'اكتب لـ @Mojo_Adm مع اسم مستخدمك.' } },
    stats: { title: 'إحصائيات النادي', subtitle: 'بالأرقام', players: '+1000', playersLabel: 'لاعبون نشطون', tables: '+100', tablesLabel: 'طاولات يومية', support: '24/7', supportLabel: 'دعم VIP' },
    download: { title: 'تحميل ClubGG Poker', subtitle: 'اختر منصتك', label: 'تحميل التطبيق', cta: 'تحميل الآن', note: 'لا يتطلب شراء', apkLabel: 'تحميل APK', exeLabel: 'تحميل .exe', android: { title: 'لأندرويد', badge: 'APK', btn: 'تحميل APK', step1: 'اضغط تحميل', step2: 'اسمح بالتثبيت من مصادر غير معروفة', step3: 'ثبّت APK', step4: 'افتح التطبيق' }, ios: { title: 'لـ iPhone', badge: 'App Store', btn: 'App Store', step1: 'اضغط', step2: 'يفتح App Store', step3: 'ثبّت', step4: 'جاهز' }, pc: { title: 'لـ PC', badge: 'Windows', btn: 'تحميل', step1: 'حمّل المثبّت', step2: 'شغّل EXE', step3: 'اتبع التعليمات', step4: 'سجّل الدخول' }, joinProcessTitle: 'مستعد للانضمام؟', joinProcessSubtitle: 'اتبع هذه الخطوات' },
    contact: { title: 'مستعد للعب؟', subtitle: 'تواصل مع فريقنا 24/7.', btn: 'الكتابة على Telegram', note: 'رد سريع • مدير شخصي • نشط 24/7' },
    footer: { rights: 'جميع الحقوق محفوظة.', disclaimer: '', referralCode: 'رمز الإحالة:', navHeading: 'التنقل', clubsHeading: 'النوادي', guidesHeading: 'الأدلة', contactHeading: 'التواصل', aboutLink: 'من نحن', joinLink: 'كيفية الانضمام', downloadLink: 'تحميل GGClub', installLink: 'التثبيت', createAccountLink: 'إنشاء حساب', managerLink: '@Mojo_Adm — مدير', channelLink: 'القناة الرسمية', chatLink: 'دردشة اللاعبين' },
  }),

  // ─────────────── HINDI ───────────────
  hi: t({
    nav: { clubs: 'हमारे क्लब', guides: 'गाइड', about: 'हमारे बारे में', reviews: 'समीक्षाएं', download: 'डाउनलोड', contact: 'संपर्क', downloadGG: 'GGClub डाउनलोड करें', createAccount: 'GGClub अकाउंट बनाएं', joinClub: 'क्लब जॉइन करें' },
    hero: { title: 'नेक्स्ट लेवल', titleHighlight: 'पोकर क्लब', subtitle: 'MOJO से जुड़ें एक्सक्लूसिव ClubGG नेटवर्क पर। प्रीमियम टेबल, बेहतरीन सेवा और सबसे ऊंची दांव।', cta: 'अभी जॉइन करें', secondaryCta: 'मैनेजर से बात करें' },
    about: { title: 'हमारे बारे में', subtitle: 'प्रीमियम पोकर अनुभव', content1: 'MOJO Poker Club ClubGG नेटवर्क में एक एक्सक्लूसिव कम्युनिटी है।', content2: 'कैजुअल गेम या VIP टेबल — हमारा क्लब 24/7 एक्शन देता है।', stats: { players: 'सक्रिय खिलाड़ी', tables: 'दैनिक टेबल', support: 'सहायता' }, heading: 'बाजार में सर्वोत्तम शर्तें', massivLabel: 'Massiv Poker Union के लिए', massivDesc: '', createAccountLink: 'अकाउंट कैसे बनाएं', chipValue: '1:1', chipLabel: 'चिप दर', chipDesc: 'सीधा आदान-प्रदान, कोई कमीशन नहीं', rakebackValue: '50%', rakebackLabel: 'रेकबैक', rakebackDesc: 'बाजार में सर्वोत्तम रेकबैक' },
    features: { trusted: { title: 'विश्वसनीय क्लब', desc: 'सिद्ध प्रतिष्ठा और हजारों सक्रिय खिलाड़ी' }, active: { title: 'सक्रिय खेल', desc: 'चौबीसों घंटे वास्तविक ट्रैफ़िक के साथ लाइव टेबल' }, support: { title: '24/7 सहायता', desc: 'व्यक्तिगत मैनेजर हमेशा उपलब्ध' } },
    games: { label: 'गेम फ़ॉर्मेट', title: 'उपलब्ध फ़ॉर्मेट' },
    reviews: { label: 'समीक्षाएं', title: 'खिलाड़ी क्या कहते हैं' },
    clubs: { title: 'हमारे क्लब', subtitle: 'अपना अखाड़ा चुनें', mojo: { name: 'MOJO', desc: 'एक्सक्लूसिव टेबल और एकजुट कम्युनिटी वाला हमारा प्रमुख क्लब।', feature1: 'एक्सक्लूसिव VIP टेबल', feature2: '24/7 सक्रिय टेबल', feature3: 'एकजुट कम्युनिटी' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'विशाल खिलाड़ी पूल, शून्य प्रतीक्षा।', feature1: 'विशाल खिलाड़ी पूल', feature2: 'किसी भी दांव के लिए टेबल', feature3: '24/7 वैश्विक एक्शन' }, copied: 'कॉपी हो गया!', copyId: 'ID कॉपी करें', members: 'खिलाड़ी', tables: 'टेबल', chipLabel: 'चिप', rakebackLabel: 'रेकबैक', onlineLabel: 'ऑनलाइन', learnMore: 'अधिक जानें' },
    join: { label: 'कैसे जॉइन करें', title: 'क्लब में कैसे जॉइन करें?', step1: { title: 'GGClub ऐप डाउनलोड करें', desc: 'Android और iOS पर उपलब्ध। मुफ़्त।', link: 'डाउनलोड पर जाएं →' }, step2: { title: 'GGClub अकाउंट बनाएं', desc: 'अकाउंट बनाने की गाइड का पालन करें।', descVpn: 'सही GEO के साथ VPN का उपयोग करें।', link: 'रजिस्ट्रेशन गाइड →' }, step3: { title: 'क्लब जॉइन करें — ID:', desc: 'ID {id} से क्लब खोजें और कोड {code} दर्ज करें।', link: 'कैसे जॉइन करें →' }, step4: { title: 'मैनेजर को संदेश भेजें', desc: 'जॉइन करने के बाद Telegram पर @Mojo_Adm से संपर्क करें।', link: 'मैनेजर को लिखें →' } },
    howToJoin: { title: 'कैसे जॉइन करें', subtitle: 'मिनटों में खेलना शुरू करें', step1: { title: 'ClubGG डाउनलोड करें', desc: 'ClubGG Poker ऐप डाउनलोड करें।' }, step2: { title: 'हमारे क्लब खोजें', desc: 'साइन इन करें और क्लब खोजें।' }, step3: { title: 'मैनेजर से संपर्क करें', desc: '@Mojo_Adm को अपना नाम और क्लब बताएं।' } },
    stats: { title: 'क्लब आंकड़े', subtitle: 'संख्याओं में', players: '1,000+', playersLabel: 'सक्रिय खिलाड़ी', tables: '100+', tablesLabel: 'दैनिक टेबल', support: '24/7', supportLabel: 'VIP सहायता' },
    download: { title: 'ClubGG Poker डाउनलोड करें', subtitle: 'अपना प्लेटफ़ॉर्म चुनें', label: 'ऐप डाउनलोड करें', cta: 'अभी डाउनलोड करें', note: 'खरीदारी की आवश्यकता नहीं', apkLabel: 'APK डाउनलोड करें', exeLabel: '.exe डाउनलोड करें', android: { title: 'Android के लिए', badge: 'APK', btn: 'APK डाउनलोड', step1: 'बटन दबाएं', step2: 'अनजान स्रोतों से इंस्टॉल की अनुमति दें', step3: 'APK इंस्टॉल करें', step4: 'ऐप खोलें' }, ios: { title: 'iPhone के लिए', badge: 'App Store', btn: 'App Store', step1: 'बटन दबाएं', step2: 'App Store खुलेगा', step3: 'ऐप इंस्टॉल करें', step4: 'तैयार' }, pc: { title: 'PC के लिए', badge: 'Windows', btn: 'डाउनलोड', step1: 'डाउनलोड करें', step2: 'EXE चलाएं', step3: 'निर्देशों का पालन करें', step4: 'लॉगिन करें' }, joinProcessTitle: 'जॉइन के लिए तैयार?', joinProcessSubtitle: 'ये कदम उठाएं' },
    contact: { title: 'खेलने के लिए तैयार?', subtitle: 'हमारी 24/7 टीम से संपर्क करें।', btn: 'Telegram पर लिखें', note: 'त्वरित प्रतिक्रिया • व्यक्तिगत मैनेजर • 24/7' },
    footer: { rights: 'सर्वाधिकार सुरक्षित।', disclaimer: '', referralCode: 'रेफरल कोड:', navHeading: 'नेविगेशन', clubsHeading: 'क्लब', guidesHeading: 'गाइड', contactHeading: 'संपर्क', aboutLink: 'हमारे बारे में', joinLink: 'कैसे जॉइन करें', downloadLink: 'GGClub डाउनलोड', installLink: 'इंस्टॉल कैसे करें', createAccountLink: 'अकाउंट बनाएं', managerLink: '@Mojo_Adm — मैनेजर', channelLink: 'आधिकारिक चैनल', chatLink: 'खिलाड़ी चैट' },
  }),

  // ─────────────── PERSIAN ───────────────
  fa: t({
    nav: { clubs: 'کلوب‌های ما', guides: 'راهنماها', about: 'درباره ما', reviews: 'نظرات', download: 'دانلود', contact: 'تماس', downloadGG: 'دانلود GGClub', createAccount: 'ساخت حساب GGClub', joinClub: 'عضویت در کلوب' },
    hero: { title: 'کلوب پوکر', titleHighlight: 'سطح بعدی', subtitle: 'به MOJO در شبکه انحصاری ClubGG بپیوندید. میزهای ممتاز، خدمات استثنایی و بالاترین شرط‌بندی‌ها.', cta: 'همین الان بپیوند', secondaryCta: 'تماس با مدیر' },
    about: { title: 'درباره ما', subtitle: 'تجربه پوکر ممتاز', content1: 'MOJO Poker Club یک جامعه انحصاری در شبکه ClubGG است.', content2: 'بازی‌های آرام یا میزهای VIP — کلوب ما ۲۴/۷ اکشن ارائه می‌دهد.', stats: { players: 'بازیکنان فعال', tables: 'میزهای روزانه', support: 'پشتیبانی' }, heading: 'بهترین شرایط در بازار', massivLabel: 'برای Massiv Poker Union', massivDesc: '', createAccountLink: 'نحوه ایجاد حساب', chipValue: '1:1', chipLabel: 'نرخ چیپ', chipDesc: 'تبادل مستقیم، بدون کمیسیون', rakebackValue: '50%', rakebackLabel: 'ریک‌بک', rakebackDesc: 'بهترین ریک‌بک در بازار' },
    features: { trusted: { title: 'کلوب قابل اعتماد', desc: 'شهرت اثبات شده و هزاران بازیکن فعال' }, active: { title: 'بازی‌های فعال', desc: 'میزهای زنده با ترافیک واقعی ۲۴ ساعته' }, support: { title: 'پشتیبانی ۲۴/۷', desc: 'مدیر شخصی همیشه در دسترس' } },
    games: { label: 'فرمت‌های بازی', title: 'فرمت‌های موجود' },
    reviews: { label: 'نظرات', title: 'بازیکنان چه می‌گویند' },
    clubs: { title: 'کلوب‌های ما', subtitle: 'میدان خود را انتخاب کنید', mojo: { name: 'MOJO', desc: 'کلوب اصلی ما با میزهای انحصاری و جامعه منسجم.', feature1: 'میزهای انحصاری VIP', feature2: 'میزهای فعال ۲۴/۷', feature3: 'جامعه منسجم' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'دسترسی به استخر بزرگ بازیکنان، بدون انتظار.', feature1: 'استخر بزرگ بازیکنان', feature2: 'میز برای هر شرطی', feature3: 'اکشن جهانی ۲۴/۷' }, copied: 'کپی شد!', copyId: 'کپی شناسه', members: 'بازیکنان', tables: 'میزها', chipLabel: 'چیپ', rakebackLabel: 'ریک‌بک', onlineLabel: 'آنلاین', learnMore: 'بیشتر بدانید' },
    join: { label: 'نحوه عضویت', title: 'چطور به کلوب ملحق شویم؟', step1: { title: 'اپ GGClub را دانلود کنید', desc: 'در اندروید و iOS موجود است. رایگان.', link: 'رفتن به دانلود →' }, step2: { title: 'حساب GGClub بسازید', desc: 'راهنمای ساخت حساب را دنبال کنید.', descVpn: 'از VPN با GEO مناسب استفاده کنید.', link: 'راهنمای ثبت‌نام →' }, step3: { title: 'به کلوب بپیوندید — شناسه:', desc: 'کلوب را با شناسه {id} پیدا کنید و کد {code} را وارد کنید.', link: 'نحوه پیوستن →' }, step4: { title: 'به مدیر پیام بدهید', desc: 'بعد از پیوستن، با @Mojo_Adm در تلگرام تماس بگیرید.', link: 'نوشتن به مدیر →' } },
    howToJoin: { title: 'نحوه عضویت', subtitle: 'در چند دقیقه شروع کنید', step1: { title: 'دانلود ClubGG', desc: 'اپ ClubGG Poker را دانلود کنید.' }, step2: { title: 'یافتن کلوب‌ها', desc: 'وارد شوید و کلوب‌ها را پیدا کنید.' }, step3: { title: 'تماس با مدیر', desc: 'به @Mojo_Adm پیام بفرستید.' } },
    stats: { title: 'آمار کلوب', subtitle: 'به صورت عددی', players: '+۱۰۰۰', playersLabel: 'بازیکنان فعال', tables: '+۱۰۰', tablesLabel: 'میزهای روزانه', support: '۲۴/۷', supportLabel: 'پشتیبانی VIP' },
    download: { title: 'دانلود ClubGG Poker', subtitle: 'پلتفرم خود را انتخاب کنید', label: 'دانلود اپ', cta: 'همین الان دانلود', note: 'نیازی به خرید نیست', apkLabel: 'دانلود APK', exeLabel: 'دانلود .exe', android: { title: 'برای اندروید', badge: 'APK', btn: 'دانلود APK', step1: 'دانلود را بزنید', step2: 'نصب از منابع ناشناس را مجاز کنید', step3: 'APK را نصب کنید', step4: 'اپ را باز کنید' }, ios: { title: 'برای iPhone', badge: 'App Store', btn: 'App Store', step1: 'دکمه را بزنید', step2: 'App Store باز می‌شود', step3: 'نصب کنید', step4: 'آماده' }, pc: { title: 'برای PC', badge: 'Windows', btn: 'دانلود', step1: 'نصب‌کننده را دانلود کنید', step2: 'EXE را اجرا کنید', step3: 'دستورالعمل‌ها را دنبال کنید', step4: 'وارد شوید' }, joinProcessTitle: 'آماده پیوستن هستید؟', joinProcessSubtitle: 'این مراحل را دنبال کنید' },
    contact: { title: 'آماده بازی هستید؟', subtitle: 'با تیم ۲۴/۷ ما تماس بگیرید.', btn: 'نوشتن در تلگرام', note: 'پاسخ سریع • مدیر شخصی • فعال ۲۴/۷' },
    footer: { rights: 'تمامی حقوق محفوظ است.', disclaimer: '', referralCode: 'کد معرف:', navHeading: 'ناوبری', clubsHeading: 'کلوب‌ها', guidesHeading: 'راهنماها', contactHeading: 'تماس', aboutLink: 'درباره ما', joinLink: 'نحوه عضویت', downloadLink: 'دانلود GGClub', installLink: 'نصب', createAccountLink: 'ساخت حساب', managerLink: '@Mojo_Adm — مدیر', channelLink: 'کانال رسمی', chatLink: 'چت بازیکنان' },
  }),

  // ─────────────── TURKISH ───────────────
  tr: t({
    nav: { clubs: 'Kulüplerimiz', guides: 'Rehberler', about: 'Hakkımızda', reviews: 'Yorumlar', download: 'İndir', contact: 'İletişim', downloadGG: 'GGClub İndir', createAccount: 'GGClub Hesabı Oluştur', joinClub: 'Kulübe Katıl' },
    hero: { title: 'Üst Seviye', titleHighlight: 'Poker Kulübü', subtitle: "MOJO'ya özel ClubGG ağında katılın. Premium masalar, olağanüstü hizmet ve en yüksek bahisler.", cta: 'Şimdi Katıl', secondaryCta: 'Yöneticiyle İletişim' },
    about: { title: 'Hakkımızda', subtitle: 'Premium Poker Deneyimi', content1: "MOJO Poker Club, ClubGG ağında faaliyet gösteren özel bir topluluktur.", content2: "İster rahat oyunlar ister VIP masalar olsun, kulübümüz 7/24 aksiyon sunuyor.", stats: { players: 'Aktif Oyuncular', tables: 'Günlük Masalar', support: 'Destek' }, heading: 'Piyasadaki En İyi Koşullar', massivLabel: 'Massiv Poker Union için', massivDesc: '', createAccountLink: 'Hesap Nasıl Oluşturulur', chipValue: '1:1', chipLabel: 'Chip Oranı', chipDesc: 'Doğrudan değişim, komisyon yok', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Piyasadaki en iyi rakeback' },
    features: { trusted: { title: 'Güvenilir Kulüp', desc: 'Kanıtlanmış itibar ve binlerce aktif oyuncu' }, active: { title: 'Aktif Oyunlar', desc: '7/24 gerçek trafikli canlı masalar' }, support: { title: '7/24 Destek', desc: 'Kişisel yönetici her zaman hazır' } },
    games: { label: 'OYUN FORMATLARI', title: 'Mevcut Formatlar' },
    reviews: { label: 'YORUMLAR', title: "Oyuncuların Görüşleri" },
    clubs: { title: 'Kulüplerimiz', subtitle: 'Arenani Seç', mojo: { name: 'MOJO', desc: 'Özel masalar ve sıkı toplulukla amiral gemisi kulübümüz.', feature1: 'Özel VIP Masalar', feature2: '7/24 Aktif Masalar', feature3: 'Sıkı Toplu Topluluk' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Devasa oyuncu havuzuna erişim, sıfır bekleme.', feature1: 'Devasa Oyuncu Havuzu', feature2: 'Her Bahis İçin Masa', feature3: '7/24 Global Aksiyon' }, copied: 'Kopyalandı!', copyId: 'ID Kopyala', members: 'Oyuncular', tables: 'Masalar', chipLabel: 'Chip', rakebackLabel: 'Rakeback', onlineLabel: 'Çevrimiçi', learnMore: 'Daha fazla bilgi' },
    join: { label: 'Nasıl katılınır', title: 'Kulübe nasıl katılınır?', step1: { title: "GGClub uygulamasını indir", desc: 'Android ve iOS için. Ücretsiz.', link: 'İndirmeye git →' }, step2: { title: 'GGClub hesabı oluştur', desc: 'Hesap oluşturma kılavuzunu izle.', descVpn: 'Doğru GEO ile VPN kullan.', link: 'Kayıt kılavuzu →' }, step3: { title: 'Kulübe katıl — ID:', desc: 'Kulübü ID {id} ile bul ve {code} kodunu gir.', link: 'Nasıl katılınır →' }, step4: { title: "Yöneticiye yaz", desc: "Katıldıktan sonra Telegram'da @Mojo_Adm ile iletişime geç.", link: 'Yöneticiye yaz →' } },
    howToJoin: { title: 'Nasıl Katılınır', subtitle: 'Dakikalar İçinde Oynamaya Başla', step1: { title: "ClubGG'yi İndir", desc: "ClubGG Poker uygulamasını indir." }, step2: { title: 'Kulüpleri Bul', desc: "Giriş yap ve kulüpleri bul." }, step3: { title: 'Yöneticiyle İletişime Geç', desc: "@Mojo_Adm'e takma adınla yaz." } },
    stats: { title: 'Kulüp İstatistikleri', subtitle: 'Rakamlarla', players: '1.000+', playersLabel: 'Aktif Oyuncular', tables: '100+', tablesLabel: 'Günlük Masalar', support: '7/24', supportLabel: 'VIP Destek' },
    download: { title: "ClubGG Poker'i İndir", subtitle: 'Platformunu Seç', label: 'Uygulamayı İndir', cta: 'Şimdi İndir', note: 'Satın alma gerekmez', apkLabel: 'APK İndir', exeLabel: '.exe İndir', android: { title: "Android için", badge: 'APK', btn: 'APK İndir', step1: 'İndir düğmesine tıkla', step2: 'Bilinmeyen kaynaklara izin ver', step3: 'APK kur', step4: 'Aç' }, ios: { title: "iPhone için", badge: 'App Store', btn: "App Store", step1: 'Düğmeye tıkla', step2: 'App Store açılacak', step3: 'Yükle', step4: 'Hazır' }, pc: { title: 'PC için', badge: 'Windows', btn: 'Yükleyiciyi İndir', step1: 'İndir', step2: 'EXE çalıştır', step3: 'Talimatları izle', step4: 'Giriş yap' }, joinProcessTitle: 'Katılmaya hazır mısın?', joinProcessSubtitle: 'Bu adımları izle' },
    contact: { title: 'Oynamaya hazır mısın?', subtitle: '7/24 ekibimizle iletişime geçin.', btn: "Telegram'da Yaz", note: 'Hızlı yanıt • Kişisel yönetici • 7/24' },
    footer: { rights: 'Tüm hakları saklıdır.', disclaimer: '', referralCode: 'Referral kodu:', navHeading: 'Navigasyon', clubsHeading: 'Kulüpler', guidesHeading: 'Rehberler', contactHeading: 'İletişim', aboutLink: 'Hakkımızda', joinLink: 'Nasıl Katılınır', downloadLink: 'GGClub İndir', installLink: 'Kurulum', createAccountLink: 'Hesap Oluştur', managerLink: '@Mojo_Adm — yönetici', channelLink: 'Resmi kanal', chatLink: 'Oyuncu sohbeti' },
  }),

  // ─────────────── AZERBAIJANI ───────────────
  az: t({
    nav: { clubs: 'Klublarımız', guides: 'Bələdçilər', about: 'Haqqımızda', reviews: 'Rəylər', download: 'Yüklə', contact: 'Əlaqə', downloadGG: 'GGClub Yüklə', createAccount: 'GGClub Hesabı Yarat', joinClub: 'Kluba Qoşul' },
    hero: { title: 'Növbəti Səviyyə', titleHighlight: 'Poker Klubu', subtitle: "MOJO-ya eksklüziv ClubGG şəbəkəsində qoşulun. Premium masalar, əla xidmət və ən yüksək stavkalar.", cta: 'İndi Qoşul', secondaryCta: 'Menecerlə Əlaqə' },
    about: { title: 'Haqqımızda', subtitle: 'Premium Poker Təcrübəsi', content1: 'MOJO Poker Club ClubGG şəbəkəsində eksklüziv bir cəmiyyətdir.', content2: 'Sakit oyunlar ya VIP masalar — klubumuz 24/7 aksion təklif edir.', stats: { players: 'Aktiv Oyunçular', tables: 'Gündəlik Masalar', support: 'Dəstək' }, heading: 'Bazardakı Ən Yaxşı Şərtlər', massivLabel: 'Massiv Poker Union üçün', massivDesc: '', createAccountLink: 'Hesab Necə Yaradılır', chipValue: '1:1', chipLabel: 'Çip Nisbəti', chipDesc: 'Birbaşa mübadilə, komissiya yoxdur', rakebackValue: '50%', rakebackLabel: 'Rakeback', rakebackDesc: 'Bazardakı ən yaxşı rakeback' },
    features: { trusted: { title: 'Etibarlı Klub', desc: 'Sübut edilmiş nüfuz və minlərlə aktiv oyunçu' }, active: { title: 'Aktiv Oyunlar', desc: '24/7 həqiqi trafikli canlı masalar' }, support: { title: '24/7 Dəstək', desc: 'Şəxsi menecer həmişə hazır' } },
    games: { label: 'OYUN FORMATLARI', title: 'Mövcud Formatlar' },
    reviews: { label: 'RƏYLƏR', title: 'Oyunçular Nə Deyir' },
    clubs: { title: 'Klublarımız', subtitle: 'Arenanu Seç', mojo: { name: 'MOJO', desc: 'Eksklüziv masalar və sıx cəmiyyətlə əsas klubumuz.', feature1: 'Eksklüziv VIP Masalar', feature2: '24/7 Aktiv Masalar', feature3: 'Sıx Cəmiyyət' }, massiv: { name: 'MOJO 2 Massiv Union', desc: 'Böyük oyunçu hovuzuna çıxış, gözləmə yoxdur.', feature1: 'Böyük Oyunçu Hovuzu', feature2: 'İstənilən Stavka üçün Masa', feature3: '24/7 Qlobal Aksion' }, copied: 'Kopyalandı!', copyId: 'ID Kopya Et', members: 'Oyunçular', tables: 'Masalar', chipLabel: 'Çip', rakebackLabel: 'Rakeback', onlineLabel: 'Onlayn', learnMore: 'Daha çox öyrən' },
    join: { label: 'Necə qoşulmaq olar', title: 'Kluba necə qoşulmaq olar?', step1: { title: 'GGClub tətbiqini yüklə', desc: 'Android və iOS üçün. Pulsuz.', link: 'Yükləməyə get →' }, step2: { title: 'GGClub hesabı yarat', desc: 'Hesab yaratma bələdçisini izlə.', descVpn: 'Düzgün GEO ilə VPN istifadə et.', link: 'Qeydiyyat bələdçisi →' }, step3: { title: 'Kluba qoşul — ID:', desc: 'Klubu {id} ID ilə tap və {code} kodunu daxil et.', link: 'Necə qoşulmaq →' }, step4: { title: 'Menecerə yaz', desc: 'Qoşulduqdan sonra Teleqramda @Mojo_Adm ilə əlaqə saxla.', link: 'Menecerə yaz →' } },
    howToJoin: { title: 'Necə Qoşulmaq Olar', subtitle: 'Dəqiqələr içində oynamağa başla', step1: { title: 'ClubGG Yüklə', desc: 'ClubGG Poker tətbiqini yüklə.' }, step2: { title: 'Klubları Tap', desc: 'Daxil ol və klubları tap.' }, step3: { title: 'Menecerlə Əlaqə Saxla', desc: '@Mojo_Adm-ə ləqəbinlə yaz.' } },
    stats: { title: 'Klub Statistikaları', subtitle: 'Rəqəmlərlə', players: '1 000+', playersLabel: 'Aktiv Oyunçular', tables: '100+', tablesLabel: 'Gündəlik Masalar', support: '24/7', supportLabel: 'VIP Dəstək' },
    download: { title: 'ClubGG Poker Yüklə', subtitle: 'Platformunu Seç', label: 'Tətbiqi Yüklə', cta: 'İndi Yüklə', note: 'Alış tələb olunmur', apkLabel: 'APK Yüklə', exeLabel: '.exe Yüklə', android: { title: 'Android üçün', badge: 'APK', btn: 'APK Yüklə', step1: 'Yüklə düyməsinə bas', step2: 'Naməlum mənbələrə icazə ver', step3: 'APK quraşdır', step4: 'Aç' }, ios: { title: 'iPhone üçün', badge: 'App Store', btn: 'App Store', step1: 'Düyməyə bas', step2: 'App Store açılacaq', step3: 'Quraşdır', step4: 'Hazır' }, pc: { title: 'PC üçün', badge: 'Windows', btn: 'Yüklə', step1: 'Yüklə', step2: 'EXE işlət', step3: 'Təlimatları izlə', step4: 'Daxil ol' }, joinProcessTitle: 'Qoşulmağa hazırsan?', joinProcessSubtitle: 'Bu addımları izlə' },
    contact: { title: 'Oynamağa hazırsan?', subtitle: '24/7 komandamızla əlaqə saxlayın.', btn: 'Telegram-da Yaz', note: 'Sürətli cavab • Şəxsi menecer • 24/7 aktiv' },
    footer: { rights: 'Bütün hüquqlar qorunur.', disclaimer: '', referralCode: 'Referral kodu:', navHeading: 'Naviqasiya', clubsHeading: 'Klublar', guidesHeading: 'Bələdçilər', contactHeading: 'Əlaqə', aboutLink: 'Haqqımızda', joinLink: 'Necə Qoşulmaq', downloadLink: 'GGClub Yüklə', installLink: 'Quraşdırma', createAccountLink: 'Hesab Yarat', managerLink: '@Mojo_Adm — menecer', channelLink: 'Rəsmi kanal', chatLink: 'Oyunçu söhbəti' },
  }),

  // ─────────────── CHINESE ───────────────
  zh: t({
    nav: { clubs: '我们的俱乐部', guides: '指南', about: '关于我们', reviews: '评价', download: '下载', contact: '联系我们', downloadGG: '下载 GGClub', createAccount: '创建 GGClub 账号', joinClub: '加入俱乐部' },
    hero: { title: '下一级', titleHighlight: '扑克俱乐部', subtitle: '加入 MOJO，体验独家 ClubGG 网络。高级牌桌、卓越服务和最高赌注。', cta: '立即加入', secondaryCta: '联系经理' },
    about: { title: '关于我们', subtitle: '顶级扑克体验', content1: 'MOJO Poker Club 是 ClubGG 网络中的独家社区。', content2: '无论休闲游戏还是 VIP 牌桌，我们的俱乐部全天候提供精彩游戏。', stats: { players: '活跃玩家', tables: '每日牌桌', support: '客服支持' }, heading: '市场最优条件', massivLabel: '为 Massiv Poker Union', massivDesc: '', createAccountLink: '如何创建账号', chipValue: '1:1', chipLabel: '筹码汇率', chipDesc: '直接兑换，零手续费', rakebackValue: '50%', rakebackLabel: '返水', rakebackDesc: '市场最高返水' },
    features: { trusted: { title: '可信赖的俱乐部', desc: '有口皆碑，拥有数千名活跃玩家' }, active: { title: '活跃游戏', desc: '全天候真实流量的游戏桌' }, support: { title: '24/7 客服', desc: '专属客服随时为您服务' } },
    games: { label: '游戏格式', title: '可用格式' },
    reviews: { label: '评价', title: '玩家评价' },
    clubs: { title: '我们的俱乐部', subtitle: '选择您的竞技场', mojo: { name: 'MOJO', desc: '旗舰俱乐部，提供独家牌桌和紧密团结的社区。', feature1: '独家 VIP 牌桌', feature2: '24/7 活跃牌桌', feature3: '紧密团结的社区' }, massiv: { name: 'MOJO 2 Massiv Union', desc: '庞大玩家池，零等待时间。', feature1: '庞大玩家池', feature2: '任意注额牌桌', feature3: '24/7 全球精彩' }, copied: '已复制！', copyId: '复制 ID', members: '玩家', tables: '牌桌', chipLabel: '筹码', rakebackLabel: '返水', onlineLabel: '在线', learnMore: '了解更多' },
    join: { label: '如何加入', title: '如何加入俱乐部？', step1: { title: '下载 GGClub 应用', desc: '适用于 Android 和 iOS。免费。', link: '前往下载 →' }, step2: { title: '注册 GGClub 账号', desc: '按照账号创建指南操作。', descVpn: '使用正确地区的 VPN。', link: '注册指南 →' }, step3: { title: '加入俱乐部 — ID:', desc: '通过 ID {id} 找到俱乐部并输入码 {code}。', link: '如何加入 →' }, step4: { title: '联系经理', desc: '加入后，在 Telegram 上联系 @Mojo_Adm。', link: '联系经理 →' } },
    howToJoin: { title: '如何加入', subtitle: '几分钟内开始游戏', step1: { title: '下载 ClubGG', desc: '下载 ClubGG Poker 应用。' }, step2: { title: '找到我们的俱乐部', desc: '登录并搜索俱乐部。' }, step3: { title: '联系经理', desc: '联系 @Mojo_Adm，告知您的昵称。' } },
    stats: { title: '俱乐部统计', subtitle: '数字说明', players: '1,000+', playersLabel: '活跃玩家', tables: '100+', tablesLabel: '每日牌桌', support: '24/7', supportLabel: 'VIP 支持' },
    download: { title: '下载 ClubGG Poker', subtitle: '选择您的平台', label: '下载应用', cta: '立即下载', note: '无需购买', apkLabel: '下载 APK', exeLabel: '下载 .exe', android: { title: '下载 Android 版', badge: 'APK', btn: '下载 APK', step1: '点击下载', step2: '允许安装未知来源', step3: '安装 APK', step4: '打开应用' }, ios: { title: '下载 iPhone 版', badge: 'App Store', btn: 'App Store', step1: '点击按钮', step2: 'App Store 将打开', step3: '安装应用', step4: '准备游戏' }, pc: { title: '下载 PC 版', badge: 'Windows', btn: '下载安装程序', step1: '下载安装程序', step2: '运行 EXE', step3: '按照说明操作', step4: '登录账号' }, joinProcessTitle: '准备加入？', joinProcessSubtitle: '按照这些步骤开始' },
    contact: { title: '准备好游戏了吗？', subtitle: '联系我们 24/7 支持团队。', btn: '在 Telegram 上联系', note: '快速响应 • 专属经理 • 24/7 在线' },
    footer: { rights: '版权所有。', disclaimer: '', referralCode: '推荐码：', navHeading: '导航', clubsHeading: '俱乐部', guidesHeading: '指南', contactHeading: '联系方式', aboutLink: '关于我们', joinLink: '如何加入', downloadLink: '下载 GGClub', installLink: '安装指南', createAccountLink: '创建账号', managerLink: '@Mojo_Adm — 经理', channelLink: '官方频道', chatLink: '玩家群' },
  }),

  // ─────────────── JAPANESE ───────────────
  ja: t({
    nav: { clubs: 'クラブ一覧', guides: 'ガイド', about: '私たちについて', reviews: 'レビュー', download: 'ダウンロード', contact: 'お問い合わせ', downloadGG: 'GGClub ダウンロード', createAccount: 'GGClub アカウント作成', joinClub: 'クラブに参加' },
    hero: { title: '次のレベルの', titleHighlight: 'ポーカークラブ', subtitle: '独占的な ClubGG ネットワークで MOJO に参加しましょう。プレミアムテーブル、最高のサービス、最高額の賭け。', cta: '今すぐ参加', secondaryCta: 'マネージャーに連絡' },
    about: { title: '私たちについて', subtitle: 'プレミアムポーカー体験', content1: 'MOJO Poker Club は ClubGG ネットワークで運営する独占コミュニティです。', content2: 'カジュアルな低ステークスから VIP テーブルまで、クラブは 24/7 アクションを提供します。', stats: { players: 'アクティブプレイヤー', tables: '1日のテーブル数', support: 'サポート' }, heading: '市場最高の条件', massivLabel: 'Massiv Poker Union について', massivDesc: '', createAccountLink: 'アカウントの作成方法', chipValue: '1:1', chipLabel: 'チップレート', chipDesc: '直接交換、手数料なし', rakebackValue: '50%', rakebackLabel: 'レーキバック', rakebackDesc: '市場最高のレーキバック' },
    features: { trusted: { title: '信頼できるクラブ', desc: '実績ある評判と数千人のアクティブプレイヤー' }, active: { title: 'アクティブゲーム', desc: '24時間リアルトラフィックのライブテーブル' }, support: { title: '24/7 サポート', desc: '専属マネージャーが常に対応' } },
    games: { label: 'ゲームフォーマット', title: '利用可能なフォーマット' },
    reviews: { label: 'レビュー', title: 'プレイヤーの声' },
    clubs: { title: 'クラブ一覧', subtitle: 'アリーナを選択', mojo: { name: 'MOJO', desc: '独占テーブルと団結したコミュニティを持つフラッグシップクラブ。', feature1: '独占 VIP テーブル', feature2: '24/7 アクティブテーブル', feature3: '団結したコミュニティ' }, massiv: { name: 'MOJO 2 Massiv Union', desc: '大規模プレイヤープール、待ち時間ゼロ。', feature1: '大規模プレイヤープール', feature2: 'あらゆるステークスのテーブル', feature3: '24/7 グローバルアクション' }, copied: 'コピー完了！', copyId: 'ID をコピー', members: 'プレイヤー', tables: 'テーブル', chipLabel: 'チップ', rakebackLabel: 'レーキバック', onlineLabel: 'オンライン', learnMore: '詳細を見る' },
    join: { label: '参加方法', title: 'クラブへの参加方法は？', step1: { title: 'GGClub アプリをダウンロード', desc: 'Android と iOS で利用可能。無料。', link: 'ダウンロードへ →' }, step2: { title: 'GGClub アカウントを作成', desc: 'アカウント作成ガイドに従ってください。', descVpn: '正しい地域の VPN を使用してください。', link: '登録ガイド →' }, step3: { title: 'クラブに参加 — ID:', desc: 'ID {id} でクラブを見つけ、コード {code} を入力してください。', link: '参加方法 →' }, step4: { title: 'マネージャーにメッセージ', desc: '参加後、Telegram で @Mojo_Adm に連絡してください。', link: 'マネージャーに書く →' } },
    howToJoin: { title: '参加方法', subtitle: '数分でプレイ開始', step1: { title: 'ClubGG をダウンロード', desc: 'ClubGG Poker アプリをダウンロードしてください。' }, step2: { title: 'クラブを見つける', desc: 'サインインしてクラブを探してください。' }, step3: { title: 'マネージャーに連絡', desc: '@Mojo_Adm にニックネームを送信してください。' } },
    stats: { title: 'クラブ統計', subtitle: '数字で見る', players: '1,000+', playersLabel: 'アクティブプレイヤー', tables: '100+', tablesLabel: '1日のテーブル数', support: '24/7', supportLabel: 'VIP サポート' },
    download: { title: 'ClubGG Poker をダウンロード', subtitle: 'プラットフォームを選択', label: 'アプリをダウンロード', cta: '今すぐダウンロード', note: '購入不要', apkLabel: 'APK をダウンロード', exeLabel: '.exe をダウンロード', android: { title: 'Android 版', badge: 'APK', btn: 'APK ダウンロード', step1: 'ダウンロードをクリック', step2: '不明なソースからのインストールを許可', step3: 'APK をインストール', step4: 'アプリを開く' }, ios: { title: 'iPhone 版', badge: 'App Store', btn: 'App Store', step1: 'ボタンをクリック', step2: 'App Store が開きます', step3: 'インストール', step4: '準備完了' }, pc: { title: 'PC 版', badge: 'Windows', btn: 'ダウンロード', step1: 'インストーラーをダウンロード', step2: 'EXE を実行', step3: '手順に従う', step4: 'ログイン' }, joinProcessTitle: '参加の準備はできていますか？', joinProcessSubtitle: 'これらの手順に従ってください' },
    contact: { title: 'プレイの準備はできていますか？', subtitle: '24/7 サポートチームに連絡してください。', btn: 'Telegram でメッセージ', note: '素早い返信 • 専属マネージャー • 24/7 アクティブ' },
    footer: { rights: '全著作権所有。', disclaimer: '', referralCode: '紹介コード：', navHeading: 'ナビゲーション', clubsHeading: 'クラブ', guidesHeading: 'ガイド', contactHeading: 'お問い合わせ', aboutLink: '私たちについて', joinLink: '参加方法', downloadLink: 'GGClub ダウンロード', installLink: 'インストール方法', createAccountLink: 'アカウント作成', managerLink: '@Mojo_Adm — マネージャー', channelLink: '公式チャンネル', chatLink: 'プレイヤーチャット' },
  }),
};
