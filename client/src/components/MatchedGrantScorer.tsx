import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import type { ApplicantStage, ComplianceCapacity, GrantCity, GrantIndustry } from "../../../shared/grantScoring";

const contractorNavy = "#2C3E50";
const contractorGreen = "#27AE60";

const cityOptions: { value: GrantCity; label: string }[] = [
  { value: "nappanee", label: "Nappanee" },
  { value: "jasper", label: "Jasper" },
  { value: "warsaw", label: "Warsaw" },
  { value: "columbus", label: "Columbus" },
  { value: "huntington", label: "Huntington" },
  { value: "batesville", label: "Batesville" },
  { value: "regional-partners", label: "Regional Partners" },
];

const industryOptions: { value: GrantIndustry; label: string }[] = [
  { value: "artisan", label: "Artisan / Cabinetry" },
  { value: "furniture", label: "Furniture Manufacturing" },
  { value: "medical", label: "Medical / MedTech" },
  { value: "precision", label: "Precision Manufacturing" },
  { value: "manufacturing", label: "General Manufacturing" },
  { value: "consulting", label: "Consulting / Regional Partner" },
];

const stageOptions: { value: ApplicantStage; label: string }[] = [
  { value: "idea", label: "Idea / concept" },
  { value: "mvp", label: "MVP or prototype" },
  { value: "traction", label: "Customer traction" },
  { value: "scaling", label: "Scaling deployment" },
];

