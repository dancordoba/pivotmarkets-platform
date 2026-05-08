/**
 * GrantStackProgressBar Component
 * 
 * Displays grant funding availability with:
 * - Total available funding ($2.7M-$3.5M)
 * - Claimed vs. Unclaimed breakdown
 * - Hover tooltips with specific grant program details
 * - AEO/GEO signals for search engine optimization
 */

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface GrantStackProgressBarProps {
  city: "nappanee" | "jasper" | "warsaw";
  totalAvailable: number;
  percentageClaimed?: number;
  programs: {
    name: string;
    amount: number;
    description: string;
    url: string;
  }[];
}

export function GrantStackProgressBar({
  city,
  totalAvailable,
  percentageClaimed = 40,
  programs,
}: GrantStackProgressBarProps) {
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  
  const percentageAvailable = 100 - percentageClaimed;
  const claimedAmount = (totalAvailable * percentageClaimed) / 100;
  const availableAmount = totalAvailable - claimedAmount;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-foreground">
            {city.charAt(0).toUpperCase() + city.slice(1)} Grant Stack Availability
          </h3>
          <span className="text-sm font-medium text-primary">
            {formatCurrency(availableAmount)} Available
          </span>
        </div>

        <div className="w-full h-8 bg-secondary rounded-lg overflow-hidden border border-border">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center transition-all duration-300"
            style={{ width: `${percentageAvailable}%` }}
          >
            {percentageAvailable > 15 && (
              <span className="text-xs font-bold text-white">
                {percentageAvailable.toFixed(0)}% Available
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatCurrency(availableAmount)} Unclaimed</span>
          <span>{formatCurrency(claimedAmount)} Claimed</span>
          <span className="font-semibold text-foreground">
            Total: {formatCurrency(totalAvailable)}
          </span>
        </div>
      </div>

      {/* Grant Programs with Hover Tooltips */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Grant Programs Included:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredProgram(program.name)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              <Card className="p-3 cursor-pointer hover:shadow-md transition-shadow bg-white dark:bg-slate-900 border border-border">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-semibold text-foreground line-clamp-1">
                    {program.name}
                  </h4>
                  <span className="text-xs font-bold text-primary whitespace-nowrap ml-2">
                    {formatCurrency(program.amount)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {program.description}
                </p>

                {/* Hover Tooltip */}
                {hoveredProgram === program.name && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg shadow-lg z-10 text-xs">
                    <p className="font-semibold mb-2">{program.name}</p>
                    <p className="mb-2">{program.description}</p>
                    <p className="text-green-400 font-semibold mb-2">
                      Available: {formatCurrency(program.amount)}
                    </p>
                    <a
                      href={program.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-xs"
                    >
                      Learn More →
                    </a>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* AEO/GEO Schema Markup (Hidden) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: `${city.charAt(0).toUpperCase() + city.slice(1)} Grant Stack`,
            description: `Grant funding opportunities for ${city} businesses`,
            areaServed: {
              "@type": "Place",
              name: city.charAt(0).toUpperCase() + city.slice(1),
              address: {
                "@type": "PostalAddress",
                addressLocality: city.charAt(0).toUpperCase() + city.slice(1),
                addressRegion: "IN",
                addressCountry: "US",
              },
            },
            offers: programs.map((program) => ({
              "@type": "Offer",
              name: program.name,
              price: program.amount,
              priceCurrency: "USD",
              description: program.description,
              url: program.url,
            })),
            sameAs: [
              "https://iedc.in.gov/program/in-ai",
              "https://iedc.in.gov/program/readi-2-0",
              "https://www.cicpindiana.com/",
            ],
          }),
        }}
      />
    </div>
  );
}
