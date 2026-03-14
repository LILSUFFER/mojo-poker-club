import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PremiumExperience } from '@/components/PremiumExperience';
import { Games } from '@/components/Games';
import { Clubs } from '@/components/Clubs';
import { Stats } from '@/components/Stats';
import { Contact } from '@/components/Contact';
import { DownloadBanner } from '@/components/DownloadBanner';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <PremiumExperience />
        <Games />
        <Clubs />
        <Stats />
        <Contact />
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
}
