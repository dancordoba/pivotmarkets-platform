import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, FileText, Scale, ShieldAlert, UserCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-terms-schema";

const serviceBoundaries = [
  "PivotMarkets Rev 2 helps visitors prepare organizational context for potential funding strategy workflow review.",
  "The public site does not determine eligibility, guarantee funding, create grant applications, or issue final funding decisions.",
  "The Funding Engine may receive the organization context package only after the visitor completes the approved handoff consent flow.",
  "Visitors are responsible for submitting accurate information and confirming they are authorized to act for the named organization.",
];

const responsibilityCards = [
  {
    icon: UserCheck,
    title: "Authorized submissions",
    text: "Visitors should submit organizational information only when they are authorized to do so or have permission from an authorized representative.",
  },
  {
    icon: ShieldAlert,
    title: "No public-site eligibility decision",
    text: "Rev 2 may help prepare context, but it does not display internal funding analyses, recommendations, rankings, draft work products, decision artifacts, or Funding Engine private outputs.",
  },
  {
    icon: FileText,
    title: "Information accuracy",
    text: "Organizations should review their context package before handoff and correct missing or inaccurate information before submitting it to the Funding Engine workflow.",
  },
];

function useTermsSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "TermsOfService",
        name: "PivotMarkets Terms of Service",
        url: "https://pivotmarkets.ai/terms",
        description:
          "Terms for using PivotMarkets Rev 2 to prepare organizational context before approved Funding Engine handoff.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Terms", item: "https://pivotmarkets.ai/terms" },
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

export default function Terms() {
  usePageMeta(
    "PivotMarkets Terms | B2B Public Site Service Boundaries",
    "Review the B2B public-site terms for organizational context preparation, consent, and Funding Engine handoff boundaries.",
  );
  useTermsSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-7">
            <p className="pm-eyebrow">Terms</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Service boundaries for using PivotMarkets Rev 2.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              These terms explain the public site’s role: helping organizations prepare context, review their information, and authorize a Funding Engine handoff when they choose to explore funding strategy workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="terms-question-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Decision-maker question</p>
              <h2 id="terms-question-heading" className="mt-3 text-3xl md:text-4xl">
                What responsibilities apply when our organization uses the public site?
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Organizations should use the public site as a context-preparation and inquiry tool. The site is not a grant-awarding authority, formal application portal, eligibility engine, or final funding decision system.
              </p>
            </div>

            <article className="pm-card-elevated p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Scale className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Public-site terms support boundary clarity.</h3>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    PivotMarkets Rev 2 can collect and prepare organizational information, but the Funding Engine workflow begins only after the approved consent and affirmative handoff action on `/explore-funding`.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="boundaries-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="pm-eyebrow">Core service boundaries</p>
            <h2 id="boundaries-heading" className="mt-3 text-3xl md:text-4xl">
              What PivotMarkets Rev 2 does and does not do.
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {serviceBoundaries.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="responsibilities-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="pm-eyebrow">User responsibility</p>
            <h2 id="responsibilities-heading" className="mt-3 text-3xl md:text-4xl">
              Responsible use for organizational decision-makers.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              The first-release terms are written for a B2B platform handling organizational context and funding strategy workflow boundaries.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {responsibilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="pm-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-[var(--pm-amber)]/30 bg-[var(--pm-amber)]/10 p-6">
            <h3 className="text-xl font-bold text-foreground">Handoff acknowledgement alignment</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The terms align with the `/explore-funding` acknowledgements: the visitor authorizes transmission to the PivotMarkets Funding Engine, confirms representative authority, and acknowledges that the public site does not determine eligibility, guarantee funding, create applications, or provide final funding decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground" aria-labelledby="terms-cta-heading">
        <div className="container py-14 md:py-16">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Ready to review the handoff?</p>
              <h2 id="terms-cta-heading" className="mt-3 text-3xl text-white md:text-4xl">
                The Funding Engine handoff is affirmative, not automatic.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                Review the required fields and consent language before submitting organizational context.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/explore-funding">Explore Funding</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
