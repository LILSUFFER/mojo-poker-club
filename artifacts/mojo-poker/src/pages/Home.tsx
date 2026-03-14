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
        ru={{
          title: 'MOJO Poker Club — покерный клуб GGClub, Massiv Poker Union',
          description: 'Официальный покерный клуб в сети GGClub и Massiv Poker Union. Рейкбек до 55%, фишки 1к1, онлайн 698+ игроков, столы 24/7. Реферальный код 3383-3619.',
          keywords: 'GGClub, ClubGG, покер клуб, Massiv Poker Union, Massiv Union Poker, MOJO Poker, покер онлайн, клубный покер, рейкбек покер, GG Club покер',
        }}
        en={{
          title: 'MOJO Poker Club — GGClub Poker, Massiv Poker Union',
          description: 'Official poker club on GGClub and Massiv Poker Union network. Up to 55% rakeback, 1:1 chips, 698+ online players, 24/7 tables. Referral code 3383-3619.',
          keywords: 'GGClub poker club, ClubGG, Massiv Poker Union, MOJO Poker, online poker club, rakeback poker, GG Club',
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
