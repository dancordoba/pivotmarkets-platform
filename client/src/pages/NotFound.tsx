import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { usePageMeta } from "@/lib/pageMeta";

export default function NotFound() {
  usePageMeta(
    "PivotMarkets Route Not Found | B2B Public Site Boundary",
    "The requested PivotMarkets public-site route is unavailable; approved Rev 2 routes remain limited to organizational funding strategy content and handoff boundaries.",
  );

  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="mx-4 w-full max-w-lg rounded-lg border border-slate-200 bg-white/90 shadow-lg backdrop-blur-sm">
        <CardContent className="pb-8 pt-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <AlertCircle className="relative h-9 w-9 text-primary" aria-hidden="true" />
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold text-primary">404</h1>

          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Page Not Found
          </h2>

          <p className="mb-8 text-slate-600 leading-relaxed">
            This public-site route is not part of the approved PivotMarkets Rev 2 release boundary.
            <br />
            Return home to continue with organizational funding strategy context preparation.
          </p>

          <div
            id="not-found-button-group"
            className="flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button
              onClick={handleGoHome}
              className="rounded-lg bg-[var(--pm-teal)] px-6 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-[var(--pm-teal-dark)] hover:shadow-lg"
            >
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
