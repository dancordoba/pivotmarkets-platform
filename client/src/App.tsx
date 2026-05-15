import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import SuccessStory from "./pages/SuccessStory";
import ExploreFunding from "./pages/ExploreFunding";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Newsroom from "./pages/Newsroom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { StaffHome, StaffIntakeDetail, StaffIntakeList } from "./pages/StaffDashboard";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/success-story"} component={SuccessStory} />
      <Route path={"/explore-funding"} component={ExploreFunding} />
      <Route path={"/faq"} component={Faq} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/newsroom"} component={Newsroom} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/staff/intake/:id"} component={StaffIntakeDetail} />
      <Route path={"/staff/intake"} component={StaffIntakeList} />
      <Route path={"/staff"} component={StaffHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
