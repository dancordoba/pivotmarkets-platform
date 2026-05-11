export const grantCities = [
  "nappanee",
  "jasper",
  "warsaw",
  "columbus",
  "huntington",
  "batesville",
  "regional-partners",
] as const;

export const grantIndustries = [
  "artisan",
  "furniture",
  "medical",
  "precision",
  "manufacturing",
  "consulting",
] as const;

export const applicantStages = ["idea", "mvp", "traction", "scaling"] as const;
export const complianceCapacities = ["low", "medium", "high"] as const;

export type GrantCity = (typeof grantCities)[number];
export type GrantIndustry = (typeof grantIndustries)[number];
export type ApplicantStage = (typeof applicantStages)[number];
export type ComplianceCapacity = (typeof complianceCapacities)[number];

export interface GrantScoringInput {
  city: GrantCity;
  industry: GrantIndustry;
  stage: ApplicantStage;
  complianceCapacity: ComplianceCapacity;
  hasCustomerValidation: boolean;
  needsCloudInfrastructure: boolean;
  fundingGoal: number;
}

export interface GrantProgram {
  id: string;
  name: string;
  sourceType: "cloud" | "state" | "regional" | "federal" | "incubator";
  maxAmount: number;
  timeline: string;
  complianceLevel: ComplianceCapacity;
  eligibleCities: readonly (GrantCity | "all")[];
  eligibleIndustries: readonly (GrantIndustry | "all")[];
  preferredStages: readonly ApplicantStage[];
  requiresCustomerValidation?: boolean;
  requiresCloudNeed?: boolean;
  description: string;
  nextStep: string;
}

export interface MatchedGrant extends GrantProgram {
  matchScore: number;
  matchLabel: "Strong Match" | "Good Match" | "Review Match";
  matchedReasons: string[];
  gaps: string[];
  estimatedAmount: number;
}

export interface GrantScoringResult {
  readinessScore: number;
  readinessLabel: "Grant Ready" | "Nearly Ready" | "Needs Preparation";
  totalMatchedAmount: number;
  recommendedPath: string;
  matchedGrants: MatchedGrant[];
}

const regionalCities: GrantCity[] = ["nappanee", "jasper", "warsaw", "columbus", "huntington", "batesville"];

export const grantCatalog: GrantProgram[] = [
  {
    id: "google-cloud-startup",
    name: "Google Cloud Startup Credits",
    sourceType: "cloud",
    maxAmount: 350000,
    timeline: "2–4 weeks",
    complianceLevel: "low",
    eligibleCities: ["all"],
    eligibleIndustries: ["all"],
    preferredStages: ["mvp", "traction", "scaling"],
    requiresCloudNeed: true,
    description: "Cloud credits for AI-native prototypes, data products, and scalable marketplace applications.",
    nextStep: "Prepare a concise product brief, cloud architecture outline, and deployment milestone plan.",
  },
  {
    id: "aws-activate",
    name: "AWS Activate Portfolio Credits",
    sourceType: "cloud",
    maxAmount: 100000,
    timeline: "2–4 weeks",
    complianceLevel: "low",
    eligibleCities: ["all"],
    eligibleIndustries: ["all"],
    preferredStages: ["idea", "mvp", "traction"],
    requiresCloudNeed: true,
    description: "Startup credits and technical enablement for founders building cloud-hosted AI workflows.",
    nextStep: "Document the workload, usage forecast, and partner/incubator affiliation pathway.",
  },
  {
    id: "microsoft-founders-hub",
    name: "Microsoft for Startups Founders Hub",
    sourceType: "cloud",
    maxAmount: 150000,
    timeline: "1–3 weeks",
    complianceLevel: "low",
    eligibleCities: ["all"],
    eligibleIndustries: ["all"],
    preferredStages: ["idea", "mvp", "traction"],
    requiresCloudNeed: true,
    description: "Azure and AI tooling credits for startups progressing from concept into deployable product.",
    nextStep: "Frame the use case around Azure AI, data security, and measurable customer outcomes.",
  },
  {
    id: "manufacturing-readiness",
    name: "Indiana Manufacturing Readiness Grant",
    sourceType: "state",
    maxAmount: 200000,
    timeline: "8–12 weeks",
    complianceLevel: "medium",
    eligibleCities: regionalCities,
    eligibleIndustries: ["artisan", "furniture", "medical", "precision", "manufacturing"],
    preferredStages: ["traction", "scaling"],
    requiresCustomerValidation: true,
    description: "State support for automation, advanced manufacturing, and productivity-improving technology investments.",
    nextStep: "Build a scope-of-work, vendor quote package, jobs/productivity narrative, and implementation budget.",
  },
  {
    id: "readi-2",
    name: "READI 2.0 Regional Infrastructure Funding",
    sourceType: "regional",
    maxAmount: 1000000,
    timeline: "3–9 months",
    complianceLevel: "high",
    eligibleCities: regionalCities,
    eligibleIndustries: ["all"],
    preferredStages: ["traction", "scaling"],
    requiresCustomerValidation: true,
    description: "Regional economic development funding for projects with visible community and workforce impact.",
    nextStep: "Coordinate with local partners and define the economic impact, workforce, and capital stack narrative.",
  },
  {
    id: "sbir-sttr-ai",
    name: "SBIR/STTR AI and Advanced Manufacturing R&D",
    sourceType: "federal",
    maxAmount: 275000,
    timeline: "6–12 months",
    complianceLevel: "high",
    eligibleCities: ["all"],
    eligibleIndustries: ["medical", "precision", "manufacturing"],
    preferredStages: ["traction", "scaling"],
    requiresCustomerValidation: true,
    description: "Federal R&D pathway for defensible technical innovation with commercialization potential.",
    nextStep: "Draft the technical innovation thesis, commercialization plan, principal investigator role, and research budget.",
  },
  {
    id: "incubator-accelerator",
    name: "Incubator and Accelerator Partner Pathway",
    sourceType: "incubator",
    maxAmount: 50000,
    timeline: "4–8 weeks",
    complianceLevel: "low",
    eligibleCities: ["all"],
    eligibleIndustries: ["all"],
    preferredStages: ["idea", "mvp", "traction"],
    description: "Mentorship and non-dilutive support pathway for founders who need structure before larger grant applications.",
    nextStep: "Select a relevant incubator tier and prepare a one-page founder, market, and milestone summary.",
  },
];

