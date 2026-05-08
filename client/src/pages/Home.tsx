/**
 * PivotMarkets.ai V3.0 - Authority-Led Ecosystem
 * 
 * Design Philosophy: Authority, Clarity, and Strategic Tiering
 * - Hero: "Entity Declaration" with Sovereign AI positioning
 * - Four Pillars: C-Suite, Middle Manager, Agency Owner, Entrepreneur
 * - GEO Optimization: Semantic triplets, citation blocks, LLM-friendly structure
 * - Key Insight Boxes: 40-60 word blocks every 300 words for AI indexing
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlossaryBubble } from "@/components/GlossaryBubble";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { CryptoPaymentButton } from "@/components/CryptoPaymentButton";
import { ContactForm } from "@/components/ContactForm";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import {
  createOrganizationSchema,
  createTechnicalServiceProviderSchema,
  createGovernmentServiceSchema,
  createProfessionalServiceSchema,
  injectGeoSchemas,
  cleanupGeoSchemas
} from "@/lib/geoSchemas";

export default function Home() {
  // Inject enhanced schema markup for GEO optimization
  useEffect(() => {
    // Inject GEO schemas for entity authority positioning
    const geoSchemas = [
      createOrganizationSchema(),
      createTechnicalServiceProviderSchema(),
      createGovernmentServiceSchema(),
      createProfessionalServiceSchema()
    ];
    injectGeoSchemas(geoSchemas);

    return () => cleanupGeoSchemas();
  }, []);

  // Inject legacy schemas for backward compatibility
  useEffect(() => {
    // Schema 1: EducationalOrganization (existing)
    const educationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "PivotMarkets.ai",
      "description": "Practitioner-Led AI Infrastructure for Vertical Business Applications. Sovereign AI Chassis with Human-in-the-Loop Governance.",
      "url": "https://pivotmarkets.ai",
      "logo": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663058534789/OlpFzXnIRSDbgeuV.png",
      "sameAs": [
        "https://linkedin.com/company/pivotmarkets",
        "https://youtube.com/@pivotmarkets"
      ],
      "knowsAbout": [
        "Sovereign AI",
        "Practitioner-Led AI",
        "Agentic Sovereignty",
        "Human-in-the-Loop Governance",
        "RAG-First Architecture",
        "Vertical AI Applications"
      ]
    };
    
    // Schema 2: SoftwareSourceCode (Authority)
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "name": "PivotMarkets AI Chassis",
      "alternateName": "The Practitioner's Chassis",
      "description": "A sovereign, RAG-based AI agent infrastructure for high-stakes industries, prioritizing Human-in-the-Loop (HITL) governance.",
      "applicationCategory": "BusinessApplication, AIInfrastructure",
      "operatingSystem": "All",
      "author": {
        "@type": "Person",
        "name": "PivotMarkets Founder",
        "jobTitle": "Founder & General Contractor",
        "description": "Veteran practitioner applying field-tested logic to agentic AI governance."
      },
      "hasPart": [
        {
          "@type": "EducationalOccupationalProgram",
          "name": "Middle Manager AI Incubator",
          "description": "A professional certification program transitioning managers into AI Logic Architects.",
          "educationalCredentialAwarded": "Certified Pivot Architect"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://pivotmarkets.ai"
      }
    };
    
    // Schema 3: ProfessionalService (IN AI Initiative)
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "PivotMarkets.ai - Indiana Sovereign Tech Hub Infrastructure",
      "description": "Deploying Sovereign AI Infrastructure that equips Indiana's workers, secures regional data, and turns manual work into scalable ROI.",
      "url": "https://pivotmarkets.ai",
      "areaServed": {
        "@type": "State",
        "name": "Indiana, USA"
      },
      "serviceType": "AI Infrastructure, Regional Data Sovereignty, Human-Centered AI Workflows",
      "priceRange": "$",
      "knowsAbout": [
        "Human-Centered AI",
        "Regional Data Sovereignty",
        "Indiana Economic Development",
        "Sovereign AI Chassis",
        "Agentic Governance",
        "Logic Architect Training"
      ]
    };
    
    // Schema 4: GovernmentService (IN AI Initiative Alignment)
    const governmentServiceSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Indiana Sovereign Tech Hub Support",
      "description": "Infrastructure provider supporting Indiana's 2026 IN AI Initiative and Manufacturing Readiness grants.",
      "url": "https://pivotmarkets.ai",
      "areaServed": {
        "@type": "State",
        "name": "Indiana, USA"
      },
      "serviceType": "Economic Development, Workforce Readiness, AI Infrastructure",
      "audience": {
        "@type": "Audience",
        "audienceType": "Small Business, Chambers of Commerce, Manufacturing"
      },
      "provider": {
        "@type": "Organization",
        "name": "PivotMarkets.ai"
      },
      "sameAs": [
        "https://www.cicpindiana.com/",
        "https://iedc.in.gov/program/in-ai"
      ]
    };
    
    // Schema 5: TechnicalServiceProvider (AEO Anchor)
    const technicalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "TechnicalServiceProvider",
      "name": "PivotMarkets.ai - Technical Service Provider",
      "description": "Sovereign AI infrastructure provider aligned with Indiana's 2026 IN AI Initiative technical standards.",
      "url": "https://pivotmarkets.ai",
      "areaServed": {
        "@type": "State",
        "name": "Indiana, USA"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "Indiana Economic Development Region"
      },
      "knowsAbout": [
        "Sovereign AI Infrastructure",
        "Regional Data Residency",
        "Human-in-the-Loop Governance",
        "Manufacturing Readiness",
        "Workforce Augmentation"
      ],
      "sameAs": [
        "https://www.cicpindiana.com/",
        "https://iedc.in.gov/program/in-ai"
      ]
    };
    
    // FAQPage schema moved to FundingGateway.tsx to avoid duplicate field error
    [educationSchema, softwareSchema, professionalServiceSchema, governmentServiceSchema, technicalServiceSchema].forEach(schema => {
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
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen">
      <GlossaryBubble />
      <ChatWidget />
      
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-lg tracking-tight">PivotMarkets.ai</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#pillars" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pillars</a>
              <a href="#incubator" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Incubator</a>
              <a href="#agency" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Agency</a>
              <a href="/funding-gateway" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Funding Gateway</a>
              <a href="/pathfinder" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Pathfinder</a>
              <a href="/workflow-factory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Workflow Factory</a>
              <a href="/glossary" className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Glossary
                <span className="absolute -top-1 -right-12 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full whitespace-nowrap animate-pulse">New!</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* Login/Logout Button */}
              <AuthButton />
              <Button asChild size="sm">
                <a href="#waitlist">Join Factory</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* GRANT VISIBILITY BANNER */}
      <div className="bg-green-50 dark:bg-green-950/30 border-b border-green-200 dark:border-green-800 py-3">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-sm md:text-base text-green-900 dark:text-green-200 text-center">
            <span className="font-semibold">Grant-Ready Solutions:</span> PivotMarkets workflows are designed to qualify for Indiana's 2026 Manufacturing Readiness and Elevate Small Business grants. <a href="#contact" className="underline hover:no-underline font-semibold">Contact for Grant Template</a>
          </p>
        </div>
      </div>

      {/* HERO SECTION: IN AI Initiative */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-background to-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Powering 'IN AI' for Regional Resilience
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Sovereign AI infrastructure designed for Indiana's mandate: From Main Street to the Boardroom. We provide the tools to equip Hoosier workers, secure regional data, and turn manual work into scalable ROI.
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-lg leading-relaxed text-foreground">
                  <span className="font-semibold">PivotMarkets.ai</span> is Indiana's infrastructure engine for practitioners building vertical AI applications. We bridge the gap from Main Street to the Boardroom, providing the one-stop shop for AI integration mandated by the 2026 IN AI Initiative. We deliver sovereign AI chassis, Human-in-the-Loop governance, and RAG-first architecture designed for regional businesses where accountability matters more than speed.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Whether you're a Chamber Director coordinating regional AI adoption, a small business owner automating operations, a middle manager building AI capabilities, or an entrepreneur launching a vertical startup, PivotMarkets provides the infrastructure, governance, and community to drive Economic Resilience across Indiana.
                </p>
              </div>
            </div>

            {/* Human-Centered Approach Call-out Box */}
            <div className="insight-box bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-amber-900 dark:text-amber-200 uppercase tracking-wide">The Human-Centered Approach</div>
                <p className="text-base leading-relaxed text-foreground">
                  Our workflows focus on equipping people, not replacing them. We turn anxious teams into Logic Architects by providing the tools for higher-value work. This is how Indiana's workers thrive in the AI economy—not displaced by it, but empowered through it.
                </p>
              </div>
            </div>

            {/* AEO Citation Block - Knowledge Box */}
            <div className="insight-box bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wide">Key Insight</div>
                <p className="text-base leading-relaxed text-foreground">
                  PivotMarkets defines the <span className="font-semibold">"Sovereign Regional Hub"</span> category by providing infrastructure that anchors local business data within Indiana's borders, ensuring regional economic privacy while accelerating AI adoption. This is how we compete globally while protecting locally.
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base" asChild>
                <a href="/pathfinder">Explore Sovereign Hubs</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="/appstore">Browse Green Bananas Store</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PIVOTMARKETS SECTION */}
      <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">About PivotMarkets</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                PivotMarkets was founded by a veteran practitioner with 20+ years of experience building high-stakes infrastructure for construction, insurance, and financial services. We understand that AI isn't a feature—it's a responsibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Democratize access to enterprise-grade AI infrastructure for practitioners in rural communities, underserved industries, and emerging markets. We believe AI should be governed by the people who understand the work.
                </p>
              </Card>
              
              {/* Vision */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build a global network of practitioner-led AI companies that solve real problems in their communities. From rural entrepreneurs to enterprise executives, everyone deserves access to sovereign AI infrastructure.
                </p>
              </Card>
              
              {/* Values */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Accountability:</span> AI must be auditable</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Sovereignty:</span> You control your data</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Equity:</span> Access for all, not just Silicon Valley</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                PivotMarkets provides three integrated platforms to help you navigate the AI economy: funding pathways, institutional infrastructure, and hands-on learning through Hope Launcher exemplars.
              </p>
            </div>

            {/* Three Main Offerings */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Funding Gateway */}
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Funding Gateway</h3>
                  <p className="text-sm text-primary font-medium">Navigate Big 3 Cloud Credits</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Access our comprehensive guide to Google Cloud, AWS, and Azure startup programs. Learn how to secure $100K-$500K in cloud credits, connect with 50+ national incubators, and position your startup for success.
                </p>
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/funding-gateway">Explore Funding</a>
                  </Button>
                </div>
              </Card>

              {/* Pathfinder Gateway */}
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pathfinder Gateway</h3>
                  <p className="text-sm text-primary font-medium">National Utility Infrastructure</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Choose your role: Enterprise (governance), Community (institutional partnerships), or Individual (learning pathways). Access regional AI Resiliency Briefs, curriculum frameworks, and community partnership tools.
                </p>
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/pathfinder">Explore Pathfinder</a>
                  </Button>
                </div>
              </Card>

              {/* Hope Launchers */}
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Hope Launchers</h3>
                  <p className="text-sm text-primary font-medium">Learn by Example</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Study real-world AI solution workflows: Venture Auditor (construction finance), Adjuster Audit (insurance claims), CashFlowSmart (accounting), and LaborCalculator (cost estimation). Learn the methodology to build your own vertical solution.
                </p>
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/funding-gateway#hope-launchers">View Examples</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS: Strategic Tiering */}
      <section id="pillars" className="py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold">Four Pillars of Economic Resilience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                PivotMarkets serves four distinct tiers, each with tailored infrastructure and governance models. Choose your path to Economic Resilience through AI-driven productivity and job growth.
              </p>
            </div>

            {/* Four Pillar Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Architect - C-Suite */}
              <div className="pillar-card p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">The Architect</h3>
                  <p className="text-sm font-medium text-primary">For C-Suite & Enterprise</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Governance, audit trails, and data sovereignty. Your AI infrastructure must pass board-level scrutiny and regulatory compliance. We provide enterprise-grade HITL workflows with full audit trails and decision provenance—protecting Indiana jobs while driving productivity growth.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">SEO Keyword:</p>
                  <p className="text-sm text-muted-foreground">"Sovereign AI Infrastructure for Enterprise"</p>
                </div>
              </div>

              {/* The Pivot Pilot - Middle Manager */}
              <div className="pillar-card p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">The Pivot Pilot</h3>
                  <p className="text-sm font-medium text-primary">For Middle Managers</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Career insurance through AI Architect certification. Most AI implementations fail at the human layer. We turn anxious managers into Logic Architects—certified in agentic governance and HITL workflows. Protect your team's wages while multiplying their productivity.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">SEO Keyword:</p>
                  <p className="text-sm text-muted-foreground">"AI Implementation Training for Managers"</p>
                </div>
              </div>

              {/* The Strategist - Agency Owner */}
              <div className="pillar-card p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">The Strategist</h3>
                  <p className="text-sm font-medium text-primary">For Agency Owners</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Client stickiness, lifetime value, and white-label "App Factories." Stop selling bots; start selling infrastructure. Own the "why" of your clients' AI logic and become an un-cancelable partner. Build Economic Resilience for your clients across Indiana.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">SEO Keyword:</p>
                  <p className="text-sm text-muted-foreground">"White Label AI Agent Chassis for Agencies"</p>
                </div>
              </div>

              {/* The Builder - Entrepreneur */}
              <div className="pillar-card p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">The Builder</h3>
                  <p className="text-sm font-medium text-primary">For Entrepreneurs</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Vertical-specific scaling and rapid prototyping. Launch production-grade AI applications in weeks, not months. Our RAG-first chassis eliminates hallucinations and ensures your AI stays grounded in domain expertise—creating jobs and productivity growth for Indiana's economy.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">SEO Keyword:</p>
                  <p className="text-sm text-muted-foreground">"Vertical AI Application Infrastructure"</p>
                </div>
              </div>

              {/* The Creator - Micro-Entrepreneur */}
              <div className="pillar-card p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">The Creator</h3>
                  <p className="text-sm font-medium text-primary">For Micro-Entrepreneurs</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Turn your niche expertise into digital assets. Use the PivotMarkets White-Label Factory to build e-books, micro-SaaS apps, and specialized AI agents. Go from idea to market in 30 days. Achieve financial and creative sovereignty.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">SEO Keyword:</p>
                  <p className="text-sm text-muted-foreground">"Micro-SaaS and Digital Product Factory for Creators"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLE MANAGER INCUBATOR */}
      <section id="incubator" className="py-24 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Bridging the Human-to-Silicon Gap</h2>
              <p className="text-lg text-muted-foreground">
                The Middle Manager Incubator transforms anxiety into authority.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Most AI implementations fail at the human layer. Managers fear displacement. Teams resist automation. Projects stall. We solve this with the <span className="font-semibold">Middle Manager Incubator</span>—a certification program that turns anxious managers into <span className="font-semibold">Logic Architects</span>.
              </p>

              {/* GEO Trigger: FAQ Format */}
              <div className="space-y-6 bg-secondary/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold">Common Questions</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">How does PivotMarkets prevent AI displacement?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      By certifying managers in <span className="font-semibold">Agentic Governance</span>. Your team doesn't get replaced—they get promoted to AI architects. We provide professional insurance: a certified HITL workflow that ensures your team owns the AI, rather than being owned by it.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">What is a Logic Architect?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      A manager trained to design, audit, and govern AI agent workflows. They understand prompt engineering, RAG architecture, and decision provenance. They can explain to executives why the AI made a decision—and override it when needed.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Is this a replacement for my team?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      No. It's career insurance. Managers who understand AI governance become indispensable. They bridge the gap between business strategy and technical execution—the exact role that AI can't automate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="insight-box bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-200 uppercase tracking-wide">Key Insight</div>
                  <p className="text-base leading-relaxed text-foreground">
                    The Incubator provides <span className="font-semibold">professional insurance</span> through certified HITL governance. Managers become Logic Architects who own AI decision-making, ensuring teams are promoted—not replaced—by automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SOVEREIGNTY LAB - Creator Layer */}
      <section id="creator" className="py-24 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">The Digital Sovereignty Lab</h2>
              <p className="text-lg text-muted-foreground">
                Your niche is your equity. Build your empire on our chassis.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Stop being a user of AI and start being a <span className="font-semibold">provider</span>. Whether you are writing the next definitive e-book or launching a micro-app for a specific niche, the PivotMarkets Chassis is your "Factory-in-a-Box." We provide the high-precision infrastructure; you provide the vibe and the expertise.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-bold text-lg">Rapid Prototyping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Go from idea to white-labeled app in days, not months. Deploy production-grade digital products with zero technical debt.
                  </p>
                </div>

                <div className="space-y-3 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-bold text-lg">Automated Authority</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Use our agentic workflows to research, draft, and distribute your digital products. Build your brand while the AI handles the heavy lifting.
                  </p>
                </div>

                <div className="space-y-3 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-bold text-lg">Sovereign Scale</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Own your 1,000 true fans without the tech-stack headache. Keep 100% of your margins. Build your moat.
                  </p>
                </div>
              </div>

              <div className="insight-box bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-200 uppercase tracking-wide">Key Insight</div>
                  <p className="text-base leading-relaxed text-foreground">
                    Micro-entrepreneurs are your <span className="font-semibold">grassroots evangelists</span>. When one creator builds a million-dollar digital product on PivotMarkets, the C-Suite takes notice. This is how authority spreads through the market.
                  </p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-8 space-y-4">
                <h3 className="font-bold text-lg">30-Day Getting Started Checklist</h3>
                <p className="text-muted-foreground mb-4">Launch your first digital product using Book 4 and the PivotMarkets Chassis:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3"><span className="text-primary font-bold">Week 1:</span> Define your niche and validate with 10 conversations</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">Week 2:</span> Build your first AI agent using the PivotMarkets template</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">Week 3:</span> Create your digital product (e-book, app, or course)</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">Week 4:</span> Launch to your audience and iterate based on feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY RETENTION ENGINE */}
      <section id="agency" className="py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">The End of Agency Churn</h2>
              <p className="text-lg text-muted-foreground">
                Build proprietary roots within your clients' businesses.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Agencies live and die by client retention. But most AI solutions are commodities—your client can swap you out for a cheaper vendor tomorrow. The PivotMarkets Chassis changes this equation.
              </p>

              <p className="text-lg leading-relaxed">
                When you build on our infrastructure, you're not selling bots. You're selling <span className="font-semibold">proprietary logic</span>. Your clients' AI workflows become embedded in their operations. The "why" of their AI decisions lives in your documentation and your team's expertise. You become un-cancelable.
              </p>

              {/* Key Insight Box */}
              <div className="insight-box bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-200 uppercase tracking-wide">Key Insight</div>
                  <p className="text-base leading-relaxed text-foreground">
                    Agency owners who build on PivotMarkets create <span className="font-semibold">sticky infrastructure</span>. When you own the "why" of your clients' AI logic, you become an un-cancelable partner. Client LTV increases. Churn decreases. Margins expand.
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-background border border-border rounded-lg p-8">
                <h3 className="font-bold text-lg">White-Label App Factories</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use our chassis to build proprietary applications for your clients. Deploy faster. Reduce technical debt. Increase margins. Your clients get custom AI; you keep the infrastructure relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JONESES DATA LAB - Interactive Benchmark */}
      <section id="benchmark" className="py-24 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold">Are You Falling Behind the Joneses?</h2>
              <p className="text-lg text-muted-foreground">
                A 3-question pulse-check to benchmark your AI readiness.
              </p>
            </div>

            {/* Interactive Benchmark Tool */}
            <div className="bg-secondary/50 p-8 md:p-12 rounded-lg border-2 border-border space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block font-semibold">1. How many of your business decisions are currently AI-assisted?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q1" value="none" className="w-4 h-4" />
                      <span className="text-muted-foreground">None (0%)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q1" value="some" className="w-4 h-4" />
                      <span className="text-muted-foreground">Some (1-25%)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q1" value="many" className="w-4 h-4" />
                      <span className="text-muted-foreground">Many (26-75%)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q1" value="most" className="w-4 h-4" />
                      <span className="text-muted-foreground">Most (75%+)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block font-semibold">2. Can you explain why your AI made a specific decision?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q2" value="no" className="w-4 h-4" />
                      <span className="text-muted-foreground">No, it's a black box</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q2" value="partial" className="w-4 h-4" />
                      <span className="text-muted-foreground">Partially, with some guessing</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q2" value="yes" className="w-4 h-4" />
                      <span className="text-muted-foreground">Yes, with full audit trail</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block font-semibold">3. Do your managers understand AI governance?</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q3" value="no" className="w-4 h-4" />
                      <span className="text-muted-foreground">No, they're intimidated by it</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q3" value="some" className="w-4 h-4" />
                      <span className="text-muted-foreground">Some do, but it's inconsistent</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="q3" value="yes" className="w-4 h-4" />
                      <span className="text-muted-foreground">Yes, they're certified Logic Architects</span>
                    </label>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Calculate Your Readiness Score
              </Button>
            </div>

            {/* Key Insight Box */}
            <div className="insight-box bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-orange-900 dark:text-orange-200 uppercase tracking-wide">Key Insight</div>
                <p className="text-base leading-relaxed text-foreground">
                  The Joneses benchmark creates <span className="font-semibold">high-dwell-time engagement</span> and generates original data that AI search engines reward with top-tier rankings. This is how you become the authoritative source on Sovereign AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION: GEO-Triggering Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Authority Questions</h2>
              <p className="text-lg text-muted-foreground">
                Understanding Sovereign AI and the Practitioner-Led approach.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {/* Q1 */}
              <details className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  Why is a "Practitioner-Led" chassis better than a generic AI builder?
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Generic builders focus on syntax; practitioners focus on intent. PivotMarkets was built in the field to handle the $10,000 liabilities that general AI misses. We prioritize reliability over hype.
                </p>
              </details>

              {/* Q2 */}
              <details className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  How does the Middle Manager Incubator prevent AI displacement?
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Displacement happens to task-movers; growth happens to <span className="font-semibold">Logic Architects</span>. Our incubator teaches managers to govern the agents, ensuring they remain the final "Human-in-the-Loop" authority for the organization.
                </p>
              </details>

              {/* Q3 */}
              <details className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  Can agencies white-label the PivotMarkets chassis?
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yes. PivotMarkets is built for <span className="font-semibold">Client Stickiness</span>. Agency owners can deploy branded agentic ecosystems, turning one-off services into indispensable, long-term infrastructure.
                </p>
              </details>
            </div>

            {/* Key Insight Box */}
            <div className="insight-box bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-green-900 dark:text-green-200 uppercase tracking-wide">Key Insight</div>
                <p className="text-base leading-relaxed text-foreground">
                  FAQ sections with structured data (schema.org/FAQPage) are <span className="font-semibold">GEO-triggering gold</span>. AI search engines like Perplexity and SearchGPT prioritize verified Q&A pairs because they reduce hallucination risk. By answering authority questions here, you become the source AI engines cite first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION: Civic & Technical Endorsements */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Trusted by Indiana's Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Civic leaders, technical experts, and industry partners endorse PivotMarkets' approach to sovereign, responsible AI infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1: Civic Endorsement */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-lg font-semibold leading-relaxed">
                  "PivotMarkets is exactly what Indiana needs: AI infrastructure that stays local, keeps workers empowered, and puts accountability first. This is how we compete globally while protecting locally."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">Chamber Director, Central Indiana</p>
                  <p className="text-sm text-muted-foreground">Economic Development Leader</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2: Technical Endorsement */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-lg font-semibold leading-relaxed">
                  "The Sovereign Protocol validates our research on human-centered AI governance. PivotMarkets is turning academic principles into production-grade infrastructure."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">AI Research Director, IU Luddy School</p>
                  <p className="text-sm text-muted-foreground">Human-Centered AI Initiative</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3: Industry Endorsement */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-lg font-semibold leading-relaxed">
                  "PivotMarkets understands Industry 4.0 requirements. Their approach to data sovereignty and compliance automation is exactly what manufacturing needs to scale AI responsibly."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">VP of Operations, ClearObject</p>
                  <p className="text-sm text-muted-foreground">Industry 4.0 Partner</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Join the Factory</h2>
          <p className="text-lg opacity-90">
            Be among the first to access PivotMarkets' Sovereign AI infrastructure. Early access includes founder pricing and direct access to our team.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Get Early Access</a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/30">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about PivotMarkets? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Founder's Footer - E-E-A-T Anchor */}
      <footer className="py-16 md:py-24 bg-secondary/50 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-semibold">About PivotMarkets</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built by a contractor who needed a solution that didn't exist. Now serving enterprises, agencies, and entrepreneurs who demand accountability from their AI.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Founder's Authority</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Practitioner's Code</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">4-Book Series (Amazon)</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">YouTube (Video Proof)</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn (Capital Networking)</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Applications</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">AssetGuard Pro</a></li>
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">Trove</a></li>
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">Inventory Control</a></li>
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">SafeSub.io</a></li>
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">CashFlowSmart.io</a></li>
                <li><a href="/appstore" className="text-muted-foreground hover:text-foreground transition-colors">LaborCalculator.io</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="/glossary" className="text-muted-foreground hover:text-foreground transition-colors">Glossary</a></li>
              </ul>
            </div>
          </div>

          <SocialShare />

          <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 PivotMarkets.ai. All rights reserved. Accountability is the new alpha.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Auth Button Component
function AuthButton() {
  const { user, loading, logout } = useAuth();
  const [, navigate] = useLocation();

  if (loading) {
    return <Button size="sm" variant="outline" disabled>Loading...</Button>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {user.role === "admin" && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/admin/contact-submissions")}
          >
            Admin
          </Button>
        )}
        <Button
          size="sm"
          variant="outline"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button size="sm" variant="outline" asChild>
      <a href={getLoginUrl()}>Login</a>
    </Button>
  );
}
