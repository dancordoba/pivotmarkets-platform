import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Building2, CalendarClock, Globe2, Mail, Target, WalletCards } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/pageMeta";

const schemaId = "pivotmarkets-rev2-success-story-schema";

const storySections = [
  {
    icon: Building2,
    title: "Organization identity",
    text: "Name, organization type, sector, website if available, and the role of the person preparing the story.",
  },
  {
    icon: Target,
    title: "Goals and operating context",
    text: "What the organization is trying to accomplish and why funding strategy matters now.",
  },
  {
    icon: Globe2,
    title: "Geography and service area",
    text: "Country, state or region, and local context when that information helps frame the funding need.",
  },
  {
    icon: WalletCards,
    title: "Funding need and use of funds",
    text: "A plain-language explanation of the need, intended use, and optional directional amount range.",
  },
  {
    icon: CalendarClock,
    title: "Timeline and decision window",
    text: "Whether the organization is acting immediately, this quarter, within six months, or still exploring.",
  },
  {
    icon: Mail,
    title: "Contact authority",
    text: "The responsible contact who can confirm the information and authorize next steps when ready.",
  },
];

const requiredFields = [
  "Contact name and email",
  "Organization name, type, industry, and country",
  "Primary goals and funding need description",
  "Decision window and required handoff consent",
];

function useSuccessStorySchema() {
  useEffect(() => {
    document.getElementById(schemaId)?.remove();

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Create Organizational Story",
        url: "https://pivotmarkets.ai/success-story",
        description:
          "A structured public intake route for preparing organizational context before funding strategy workflow review.",
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        contactType: "organizational funding strategy inquiry",
        url: "https://pivotmarkets.ai/contact",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },
          { "@type": "ListItem", position: 2, name: "Create Organizational Story", item: "https://pivotmarkets.ai/success-story" },
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

export default function SuccessStory() {
  usePageMeta(
    "Create Organizational Story | PivotMarkets Funding Strategy",
    "Prepare organization identity, goals, geography, funding need, timeline, and authority context before exploring funding strategy.",
  );
  useSuccessStorySchema();

  return (
    <PublicLayout>
      <section className="pm-hero-gradient border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-4xl space-y-7">
              <p className="pm-eyebrow">Create organizational story</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Prepare the context your funding strategy workflow needs.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                This route frames the information an organization should prepare before choosing to explore funding. It is a story-building path, not a grant application, qualification test, or funding decision tool.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/explore-funding">
                    Review Funding Handoff
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">Review the Process</Link>
                </Button>
              </div>
            </div>

            <aside className="pm-advisory-box">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-amber)]">Important boundary</p>
              <h2 className="mt-3 text-2xl">This is not a grant application.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The public site helps prepare context only. Any downstream funding strategy review occurs after the visitor explicitly approves handoff to the PivotMarkets Funding Engine.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="pm-section bg-background" aria-labelledby="story-sections-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pm-eyebrow">What the story should contain</p>
            <h2 id="story-sections-heading" className="mt-3 text-3xl md:text-4xl">
              A useful funding story is structured, specific, and authorized.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              The goal is to give the organization and the Funding Engine a clear starting point without turning the public website into a formal funding application.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {storySections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="pm-card-elevated p-6">
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

      <section className="pm-section pm-section-soft border-y border-border" aria-labelledby="required-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="pm-eyebrow">Minimum required context</p>
              <h2 id="required-heading" className="mt-3 text-3xl md:text-4xl">
                Keep the first release focused on what the handoff needs.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The approved first-release flow should block submission only when essential story or consent fields are missing. Optional detail can improve review quality, but it should not make the public site feel like an application portal.
              </p>
            </div>
            <div className="pm-card p-6 md:p-7">
              <h3 className="text-xl font-bold">Required before handoff</h3>
              <ul className="mt-5 grid gap-4">
                {requiredFields.map((field) => (
                  <li key={field} className="flex gap-3 rounded-lg border border-border bg-secondary/55 p-4 text-sm leading-7 text-muted-foreground">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--pm-teal)]" aria-hidden="true" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
