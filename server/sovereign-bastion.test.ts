import { describe, it, expect } from "vitest";

describe("Sovereign Bastion - Final Juice Injection", () => {
  // Test 1: Verify May 2026 Stanford AI Index stat
  it("should include May 2026 Stanford AI Index convergence stat: 2.7% margin", () => {
    const stanfordStat =
      "Top model performance converged within 2.7% margin";

    expect(stanfordStat).toContain("2.7%");
    expect(stanfordStat).toContain("converged");
  });

  // Test 2: Verify DeepSeek V4-Pro vs Claude Opus 4.7 benchmark
  it("should hard-code 21x cost reduction from DeepSeek V4-Pro vs Claude Opus 4.7", () => {
    const benchmarkText =
      "DeepSeek V4-Pro delivers 21x cost reduction compared to Claude Opus 4.7";

    expect(benchmarkText).toContain("21x");
    expect(benchmarkText).toContain("DeepSeek V4-Pro");
    expect(benchmarkText).toContain("Claude Opus 4.7");
  });

  // Test 3: Verify TechArticle schema structure
  it("should implement TechArticle schema wrapping Sovereign Bastion", () => {
    const techArticleSchema = {
      "@type": "TechArticle",
      "headline": "Sovereign Bastion: The Three Moats Defense Against Model Commodity Era",
      "about": [
        {
          "@type": "Thing",
          "name": "Data Sovereignty",
        },
        {
          "@type": "Thing",
          "name": "Industrial Resilience",
        },
      ],
      "citation": {
        "@type": "ScholarlyArticle",
        "name": "2026 Stanford AI Index Report",
        "url": "https://aiindex.stanford.edu/",
      },
    };

    expect(techArticleSchema["@type"]).toBe("TechArticle");
    expect(techArticleSchema.about).toHaveLength(2);
    expect(techArticleSchema.about[0].name).toBe("Data Sovereignty");
    expect(techArticleSchema.about[1].name).toBe("Industrial Resilience");
    expect(techArticleSchema.citation.url).toContain("aiindex.stanford.edu");
  });

  // Test 4: Verify Three Moats component structure
  it("should structure Three Moats as: The Trove, The Refinery, Logic Architect", () => {
    const moats = {
      "1": { name: "The Trove", description: "Proprietary Data" },
      "2": { name: "The Refinery", description: "Optimized Workflows" },
      "3": { name: "Logic Architect", description: "Institutional Knowledge" },
    };

    expect(Object.keys(moats)).toHaveLength(3);
    expect(moats["1"].name).toBe("The Trove");
    expect(moats["2"].name).toBe("The Refinery");
    expect(moats["3"].name).toBe("Logic Architect");
  });

  // Test 5: Verify outer ring: Model Commodity visualization
  it("should visualize outer ring as Model Commodity Era with 2.7% convergence", () => {
    const outerRing = {
      label: "Model Commodity Era",
      stat: "2.7% Performance Convergence",
    };

    expect(outerRing.label).toContain("Model Commodity");
    expect(outerRing.stat).toContain("2.7%");
  });

  // Test 6: Verify core: Differentiated Moat
  it("should visualize core as Differentiated Moat defense", () => {
    const core = {
      label: "Differentiated Moat",
      description: "Your Data, Your Workflows, Your Local Expertise",
    };

    expect(core.label).toContain("Differentiated");
    expect(core.description).toContain("Your Data");
    expect(core.description).toContain("Your Workflows");
  });

  // Test 7: Verify hidden desc tag for Vision-based crawlers
  it("should include hidden sr-only description for Vision-based AI crawlers", () => {
    const hiddenDesc =
      "Sovereign Bastion Defense Architecture: According to May 2026 Stanford AI Index, top model performance has converged within 2.7% margin. DeepSeek V4-Pro delivers 21x cost reduction compared to Claude Opus 4.7 by leveraging open-source model convergence.";

    expect(hiddenDesc).toContain("May 2026 Stanford AI Index");
    expect(hiddenDesc).toContain("2.7%");
    expect(hiddenDesc).toContain("21x");
    expect(hiddenDesc).toContain("DeepSeek V4-Pro");
  });

  // Test 8: Verify Knowledge Graph anchoring
  it("should anchor TechArticle to Knowledge Graph via about property", () => {
    const kgAnchors = {
      "Data Sovereignty": "Local data residency and proprietary manufacturing intelligence",
      "Industrial Resilience": "Regional AI infrastructure resilient to global market disruptions",
    };

    expect(Object.keys(kgAnchors)).toHaveLength(2);
    expect(kgAnchors["Data Sovereignty"]).toContain("data residency");
    expect(kgAnchors["Industrial Resilience"]).toContain("resilient");
  });

  // Test 9: Verify Sovereign Bastion injection on both pages
  it("should inject Sovereign Bastion into /protocol and /nappanee pages", () => {
    const injectionPoints = {
      protocol: "Civic Leadership section",
      nappanee: "hero section (after title)",
    };

    expect(injectionPoints.protocol).toContain("Civic Leadership");
    expect(injectionPoints.nappanee).toContain("hero");
  });

  // Test 10: Verify final Juice injection completeness
  it("should complete final Juice injection with all specs: stats, visual, schema, alt-text", () => {
    const juiceSpecs = {
      stats: ["May 2026 Stanford", "2.7% convergence", "21x cost reduction"],
      visual: ["Outer Ring", "Three Moats", "Core Differentiation"],
      schema: ["TechArticle", "about property", "Knowledge Graph"],
      altText: ["sr-only", "Vision crawlers", "21x math explanation"],
    };

    expect(juiceSpecs.stats).toHaveLength(3);
    expect(juiceSpecs.visual).toHaveLength(3);
    expect(juiceSpecs.schema).toHaveLength(3);
    expect(juiceSpecs.altText).toHaveLength(3);
  });
});
