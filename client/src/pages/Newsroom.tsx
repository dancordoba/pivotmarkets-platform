import { useEffect } from "react";
import { Link } from "wouter";
import { CalendarClock, FileText, Megaphone, ShieldCheck } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-newsroom-schema";

const futureSections = [
  {
    icon: Megaphone,
    title: "Platform updates",
    text: "Future official updates about PivotMarkets Rev 2, public site changes, and approved Funding Engine handoff improvements will be published here.",
  },
  {
    icon: FileText,
    title: "Funding intelligence notes",
    text: "Approved educational notes may be added later to explain funding strategy concepts without implying funding-fit determinations, qualification outcomes, or award decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Organizational strategy briefs",
    text: "Future briefs may help leadership teams understand organizational context preparation and responsible funding exploration boundaries.",
  },
];

function useNewsroomSchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "PivotMarkets Newsroom",
        url: "https://pivotmarkets.ai/newsroom",
        description:
          "Official PivotMarkets announcements and approved platform updates will appear here over time.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PivotMarkets",
        url: "https://pivotmarkets.ai",
        description:
          "An AI-assisted funding strategy platform that helps organizations prepare structured context before Funding Engine handoff.",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://pivotmarkets.ai/newsroom" },
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

export default function Newsroom() {
  usePageMeta(
    "PivotMarkets Newsroom | Official B2B Platform Updates",
    "Official PivotMarkets updates for organizational funding strategy, public-site changes, and approved Funding Engine handoff information.",
  );
  useNewsroomSchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-7">
            <p className="pm-eyebrow">Newsroom</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Official PivotMarkets updates will appear here as they are approved.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              This newsroom is an authority placeholder for future announcements, platform updates, and approved public insights. It does not contain fabricated articles, media mentions, social proof, or undocumented funding claims.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="newsroom-purpose-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Decision-maker question</p>
              <h2 id="newsroom-purpose-heading" className="mt-3 text-3xl md:text-4xl">
                Where can leadership find official PivotMarkets announcements?
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Official announcements, approved platform updates, and future public insights will be collected on this page. Until those materials are approved, the page remains intentionally transparent and does not present fictional press coverage or article inventory.
              </p>
            </div>

            <article className="pm-card-elevated p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <CalendarClock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Authority placeholder only.</h3>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    PivotMarkets will use this route for official public material when content has been reviewed and approved. No articles, press mentions, customer outcomes, or funding results are being claimed on this first-release page.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="future-content-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="pm-eyebrow">Future content categories</p>
            <h2 id="future-content-heading" className="mt-3 text-3xl md:text-4xl">
              What may be published later.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              These categories describe future content areas only. They are not placeholders for fabricated posts, media coverage, or unverified social proof.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {futureSections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="pm-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground" aria-labelledby="newsroom-cta-heading">
        <div className="container py-14 md:py-16">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Need current information?</p>
              <h2 id="newsroom-cta-heading" className="mt-3 text-3xl text-white md:text-4xl">
                Contact PivotMarkets for approved organizational inquiries.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                Organizations that need current information can use the contact route rather than relying on unapproved or speculative newsroom content.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact PivotMarkets</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
