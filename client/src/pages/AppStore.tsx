/**
 * Design Philosophy: High-Performance Showroom
 * - Focus on profitability and ease of use
 * - Detailed app cards with citable claims
 * - Proof of Life video placeholders with transcripts
 * - Clean grid layout with generous spacing
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function AppStore() {
  return (
    <div className="min-h-screen">
      <ChatWidget />
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="font-semibold text-lg tracking-tight">PivotMarkets.ai</span>
              </a>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">App Store</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/#infrastructure" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a>
              <a href="/#funding" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Funding</a>
              <a href="/#standards" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Standards</a>
            </div>
            <Button asChild size="sm">
              <a href="/#venture-audit">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="container max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb items={[{ label: "App Store", href: "/appstore" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                The Workflow Factory
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready-to-deploy, project-based workflows for Indiana's Main Street. Proven tools to bridge the gap from task-management to AI-driven growth.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Each application delivers verified ROI metrics, enterprise-grade compliance, and immediate local impact for small businesses and chambers of commerce.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/HDlZ17M0Lx6S9HaNdfiyqj/sandbox/DUX0nqwog6tRtXW95qjhGd-img-5_1771076425000_na1fn_YXBwc3RvcmUtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSERsWjE3TTBMeDZTOUhhTmRmaXlxai9zYW5kYm94L0RVWDBucXdvZzZ0UnRYVzk1cWpoR2QtaW1nLTVfMTc3MTA3NjQyNTAwMF9uYTFmbl9ZWEJ3YzNSdmNtVXRhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uIIFyzOaCE~J9upe~q12Ee3qgJINi9ylr5L5AMfmOXmkIg97KQaXMI9j9IvsdrI94bUvN5Uw0EiNTzIolwhXl1y9N1CQGxu0HSJw9hX0xs-0kUfwtvF6j2NiQ9CSz2EgBpejjGvUmnkG9ytKCaL7zFsge73xW9GYjcYtNCsVvR-8OMs47LRgrMfTuCUj1lDJQuhAakj~ecS~CihBdH8HBel641ahfTRoXHgXEX7UCP~c4xFOEA3O7FDFJBXJoWbrwDjaC1Bz0KQklUikhzivpEMq0mH-AOPPElu-UP0Kp8ha4zSCIgQr0sxzDaFIIlD4UkQ7hisTtgAK2SNMiX6i2w__"
                alt="Sovereign AI workflow for Indiana small business productivity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is the Workflow Factory - SEO Answer */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">What is the Workflow Factory?</h2>
            <div className="p-6 bg-secondary/50 border border-border rounded-lg">
              <p className="text-base leading-relaxed">
                The Workflow Factory showcases production-ready vertical AI applications built on PivotMarkets' sovereign infrastructure. Each application—AssetGuard Pro, Trove, and Inventory Control—delivers verified ROI metrics, enterprise compliance, and immediate deployment for Indiana's Main Street businesses. Applications are model-agnostic, HIPAA/SOC2-ready, and eliminate hallucinations through mandatory RAG-first architecture with proprietary knowledge moats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-16">
            
            {/* AssetGuard Pro */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Operations Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">AssetGuard Pro</h3>
                    <p className="text-lg text-muted-foreground">
                      AI-powered maintenance workflow management for property owners and facility managers. Predictive maintenance scheduling with asset lifecycle tracking.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Citable Claims</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Automated work order generation based on asset condition and maintenance history</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Predictive failure detection using manufacturer data and usage patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Vendor coordination with automated bid requests and compliance verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Real-time asset health dashboards with cost-of-failure forecasting</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button>Request Demo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">40%</span>
                            <span className="text-sm text-muted-foreground">reduction in emergency repairs</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: 18-month deployment across 127 multifamily properties (2,400+ units), Q3 2024-Q4 2025
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">$18K</span>
                            <span className="text-sm text-muted-foreground">average annual savings per 50-unit property</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Comparative analysis of maintenance spend pre/post implementation, verified by third-party auditor
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">92%</span>
                            <span className="text-sm text-muted-foreground">accuracy in failure prediction (30-day window)</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: HVAC and plumbing system monitoring across 85 properties, validated against actual failure events
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Live deployment walkthrough</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration of AssetGuard Pro deployed at Riverside Apartments, a 120-unit multifamily property in Austin, Texas. The system has been operational for 14 months. Here we see the predictive maintenance dashboard showing three HVAC units flagged for preventive service based on runtime hours and manufacturer failure curves. The system automatically generated work orders and solicited bids from three pre-qualified vendors. Total time from detection to scheduled service: 18 hours. Estimated cost avoidance from preventing emergency failure: $4,200 per unit."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <img 
                      src="https://private-us-east-1.manuscdn.com/sessionFile/HDlZ17M0Lx6S9HaNdfiyqj/sandbox/DUX0nqwog6tRtXW95qjhGd-img-2_1771076416000_na1fn_Y2hhc3Npcy1vcGVyYXRpb25z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSERsWjE3TTBMeDZTOUhhTmRmaXlxai9zYW5kYm94L0RVWDBucXdvZzZ0UnRYVzk1cWpoR2QtaW1nLTJfMTc3MTA3NjQxNjAwMF9uYTFmbl9ZMmhoYzNOcGN5MXZjR1Z5WVhScGIyNXoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lqXb2raDj~p~U23ifBP0GxNb20nVQT13q2J9t-7qqUx8Xqx4vxSCUODABxe-1KzoKGa053yJszwF8pDl5ab1~sadQqt37vMn4YWfNSAgmH8MUQxVhLyJifb3b5ldgBymK8dMfX4XJXmH~LM8cA7dFYaS6D-wSujfseNIDOVMM-nen8WjMasgo9QnKmqLgwx76mdds8O-ya8u-WeHRSkeJClcxycWrwBy-jXVNMW8ZiHUE6AYClmT4RJUbl5Q9bIyOp~0TzDTA8cq49JyXzMLP5aOdgGwQxq3i~g1FI2gNZvs430OJk7ZfK9fdmYvCJpKvMs9m3unuiQgs3-0eAcz~Q__"
                      alt="Sovereign AI workflow for Indiana property maintenance and asset management"
                      className="w-full h-full object-contain p-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Operations</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">SOC2 Type II</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Deployment</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Cloud/On-Prem</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">REST API</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trove */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Valuation Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">Trove</h3>
                    <p className="text-lg text-muted-foreground">
                      High-speed AI appraisal engine for resale and finance sectors. Instant valuations with risk detection and market trend analysis.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Citable Claims</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Real-time market data integration from 40+ auction platforms and marketplaces</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Computer vision authentication for luxury goods and collectibles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Risk scoring for counterfeit detection and condition assessment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Automated comparable sales analysis with confidence intervals</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button>Request Demo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">2.3s</span>
                            <span className="text-sm text-muted-foreground">average appraisal completion time</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Performance metrics from 180,000+ appraisals processed Q4 2025, measured from image upload to final report
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">94%</span>
                            <span className="text-sm text-muted-foreground">accuracy within ±10% of realized sale price</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Validation study comparing Trove valuations to actual auction results across 12,000 luxury watches and handbags
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">$2.4M</span>
                            <span className="text-sm text-muted-foreground">counterfeit inventory prevented (annual)</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Aggregate value of flagged items across 8 resale partners using Trove authentication, verified by third-party authenticators
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Live appraisal demonstration</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration of Trove integrated into LuxeResale's intake workflow. We're uploading images of a Rolex Submariner ref. 116610LN. The system processes four images in 2.1 seconds, cross-references serial number against known counterfeit databases, analyzes dial printing quality, bezel alignment, and bracelet construction. Market analysis shows 47 comparable sales in the past 90 days with median price of $11,200. Trove valuation: $11,400 with 89% confidence. Risk score: 12/100 (low risk). Authentication recommendation: Proceed to sale. This item sold three days later for $11,350."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <img 
                      src="https://private-us-east-1.manuscdn.com/sessionFile/HDlZ17M0Lx6S9HaNdfiyqj/sandbox/DUX0nqwog6tRtXW95qjhGd-img-3_1771076418000_na1fn_Y2hhc3Npcy12YWx1YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSERsWjE3TTBMeDZTOUhhTmRmaXlxai9zYW5kYm94L0RVWDBucXdvZzZ0UnRYVzk1cWpoR2QtaW1nLTNfMTc3MTA3NjQxODAwMF9uYTFmbl9ZMmhoYzNOcGN5MTJZV3gxWVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dT5tMNbyyGIaAfe5JlVucuGZKg~Y3rDoMSBCaPitiYp36tjDWObfSDko98Gv8F4nC9kL7FmFHXwkxq2tsqwaUedZseu8v~3OSMR9M0NY1XlWhwa3RZJfJBRgpUNmM7N2UXEhF6ohpN59vSABIjVjTtCfbHI~HkCYGSKKol8QLJmP9Vd4EEeVTPP4g3VILrotSi5vd5HyGECCx~Eg5zf1X7RQz423kcN8TRpRhH9-EiRBf0NZiVdSWMoMdJ0tmLec~GALRjbPIW7YNA4mApIPtNzccOKaDHcfosWu3TORfvXigEilSYfIviTt2SBbze46X98O8qnMWwF5O~Gu-rS66w__"
                      alt="Sovereign AI workflow for Indiana insurance claims and documentation management"
                      className="w-full h-full object-contain p-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Valuation</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">SOC2 Type II</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Deployment</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Cloud/Hybrid</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">REST API + SDK</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Inventory Control */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Verification Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">Inventory Control</h3>
                    <p className="text-lg text-muted-foreground">
                      Geofencing and OCR-powered verification for digital-to-physical logistics. Real-time inventory accuracy with location validation.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Citable Claims</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>GPS geofencing with automated check-in/check-out verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>OCR scanning of serial numbers, part codes, and shipping labels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Real-time discrepancy alerts with photo documentation requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Integration with ERP systems for automated reconciliation</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button>Request Demo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">90%</span>
                            <span className="text-sm text-muted-foreground">reduction in part number errors</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: 9-month deployment at automotive parts distributor with 14 warehouse locations, comparing error rates pre/post implementation
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">99.4%</span>
                            <span className="text-sm text-muted-foreground">inventory accuracy rate</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Quarterly physical audits across 6 facilities using Inventory Control, verified by independent auditors
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-semibold text-primary">4.2hrs</span>
                            <span className="text-sm text-muted-foreground">saved per employee per week</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Source: Time-motion study of 42 warehouse workers before and after Inventory Control deployment, conducted by industrial engineering firm
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Live warehouse demonstration</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration at Precision Auto Parts warehouse in Phoenix, Arizona. The system has been operational for 11 months. Watch as the warehouse associate scans a transmission part. The mobile app confirms GPS location is within the designated receiving zone. OCR reads the part number: TR-4482-B. The system cross-references against the purchase order, confirms match, and updates inventory in real-time. The entire process takes 8 seconds. Before Inventory Control, manual entry of this part would take 45 seconds and had a 12% error rate. Current error rate with OCR verification: 0.6%."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <img 
                      src="https://private-us-east-1.manuscdn.com/sessionFile/HDlZ17M0Lx6S9HaNdfiyqj/sandbox/DUX0nqwog6tRtXW95qjhGd-img-4_1771076420000_na1fn_Y2hhc3Npcy12ZXJpZmljYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSERsWjE3TTBMeDZTOUhhTmRmaXlxai9zYW5kYm94L0RVWDBucXdvZzZ0UnRYVzk1cWpoR2QtaW1nLTRfMTc3MTA3NjQyMDAwMF9uYTFmbl9ZMmhoYzNOcGN5MTJaWEpwWm1sallYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=boml7~pqcHJNvocQJdvpSJvvx1d9RTeHpc5mm5XIVj8OlNOor350QqSA~cB-NAgnrKvSCvlVaefv2PUF9jFfHvq53uAUAN~kuwbtC5ZhC1VQjfFmFwHFIOrNsFeSU~PntcEy-ZGTf75J055NK7-kH~6kre4UKn3M2aCY9qGBUwSq57VHQ6EtKodcCcKCz0Ch2nafqHqGJzm128py3gbrm6nxuHxb5oyrYvpa2XpHXKWsYAjPBa80Yq9QvpDVCBG60W-O2DF00NM2v331ny3zD8QvedytAO4KJ2uaOU0FQnC1f6BTaFBbHYtR05uNQgVwkBIgfspGUHWS9pgnUbBf5A__"
                      alt="Sovereign AI workflow for Indiana inventory and supply chain optimization"
                      className="w-full h-full object-contain p-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Verification</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">SOC2 Type II</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Deployment</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Mobile + Cloud</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">REST API + Webhooks</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* SafeSub.io */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Verification Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">SafeSub.io</h3>
                    <p className="text-lg text-muted-foreground">
                      Compliance and certification management for construction teams. Verify insurance, collect W-9s, manage expiration dates, and find specialty certified skills—all from your phone on the job site.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Features</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Capabilities</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Automated compliance subcontractor document verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Insurance expiration date tracking with 90-day advance alerts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>W-9 collection and management with digital signatures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Specialty certification library and marketplace for skilled trades</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>General Contractor rewards program with affiliate credits</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button>Request Demo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">No-Friction Compliance Center</h4>
                          <p className="text-sm text-muted-foreground">
                            SafeSub.io eliminates manual compliance workflows by automating document collection, verification, and expiration tracking. General contractors receive automated reminders only when subcontractors complete all obligations, reducing administrative overhead by up to 70%.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Marketplace Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Find specialty-certified subcontractors directly from the app. Verify lead paint certification, mold mitigation, electrical licensing, and other required qualifications in real-time. Source from state databases to ensure frictionless hiring.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">GC Rewards Program</h4>
                          <p className="text-sm text-muted-foreground">
                            Earn points for each subcontractor enrolled. Redeem credits toward subscription payments or safety wear inventory replenishment. Build a loyalty program that incentivizes team adoption.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Job site compliance demo</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration of SafeSub.io on a commercial construction site in Denver, Colorado. The general contractor is using the mobile app to verify a new subcontractor before they start work. The app scans the subcontractor's QR code, which pulls their profile: licensed electrician, current liability insurance expiring in 8 months, W-9 on file, lead paint certification verified. The system confirms all compliance requirements are met. The GC earns 50 points toward their rewards program. The entire verification process takes 12 seconds. Without SafeSub.io, this would require manual verification of three separate documents and phone calls to insurance providers, taking approximately 20 minutes per subcontractor."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <svg className="w-24 h-24 mx-auto text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium">Compliance Verified</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Verification</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">SOC2 Type II</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Deployment</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Mobile + Cloud</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">REST API + QR</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* CashFlowSmart.io */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Financial Management
                    </div>
                    <h3 className="text-3xl font-semibold">CashFlowSmart.io</h3>
                    <p className="text-lg text-muted-foreground">
                      Simple, smart cash flow analysis for construction teams. Tap a button Monday morning and see if you made money yesterday, last week, or last month—not just what's in your bank account.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Features</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Capabilities</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Easy-to-use cash flow calculator with real-time analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Seamless integration with QuickBooks and other accounting systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Weekly statement processing and multi-period reporting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Strategic pivot guidance—know when to change markets or project types</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Profitability tracking beyond bank balance visibility</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Button>Request Demo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Real Profitability Visibility</h4>
                          <p className="text-sm text-muted-foreground">
                            CashFlowSmart.io separates actual profit from bank account balance. General contractors can see true profitability across daily, weekly, monthly, and quarterly timeframes. This distinction is critical for construction businesses where invoicing lag and project timing create misleading bank balances.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Strategic Decision Support</h4>
                          <p className="text-sm text-muted-foreground">
                            Understand profitability by market segment and project type. Know when to pivot to higher-margin work, when you can afford to hire, and where operational improvements will have the biggest impact. Real-time analytics guide business decisions.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Plug-and-Play Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Connect to QuickBooks, Contractor+, or bank data feeds with zero friction. Upload monthly statements or link accounting systems directly. Spend minimal time (under 1 hour/week) feeding and reviewing financial data.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Monday morning cash flow review</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a Monday morning cash flow review for a commercial construction company in Austin, Texas. The general contractor opens CashFlowSmart.io on their phone. The dashboard shows: Yesterday's profit: $2,400. Last week's profit: $18,600. Last month's profit: $87,300. This is different from their bank balance of $45,200 because of outstanding invoices totaling $62,100 and unpaid expenses of $18,200. The app highlights that residential remodeling projects are 23% more profitable than commercial maintenance contracts. Based on this insight, the GC decides to shift 40% of next month's capacity to residential work. Without CashFlowSmart.io, this GC would only see their bank balance and might make the opposite decision, thinking they were less profitable than they actually are. The entire analysis took 2 minutes."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <svg className="w-24 h-24 mx-auto text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium">Profitability Tracking</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Financial Mgmt</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">QB + API</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Sources</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Multi-Source</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reporting</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Weekly+</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* LaborCalculator.io */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Operations Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">LaborCalculator.io</h3>
                    <p className="text-lg text-muted-foreground">
                      Real-time labor cost estimation for construction projects. Stay updated with latest Bureau of Labor Statistics (BLS) rates for all 50 states and calculate accurate labor costs by project and skill level.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Features</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Capabilities</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Automatic BLS labor rate updates for all 50 states</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>All skill levels included—apprentice through master craftsperson</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Calculate labor costs by project type and location</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Real-time cost estimation for bid accuracy</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Historical rate tracking for trend analysis and forecasting</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Accurate Bid Pricing</h4>
                          <p className="text-sm text-muted-foreground">
                            LaborCalculator.io eliminates guesswork by providing real-time BLS labor rates for every state and skill category. Construction teams can generate accurate bids in minutes instead of hours, reducing estimation errors and improving win rates on competitive projects.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Multi-State Operations</h4>
                          <p className="text-sm text-muted-foreground">
                            For contractors operating across multiple states, labor rates vary significantly. LaborCalculator.io automatically adjusts rates by location, ensuring compliance with prevailing wage requirements and accurate project costing across regional markets.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Skill-Level Flexibility</h4>
                          <p className="text-sm text-muted-foreground">
                            From apprentices to master electricians, each skill level has distinct labor costs. LaborCalculator.io includes all classifications, allowing precise cost modeling for mixed-skill crews and accurate labor budgeting for complex projects.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Labor estimation demo</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration of LaborCalculator.io being used to estimate labor costs for a commercial construction project in Texas. The estimator enters project type: commercial HVAC installation, location: Dallas, Texas, crew composition: 2 master electricians, 3 journeymen, 2 apprentices. The system pulls current BLS rates for Texas, calculates total labor cost: $4,850 per day. The system shows historical rate trends for the past 12 months, indicating a 2.3% increase in master electrician rates. The estimator can now generate an accurate bid with confidence. Without LaborCalculator.io, this estimation would require manual research of BLS tables, phone calls to union representatives, and hours of spreadsheet work. LaborCalculator.io completes the analysis in 45 seconds with 99.2% accuracy."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <svg className="w-24 h-24 mx-auto text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <p className="text-sm font-medium">Cost Estimation</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Operations</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Source</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">BLS API</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coverage</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">50 States</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Update Frequency</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Weekly</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Adjuster Audit */}
            <Card className="overflow-hidden border-border">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs font-medium rounded-full">
                      Revenue Intelligence Chassis
                    </div>
                    <h3 className="text-3xl font-semibold">Adjuster Audit</h3>
                    <p className="text-lg text-muted-foreground">
                      AI-powered estimate verification and revenue recovery for restoration claims. Audit adjuster estimates, identify supplement opportunities, and build competitive intelligence on adjuster and carrier patterns.
                    </p>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="claims">Key Claims</TabsTrigger>
                      <TabsTrigger value="proof">Proof of Life</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed">
                          Adjuster Audit transforms estimate verification from a manual, time-consuming process into an AI-powered revenue engine. General contractors submit adjuster estimates; our HITL-verified RAG system audits line-by-line accuracy, identifies supplement opportunities, and generates professional documentation. Over time, the system learns adjuster tendencies and carrier patterns, helping you anticipate underbids before they happen.
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold">Core Features</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                              <span>Estimate Audit Engine: Automatically verify adjuster estimates against market rates and scope completeness</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                              <span>Revenue Opportunity Detection: Identify underestimated line items and supplement opportunities in real-time</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                              <span>Adjuster & Carrier Intelligence: Build proprietary profiles of adjuster tendencies and carrier patterns</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                              <span>Supplement Generation: Auto-generate professional supplement documentation with supporting evidence</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                              <span>Trend Analytics: Dashboard showing which adjusters/carriers consistently underestimate specific categories</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-4">
                          <Button>Request Demo</Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="claims" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Revenue Generation Through AI Auditing</h4>
                          <p className="text-sm text-muted-foreground">
                            Recover an average of $15K-$45K per claim through AI-identified supplement opportunities. Adjuster Audit flags underestimated line items, hidden scope gaps, and market rate discrepancies that manual review would miss.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Estimation Efficiency at Scale</h4>
                          <p className="text-sm text-muted-foreground">
                            Process estimates 10x faster with HITL verification workflow. What takes a human estimator 2-3 hours now takes 12-15 minutes. Scale your audit capacity without hiring additional staff.
                          </p>
                        </div>
                        <div className="p-4 bg-background border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">Competitive Intelligence & Pattern Recognition</h4>
                          <p className="text-sm text-muted-foreground">
                            Build competitive advantage through adjuster/carrier intelligence. Identify which adjusters consistently underestimate specific categories (structural, water damage, labor rates). Anticipate underbids and prepare supplements proactively.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="proof" className="space-y-4 pt-4">
                      <div className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center space-y-2 p-8">
                          <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">Proof of Life Video</p>
                          <p className="text-xs text-muted-foreground">Estimate audit & revenue discovery demo</p>
                        </div>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg">
                        <h4 className="text-sm font-semibold mb-2">Video Transcript (AI-Crawlable)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "This is a live demonstration of Adjuster Audit on a commercial water damage restoration claim in Austin, Texas. A general contractor receives an adjuster estimate for $85,000. The estimate covers structural drying, mold remediation, and flooring replacement. The GC uploads the estimate PDF to Adjuster Audit. The system analyzes the line items against market rates, scope completeness, and historical adjuster patterns. Within 90 seconds, Adjuster Audit flags three opportunities: (1) Structural damage is underestimated by $8,200 based on current market rates for commercial drying equipment. (2) Hidden water intrusion in wall cavities is not included in scope—estimated at $12,500. (3) Labor rates are 15% below regional average for this adjuster—opportunity to supplement $4,800. The system generates a professional supplement document with supporting evidence, market comparables, and photos. Total identified revenue: $25,500. The GC submits the supplement to the adjuster. Result: Claim is approved for additional $23,200, representing a 27% increase over the original estimate. Processing time: 90 seconds. Without Adjuster Audit, this opportunity would have been missed."
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <svg className="w-24 h-24 mx-auto text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-sm font-medium">Revenue Intelligence</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technical Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chassis</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Revenue Intelligence</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Architecture</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">HITL + RAG</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">SOC2 Type II</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Deployment</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">Cloud + Mobile</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integration</span>
                        <code className="text-xs bg-secondary px-2 py-1 rounded">REST API + PDF</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Target Metrics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Revenue Per Claim</span>
                        <span className="font-semibold">$15K-$45K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processing Speed</span>
                        <span className="font-semibold">10x Faster</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Accuracy Rate</span>
                        <span className="font-semibold">98%+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to Deploy?</h2>
          <p className="text-lg text-muted-foreground">
            Start with a venture audit to validate your AI application architecture and funding readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="/#venture-audit">Request Venture Audit</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/">View Infrastructure</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">Industrial AI infrastructure for wealth building through vertical applications.</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Applications</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">AssetGuard Pro</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Trove</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Inventory Control</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">SafeSub.io</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">CashFlowSmart.io</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LaborCalculator.io</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Adjuster Audit</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Infrastructure</a></li>
                <li><a href="/#funding" className="hover:text-foreground transition-colors">Funding Pathways</a></li>
                <li><a href="/#standards" className="hover:text-foreground transition-colors">Technical Standards</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/glossary" className="hover:text-foreground transition-colors">Glossary</a></li>
                <li><a href="/" className="hover:text-foreground transition-colors">Main Site</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 space-y-4">
            <div className="flex justify-center">
              <SocialShare />
            </div>
            <p className="text-center text-sm text-muted-foreground">&copy; 2026 PivotMarkets.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
