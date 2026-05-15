import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const faqItems = [
  {
    question: "What is PivotMarkets?",
    answer:
      "PivotMarkets is an AI-assisted funding strategy platform that helps organizations prepare structured context for funding exploration before any Funding Engine workflow begins.",
  },
  {
    question: "Who does PivotMarkets serve?",
    answer:
      "PivotMarkets serves organizations such as businesses, nonprofits, chambers, schools, local entities, and leadership teams evaluating funding strategy.",
  },
  {
    question: "Does PivotMarkets guarantee funding?",
    answer:
      "No. PivotMarkets Rev 2 does not guarantee funding, determine eligibility, create grant applications, or make award decisions.",
  },
  {
    question: "What is an organizational story?",
    answer:
      "An organizational story is a structured explanation of the organization, goals, funding need, geography, timeline, and contact authority.",
  },
  {
    question: "What happens after I explore funding?",
    answer:
      "After explicit consent, Rev 2 sends the approved context package to the PivotMarkets Funding Engine, which handles downstream workflow states.",
  },
  {
    question: "Does the public site evaluate grants?",
    answer:
      "No. The public Rev 2 site collects and hands off context only. It does not display matches, scores, eligibility determinations, or internal Funding Engine outputs.",
  },
  {
    question: "What information is required before handoff?",
    answer:
      "The minimum handoff fields are contact name and email, organization name, organization type, industry, country, primary goals, funding need description, decision window, and required consent acknowledgements.",
  },
  {
    question: "How is our information used?",
    answer:
      "Information is used to support the organizational story flow, contact follow-up where permitted, and the approved Funding Engine handoff after affirmative consent.",
  },
];

const schemaId = "pivotmarkets-rev2-faq-schema";

function useFaqSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "FAQ", item: "https://pivotmarkets.ai/faq" },
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

export default function Faq() {
  usePageMeta(
    "PivotMarkets FAQ | B2B Funding Strategy Boundaries",
    "Answers for organizational decision-makers about PivotMarkets Rev 2, context preparation, consent, and Funding Engine handoff boundaries.",
  );
  useFaqSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pm-eyebrow">Frequently asked questions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Clear answers for organizational decision-makers.</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              The FAQ explains what PivotMarkets Rev 2 does, what it does not do, what information is required, and how the Funding Engine handoff boundary works.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="faq-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <aside className="pm-card p-6 md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 id="faq-heading" className="mt-5 text-3xl">What should leadership know first?</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                PivotMarkets Rev 2 is a disciplined public intake layer. It helps teams prepare context and gives the Funding Engine a clearer starting point after consent.
              </p>
              <div className="pm-advisory-box mt-6">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-amber)]" aria-hidden="true" />
                  <p className="text-sm leading-7">
                    <strong>No guarantee:</strong> The public site does not determine eligibility, guarantee funding, or create funding applications.
                  </p>
                </div>
              </div>
              <Button className="mt-7 w-full" asChild>
                <Link href="/success-story">Create Organizational Story</Link>
              </Button>
            </aside>

            <div className="grid gap-4">
              {faqItems.map((item) => (
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