const cityNames: Record<GrantCity, string> = {
  nappanee: "Nappanee",
  jasper: "Jasper",
  warsaw: "Warsaw",
  columbus: "Columbus",
  huntington: "Huntington",
  batesville: "Batesville",
  "regional-partners": "Regional Partners",
};

function supports<T extends string>(values: readonly (T | "all")[], value: T) {
  return values.includes("all") || values.includes(value);
}

function canHandleCompliance(applicant: ComplianceCapacity, required: ComplianceCapacity) {
  const rank: Record<ComplianceCapacity, number> = { low: 1, medium: 2, high: 3 };
  return rank[applicant] >= rank[required];
}

function labelForScore(score: number): MatchedGrant["matchLabel"] {
  if (score >= 82) return "Strong Match";
  if (score >= 65) return "Good Match";
  return "Review Match";
}

function readinessLabel(score: number): GrantScoringResult["readinessLabel"] {
  if (score >= 80) return "Grant Ready";
  if (score >= 60) return "Nearly Ready";
  return "Needs Preparation";
}

export function scoreGrantMatches(input: GrantScoringInput): GrantScoringResult {
  const normalizedFundingGoal = Number.isFinite(input.fundingGoal) && input.fundingGoal > 0 ? input.fundingGoal : 100000;

  const matchedGrants = grantCatalog
    .map(program => {
      const matchedReasons: string[] = [];
      const gaps: string[] = [];
      let score = 0;

      if (supports(program.eligibleCities, input.city)) {
        score += 18;
        matchedReasons.push(`${cityNames[input.city]} is inside this program's service area.`);
      } else {
        gaps.push("This program is not primarily targeted to the selected city.");
      }

      if (supports(program.eligibleIndustries, input.industry)) {
        score += 20;
        matchedReasons.push("The selected industry aligns with the program focus.");
      } else {
        gaps.push("Industry fit needs review before pursuing this program.");
      }

      if (program.preferredStages.includes(input.stage)) {
        score += 18;
        matchedReasons.push("The business stage fits the expected application window.");
      } else {
        gaps.push("Business stage may be early for this funding source.");
      }

      if (canHandleCompliance(input.complianceCapacity, program.complianceLevel)) {
        score += 16;
        matchedReasons.push("Compliance capacity appears sufficient for the program burden.");
      } else {
        gaps.push("Compliance capacity should be strengthened before applying.");
      }

      if (!program.requiresCustomerValidation || input.hasCustomerValidation) {
        score += 14;
        if (program.requiresCustomerValidation) {
          matchedReasons.push("Customer validation supports the application narrative.");
        }
      } else {
        gaps.push("Customer validation, LOIs, or revenue proof will improve this match.");
      }

      if (!program.requiresCloudNeed || input.needsCloudInfrastructure) {
        score += 14;
        if (program.requiresCloudNeed) {
          matchedReasons.push("Cloud infrastructure need supports the credit pathway.");
        }
      } else {
        gaps.push("Cloud usage plan is needed to justify this opportunity.");
      }

      const estimatedAmount = Math.min(program.maxAmount, Math.max(25000, Math.round(normalizedFundingGoal * Math.min(score / 100, 1))));

      return {
        ...program,
        matchScore: Math.min(score, 100),
        matchLabel: labelForScore(score),
        matchedReasons,
        gaps,
        estimatedAmount,
      } satisfies MatchedGrant;
    })
    .filter(match => match.matchScore >= 45)
    .sort((a, b) => b.matchScore - a.matchScore || b.estimatedAmount - a.estimatedAmount);

  const topMatches = matchedGrants.slice(0, 4);
  const readinessScore = topMatches.length
    ? Math.round(topMatches.reduce((sum, match) => sum + match.matchScore, 0) / topMatches.length)
    : 0;

  const totalMatchedAmount = topMatches.reduce((sum, match) => sum + match.estimatedAmount, 0);
  const first = topMatches[0];
  const recommendedPath = first
    ? `Start with ${first.name}, then sequence the remaining matches by compliance burden and timeline.`
    : "Start with an incubator readiness review before pursuing formal grant applications.";

  return {
    readinessScore,
    readinessLabel: readinessLabel(readinessScore),
    totalMatchedAmount,
    recommendedPath,
    matchedGrants: topMatches,
  };
}
