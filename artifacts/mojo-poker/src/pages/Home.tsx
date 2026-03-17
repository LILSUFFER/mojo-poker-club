import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PremiumExperience } from '@/components/PremiumExperience';
import { Games } from '@/components/Games';
import { Clubs } from '@/components/Clubs';
import { Reviews } from '@/components/Reviews';
import { DownloadBanner } from '@/components/DownloadBanner';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';

export function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <SEO
        canonical="/"
        langs={{
          ru: { title: "MOJO Poker Club — покерный клуб GGClub, Massiv Poker Union", description: "Официальный покерный клуб в сети GGClub и Massiv Poker Union. Рейкбек до 55%, фишки 1к1, 698+ игроков онлайн, столы 24/7. Реферальный код 3383-3619.", keywords: "GGClub, ClubGG, покер клуб, Massiv Poker Union, MOJO Poker, покер онлайн, рейкбек покер" },
          en: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "Official poker club on GGClub and Massiv Poker Union network. Up to 55% rakeback, 1:1 chips, 698+ online players, 24/7 tables. Referral code 3383-3619.", keywords: "GGClub poker club, ClubGG, Massiv Poker Union, MOJO Poker, online poker club, rakeback poker" },
          es: { title: "MOJO Poker Club — GGClub Póker, Massiv Poker Union", description: "Club de póker oficial en GGClub y Massiv Poker Union. Hasta 55% de rakeback, fichas 1:1, más de 698 jugadores en línea, mesas 24/7. Código de referido 3383-3619." },
          de: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "Offizieller Pokerclub im GGClub- und Massiv-Poker-Union-Netzwerk. Bis zu 55% Rakeback, 1:1 Chips, 698+ Spieler online, 24/7 Tische. Referral-Code 3383-3619." },
          fr: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "Club de poker officiel sur GGClub et Massiv Poker Union. Jusqu'à 55% de rakeback, jetons 1:1, 698+ joueurs en ligne, tables 24/7. Code de parrainage 3383-3619." },
          it: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "Club di poker ufficiale su GGClub e Massiv Poker Union. Fino al 55% di rakeback, chip 1:1, 698+ giocatori online, tavoli 24/7. Codice referral 3383-3619." },
          pt: { title: "MOJO Poker Club — GGClub Pôquer, Massiv Poker Union", description: "Clube de pôquer oficial no GGClub e Massiv Poker Union. Até 55% de rakeback, fichas 1:1, mais de 698 jogadores online, mesas 24/7. Código de referência 3383-3619." },
          ar: { title: "MOJO Poker Club — بوكر GGClub، Massiv Poker Union", description: "نادي بوكر رسمي على شبكة GGClub وMassiv Poker Union. حتى 55% ريك باك، رقائق 1:1، أكثر من 698 لاعبًا متصلاً، طاولات 24/7. رمز الإحالة 3383-3619." },
          hi: { title: "MOJO Poker Club — GGClub पोकर, Massiv Poker Union", description: "GGClub और Massiv Poker Union नेटवर्क पर आधिकारिक पोकर क्लब। 55% तक रेकबैक, 1:1 चिप्स, 698+ ऑनलाइन खिलाड़ी, 24/7 टेबल। रेफरल कोड 3383-3619।" },
          fa: { title: "MOJO Poker Club — پوکر GGClub، Massiv Poker Union", description: "باشگاه پوکر رسمی در شبکه GGClub و Massiv Poker Union. تا 55% ریک‌بک، تراشه 1:1، بیش از 698 بازیکن آنلاین، میزهای 24/7. کد معرف 3383-3619." },
          tr: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "GGClub ve Massiv Poker Union ağındaki resmi poker kulübü. %55'e kadar rakeback, 1:1 chip, 698+ çevrimiçi oyuncu, 24/7 masalar. Referans kodu 3383-3619." },
          az: { title: "MOJO Poker Club — GGClub Poker, Massiv Poker Union", description: "GGClub və Massiv Poker Union şəbəkəsindəki rəsmi poker klubu. 55%-ə qədər rakeback, 1:1 çips, 698+ onlayn oyunçu, 24/7 masalar. Referral kodu 3383-3619." },
          zh: { title: "MOJO Poker Club — GGClub 扑克，Massiv Poker Union", description: "GGClub 和 Massiv Poker Union 网络的官方扑克俱乐部。高达55%返水，1:1筹码，698+在线玩家，24/7桌台。推荐码 3383-3619。" },
          ja: { title: "MOJO Poker Club — GGClub ポーカー、Massiv Poker Union", description: "GGClubとMassiv Poker Unionネットワークの公式ポーカークラブ。最大55%レーキバック、1:1チップ、698人以上オンライン、24/7テーブル。紹介コード 3383-3619。" },
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'MOJO Poker Club',
          url: 'https://mojo-poker.com',
          description: 'Official poker club on GGClub / Massiv Poker Union network',
          contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://t.me/Mojo_Adm' },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <PremiumExperience />
        <Games />
        <Clubs />
        <Reviews />
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
}
