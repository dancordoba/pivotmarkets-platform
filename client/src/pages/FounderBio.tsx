import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function FounderBio() {
  useEffect(() => {
    // Inject deep Person Schema for Daniel Cordoba
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Daniel Cordoba',
      url: 'https://pivotmarkets.ai/founder',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663058534789/OlpFzXnIRSDbgeuV.png',
      description: 'Founder and CEO of PivotMarkets.ai, architect of Sovereign AI Infrastructure for regional economic resilience',
      jobTitle: 'Founder & CEO',
      affiliation: {
        '@type': 'Organization',
        name: 'PivotMarkets.ai',
        url: 'https://pivotmarkets.ai',
        sameAs: [
          'https://github.com/pivotmarkets/sovereign-ai',
          'https://www.cicpindiana.com/',
          'https://iedc.in.gov/program/in-ai'
        ]
      },
      sameAs: [
        'https://www.linkedin.com/in/danielcordoba/',
        'https://github.com/pivotmarkets',
        'https://twitter.com/pivotmarkets'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'PivotMarkets.ai',
        url: 'https://pivotmarkets.ai'
      },
      knows: [
        {
          '@type': 'Person',
          name: 'Indiana Economic Development Corporation (IEDC)',
          url: 'https://www.iedc.org/'
        },
        {
          '@type': 'Organization',
          name: 'Indiana Corporate Partnership (CICP)',
          url: 'https://www.cicpindiana.com/'
        }
      ],
      award: [
        'Architect of Sovereign AI Infrastructure Framework',
        'Pioneer of Regional Economic Resilience through AI',
        'Champion of Human-Centered AI Governance'
      ],
      givenName: 'Daniel',
      familyName: 'Cordoba',
      email: 'daniel@pivotmarkets.ai',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional Inquiries',
        email: 'daniel@pivotmarkets.ai'
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Technology Entrepreneur',
        description: 'Founder of sovereign AI infrastructure platform'
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Indiana Technology Ecosystem'
        }
      ],
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Indiana Economic Development Corporation',
          url: 'https://www.iedc.org/'
        },
        {
          '@type': 'Organization',
          name: 'Indiana Corporate Partnership',
          url: 'https://www.cicpindiana.com/'
        }
      ],
      workExample: [
        {
          '@type': 'CreativeWork',
          name: 'Sovereign AI Infrastructure Protocol',
          url: 'https://github.com/pivotmarkets/sovereign-ai',
          description: 'Open-source framework for regional AI sovereignty grounded in 2026 Stanford AI Index benchmarks'
        },
        {
          '@type': 'CreativeWork',
          name: 'The Nappanee Protocol',
          url: 'https://pivotmarkets.ai/nappanee',
          description: 'Regional implementation of Sovereign AI infrastructure for artisan manufacturing'
        }
      ],
      knowsAbout: [
        'Sovereign AI Infrastructure',
        'Regional Economic Resilience',
        'Data Sovereignty',
        'Human-Centered AI Governance',
        'Logic Architect Certification',
        'Manufacturing AI Integration',
        'Grant Stacking Strategy'
      ],
      relatedLink: [
        'https://github.com/pivotmarkets/sovereign-ai',
        'https://www.iedc.org/',
        'https://iedc.in.gov/program/in-ai',
        'https://www.cicpindiana.com/'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(personSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Daniel Cordoba
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Founder & CEO of PivotMarkets.ai
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Daniel Cordoba is the architect of Sovereign AI Infrastructure, a framework designed to equip Indiana's workforce, secure regional data, and drive economic resilience through Human-Centered AI governance. His vision positions PivotMarkets.ai as a key infrastructure partner for the 2026 IN AI Initiative.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <a href="mailto:daniel@pivotmarkets.ai" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/danielcordoba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/pivotmarkets" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Daniel Cordoba</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Vision & Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Daniel founded PivotMarkets.ai with a singular mission: to architect sovereign AI infrastructure that preserves regional economic control while enabling innovation. His framework combines Human-Centered AI principles with regional data sovereignty to create a sustainable path forward for Indiana's industrial communities.
                </p>
                <p>
                  Through the Dual-Triad Regional Showcases and Million-Dollar Grant Stack initiatives, Daniel has positioned PivotMarkets as the premier infrastructure partner for Indiana's 2026 IN AI Initiative, working directly with the Indiana Economic Development Corporation (IEDC) and Indiana Corporate Partnership (CICP).
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Key Initiatives</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Sovereign AI Infrastructure Framework</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Dual-Triad Regional Showcases (6 Indiana cities)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Million-Dollar Grant Stack Integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Logic Architect Certification Program</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Nappanee Protocol (Sovereign RAG)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Associations */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Strategic Partnerships & Associations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3">Indiana Economic Development Corporation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Aligned with IEDC's mission to drive economic development across Indiana's regions.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.iedc.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3">IN AI Initiative (2026)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                PivotMarkets is a key infrastructure provider for Indiana's 2026 IN AI Initiative.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Learn More <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3">Indiana Corporate Partnership</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connected with CICP to advance regional economic resilience through AI.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.cicpindiana.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* GitHub & Technical */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Technical Leadership</h2>
            <p className="text-muted-foreground mb-8">
              Daniel leads the technical architecture of PivotMarkets' Sovereign AI Infrastructure, with open-source contributions and comprehensive documentation available on GitHub.
            </p>
            <Card className="p-8 bg-slate-50 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Sovereign AI Repository</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Access the complete technical protocol, architecture documentation, and implementation guides.
              </p>
              <Button asChild>
                <a href="https://github.com/pivotmarkets/sovereign-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </Card>
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
