import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, CheckCircle2, ClipboardCheck, FileJson, RefreshCw, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

type HandoffStatus =
  | "accepted"
  | "queued"
  | "needs_more_information"
  | "duplicate_or_existing_record"
  | "rejected_invalid_payload"
  | "error";

type FormState = {
  contactName: string;
  contactEmail: string;
  roleTitle: string;
  organizationName: string;
  organizationType: string;
  industry: string;
  country: string;
  stateRegion: string;
  city: string;
  primaryGoals: string;
  fundingNeedDescription: string;
  decisionWindow: string;
  handoffApproved: boolean;
  authorizedRepresentative: boolean;
  boundaryAcknowledged: boolean;
  marketingFollowupAllowed: boolean;
};

const initialFormState: FormState = {
  contactName: "",
  contactEmail: "",
  roleTitle: "",
  organizationName: "",
  organizationType: "",
  industry: "",
  country: "",
  stateRegion: "",
  city: "",
  primaryGoals: "",
  fundingNeedDescription: "",
  decisionWindow: "",
  handoffApproved: false,
  authorizedRepresentative: false,
  boundaryAcknowledged: false,
  marketingFollowupAllowed: false,
};

const schemaId = "pivotmarkets-rev2-explore-funding-schema";

const requiredFieldLabels: Array<{ key: keyof FormState; label: string }> = [
  { key: "contactName", label: "Contact name" },
  { key: "contactEmail", label: "Contact email" },
  { key: "organizationName", label: "Organization name" },
  { key: "organizationType", label: "Organization type" },
  { key: "industry", label: "Industry or sector" },
  { key: "country", label: "Country" },
  { key: "primaryGoals", label: "Primary goals" },
  { key: "fundingNeedDescription", label: "Funding need description" },
  { key: "decisionWindow", label: "Decision window" },
  { key: "handoffApproved", label: "Funding Engine handoff approval" },
  { key: "authorizedRepresentative", label: "Authorized representative acknowledgement" },
  { key: "boundaryAcknowledged", label: "Service-boundary acknowledgement" },
];

const responseStates: Array<{ status: HandoffStatus; title: string; meaning: string; uiBehavior: string }> = [
  {
    status: "accepted",
    title: "Accepted",
    meaning: "The Funding Engine received the payload and created or linked the appropriate intake record.",
    uiBehavior: "Show confirmation, thank the visitor, and explain the expected next step.",
  },
  {
    status: "queued",
    title: "Queued",
    meaning: "The Funding Engine accepted the payload and will process it asynchronously.",
    uiBehavior: "Confirm that the organization’s context has entered the review queue.",
  },
  {
    status: "needs_more_information",
    title: "Needs more information",
    meaning: "The Funding Engine cannot begin because required or recommended intake details are missing.",
    uiBehavior: "Display missing fields and return the visitor to the appropriate story section without losing data.",
  },
  {
    status: "duplicate_or_existing_record",
    title: "Duplicate or existing record",
    meaning: "The Funding Engine found an existing organization or session record.",
    uiBehavior: "Show a non-alarming notice that the inquiry has been linked or may receive follow-up.",
  },
  {
    status: "rejected_invalid_payload",
    title: "Rejected invalid payload",
    meaning: "The Funding Engine rejected the payload because the contract was malformed or required fields were invalid.",
    uiBehavior: "Show a respectful correction message while logging technical details internally.",
  },
  {
    status: "error",
    title: "Error",
    meaning: "The Funding Engine could not process the request because of a service or network issue.",
    uiBehavior: "Show retry and contact fallback while preserving entered data.",
  },
];

function splitList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildPayload(form: FormState) {
  return {
    handoffVersion: "rev2-public-intent-v1",
    handoffTimestamp: new Date().toISOString(),
    sourceRoute: "/explore-funding",
    contact: {
      name: form.contactName,
      email: form.contactEmail,
      roleTitle: form.roleTitle || undefined,
    },
    organization: {
      name: form.organizationName,
      type: form.organizationType,
      industry: form.industry,
      geography: {
        country: form.country,
        stateRegion: form.stateRegion || undefined,
        city: form.city || undefined,
      },
    },
    goals: {
      primaryGoals: splitList(form.primaryGoals),
    },
    fundingNeed: {
      description: form.fundingNeedDescription,
    },
    timeline: {
      decisionWindow: form.decisionWindow,
    },
    consent: {
      handoffApproved: form.handoffApproved,
      authorizedRepresentative: form.authorizedRepresentative,
      boundaryAcknowledged: form.boundaryAcknowledged,
      marketingFollowupAllowed: form.marketingFollowupAllowed,
    },
  };
}

function useExploreFundingSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Explore Funding",
        url: "https://pivotmarkets.ai/explore-funding",
        description:
          "Approved public handoff route where organizations review context, confirm authority, acknowledge service boundaries, and authorize Funding Engine transmission.",
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Authorize a PivotMarkets Funding Engine handoff",
        description:
          "A B2B review-and-consent sequence for sending organizational context to the PivotMarkets Funding Engine.",
        step: [
          { "@type": "HowToStep", name: "Review organizational context" },
          { "@type": "HowToStep", name: "Confirm required handoff fields" },
          { "@type": "HowToStep", name: "Acknowledge service boundaries and representative authority" },
          { "@type": "HowToStep", name: "Submit approved handoff" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Explore Funding", item: "https://pivotmarkets.ai/explore-funding" },
        ],
      },
    ];

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.getElementById(schemaId)?.remove();
  }, []);
}

export default function ExploreFunding() {
  useExploreFundingSchema();
  usePageMeta(
    "Explore Funding | Approved Funding Engine Handoff",
    "Review required organizational fields, acknowledgements, and public-safe handoff states before sending context to the PivotMarkets Funding Engine.",
  );
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submittedStatus, setSubmittedStatus] = useState<HandoffStatus | null>(null);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const payloadPreview = useMemo(() => buildPayload(form), [form]);
  const requiredMissing = useMemo(
    () =>
      requiredFieldLabels
        .filter(({ key }) => {
          const value = form[key];
          return typeof value === "boolean" ? !value : value.trim().length === 0;
        })
        .map((field) => field.label),
    [form],
  );

  const updateText = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const updateBoolean = (key: keyof FormState, value: boolean) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (requiredMissing.length > 0) {
      setMissingFields(requiredMissing);
      setSubmittedStatus("needs_more_information");
      return;
    }

    setMissingFields([]);
    setSubmittedStatus("accepted");
  };

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl space-y-6">
              <p className="pm-eyebrow">Explore funding</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Review and approve the Funding Engine handoff.</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                This route is the sole first-release trigger for sending an approved organizational context package to the PivotMarkets Funding Engine. The handoff requires a visible summary, required acknowledgements, and an affirmative click.
              </p>
              <div className="pm-advisory-box max-w-2xl">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-amber)]" aria-hidden="true" />
                  <p className="text-sm leading-7">
                    <strong>Boundary note:</strong> Rev 2 displays only public-safe handoff status and does not reveal internal funding analyses, recommendations, rankings, draft work products, or decision artifacts.
                  </p>
                </div>
              </div>
            </div>

            <aside className="pm-card p-6 md:p-8" aria-label="Approved handoff contract summary">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Contract trigger</p>
                  <h2 className="text-xl font-bold">/explore-funding only</h2>
                </div>
              </div>
              <dl className="mt-6 grid gap-4">
                <div className="rounded-lg border border-border bg-secondary/55 p-4">
                  <dt className="text-sm font-semibold">Required trigger</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">Review summary, required consent, and affirmative click.</dd>
                </div>
                <div className="rounded-lg border border-border bg-secondary/55 p-4">
                  <dt className="text-sm font-semibold">Payload version</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">rev2-public-intent-v1</dd>
                </div>
                <div className="rounded-lg border border-border bg-secondary/55 p-4">
                  <dt className="text-sm font-semibold">Public response handling</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">Six approved response states, no internal Funding Engine output.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="handoff-form-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <form className="pm-card-elevated p-6 md:p-8" onSubmit={handleSubmit}>
              <div className="mb-8">
                <p className="pm-eyebrow">Review summary</p>
                <h2 id="handoff-form-heading" className="mt-3 text-3xl md:text-4xl">Required context before handoff.</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Complete the minimum approved fields and consent acknowledgements. Optional details can improve context quality, but the public site remains a handoff layer only.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Contact name
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.contactName} onChange={(event) => updateText("contactName", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Contact email
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" type="email" value={form.contactEmail} onChange={(event) => updateText("contactEmail", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Role or title <span className="font-normal text-muted-foreground">Optional</span>
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.roleTitle} onChange={(event) => updateText("roleTitle", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Organization name
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.organizationName} onChange={(event) => updateText("organizationName", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Organization type
                  <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.organizationType} onChange={(event) => updateText("organizationType", event.target.value)}>
                    <option value="">Select type</option>
                    <option value="business">Business</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="chamber">Chamber</option>
                    <option value="school">School</option>
                    <option value="local_government">Local government</option>
                    <option value="early_stage_organization">Early-stage organization</option>
                    <option value="established_company">Established company</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Industry or sector
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.industry} onChange={(event) => updateText("industry", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Country
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.country} onChange={(event) => updateText("country", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  State or region <span className="font-normal text-muted-foreground">Recommended</span>
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.stateRegion} onChange={(event) => updateText("stateRegion", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold md:col-span-2">
                  Primary goals <span className="font-normal text-muted-foreground">Separate multiple goals with commas</span>
                  <textarea className="min-h-24 rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.primaryGoals} onChange={(event) => updateText("primaryGoals", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold md:col-span-2">
                  Funding need description
                  <textarea className="min-h-28 rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.fundingNeedDescription} onChange={(event) => updateText("fundingNeedDescription", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Decision window
                  <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.decisionWindow} onChange={(event) => updateText("decisionWindow", event.target.value)}>
                    <option value="">Select timing</option>
                    <option value="immediate">Immediate</option>
                    <option value="30_60_days">30–60 days</option>
                    <option value="this_quarter">This quarter</option>
                    <option value="six_months">Six months</option>
                    <option value="exploratory">Exploratory</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  City <span className="font-normal text-muted-foreground">Optional</span>
                  <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" value={form.city} onChange={(event) => updateText("city", event.target.value)} />
                </label>
              </div>

              <div className="mt-8 space-y-4 rounded-lg border border-[var(--pm-amber)]/35 bg-[var(--pm-amber)]/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--pm-amber)]">Required acknowledgements</p>
                <label className="flex gap-3 text-sm leading-7">
                  <input type="checkbox" checked={form.handoffApproved} onChange={(event) => updateBoolean("handoffApproved", event.target.checked)} className="mt-1 h-4 w-4" />
                  <span>I authorize PivotMarkets Rev 2 to send this organization context to the PivotMarkets Funding Engine so it can be reviewed for funding strategy and qualification workflow purposes.</span>
                </label>
                <label className="flex gap-3 text-sm leading-7">
                  <input type="checkbox" checked={form.authorizedRepresentative} onChange={(event) => updateBoolean("authorizedRepresentative", event.target.checked)} className="mt-1 h-4 w-4" />
                  <span>I confirm that I am authorized to submit this information on behalf of the organization named above, or that I have permission from an authorized representative to begin this funding exploration process.</span>
                </label>
                <label className="flex gap-3 text-sm leading-7">
                  <input type="checkbox" checked={form.boundaryAcknowledged} onChange={(event) => updateBoolean("boundaryAcknowledged", event.target.checked)} className="mt-1 h-4 w-4" />
                  <span>I understand that this public site does not determine eligibility, guarantee funding, create grant applications, or provide final funding decisions. Those steps occur, if appropriate, after handoff to the Funding Engine and any required review process.</span>
                </label>
                <label className="flex gap-3 text-sm leading-7">
                  <input type="checkbox" checked={form.marketingFollowupAllowed} onChange={(event) => updateBoolean("marketingFollowupAllowed", event.target.checked)} className="mt-1 h-4 w-4" />
                  <span>PivotMarkets may contact me about this inquiry and related organizational funding strategy services.</span>
                </label>
              </div>

              {submittedStatus && (
                <div className="mt-6 rounded-lg border border-border bg-secondary/55 p-5" role="status">
                  <div className="flex gap-3">
                    {submittedStatus === "accepted" ? <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--pm-teal)]" aria-hidden="true" /> : <AlertTriangle className="mt-1 h-5 w-5 text-[var(--pm-amber)]" aria-hidden="true" />}
                    <div>
                      <p className="font-bold">{submittedStatus === "accepted" ? "Handoff payload is ready for the Funding Engine connection." : "More information is required before handoff."}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {submittedStatus === "accepted"
                          ? "The approved trigger assembled the versioned payload with required fields and consent. In a connected environment, this is the single point that submits to the Funding Engine."
                          : `Missing fields: ${missingFields.join(", ")}. Your entered data has been preserved for correction.`}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg">Send Organization Context to Funding Engine</Button>
                <Button type="button" variant="outline" size="lg" onClick={() => { setForm(initialFormState); setSubmittedStatus(null); setMissingFields([]); }}>
                  <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                  Reset Review
                </Button>
              </div>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Privacy and terms references should remain available near handoff. Review <Link href="/privacy" className="font-semibold text-primary">Privacy</Link> and <Link href="/terms" className="font-semibold text-primary">Terms</Link> for the service boundary.
              </p>
            </form>

            <aside className="space-y-6">
              <div className="pm-card p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <FileJson className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-bold">Versioned payload preview</h2>
                </div>
                <pre className="mt-5 max-h-[520px] overflow-auto rounded-lg bg-[var(--pm-charcoal)] p-4 text-xs leading-6 text-white/88">
                  {JSON.stringify(payloadPreview, null, 2)}
                </pre>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="response-states-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pm-eyebrow">Funding Engine response semantics</p>
            <h2 id="response-states-heading" className="mt-3 text-3xl md:text-4xl">Six public-safe response states.</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Rev 2 expects operational status only. It does not expose private review methods, decision artifacts, advisory work products, or draft funding materials.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {responseStates.map((state) => (
              <article key={state.status} className="pm-card p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{state.status}</p>
                <h3 className="mt-2 text-lg font-bold">{state.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{state.meaning}</p>
                <p className="mt-3 border-t border-border pt-3 text-sm leading-7 text-muted-foreground">{state.uiBehavior}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
