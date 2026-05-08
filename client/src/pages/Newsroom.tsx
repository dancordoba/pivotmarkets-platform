import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Newsroom() {
  useEffect(() => {
    // Inject NewsArticle schema for Google News
    const newsSchema = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'PivotMarkets.ai Launches Sovereign AI Infrastructure for Indiana\'s 2026 IN AI Initiative',
      description: 'PivotMarkets.ai announces comprehensive sovereign AI infrastructure platform designed to equip Indiana\'s workforce, secure regional data, and drive economic resilience.',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663058534789/OlpFzXnIRSDbgeuV.png',
      datePublished: new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'PivotMarkets.ai',
        url: 'https://pivotmarkets.ai'
      },
      publisher: {
        '@type': 'Organization',
        name: 'PivotMarkets.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663058534789/OlpFzXnIRSDbgeuV.png'
        }
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'PivotMarkets.ai',
        description: 'Technical Service Provider aligned with Indiana\'s 2026 IN AI Initiative',
        url: 'https://pivotmarkets.ai',
        sameAs: [
          'https://github.com/pivotmarkets/sovereign-ai',
          'https://www.cicpindiana.com/',
          'https://iedc.in.gov/program/in-ai'
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(newsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const newsArticles = [
    {
      id: 1,
      title: 'The Nappanee Protocol: Anchoring Indiana\'s Industry in the 2026 Stanford AI Benchmarks',
      date: 'May 6, 2026',
      author: 'PivotMarkets Editorial Team',
      excerpt: 'How sovereign AI infrastructure grounded in peer-reviewed research transforms regional manufacturing through data sovereignty, optimized workflows, and institutional knowledge.',
      category: 'Sovereign Protocol',
      link: '/nappanee',
      featured: true
    },
    {
      id: 0,
      title: 'PivotMarkets.ai Launches Sovereign AI Infrastructure for Indiana\'s 2026 IN AI Initiative',
      date: new Date().toLocaleDateString(),
      author: 'PivotMarkets Editorial Team',
      excerpt: 'PivotMarkets.ai announces comprehensive sovereign AI infrastructure platform designed to equip Indiana\'s workforce, secure regional data, and drive economic resilience aligned with Secretary David Adams\' IN AI Initiative.',
      category: 'Press Release',
      link: '#'
    },
    {
      id: 2,
      title: 'Dual-Triad Regional Showcases: Connecting Indiana\'s Six Industrial Hubs',
      date: new Date(Date.now() - 86400000).toLocaleDateString(),
      author: 'Daniel Cordoba',
      excerpt: 'Introducing the Maker Triad (Nappanee, Jasper, Warsaw) and Precision Triad (Columbus, Huntington, Batesville) framework for regional sovereign AI deployment and grant stacking.',
      category: 'Feature',
      link: '/regional-showcases'
    },
    {
      id: 3,
      title: 'Million-Dollar Grant Stack: Funding Regional Resilience',
      date: new Date(Date.now() - 172800000).toLocaleDateString(),
      author: 'PivotMarkets Editorial Team',
      excerpt: 'How READI 2.0, Manufacturing Readiness Grants, and Big 3 Cloud Credits combine to reduce R&D costs by up to 80% for Indiana manufacturers.',
      category: 'Analysis',
      link: '/nappanee'
    },
    {
      id: 4,
      title: 'The Nappanee Protocol: Protecting Proprietary Data in Industrial AI',
      date: new Date(Date.now() - 259200000).toLocaleDateString(),
      author: 'Daniel Cordoba',
      excerpt: 'Deep dive into Sovereign RAG architecture and how local data residency prevents global digital extraction while enabling AI innovation.',
      category: 'Technical',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-xl tracking-tight">PivotMarkets.ai</div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/">Home</a>
              </Button>
              <Button size="sm" asChild>
                <a href="/chamber">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "Newsroom", href: "/newsroom" }]} />
      </div>

      {/* Newsroom Header */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              PivotMarkets Newsroom
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Latest news, press releases, and insights on sovereign AI infrastructure for regional economic resilience.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="#contact">Contact Press</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/llms.txt">AI Manifest</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight hover:text-blue-600 transition-colors">
                      <a href={article.link}>{article.title}</a>
                    </h2>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="md:self-start" asChild>
                    <a href={article.link} className="flex items-center gap-2">
                      Read <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google News Optimization */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">For News Organizations</h2>
            <p className="text-muted-foreground mb-6">
              PivotMarkets.ai is registered with Google News Publisher Center. News organizations and journalists can access our latest press releases, high-resolution images, and media kits through our official newsroom.
            </p>
            <div className="bg-white border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Press Contact</h3>
                <p className="text-muted-foreground">press@pivotmarkets.ai</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Media Kit</h3>
                <p className="text-muted-foreground">High-resolution logos, brand guidelines, and company information available upon request.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">RSS Feed</h3>
                <p className="text-muted-foreground">Subscribe to our news feed at https://pivotmarkets.ai/newsroom/feed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2026 PivotMarkets.ai. All rights reserved.</p>
            <p className="mt-2">
              <a href="https://github.com/pivotmarkets/sovereign-ai" className="hover:text-foreground transition-colors">
                Technical Protocol & Sovereign Schema
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
