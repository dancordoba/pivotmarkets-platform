from __future__ import annotations

from pathlib import Path

ROOT = Path('/home/ubuntu/pivotmarkets-platform')
PAGES = ROOT / 'client' / 'src' / 'pages'

# Remove unused legacy source file containing non-approved positioning language.
legacy_file = PAGES / 'RegionalShowcases.tsx'
if legacy_file.exists():
    legacy_file.unlink()

replacements = {
    PAGES / 'About.tsx': {
        'The workflow is designed around review, consent, and transparent handoff instead of instant matches or unsupported funding promises.':
        'The workflow is designed around review, consent, transparent handoff, and no unsupported funding promises.',
    },
    PAGES / 'SuccessStory.tsx': {
        'This route frames the information an organization should prepare before choosing to explore funding. It is a story-building path, not a grant application, eligibility quiz, funding score, or qualification test.':
        'This route frames the information an organization should prepare before choosing to explore funding. It is a story-building path, not a grant application, qualification test, or funding decision tool.',
    },
    PAGES / 'Privacy.tsx': {
        'First-release data handling is designed around business and organizational context, not consumer lead-bait or hidden eligibility scoring.':
        'First-release data handling is designed around business and organizational context, with no hidden public-site eligibility scoring.',
    },
    PAGES / 'Terms.tsx': {
        'The first-release terms are written for a B2B platform handling organizational context, not a consumer funding marketplace.':
        'The first-release terms are written for a B2B platform handling organizational context and funding strategy workflow boundaries.',
    },
}

for path, mapping in replacements.items():
    text = path.read_text()
    for old, new in mapping.items():
        if old not in text:
            raise RuntimeError(f'Missing expected text in {path.name}: {old}')
        text = text.replace(old, new)
    path.write_text(text)

meta = {
    'Home.tsx': (
        'PivotMarkets | B2B Funding Strategy Context Preparation',
        'PivotMarkets helps organizations prepare structured context for B2B funding strategy workflows before approved Funding Engine handoff.'
    ),
    'About.tsx': (
        'About PivotMarkets | Organizational Funding Strategy Preparation',
        'Learn how PivotMarkets helps organizations prepare context, confirm authority, and preserve the Funding Engine handoff boundary.'
    ),
    'HowItWorks.tsx': (
        'How PivotMarkets Works | B2B Funding Workflow Preparation',
        'See how PivotMarkets Rev 2 guides organizations from story preparation to explicit consent before Funding Engine handoff.'
    ),
    'SuccessStory.tsx': (
        'Create Organizational Story | PivotMarkets Funding Strategy',
        'Prepare organization identity, goals, geography, funding need, timeline, and authority context before exploring funding strategy.'
    ),
    'ExploreFunding.tsx': (
        'Explore Funding | Approved Funding Engine Handoff',
        'Review required organizational fields, acknowledgements, and public-safe handoff states before sending context to the PivotMarkets Funding Engine.'
    ),
    'Faq.tsx': (
        'PivotMarkets FAQ | B2B Funding Strategy Boundaries',
        'Answers for organizational decision-makers about PivotMarkets Rev 2, context preparation, consent, and Funding Engine handoff boundaries.'
    ),
    'Contact.tsx': (
        'Contact PivotMarkets | Organizational Funding Strategy Inquiry',
        'Contact PivotMarkets for professional organizational inquiries, partnership questions, and Funding Engine boundary clarification.'
    ),
    'Newsroom.tsx': (
        'PivotMarkets Newsroom | Official B2B Platform Updates',
        'Official PivotMarkets updates for organizational funding strategy, public-site changes, and approved Funding Engine handoff information.'
    ),
    'Privacy.tsx': (
        'PivotMarkets Privacy | Organizational Context Data Handling',
        'Understand how PivotMarkets Rev 2 collects, uses, and hands off organizational context data after affirmative consent.'
    ),
    'Terms.tsx': (
        'PivotMarkets Terms | B2B Public Site Service Boundaries',
        'Review the B2B public-site terms for organizational context preparation, consent, and Funding Engine handoff boundaries.'
    ),
}

