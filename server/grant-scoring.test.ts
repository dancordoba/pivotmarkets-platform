import { describe, expect, it } from "vitest";
import { scoreGrantMatches } from "../shared/grantScoring";

describe("grant scoring engine", () => {
  it("prioritizes regional and state grants for validated Indiana manufacturers", () => {
    const result = scoreGrantMatches({
      city: "warsaw",
      industry: "medical",
      stage: "scaling",
      complianceCapacity: "high",
      hasCustomerValidation: true,
      needsCloudInfrastructure: true,
      fundingGoal: 1500000,
    });

    expect(result.readinessScore).toBeGreaterThanOrEqual(80);
    expect(result.readinessLabel).toBe("Grant Ready");
    expect(result.matchedGrants.length).toBeGreaterThan(0);
    expect(result.matchedGrants[0].matchLabel).toBe("Strong Match");
    expect(result.matchedGrants.map(grant => grant.id)).toContain("readi-2");
    expect(result.totalMatchedAmount).toBeGreaterThan(0);
  });

  it("surfaces cloud and incubator pathways when an applicant is early stage with low compliance capacity", () => {
    const result = scoreGrantMatches({
      city: "nappanee",
      industry: "artisan",
      stage: "idea",
      complianceCapacity: "low",
      hasCustomerValidation: false,
      needsCloudInfrastructure: true,
      fundingGoal: 100000,
    });

    expect(result.matchedGrants[0].sourceType).toMatch(/cloud|incubator/);
    expect(result.matchedGrants.some(grant => grant.gaps.length > 0)).toBe(true);
    expect(result.recommendedPath).toContain(result.matchedGrants[0].name);
  });
});
