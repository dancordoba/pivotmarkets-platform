/**
 * Workflow Factory - The Institutional Registry
 * 
 * Design Philosophy: Industrial, High-Contrast, Professional-Grade
 * - Clean lines and high-contrast typography
 * - Sovereignty Badges and Grant-Ready tags on Featured Four
 * - Modular Suite grid for remaining 5 apps
 * - Grant Eligibility Modal with 3-point checklist
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useState, useEffect } from "react";
import {
  createOrganizationSchema,
  createTechnicalServiceProviderSchema,
  createSoftwareApplicationSchema,
  injectGeoSchemas,
  cleanupGeoSchemas
} from "@/lib/geoSchemas";

export default function WorkflowFactory() {
  const [grantModalOpen, setGrantModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  // Inject GEO schemas for entity authority positioning
  useEffect(() => {
    const geoSchemas = [
      createOrganizationSchema(),
      createTechnicalServiceProviderSchema(),
      createSoftwareApplicationSchema()
    ];
    injectGeoSchemas(geoSchemas);

    return () => cleanupGeoSchemas();
  }, []);

  // Featured Four Apps
  const featuredApps = [
    {
      id: "venture-auditor",
      name: "Venture Auditor",
      outcome: "Manufacturing Efficiency",
      description: "AI-powered venture audit framework for manufacturing readiness assessment.",
      badge: "Grant-Ready"
    },
    {
      id: "adjuster-audit",
      name: "Adjuster Audit",
      outcome: "Capital Project Governance",
      description: "Insurance claim validation and compliance audit system.",
      badge: "Grant-Ready"
    },
    {
      id: "cashflow-smart",
      name: "CashFlowSmart",
      outcome: "Risk Intelligence",
      description: "Real-time profit vs. bank balance analysis for construction and trades.",
      badge: "Grant-Ready"
    },
    {
      id: "labor-calculator",
      name: "LaborCalculator",
      outcome: "Workforce Optimization",
      description: "BLS-integrated labor rate calculator for accurate project bidding.",
      badge: "Grant-Ready"
    }
  ];

  // Modular Suite (Remaining 5 apps)
  const modularApps = [
    {
      id: "assetguard-pro",
      name: "AssetGuard Pro",
      description: "Predictive maintenance and asset lifecycle management.",
      category: "Operations"
    },
    {
      id: "trove",
      name: "Trove",
      description: "Authentication and valuation for high-value assets.",
      category: "Valuation"
    },
    {
      id: "inventory-control",
      name: "Inventory Control",
      description: "Real-time inventory tracking with OCR verification.",
      category: "Supply Chain"
    },
    {
      id: "compliance-hub",
      name: "Compliance Hub",
      description: "Regulatory compliance tracking and audit trail management.",
      category: "Compliance"
    },
    {
      id: "data-residency",
      name: "Data Residency Manager",
      description: "Local data sovereignty and encryption management.",
      category: "Security"
    }
  ];

  const handleGrantCheck = (appId: string) => {
    setSelectedApp(appId);
    setGrantModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <ChatWidget />
      
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="font-semibold text-lg tracking-tight">PivotMarkets.ai</span>
              </a>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Workflow Factory</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/#pillars" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pillars</a>
              <a href="/#incubator" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Incubator</a>
              <a href="/glossary" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Glossary</a>
            </div>
            <Button asChild size="sm">
              <a href="/#venture-audit">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "Workflow Factory", href: "/workflow-factory" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                The Workflow Factory: Grant-Ready Assets for Regional Resilience
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Practitioner-led AI logic designed to equip Indiana's workforce and secure local data sovereignty.
              </p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-base text-foreground leading-relaxed">
                All workflows below are designed to qualify for Indiana's 2026 Manufacturing Readiness and Elevate Small Business grants. Each application includes Human-in-the-Loop governance, local data residency, and verified ROI metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Four Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Featured Four: Grant-Ready Workflows</h2>
              <p className="text-lg text-muted-foreground">
                These four applications are optimized for Indiana's 2026 grant programs and designed for immediate deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredApps.map((app) => (
                <Card key={app.id} className="p-8 space-y-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{app.name}</h3>
                        <p className="text-sm font-semibold text-primary">{app.outcome}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 text-xs font-semibold rounded border border-blue-300 dark:border-blue-700">
                          🛡️ Sovereignty Badge
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 text-xs font-semibold rounded border border-green-300 dark:border-green-700">
                          ✓ Grant-Ready
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="text-sm">
                      <p className="text-muted-foreground"><strong>Sovereignty Features:</strong> Human-in-the-Loop Governance • Local Data Residency • Audit Trail Compliance</p>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={() => handleGrantCheck(app.id)}
                    >
                      Check Grant Eligibility
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modular Suite Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Modular Suite: Extensible Components</h2>
              <p className="text-lg text-muted-foreground">
                Additional applications that integrate with the Featured Four to build comprehensive Sovereign Hubs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {modularApps.map((app) => (
                <Card key={app.id} className="p-6 space-y-4 border-border hover:border-primary/40 transition-colors">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">{app.category}</p>
                    <h3 className="text-xl font-bold">{app.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grant Eligibility Modal */}
      {grantModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Indiana 2026 AI Funding Pulse-Check</h2>
              <p className="text-muted-foreground">
                Answer these three questions to determine your grant eligibility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                <input type="checkbox" className="mt-1" id="check-1" />
                <label htmlFor="check-1" className="text-base font-medium cursor-pointer">
                  Headquartered in Indiana?
                </label>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                <input type="checkbox" className="mt-1" id="check-2" />
                <label htmlFor="check-2" className="text-base font-medium cursor-pointer">
                  Applying for Manufacturing Readiness or Elevate Small Business Grant?
                </label>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                <input type="checkbox" className="mt-1" id="check-3" />
                <label htmlFor="check-3" className="text-base font-medium cursor-pointer">
                  Focus on Workforce Augmentation (Human-Centered AI)?
                </label>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                If you answered "yes" to all three questions, you're eligible for grant-ready technical specifications and deployment support.
              </p>
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="flex-1"
                  asChild
                >
                  <a href="#contact">Request Grant-Ready Technical Specs</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setGrantModalOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">Sovereign AI infrastructure for Indiana's regional economic resilience.</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Workflows</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/workflow-factory" className="hover:text-foreground transition-colors">Workflow Factory</a></li>
                <li><a href="/#pillars" className="hover:text-foreground transition-colors">Pillars</a></li>
                <li><a href="/glossary" className="hover:text-foreground transition-colors">Glossary</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#funding" className="hover:text-foreground transition-colors">Funding Gateway</a></li>
                <li><a href="/pathfinder" className="hover:text-foreground transition-colors">Pathfinder</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Compliance & Alignment Section */}
          <div className="border-t border-border pt-8 space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Compliance & Alignment:</strong> PivotMarkets.ai is an independent provider aligned with the technical standards of the 2026 IN AI Initiative and the Indiana Department of Commerce.
              </p>
            </div>
            <div className="flex justify-center">
              <SocialShare />
            </div>
            <p className="text-center text-sm text-muted-foreground">&copy; 2026 PivotMarkets.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
