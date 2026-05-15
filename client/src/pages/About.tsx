import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, FileCheck2, Scale, ShieldCheck, Users } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-about-schema";

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Clear service boundaries",
    text: "PivotMarkets Rev 2 prepares organizational context. It does not determine eligibility, guarantee funding, or replace downstream Funding Engine review.",
  },
  {
    icon: FileCheck2,
    title: "Structured organizational context",
    text: "The public site helps leadership collect goals, funding needs, geography, timeline, and contact authority in one disciplined story package.",
  },
  {
    icon: Scale,
    title: "Responsible funding exploration",
    text: "The workflow is designed around review, consent, transparent handoff, and no unsupported funding promises.",
  },
];

const operatingModel = [
  "A public website that explains the process and collects organizational context.",
  "A review-and-consent step before any context is sent to the PivotMarkets Funding Engine.",
  "A protected boundary that keeps internal Funding Engine outputs out of the public Rev 2 experience.",
];

function useAboutSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About PivotMarkets",
        url: "https://pivotmarkets.ai/about",
        description:
          "PivotMarkets helps organizations prepare structured context before funding strategy workflow review.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PivotMarkets",
        url: "https://pivotmarkets.ai",
        description:
          "An AI-assisted funding strategy platform focused on organizational context preparation before Funding Engine handoff.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://pivotmarkets.ai/about" },
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

export default function About() {
  usePageMeta(
    "About PivotMarkets | Organizational Funding Strategy Preparation",
    "Learn how PivotMarkets helps organizations prepare context, confirm authority, and preserve the Funding Engine handoff boundary.",
  );
  useAboutSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-7">
            <p className="pm-eyebrow">About PivotMarkets</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              A disciplined starting point for organizational funding strategy.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              PivotMarkets helps organizations prepare the context a funding strategy workflow needs: who the organization is, what it is trying to accomplish, where it operates, what it needs funded, and who is authorized to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="trust-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Decision-maker question</p>
              <h2 id="trust-heading" className="mt-3 text-3xl md:text-4xl">
                Why should leadership trust the process?
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The public Rev 2 site is intentionally transparent. It explains its responsibility, collects only the context needed to begin funding exploration, and requires explicit consent before the Funding Engine receives the organization’s information.
              </p>
            </div>
            <div className="grid gap-5">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="pm-card p-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{pillar.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="model-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="pm-card-elevated p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="pm-eyebrow">Who it serves</p>
                  <h2 id="model-heading" className="mt-1 text-2xl md:text-3xl">Organizations preparing to explore funding.</h2>
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                PivotMarkets is designed for businesses, nonprofits, chambers, schools, civic entities, and leadership teams that need a clearer way to organize their funding story before deeper strategy work begins.
              </p>
            </div>

            <div>
              <p className="pm-eyebrow">Operating model</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Public context preparation, then approved handoff.</h2>
              <div className="mt-6 grid gap-4">
                {operatingModel.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground" aria-labelledby="about-cta-heading">
        <div className="container py-14 md:py-16">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Next step</p>
              <h2 id="about-cta-heading" className="mt-3 text-3xl text-white md:text-4xl">
                See how the public flow protects the handoff boundary.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                Review the story, consent, and Funding Engine handoff sequence before your team begins.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
