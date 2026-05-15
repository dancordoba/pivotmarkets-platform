# PivotMarkets Rev 2 Staff Dashboard Planning Document

**Author:** Manus AI  
**Date:** May 15, 2026  
**Status:** Pending user approval before implementation

## Executive Summary

This planning document defines the proposed implementation scope for the **PivotMarkets Rev 2 internal staff-only dashboard**. The proposed dashboard is intentionally limited to the five approved capabilities for this phase: viewing intake records, opening a full record context payload, manually updating queued records with a required staff note, flagging records for the future grant matching/truth table workflow, and viewing a read-only grant requirement satisfaction summary.

No production dashboard code should be written until this plan is approved. The plan preserves the current public Rev 2 site boundary by avoiding changes to the approved public routes, avoiding public navigation links to staff functionality, and enforcing staff access with the existing admin-role authentication pattern.

> **Phase boundary:** This dashboard plan does not include the AI strategy memo, risk register, application draft generator, grant match ranking engine, or human review approval workflow. Those remain deferred.

## 1. Fixed Scope and Non-Goals

The implementation should be treated as a staff operations layer over the existing intake handoff, not as a public-facing eligibility or matching product. The receiving endpoint and six response states remain unchanged. The staff dashboard will consume and store intake records for staff review, but it will not expose scoring logic, eligibility scores, private strategy output, or grant match recommendations to the Rev 2 public site.

| Area | Included in This Phase | Explicitly Deferred |
|---|---|---|
| Intake visibility | Staff can view intake records and current response state. | Public users do not get an intake dashboard or record lookup page. |
| Record detail | Staff can open a record and inspect the full organizational context payload. | No public payload display, no AI memo display, and no downloadable generated strategy package. |
| Manual state control | Staff can move **queued** records to **accepted**, **needs_more_information**, or **duplicate_or_existing_record** with a required note. | No automated approval workflow, no human review approval queue beyond the manual state action. |
| Grant workflow preparation | Staff can flag a record for future grant matching/truth table processing. | No truth table logic execution, grant match ranking, or AI-generated recommendation. |
| Requirement summary | Staff can view a read-only requirement satisfaction summary. | No editable requirements engine, scoring formula, or applicant-facing eligibility score. |

## 2. Dashboard Layout Plan

The staff dashboard should use the existing authenticated dashboard shell rather than introducing a new layout system. The shell already provides sign-in gating, user identity display, logout, mobile handling, and sidebar navigation behavior. The staff pages should be accessible only by direct staff route and should not be linked from any public Rev 2 page.

### 2.1 Proposed Route Structure

The internal routes should be added as admin-only application routes, separate from the ten approved public Rev 2 routes. The top-level staff route can redirect to the primary intake queue for convenience, while all meaningful dashboard functionality remains under `/staff/intake`.

| Route | Purpose | Primary Capabilities |
|---|---|---|
| `/staff` | Internal staff dashboard landing route. It may redirect to `/staff/intake` or show a compact operational overview. | Entry point for authenticated admin users only. |
| `/staff/intake` | Intake record list with filters, state badges, grant-flag indicator, and record-opening affordance. | View all intake records with response states. |
| `/staff/intake/:id` | Intake record detail page with full context payload, state action panel, staff notes history, grant flag toggle, and requirement summary. | Open individual record, update queued state with required note, flag for grant workflow, view read-only summary. |

### 2.2 Sidebar Navigation

The dashboard sidebar should remain minimal to avoid suggesting deferred functionality. The navigation should use staff-specific labels and should not include links to AI memo generation, risk registers, grant ranking, or application drafting.

| Sidebar Item | Path | Rationale |
|---|---|---|
| Intake Queue | `/staff/intake` | Primary operational page for staff review of intake records. |
| Contact Submissions, optional existing admin link | Existing admin contact route if retained | Existing internal admin precedent; include only if it already exists as an internal route and does not alter public navigation. |
| Sign Out | Existing dashboard user menu | Already provided by the dashboard shell. |

The visual treatment should continue the existing PivotMarkets B2B design language already present in the app: navy/strategic blue palette, 8px border radius, and restrained advisory tone.

### 2.3 Page-Level Breakdown

The list page should prioritize fast triage. Each row or card should show the organization name, contact name, contact email, entity type, location, current response state, grant workflow flag status, and submission timestamp. Staff should be able to open the detail page from the row, but state changes should be performed on the detail page to ensure staff see the full context before acting.

