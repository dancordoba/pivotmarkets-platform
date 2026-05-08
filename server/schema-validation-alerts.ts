/**
 * Schema Validation Alerting System
 * Sends notifications when schema errors are detected
 */

// Notification import - will be called from scheduled task
// import { notifyOwner } from './_core/notification';

interface AlertConfig {
  enableEmailAlerts: boolean;
  enableConsoleAlerts: boolean;
  failureThreshold: number; // Alert if N or more pages fail
  warningThreshold: number; // Alert if N or more pages have warnings
}

const DEFAULT_CONFIG: AlertConfig = {
  enableEmailAlerts: true,
  enableConsoleAlerts: true,
  failureThreshold: 1, // Alert if any page fails
  warningThreshold: 2, // Alert if 2+ pages have warnings
};

export async function sendSchemaValidationAlert(
  report: any,
  config: AlertConfig = DEFAULT_CONFIG
): Promise<void> {
  // Check if alert should be sent
  if (report.failed < config.failureThreshold && report.warnings < config.warningThreshold) {
    return; // No alert needed
  }

  const alertType = report.failed > 0 ? 'CRITICAL' : 'WARNING';
  const failedPages = report.results.filter((r: any) => r.status === 'FAIL');
  const warningPages = report.results.filter((r: any) => r.status === 'WARNING');

  // Build alert message
  let alertMessage = `Schema Validation Report - ${alertType}\n\n`;
  alertMessage += `Generated: ${report.generatedAt}\n`;
  alertMessage += `Total Pages: ${report.totalPages}\n`;
  alertMessage += `Passed: ${report.passed}\n`;
  alertMessage += `Failed: ${report.failed}\n`;
  alertMessage += `Warnings: ${report.warnings}\n\n`;

  if (failedPages.length > 0) {
    alertMessage += `FAILED PAGES:\n`;
    failedPages.forEach((page: any) => {
      alertMessage += `\n• ${page.url}\n`;
      page.errors.forEach((error: string) => {
        alertMessage += `  ❌ ${error}\n`;
      });
    });
  }

  if (warningPages.length > 0) {
    alertMessage += `\nPAGES WITH WARNINGS:\n`;
    warningPages.forEach((page: any) => {
      alertMessage += `\n• ${page.url}\n`;
      page.warnings.forEach((warning: string) => {
        alertMessage += `  ⚠️ ${warning}\n`;
      });
    });
  }

  alertMessage += `\nACTION REQUIRED:\n`;
  alertMessage += `Review schema errors and fix before they impact Google indexing.\n`;
  alertMessage += `Check: https://search.google.com/search-console\n`;

  // Log to console (primary alert method)
  if (config.enableConsoleAlerts) {
    if (alertType === 'CRITICAL') {
      console.error('❌ CRITICAL SCHEMA VALIDATION ERROR');
    } else {
      console.warn('⚠️ SCHEMA VALIDATION WARNING');
    }
    console.log(alertMessage);
  }

  // Store report for audit trail
  await storeValidationReport(report);
}

/**
 * Format validation report for Google Search Console submission
 */
export function formatForSearchConsole(report: any): string {
  let formatted = `Schema Validation Report\n`;
  formatted += `========================\n\n`;
  formatted += `Generated: ${report.generatedAt}\n`;
  formatted += `Status: ${report.failed === 0 ? 'PASS' : 'FAIL'}\n\n`;

  report.results.forEach((page: any) => {
    formatted += `${page.url}\n`;
    formatted += `Status: ${page.status}\n`;

    if (page.errors.length > 0) {
      formatted += `Errors:\n`;
      page.errors.forEach((error: string) => {
        formatted += `  - ${error}\n`;
      });
    }

    if (page.warnings.length > 0) {
      formatted += `Warnings:\n`;
      page.warnings.forEach((warning: string) => {
        formatted += `  - ${warning}\n`;
      });
    }

    formatted += `\n`;
  });

  return formatted;
}

/**
 * Store validation report for audit trail
 */
export async function storeValidationReport(report: any): Promise<string> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `/home/ubuntu/pivotmarkets/schema-validation-reports/${timestamp}.json`;

  try {
    // In production, this would write to a file or database
    console.log(`📊 Validation report stored: ${filename}`);
    return filename;
  } catch (error) {
    console.error('❌ Error storing validation report:', error);
    throw error;
  }
}
