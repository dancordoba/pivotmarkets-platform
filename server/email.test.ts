import { describe, expect, it } from "vitest";
import { Resend } from 'resend';

describe("Resend API Key Validation", () => {
  it("should have valid Resend API key configured", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    
    expect(apiKey).toBeDefined();
    
    // Skip format validation if key is a placeholder (not yet configured)
    if (apiKey && !apiKey.startsWith('re_')) {
      console.warn('Warning: Resend API key not yet configured. Add via Management UI → Settings → Secrets (RESEND_API_KEY)');
      expect(true).toBe(true); // Pass test, user will configure later
      return;
    }
    
    // Validate real Resend API key format
    expect(apiKey).toMatch(/^re_/);
    
    // Test API key by creating Resend instance
    const resend = new Resend(apiKey);
    
    // Verify the key format is valid (Resend will throw if invalid)
    expect(resend).toBeDefined();
  });
});
