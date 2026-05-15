import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, Send, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-how-it-works-schema";

const steps = [
  {
    icon: FileText,
    title: "Create the organizational story",
    text: "The organization shares its identity, goals, operating context, geography, funding need, use of funds, timeline, and contact authority.",
  },
  {
    icon: ClipboardCheck,
    title: "Review the context package",
    text: "The public site presents the information back as a structured summary so leadership can confirm the story before funding intent is submitted.",
  },
  {
    icon: ShieldCheck,
    title: "Confirm funding intent and consent",
    text: "The Explore Funding route shows required acknowledgements and requires an affirmative action before the Funding Engine handoff can occur.",
  },
  {
    icon: Send,
    title: "Send to the Funding Engine boundary",
    text: "After consent, Rev 2 sends the approved context package to the Funding Engine and displays only public-safe response states.",
  },
];

const boundaryAnswers = [
  {
    question: "Does the public site evaluate grants?",
    answer: "No. Rev 2 collects and hands off organizational context only. Funding Engine review happens after explicit consent.",
  },
  {
    question: "Is the handoff automatic?",
    answer: "No. The visitor must review the summary, accept required acknowledgements, and click the handoff button.",
  },
  {
    question: "What does leadership gain before handoff?",
    answer: "A disciplined summary of organizational context that can be checked before downstream funding strategy workflow begins.",
  },
];

function useHowItWorksSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How PivotMarkets Rev 2 prepares organizational context for funding strategy review",
        description:
          "Create an organizational story, review the context package, confirm funding intent, and approve handoff to the PivotMarkets Funding Engine.",
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.text,
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "How It Works",
        url: "https://pivotmarkets.ai/how-it-works",
        description:
          "How PivotMarkets Rev 2 prepares organizational context before approved Funding Engine handoff.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: boundaryAnswers.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "How It Works", item: "https://pivotmarkets.ai/how-it-works" },
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

export default function HowItWorks() {
  usePageMeta(
    "How PivotMarkets Works | B2B Funding Workflow Preparation",
    "See how PivotMarkets Rev 2 guides organizations from story preparation to explicit consent before Funding Engine handoff.",
  );
  useHowItWorksSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-7">
            <p className="pm-eyebrow">How it works</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Story, review, consent, and Funding Engine handoff.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              PivotMarkets Rev 2 gives organizations a transparent public flow for preparing context before funding strategy workflow review begins. The public site does not silently submit information or determine eligibility.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="flow-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pm-eyebrow">The public flow</p>
            <h2 id="flow-heading" className="mt-3 text-3xl md:text-4xl">
              A clear sequence before anything is handed off.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Each step exists to make the organization’s context more complete and to keep the Funding Engine boundary visible to the visitor.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="pm-card-elevated p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Step {index + 1}</p>
                      <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="boundary-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Boundary clarity</p>
              <h2 id="boundary-heading" className="mt-3 text-3xl md:text-4xl">
                Rev 2 prepares context. The Funding Engine handles downstream workflow.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                This separation protects the public user experience from overclaiming. It also helps organizational decision-makers understand when their information leaves the public site and why consent is required.
              </p>
              <Button className="mt-7" asChild>
                <Link href="/success-story">
                  Create Organizational Story
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {boundaryAnswers.map((item) => (
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
    </PublicLayout>
  );
}