| Page | Main Sections | Expected Behavior |
|---|---|---|
| `/staff/intake` | Header, state filters, intake table/list, empty state, loading/error states | Shows all intake records sorted newest first. Filters can include all, queued, accepted, needs more information, duplicate, rejected, and error. |
| `/staff/intake/:id` | Record header, organization/contact facts, full payload viewer, state action panel, grant flag panel, read-only requirement summary, staff note history | Allows staff to inspect full context before making a permitted state transition. |

The detail page should make the state action panel conditional. If the record is not currently **queued**, the state transition controls should be disabled or hidden, while the staff note history and read-only information remain visible. This preserves the approved workflow rule that only queued records can be manually moved to the three permitted review states in this phase.

## 3. Data Model Additions

Two new Drizzle tables are sufficient for the approved dashboard capabilities: `intakeRecords` and `staffNotes`. A third static source for grant requirement summary definitions can be implemented as static server-side data at first, rather than a table, unless the user wants staff-editable requirement definitions in a future phase.

### 3.1 `intakeRecords` Table

The `intakeRecords` table should store normalized fields for list filtering and display, plus the complete submitted payload as JSON text for full staff review. The table should preserve the six approved response states exactly and should not add public-facing derived scoring fields.

| Field | Proposed Type | Purpose |
|---|---:|---|
| `id` | `int` auto-increment primary key | Internal record identifier. |
| `contactName` | `varchar(255)` nullable or not-null depending on final intake validation | List and detail display. |
| `contactEmail` | `varchar(320)` nullable or not-null depending on final intake validation | Staff follow-up context. |
| `orgName` | `varchar(255)` nullable | Organization display and search. |
| `orgLocation` | `varchar(255)` nullable | Geographic context for grant requirement summary. |
| `entityType` | `varchar(120)` nullable | Entity classification for staff review. |
| `projectGoal` | `text` nullable | High-level project objective. |
| `consentToContact` | `boolean` default `false` | Staff follow-up compliance context. |
| `fullPayload` | `text` not null | Complete organizational context payload as JSON string. |
| `responseState` | `mysqlEnum` with six approved states | Current intake response state. |
| `grantMatchFlagged` | `boolean` default `false` | Marks the record for deferred grant matching/truth table workflow. |
| `createdAt` | `timestamp` default now | Submission creation timestamp. |
| `updatedAt` | `timestamp` default now/on update now | Last update timestamp. |

The six-state enum should be exactly: `accepted`, `queued`, `needs_more_information`, `duplicate_or_existing_record`, `rejected_invalid_payload`, and `error`.

### 3.2 `staffNotes` Table

The `staffNotes` table should create an audit trail for manual state transitions. Every queued-record transition performed by staff must include a non-empty note. This keeps operational decisions traceable without creating the deferred human approval workflow.

| Field | Proposed Type | Purpose |
|---|---:|---|
| `id` | `int` auto-increment primary key | Internal note identifier. |
| `intakeRecordId` | `int` not null | Associated intake record. |
| `staffUserId` | `int` not null | Staff/admin user who performed the action. |
| `previousState` | same six-state enum | State before the manual change. |
| `newState` | same six-state enum | State after the manual change. |
| `note` | `text` not null | Required staff rationale. |
| `createdAt` | `timestamp` default now | Audit timestamp. |

### 3.3 Grant Requirement Satisfaction Summary

For this phase, the grant requirement satisfaction summary should be read-only and conservative. It should not claim to provide eligibility scoring or final grant matching. A static server-side requirement set is recommended for the first implementation because it supports the approved staff-only view without introducing an admin-editable grant rules engine.

| Summary Element | Source | Display Behavior |
|---|---|---|
| Requirement label | Static server-side requirement definitions | Display as plain staff reference text. |
| Satisfaction status | Derived from the intake payload where a direct field exists | Show simple statuses such as **satisfied**, **not satisfied**, or **unknown**. |
| Evidence | Field excerpt or missing-field explanation | Provide a concise explanation without scoring. |
| Notes | Static clarifying copy | State that this is a read-only summary and not a grant determination. |

A database-backed `grantRequirements` table should be deferred unless the next phase requires staff-managed requirement definitions, versioning, or program-specific rule sets.

## 4. API and Server-Side Access Plan

The staff dashboard should use tRPC procedures protected by the existing admin-only middleware. No public REST endpoint is needed for dashboard operations. The procedures should be grouped under a new `intake` router segment in the existing server router.

