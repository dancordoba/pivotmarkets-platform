import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function VisionAIIntegration() {
  useEffect(() => {
    // TechArticle schema for technical documentation
    const techArticleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Vision AI Integration Guide: Sovereign Protocol Implementation",
      "description": "Step-by-step technical documentation for integrating Vision AI systems with the Sovereign Protocol for secure, local data governance.",
      "url": "https://pivotmarkets.ai/docs/vision-ai-integration",
      "datePublished": "2026-05-06",
      "author": {
        "@type": "Organization",
        "name": "PivotMarkets.ai"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Vision AI Systems",
          "description": "Perception layer for manufacturing automation"
        },
        {
          "@type": "Thing",
          "name": "Sovereign Protocol",
          "description": "Governance and data residency layer"
        }
      ],
      "mentions": [
        {
          "@type": "Organization",
          "name": "IU Luddy School of Informatics",
          "url": "https://luddy.indiana.edu/"
        },
        {
          "@type": "Organization",
          "name": "Indiana IoT Lab",
          "url": "https://www.iotlab.org/"
        },
        {
          "@type": "Organization",
          "name": "ClearObject",
          "description": "Industry 4.0 partner"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(techArticleSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
              <a href="/regional-partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Partners
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
        <Breadcrumb items={[{ label: "Docs", href: "/docs" }, { label: "Vision AI Integration", href: "/docs/vision-ai-integration" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Vision AI Integration Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Step-by-step technical documentation for integrating Vision AI systems with the Sovereign Protocol. Secure your manufacturing data while maintaining full local control and auditability.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <Card className="p-8 border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-6">Integration Architecture</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phase 1: Vision Capture</h3>
                  <p className="text-muted-foreground">Deploy Vision AI systems (IU Luddy / ClearObject) to capture manufacturing data</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-2">
                <ChevronRight className="w-6 h-6 text-primary rotate-90" />
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phase 2: Sovereign Governance</h3>
                  <p className="text-muted-foreground">PivotMarkets.ai secures data via Sovereign Protocol with local residency</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Phase 1: Vision Capture */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Phase 1: Vision Capture</h2>
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-2xl font-semibold mb-4">1.1 Vision AI System Deployment</h3>
              <p className="text-muted-foreground mb-4">
                Deploy Vision AI systems from IU Luddy School or ClearObject to capture real-time manufacturing data. These systems provide the perception layer for your operations.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                <div className="font-semibold text-sm">Capabilities:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Real-time defect detection and classification</li>
                  <li>✓ Inventory and asset tracking</li>
                  <li>✓ Workflow monitoring and optimization signals</li>
                  <li>✓ Quality assurance metrics</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-2xl font-semibold mb-4">1.2 Data Stream Configuration</h3>
              <p className="text-muted-foreground mb-4">
                Configure Vision AI systems to output structured data streams (JSON/Protocol Buffers) that can be ingested by the Sovereign Protocol. Each data stream should include:
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                <div className="font-semibold text-sm">Required Data Fields:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Timestamp (UTC)</li>
                  <li>• Source system identifier</li>
                  <li>• Data classification (public/internal/confidential)</li>
                  <li>• Processing metadata</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-2xl font-semibold mb-4">1.3 Indiana IoT Lab Validation</h3>
              <p className="text-muted-foreground mb-4">
                Work with Indiana IoT Lab to validate your Vision AI deployment meets data quality and latency requirements. This ensures your data streams are production-ready before integration with Sovereign Protocol.
              </p>
              <Button asChild variant="outline">
                <a href="https://www.iotlab.org/" target="_blank" rel="noopener noreferrer">
                  Contact Indiana IoT Lab
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 2: Sovereign Governance */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Phase 2: Sovereign Governance</h2>
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-2xl font-semibold mb-4">2.1 Sovereign Protocol Integration</h3>
              <p className="text-muted-foreground mb-4">
                Connect your Vision AI data streams to the Sovereign Protocol. All data is encrypted, stored locally, and governed by your organization's policies.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <div className="font-semibold text-sm">Integration Steps:</div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Register data source with Sovereign Protocol</li>
                  <li>2. Configure encryption keys (local key management)</li>
                  <li>3. Set data residency policies (Indiana-only)</li>
                  <li>4. Enable audit logging for all access</li>
                </ol>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-2xl font-semibold mb-4">2.2 Data Residency & Privacy</h3>
              <p className="text-muted-foreground mb-4">
                The Sovereign Protocol ensures all Vision AI-generated data remains within Indiana's borders. No data leaves your region without explicit authorization.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <div className="font-semibold text-sm">Guarantees:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 100% local data residency</li>
                  <li>✓ End-to-end encryption</li>
                  <li>✓ No third-party access without authorization</li>
                  <li>✓ Compliance with GDPR, CCPA, and state regulations</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-2xl font-semibold mb-4">2.3 Governance & Auditability</h3>
              <p className="text-muted-foreground mb-4">
                Every access to Vision AI data is logged and auditable. Generate compliance reports on-demand to prove governance and regulatory adherence.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <div className="font-semibold text-sm">Audit Capabilities:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time access logs</li>
                  <li>• Data lineage tracking</li>
                  <li>• Automated compliance reports</li>
                  <li>• Anomaly detection and alerting</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-2xl font-semibold mb-4">2.4 Compliance Automation</h3>
              <p className="text-muted-foreground mb-4">
                The Sovereign Protocol automatically enforces compliance policies. Data access is governed by role-based rules, and violations trigger immediate alerts.
              </p>
              <Button asChild>
                <a href="/protocol">
                  Learn About Sovereign Protocol
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Integrate?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team to discuss your Vision AI integration requirements and get started with the Sovereign Protocol.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="mailto:contact@pivotmarkets.ai">Request Integration Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/regional-partners">View Our Partners</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12 mt-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/docs/vision-ai-integration" className="hover:text-foreground">Vision AI Integration</a></li>
                <li><a href="/protocol" className="hover:text-foreground">Sovereign Protocol</a></li>
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
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/regional-partners" className="hover:text-foreground">Regional Partners</a></li>
                <li><a href="/newsroom" className="hover:text-foreground">Newsroom</a></li>
                <li><a href="/founder" className="hover:text-foreground">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Authority</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IN AI Initiative</a></li>
                <li><a href="https://aiindex.stanford.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Stanford AI Index</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              Vision AI Integration Guide • PivotMarkets.ai • Sovereign Protocol Implementation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
