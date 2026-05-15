from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path('/home/ubuntu/pivotmarkets-platform')
SRC = ROOT / 'client' / 'src'
PAGES = SRC / 'pages'
APP = SRC / 'App.tsx'

approved_routes = {
    '/': 'Home.tsx',
    '/about': 'About.tsx',
    '/how-it-works': 'HowItWorks.tsx',
    '/success-story': 'SuccessStory.tsx',
    '/explore-funding': 'ExploreFunding.tsx',
    '/faq': 'Faq.tsx',
    '/contact': 'Contact.tsx',
    '/newsroom': 'Newsroom.tsx',
    '/privacy': 'Privacy.tsx',
    '/terms': 'Terms.tsx',
}

# Terms that previously represented B2C or Contractor Plus assumptions and must not appear in source.
forbidden_patterns = {
    'consumer positioning': re.compile(r'\bconsumer\b|\bB2C\b|lead[- ]?bait|personal loan|individual applicant', re.I),
    'Contractor Plus assumption': re.compile(r'Contractor\s*Plus|#2C3E50|#27AE60', re.I),
    'legacy guarantee/instant-match language': re.compile(r'instant\s+(match|approval)|guaranteed\s+funding|funding\s+score|eligibility\s+quiz', re.I),
}

app_text = APP.read_text()

route_checks = []
errors = []

for route, page in approved_routes.items():
    route_escaped = re.escape(route)
    route_present = bool(re.search(r'<Route\s+path=\{?\"' + route_escaped + r'\"\}?', app_text))
    page_name = page.removesuffix('.tsx')
    import_present = page_name in app_text
    page_path = PAGES / page
    page_text = page_path.read_text()
    schema_id_present = 'schemaId' in page_text and 'application/ld+json' in page_text
    schema_context_present = 'https://schema.org' in page_text
    b2b_positioning_present = bool(re.search(r'organiz|business|B2B|leadership|decision-maker|Funding Engine|funding strategy', page_text, re.I))
    route_checks.append({
        'route': route,
        'page': page,
        'router_entry_present': route_present,
        'page_import_present': import_present,
        'aeo_json_ld_present': schema_id_present and schema_context_present,
        'b2b_positioning_present': b2b_positioning_present,
    })
    if not route_present:
        errors.append(f'Missing router entry for {route}')
    if not schema_id_present or not schema_context_present:
        errors.append(f'Missing AEO JSON-LD schema block for {route} ({page})')
    if not b2b_positioning_present:
        errors.append(f'Missing B2B positioning indicators for {route} ({page})')

extra_route_literals = sorted(set(re.findall(r'<Route\s+path=\{?\"([^\"]+)\"\}?', app_text)) - set(approved_routes.keys()))
fallback_present = bool(re.search(r'<Route\s+component=\{NotFound\}\s*/>', app_text))
if extra_route_literals:
    errors.append(f'Unapproved explicit route literals present: {extra_route_literals}')
if not fallback_present:
    errors.append('Fallback NotFound route missing')

scan_files = [p for p in SRC.rglob('*') if p.suffix in {'.ts', '.tsx', '.css', '.json'}]
forbidden_matches = []
for path in scan_files:
    text = path.read_text(errors='ignore')
    rel = str(path.relative_to(ROOT))
    # Ignore this validation script path is outside SRC, so no need to exempt it.
    for category, pattern in forbidden_patterns.items():
        for match in pattern.finditer(text):
            line_no = text.count('\n', 0, match.start()) + 1
            line = text.splitlines()[line_no - 1].strip()
            forbidden_matches.append({
                'category': category,
                'file': rel,
                'line': line_no,
                'match': match.group(0),
                'line_text': line,
            })

if forbidden_matches:
    errors.append(f'Forbidden language matches found: {len(forbidden_matches)}')

meta_files = sorted(PAGES / page for page in approved_routes.values())
metadata_checks = []
for path in meta_files:
    text = path.read_text()
    metadata_checks.append({
        'page': path.name,
        'has_document_title_assignment': 'usePageMeta(' in text or 'document.title' in text,
        'has_meta_description_update': 'usePageMeta(' in text or 'meta[name="description"]' in text or 'name="description"' in text,
        'has_b2b_meta_terms': bool(re.search(r'organiz|business|B2B|leadership|decision-maker|funding strategy|Funding Engine', text, re.I)),
    })

# The app currently centralizes page shell title while individual approved pages carry JSON-LD and B2B page copy.
# Fail only if none of the approved pages participates in document title/meta description handling.
if not any(item['has_document_title_assignment'] for item in metadata_checks):
    errors.append('No approved page contains a document.title assignment')
if not any(item['has_meta_description_update'] for item in metadata_checks):
    errors.append('No approved page contains a meta description update')

result = {
    'approved_route_count': len(approved_routes),
    'approved_routes': list(approved_routes.keys()),
    'route_checks': route_checks,
    'extra_explicit_routes': extra_route_literals,
    'fallback_not_found_present': fallback_present,
    'forbidden_matches': forbidden_matches,
    'metadata_checks': metadata_checks,
    'status': 'PASS' if not errors else 'FAIL',
    'errors': errors,
}

out_json = ROOT / 'validation' / 'rev2_release_validation.json'
out_md = ROOT / 'validation' / 'rev2_release_validation.md'
out_json.write_text(json.dumps(result, indent=2), encoding='utf-8')

lines = ['# Rev 2 Release Validation', '', f"Status: **{result['status']}**", '', '## Approved Routes', '']
for check in route_checks:
    lines.append(f"- `{check['route']}` → `{check['page']}`: router={check['router_entry_present']}, AEO JSON-LD={check['aeo_json_ld_present']}, B2B positioning={check['b2b_positioning_present']}")
lines.extend(['', '## Router Boundary', '', f"Extra explicit routes: `{extra_route_literals}`", f"Fallback NotFound present: `{fallback_present}`", '', '## Forbidden Language Scan', '', f"Forbidden source matches: `{len(forbidden_matches)}`"])
if forbidden_matches:
    for item in forbidden_matches[:50]:
        lines.append(f"- {item['category']} — `{item['file']}:{item['line']}` matched `{item['match']}`: {item['line_text']}")
lines.extend(['', '## Metadata Checks', ''])
for item in metadata_checks:
    lines.append(f"- `{item['page']}`: title assignment={item['has_document_title_assignment']}, meta description update={item['has_meta_description_update']}, B2B terms={item['has_b2b_meta_terms']}")
if errors:
    lines.extend(['', '## Errors', ''])
    for err in errors:
        lines.append(f'- {err}')
out_md.write_text('\n'.join(lines) + '\n', encoding='utf-8')

print(json.dumps(result, indent=2))
raise SystemExit(0 if result['status'] == 'PASS' else 1)