const complianceOptions: { value: ComplianceCapacity; label: string }[] = [
  { value: "low", label: "Low — lean team" },
  { value: "medium", label: "Medium — can manage state grants" },
  { value: "high", label: "High — can manage federal/regional compliance" },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function fieldClassName() {
  return "w-full rounded-[8px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#27AE60] focus:ring-2 focus:ring-[#27AE60]/20";
}

export function MatchedGrantScorer() {
  const [city, setCity] = useState<GrantCity>("nappanee");
  const [industry, setIndustry] = useState<GrantIndustry>("manufacturing");
  const [stage, setStage] = useState<ApplicantStage>("mvp");
  const [complianceCapacity, setComplianceCapacity] = useState<ComplianceCapacity>("medium");
  const [hasCustomerValidation, setHasCustomerValidation] = useState(false);
  const [needsCloudInfrastructure, setNeedsCloudInfrastructure] = useState(true);
  const [fundingGoal, setFundingGoal] = useState(250000);

  const scoringInput = {
    city,
    industry,
    stage,
    complianceCapacity,
    hasCustomerValidation,
    needsCloudInfrastructure,
    fundingGoal,
  };

  const { data, isLoading, isFetching } = trpc.leads.score.useQuery(scoringInput);

  return (
    <section id="matched-grants" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: contractorGreen }}>
            Grant scoring engine
          </p>
          <h2 className="mt-3 text-3xl font-bold" style={{ color: contractorNavy }}>
            Match Your Business to the Best Grant Pathway
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Score regional, state, federal, incubator, and cloud-credit opportunities against your city, industry, readiness stage, validation proof, and compliance capacity.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <Card className="p-6 rounded-[8px] border-2" style={{ borderColor: contractorNavy }}>
            <div className="grid gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: contractorNavy }}>City / region</label>
                <select className={fieldClassName()} value={city} onChange={event => setCity(event.target.value as GrantCity)}>
                  {cityOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: contractorNavy }}>Industry</label>
                <select className={fieldClassName()} value={industry} onChange={event => setIndustry(event.target.value as GrantIndustry)}>
                  {industryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: contractorNavy }}>Business stage</label>
                <select className={fieldClassName()} value={stage} onChange={event => setStage(event.target.value as ApplicantStage)}>
                  {stageOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: contractorNavy }}>Compliance capacity</label>
                <select className={fieldClassName()} value={complianceCapacity} onChange={event => setComplianceCapacity(event.target.value as ComplianceCapacity)}>
                  {complianceOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: contractorNavy }}>Funding target</label>
                <input
                  className={fieldClassName()}
                  type="number"
                  min={25000}
                  max={10000000}
                  step={25000}
                  value={fundingGoal}
                  onChange={event => setFundingGoal(Number(event.target.value) || 25000)}
                />
              </div>

              <label className="flex items-start gap-3 rounded-[8px] bg-slate-50 p-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={hasCustomerValidation}
                  onChange={event => setHasCustomerValidation(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#27AE60]"
                />
                <span>We have customer validation, LOIs, pilot users, revenue, or a credible demand signal.</span>
              </label>

              <label className="flex items-start gap-3 rounded-[8px] bg-slate-50 p-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={needsCloudInfrastructure}
                  onChange={event => setNeedsCloudInfrastructure(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#27AE60]"
                />
                <span>The project needs cloud infrastructure, AI tools, data hosting, or deployment credits.</span>
              </label>
            </div>
          </Card>

          <div className="space-y-5">
            <Card className="rounded-[8px] border-0 p-6 text-white" style={{ backgroundColor: contractorNavy }}>
              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <p className="text-sm text-white/70">Readiness score</p>
                  <p className="text-4xl font-bold">{isLoading ? "—" : data?.readinessScore ?? 0}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Status</p>
                  <p className="text-2xl font-bold" style={{ color: contractorGreen }}>{data?.readinessLabel ?? "Scoring"}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Matched amount</p>
                  <p className="text-2xl font-bold">{data ? currency.format(data.totalMatchedAmount) : "—"}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/80">{data?.recommendedPath ?? "Adjust the inputs to generate a ranked grant pathway."}</p>
            </Card>

            {(isLoading || isFetching) && (
              <Card className="rounded-[8px] p-5 text-sm text-slate-600">Refreshing matched grants...</Card>
            )}

            {data?.matchedGrants.map(grant => (
              <Card key={grant.id} className="rounded-[8px] border border-slate-200 p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold" style={{ color: contractorNavy }}>{grant.name}</h3>
                      <span className="rounded-[8px] px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: contractorGreen }}>
                        {grant.matchLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{grant.description}</p>
                  </div>
                  <div className="min-w-[140px] rounded-[8px] bg-slate-50 p-3 text-right">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Match score</p>
                    <p className="text-2xl font-bold" style={{ color: contractorNavy }}>{grant.matchScore}</p>
                  </div>
                </div>

                <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-[8px] bg-slate-50 p-3">
                    <p className="font-semibold" style={{ color: contractorNavy }}>Estimated amount</p>
                    <p className="text-slate-700">{currency.format(grant.estimatedAmount)}</p>
                  </div>
                  <div className="rounded-[8px] bg-slate-50 p-3">
                    <p className="font-semibold" style={{ color: contractorNavy }}>Timeline</p>
                    <p className="text-slate-700">{grant.timeline}</p>
                  </div>
                  <div className="rounded-[8px] bg-slate-50 p-3">
                    <p className="font-semibold" style={{ color: contractorNavy }}>Compliance</p>
                    <p className="capitalize text-slate-700">{grant.complianceLevel}</p>
                  </div>
                </div>

                <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2" style={{ color: contractorNavy }}>Why this matches</p>
                    <ul className="space-y-1 text-slate-600">
                      {grant.matchedReasons.slice(0, 3).map(reason => <li key={reason}>• {reason}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2" style={{ color: contractorNavy }}>Next step</p>
                    <p className="text-slate-600">{grant.nextStep}</p>
                  </div>
                </div>

                {grant.gaps.length > 0 && (
                  <div className="mt-5 rounded-[8px] border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                    <span className="font-semibold">Preparation gap:</span> {grant.gaps[0]}
                  </div>
                )}
              </Card>
            ))}

            <Button asChild className="rounded-[8px] text-white" style={{ backgroundColor: contractorGreen }}>
              <a href="#partner-with-us">Request grant stack review</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
