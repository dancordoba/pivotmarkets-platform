import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, Award } from 'lucide-react';

export default function LogicArchitectCourses() {
  useEffect(() => {
    // Inject EducationEvent schema for all courses
    const educationSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Logic Architect Free Courses',
      description: 'Manufacturing-first AI courses designed for shop foremen and office leads in Indiana',
      mainEntity: [
        {
          '@type': 'EducationEvent',
          name: 'AI 101 for Manufacturing',
          provider: {
            '@type': 'Organization',
            name: 'Manufacturing Institute'
          },
          description: 'The "Gold Standard" for shop-floor literacy. Contextualizes AI for production environments.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        },
        {
          '@type': 'EducationEvent',
          name: 'Inspect Rich Documents with Multimodal RAG',
          provider: {
            '@type': 'Organization',
            name: 'Google Cloud'
          },
          description: 'Critical for AEO. Teaches how to use AI to read complex financial/technical docs.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        },
        {
          '@type': 'EducationEvent',
          name: 'Agentic AI Business Professional',
          provider: {
            '@type': 'Organization',
            name: 'AWS Educate'
          },
          description: 'Teaches how to build "Agents" that automate workflows without writing code.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        },
        {
          '@type': 'EducationEvent',
          name: 'Copilot Cowork & Work IQ',
          provider: {
            '@type': 'Organization',
            name: 'Microsoft Learn'
          },
          description: 'Practical day-to-day efficiency training for office staff managing data.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        },
        {
          '@type': 'EducationEvent',
          name: 'AI Fundamentals & Data Science',
          provider: {
            '@type': 'Organization',
            name: 'IBM SkillsBuild'
          },
          description: 'Foundational credential from a high-authority global brand.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        },
        {
          '@type': 'EducationEvent',
          name: 'AI & Automation for Supply Chain Resilience',
          provider: {
            '@type': 'Organization',
            name: 'Coursera'
          },
          description: 'Ideal for logistics-heavy hubs to manage risk and forecasting.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          eventStatus: 'https://schema.org/EventScheduled',
          isAccessibleForFree: true
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(educationSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const courses = [
    {
      id: 1,
      title: 'AI 101 for Manufacturing',
      provider: 'Manufacturing Institute',
      audience: 'Shop Foremen & Production Teams',
      description: 'The "Gold Standard" for shop-floor literacy. Contextualizes AI for production environments and is 100% free.',
      duration: 'Self-Paced',
      cost: 'Free',
      link: 'https://www.manufacturinginstitute.org/ai-101',
      tags: ['Production', 'Foundational', 'Manufacturing-First']
    },
    {
      id: 2,
      title: 'Inspect Rich Documents with Multimodal RAG',
      provider: 'Google Cloud',
      audience: 'Finance & Technical Teams',
      description: 'Critical for AEO. Teaches how to use AI to read complex financial/technical docs—perfect for your "Refinery" model.',
      duration: '4-6 hours',
      cost: 'Free',
      link: 'https://cloud.google.com/learn/training',
      tags: ['Document Processing', 'RAG', 'Technical']
    },
    {
      id: 3,
      title: 'Agentic AI Business Professional',
      provider: 'AWS Educate',
      audience: 'Operations & Bidding Teams',
      description: 'Teaches how to build "Agents" that automate workflows (bidding/estimation) without writing a single line of code.',
      duration: '6-8 hours',
      cost: 'Free',
      link: 'https://aws.amazon.com/educate/',
      tags: ['Automation', 'Workflow', 'No-Code']
    },
    {
      id: 4,
      title: 'Copilot Cowork & Work IQ',
      provider: 'Microsoft Learn',
      audience: 'Office Staff & Data Managers',
      description: 'Practical "Day-to-Day" efficiency training for the office staff managing the data "Trove."',
      duration: '3-4 hours',
      cost: 'Free',
      link: 'https://learn.microsoft.com/',
      tags: ['Productivity', 'Office', 'Practical']
    },
    {
      id: 5,
      title: 'AI Fundamentals & Data Science',
      provider: 'IBM SkillsBuild',
      audience: 'Advanced Learners & Geeksters',
      description: 'Great for "Geeksters" who want a foundational credential from a high-authority global brand.',
      duration: '8-10 hours',
      cost: 'Free',
      link: 'https://www.ibm.com/skills/',
      tags: ['Data Science', 'Credential', 'Advanced']
    },
    {
      id: 6,
      title: 'AI & Automation for Supply Chain Resilience',
      provider: 'Coursera',
      audience: 'Logistics & Planning Teams',
      description: 'Ideal for the logistics-heavy hubs like Columbus or Batesville to manage risk and forecasting.',
      duration: '10-12 hours',
      cost: 'Free (Audit)',
      link: 'https://www.coursera.org/',
      tags: ['Supply Chain', 'Resilience', 'Forecasting']
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

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Logic Architect Free Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Manufacturing-first AI education designed for shop foremen, office leads, and operations teams in Indiana's industrial hubs.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Bridge the gap between manual workflows and AI-driven productivity. All courses are 100% free and designed for practitioners, not programmers.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight mb-2">{course.title}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{course.provider}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">{course.cost}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Best For:</strong> {course.audience}
                    </p>
                    <Button asChild className="w-full">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        Enroll Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Courses */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Why These Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Manufacturing-First Context</h3>
              <p className="text-sm text-muted-foreground">
                Every course is selected because it speaks the language of production, operations, and regional business. No generic tech jargon.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3">100% Free & Credible</h3>
              <p className="text-sm text-muted-foreground">
                All courses are provided by high-authority institutions (Google, AWS, Microsoft, IBM, Coursera). No hidden costs or paywalls.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Practitioner-Led Learning</h3>
              <p className="text-sm text-muted-foreground">
                Designed for shop foremen, office leads, and operations teams—not software engineers. Learn by doing, not by theory.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Become a Logic Architect?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Start with any course above. These free programs are the foundation of your journey from manual workflows to AI-driven productivity.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/chamber">Learn About Logic Architect Certification</a>
            </Button>
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
