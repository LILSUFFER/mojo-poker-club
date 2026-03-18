import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Home } from "@/pages/Home";
import { Download } from "@/pages/Download";
import { InstallGuide } from "@/pages/InstallGuide";
import { JoinGuide } from "@/pages/JoinGuide";
import { CreateAccount } from "@/pages/CreateAccount";
import { ClubMassiv } from "@/pages/ClubMassiv";
import { ClubMojo } from "@/pages/ClubMojo";
import { AboutPage } from "@/pages/AboutPage";
import { GamesPage } from "@/pages/GamesPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const VALID_LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/install" component={InstallGuide} />
        <Route path="/join" component={JoinGuide} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/clubs/massiv" component={ClubMassiv} />
        <Route path="/clubs/mojo" component={ClubMojo} />
        <Route path="/about" component={AboutPage} />
        <Route path="/games" component={GamesPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function LangAwareRouter() {
  const [location] = useLocation();
  const firstSeg = location.split('/').filter(Boolean)[0] ?? '';
  const langBase = VALID_LANGS.includes(firstSeg) ? `/${firstSeg}` : '';

  return (
    <WouterRouter base={langBase}>
      <Routes />
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <LangAwareRouter />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
