import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function RegionalPartners() {
  useEffect(() => {
    // Organization schema with connectedTo relationships
    const organizationWithPartnersSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PivotMarkets.ai - Ecosystem Integration Hub",
      "description": "Technical service provider connected to Indiana's Vision AI Alliance ecosystem partners.",
      "url": "https://pivotmarkets.ai/regional-partners",
      "connectedTo": [
        {
          "@type": "Organization",
          "name": "IU Luddy School of Informatics",
          "url": "https://luddy.indiana.edu/",
          "description": "Human-Centered AI research and Logic Architect certification"
        },
        {
          "@type": "Organization",
          "name": "Indiana IoT Lab",
          "url": "https://www.iotlab.org/",
          "description": "IoT and data sovereignty technical validation"
        },
        {
          "@type": "Organization",
          "name": "ClearObject",
          "description": "Industry 4.0 manufacturing standards and IoT integration"
        }
      ],
      "isRelatedTo": [
        {
          "@type": "Thing",
          "name": "Vision AI Systems",
          "url": "https://pivotmarkets.ai/docs/vision-ai-integration"
        },
        {
          "@type": "Thing",
          "name": "Sovereign Protocol",
          "url": "https://pivotmarkets.ai/protocol"
        },
        {
          "@type": "Thing",
          "name": "Indiana 2026 AI Initiative",
          "url": "https://iedc.in.gov/program/in-ai"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(organizationWithPartnersSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const partners = [
    {
      name: "IU Luddy School of Informatics",
      url: "https://luddy.indiana.edu/",
      focus: "Human-Centered AI Research",
      description: "Academic partnership advancing human-centered AI research and Logic Architect certification curriculum.",
      jointMetric: "Securing 100% of IU Vision Pilot Data via Sovereign RAG",
      icon: "🎓",
      collaboration: "Logic Architect Certification Program"
    },
    {
      name: "Indiana IoT Lab",
      url: "https://www.iotlab.org/",
      focus: "IoT & Data Sovereignty",
      description: "Technical validation and deployment infrastructure for sovereign data systems in manufacturing environments.",
      jointMetric: "80% Reduction in IoT Data Latency with Local Processing",
      icon: "🔬",
      collaboration: "Sovereign Data Residency Framework"
    },
    {
      name: "ClearObject",
      url: "https://www.clearobject.com/",
      focus: "Industry 4.0 Standards",
      description: "Collaborative alignment on Industry 4.0 manufacturing standards and IoT integration for regional makers.",
      jointMetric: "100% Manufacturing Process Auditability",
      icon: "⚙️",
      collaboration: "Industry 4.0 Integration Protocol"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-xl tracking-tight">PivotMarkets.ai</div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/protocol" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Protocol
              </a>
              <Button size="sm" asChild>
                <a href="mailto:contact@pivotmarkets.ai">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "Regional Partners", href: "/regional-partners" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Ecosystem Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with Indiana's leading AI research institutions and Industry 4.0 innovators to build sovereign, resilient infrastructure for regional manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Showcase Cards */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Partner Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{partner.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                        <p className="text-sm font-semibold text-primary mb-3">{partner.focus}</p>
                        <p className="text-muted-foreground mb-4">
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    {/* Collaboration Details */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">Joint Resilience Metric</div>
                        <p className="text-muted-foreground">{partner.jointMetric}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">Collaboration Focus</div>
                        <p className="text-muted-foreground">{partner.collaboration}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-3">
                      <Button asChild className="w-full" variant="outline">
                        <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Visit Partner <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button asChild className="w-full">
                        <a href="/docs/vision-ai-integration">
                          Integration Guide
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How the Ecosystem Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📊</span>
                Phase 1: Vision Capture
              </h3>
              <p className="text-muted-foreground mb-4">
                IU Luddy and ClearObject deploy Vision AI systems that capture real-time manufacturing data—defect detection, inventory tracking, workflow monitoring. These systems generate rich visual and operational insights.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time visual perception</li>
                <li>• Defect and quality detection</li>
                <li>• Inventory and asset tracking</li>
                <li>• Workflow optimization signals</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                Phase 2: Sovereign Governance
              </h3>
              <p className="text-muted-foreground mb-4">
                PivotMarkets.ai secures all Vision AI-generated data via the Sovereign Protocol. Data stays local, governance is auditable, and compliance is automatic. Indiana IoT Lab validates the infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Local data residency enforcement</li>
                <li>• Auditable governance layer</li>
                <li>• Compliance automation</li>
                <li>• Regional control & sovereignty</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground">Home</a></li>
                <li><a href="/protocol" className="hover:text-foreground">Protocol</a></li>
                <li><a href="/regional-partners" className="hover:text-foreground">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/docs/vision-ai-integration" className="hover:text-foreground">Integration Docs</a></li>
                <li><a href="/newsroom" className="hover:text-foreground">Newsroom</a></li>
                <li><a href="/glossary" className="hover:text-foreground">Glossary</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://luddy.indiana.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IU Luddy</a></li>
                <li><a href="https://www.iotlab.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IoT Lab</a></li>
                <li><a href="https://www.clearobject.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">ClearObject</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Authority</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IN AI Initiative</a></li>
                <li><a href="https://aiindex.stanford.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Stanford AI Index</a></li>
                <li><a href="https://www.iedc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IEDC</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              PivotMarkets.ai partners with Indiana's leading institutions to deliver sovereign, resilient AI infrastructure for regional economic development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
