import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Home } from "@/pages/Home";
import { Download } from "@/pages/Download";
import { MassivGuide } from "@/pages/MassivGuide";
import { InstallGuide } from "@/pages/InstallGuide";
import { JoinGuide } from "@/pages/JoinGuide";
import { CreateAccount } from "@/pages/CreateAccount";
import { ClubMassiv } from "@/pages/ClubMassiv";
import { ClubMojo } from "@/pages/ClubMojo";
import { AboutPage } from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route path="/install" component={InstallGuide} />
      <Route path="/join" component={JoinGuide} />
      <Route path="/massiv-guide" component={MassivGuide} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/clubs/massiv" component={ClubMassiv} />
      <Route path="/clubs/mojo" component={ClubMojo} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
