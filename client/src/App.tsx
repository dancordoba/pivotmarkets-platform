import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AppStore from "./pages/AppStore";
import WorkflowFactory from "./pages/WorkflowFactory";
import Chamber from "./pages/Chamber";
import Glossary from "./pages/Glossary";
import AdminContactSubmissions from "./pages/AdminContactSubmissions";
import FundingGateway from "./pages/FundingGateway";
import PathfinderGateway from "./pages/PathfinderGateway";
import RegionalShowcases from "./pages/RegionalShowcases";
import Nappanee from "./pages/Nappanee";
import Jasper from "./pages/Jasper";
import Warsaw from "./pages/Warsaw";
import Newsroom from "./pages/Newsroom";
import FounderBio from "./pages/FounderBio";
import LogicArchitectCourses from "./pages/LogicArchitectCourses";
import Protocol from "./pages/Protocol";
import RegionalPartners from "./pages/RegionalPartners";
import VisionAIIntegration from "./pages/VisionAIIntegration";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/appstore"} component={AppStore} />
      <Route path={"/workflow-factory"} component={WorkflowFactory} />
      <Route path={"/chamber"} component={Chamber} />
      <Route path={"/glossary"} component={Glossary} />
      <Route path={"/funding-gateway"} component={FundingGateway} />
      <Route path={"/pathfinder"} component={PathfinderGateway} />
      <Route path={"/regional-showcases"} component={RegionalShowcases} />
      <Route path={"/nappanee"} component={Nappanee} />
      <Route path={"/jasper"} component={Jasper} />
      <Route path={"/warsaw"} component={Warsaw} />
      <Route path={"/newsroom"} component={Newsroom} />
      <Route path={"/founder"} component={FounderBio} />
      <Route path={"/logic-architect-courses"} component={LogicArchitectCourses} />
      <Route path={"/protocol"} component={Protocol} />
      <Route path={"/regional-partners"} component={RegionalPartners} />
      <Route path={"/docs/vision-ai-integration"} component={VisionAIIntegration} />
      <Route path={"/admin/contact-submissions"} component={AdminContactSubmissions} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
