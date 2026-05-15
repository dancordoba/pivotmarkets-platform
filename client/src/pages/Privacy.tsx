import { useEffect } from "react";
import { Link } from "wouter";
import { Database, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-privacy-schema";

const dataCategories = [
  "Contact details such as name, email address, and organizational role.",
  "Organization profile information such as name, type, industry, website, geography, and size ranges when provided.",
  "Organizational story context such as goals, funding need description, planned use of funds, timeline, and known deadlines.",
  "Consent records connected to Funding Engine handoff authorization, authorized representative acknowledgement, boundary acknowledgement, and optional follow-up permission.",
  "Session, user, referral, and UTM metadata when available to support continuity, attribution, and operational review.",
];

const useCases = [
  {
    icon: FileCheck2,
    title: "Support the story flow",
    text: "Information is used to help the visitor assemble a structured organizational context package before funding strategy workflow review.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare approved handoff",
    text: "Organization context may be sent to the PivotMarkets Funding Engine only after the visitor completes the required handoff acknowledgements and affirmative submission step.",
  },
  {
    icon: LockKeyhole,
    title: "Enable appropriate follow-up",
    text: "PivotMarkets may use inquiry details for operational follow-up, and optional marketing follow-up is treated separately from required handoff authorization.",
  },
];

function usePrivacySchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        name: "PivotMarkets Privacy Policy",
        url: "https://pivotmarkets.ai/privacy",
        description:
          "Privacy information for PivotMarkets Rev 2 organizational context collection and approved Funding Engine handoff.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Privacy", item: "https://pivotmarkets.ai/privacy" },
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

export default function Privacy() {
  usePageMeta(
    "PivotMarkets Privacy | Organizational Context Data Handling",
    "Understand how PivotMarkets Rev 2 collects, uses, and hands off organizational context data after affirmative consent.",
  );
  usePrivacySchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-7">
            <p className="pm-eyebrow">Privacy</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              How PivotMarkets handles organizational context data.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              PivotMarkets Rev 2 collects organizational information to support context preparation, inquiry follow-up, and an approved Funding Engine handoff only after the visitor provides affirmative consent.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="privacy-question-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Decision-maker question</p>
              <h2 id="privacy-question-heading" className="mt-3 text-3xl md:text-4xl">
                How is our organization’s information collected, used, and shared?
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The public site collects information the organization chooses to provide during the story, contact, and funding-intent flows. The Funding Engine receives the organizational context package only when the visitor authorizes handoff on `/explore-funding` and confirms the required acknowledgements.
              </p>
            </div>

            <article className="pm-card-elevated p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Database className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Context preparation before handoff.</h3>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    Rev 2 does not silently send organizational context to the Funding Engine. The visitor must review the payload, approve the handoff, confirm representative authority, acknowledge the public-site boundary, and click the affirmative handoff button.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="data-collected-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="pm-eyebrow">Information collected</p>
            <h2 id="data-collected-heading" className="mt-3 text-3xl md:text-4xl">
              Categories of organizational context data.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              First-release data handling is designed around business and organizational context, with no hidden public-site eligibility scoring.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {dataCategories.map((category) => (
              <div key={category} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                <p className="text-sm leading-7 text-muted-foreground">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="use-sharing-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="pm-eyebrow">Use and sharing</p>
            <h2 id="use-sharing-heading" className="mt-3 text-3xl md:text-4xl">
              What the information supports.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="pm-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-[var(--pm-amber)]/30 bg-[var(--pm-amber)]/10 p-6">
            <h3 className="text-xl font-bold text-foreground">Funding Engine handoff consent</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The `/explore-funding` route requires the visitor to authorize sending organization context to the PivotMarkets Funding Engine, confirm they are authorized to submit information on behalf of the organization, and acknowledge that Rev 2 does not determine eligibility, guarantee funding, create grant applications, or provide final funding decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground" aria-labelledby="privacy-cta-heading">
        <div className="container py-14 md:py-16">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Review before handoff</p>
              <h2 id="privacy-cta-heading" className="mt-3 text-3xl text-white md:text-4xl">
                See the public handoff review screen.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                The handoff route shows the context package and consent acknowledgements before any Funding Engine submission can occur.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/explore-funding">Review Explore Funding</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
