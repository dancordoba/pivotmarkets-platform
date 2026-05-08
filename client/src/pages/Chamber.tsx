/**
 * Chamber Director Landing Page - Authority Positioning
 * 
 * Design Philosophy: Institutional Authority, Strategic Clarity
 * - 4-Step Roadmap to Sovereign AI Region
 * - Chamber of Commerce focused messaging
 * - Regional resilience and economic development emphasis
 * - Industrial aesthetic with high-contrast typography
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { useEffect } from "react";
import {
  createOrganizationSchema,
  createTechnicalServiceProviderSchema,
  createGovernmentServiceSchema,
  createLocalBusinessSchema,
  injectGeoSchemas,
  cleanupGeoSchemas
} from "@/lib/geoSchemas";

export default function Chamber() {
  // Inject GEO schemas for entity authority positioning
  useEffect(() => {
    const geoSchemas = [
      createOrganizationSchema(),
      createTechnicalServiceProviderSchema(),
      createGovernmentServiceSchema(),
      createLocalBusinessSchema()
    ];
    injectGeoSchemas(geoSchemas);

    return () => cleanupGeoSchemas();
  }, []);

  // Inject chamber-specific schema markup for chamber director targeting
  useEffect(() => {
    // LocalBusiness schema for chamber targeting
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "PivotMarkets.ai - Chamber Director Program",
      "description": "Regional Sovereign AI infrastructure program for Indiana Chambers of Commerce and economic development organizations.",
      "url": "https://pivotmarkets.ai/chamber",
      "areaServed": {
        "@type": "State",
        "name": "Indiana, USA"
      },
      "serviceType": "Economic Development, Regional AI Infrastructure, Workforce Readiness",
      "audience": {
        "@type": "Audience",
        "audienceType": "Chamber of Commerce, Regional Economic Development"
      },
      "sameAs": [
        "https://www.cicpindiana.com/",
        "https://iedc.in.gov/program/in-ai"
      ]
    };

    // GovernmentService schema for grant alignment
    const governmentServiceSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Regional Resilience Brief Service",
      "description": "Strategic consultation service helping Indiana Chambers of Commerce implement Sovereign AI infrastructure aligned with 2026 IN AI Initiative.",
      "url": "https://pivotmarkets.ai/chamber",
      "areaServed": {
        "@type": "State",
        "name": "Indiana, USA"
      },
      "serviceType": "Strategic Consultation, Regional Economic Development",
      "audience": {
        "@type": "Audience",
        "audienceType": "Chamber of Commerce Directors, Regional Economic Development Professionals"
      },
      "sameAs": [
        "https://www.cicpindiana.com/",
        "https://iedc.in.gov/program/in-ai"
      ]
    };

    [localBusinessSchema, governmentServiceSchema].forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(s => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, []);

  const roadmapSteps = [
    {
      number: 1,
      title: "Audit",
      subtitle: "Regional AI Readiness Assessment",
      description: "We conduct a comprehensive audit of your region's current AI adoption, workforce capabilities, and infrastructure gaps. This assessment identifies opportunities for sovereign AI deployment aligned with your chamber's strategic priorities and Indiana's 2026 IN AI Initiative.",
      outcomes: [
        "Current-state AI adoption analysis",
        "Workforce capability mapping",
        "Infrastructure gap identification",
        "Grant eligibility assessment"
      ]
    },
    {
      number: 2,
      title: "Certification",
      subtitle: "Logic Architect Training & Governance Framework",
      description: "We certify your regional leaders as Logic Architects—professionals trained in agentic governance, Human-in-the-Loop oversight, and regional data sovereignty. This creates an institutional knowledge base that sustains AI adoption across your member organizations.",
      outcomes: [
        "Logic Architect certification program",
        "Governance framework documentation",
        "Compliance and audit standards",
        "Regional leadership network"
      ]
    },
    {
      number: 3,
      title: "Deployment",
      subtitle: "Sovereign AI Workflows for Main Street",
      description: "We deploy grant-ready, practitioner-led AI workflows tailored to your region's industries. From manufacturing readiness to insurance claims automation, each workflow is designed for immediate ROI while maintaining local data residency and Human-in-the-Loop governance.",
      outcomes: [
        "Industry-specific workflow deployment",
        "Grant-ready technical specifications",
        "Local data residency compliance",
        "Verified ROI metrics"
      ]
    },
    {
      number: 4,
      title: "Sovereignty",
      subtitle: "Regional Economic Resilience Engine",
      description: "Your region becomes a Sovereign AI Hub—an economic development engine that attracts talent, retains jobs, and drives productivity growth. This positions your chamber as the institutional authority for AI-driven economic resilience across Indiana.",
      outcomes: [
        "Regional hub status recognition",
        "Institutional authority positioning",
        "Job creation and wage growth",
        "Competitive regional advantage"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <ChatWidget />
      
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
              PivotMarkets.ai
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Chamber Director Program</span>
          </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/#pillars" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pillars</a>
              <a href="/workflow-factory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Workflow Factory</a>
              <a href="/glossary" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Glossary</a>
            </div>
            <Button asChild size="sm">
              <a href="#request-brief">Request Brief</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                The 4-Step Roadmap to a Sovereign AI Region
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Transform your chamber into Indiana's authority for regional economic resilience through practitioner-led AI infrastructure.
              </p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-base text-foreground leading-relaxed">
                <strong>Aligned with Indiana's <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">2026 IN AI Initiative</a>:</strong> This roadmap positions your chamber as the institutional leader for AI adoption across your region. Each step is designed to qualify for Manufacturing Readiness and Elevate Small Business grants while building lasting competitive advantage for your member organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Roadmap */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div key={step.number} className="space-y-6">
                <div className="flex items-start gap-6">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground font-bold text-2xl border-4 border-primary/20">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold">{step.title}</h2>
                      <p className="text-lg font-semibold text-primary">{step.subtitle}</p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Outcomes */}
                    <div className="space-y-3 pt-4">
                      <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
                      <ul className="space-y-2">
                        {step.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < roadmapSteps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chamber Directors Choose PivotMarkets */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold">Why Chamber Directors Choose PivotMarkets</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand the unique pressures and opportunities facing regional economic development leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">92</div>
                <h3 className="text-xl font-bold">Indiana Chambers</h3>
                <p className="text-muted-foreground">
                  We're building a network of Sovereign AI Hubs across all 92 Indiana chambers, creating a unified regional infrastructure.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">$10K+</div>
                <h3 className="text-xl font-bold">Grant Eligibility</h3>
                <p className="text-muted-foreground">
                  Our workflows qualify for Manufacturing Readiness and Elevate Small Business grants, turning AI adoption into grant-funded initiatives.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">4-6 Weeks</div>
                <h3 className="text-xl font-bold">Time to Deployment</h3>
                <p className="text-muted-foreground">
                  From audit to deployment, our proven roadmap delivers results faster than traditional consulting approaches.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="request-brief" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Lead Your Region?</h2>
              <p className="text-xl text-muted-foreground">
                Request a Regional Resilience Brief tailored to your chamber's strategic priorities and member base.
              </p>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg space-y-4">
              <p className="text-base text-foreground font-medium">
                The Regional Resilience Brief includes:
              </p>
              <ul className="space-y-2 text-left text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>AI adoption readiness assessment for your region</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Grant eligibility analysis for your member organizations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Customized 4-step implementation roadmap</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Board presentation materials and talking points</span>
                </li>
              </ul>
            </div>

            <Button size="lg" asChild className="w-full md:w-auto">
              <a href="#contact">Request a Regional Resilience Brief for your Board</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">Building Sovereign AI Hubs across Indiana's regions.</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/workflow-factory" className="hover:text-foreground transition-colors">Workflow Factory</a></li>
                <li><a href="/glossary" className="hover:text-foreground transition-colors">Glossary</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Programs</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#incubator" className="hover:text-foreground transition-colors">Middle Manager Incubator</a></li>
                <li><a href="/chamber" className="hover:text-foreground transition-colors">Chamber Director Program</a></li>
                <li><a href="/funding-gateway" className="hover:text-foreground transition-colors">Funding Gateway</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
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
            <p className="text-center text-sm text-muted-foreground">&copy; 2026 PivotMarkets.ai. All rights reserved. | Aligned with <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Indiana's 2026 IN AI Initiative</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}