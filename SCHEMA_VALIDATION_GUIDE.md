# Schema Validation Guide - PivotMarkets.ai

## Overview

This guide documents the automated schema validation system that prevents indexing issues and ensures Google compliance.

**Problem Solved:** PivotMarkets.ai was in Google's sandbox for months due to duplicate FAQPage schema errors, preventing organic search traffic and institutional visibility.

**Solution:** Weekly automated schema validation checks that detect and alert on errors before they impact indexing.

---

## How It Works

### 1. Automated Weekly Validation

**Schedule:** Every Monday at 9:00 AM EDT

**What It Checks:**
- All pages for duplicate `@type` fields
- FAQPage schema for required properties (`mainEntity`, `acceptedAnswer`)
- Organization schema for required properties (`name`, `url`, `description`)
- SoftwareSourceCode schema for recommended properties

**Pages Validated:**
- https://www.pivotmarkets.ai/ (home)
- https://www.pivotmarkets.ai/funding-gateway
- https://www.pivotmarkets.ai/pathfinder

### 2. Alert System

**Alert Triggers:**
- ❌ **CRITICAL:** 1+ pages fail validation
- ⚠️ **WARNING:** 2+ pages have warnings

**Alert Methods:**
- Console logging (immediate visibility in dev server)
- Report storage in `/schema-validation-reports/` (audit trail)
- Future: Email notifications to owner

### 3. Audit Trail

All validation reports are stored with timestamps:
```
/home/ubuntu/pivotmarkets/schema-validation-reports/
  2026-04-30T09-00-00-000Z.json
  2026-05-07T09-00-00-000Z.json
  ...
```

---

## Pre-Deployment Checklist

**Before deploying ANY new page or schema changes:**

- [ ] Run schema validation script locally
- [ ] Check for duplicate `@type` fields
- [ ] Verify FAQPage has `mainEntity` and `acceptedAnswer`
- [ ] Verify Organization has `name` and `url`
- [ ] Verify SoftwareSourceCode has `codeRepository` and `programmingLanguage`
- [ ] Fix any errors before merging to main
- [ ] Deploy and wait for next Monday validation to confirm

### Manual Validation

Run validation manually before deployment:

```bash
cd /home/ubuntu/pivotmarkets
npx ts-node server/schema-validator.ts
```

Expected output:
```
🔍 Starting schema validation...
✅ SCHEMA VALIDATION PASSED
All 3 pages passed validation
```

---

## Common Schema Errors

### 1. Duplicate Field "FAQPage"

**Error:** `Duplicate schema type "FAQPage" found 2 times`

**Cause:** Multiple pages or components have FAQPage schema markup

**Fix:** 
- Only one page should have FAQPage schema
- Remove from Home.tsx if also on FundingGateway.tsx
- Or consolidate into single page

### 2. Missing FAQPage mainEntity

**Error:** `FAQPage missing required "mainEntity" property`

**Cause:** FAQPage schema incomplete

**Fix:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### 3. Missing Organization name

**Error:** `Organization missing required "name" property`

**Cause:** Organization schema incomplete

**Fix:**
```json
{
  "@type": "Organization",
  "name": "PivotMarkets.ai",
  "url": "https://www.pivotmarkets.ai",
  "description": "..."
}
```

---

## Google Search Console Integration

### Revalidation Process

After fixing schema errors:

1. **Deploy fix** to production
2. **Wait for Monday validation** (or run manually)
3. **Confirm validation passes** in console/reports
4. **Go to Google Search Console**
5. **Navigate to:** Enhancements → FAQPage (or relevant schema type)
6. **Click:** "Fix FAQPage structured data issues"
7. **Request revalidation**
8. **Wait 1-3 days** for Google to re-crawl and approve

### Monitoring

Check Google Search Console weekly:
- https://search.google.com/search-console
- Look for "Critical issues" section
- Verify no duplicate field errors
- Monitor indexing status

---

## Deployment Workflow

### Step 1: Develop

Write new page/schema code

### Step 2: Validate Locally

```bash
npx ts-node server/schema-validator.ts
```

### Step 3: Fix Errors

Address any schema errors before committing

### Step 4: Deploy

Merge to main and deploy to production

### Step 5: Monitor

- Check console logs on Monday validation
- Review audit trail reports
- Verify Google Search Console shows no errors

---

## Files

| File | Purpose |
|------|---------|
| `server/schema-validator.ts` | Core validation script |
| `server/schema-validation-alerts.ts` | Alerting and reporting system |
| `SCHEMA_VALIDATION_GUIDE.md` | This documentation |
| `schema-validation-reports/` | Audit trail of all validations |

---

## Future Enhancements

- [ ] Email alerts to owner on failures
- [ ] Slack integration for real-time alerts
- [ ] Dashboard showing validation history
- [ ] Auto-fix for common errors
- [ ] Integration with GitHub Actions for pre-deployment checks
- [ ] Validation for additional schema types (BreadcrumbList, LocalBusiness, etc.)

---

## Lessons Learned

**What Went Wrong:**
- Duplicate FAQPage schema deployed to production
- Not caught until Google's validation system flagged it
- Site was in sandbox for months, losing organic traffic

**What We Fixed:**
- Automated weekly validation prevents future issues
- Pre-deployment checklist catches errors early
- Audit trail tracks all validations
- Clear documentation prevents repeats

**Key Takeaway:**
Schema validation should be part of the deployment process, not an afterthought. This prevents costly indexing issues and ensures consistent Google compliance.

---

## Questions?

If you encounter schema validation errors:

1. Check the error message in console logs
2. Reference "Common Schema Errors" section above
3. Review the specific page's schema markup
4. Fix and re-run validation
5. Deploy and monitor