| Procedure | Protection | Purpose |
|---|---|---|
| `intake.listRecords` | Admin only | Returns paginated or bounded list of intake records sorted newest first. |
| `intake.getRecord` | Admin only | Returns one intake record, full payload, staff notes, and read-only requirement summary. |
| `intake.updateQueuedState` | Admin only | Allows transition from **queued** to **accepted**, **needs_more_information**, or **duplicate_or_existing_record** only, requiring a non-empty staff note. |
| `intake.setGrantMatchFlag` | Admin only | Sets or clears `grantMatchFlagged` on a record. |

Validation should be server-side, not only client-side. The server should reject attempts to update non-queued records, reject unsupported target states, and reject blank notes. This ensures that dashboard business rules are enforced even if a client request is crafted manually.

## 5. Auth Protection Approach

The staff dashboard should rely on the existing auth stack: Manus OAuth creates a session cookie, the server resolves the cookie to a database-backed user, and admin-only tRPC middleware enforces `role === "admin"`. The client should follow the existing internal admin-page precedent by using `useAuth()` and redirecting non-admin users to `/` after auth loading completes.

| Layer | Proposed Control | Reason |
|---|---|---|
| Public navigation | Do not link `/staff` routes from public Rev 2 pages | Prevents accidental discovery through normal public UX. |
| Client routing | Add `/staff` routes with `useAuth()` admin check and redirect | Provides immediate UX-level protection and avoids rendering staff content to non-admin users. |
| Server API | Use `adminProcedure` for all staff dashboard procedures | Enforces role-based access independent of the client. |
| Data mutations | Validate role, current state, target state, and required note server-side | Prevents unauthorized or invalid state transitions. |

This approach intentionally avoids creating a separate auth system. It preserves the current role model and keeps the staff dashboard separate from the public Rev 2 experience.

## 6. Intake Storage Integration Question

One implementation detail requires approval before code begins: whether the same-origin `/api/funding-intake` proxy should also persist a local `intakeRecords` row at submission time, or whether the dashboard should be seeded/imported from another internal source.

The recommended approach is to persist the intake record locally during the same-origin proxy request after the Funding Engine returns a response. This creates the dashboard source of truth without changing the external receiving endpoint or the six response states. The proxy would forward the same request as it does today, receive the Funding Engine response, then store the normalized fields, full payload, and returned response state locally for staff review. If storage fails, the proxy should log the failure without changing the external response contract to the public form.

| Option | Pros | Cons | Recommendation |
|---|---|---|---|
| Persist locally in `/api/funding-intake` proxy after external response | Captures live public submissions automatically; no receiving endpoint change; dashboard immediately reflects form activity | Adds local DB write to the proxy path | Recommended |
| Build dashboard against a separate import/seed process | Keeps proxy simpler | Dashboard may not show live submissions without another ingestion job | Not recommended for this phase |

## 7. Validation Plan After Approval

After implementation approval, validation should include TypeScript checks, production build, and browser testing. Browser testing should confirm that public routes remain unchanged, unauthenticated users cannot view staff pages, non-admin users are redirected, admin users can view records, queued state transitions require a note, and read-only summary content does not expose deferred scoring or strategy outputs.

| Validation Item | Command or Test | Expected Result |
|---|---|---|
| TypeScript | `pnpm check` | No type errors. |
| Production build | `pnpm build` | Build completes successfully. |
| Public route regression | Manual browser pass across ten approved public routes | No public route content or navigation changes. |
| Auth protection | Visit `/staff/intake` while unauthenticated/non-admin | No staff content exposed; redirect/sign-in gate occurs. |
| Admin list | Visit `/staff/intake` as admin | Intake records show state and grant flag status. |
| Detail view | Open `/staff/intake/:id` | Full payload, note history, flag panel, and requirement summary render. |
| State transition | Attempt queued transition without a note | Server/client rejects with required note error. |
| Invalid transition | Attempt to update non-queued record | Server rejects transition. |

## 8. Approval Request

Please approve or revise this plan before any production code is written. The proposed implementation will stay strictly within the five approved dashboard capabilities and will not modify the Rev 2 public routes, the receiving endpoint, or the six intake response states.

**Requested approval:** Proceed with implementation of the staff-only dashboard using the route structure, data model additions, admin-only tRPC procedures, and local proxy persistence approach described above.
