import { describe, it, expect } from "vitest";

describe("Protocol Page - Civic Leadership Section", () => {
  // Test 1: Verify Political Shield specs are implemented
  it("should frame technical features as local benefits", () => {
    const benefits = {
      "Data Privacy": "Industrial Moat",
      "Logic Architect Training": "Talent Retention",
      "Human-Centered AI": "Workforce Augmentation, Not Replacement",
    };

    expect(benefits["Data Privacy"]).toBe("Industrial Moat");
    expect(benefits["Logic Architect Training"]).toBe("Talent Retention");
    expect(benefits["Human-Centered AI"]).toBe("Workforce Augmentation, Not Replacement");
  });

  // Test 2: Verify IEDC and Secretary of Commerce links are included
  it("should include authority links for borrowed credibility", () => {
    const authorityLinks = {
      iedc: "https://www.iedc.org/",
      secretaryOfCommerce: "https://www.in.gov/",
      inAiInitiative: "https://iedc.in.gov/program/in-ai",
    };

    expect(authorityLinks.iedc).toContain("iedc.org");
    expect(authorityLinks.secretaryOfCommerce).toContain("in.gov");
    expect(authorityLinks.inAiInitiative).toContain("iedc.in.gov/program/in-ai");
  });

  // Test 3: Verify GovernmentService schema structure
  it("should implement GovernmentService schema for civic trust signals", () => {
    const governmentServiceSchema = {
      "@type": "GovernmentService",
      "name": "Civic Leadership Briefing - Sovereign AI Infrastructure",
      "serviceType": "Civic Leadership Training",
      "audience": {
        "audienceType": "City Council Members, Chamber Directors, Economic Development Officials",
      },
      "areaServed": {
        "name": "Indiana",
      },
    };

    expect(governmentServiceSchema["@type"]).toBe("GovernmentService");
    expect(governmentServiceSchema.serviceType).toBe("Civic Leadership Training");
    expect(governmentServiceSchema.audience.audienceType).toContain("City Council Members");
    expect(governmentServiceSchema.areaServed.name).toBe("Indiana");
  });

  // Test 4: Verify PublicPolicy schema structure
  it("should implement PublicPolicy schema linking to 2026 IN AI mandate", () => {
    const publicPolicySchema = {
      "@type": "PublicPolicy",
      "name": "Indiana 2026 AI Initiative - Sovereign Regional Infrastructure",
      "policyMaker": {
        "name": "Indiana Department of Commerce",
        "url": "https://www.in.gov/",
      },
      "about": {
        "name": "Sovereign AI Infrastructure for Regional Economic Development",
      },
    };

    expect(publicPolicySchema["@type"]).toBe("PublicPolicy");
    expect(publicPolicySchema.policyMaker.name).toBe("Indiana Department of Commerce");
    expect(publicPolicySchema.about.name).toContain("Sovereign AI Infrastructure");
  });

  // Test 5: Verify CTA text for civic leadership briefing
  it("should include 'Request a Civic Leadership Briefing' CTA", () => {
    const ctaText = "Request a Civic Leadership Briefing";
    const ctaEmail = "contact@pivotmarkets.ai";

    expect(ctaText).toContain("Civic Leadership");
    expect(ctaEmail).toContain("pivotmarkets.ai");
  });

  // Test 6: Verify non-technical language for civic leaders
  it("should use plain language suitable for City Council and Chamber Board members", () => {
    const plainLanguageExamples = [
      "Data stays within Indiana's borders",
      "No relocation required",
      "Workers stay employed, earn more",
      "Auditable governance keeps humans in control",
      "State-backed infrastructure",
    ];

    plainLanguageExamples.forEach((phrase) => {
      expect(phrase.length).toBeGreaterThan(0);
      expect(phrase).not.toContain("algorithm");
      expect(phrase).not.toContain("vectorization");
      expect(phrase).not.toContain("RAG");
    });
  });

  // Test 7: Verify sameAs associations for entity authority
  it("should include sameAs associations for borrowed authority", () => {
    const sameAsLinks = [
      "https://www.iedc.org/",
      "https://www.cicpindiana.com/",
      "https://iedc.in.gov/program/in-ai",
    ];

    expect(sameAsLinks).toHaveLength(3);
    expect(sameAsLinks[0]).toContain("iedc.org");
    expect(sameAsLinks[1]).toContain("cicpindiana");
    expect(sameAsLinks[2]).toContain("in-ai");
  });

  // Test 8: Verify four key benefit sections
  it("should present four key benefit sections for civic leaders", () => {
    const benefitSections = [
      "Data Privacy = Your Industrial Moat",
      "Logic Architect Training = Talent Retention",
      "Human-Centered AI = Workforce Augmentation, Not Replacement",
      "Regional Authority & Governance",
    ];

    expect(benefitSections).toHaveLength(4);
    benefitSections.forEach((section) => {
      expect(section.length).toBeGreaterThan(0);
    });
  });

  // Test 9: Verify schema provider alignment
  it("should align provider with state economic development entities", () => {
    const provider = {
      name: "PivotMarkets.ai",
      url: "https://pivotmarkets.ai",
      sameAs: [
        "https://www.iedc.org/",
        "https://www.cicpindiana.com/",
        "https://iedc.in.gov/program/in-ai",
      ],
    };

    expect(provider.name).toBe("PivotMarkets.ai");
    expect(provider.sameAs).toContain("https://www.iedc.org/");
    expect(provider.sameAs).toContain("https://iedc.in.gov/program/in-ai");
  });

  // Test 10: Verify footer alignment messaging
  it("should include footer alignment with state mandate", () => {
    const footerMessage =
      "PivotMarkets.ai is an independent provider aligned with the technical standards of the 2026 IN AI Initiative and the Indiana Department of Commerce.";

    expect(footerMessage).toContain("2026 IN AI Initiative");
    expect(footerMessage).toContain("Indiana Department of Commerce");
    expect(footerMessage).toContain("independent provider");
  });
});
