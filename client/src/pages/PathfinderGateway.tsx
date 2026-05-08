import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Download, Link2, BookOpen, Zap } from "lucide-react";

type UserSegment = "enterprise" | "community" | "individuals" | null;

export default function PathfinderGateway() {
  const [selectedSegment, setSelectedSegment] = useState<UserSegment>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-semibold text-lg tracking-tight">PivotMarkets.ai</div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild size="sm" variant="outline">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Orchestrating the New AI Economy
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium">
              A National Utility for Enterprise, Community, and Individual Opportunity
            </p>

            {/* Key Insight Block */}
            <div className="bg-blue-900/40 border border-blue-400/30 rounded-lg p-6 my-8">
              <div className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-3">Strategic Insight</div>
              <p className="text-base leading-relaxed text-blue-50">
                PivotMarkets.ai is not a product—it's <span className="font-semibold">infrastructure for the new economy</span>. Whether you're an enterprise protecting AI ROI, a community building workforce resilience, or an individual seeking opportunity, you access the same sovereign AI chassis through your own strategic lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trinity Toggle Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Path</h2>
            <p className="text-lg text-slate-600">Select your role to see the infrastructure designed for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                id: "enterprise" as const,
                title: "For Enterprise",
                subtitle: "Execs / Managers / Agencies",
                description: "Protect AI ROI. Govern autonomous systems. Scale with sovereignty.",
                icon: "🏢",
                color: "from-blue-50 to-blue-100 border-blue-300"
              },
              {
                id: "community" as const,
                title: "For Community",
                subtitle: "Chambers / Schools / Non-profits",
                description: "Build workforce resilience. Connect institutions. Serve your district.",
                icon: "🏛️",
                color: "from-green-50 to-green-100 border-green-300"
              },
              {
                id: "individuals" as const,
                title: "For Individuals",
                subtitle: "Hope Launchers / Students",
                description: "Learn AI workflows. Build solutions. Create opportunity.",
                icon: "🚀",
                color: "from-purple-50 to-purple-100 border-purple-300"
              }
            ].map((segment) => (
              <button
                key={segment.id}
                onClick={() => setSelectedSegment(selectedSegment === segment.id ? null : segment.id)}
                className={`p-8 rounded-lg border-2 transition-all transform hover:scale-105 ${
                  selectedSegment === segment.id
                    ? `bg-gradient-to-br ${segment.color} ring-2 ring-offset-2`
                    : `bg-white border-slate-200 hover:border-slate-300`
                }`}
              >
                <div className="text-4xl mb-4">{segment.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{segment.title}</h3>
                <p className="text-sm font-medium text-slate-600 mb-4">{segment.subtitle}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{segment.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Content - Enterprise */}
      {selectedSegment === "enterprise" && (
        <section className="py-20 bg-slate-50">
          <div className="container max-w-6xl mx-auto px-4 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise Infrastructure</h2>
              <p className="text-lg text-slate-700 mb-8">
                Protect your AI investments with sovereign governance, auditability, and Human-in-the-Loop control.
              </p>

              {/* Enterprise Content */}
              <div className="space-y-8">
                <Card className="p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">The Architect: C-Suite Governance</h3>
                  <p className="text-slate-700 mb-6">
                    PivotMarkets.ai provides the governance framework that transforms autonomous AI from a liability into a strategic asset. Our "Sovereign AI" methodology ensures every AI agent remains accountable, auditable, and aligned with business outcomes.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Risk Mitigation:</strong> HITL governance prevents autonomous drift</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Audit Trail:</strong> Complete visibility into AI decision-making</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Sovereign ROI:</strong> AI that serves your business, not the other way around</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">White-Label Infrastructure</h3>
                  <p className="text-slate-700 mb-6">
                    Agencies: Deploy our sovereign AI chassis under your brand. Increase client stickiness. Build un-cancelable partnerships.
                  </p>
                  <Button className="bg-blue-900 text-white hover:bg-blue-800">
                    Explore White-Label Options <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filtered Content - Community */}
      {selectedSegment === "community" && (
        <section className="py-20 bg-green-50">
          <div className="container max-w-6xl mx-auto px-4 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Community & Education Infrastructure</h2>
              <p className="text-lg text-slate-700 mb-8">
                Build workforce resilience. Connect institutions. Create a pathway from high school to opportunity.
              </p>

              {/* Broker Tool */}
              <div className="space-y-8">
                <Card className="p-8 border-2 border-green-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">The Broker Tool</h3>
                      <p className="text-slate-600">Regional AI Resiliency Brief for Chamber Directors</p>
                    </div>
                    <Download className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-slate-700 mb-6">
                    A downloadable brief that explains how PivotMarkets bridges the gap between your local high schools, community colleges, and workforce. Position your district as an AI-ready region.
                  </p>
                  <Button className="bg-green-900 text-white hover:bg-green-800">
                    Download Regional Brief <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Card>

                {/* Link Exchange */}
                <Card className="p-8 border-2 border-green-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Link Exchange Portal</h3>
                      <p className="text-slate-600">Institutional Partnership Program</p>
                    </div>
                    <Link2 className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-slate-700 mb-6">
                    <strong>The Offer:</strong> If your institution (Chamber/School/City) links to our Hope Launcher Resource Page, we auto-allocate a "Community Credit Pool" for your residents to access the Manus platform.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
                    <p className="text-sm text-slate-700">
                      <strong>How it works:</strong> Your link → Our platform recognizes your domain → Your residents get subsidized access to Hope Launcher templates and mentorship.
                    </p>
                  </div>
                  <Button className="bg-green-900 text-white hover:bg-green-800">
                    Join Link Exchange <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>

                {/* Curriculum Bridge */}
                <Card className="p-8 border-2 border-green-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Curriculum Bridge</h3>
                      <p className="text-slate-600">12+8 Week Workforce Development Syllabus</p>
                    </div>
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-slate-700 mb-6">
                    A high-level visualization of how PivotMarkets fits into your district's workforce infrastructure. Frame this as "Workforce Infrastructure," not a "course for sale."
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-200 text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-slate-700"><strong>Weeks 1-4:</strong> AI Fundamentals & Sovereign Governance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-200 text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-slate-700"><strong>Weeks 5-8:</strong> Vertical Workflow Design & RAG Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-200 text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-slate-700"><strong>Weeks 9-12:</strong> MVP Launch & Market Validation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-200 text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-slate-700"><strong>Weeks 13-20:</strong> Scaling & White-Label Partnerships</span>
                    </div>
                  </div>
                  <Button className="bg-green-900 text-white hover:bg-green-800">
                    View Full Curriculum <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>

                {/* AEO/GEO Spotlight */}
                <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Impact Story Generator</h3>
                  <p className="text-slate-700 mb-6">
                    Generate GEO-optimized news releases for your newsletter. Fill out a simple form, and we auto-format it with semantic markers for AI Answer Engines.
                  </p>
                  <Button className="bg-green-900 text-white hover:bg-green-800">
                    Create Impact Story <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filtered Content - Individuals */}
      {selectedSegment === "individuals" && (
        <section className="py-20 bg-purple-50">
          <div className="container max-w-6xl mx-auto px-4 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Individual Opportunity Pathways</h2>
              <p className="text-lg text-slate-700 mb-8">
                Learn AI workflows. Build solutions. Create economic opportunity in your community.
              </p>

              {/* Hope Launcher Learning Path */}
              <div className="space-y-8">
                <Card className="p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Hope Launcher Workflow Exemplars</h3>
                  <p className="text-slate-700 mb-6">
                    Real-world examples showing how to architect sovereign AI solutions for your vertical. Study the pattern. Build your own.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { name: "Venture Auditor", desc: "Financial visibility for construction" },
                      { name: "Adjuster Audit", desc: "Insurance claim verification" },
                      { name: "CashFlowSmart", desc: "Real-time cash flow analysis" },
                      { name: "LaborCalculator", desc: "Labor cost estimation" }
                    ].map((template, idx) => (
                      <div key={idx} className="p-4 bg-purple-50 rounded border border-purple-200">
                        <h4 className="font-semibold text-slate-900 mb-1">{template.name}</h4>
                        <p className="text-sm text-slate-600">{template.desc}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-purple-900 text-white hover:bg-purple-800">
                    Explore Exemplars <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>

                {/* Mentorship & Support */}
                <Card className="p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mentorship & Support</h3>
                  <p className="text-slate-700 mb-6">
                    Access guidance from PivotMarkets architects. Learn how to build AI workflows for your specific vertical.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Weekly Office Hours:</strong> Ask questions, get feedback</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Dev Pod Cohorts:</strong> Build alongside other founders</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Funding Pathways:</strong> Cloud grants, angel investors, partnerships</span>
                    </div>
                  </div>
                  <Button className="bg-purple-900 text-white hover:bg-purple-800">
                    Join a Cohort <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>

                {/* Single Mom Bootstrap */}
                <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Single Mom Bootstrap Ventures</h3>
                  <p className="text-sm text-slate-600 mb-4">Coming Soon</p>
                  <p className="text-slate-700 mb-6">
                    Dedicated mentorship, funding guidance, and community support for single mothers building AI-powered businesses.
                  </p>
                  <Button variant="outline" className="border-purple-300 text-purple-900 hover:bg-purple-100">
                    Join Waitlist <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      {!selectedSegment && (
        <section className="py-20 bg-slate-900 text-white">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the New AI Economy?</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Select your path above to explore the infrastructure designed for your role.
            </p>
            <p className="text-slate-400">
              Whether you're protecting enterprise ROI, building community resilience, or seeking individual opportunity—PivotMarkets.ai is your strategic partner.
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/" className="hover:text-slate-900">Home</a></li>
                <li><a href="/funding-gateway" className="hover:text-slate-900">Funding Gateway</a></li>
                <li><a href="/glossary" className="hover:text-slate-900">Glossary</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Documentation</a></li>
                <li><a href="#" className="hover:text-slate-900">Tutorials</a></li>
                <li><a href="#" className="hover:text-slate-900">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-900">Terms</a></li>
                <li><a href="#" className="hover:text-slate-900">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2026 PivotMarkets.ai. Orchestrating the New AI Economy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
