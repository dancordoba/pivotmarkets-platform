import type { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const primaryNavItems = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/success-story", label: "Success Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const footerGroups = [
  {
    title: "Platform",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/newsroom", label: "Newsroom" },
    ],
  },
  {
    title: "Funding Flow",
    links: [
      { href: "/success-story", label: "Create Organizational Story" },
      { href: "/explore-funding", label: "Explore Funding" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3 pm-focus-ring rounded-lg" aria-label="PivotMarkets home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
        PM
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-[-0.02em] text-foreground">PivotMarkets</span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Funding Strategy</span>
      </span>
    </Link>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/88">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-6">
          <BrandMark />

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary pm-focus-ring rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" asChild>
              <Link href="/explore-funding">Explore Funding</Link>
            </Button>
            <Button asChild>
              <Link href="/success-story">Create Organizational Story</Link>
            </Button>
          </div>

          <details className="relative lg:hidden">
            <summary className="list-none rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground pm-focus-ring">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-lg border border-border bg-card p-4 shadow-lg">
              <div className="grid gap-2">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-primary" href="/explore-funding">
                  Explore Funding
                </Link>
                <Button className="mt-2 w-full" asChild>
                  <Link href="/success-story">Create Organizational Story</Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--pm-charcoal)] text-white">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-primary">PM</span>
              <div>
                <p className="text-base font-bold leading-tight text-white">PivotMarkets</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/62">AI-assisted funding strategy</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/72">
              PivotMarkets Rev 2 helps organizations prepare structured context before funding strategy workflow review. The public site collects and hands off context only; it does not determine eligibility or guarantee funding.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/72 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/58 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PivotMarkets. All rights reserved.</p>
          <p>Organizational context preparation for funding strategy workflows.</p>
        </div>
      </div>
    </footer>
  );
}

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
