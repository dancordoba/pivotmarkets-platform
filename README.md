# PivotMarkets.ai - Complete Digital Presence

Industrial AI infrastructure provider with main site and app store subdomain. Built with React 19, Tailwind CSS 4, and advanced SEO/AEO/GEO optimization.

## Project Structure

```
pivotmarkets/
├── client/
│   ├── public/
│   │   ├── llms.txt           # AI-crawlable site relationship map
│   │   ├── schema.json        # JSON-LD schema definitions
│   │   ├── robots.txt         # Crawler directives
│   │   └── sitemap.xml        # Search engine sitemap
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx       # Main site (pivotmarkets.ai)
│       │   └── AppStore.tsx   # Subdomain (appstore.pivotmarkets.ai)
│       ├── index.css          # Global styles with design tokens
│       └── App.tsx            # Route configuration
└── README.md
```

## Sites Overview

### Main Site: pivotmarkets.ai
**Purpose**: Infrastructure provider and venture funding facilitator  
**Tone**: Professional General Contractor  
**Focus**: Wealth Building and Industrial AI

**Key Sections**:
- **Hero**: Value proposition with infrastructure network visualization
- **What is PivotMarkets**: 40-word SEO answer block
- **Infrastructure Fleet**: 4 core chassis (Operations, Valuation, Verification, Communication)
- **Venture Auditor**: Technical due diligence intake process
- **Funding Concierge**: SDIRA/ROBS and Crowd Funding
- **Technical Standards**: RAG-first, SOC2/HIPAA compliance details

### Subdomain: appstore.pivotmarkets.ai
**Purpose**: Application marketplace and proof-of-concept showcase  
**Tone**: High-Performance Showroom  
**Focus**: Profitability and Ease of Use

**Applications**:
1. **AssetGuard Pro** (Operations Chassis)
   - Predictive maintenance for property/facility management
   - Verified ROI: 40% reduction in emergency repairs, $18K annual savings
   
2. **Trove** (Valuation Chassis)
   - AI appraisal engine for luxury goods
   - Verified ROI: 2.3s appraisal time, 94% accuracy, $2.4M counterfeit prevention
   
3. **Inventory Control** (Verification Chassis)
   - Geofencing and OCR inventory verification
   - Verified ROI: 90% error reduction, 99.4% accuracy, 4.2hrs saved per employee/week

Each app includes:
- Overview with key features
- Citable Claims with verified ROI metrics and sources
- Proof of Life video placeholder with AI-crawlable transcript

## SEO/AEO/GEO Strategy

### 1. 40-Word Answer Blocks
Every major section starts with a concise, factual 40-word answer optimized for AI answer engines:
- "What is PivotMarkets?"
- "What is the PivotMarkets App Store?"
- Infrastructure chassis descriptions
- Funding pathways explanation

### 2. JSON-LD Schema Markup

**Main Site** (`client/index.html`):
```json
{
  "@type": "Organization",
  "name": "PivotMarkets.ai",
  "description": "Industrial-grade AI agent infrastructure...",
  "knowsAbout": ["RAG-First Architecture", "Industrial AI", ...]
}
```

**App Store** (see `client/public/schema.json`):
```json
{
  "@type": "SoftwareApplication",
  "name": "AssetGuard Pro",
  "applicationCategory": "BusinessApplication",
  "aggregateRating": {...},
  "review": [...]
}
```

### 3. llms.txt File
Root-level `/llms.txt` maps the relationship between:
- Infrastructure (Main Site) ↔ Applications (Subdomain)
- Chassis systems ↔ Specific apps
- Technical foundation ↔ Deployment options
- Funding pathways ↔ Venture audit process

**Purpose**: Enables AI systems to understand the complete ecosystem and provide accurate answers about infrastructure-to-application relationships.

