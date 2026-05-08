/**
 * Schema Validator - Weekly Automated Checks
 * Validates all pages for JSON-LD schema errors
 * Prevents indexing issues like duplicate FAQPage fields
 */

import axios from 'axios';

interface SchemaValidationResult {
  url: string;
  status: 'PASS' | 'FAIL' | 'WARNING';
  errors: string[];
  warnings: string[];
  timestamp: string;
}

interface ValidationReport {
  totalPages: number;
  passed: number;
  failed: number;
  warnings: number;
  results: SchemaValidationResult[];
  generatedAt: string;
}

const PAGES_TO_VALIDATE = [
  'https://www.pivotmarkets.ai/',
  'https://www.pivotmarkets.ai/funding-gateway',
  'https://www.pivotmarkets.ai/pathfinder',
];

const SCHEMA_RULES = {
  // Check for duplicate fields
  noDuplicateFields: (html: string): string[] => {
    const errors: string[] = [];
    const fieldMatches = html.match(/"@type":\s*"([^"]+)"/g) || [];
    const fieldCounts: Record<string, number> = {};

    fieldMatches.forEach(match => {
      const type = match.match(/"@type":\s*"([^"]+)"/)?.[1];
      if (type) {
        fieldCounts[type] = (fieldCounts[type] || 0) + 1;
      }
    });

    Object.entries(fieldCounts).forEach(([type, count]) => {
      if (count > 1) {
        errors.push(`Duplicate schema type "${type}" found ${count} times`);
      }
    });

    return errors;
  },

  // Check for required FAQPage properties
  faqPageValidation: (html: string): { errors: string[]; warnings: string[] } => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (html.includes('"@type":"FAQPage"')) {
      // Check for mainEntity
      if (!html.includes('"mainEntity"')) {
        errors.push('FAQPage missing required "mainEntity" property');
      }

      // Check for Question/Answer structure
      if (!html.includes('"@type":"Question"')) {
        warnings.push('FAQPage has no Question items');
      }

      if (!html.includes('"acceptedAnswer"')) {
        warnings.push('FAQPage Questions missing "acceptedAnswer" property');
      }
    }

    return { errors, warnings };
  },

  // Check for EducationalOrganization properties
  organizationValidation: (html: string): { errors: string[]; warnings: string[] } => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (html.includes('"@type":"EducationalOrganization"') || html.includes('"@type":"Organization"')) {
      if (!html.includes('"name"')) {
        errors.push('Organization missing required "name" property');
      }

      if (!html.includes('"url"')) {
        warnings.push('Organization missing recommended "url" property');
      }

      if (!html.includes('"description"')) {
        warnings.push('Organization missing recommended "description" property');
      }
    }

    return { errors, warnings };
  },

  // Check for SoftwareSourceCode properties
  softwareCodeValidation: (html: string): { errors: string[]; warnings: string[] } => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (html.includes('"@type":"SoftwareSourceCode"')) {
      if (!html.includes('"codeRepository"')) {
        warnings.push('SoftwareSourceCode missing "codeRepository" property');
      }

      if (!html.includes('"programmingLanguage"')) {
        warnings.push('SoftwareSourceCode missing "programmingLanguage" property');
      }
    }

    return { errors, warnings };
  },
};

async function validatePage(url: string): Promise<SchemaValidationResult> {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SchemaValidator/1.0)',
      },
    });

    const html = response.data;
    const errors: string[] = [];
    const warnings: string[] = [];

    // Run all validation rules
    errors.push(...SCHEMA_RULES.noDuplicateFields(html));

    const faqValidation = SCHEMA_RULES.faqPageValidation(html);
    errors.push(...faqValidation.errors);
    warnings.push(...faqValidation.warnings);

    const orgValidation = SCHEMA_RULES.organizationValidation(html);
    errors.push(...orgValidation.errors);
    warnings.push(...orgValidation.warnings);

    const codeValidation = SCHEMA_RULES.softwareCodeValidation(html);
    errors.push(...codeValidation.errors);
    warnings.push(...codeValidation.warnings);

    return {
      url,
      status: errors.length > 0 ? 'FAIL' : warnings.length > 0 ? 'WARNING' : 'PASS',
      errors,
      warnings,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      url,
      status: 'FAIL',
      errors: [`Failed to fetch page: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
      timestamp: new Date().toISOString(),
    };
  }
}

async function generateValidationReport(): Promise<ValidationReport> {
  console.log('🔍 Starting schema validation...');

  const results = await Promise.all(PAGES_TO_VALIDATE.map(validatePage));

  const report: ValidationReport = {
    totalPages: results.length,
    passed: results.filter(r => r.status === 'PASS').length,
    failed: results.filter(r => r.status === 'FAIL').length,
    warnings: results.filter(r => r.status === 'WARNING').length,
    results,
    generatedAt: new Date().toISOString(),
  };

  return report;
}

async function notifyOnErrors(report: ValidationReport): Promise<void> {
  if (report.failed > 0) {
    const failedPages = report.results.filter(r => r.status === 'FAIL');
    const errorSummary = failedPages
      .map(p => `${p.url}: ${p.errors.join(', ')}`)
      .join('\n');

    console.error('❌ SCHEMA VALIDATION FAILED');
    console.error(`Failed pages: ${report.failed}/${report.totalPages}`);
    console.error(errorSummary);

    // TODO: Send notification to owner
    // await notifyOwner({
    //   title: 'Schema Validation Failed',
    //   content: `${report.failed} pages have schema errors:\n${errorSummary}`
    // });
  } else if (report.warnings > 0) {
    console.warn('⚠️ SCHEMA VALIDATION WARNINGS');
    console.warn(`Pages with warnings: ${report.warnings}/${report.totalPages}`);
  } else {
    console.log('✅ SCHEMA VALIDATION PASSED');
    console.log(`All ${report.totalPages} pages passed validation`);
  }
}

export async function runSchemaValidation(): Promise<ValidationReport> {
  const report = await generateValidationReport();
  await notifyOnErrors(report);
  return report;
}

// Export for testing
export { validatePage, SCHEMA_RULES };
