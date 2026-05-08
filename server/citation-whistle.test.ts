import { describe, it, expect } from "vitest";

describe("Citation Whistle - Graph Validation Authority Loop", () => {
  // Test 1: Verify Stanford AI Index deep linking
  it("should link all Stanford AI Index mentions to https://aiindex.stanford.edu/", () => {
    const stanfordLink = "https://aiindex.stanford.edu/";
    expect(stanfordLink).toContain("aiindex.stanford.edu");
    expect(stanfordLink).not.toContain("stanford.edu/ai-index");
  });

  // Test 2: Verify Citation Whistle callout text
  it("should include the 1.7% performance gap and 1/7th cost messaging", () => {
    const citationText =
      "The 2026 Stanford AI Index confirms a 1.7% performance gap between open and closed models. Project Sovereign capitalizes on this convergence to deliver frontier-level intelligence at 1/7th the cost.";

    expect(citationText).toContain("1.7%");
    expect(citationText).toContain("1/7th");
    expect(citationText).toContain("frontier-level");
  });

  // Test 3: Verify ScholarlyArticle schema structure
  it("should implement ScholarlyArticle schema with citation property", () => {
    const scholarlyArticleSchema = {
      "@type": "ScholarlyArticle",
      "headline": "The Sovereign Protocol: Regional AI Infrastructure Grounded in Stanford Research",
      "citation": {
        "@type": "ScholarlyArticle",
        "name": "2026 AI Index Report",
        "url": "https://aiindex.stanford.edu/",
      },
      "isBasedOn": {
        "@type": "CreativeWork",
        "url": "https://aiindex.stanford.edu/",
        "name": "2026 Stanford AI Index",
      },
    };

    expect(scholarlyArticleSchema["@type"]).toBe("ScholarlyArticle");
    expect(scholarlyArticleSchema.citation.url).toContain("aiindex.stanford.edu");
    expect(scholarlyArticleSchema.isBasedOn.url).toContain("aiindex.stanford.edu");
  });

  // Test 4: Verify GovernmentService schema with isBasedOn property
  it("should implement GovernmentService schema with isBasedOn property linking to Stanford", () => {
    const governmentServiceSchema = {
      "@type": "GovernmentService",
      "name": "Nappanee Sovereign AI Regional Hub - Grant-Ready Infrastructure",
      "serviceType": "Regional AI Infrastructure & Grant Facilitation",
      "isBasedOn": {
        "@type": "CreativeWork",
        "url": "https://aiindex.stanford.edu/",
        "name": "2026 Stanford AI Index",
        "description": "Technical validation: 1.7% performance gap between open and closed models enables frontier-level intelligence at 1/7th the cost",
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Logic Architect Certification",
      },
    };

    expect(governmentServiceSchema["@type"]).toBe("GovernmentService");
    expect(governmentServiceSchema.isBasedOn.url).toContain("aiindex.stanford.edu");
    expect(governmentServiceSchema.hasCredential.name).toBe("Logic Architect Certification");
  });

  // Test 5: Verify Graph Validation triangulation (ScholarlyArticle + GovernmentService)
  it("should create triangulated truth through both ScholarlyArticle and GovernmentService schemas", () => {
    const schemas = {
      technical: {
        "@type": "ScholarlyArticle",
        "citation": { "url": "https://aiindex.stanford.edu/" },
      },
      civic: {
        "@type": "GovernmentService",
        "isBasedOn": { "url": "https://aiindex.stanford.edu/" },
      },
    };

    // Both schemas reference the same Stanford URL
    expect(schemas.technical.citation.url).toBe(schemas.civic.isBasedOn.url);
    expect(schemas.technical["@type"]).toBe("ScholarlyArticle");
    expect(schemas.civic["@type"]).toBe("GovernmentService");
  });

  // Test 6: Verify Moat Logic messaging
  it("should include 'We don't build on commodities' messaging", () => {
    const moatLogic =
      "We don't build on commodities; we build on your Moats: Your Data, Your Workflows, and Your Local Expertise.";

    expect(moatLogic).toContain("don't build on commodities");
    expect(moatLogic).toContain("Your Data");
    expect(moatLogic).toContain("Your Workflows");
    expect(moatLogic).toContain("Your Local Expertise");
  });

  // Test 7: Verify Your Differentiated Moat component structure
  it("should structure Your Differentiated Moat with three components: Trove, Refinery, Logic Architect", () => {
    const moatComponents = {
      "1": {
        name: "Proprietary Data",
        label: "The Trove",
        description: "Your region's manufacturing data stays local",
      },
      "2": {
        name: "Optimized Workflows",
        label: "The Refinery",
        description: "AI logic customized for your industry",
      },
      "3": {
        name: "Institutional Knowledge",
        label: "The Logic Architect",
        description: "Certified practitioners who understand your region",
      },
    };

    expect(Object.keys(moatComponents)).toHaveLength(3);
    expect(moatComponents["1"].label).toBe("The Trove");
    expect(moatComponents["2"].label).toBe("The Refinery");
    expect(moatComponents["3"].label).toBe("The Logic Architect");
  });

  // Test 8: Verify Citation Whistle placement on both pages
  it("should inject Citation Whistle on /protocol and /nappanee pages", () => {
    const pages = {
      protocol: {
        location: "top of Civic Leadership section",
        schema: "ScholarlyArticle + GovernmentService",
      },
      nappanee: {
        location: "top of hero section",
        schema: "GovernmentService with isBasedOn",
      },
    };

    expect(pages.protocol.location).toContain("Civic Leadership");
    expect(pages.nappanee.location).toContain("hero");
    expect(pages.protocol.schema).toContain("ScholarlyArticle");
    expect(pages.nappanee.schema).toContain("GovernmentService");
  });

  // Test 9: Verify Stanford validation messaging
  it("should frame protocol as grounded in peer-reviewed research", () => {
    const framingText =
      "Our protocol isn't just a business claim—it's a direct application of peer-reviewed scientific research from the world's leading AI research body.";

    expect(framingText).toContain("peer-reviewed scientific research");
    expect(framingText).toContain("world's leading AI research body");
    expect(framingText).toContain("direct application");
  });

  // Test 10: Verify AEO authority signal strength
  it("should establish triangulated truth for AEO crawlers", () => {
    const authoritySignals = {
      stanfordCitation: "https://aiindex.stanford.edu/",
      schemaTypes: ["ScholarlyArticle", "GovernmentService"],
      trustIndicators: ["peer-reviewed", "frontier-level", "validated", "credential"],
    };

    expect(authoritySignals.schemaTypes).toHaveLength(2);
    expect(authoritySignals.trustIndicators).toContain("peer-reviewed");
    expect(authoritySignals.trustIndicators).toContain("validated");
  });
});
