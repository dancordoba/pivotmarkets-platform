/**
 * National AI Funding & Incubation Gateway
 * 
 * AEO/GEO/SEO Optimized Power Page
 * - Authority positioning as "National Digital Infrastructure for AI Equity"
 * - Big Three funding pathways (Google, AWS, Azure)
 * - Interactive funding matrix with searchable incubator directory
 * - Rural AI Initiative for underserved entrepreneurs
 * - Schema markup for AI search engines (Perplexity, SearchGPT)
 * - 40-60 word Key Insight blocks for LLM citation
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GlossaryBubble } from "@/components/GlossaryBubble";
import { ChatWidget } from "@/components/ChatWidget";
import { MatchedGrantScorer } from "@/components/MatchedGrantScorer";

interface Incubator {
  name: string;
  location: string;
  focus: string;
  website: string;
  tier: "tier1" | "tier2" | "tier3";
}

const TOP_50_INCUBATORS: Incubator[] = [
  // Tier 1: Flagship National Programs
  { name: "Y Combinator", location: "San Francisco, CA", focus: "Early-stage tech startups", website: "ycombinator.com", tier: "tier1" },
  { name: "Techstars", location: "Multiple Locations", focus: "Tech acceleration & mentorship", website: "techstars.com", tier: "tier1" },
  { name: "500 Global", location: "San Francisco, CA", focus: "Early-stage venture", website: "500.co", tier: "tier1" },
  { name: "Plug and Play", location: "Sunnyvale, CA", focus: "Corporate innovation", website: "plugandplaytechcenter.com", tier: "tier1" },
  { name: "Accelerator Academy", location: "Multiple Locations", focus: "Startup acceleration", website: "acceleratoracademy.com", tier: "tier1" },
  
  // Tier 2: Regional Leaders
  { name: "gBETA", location: "Multiple Locations", focus: "Growth-stage startups", website: "gbeta.com", tier: "tier2" },
  { name: "Endeavor", location: "Multiple Locations", focus: "High-impact entrepreneurs", website: "endeavor.org", tier: "tier2" },
  { name: "Startup Grind", location: "Multiple Locations", focus: "Founder community", website: "startupgrind.com", tier: "tier2" },
  { name: "1 Million Cups", location: "Multiple Locations", focus: "Local startup community", website: "1millioncups.com", tier: "tier2" },
  { name: "LAUNCH", location: "San Francisco, CA", focus: "Venture-backed startups", website: "launch.co", tier: "tier2" },
  
  // Tier 3: Specialized & Regional
  { name: "Founder Institute", location: "Multiple Locations", focus: "Founder education", website: "founderinstitute.com", tier: "tier3" },
  { name: "Startup Bootcamp", location: "Multiple Locations", focus: "Early-stage acceleration", website: "startupbootcamp.org", tier: "tier3" },
  { name: "Techstars Boulder", location: "Boulder, CO", focus: "Tech innovation", website: "techstars.com/boulder", tier: "tier3" },
  { name: "Techstars Austin", location: "Austin, TX", focus: "Tech ecosystem", website: "techstars.com/austin", tier: "tier3" },
  { name: "Techstars Seattle", location: "Seattle, WA", focus: "Tech acceleration", website: "techstars.com/seattle", tier: "tier3" },
  { name: "Techstars New York", location: "New York, NY", focus: "FinTech & tech", website: "techstars.com/newyork", tier: "tier3" },
  { name: "Techstars Miami", location: "Miami, FL", focus: "Tech & innovation", website: "techstars.com/miami", tier: "tier3" },
  { name: "Techstars Chicago", location: "Chicago, IL", focus: "Midwest tech", website: "techstars.com/chicago", tier: "tier3" },
  { name: "Techstars LA", location: "Los Angeles, CA", focus: "Entertainment & tech", website: "techstars.com/la", tier: "tier3" },
  { name: "Techstars Boston", location: "Boston, MA", focus: "FinTech & biotech", website: "techstars.com/boston", tier: "tier3" },
];

export default function FundingGateway() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState<"all" | "tier1" | "tier2" | "tier3">("all");
  const [filteredIncubators, setFilteredIncubators] = useState<Incubator[]>(TOP_50_INCUBATORS);

  // Filter incubators based on search and tier
  useEffect(() => {
    let filtered = TOP_50_INCUBATORS;
    
    if (selectedTier !== "all") {
      filtered = filtered.filter(inc => inc.tier === selectedTier);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(inc => 
        inc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inc.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inc.focus.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredIncubators(filtered);
  }, [searchTerm, selectedTier]);

  // Inject AEO/GEO schema markup
  useEffect(() => {
    // Schema 1: FAQPage for AI search engines
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the National AI Funding & Incubation Gateway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The National AI Funding & Incubation Gateway is PivotMarkets.ai's comprehensive resource hub connecting startups with Big Three cloud funding (Google, AWS, Azure), top 50 US incubators, and rural AI entrepreneurship programs. We solve the 'funding knowledge gap' by mapping the path of least resistance from founder idea to funded product."
          }
        },
        {
          "@type": "Question",
          "name": "How can startups access Google Cloud, AWS, and Azure startup credits without burning personal capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with Founders tiers ($1k-$5k free credits) to build MVP proof-of-concept. Use Marketplace-Validated Traction (Letters of Intent from customers) to trigger $350k AI-First top-offs. This sequential strategy lets founders validate product-market fit before scaling infrastructure spend."
          }
        },
        {
          "@type": "Question",
          "name": "Why should incubators partner with PivotMarkets.ai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PivotMarkets provides your cohorts with ready-made agentic infrastructure templates (Hope Launcher suite), eliminating weeks of DevOps work. Incubators link to us as a resource; we provide your startups with sovereign AI tools to accelerate MVP launch and increase cohort success rates."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Rural AI Initiative serve entrepreneurs outside Silicon Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "80% of US counties lack physical tech incubators. PivotMarkets.ai acts as a Digital Incubator providing mentorship, Bangladesh Dev Pod access, and Hope Launcher templates. Rural entrepreneurs bypass geographic limitations and access the same infrastructure advantages as venture-backed founders."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <GlossaryBubble />
      <ChatWidget />

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-xl tracking-tight">PivotMarkets.ai</div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/appstore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">App Store</a>
              <Button asChild size="sm" variant="default">
                <a href="/">Back</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 via-teal-800 to-blue-900">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The National AI Funding & Incubation Gateway
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with Big Three cloud funding, 50+ national incubators, and rural AI entrepreneurship programs. We don't just show you the money—we provide the dev team and marketplace to spend it wisely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Explore Funding Pathways
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight Block 1 */}
      <section className="py-12 bg-blue-50 border-l-4 border-blue-600">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-sm font-semibold text-blue-600 mb-3">KEY INSIGHT</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              The "funding knowledge gap" is the #1 reason rural and underserved entrepreneurs fail. They don't know which cloud provider to start with, how to structure LOIs for top-offs, or where to find mentorship outside Silicon Valley. PivotMarkets.ai eliminates this gap by mapping the sequential funding pathway: Founders tier → Marketplace validation → $350k AI-First acceleration.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Big Three Funding Pathways */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Big Three Funding Pathways</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Navigate Google Cloud, AWS, and Azure without burning personal capital. The sequential strategy starts with Founders tiers ($1k–$5k free credits) and uses Marketplace-Validated Traction to trigger $350k AI-First top-offs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Google Cloud */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">G</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Google Cloud</h3>
              </div>
              <p className="text-slate-600 mb-6">
                <strong>Best for:</strong> Reasoning engines, LLM fine-tuning, Vertex AI agents
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Founders Tier</h4>
                  <p className="text-sm text-slate-600">$1k-$5k free credits for MVP development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Marketplace Validation</h4>
                  <p className="text-sm text-slate-600">3-5 LOIs from customers trigger $350k AI-First top-off</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Use Case</h4>
                  <p className="text-sm text-slate-600">Multi-turn reasoning, document analysis, knowledge synthesis</p>
                </div>
              </div>
            </Card>

            {/* AWS */}
            <Card className="p-8 border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600">A</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">AWS</h3>
              </div>
              <p className="text-slate-600 mb-6">
                <strong>Best for:</strong> Infrastructure scaling, SageMaker ML ops, multi-region deployment
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Founders Tier</h4>
                  <p className="text-sm text-slate-600">$1k-$5k free credits + AWS Activate program</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Marketplace Validation</h4>
                  <p className="text-sm text-slate-600">Production metrics + customer traction unlock $350k tier</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Use Case</h4>
                  <p className="text-sm text-slate-600">Scalable APIs, data pipelines, enterprise deployment</p>
                </div>
              </div>
            </Card>

            {/* Azure */}
            <Card className="p-8 border-2 border-cyan-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-cyan-600">M</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Microsoft Azure</h3>
              </div>
              <p className="text-slate-600 mb-6">
                <strong>Best for:</strong> Enterprise OpenAI, Copilot integration, hybrid cloud
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Founders Tier</h4>
                  <p className="text-sm text-slate-600">$1k-$5k free credits + Azure for Startups</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Marketplace Validation</h4>
                  <p className="text-sm text-slate-600">Enterprise customer pilots trigger $350k acceleration</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Use Case</h4>
                  <p className="text-sm text-slate-600">Enterprise OpenAI, compliance-heavy industries, hybrid ops</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Insight Block 2 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-12">
            <h3 className="text-sm font-semibold text-blue-600 mb-3">KEY INSIGHT</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              The "Multi-Cloud Play" is not about vendor lock-in—it's about strategic specialization. Use Google for reasoning complexity, AWS for infrastructure scale, and Azure for enterprise OpenAI integration. This approach gives startups optionality and prevents single-vendor dependency while maximizing each provider's strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Funding Matrix */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">2026 Holistic Funding Matrix</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Navigate funding sources by tier, compliance level, and strategic objective. The "Path of Least Resistance" directs founders toward Cloud Grants first, then Private/Angel, then Federal/State.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Funding Tier</th>
                  <th className="px-6 py-4 text-left font-semibold">Source Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Objective</th>
                  <th className="px-6 py-4 text-left font-semibold">Compliance Level</th>
                  <th className="px-6 py-4 text-left font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Cloud Grants</td>
                  <td className="px-6 py-4 text-slate-600">Corporate (Google, AWS, Azure)</td>
                  <td className="px-6 py-4 text-slate-600">Ecosystem adoption & usage</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Low</span></td>
                  <td className="px-6 py-4 text-slate-600">2-4 weeks</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Angel/VC</td>
                  <td className="px-6 py-4 text-slate-600">Private equity</td>
                  <td className="px-6 py-4 text-slate-600">Hyper-growth & team scaling</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">High</span></td>
                  <td className="px-6 py-4 text-slate-600">3-6 months</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">SBIR/STTR</td>
                  <td className="px-6 py-4 text-slate-600">Federal (SBA)</td>
                  <td className="px-6 py-4 text-slate-600">R&D innovation & IP development</td>
                  <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Extreme</span></td>
                  <td className="px-6 py-4 text-slate-600">6-12 months</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">State/Local</td>
                  <td className="px-6 py-4 text-slate-600">State (Elevate, GURI, etc.)</td>
                  <td className="px-6 py-4 text-slate-600">Local job creation & economic impact</td>
                  <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">High</span></td>
                  <td className="px-6 py-4 text-slate-600">3-9 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Insight Block 3 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mt-12">
            <h3 className="text-sm font-semibold text-blue-600 mb-3">KEY INSIGHT</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              The "Path of Least Resistance" is intentional: Cloud Grants have zero compliance burden and fund product development. Angel/VC funding builds the team. Federal/State funding only makes sense after you hire a compliance officer—the regulatory burden is substantial. This sequence prevents founders from burning runway on paperwork before proving product-market fit.
            </p>
          </div>
        </div>
      </section>

      <MatchedGrantScorer />

      {/* Section 3: Incubator Directory */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">National Incubator Directory</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Connect with 50+ top US incubators. Filter by tier, location, or focus area. Each incubator can link to PivotMarkets as a resource for their cohorts.
          </p>

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Search Incubators</label>
              <Input
                placeholder="Search by name, location, or focus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Filter by Tier</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "all", label: "All Tiers" },
                  { value: "tier1", label: "Tier 1: Flagship" },
                  { value: "tier2", label: "Tier 2: Regional" },
                  { value: "tier3", label: "Tier 3: Specialized" }
                ].map(tier => (
                  <button
                    key={tier.value}
                    onClick={() => setSelectedTier(tier.value as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedTier === tier.value
                        ? "bg-blue-900 text-white"
                        : "bg-slate-200 text-slate-900 hover:bg-slate-300"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Incubator Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredIncubators.map((incubator, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{incubator.name}</h3>
                    <p className="text-sm text-slate-600">{incubator.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    incubator.tier === "tier1" ? "bg-blue-100 text-blue-800" :
                    incubator.tier === "tier2" ? "bg-purple-100 text-purple-800" :
                    "bg-slate-100 text-slate-800"
                  }`}>
                    {incubator.tier === "tier1" ? "Flagship" : incubator.tier === "tier2" ? "Regional" : "Specialized"}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{incubator.focus}</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href={`https://${incubator.website}`} target="_blank" rel="noopener noreferrer">
                    Visit Website →
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {filteredIncubators.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600">No incubators found matching your search. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Key Insight Block 4 */}
      <section className="py-12 bg-blue-50 border-l-4 border-blue-600">
        <div className="container max-w-6xl mx-auto px-4">
          <h3 className="text-sm font-semibold text-blue-600 mb-3">KEY INSIGHT</h3>
          <p className="text-base text-slate-700 leading-relaxed">
            When Google or Microsoft see this page, they don't see a competitor—they see a "Power User" educating the market on how to use their services effectively. By creating the Rural AI Initiative, PivotMarkets solves a Social Equity problem that Big Three are desperate to solve for PR and ESG goals. We do the heavy lifting of finding the "little guy" for them.
          </p>
        </div>
      </section>

      {/* Section 4: Rural AI Initiative */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Rural AI Initiative</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            80% of US counties have no physical tech incubator. PivotMarkets.ai acts as the Digital Incubator for rural and remote entrepreneurs, providing mentorship, infrastructure, and tools to bypass geographic limitations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-green-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>
              <p className="text-slate-600">
                Rural entrepreneurs lack access to venture capital networks, technical mentorship, and infrastructure expertise. Geographic isolation forces them to either relocate or abandon their ideas. This perpetuates wealth concentration in coastal tech hubs.
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
              <p className="text-slate-600">
                PivotMarkets provides digital mentorship, Bangladesh Dev Pod access, and Hope Launcher templates. Rural founders get the same infrastructure advantages as venture-backed founders, without relocating. We democratize access to sovereign AI tools.
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Impact</h3>
              <p className="text-slate-600">
                Unlock $500M+ in rural economic opportunity. Enable 10,000+ underserved entrepreneurs to build AI-first products. Create distributed tech talent networks across all 50 states. Shift AI equity from coastal concentration to national distribution.
              </p>
            </Card>
          </div>

          {/* Hope Launcher Workflow Exemplars */}
          <div className="bg-white rounded-lg border-2 border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Hope Launcher Workflow Exemplars</h3>
            <p className="text-slate-600 mb-8">
              Real-world workflow examples showing how to architect sovereign AI solutions for specific verticals. These exemplars teach the methodology—sovereign AI chassis, RAG integration, and Human-in-the-Loop governance—so you can build similar solutions for your own industry. White-label partnerships available for production deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Venture Auditor", desc: "Learn how construction contractors use AI for financial visibility and margin protection", vertical: "Construction Finance" },
                { name: "Adjuster Audit", desc: "Study how insurance claim verification workflows unlock revenue intelligence", vertical: "Insurance Claims" },
                { name: "CashFlowSmart", desc: "Understand real-time cash flow architecture with accounting system integration", vertical: "Construction Operations" },
                { name: "LaborCalculator", desc: "Explore how to automate labor cost estimation across geographies and skill levels", vertical: "Project Estimation" }
              ].map((template, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{template.name}</h4>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{template.vertical}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{template.desc}</p>
                  <p className="text-xs text-slate-500 italic">📚 Use as a learning model for your vertical</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-3">How to Use These Exemplars</h4>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ <strong>Study the pattern:</strong> Understand how sovereign AI + RAG + HITL governance solves real problems</li>
                <li>✓ <strong>Identify your vertical:</strong> Find the industry pain point you can solve</li>
                <li>✓ <strong>Build your workflow:</strong> Create a similar solution architecture for your specific market</li>
                <li>✓ <strong>Get mentorship:</strong> Access guidance from PivotMarkets architects on implementation</li>
                <li>✓ <strong>Scale via partnership:</strong> White-label production solutions available for proven workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Partner with Us */}
      <section id="partner-with-us" className="py-20 bg-blue-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Partner with PivotMarkets</h2>
            <p className="text-xl text-blue-100 mb-8">
              Incubators: Link to us as a resource. We provide your cohorts with Hope Launcher templates to accelerate MVP launch and increase success rates.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Big Three (Google, AWS, Azure): We educate founders on how to maximize your cloud credits and ecosystem adoption. We're not a competitor—we're your power user advocate.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Send Partnership Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Access AI Funding?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Start your journey with cloud grants, connect with national incubators, or join the Rural AI Initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800">
              Explore Funding Pathways
            </Button>
            <Button size="lg" variant="outline">
              Join Rural AI Initiative
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
