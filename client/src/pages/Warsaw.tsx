/**
 * Warsaw - Precision Manufacturing & Medical Devices Hub
 * 
 * Million-Dollar Grant Stack Page featuring:
 * - READI 2.0 Funding
 * - Manufacturing Readiness Grants
 * - Big 3 Cloud Credits (Microsoft, AWS, Google)
 * - Sovereign ROI Analysis (up to 80% cost reduction)
 * - Industrial Audit Workflow Integration
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { useEffect } from "react";
import {
  createOrganizationSchema,
  createTechnicalServiceProviderSchema,
  injectGeoSchemas,
  cleanupGeoSchemas
} from "@/lib/geoSchemas";
import {
  createCityPlaceSchema,
  createCityLocalBusinessSchema,
  createCityHubOrganizationSchema,
  injectCitySchemas,
  cleanupCitySchemas
} from "@/lib/cityAeoSchemas";

const warsawData = {
  name: "Warsaw",
  industry: "Precision Manufacturing & Medical Devices",
  chamber: {
    name: "Warsaw Chamber of Commerce",
    url: "https://warsawchamber.com"
  },
  grantStack: {
    readi: {
      name: "READI 2.0 (Regional Economic Acceleration and Development Initiative)",
      amount: "$500,000 - $2,000,000",
      description: "Indiana's flagship regional development program supporting infrastructure and workforce development for emerging tech hubs.",
      url: "https://iedc.in.gov/program/readi-2-0"
    },
    manufacturing: {
      name: "Manufacturing Readiness Grant",
      amount: "$50,000 - $500,000",
      description: "Indiana Department of Commerce grant for manufacturers adopting advanced technologies and AI-driven workflows.",
      url: "https://iedc.in.gov/program/manufacturing-readiness"
    },
    cloudCredits: [
      {
        provider: "Microsoft Azure",
        amount: "$100,000 - $200,000",
        description: "Azure credits for cloud infrastructure, AI services, and enterprise applications.",
        url: "https://www.microsoft.com/en-us/nonprofits/azure"
      },
      {
        provider: "Amazon Web Services (AWS)",
        amount: "$100,000 - $200,000",
        description: "AWS credits for compute, storage, and machine learning services.",
        url: "https://aws.amazon.com/activate/"
      },
      {
        provider: "Google Cloud",
        amount: "$100,000 - $200,000",
        description: "Google Cloud credits for data analytics, AI/ML, and infrastructure services.",
        url: "https://cloud.google.com/startup"
      }
    ]
  },
  roiScenarios: [
    {
      scenario: "Traditional Medical Device R&D",
      yearlyCapex: "$800,000",
      yearlyOpex: "$500,000",
      totalFirstYear: "$1,300,000",
      withGrants: "$260,000 (80% funded)"
    },
    {
      scenario: "AI-Powered Precision Manufacturing",
      yearlyCapex: "$450,000",
      yearlyOpex: "$300,000",
      totalFirstYear: "$750,000",
      withGrants: "$150,000 (80% funded)"
    },
    {
      scenario: "Sovereign Medical Device Intelligence",
      yearlyCapex: "$500,000",
      yearlyOpex: "$350,000",
      totalFirstYear: "$850,000",
      withGrants: "$170,000 (80% funded)"
    }
  ]
};

export default function Warsaw() {
  // Inject GEO schemas for entity authority positioning
  useEffect(() => {
    const geoSchemas = [
      createOrganizationSchema(),
      createTechnicalServiceProviderSchema()
    ];
    injectGeoSchemas(geoSchemas);

    // Inject city-specific schemas
    const citySchemas = [
      createCityPlaceSchema(warsawData.name, warsawData.industry, "~13,000"),
      createCityLocalBusinessSchema(
        warsawData.name,
        warsawData.industry,
        warsawData.chamber.name,
        warsawData.chamber.url
      ),
      createCityHubOrganizationSchema(
        warsawData.name,
        warsawData.industry,
        warsawData.chamber.name,
        warsawData.chamber.url
      )
    ];
    injectCitySchemas(citySchemas);

    return () => {
      cleanupGeoSchemas();
      cleanupCitySchemas();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ChatWidget />

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-xl tracking-tight">PivotMarkets.ai</div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/regional-showcases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Regional Showcases
              </a>
              <a href={warsawData.chamber.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                {warsawData.chamber.name}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {warsawData.name}: The Million-Dollar Grant Stack
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advance {warsawData.industry} with sovereign R&D infrastructure. Leverage READI 2.0, Manufacturing Readiness Grants, and Big 3 Cloud Credits to accelerate innovation and reduce R&D costs by up to 80%.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white dark:bg-slate-900 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">$2.7M+</div>
              <p className="text-sm text-muted-foreground">Total Grant Stack Available</p>
            </Card>
            <Card className="p-6 bg-white dark:bg-slate-900 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <p className="text-sm text-muted-foreground">R&D Cost Reduction Potential</p>
            </Card>
            <Card className="p-6 bg-white dark:bg-slate-900 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3 Years</div>
              <p className="text-sm text-muted-foreground">Typical Grant Cycle</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Grant Stack Module */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            The Million-Dollar Grant Stack
          </h2>

          <div className="space-y-8">
            {/* READI 2.0 */}
            <Card className="p-8 bg-white dark:bg-slate-900 border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{warsawData.grantStack.readi.name}</h3>
                  <p className="text-lg text-primary font-semibold mt-2">{warsawData.grantStack.readi.amount}</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                  Indiana State
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{warsawData.grantStack.readi.description}</p>
              <Button variant="outline" asChild>
                <a href={warsawData.grantStack.readi.url} target="_blank" rel="noopener noreferrer">
                  Learn More About READI 2.0 →
                </a>
              </Button>
            </Card>

            {/* Manufacturing Readiness */}
            <Card className="p-8 bg-white dark:bg-slate-900 border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{warsawData.grantStack.manufacturing.name}</h3>
                  <p className="text-lg text-primary font-semibold mt-2">{warsawData.grantStack.manufacturing.amount}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                  Manufacturing Focus
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{warsawData.grantStack.manufacturing.description}</p>
              <Button variant="outline" asChild>
                <a href={warsawData.grantStack.manufacturing.url} target="_blank" rel="noopener noreferrer">
                  Explore Manufacturing Readiness →
                </a>
              </Button>
            </Card>

            {/* Big 3 Cloud Credits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Big 3 Cloud Credits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {warsawData.grantStack.cloudCredits.map((cloud, idx) => (
                  <Card key={idx} className="p-6 bg-white dark:bg-slate-900 border border-border">
                    <h4 className="text-xl font-bold text-foreground mb-2">{cloud.provider}</h4>
                    <p className="text-lg text-primary font-semibold mb-4">{cloud.amount}</p>
                    <p className="text-sm text-muted-foreground mb-6">{cloud.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={cloud.url} target="_blank" rel="noopener noreferrer">
                        Explore {cloud.provider.split(" ")[0]} →
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign ROI Table */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Sovereign ROI: Cost Reduction Analysis
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">R&D Scenario</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Year 1 CapEx</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Year 1 OpEx</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Total Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-primary">With Grant Stack</th>
                </tr>
              </thead>
              <tbody>
                {warsawData.roiScenarios.map((scenario, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{scenario.scenario}</td>
                    <td className="px-6 py-4 text-muted-foreground">{scenario.yearlyCapex}</td>
                    <td className="px-6 py-4 text-muted-foreground">{scenario.yearlyOpex}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{scenario.totalFirstYear}</td>
                    <td className="px-6 py-4 font-bold text-primary">{scenario.withGrants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Grant Stack Strategy:</strong> By combining READI 2.0 ($500K-$2M), Manufacturing Readiness Grants ($50K-$500K), and Big 3 Cloud Credits ($300K combined), {warsawData.name} precision manufacturers can fund sovereign R&D infrastructure with minimal capital requirements. This accelerates medical device innovation, enables local data residency for compliance, and positions {warsawData.name} as a leader in precision manufacturing intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Audit CTA */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your Sovereign R&D Hub?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Industrial Audit workflow will assess your organization's grant eligibility, identify the optimal grant stack for your R&D goals, and create a roadmap to sovereign infrastructure.
            </p>
            <div className="pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Grant Stack Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">{warsawData.name} - Sovereign R&D Hub Architect</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/regional-showcases" className="hover:text-foreground transition-colors">Regional Showcases</a></li>
                <li><a href="/workflow-factory" className="hover:text-foreground transition-colors">Workflow Factory</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Local Partners</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href={warsawData.chamber.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{warsawData.chamber.name}</a></li>
                <li><a href="https://www.iedc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IEDC</a></li>
                <li><a href="https://www.cicpindiana.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">CICP</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Technical</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/pivotmarkets/sovereign-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Technical Protocol & Sovereign Schema</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 PivotMarkets.ai. Architecting {warsawData.name}'s Sovereign R&D Hub. | 
              <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                Aligned with 2026 IN AI Initiative
              </a>
            </p>
            <div className="flex justify-center mt-4">
              <SocialShare />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