for filename, (title, description) in meta.items():
    path = PAGES / filename
    text = path.read_text()
    if 'usePageMeta' not in text:
        marker = 'import { Button } from "@/components/ui/button";'
        if marker in text:
            text = text.replace(marker, marker + '\nimport { usePageMeta } from "@/lib/pageMeta";')
        else:
            raise RuntimeError(f'Could not insert usePageMeta import in {filename}')
    component_name = filename.removesuffix('.tsx')
    # Component names that differ from filename casing or route naming.
    component_names = {
        'HowItWorks.tsx': 'HowItWorks',
        'SuccessStory.tsx': 'SuccessStory',
        'ExploreFunding.tsx': 'ExploreFunding',
        'Faq.tsx': 'Faq',
    }
    fn = component_names.get(filename, component_name)
    needle = f'export default function {fn}() {{\n'
    call = f'  usePageMeta(\n    "{title}",\n    "{description}",\n  );\n'
    if call not in text:
        if needle not in text:
            raise RuntimeError(f'Could not find component declaration in {filename}')
        text = text.replace(needle, needle + call, 1)
    path.write_text(text)

# Add AEO JSON-LD schema to Explore Funding if missing.
explore = PAGES / 'ExploreFunding.tsx'
text = explore.read_text()
text = text.replace('import { FormEvent, useMemo, useState } from "react";', 'import { FormEvent, useEffect, useMemo, useState } from "react";')
if 'const schemaId = "pivotmarkets-rev2-explore-funding-schema";' not in text:
    insert_after = 'const requiredFieldLabels: Array<{ key: keyof FormState; label: string }> = [\n'
    schema_block = 'const schemaId = "pivotmarkets-rev2-explore-funding-schema";\n\n'
    text = text.replace(insert_after, schema_block + insert_after, 1)
if 'function useExploreFundingSchema()' not in text:
    hook = '''\nfunction useExploreFundingSchema() {\n  useEffect(() => {\n    document.getElementById(schemaId)?.remove();\n\n    const schema = [\n      {\n        "@context": "https://schema.org",\n        "@type": "WebPage",\n        name: "Explore Funding",\n        url: "https://pivotmarkets.ai/explore-funding",\n        description:\n          "Approved public handoff route where organizations review context, confirm authority, acknowledge service boundaries, and authorize Funding Engine transmission.",\n      },\n      {\n        "@context": "https://schema.org",\n        "@type": "HowTo",\n        name: "Authorize a PivotMarkets Funding Engine handoff",\n        description:\n          "A B2B review-and-consent sequence for sending organizational context to the PivotMarkets Funding Engine.",\n        step: [\n          { "@type": "HowToStep", name: "Review organizational context" },\n          { "@type": "HowToStep", name: "Confirm required handoff fields" },\n          { "@type": "HowToStep", name: "Acknowledge service boundaries and representative authority" },\n          { "@type": "HowToStep", name: "Submit approved handoff" },\n        ],\n      },\n      {\n        "@context": "https://schema.org",\n        "@type": "BreadcrumbList",\n        itemListElement: [\n          { "@type": "ListItem", position: 1, name: "Home", item: "https://pivotmarkets.ai/" },\n          { "@type": "ListItem", position: 2, name: "Explore Funding", item: "https://pivotmarkets.ai/explore-funding" },\n        ],\n      },\n    ];\n\n    const script = document.createElement("script");\n    script.id = schemaId;\n    script.type = "application/ld+json";\n    script.textContent = JSON.stringify(schema);\n    document.head.appendChild(script);\n\n    return () => document.getElementById(schemaId)?.remove();\n  }, []);\n}\n'''
    text = text.replace('\nexport default function ExploreFunding() {\n', hook + '\nexport default function ExploreFunding() {\n', 1)
if '  useExploreFundingSchema();' not in text:
    text = text.replace('export default function ExploreFunding() {\n', 'export default function ExploreFunding() {\n  useExploreFundingSchema();\n', 1)
explore.write_text(text)

print('Rev 2 remediation applied.')
