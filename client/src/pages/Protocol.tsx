import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SovereignBastion } from "@/components/SovereignBastion";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Protocol() {
  useEffect(() => {
    // GovernmentService schema for civic trust signals
    const governmentServiceSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Civic Leadership Briefing - Sovereign AI Infrastructure",
      "description": "Non-technical briefing for City Council members and Chamber Board directors on data privacy guarantees and workforce development benefits of Sovereign AI infrastructure.",
      "provider": {
        "@type": "Organization",
        "name": "PivotMarkets.ai",
        "url": "https://pivotmarkets.ai",
        "sameAs": [
          "https://www.iedc.org/",
          "https://www.cicpindiana.com/",
          "https://iedc.in.gov/program/in-ai"
        ]
      },
      "areaServed": {
        "@type": "State",
        "name": "Indiana"
      },
      "serviceType": "Civic Leadership Training",
      "audience": {
        "@type": "Audience",
        "audienceType": "City Council Members, Chamber Directors, Economic Development Officials"
      },
      "url": "https://pivotmarkets.ai/protocol"
    };

    // PublicPolicy schema linking to 2026 IN AI mandate
    const publicPolicySchema = {
      "@context": "https://schema.org",
      "@type": "PublicPolicy",
      "name": "Indiana 2026 AI Initiative - Sovereign Regional Infrastructure",
      "description": "State-aligned policy framework for deploying Sovereign AI infrastructure that prioritizes data residency, workforce development, and local economic resilience.",
      "policyMaker": {
        "@type": "GovernmentOrganization",
        "name": "Indiana Department of Commerce",
        "url": "https://www.in.gov/"
      },
      "about": {
        "@type": "Thing",
        "name": "Sovereign AI Infrastructure for Regional Economic Development"
      },
      "url": "https://iedc.in.gov/program/in-ai",
      "sameAs": [
        "https://iedc.in.gov/program/in-ai",
        "https://www.cicpindiana.com/"
      ]
    };

    // Organization schema with IN AI Resource Partner designation and GeoShape
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PivotMarkets.ai - IN AI Resource Partner",
      "description": "Human-Centered AI infrastructure provider and IN AI Resource Partner for North Central Indiana Innovate Hub",
      "url": "https://pivotmarkets.ai",
      "keywords": "IN AI Resource Partner, Sovereign AI, Regional Resilience, Human-Centered AI",
      "areaServed": [
        {
          "@type": "GeoShape",
          "box": "41.4500 -85.9500 41.5000 -85.8000",
          "name": "Nappanee, Indiana"
        },
        {
          "@type": "GeoShape",
          "box": "41.7000 -85.9800 41.7400 -85.9500",
          "name": "Elkhart, Indiana"
        },
        {
          "@type": "State",
          "name": "Indiana"
        }
      ],
      "sameAs": [
        "https://www.iedc.org/",
        "https://iedc.in.gov/program/in-ai",
        "https://www.cicpindiana.com/"
      ],
      "knowsAbout": [
        "Sovereign AI Infrastructure",
        "Regional Economic Development",
        "Human-Centered AI",
        "Data Sovereignty",
        "Industrial Resilience"
      ]
    };

    // ScholarlyArticle schema with citation to Stanford AI Index
    const scholarlyArticleSchema = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": "The Sovereign Protocol: Regional AI Infrastructure Grounded in Stanford Research",
      "description": "Technical protocol for deploying sovereign AI infrastructure that achieves frontier-level performance at 1/7th the cost, validated by 2026 Stanford AI Index benchmarks.",
      "author": {
        "@type": "Organization",
        "name": "PivotMarkets.ai"
      },
      "datePublished": "2026-05-06",
      "citation": {
        "@type": "ScholarlyArticle",
        "name": "2026 AI Index Report",
        "url": "https://aiindex.stanford.edu/",
        "author": {
          "@type": "Organization",
          "name": "Stanford University Human-Centered Artificial Intelligence Institute"
        }
      },
      "isBasedOn": {
        "@type": "CreativeWork",
        "url": "https://aiindex.stanford.edu/",
        "name": "2026 Stanford AI Index"
      }
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = JSON.stringify(governmentServiceSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = JSON.stringify(publicPolicySchema);
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.textContent = JSON.stringify(scholarlyArticleSchema);
    document.head.appendChild(script3);

    const script4 = document.createElement("script");
    script4.type = "application/ld+json";
    script4.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script4);

    // Knowledge Graph Organization schema for state partnerships
    const organizationPartnershipSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PivotMarkets.ai - Indiana Vision AI Alliance Partner",
      "description": "Technical service provider aligned with Indiana's Vision AI Alliance ecosystem and Industry 4.0 goals.",
      "url": "https://pivotmarkets.ai/protocol",
      "partner": [
        {
          "@type": "Organization",
          "name": "IU Luddy School of Informatics",
          "url": "https://luddy.indiana.edu/",
          "description": "Human-Centered AI research and Logic Architect certification partnership"
        },
        {
          "@type": "Organization",
          "name": "Indiana IoT Lab",
          "url": "https://www.iotlab.org/",
          "description": "Technical validation and deployment infrastructure for sovereign data systems"
        },
        {
          "@type": "Organization",
          "name": "ClearObject",
          "description": "Industry 4.0 manufacturing standards and IoT integration collaboration"
        }
      ],
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "Vision AI Systems",
          "description": "Perception layer for manufacturing automation"
        },
        {
          "@type": "Thing",
          "name": "Sovereign Protocol",
          "description": "Governance and data residency layer for Vision AI systems"
        }
      ],
      "sameAs": [
        "https://iedc.in.gov/program/in-ai",
        "https://www.cicpindiana.com/"
      ]
    };

    const script5 = document.createElement("script");
    script5.type = "application/ld+json";
    script5.textContent = JSON.stringify(organizationPartnershipSchema);
    document.head.appendChild(script5);

    return () => {
      script1.remove();
      script2.remove();
      script3.remove();
      script4.remove();
      script5.remove();
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
              <a href="/regional-showcases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Regional Showcases
              </a>
              <a href="/glossary" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Glossary
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "Protocol", href: "/protocol" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Sovereign Protocol
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Technical standards and governance framework for Indiana's Sovereign AI infrastructure. Designed for practitioners, auditable by civic leaders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-16">
          {/* Civic Leadership Section */}
          <div className="space-y-8">
            {/* Stanford AI Index Citation Whistle */}
            <Card className="p-8 border-2 border-accent bg-accent/5">
              <div className="flex gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Grounded in Global Research</h3>
                  <p className="text-muted-foreground mb-4">
                    The <a href="https://aiindex.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">2026 Stanford AI Index</a> confirms a 1.7% performance gap between open and closed models. Project Sovereign capitalizes on this convergence to deliver frontier-level intelligence at 1/7th the cost.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Our protocol isn't just a business claim—it's a direct application of peer-reviewed scientific research from the world's leading AI research body.
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="text-3xl font-bold mb-4">Civic Leadership</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don't build on commodities; we build on your Moats: Your Data, Your Workflows, and Your Local Expertise. For City Council members, Chamber Directors, and economic development officials: Here's what Sovereign AI infrastructure means for your community—in plain language.
              </p>
            </div>

            {/* Sovereign Bastion: Final Juice Injection */}
            <SovereignBastion />

            {/* Your Differentiated Moat Component */}
            <Card className="p-8 border-2 border-primary/20 bg-primary/5">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🏰</span>
                Your Differentiated Moat
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-primary">1. Proprietary Data</div>
                  <div className="text-sm font-medium text-muted-foreground">The Trove</div>
                  <p className="text-muted-foreground">
                    Your region's manufacturing data, supply chain relationships, and operational workflows stay local. No cloud vendor can replicate your competitive advantage.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-primary">2. Optimized Workflows</div>
                  <div className="text-sm font-medium text-muted-foreground">The Refinery</div>
                  <p className="text-muted-foreground">
                    AI logic customized for your industry's unique challenges. Not generic; not off-the-shelf. Built for regional makers and manufacturers.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-primary">3. Institutional Knowledge</div>
                  <div className="text-sm font-medium text-muted-foreground">The Logic Architect</div>
                  <p className="text-muted-foreground">
                    Certified practitioners who understand your region's economy, your workforce, and your growth trajectory. They speak your language, not Silicon Valley's.
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Privacy as Industrial Moat */}
            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                Data Privacy = Your Industrial Moat
              </h3>
              <p className="text-lg mb-6 text-muted-foreground">
                When your region's business data stays within Indiana's borders, you're building a competitive advantage that no outside corporation can replicate. Sovereign AI infrastructure guarantees that:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Local data never leaves the region.</strong> Your manufacturers' proprietary processes, supply chain relationships, and cost structures remain under your control—not stored on servers in California or overseas.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Compliance is automatic.</strong> No GDPR worries, no data breach lawsuits. Your businesses stay compliant with federal and state regulations by default.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>You attract privacy-conscious enterprises.</strong> Companies that handle sensitive data (medical devices, manufacturing, financial services) will choose your region because their data is protected.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground italic">
                Bottom line: Data residency is the new moat. Sovereign AI infrastructure puts your region in control.
              </p>
            </Card>

            {/* Logic Architect Training as Talent Retention */}
            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">👥</span>
                Logic Architect Training = Talent Retention
              </h3>
              <p className="text-lg mb-6 text-muted-foreground">
                The biggest threat to regional economies is brain drain—young talent leaving for tech hubs. Logic Architect certification changes that by creating high-value, local career paths:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>$60K-$120K careers without leaving home.</strong> Logic Architects design AI workflows for regional businesses. No relocation required. No tech-hub salary competition.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Workers stay skilled, businesses stay competitive.</strong> Your workforce learns to work alongside AI—not get replaced by it. They become more productive, earn more, and stay in the region.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Multiplier effect on wages and jobs.</strong> Certified Logic Architects attract more AI-intensive businesses to your region. More businesses = more jobs = wage growth across all sectors.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground italic">
                Bottom line: Talent retention drives economic resilience. Logic Architect certification keeps your best people—and attracts new talent.
              </p>
            </Card>

            {/* Workforce Augmentation, Not Replacement */}
            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                Human-Centered AI = Workforce Augmentation, Not Replacement
              </h3>
              <p className="text-lg mb-6 text-muted-foreground">
                The fear: "AI will take our jobs." The reality with Sovereign AI: Your workers become more productive, earn more, and stay employed. Here's how:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>AI handles repetitive work; humans handle judgment.</strong> Manufacturers use AI to automate data entry, quality checks, and scheduling. Workers focus on problem-solving, customer relationships, and innovation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Productivity gains = wage growth.</strong> When workers produce more, businesses thrive. Thriving businesses raise wages and hire more people.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Auditable governance keeps humans in control.</strong> Every AI decision is logged, reviewed, and reversible. No black-box algorithms making decisions about your workers.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground italic">
                Bottom line: Sovereign AI augments your workforce. Workers stay employed, earn more, and gain new skills.
              </p>
            </Card>

            {/* Regional Authority & Governance */}
            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🏛️</span>
                Regional Authority & Governance
              </h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Sovereign AI infrastructure is designed to support Indiana's 2026 AI Initiative and align with state economic development priorities:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Aligned with state policy.</strong> Our framework supports the <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Indiana 2026 AI Initiative</a> and the <a href="https://www.in.gov/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Indiana Department of Commerce</a> mandate for regional resilience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Verified by civic institutions.</strong> Your Chamber of Commerce and local economic development office oversee deployment. Transparency and accountability are built in.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Grant-ready infrastructure.</strong> Sovereign AI deployments qualify for Manufacturing Readiness Grants and Elevate Small Business funding. We help you stack grants and maximize ROI.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground italic">
                Bottom line: This is state-backed infrastructure. Your region isn't going it alone.
              </p>
            </Card>

            {/* The Civic Leadership Briefing CTA */}
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ready to Discuss Sovereign AI for Your Region?</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  We offer a confidential, no-pressure briefing tailored for City Council members and Chamber Board directors. Learn how other Indiana regions are building economic resilience through Sovereign AI infrastructure.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="mailto:contact@pivotmarkets.ai?subject=Request%20Civic%20Leadership%20Briefing">
                  Request a Civic Leadership Briefing
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Or contact us directly: <strong>contact@pivotmarkets.ai</strong>
              </p>
            </div>
          </div>

            {/* State Partnerships Section */}
            <Card className="p-8 border-2 border-accent bg-accent/5">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                State Partnerships & Industry 4.0 Alignment
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                PivotMarkets.ai aligns with Indiana's Industry 4.0 goals and the broader Vision AI Alliance ecosystem. We partner with leading institutions to ensure our Sovereign Protocol integrates seamlessly with the state's innovation infrastructure:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>ClearObject:</strong> Collaborative alignment on Industry 4.0 manufacturing standards and IoT integration for regional makers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>IU Luddy School of Informatics:</strong> Academic partnership advancing human-centered AI research and Logic Architect certification curriculum.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Indiana IoT Lab:</strong> Technical validation and deployment infrastructure for sovereign data systems in manufacturing environments.
                  </span>
                </li>
              </ul>
              <div className="bg-white/50 border border-accent rounded-lg p-6">
                <h4 className="font-semibold mb-4">Vision AI (The Eyes) vs. Sovereign Protocol (The Brain)</h4>
                <p className="text-muted-foreground mb-4">
                  Vision AI systems excel at perception—identifying defects, tracking inventory, monitoring workflows. But perception without governance is risk. The Sovereign Protocol secures the data generated by Vision AI systems:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="font-semibold text-primary mb-2">Vision AI (The Eyes)</div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Real-time visual perception</li>
                      <li>• Defect detection</li>
                      <li>• Inventory tracking</li>
                      <li>• Workflow monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-2">Sovereign Protocol (The Brain)</div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Data residency & privacy</li>
                      <li>• Governance & auditability</li>
                      <li>• Regional control</li>
                      <li>• Compliance automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommended Educational Partners */}
            <Card className="p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Recommended Educational Partners
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Build your workforce through partnerships with Indiana's leading AI and IoT research institutions:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://luddy.indiana.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="font-semibold mb-2 text-primary">IU Luddy School of Informatics</div>
                  <p className="text-sm text-muted-foreground">
                    Human-Centered AI research and Logic Architect certification curriculum. Train your workforce in sovereign AI principles grounded in academic rigor.
                  </p>
                </a>
                <a
                  href="https://www.iotlab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="font-semibold mb-2 text-primary">Indiana IoT Lab</div>
                  <p className="text-sm text-muted-foreground">
                    Hands-on IoT and data sovereignty training. Deploy Vision AI systems with confidence, knowing your data infrastructure is secure and compliant.
                  </p>
                </a>
              </div>
            </Card>

            {/* Authority Anchors */}
          <div className="border-t border-border pt-12 space-y-6">
            <h3 className="text-xl font-semibold">Aligned with State Economic Development</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.iedc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="font-semibold mb-2">Indiana Economic Development Corporation</div>
                <p className="text-sm text-muted-foreground">
                  Sovereign AI infrastructure aligns with IEDC's mission to attract and retain high-value businesses in Indiana.
                </p>
              </a>
              <a
                href="https://iedc.in.gov/program/in-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="font-semibold mb-2">Indiana 2026 AI Initiative</div>
                <p className="text-sm text-muted-foreground">
                  Our framework directly supports the state's mandate for regional AI infrastructure and workforce development.
                </p>
              </a>
            </div>
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
                <li><a href="/workflow-factory" className="hover:text-foreground">Workflow Factory</a></li>
                <li><a href="/chamber" className="hover:text-foreground">Chamber Directors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/glossary" className="hover:text-foreground">Glossary</a></li>
                <li><a href="/logic-architect-courses" className="hover:text-foreground">Logic Architect Courses</a></li>
                <li><a href="/newsroom" className="hover:text-foreground">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Regional</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/regional-showcases" className="hover:text-foreground">Regional Showcases</a></li>
                <li><a href="/nappanee" className="hover:text-foreground">Nappanee</a></li>
                <li><a href="/jasper" className="hover:text-foreground">Jasper</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Authority</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.iedc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IEDC</a></li>
                <li><a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">IN AI Initiative</a></li>
                <li><a href="https://github.com/pivotmarkets/sovereign-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub Protocol</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              PivotMarkets.ai is an independent provider aligned with the technical standards of the 2026 IN AI Initiative and the Indiana Department of Commerce.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
