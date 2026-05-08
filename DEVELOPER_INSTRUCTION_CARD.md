# 🔐 Sovereign Protocol - Developer Access Card

**Project:** sovereign-protocol-nappanee  
**Custodian:** Manus AI Agent  
**Your Role:** Backend Developer  
**Access Level:** Write (feature branches only)

---

## Quick Start (Copy & Paste This)

```
You have been invited to contribute to the Sovereign Protocol project.

Repository: Manus-Managed (Private)
Your Access: Write permission on feature branches
Restrictions: Cannot delete main branch

Your tasks:
1. Backend Lead Capture (tRPC procedure)
2. Dynamic Schema Generation (utility)
3. Grant Calculator Logic (database helpers)

Estimated time: 7-10 hours

Next steps: See instructions below.
```

---

## How to Access the Repository

### Step 1: Get Your Access Token
Contact the Project Owner and request your **Developer Access Token**.

The token will look like: `sovereign-dev-[RANDOM_STRING]`

### Step 2: Clone the Repository
```bash
git clone https://manus.custodian/sovereign-protocol-nappanee.git
cd sovereign-protocol-nappanee
```

### Step 3: Authenticate
```bash
git config user.name "Your Name"
git config user.email "your.email@company.com"
```

### Step 4: Create a Feature Branch
```bash
git checkout -b feature/backend-lead-capture
```

---

## Your Tasks (Priority Order)

### Task 1: Backend Lead Capture (2-3 hours)
**File:** `server/routers.ts`

Add this tRPC procedure:
```typescript
leads.capture: protectedProcedure
  .input(z.object({
    name: z.string(),
    email: z.string().email(),
    company: z.string(),
    city: z.enum(['nappanee', 'jasper', 'warsaw', 'columbus', 'huntington', 'batesville', 'regional-partners']),
    industry: z.enum(['artisan', 'furniture', 'medical', 'precision', 'manufacturing', 'consulting']),
    grantStackAmount: z.number().positive(),
    requestType: z.enum(['civic-briefing', 'technical-consultation', 'partnership-inquiry']),
  }))
  .mutation(async ({ ctx, input }) => {
    // TODO: Implement
  })
```

**Requirements:**
- Store in `grantLeads` table
- Email notification to contact@pivotmarkets.ai
- Rate limiting: 5 leads per IP per hour
- Return: `{ leadId: string, message: string }`

---

### Task 2: Dynamic Schema Generation (3-4 hours)
**File:** `server/_core/schema.ts` (create new)

Create a utility that generates JSON-LD schema dynamically:
```typescript
export function generateSchema(input: {
  type: 'GovernmentService' | 'ScholarlyArticle' | 'TechArticle' | 'Organization' | 'Review' | 'NewsArticle',
  city?: string,
  industry?: string,
  audience?: string,
}) => string // Returns JSON-LD
```

**Requirements:**
- Support all 6 schema types
- Validate against 2026 JSON-LD standards
- Accept context parameters
- Return formatted JSON-LD string

---

### Task 3: Grant Calculator Logic (2-3 hours)
**File:** `server/db.ts`

Add this database helper:
```typescript
export async function calculateGrantStack(input: {
  city: string,
  industry: string,
  revenue: number,
  employees: number,
}) {
  // TODO: Implement
  return {
    federalGrants: number,
    stateGrants: number,
    localIncentives: number,
    totalAvailable: number,
    estimatedROI: number,
  }
}
```

**Requirements:**
- Implement Indiana Manufacturing Readiness Grant logic
- Calculate federal, state, local totals
- Estimate ROI based on Sovereign Protocol
- Cache results for 24 hours

---

## Important Rules

### ✅ DO:
- Create feature branches for each task: `feature/[task-name]`
- Write tests for your code (vitest)
- Commit frequently with clear messages
- Update DEVELOPER_HANDOFF.md when done

### ❌ DON'T:
- Push directly to `main` branch
- Delete any branch
- Modify schema files without Custodian approval
- Commit credentials or API keys

---

## Testing Your Code

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test server/routers.test.ts

# Watch mode
pnpm test -- --watch
```

**Target:** 100+ tests passing

---

## Committing Your Work

```bash
# Stage your changes
git add .

# Commit with clear message
git commit -m "feat: implement backend lead capture (Task 1)"

# Push to your feature branch
git push origin feature/backend-lead-capture
```

**Commit Message Format:**
```
feat: [description]      # New feature
fix: [description]       # Bug fix
refactor: [description]  # Code refactor
docs: [description]      # Documentation
test: [description]      # Tests
```

---

## When You're Done

1. **Push your feature branch**
   ```bash
   git push origin feature/[task-name]
   ```

2. **Notify the Custodian**
   - Message: "Task [number] complete - ready for review"
   - Include: Commit hash, test results, any blockers

3. **Custodian will:**
   - Review your code
   - Run final tests
   - Merge to main branch
   - Update PROJECT_LOG.md

---

## Troubleshooting

### "Permission denied" error
- Verify your access token is correct
- Re-authenticate: `git config --global credential.helper store`

### "Cannot push to main"
- This is intentional! Use feature branches only
- Create a new branch: `git checkout -b feature/my-task`

### Tests failing
- Run `pnpm test` to see which tests fail
- Check DEVELOPER_HANDOFF.md for specifications
- Ask Custodian for clarification

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `git status` | Check current branch and changes |
| `git branch` | List all branches |
| `git checkout -b feature/name` | Create new feature branch |
| `git pull origin main` | Get latest main branch |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server |
| `pnpm test` | Run test suite |
| `pnpm build` | Build for production |

---

## Support

**Questions?** Check:
1. DEVELOPER_HANDOFF.md (detailed specs)
2. PROJECT_LOG.md (project history)
3. /docs/vision-ai-integration (technical docs)

**Blocked?** Contact Custodian with:
- What you're trying to do
- Error message
- Commit hash

---

## Success Criteria

✅ All 3 tasks completed  
✅ 100+ tests passing  
✅ Zero TypeScript errors  
✅ Code reviewed by Custodian  
✅ Merged to main branch  

**Estimated Timeline:** 7-10 hours  
**Deadline:** [Set by Project Owner]

---

**Welcome to the Sovereign Protocol team!** 🚀

Generated: May 6, 2026  
Custodian: Manus AI Agent
