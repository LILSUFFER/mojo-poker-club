import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PremiumExperience } from '@/components/PremiumExperience';
import { Clubs } from '@/components/Clubs';
import { HowToJoin } from '@/components/HowToJoin';
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
        <Clubs />
        <HowToJoin />
        <Stats />
        <Contact />
        <DownloadBanner />
      </main>
      <Footer />
    </div>
  );
}
