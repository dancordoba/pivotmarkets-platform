import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Building2, CheckCircle2, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const inquiryReasons = [
  "Questions before starting an organizational story",
  "Partnership or institutional conversation",
  "Help understanding the Funding Engine handoff boundary",
  "General business inquiry for PivotMarkets",
];

const schemaId = "pivotmarkets-rev2-contact-schema";

function useContactSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact PivotMarkets",
        url: "https://pivotmarkets.ai/contact",
        description: "Contact PivotMarkets for organizational funding strategy inquiries and questions about the Rev 2 story flow.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PivotMarkets",
        url: "https://pivotmarkets.ai",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "business inquiries",
          areaServed: "Organizations evaluating funding strategy",
          availableLanguage: "English",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://pivotmarkets.ai/contact" },
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

export default function Contact() {
  usePageMeta(
    "Contact PivotMarkets | Organizational Funding Strategy Inquiry",
    "Contact PivotMarkets for professional organizational inquiries, partnership questions, and Funding Engine boundary clarification.",
  );
  useContactSchema();
  const [submitted, setSubmitted] = useState(false);

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl space-y-6">
              <p className="pm-eyebrow">Contact PivotMarkets</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">A business inquiry path for organizations.</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Use this route if your organization needs a conversation before starting the story flow, has partnership questions, or wants help understanding the public-site handoff boundary.
              </p>
            </div>

            <aside className="pm-card p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Inquiry boundary</p>
                  <h2 className="text-xl font-bold">Contact does not bypass review</h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Contacting PivotMarkets is not a funding approval path. It is a professional inquiry route for organizational questions and support before or instead of the structured story flow.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <aside className="space-y-6">
              <div className="pm-card p-6 md:p-8">
                <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-3xl">When to contact PivotMarkets.</h2>
                <div className="mt-6 grid gap-4">
                  {inquiryReasons.map((reason) => (
                    <div key={reason} className="flex gap-3 rounded-lg border border-border bg-secondary/55 p-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                      <p className="text-sm leading-7 text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pm-advisory-box">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-amber)]" aria-hidden="true" />
                  <p className="text-sm leading-7">
                    <strong>Service boundary:</strong> Contact inquiries do not create applications, determine eligibility, or send organizational context to the Funding Engine. Use <Link href="/explore-funding" className="font-semibold text-primary">Explore Funding</Link> for the approved handoff path.
                  </p>
                </div>
              </div>
            </aside>

            <form
              className="pm-card-elevated p-6 md:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="mb-8">
                <p className="pm-eyebrow">Organizational inquiry</p>
                <h2 id="contact-form-heading" className="mt-3 text-3xl md:text-4xl">Send a professional inquiry.</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  This form captures business inquiry context only. It should not be used to claim funding approval or bypass the Funding Engine handoff workflow.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input required className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input required type="email" className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Organization
                  <input required className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Inquiry type
                  <select required className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" defaultValue="">
                    <option value="" disabled>Select inquiry type</option>
                    <option>Story flow question</option>
                    <option>Partnership inquiry</option>
                    <option>Funding Engine boundary question</option>
                    <option>General business inquiry</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold md:col-span-2">
                  Message
                  <textarea required className="min-h-32 rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal pm-focus-ring" />
                </label>
              </div>

              {submitted && (
                <div className="mt-6 rounded-lg border border-border bg-secondary/55 p-5" role="status">
                  <div className="flex gap-3">
                    <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-[var(--pm-teal)]" aria-hidden="true" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      Inquiry captured in the local page flow for this release review. Production submission behavior can be connected to the approved contact infrastructure after the route batch is accepted.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg">Submit Inquiry</Button>
                <Button type="button" variant="outline" size="lg" asChild>
                  <Link href="/success-story">Start Story Instead</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
