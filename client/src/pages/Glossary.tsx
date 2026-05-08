/**
 * Design Philosophy: Friendly and accessible
 * - Entrepreneur-to-entrepreneur tone
 * - Clear explanations without condescension
 * - Business context for each term
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Glossary() {
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
              <span className="text-muted-foreground">Glossary</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/#infrastructure" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a>
              <a href="/#funding" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Funding</a>
              <a href="/appstore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">App Store</a>
            </div>
            <Button asChild size="sm">
              <a href="/#venture-audit">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "Glossary", href: "/glossary" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            AI Terms, Translated
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're entrepreneurs talking to entrepreneurs—not engineers showing off vocabulary. This glossary explains the technical terms in plain business language so you can make informed decisions about AI infrastructure.
          </p>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto space-y-8">
          
          {/* Indiana Sovereign Tech Hub Terminology */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Indiana Sovereign Tech Hub Terminology</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Sovereign Regional Hub</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Infrastructure that anchors local business data within Indiana's borders, ensuring regional economic privacy while accelerating AI adoption.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Your customer data, financial records, and proprietary workflows stay in Indiana. You're not sending sensitive information to Silicon Valley servers. This protects your competitive advantage, ensures compliance with state economic development initiatives, and builds trust with your customers who care about local data sovereignty.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Agentic Governance</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> The system of Human-in-the-Loop (HITL) oversight that ensures AI outputs remain auditable, reliable, and compliant with Indiana business standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> AI doesn't run unsupervised. Every decision is logged, reviewed, and traceable. If a customer disputes a decision, you can show exactly how the AI arrived at that conclusion. This is critical for industries like insurance, construction, and financial services where accountability is non-negotiable.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Logic Architect</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A professional role focused on designing and governing AI workflows—the evolution of the modern middle manager.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This isn't a job title that replaces your team—it's a new skill set that empowers them. Your middle managers become Logic Architects: they design workflows, set AI decision thresholds, and ensure systems stay aligned with business goals. They're not displaced by AI; they're elevated to higher-value strategic work.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Human-Centered AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> AI systems designed to equip people, not replace them. Workflows that turn anxious teams into Logic Architects by providing tools for higher-value work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This is how Indiana's workers thrive in the AI economy—not displaced by it, but empowered through it. Your team gains time back from routine tasks to focus on strategy, customer relationships, and problem-solving. That's the difference between AI that threatens your workforce and AI that strengthens it.
              </p>
            </Card>
          </div>

          {/* AI & Machine Learning */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">AI & Machine Learning Basics</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">AI (Artificial Intelligence)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Software that can learn patterns from data and make decisions without being explicitly programmed for every scenario.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Instead of hiring someone to manually review every maintenance ticket or appraisal request, AI can handle routine decisions at scale while flagging unusual cases for human review. Think of it as a smart assistant that gets better with experience.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">LLM (Large Language Model)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> The AI engine that understands and generates human language—like ChatGPT, Claude, or Google's Gemini.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This is the "brain" that reads your documents, answers questions, and writes reports. Different LLMs have different strengths (speed, accuracy, cost), which is why our infrastructure is model-agnostic—you're not locked into one vendor.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Model-Agnostic</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Our infrastructure works with any AI provider (OpenAI, Anthropic, Google, open-source models).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> You're not locked into one vendor's pricing or capabilities. If a better, cheaper, or more specialized AI comes along, you can switch without rebuilding your entire system. It's like having a car that can run on gas, electric, or hydrogen—whatever makes sense for your situation.
              </p>
            </Card>
          </div>

          {/* RAG & Knowledge Systems */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Knowledge & Data Systems</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">RAG (Retrieval-Augmented Generation)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Before the AI answers a question, it first searches your company's documents to find relevant facts, then uses those facts to generate an accurate response.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This prevents "hallucinations" (AI making up answers). Instead of the AI guessing, it cites your actual maintenance logs, appraisal data, or inventory records. Every answer is traceable to a source document—critical for compliance and liability.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Knowledge Moat</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Your proprietary database of industry-specific information that competitors can't easily replicate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Generic AI knows general information. A knowledge moat is your competitive advantage—years of maintenance records, appraisal comparables, or supplier pricing that makes your AI smarter than anyone else's in your vertical. We help you build and protect this asset.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Vector Embeddings</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A way to convert text into numbers so the AI can quickly find similar documents or concepts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This is how the AI searches thousands of documents in milliseconds. When someone asks "What's the failure rate for HVAC units in coastal climates?", vector embeddings help the AI instantly find relevant maintenance records—even if they use different wording.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Hallucination</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> When AI confidently makes up false information because it doesn't have access to real data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> This is why we mandate RAG-first architecture. An AI that hallucinates appraisal values or maintenance schedules creates massive liability. Our systems eliminate this by grounding every response in your verified documents.
              </p>
            </Card>
          </div>

          {/* Compliance & Security */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Compliance & Security</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">SOC2 (Service Organization Control 2)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> An independent audit that verifies a company has proper security, availability, and data protection controls.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> If you're handling customer data or financial information, enterprise clients will require SOC2 compliance before signing contracts. Our infrastructure is SOC2 Type II ready, so you inherit that certification without building it yourself.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">HIPAA (Health Insurance Portability and Accountability Act)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Federal regulations for protecting patient health information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> If your AI touches healthcare data (patient records, insurance claims, medical scheduling), HIPAA compliance is mandatory—not optional. Violations carry severe penalties. Our Communication and Operations chassis are HIPAA-ready out of the box.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Audit Trail</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A permanent record of who accessed what data, when, and what actions they took.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> When regulators, auditors, or lawyers ask "How did your AI reach this decision?", you need receipts. Audit trails show the source documents used, the logic applied, and who approved the output. This protects you legally and builds customer trust.
              </p>
            </Card>
          </div>

          {/* Infrastructure & Deployment */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Infrastructure & Deployment</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Chassis</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Pre-built AI infrastructure frameworks for specific business functions (operations, valuation, verification, communication).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Instead of building AI from scratch (12-18 months, $500K-$2M), you start with a proven chassis and customize it for your vertical (3-6 months, fraction of the cost). Think of it like buying a truck chassis and adding your specialized equipment—faster and cheaper than designing a vehicle from the ground up.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">API (Application Programming Interface)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A standardized way for different software systems to communicate with each other.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> APIs let your AI connect to your existing systems (CRM, ERP, accounting software) without custom coding. Our chassis include REST APIs and webhooks, so your AI can automatically pull data from and push results to the tools you already use.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Cloud vs. On-Premises</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Cloud means the software runs on someone else's servers (AWS, Azure, Google). On-premises means it runs on your own servers in your building.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Cloud is faster to deploy and easier to scale, but some industries (defense, finance) require on-premises for data sovereignty. Our chassis support both, plus hybrid deployments (sensitive data on-prem, everything else in cloud).
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">OCR (Optical Character Recognition)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Technology that reads text from images or scanned documents and converts it into editable, searchable data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Instead of manually typing serial numbers, part codes, or invoice data, OCR automatically extracts it from photos or PDFs. Our Verification Chassis uses OCR to eliminate data entry errors—reducing mistakes by 90% in warehouse operations.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Geofencing</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Virtual boundaries around physical locations that trigger actions when someone enters or exits.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Ensures inventory scans happen at the right location (not someone scanning items at home). Prevents fraud, improves accuracy, and provides proof of physical presence for compliance. Our Verification Chassis uses geofencing to validate that parts are actually received at the warehouse.
              </p>
            </Card>
          </div>

          {/* Funding Terms */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Funding & Investment</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">SDIRA (Self-Directed IRA)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A retirement account that lets you invest in alternative assets like private companies, not just stocks and bonds.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Entrepreneurs can use retirement funds to invest in their own AI venture without penalties or taxes. It's a compliant, tax-deferred way to access $50K-$500K in capital you already have. We provide the technical due diligence reports that SDIRA custodians require.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">ROBS (Rollover for Business Startups)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A structure that lets you use retirement funds to capitalize a C-corporation without triggering early withdrawal penalties.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Similar to SDIRA but with more flexibility for active business involvement. You can be an employee of the company and draw a salary. Requires careful IRS compliance—our founder has 20 years of ROBS structuring experience to guide you.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Crowd Funding (Regulation Crowdfunding)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> SEC-regulated method to raise up to $5M annually from non-accredited investors via platforms like Wefunder or StartEngine.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Opens funding to a broader investor base beyond wealthy accredited investors. Requires public disclosure and ongoing reporting, but provides access to capital from customers, community members, and small investors who believe in your vertical AI application.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Venture Audit</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> Technical due diligence that validates your AI architecture, compliance readiness, and funding eligibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Before custodians approve SDIRA/ROBS funding or platforms list your Crowd Funding campaign, they need proof your AI isn't vaporware. Our venture audit provides the documentation they require, plus identifies technical risks before you invest capital.
              </p>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-border pb-3">Performance & Metrics</h2>
            
            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">ROI (Return on Investment)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> The financial return you get compared to what you invested, usually expressed as a percentage or dollar amount.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> AI projects must justify their cost. We provide verified ROI metrics for every application (40% reduction in emergency repairs, $18K annual savings, 4.2 hours saved per employee/week) so you can forecast payback periods and present business cases to stakeholders.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">LCP (Largest Contentful Paint)</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> How long it takes for the main content of a webpage to load and become visible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Slow-loading sites lose customers. Google penalizes slow sites in search rankings. We target LCP under 1.2 seconds because every 100ms delay costs you conversions. Fast sites signal professionalism and technical competence to potential investors.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border-border">
              <h3 className="text-lg font-semibold">Confidence Interval</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>What it means:</strong> A range that shows how certain the AI is about its prediction (e.g., "89% confident this appraisal is accurate").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why it matters for your business:</strong> Not all AI predictions are equally reliable. Confidence intervals help you decide when to trust the AI's recommendation versus when to get human review. High-stakes decisions (expensive repairs, large appraisals) should require high confidence thresholds.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="pt-8">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Still Have Questions?</h3>
                <p className="text-muted-foreground">
                  Our venture audit process includes a plain-language explanation of how each technical component applies to your specific business case.
                </p>
                <Button size="lg" asChild>
                  <a href="/#venture-audit">Request Venture Audit</a>
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">Industrial AI infrastructure for wealth building through vertical applications.</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Infrastructure</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#infrastructure" className="hover:text-foreground transition-colors">Core Chassis</a></li>
                <li><a href="/appstore" className="hover:text-foreground transition-colors">App Store</a></li>
                <li><a href="/#standards" className="hover:text-foreground transition-colors">Technical Standards</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/glossary" className="hover:text-foreground transition-colors">Glossary</a></li>
                <li><a href="/#funding" className="hover:text-foreground transition-colors">Funding Pathways</a></li>
                <li><a href="/#venture-audit" className="hover:text-foreground transition-colors">Venture Audit</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 space-y-4">
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
