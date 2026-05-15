import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Landmark, Layers3, ShieldCheck, Users } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const decisionMakerQuestions = [
  {
    question: "What does PivotMarkets do?",
    answer:
      "PivotMarkets helps organizations prepare a structured context package before entering a funding strategy workflow.",
  },
  {
    question: "Who is it for?",
    answer:
      "It is designed for businesses, nonprofits, chambers, schools, local entities, and leadership teams evaluating funding strategy.",
  },
  {
    question: "Does the public site decide eligibility?",
    answer:
      "No. Rev 2 collects and hands off organizational context only. Funding Engine review happens after explicit consent.",
  },
];

const audienceCards = [
  {
    icon: Landmark,
    title: "Organizations with strategic funding needs",
    text: "Clarify goals, geography, use of funds, and timing before deeper funding strategy work begins.",
  },
  {
    icon: Users,
    title: "Leadership teams and authorized contacts",
    text: "Prepare a responsible story package that can be reviewed internally before handoff.",
  },
  {
    icon: FileText,
    title: "Nonprofits, businesses, and civic partners",
    text: "Describe mission, operating model, project needs, and funding intent in one structured flow.",
  },
];

const processSteps = [
  {
    title: "Create the organizational story",
    text: "Share the organization’s identity, mission, goals, funding need, geography, and timeline.",
  },
  {
    title: "Review the context package",
    text: "Confirm that the public-site summary accurately represents the organization before moving forward.",
  },
  {
    title: "Approve funding intent",
    text: "Use the Explore Funding route to see the handoff summary and required acknowledgement language.",
  },
  {
    title: "Send to the Funding Engine",
    text: "After affirmative consent, Rev 2 sends the context package to the Funding Engine workflow boundary.",
  },
];

const schemaId = "pivotmarkets-rev2-home-schema";

function useHomeSchema() {
  useEffect(() => {
    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PivotMarkets",
        url: "https://pivotmarkets.ai",
        description:
          "PivotMarkets helps organizations prepare structured context packages for funding strategy workflow review.",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "PivotMarkets",
        url: "https://pivotmarkets.ai",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://pivotmarkets.ai/faq?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "PivotMarkets | AI-Assisted Funding Strategy for Organizations",
        url: "https://pivotmarkets.ai/",
        description:
          "PivotMarkets Rev 2 helps organizations create a structured story and approve context handoff to the PivotMarkets Funding Engine.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: decisionMakerQuestions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ];

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);
}

export default function Home() {
  usePageMeta(
    "PivotMarkets | B2B Funding Strategy Context Preparation",
    "PivotMarkets helps organizations prepare structured context for B2B funding strategy workflows before approved Funding Engine handoff.",
  );
  useHomeSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <p className="pm-eyebrow">AI-assisted funding strategy for organizations</p>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                  Prepare your organization’s context before funding strategy review begins.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  PivotMarkets helps organizational decision-makers turn goals, funding needs, geography, timing, and authority into a structured context package that can be handed off to the PivotMarkets Funding Engine after explicit consent.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/success-story">
                    Create Organizational Story
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>

              <div className="pm-advisory-box max-w-2xl">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-amber)]" aria-hidden="true" />
                  <p className="text-sm leading-7">
                    <strong>Boundary note:</strong> The Rev 2 public site does not determine eligibility, guarantee funding, create applications, or display internal Funding Engine outputs. It prepares and sends organizational context only after affirmative consent.
                  </p>
                </div>
              </div>
            </div>

            <aside className="pm-card p-6 md:p-8" aria-label="PivotMarkets summary">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Layers3 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Rev 2 workflow</p>
                    <h2 className="text-xl font-bold">Context before handoff</h2>
                  </div>
                </div>

                <dl className="grid gap-4">
                  <div className="rounded-lg border border-border bg-secondary/55 p-4">
                    <dt className="text-sm font-semibold text-foreground">Public site responsibility</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted-foreground">Collect a clear organizational story and confirm funding intent.</dd>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/55 p-4">
                    <dt className="text-sm font-semibold text-foreground">Funding Engine boundary</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted-foreground">Receive the approved context package and manage downstream workflow states.</dd>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/55 p-4">
                    <dt className="text-sm font-semibold text-foreground">Decision-maker value</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted-foreground">Give leadership a disciplined starting point before deeper funding strategy work begins.</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="value-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pm-eyebrow">What PivotMarkets does</p>
            <h2 id="value-heading" className="mt-3 text-3xl md:text-4xl">
              A structured starting point for organizational funding exploration.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Many organizations begin funding conversations with scattered details across emails, decks, budgets, and leadership discussions. PivotMarkets Rev 2 gives that context a disciplined public intake path before any Funding Engine workflow begins.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="pm-card-elevated p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="process-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">How the public flow works</p>
              <h2 id="process-heading" className="mt-3 text-3xl md:text-4xl">
                Story, review, consent, handoff.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The public site is intentionally simple. It helps the organization prepare a context package and then requires a clear review-and-consent step before anything is sent to the Funding Engine.
              </p>
              <Button className="mt-7" variant="outline" asChild>
                <Link href="/explore-funding">Review the Handoff Path</Link>
              </Button>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="pm-card p-5 md:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="answers-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Decision-maker answers</p>
              <h2 id="answers-heading" className="mt-3 text-3xl md:text-4xl">
                Clear answers before your team starts.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The homepage is written to answer the first questions a board member, founder, executive director, chamber leader, or operations lead is likely to ask before sharing organizational information.
              </p>
            </div>

            <div className="grid gap-4">
              {decisionMakerQuestions.map((item) => (
                <article key={item.question} className="pm-card p-5 md:p-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-bold">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Begin with context</p>
              <h2 id="cta-heading" className="mt-3 text-3xl text-white md:text-4xl">
                Prepare the story your funding strategy workflow needs.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                Start with the organization’s goals, need, timeline, and authority. The handoff does not happen until the review summary and consent step are complete.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/success-story">Create Organizational Story</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/faq">Read FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
