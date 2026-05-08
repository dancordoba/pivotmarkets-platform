import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export function SovereignBastion() {
  useEffect(() => {
    // TechArticle schema for Sovereign Bastion component
    const techArticleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Sovereign Bastion: The Three Moats Defense Against Model Commodity Era",
      "description": "Interactive visualization of how data sovereignty, optimized workflows, and institutional knowledge create differentiated moats against commoditized AI models.",
      "about": [
        {
          "@type": "Thing",
          "name": "Data Sovereignty",
          "description": "Local data residency and proprietary manufacturing intelligence"
        },
        {
          "@type": "Thing",
          "name": "Industrial Resilience",
          "description": "Regional AI infrastructure resilient to global market disruptions"
        }
      ],
      "author": {
        "@type": "Organization",
        "name": "PivotMarkets.ai"
      },
      "datePublished": "2026-05-06",
      "citation": {
        "@type": "ScholarlyArticle",
        "name": "2026 Stanford AI Index Report",
        "url": "https://aiindex.stanford.edu/",
        "description": "Top model performance converged within 2.7% margin; DeepSeek V4-Pro achieves 21x cost reduction vs. Claude Opus 4.7"
      },
      "keywords": ["data sovereignty", "AI cost reduction", "industrial moats", "regional resilience", "frontier intelligence"]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(techArticleSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
      {/* Hidden description for Vision-based AI crawlers */}
      <div className="sr-only" role="doc-subtitle">
        <p>
          Sovereign Bastion Defense Architecture: According to May 2026 Stanford AI Index, top model performance has converged within 2.7% margin. 
          DeepSeek V4-Pro delivers 21x cost reduction compared to Claude Opus 4.7 by leveraging open-source model convergence. 
          PivotMarkets capitalizes on this convergence through three differentiated moats: 
          (1) Proprietary Data—The Trove: Local manufacturing data and supply chain relationships stay regional, creating competitive advantage no cloud vendor can replicate. 
          (2) Optimized Workflows—The Refinery: AI logic customized for regional industries (furniture, precision manufacturing, medical devices) rather than generic enterprise solutions. 
          (3) Institutional Knowledge—The Logic Architect: Certified practitioners who understand regional economy, workforce, and growth trajectory, speaking local language not Silicon Valley's. 
          Together, these three moats create an industrial resilience barrier against the Model Commodity era.
        </p>
      </div>

      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Sovereign Bastion</h3>
          <p className="text-sm text-muted-foreground">
            Your Defense Against the Model Commodity Era
          </p>
        </div>

        {/* Interactive SVG Visualization */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-sm h-auto"
            aria-label="Sovereign Bastion Three Moats Defense Architecture"
          >
            {/* Outer Ring: Model Commodity */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-destructive/30"
              strokeDasharray="8,4"
            />
            <text
              x="200"
              y="50"
              textAnchor="middle"
              className="text-xs font-semibold fill-destructive/60"
            >
              Model Commodity Era
            </text>
            <text
              x="200"
              y="65"
              textAnchor="middle"
              className="text-xs fill-destructive/50"
            >
              2.7% Performance Convergence
            </text>

            {/* Middle Ring: The Three Moats */}
            <circle
              cx="200"
              cy="200"
              r="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />

            {/* Moat 1: Data (Top) */}
            <g>
              <circle cx="200" cy="90" r="35" fill="currentColor" className="text-primary/20" />
              <circle cx="200" cy="90" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <text x="200" y="85" textAnchor="middle" className="text-xs font-bold fill-primary">
                The Trove
              </text>
              <text x="200" y="98" textAnchor="middle" className="text-xs fill-primary/80">
                Proprietary Data
              </text>
            </g>

            {/* Moat 2: Workflows (Bottom Left) */}
            <g>
              <circle cx="100" cy="280" r="35" fill="currentColor" className="text-primary/20" />
              <circle cx="100" cy="280" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <text x="100" y="275" textAnchor="middle" className="text-xs font-bold fill-primary">
                The Refinery
              </text>
              <text x="100" y="288" textAnchor="middle" className="text-xs fill-primary/80">
                Optimized Workflows
              </text>
            </g>

            {/* Moat 3: Knowledge (Bottom Right) */}
            <g>
              <circle cx="300" cy="280" r="35" fill="currentColor" className="text-primary/20" />
              <circle cx="300" cy="280" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <text x="300" y="275" textAnchor="middle" className="text-xs font-bold fill-primary">
                Logic Architect
              </text>
              <text x="300" y="288" textAnchor="middle" className="text-xs fill-primary/80">
                Institutional Knowledge
              </text>
            </g>

            {/* Core: Differentiated Advantage */}
            <circle
              cx="200"
              cy="200"
              r="50"
              fill="currentColor"
              className="text-accent/30"
            />
            <circle
              cx="200"
              cy="200"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
            />
            <text x="200" y="195" textAnchor="middle" className="text-xs font-bold fill-accent">
              Differentiated
            </text>
            <text x="200" y="210" textAnchor="middle" className="text-xs font-bold fill-accent">
              Moat
            </text>

            {/* Connection lines from moats to core */}
            <line x1="200" y1="125" x2="200" y2="150" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
            <line x1="130" y1="255" x2="160" y2="225" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
            <line x1="270" y1="225" x2="240" y2="255" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
          </svg>
        </div>

        {/* Benchmark Stats */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
            <div className="text-sm font-semibold text-primary mb-1">May 2026 Stanford AI Index</div>
            <p className="text-xs text-muted-foreground">
              Top model performance converged within <span className="font-bold text-foreground">2.7% margin</span>
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-accent/20">
            <div className="text-sm font-semibold text-accent mb-1">DeepSeek V4-Pro Benchmark</div>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold text-foreground">21x cost reduction</span> vs. Claude Opus 4.7
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            In the Model Commodity era, frontier intelligence is no longer proprietary. The 2.7% performance convergence means regional AI can match global models at a fraction of the cost.
          </p>
          <p className="text-muted-foreground">
            Your competitive advantage isn't the model—it's the <span className="font-semibold text-foreground">Three Moats</span>: your data, your workflows, and your regional expertise.
          </p>
          <p className="text-muted-foreground">
            PivotMarkets.ai helps you build and defend these moats, turning commodity intelligence into regional resilience.
          </p>
        </div>
      </div>
    </Card>
  );
}