### 4. Citable Claims
Each application includes verifiable ROI data with sources:
- Deployment timeframes (9-18 months)
- Sample sizes (127 properties, 12,000 items, 14 warehouses)
- Third-party validation (independent auditors, engineering firms)
- Specific metrics with confidence intervals

### 5. Proof of Life Videos
Placeholder video sections with AI-crawlable transcripts:
- Live deployment walkthroughs
- Real-world performance demonstrations
- Specific property/location references
- Actual results and cost avoidance data

## Design Philosophy

**Theme**: Deliberate Clarity with Elegant Simplicity  
**Movement**: Scandinavian Minimalism meets Swiss Typography

**Core Principles**:
- Generous whitespace (8-12% viewport margins)
- Precision typography with clear hierarchies
- Restrained color palette (deep blue primary, muted teal accent)
- Smart information architecture

**Color Palette**:
- Primary: `oklch(0.45 0.12 240)` - Deep sophisticated blue
- Accent: `oklch(0.55 0.08 195)` - Muted teal
- Background: `oklch(1 0 0)` - Pure white
- Foreground: `oklch(0.25 0.01 240)` - Rich charcoal

**Typography**:
- Display/Body: Inter (400/500/600/700)
- Code/Technical: JetBrains Mono (500)
- Scale: 16px base, 1.25 ratio, 1.6 line-height

## Performance Optimization

### Target: LCP < 1.2s

**Optimizations Implemented**:
1. **Image Optimization**: WebP format with compression via CDN query parameters
2. **Font Loading**: Preconnect to Google Fonts with `display=swap`
3. **Minimal JavaScript**: Static site with client-side routing only
4. **CSS Optimization**: Tailwind CSS 4 with minimal custom styles
5. **Lazy Loading**: Images load as needed during scroll

**CDN URLs**: All generated images use compressed WebP versions with `?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80`

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The site is configured for static hosting. All routes are handled client-side via Wouter.

**Environment Variables** (automatically injected):
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

**Static Files**:
- `/llms.txt` - AI crawler relationship map
- `/schema.json` - Complete schema definitions
- `/robots.txt` - Crawler directives
- `/sitemap.xml` - Search engine sitemap

## Routes

- `/` - Main site (Home page)
- `/appstore` - Application marketplace
- `/404` - Not found page

## Technical Stack

- **Framework**: React 19 with Wouter routing
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build Tool**: Vite 7
- **Package Manager**: pnpm

## SEO Checklist

- [x] 40-word answer blocks for all major sections
- [x] JSON-LD Organization schema in HTML head
- [x] JSON-LD SoftwareApplication schemas for all apps
- [x] Root-level llms.txt mapping infrastructure to apps
- [x] Citable claims with verified sources for all ROI metrics
- [x] Proof of Life video placeholders with AI-crawlable transcripts
- [x] Semantic HTML with proper heading hierarchy
- [x] Meta descriptions for all pages
- [x] robots.txt and sitemap.xml
- [x] Performance optimization (target LCP < 1.2s)
- [x] Mobile-responsive design
- [x] Accessible navigation and focus states

## Content Strategy

**Main Site Positioning**:
- Professional General Contractor tone
- Focus on infrastructure reliability and funding expertise
- Emphasis on 20 years of SDIRA/ROBS experience
- RAG-first mandate to eliminate vaporware
- Alternative funding pathways: SDIRA/ROBS and Crowd Funding

**App Store Positioning**:
- High-performance showroom aesthetic
- Profitability-focused messaging
- Ease of deployment and integration
- Verified ROI metrics with third-party validation

## Future Enhancements

1. **Subdomain Configuration**: Configure DNS to point `appstore.pivotmarkets.ai` to `/appstore` route
2. **Video Integration**: Replace proof-of-life placeholders with actual demo videos
3. **Case Studies**: Add detailed customer success stories with full attribution
4. **Interactive Demos**: Embed live product demonstrations
5. **Blog/Resources**: Add content marketing section for SEO authority building

## License

Proprietary - PivotMarkets.ai © 2026
