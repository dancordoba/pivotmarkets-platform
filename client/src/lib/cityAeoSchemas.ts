/**
 * City-Specific AEO Metadata Utility
 * 
 * Provides localized schema markup for each city in the Dual-Triad Regional Showcases,
 * establishing deep connections with IEDC, local chambers, and industry-specific entities.
 */

export interface CitySchema {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Create Place Schema for Indiana City
 * Establishes geographic and institutional context for each city
 */
export const createCityPlaceSchema = (cityName: string, industry: string, population: string): CitySchema => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": cityName,
  "description": `${cityName}, Indiana - ${industry} Hub`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityName,
    "addressRegion": "Indiana",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Indiana, USA"
  },
  "knowsAbout": [
    industry,
    "Sovereign AI Infrastructure",
    "Regional Economic Development",
    "Manufacturing Excellence"
  ]
});

/**
 * Create LocalBusiness Schema for City Chamber Partnership
 * Establishes business-focused positioning for each city
 */
export const createCityLocalBusinessSchema = (
  cityName: string,
  industry: string,
  chamberName: string,
  chamberUrl: string
): CitySchema => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `${cityName} ${industry} Hub`,
  "description": `PivotMarkets.ai regional hub for ${industry} in ${cityName}, Indiana`,
  "url": "https://pivotmarkets.ai/regional-showcases",
  "areaServed": {
    "@type": "City",
    "name": cityName,
    "addressRegion": "Indiana"
  },
  "serviceType": "Economic Development, AI Infrastructure, Industry-Specific Workflows",
  "audience": {
    "@type": "Audience",
    "audienceType": "Local Businesses, Chamber Members, Industry Leaders"
  },
  "affiliatedWith": [
    {
      "@type": "Organization",
      "name": chamberName,
      "url": chamberUrl
    },
    {
      "@type": "Organization",
      "name": "Indiana Economic Development Corporation",
      "url": "https://www.iedc.org/"
    },
    {
      "@type": "Organization",
      "name": "Indiana Corporate Partnership",
      "url": "https://www.cicpindiana.com/"
    }
  ],
  "sameAs": [
    "https://www.iedc.org/",
    "https://www.cicpindiana.com/",
    "https://iedc.in.gov/program/in-ai"
  ]
});

/**
 * Create Organization Schema for City-Specific PivotMarkets Hub
 * Positions PivotMarkets as the regional architect for each city
 */
export const createCityHubOrganizationSchema = (
  cityName: string,
  industry: string,
  chamberName: string,
  chamberUrl: string
): CitySchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": `PivotMarkets.ai - ${cityName} Hub`,
  "alternateName": `${cityName} Sovereign AI Infrastructure Hub`,
  "description": `Regional hub for ${industry} AI infrastructure and economic development in ${cityName}, Indiana`,
  "url": "https://pivotmarkets.ai/regional-showcases",
  "areaServed": {
    "@type": "City",
    "name": cityName,
    "addressRegion": "Indiana"
  },
  "serviceType": [
    "AI Infrastructure",
    "Regional Data Sovereignty",
    "Industry-Specific Workflows",
    `${industry} Optimization`
  ],
  "knowsAbout": [
    industry,
    "Sovereign AI",
    "Human-Centered AI",
    "Agentic Governance",
    "Local Data Residency",
    "Regional Economic Development"
  ],
  "affiliatedWith": [
    {
      "@type": "Organization",
      "name": chamberName,
      "url": chamberUrl
    },
    {
      "@type": "Organization",
      "name": "Indiana Economic Development Corporation",
      "url": "https://www.iedc.org/"
    }
  ],
  "sameAs": [
    "https://www.iedc.org/",
    "https://www.cicpindiana.com/",
    "https://iedc.in.gov/program/in-ai"
  ]
});

/**
 * Create Service Schema for City-Specific Economic Assessment
 * Describes the "Request Economic Assessment" service for each city
 */
export const createCityAssessmentServiceSchema = (
  cityName: string,
  industry: string
): CitySchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${cityName} Economic Assessment`,
  "description": `Comprehensive AI readiness and economic assessment for ${industry} businesses in ${cityName}, Indiana`,
  "url": "https://pivotmarkets.ai/regional-showcases",
  "serviceType": "Economic Development Assessment, AI Readiness Evaluation",
  "areaServed": {
    "@type": "City",
    "name": cityName,
    "addressRegion": "Indiana"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": `${industry} Businesses, Chamber Members, Economic Development Leaders`
  },
  "provider": {
    "@type": "Organization",
    "name": "PivotMarkets.ai"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock"
  }
});

/**
 * Create Industry-Specific Schema
 * Establishes expertise in specific industries (Artisan, MedTech, Furniture, Manufacturing, Engineering, Logistics)
 */
export const createIndustryExpertiseSchema = (industry: string): CitySchema => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": `PivotMarkets.ai - ${industry} Specialist`,
  "description": `Professional AI infrastructure services specialized for ${industry} industry`,
  "url": "https://pivotmarkets.ai/regional-showcases",
  "serviceType": `${industry} AI Infrastructure, Workflow Optimization`,
  "knowsAbout": [
    industry,
    "Industry-Specific AI",
    "Workflow Automation",
    "Quality Assurance",
    "Supply Chain Optimization",
    "Regional Data Sovereignty"
  ],
  "areaServed": {
    "@type": "State",
    "name": "Indiana, USA"
  }
});

/**
 * Inject all city-specific schemas into document head
 */
export const injectCitySchemas = (schemas: CitySchema[]): void => {
  if (typeof document === "undefined") return;

  schemas.forEach(schema => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.setAttribute("data-city-schema", schema["@type"]);
    document.head.appendChild(script);
  });
};

/**
 * Clean up city-specific schemas from document head
 */
export const cleanupCitySchemas = (): void => {
  if (typeof document === "undefined") return;

  const scripts = document.querySelectorAll('script[data-city-schema]');
  scripts.forEach(script => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
};

/**
 * City Data Type for type safety
 */
export interface CityData {
  id: string;
  name: string;
  industry: string;
  population: string;
  chamberUrl: string;
  chamberName: string;
  successMetrics: string[];
  roadmapSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

/**
 * Generate all schemas for a city
 */
export const generateCitySchemas = (city: CityData): CitySchema[] => {
  return [
    createCityPlaceSchema(city.name, city.industry, city.population),
    createCityLocalBusinessSchema(city.name, city.industry, city.chamberName, city.chamberUrl),
    createCityHubOrganizationSchema(city.name, city.industry, city.chamberName, city.chamberUrl),
    createCityAssessmentServiceSchema(city.name, city.industry),
    createIndustryExpertiseSchema(city.industry)
  ];
};
