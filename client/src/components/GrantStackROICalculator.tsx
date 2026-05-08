import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp } from 'lucide-react';
import { trpc } from '@/lib/trpc';

const CITY_GRANT_DATA = {
  nappanee: { name: 'Nappanee', industry: 'Artisan/Cabinetry', total: 2700000, readi: 1000000, manufacturing: 500000, cloud: 1200000 },
  jasper: { name: 'Jasper', industry: 'Furniture Manufacturing', total: 3000000, readi: 1200000, manufacturing: 600000, cloud: 1200000 },
  warsaw: { name: 'Warsaw', industry: 'MedTech/Precision', total: 3500000, readi: 1500000, manufacturing: 700000, cloud: 1300000 },
  columbus: { name: 'Columbus', industry: 'Automotive/Precision', total: 3200000, readi: 1300000, manufacturing: 650000, cloud: 1250000 },
  huntington: { name: 'Huntington', industry: 'Precision Manufacturing', total: 2900000, readi: 1100000, manufacturing: 550000, cloud: 1250000 },
  batesville: { name: 'Batesville', industry: 'Casket/Logistics', total: 2800000, readi: 1050000, manufacturing: 525000, cloud: 1225000 },
  'regional-partners': { name: 'Regional Partners', industry: 'Consulting', total: 5000000, readi: 2000000, manufacturing: 1500000, cloud: 1500000 }
};

export function GrantStackROICalculator() {
  const [selectedCity, setSelectedCity] = useState<'nappanee' | 'jasper' | 'warsaw' | 'columbus' | 'huntington' | 'batesville' | 'regional-partners'>('nappanee');

  // Inject FinancialService schema for grant compatibility
  useEffect(() => {
    const financialServiceSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Grant Stack ROI Calculator",
      "description": "Calculate ROI from stacking Indiana Manufacturing Readiness Grant, READI 2.0, and Cloud Credits",
      "url": "https://pivotmarkets.ai/grant-calculator",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Indiana",
        "geo": {
          "@type": "GeoShape",
          "box": "37.7793 -88.0977 41.7608 -84.8082"
        }
      },
      "serviceType": "Grant Funding Calculator",
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Indiana Manufacturing Readiness Grant",
          "description": "State manufacturing support program",
          "price": "500000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "READI 2.0 Infrastructure Funding",
          "description": "Regional economic development funds",
          "price": "1000000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Cloud Credits (AWS, Google, Azure)",
          "description": "Big Three cloud provider credits",
          "price": "1200000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(financialServiceSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const captureLeadMutation = trpc.leads.capture.useMutation();

  const cityData = CITY_GRANT_DATA[selectedCity];
  const costReduction = 0.80; // 80% reduction
  const estimatedSavings = cityData.total * costReduction;

  const handleSubmit = async () => {
    if (!email) return;
    
    try {
      await captureLeadMutation.mutateAsync({
        name: 'Grant Calculator Lead',
        email,
        city: selectedCity as 'nappanee' | 'jasper' | 'warsaw' | 'columbus' | 'huntington' | 'batesville' | 'regional-partners',
        industry: (cityData.industry.toLowerCase().includes('artisan') ? 'artisan' : cityData.industry.toLowerCase().includes('furniture') ? 'furniture' : cityData.industry.toLowerCase().includes('med') ? 'medical' : cityData.industry.toLowerCase().includes('precision') ? 'precision' : cityData.industry.toLowerCase().includes('consulting') ? 'consulting' : 'manufacturing') as 'artisan' | 'furniture' | 'medical' | 'precision' | 'manufacturing' | 'consulting',
        grantInterest: `Grant Stack ROI: $${cityData.total.toLocaleString()}`
      });
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  return (
    <div className="w-full">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Grant Stack ROI Calculator</h2>
          <p className="text-muted-foreground">
            Discover how much your region can save by stacking READI 2.0, Manufacturing Readiness, and Cloud Credits.
          </p>
        </div>

        {/* City Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-4">Select Your City</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(CITY_GRANT_DATA).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedCity(key as any)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  selectedCity === key
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-border hover:border-blue-300'
                }`}
              >
                <div className="font-semibold text-sm">{data.name}</div>
                <div className="text-xs text-muted-foreground">{data.industry}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Grant Stack Breakdown */}
        <div className="mb-8 p-6 bg-white rounded-lg border border-border">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Million-Dollar Grant Stack for {cityData.name}
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <div>
                <p className="font-semibold">READI 2.0 Infrastructure</p>
                <p className="text-xs text-muted-foreground">Regional economic development funds</p>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                ${(cityData.readi / 1000000).toFixed(1)}M
              </Badge>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-border">
              <div>
                <p className="font-semibold">Manufacturing Readiness Grant</p>
                <p className="text-xs text-muted-foreground">Indiana state manufacturing support</p>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                ${(cityData.manufacturing / 1000000).toFixed(1)}M
              </Badge>
            </div>

            <div className="flex justify-between items-center pb-3">
              <div>
                <p className="font-semibold">Big 3 Cloud Credits</p>
                <p className="text-xs text-muted-foreground">AWS, Microsoft, Google combined</p>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                ${(cityData.cloud / 1000000).toFixed(1)}M
              </Badge>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-blue-600 flex justify-between items-center">
            <p className="font-bold text-lg">Total Available Funding</p>
            <p className="text-3xl font-bold text-blue-600">
              ${(cityData.total / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>

        {/* ROI Impact */}
        <div className="mb-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Sovereign ROI Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Traditional R&D Infrastructure Cost</p>
              <p className="text-2xl font-bold">~${(cityData.total / 0.2).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">With Grant Stack (80% Reduction)</p>
              <p className="text-2xl font-bold text-green-600">${estimatedSavings.toLocaleString()}</p>
            </div>
          </div>

          <p className="text-sm text-green-700 mt-4">
            By stacking regional, state, and cloud grants, {cityData.name} businesses can build sovereign R&D hubs at a fraction of traditional costs.
          </p>
        </div>

        {/* Lead Capture */}
        <div className="p-6 bg-slate-50 rounded-lg border border-border">
          <h3 className="font-semibold mb-4">Request Preliminary Assessment</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get a customized grant stack assessment for your business. We'll send a detailed breakdown to your email.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              onClick={handleSubmit}
              disabled={!email || captureLeadMutation.isPending}
              className="px-6"
            >
              {captureLeadMutation.isPending ? 'Sending...' : 'Send Assessment'}
            </Button>
          </div>

          {submitted && (
            <p className="text-sm text-green-600 mt-3">
              ✓ Assessment request sent! Check your email for details.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
