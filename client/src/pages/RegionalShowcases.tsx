/**
 * Regional Showcases - Dual-Triad Sovereign Network Architecture
 * 
 * Design Philosophy: Institutional Authority, Strategic Geographic Positioning
 * - Indiana map visualization as anchor
 * - Two distinct triads: Maker (Nappanee, Jasper, Warsaw) & Precision (Columbus, Huntington, Batesville)
 * - City-specific 4-Step Roadmap (Audit → Certify → Deploy → Secure)
 * - Industry-specific success metrics (Artisan, MedTech, Furniture)
 * - Deep AEO metadata with IEDC and local chamber associations
 * - Primary CTA: "Request [City] Economic Assessment"
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatWidget } from "@/components/ChatWidget";
import { SocialShare } from "@/components/SocialShare";
import { useEffect, useState } from "react";
import {
  createOrganizationSchema,
  createTechnicalServiceProviderSchema,
  injectGeoSchemas,
  cleanupGeoSchemas
} from "@/lib/geoSchemas";
import {
  generateCitySchemas,
  injectCitySchemas,
  cleanupCitySchemas
} from "@/lib/cityAeoSchemas";

// City data with industry focus and chamber associations
const cityData = {
  makerTriad: [
    {
      id: "nappanee",
      name: "Nappanee",
      industry: "Artisan Woodworking & Crafts",
      population: "~6,500",
      chamberUrl: "https://nappaneechamber.com",
      chamberName: "Nappanee Chamber of Commerce",
      successMetrics: [
        "Artisan workflow automation",
        "Craft quality tracking",
        "Supply chain optimization",
        "Direct-to-consumer scaling"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "Artisan Capability Assessment",
          description: "Evaluate current craft production workflows, quality control processes, and market reach capabilities."
        },
        {
          step: "Certify",
          title: "Craft-Ready Certification",
          description: "Validate AI integration readiness for artisan production and quality assurance standards."
        },
        {
          step: "Deploy",
          title: "Workflow Deployment",
          description: "Implement AI-powered production tracking and quality management systems."
        },
        {
          step: "Secure",
          title: "Market Sovereignty",
          description: "Establish secure, local data residency for craft business operations and customer relationships."
        }
      ]
    },
    {
      id: "jasper",
      name: "Jasper",
      industry: "Furniture Manufacturing & Design",
      population: "~15,000",
      chamberUrl: "https://jasperchamber.com",
      chamberName: "Jasper Chamber of Commerce",
      successMetrics: [
        "Production efficiency gains",
        "Design-to-manufacture speed",
        "Quality consistency",
        "Custom order management"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "Manufacturing Readiness Assessment",
          description: "Assess current furniture production workflows, design processes, and manufacturing capabilities."
        },
        {
          step: "Certify",
          title: "Manufacturing Readiness Certification",
          description: "Validate AI integration compatibility with furniture production standards and design workflows."
        },
        {
          step: "Deploy",
          title: "Smart Manufacturing Deployment",
          description: "Implement AI-driven production optimization and design-to-manufacture acceleration."
        },
        {
          step: "Secure",
          title: "Manufacturing Sovereignty",
          description: "Secure local data residency for manufacturing operations and design intellectual property."
        }
      ]
    },
    {
      id: "warsaw",
      name: "Warsaw",
      industry: "Orthopedic Medical Devices",
      population: "~14,000",
      chamberUrl: "https://warsawchamber.com",
      chamberName: "Warsaw Chamber of Commerce",
      successMetrics: [
        "Device development acceleration",
        "Regulatory compliance tracking",
        "Supply chain security",
        "Clinical data management"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "MedTech Capability Assessment",
          description: "Evaluate medical device development workflows, regulatory compliance processes, and manufacturing capabilities."
        },
        {
          step: "Certify",
          title: "MedTech-Ready Certification",
          description: "Validate AI integration compliance with FDA regulations and medical device standards."
        },
        {
          step: "Deploy",
          title: "Intelligent Device Development",
          description: "Deploy AI-powered development acceleration and regulatory compliance management."
        },
        {
          step: "Secure",
          title: "Clinical Data Sovereignty",
          description: "Establish HIPAA-compliant, local data residency for clinical and regulatory data."
        }
      ]
    }
  ],
  precisionTriad: [
    {
      id: "columbus",
      name: "Columbus",
      industry: "Advanced Manufacturing & Logistics",
      population: "~47,000",
      chamberUrl: "https://columbuschamber.com",
      chamberName: "Columbus Chamber of Commerce",
      successMetrics: [
        "Supply chain optimization",
        "Logistics efficiency",
        "Inventory management",
        "Supplier integration"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "Advanced Manufacturing Assessment",
          description: "Analyze advanced manufacturing processes, logistics networks, and supply chain capabilities."
        },
        {
          step: "Certify",
          title: "Advanced Manufacturing Certification",
          description: "Validate AI integration readiness for precision manufacturing and logistics optimization."
        },
        {
          step: "Deploy",
          title: "Intelligent Manufacturing Deployment",
          description: "Implement AI-powered production optimization and supply chain intelligence."
        },
        {
          step: "Secure",
          title: "Manufacturing Sovereignty",
          description: "Secure local data residency for manufacturing operations and supply chain data."
        }
      ]
    },
    {
      id: "huntington",
      name: "Huntington",
      industry: "Precision Engineering & Defense",
      population: "~17,000",
      chamberUrl: "https://huntingtonchamber.com",
      chamberName: "Huntington Chamber of Commerce",
      successMetrics: [
        "Engineering precision improvement",
        "Defense contract compliance",
        "Quality assurance automation",
        "Secure communications"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "Precision Engineering Assessment",
          description: "Evaluate precision engineering workflows, quality standards, and compliance requirements."
        },
        {
          step: "Certify",
          title: "Defense-Ready Certification",
          description: "Validate AI integration compliance with defense contracting standards and security requirements."
        },
        {
          step: "Deploy",
          title: "Secure Precision Deployment",
          description: "Deploy AI-powered quality assurance and secure engineering workflows."
        },
        {
          step: "Secure",
          title: "Defense Data Sovereignty",
          description: "Establish secure, local data residency compliant with defense contracting requirements."
        }
      ]
    },
    {
      id: "batesville",
      name: "Batesville",
      industry: "Casket Manufacturing & Logistics",
      population: "~6,500",
      chamberUrl: "https://batesvillechamber.com",
      chamberName: "Batesville Chamber of Commerce",
      successMetrics: [
        "Production efficiency",
        "Logistics optimization",
        "Quality consistency",
        "Customer service automation"
      ],
      roadmapSteps: [
        {
          step: "Audit",
          title: "Manufacturing Capability Assessment",
          description: "Assess casket manufacturing workflows, logistics processes, and customer service capabilities."
        },
        {
          step: "Certify",
          title: "Manufacturing Readiness Certification",
          description: "Validate AI integration compatibility with manufacturing standards and logistics workflows."
        },
        {
          step: "Deploy",
          title: "Intelligent Manufacturing Deployment",
          description: "Implement AI-driven production optimization and logistics acceleration."
        },
        {
          step: "Secure",
          title: "Manufacturing Sovereignty",
          description: "Secure local data residency for manufacturing and customer relationship data."
        }
      ]
    }
  ]
};

// City Card Component
function CityCard({ city }: { city: typeof cityData.makerTriad[0] }) {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <Card className="p-6 bg-white dark:bg-slate-900 border border-border hover:border-primary/50 transition-colors">
      {/* City Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground">{city.name}</h3>
        <p className="text-sm text-primary font-semibold mt-1">{city.industry}</p>
        <p className="text-xs text-muted-foreground mt-2">Population: {city.population}</p>
      </div>

      {/* Chamber Link */}
      <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded">
        <p className="text-xs text-muted-foreground mb-2">Local Chamber Partner:</p>
        <a
          href={city.chamberUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline font-medium"
        >
          {city.chamberName} →
        </a>
      </div>

      {/* Success Metrics */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground mb-3">Success Metrics</p>
        <ul className="space-y-2">
          {city.successMetrics.map((metric, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4-Step Roadmap Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {city.roadmapSteps.map((roadmapStep, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStep(idx)}
              className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap transition-colors ${
                selectedStep === idx
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {roadmapStep.step}
            </button>
          ))}
        </div>

        {/* Selected Step Details */}
        <div className="p-3 bg-secondary/30 rounded border border-border">
          <h4 className="font-semibold text-sm text-foreground mb-2">
            {city.roadmapSteps[selectedStep].title}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {city.roadmapSteps[selectedStep].description}
          </p>
        </div>
      </div>

      {/* Primary CTA */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Request {city.name} Economic Assessment
      </Button>
    </Card>
  );
}

export default function RegionalShowcases() {
  // Inject GEO schemas for entity authority positioning
  useEffect(() => {
    const geoSchemas = [
      createOrganizationSchema(),
      createTechnicalServiceProviderSchema()
    ];
    injectGeoSchemas(geoSchemas);

    const allCities = [...cityData.makerTriad, ...cityData.precisionTriad];
    const allCitySchemas = allCities.flatMap(city => generateCitySchemas(city));
    injectCitySchemas(allCitySchemas);

    return () => {
      cleanupGeoSchemas();
      cleanupCitySchemas();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ChatWidget />

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="font-semibold text-xl tracking-tight">PivotMarkets.ai</div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/chamber" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Chamber Program
              </a>
              <a href="/workflow-factory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Workflow Factory
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Indiana's Sovereign Network: Six Cities, One Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              PivotMarkets.ai architects regional resilience across Indiana's most dynamic manufacturing and innovation hubs. Each city, each industry, one sovereign network.
            </p>
          </div>

          {/* Indiana Map Placeholder */}
          <div className="bg-secondary/20 border border-border rounded-lg p-12 text-center mb-12">
            <div className="text-muted-foreground space-y-2">
              <p className="text-sm font-semibold">Indiana Regional Network Map</p>
              <p className="text-xs">
                🗺️ Interactive map showing Maker Triad (Nappanee, Jasper, Warsaw) and Precision Triad (Columbus, Huntington, Batesville)
              </p>
              <p className="text-xs text-muted-foreground/60 mt-4">
                Map visualization powered by Google Maps integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maker Triad Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Maker Triad
            </h2>
            <p className="text-lg text-muted-foreground">
              Artisan craftsmanship meets intelligent automation. Nappanee, Jasper, and Warsaw lead Indiana's maker economy with sovereign AI infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cityData.makerTriad.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Precision Triad Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Precision Triad
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced manufacturing, precision engineering, and defense-ready innovation. Columbus, Huntington, and Batesville secure Indiana's competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cityData.precisionTriad.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture Section */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Sovereign Network Architect
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PivotMarkets.ai connects Indiana's six regional hubs into a unified sovereign network. Each city maintains local data residency and economic autonomy while benefiting from statewide coordination, shared best practices, and collective bargaining power with state and federal grant programs.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Aligned with Indiana's 2026 IN AI Initiative, the Dual-Triad architecture positions PivotMarkets as the strategic technology partner for regional economic resilience.
            </p>
            <div className="pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore the Sovereign Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="font-semibold text-lg">PivotMarkets.ai</div>
              <p className="text-sm text-muted-foreground">Architecting Indiana's Sovereign Network</p>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Resources</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/chamber" className="hover:text-foreground transition-colors">Chamber Program</a></li>
                <li><a href="/workflow-factory" className="hover:text-foreground transition-colors">Workflow Factory</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-sm">Initiatives</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">2026 IN AI Initiative</a></li>
                <li><a href="https://www.iedc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IEDC</a></li>
                <li><a href="https://www.cicpindiana.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">CICP</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 PivotMarkets.ai. Architecting Indiana's Sovereign Network. | 
              <a href="https://iedc.in.gov/program/in-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                Aligned with 2026 IN AI Initiative
              </a>
            </p>
            <div className="flex justify-center mt-4">
              <SocialShare />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
