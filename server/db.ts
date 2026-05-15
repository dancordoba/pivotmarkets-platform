import { and, eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, contactSubmissions, InsertContactSubmission, grantLeads, InsertGrantLead, intakeRecords, staffNotes } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createContactSubmission(submission: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create submission: database not available");
    return undefined;
  }

  try {
    const result = await db.insert(contactSubmissions).values(submission);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    throw error;
  }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get submissions: database not available");
    return [];
  }

  try {
    const result = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("[Database] Failed to get contact submissions:", error);
    return [];
  }
}

export async function updateContactSubmissionStatus(id: number, status: "new" | "read" | "replied") {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update submission: database not available");
    return undefined;
  }

  try {
    const result = await db
      .update(contactSubmissions)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactSubmissions.id, id));
    return result;
  } catch (error) {
    console.error("[Database] Failed to update contact submission:", error);
    throw error;
  }
}

// Grant Lead Capture Functions
export async function createGrantLead(lead: InsertGrantLead) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create grant lead: database not available");
    return undefined;
  }

  try {
    const result = await db.insert(grantLeads).values(lead);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create grant lead:", error);
    throw error;
  }
}

export async function getGrantLeadsByCity(city: "nappanee" | "jasper" | "warsaw" | "columbus" | "huntington" | "batesville" | "regional-partners") {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get grant leads: database not available");
    return [];
  }

  try {
    const result = await db
      .select()
      .from(grantLeads)
      .where(eq(grantLeads.city, city))
      .orderBy(desc(grantLeads.createdAt));
    return result;
  } catch (error) {
    console.error("[Database] Failed to get grant leads:", error);
    return [];
  }
}

type IntakeResponseState = "accepted" | "queued" | "needs_more_information" | "duplicate_or_existing_record" | "rejected_invalid_payload" | "error";

type RequirementSummaryStatus = "satisfied" | "partially_satisfied" | "not_satisfied";

export type RequirementSummaryItem = {
  id: string;
  label: string;
  status: RequirementSummaryStatus;
  evidence: string;
  notes: string;
};

const permittedQueuedTargetStates = ["accepted", "needs_more_information", "duplicate_or_existing_record"] as const;

function parseIntakePayload(fullPayload: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(fullPayload);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed as Record<string, unknown> : {};
  } catch {
    return {};
  }
}

function getNestedString(payload: Record<string, unknown>, paths: string[][]): string | undefined {
  for (const path of paths) {
    let current: unknown = payload;
    for (const key of path) {
      if (!current || typeof current !== "object" || Array.isArray(current)) {
        current = undefined;
        break;
      }
      current = (current as Record<string, unknown>)[key];
    }
    if (typeof current === "string" && current.trim().length > 0) {
      return current.trim();
    }
    if (typeof current === "number" || typeof current === "boolean") {
      return String(current);
    }
  }
  return undefined;
}

function getNestedBoolean(payload: Record<string, unknown>, paths: string[][]): boolean | undefined {
  for (const path of paths) {
    let current: unknown = payload;
    for (const key of path) {
      if (!current || typeof current !== "object" || Array.isArray(current)) {
        current = undefined;
        break;
      }
      current = (current as Record<string, unknown>)[key];
    }
    if (typeof current === "boolean") {
      return current;
    }
    if (typeof current === "string") {
      const normalized = current.trim().toLowerCase();
      if (["true", "yes", "y", "1"].includes(normalized)) return true;
      if (["false", "no", "n", "0"].includes(normalized)) return false;
    }
  }
  return undefined;
}

function buildRequirementSummary(record: typeof intakeRecords.$inferSelect): RequirementSummaryItem[] {
  const payload = parseIntakePayload(record.fullPayload);
  const orgName = record.orgName ?? getNestedString(payload, [["organization", "name"], ["orgName"], ["organizationName"]]);
  const orgLocation = record.orgLocation ?? getNestedString(payload, [["organization", "location"], ["orgLocation"], ["location"], ["city"], ["state"]]);
  const entityType = record.entityType ?? getNestedString(payload, [["organization", "entityType"], ["entityType"], ["organizationType"], ["entity_type"]]);
  const projectGoal = record.projectGoal ?? getNestedString(payload, [["project", "goal"], ["projectGoal"], ["fundingUse"], ["grantInterest"], ["message"]]);
  const contactEmail = record.contactEmail ?? getNestedString(payload, [["contact", "email"], ["email"], ["contactEmail"]]);
  const consentToContact = record.consentToContact || getNestedBoolean(payload, [["consentToContact"], ["contact", "consentToContact"], ["consent", "contact"]]) === true;

  return [
    {
      id: "organization_identity",
      label: "Organization identity supplied",
      status: orgName ? "satisfied" : "not_satisfied",
      evidence: orgName ? `Organization identified as ${orgName}.` : "No organization name was found in normalized fields or submitted payload.",
      notes: "Read-only staff reference; not a grant eligibility score.",
    },
    {
      id: "service_location",
      label: "Service location supplied",
      status: orgLocation ? "satisfied" : "not_satisfied",
      evidence: orgLocation ? `Location context supplied: ${orgLocation}.` : "No location context was found in normalized fields or submitted payload.",
      notes: "Used only to help staff identify possible geography-dependent grant requirements.",
    },
    {
      id: "entity_classification",
      label: "Entity classification supplied",
      status: entityType ? "satisfied" : "not_satisfied",
      evidence: entityType ? `Entity type supplied: ${entityType}.` : "No entity type or organization classification was found.",
      notes: "Conservative summary based on direct submitted fields only.",
    },
    {
      id: "project_need",
      label: "Project or funding need described",
      status: projectGoal && projectGoal.length >= 40 ? "satisfied" : projectGoal ? "partially_satisfied" : "not_satisfied",
      evidence: projectGoal ? `Project context excerpt: ${projectGoal.slice(0, 180)}${projectGoal.length > 180 ? "…" : ""}` : "No project goal or funding-use narrative was found.",
      notes: "Partial status means staff should review the full payload before triggering matching work.",
    },
    {
      id: "contact_readiness",
      label: "Contact path and follow-up consent supplied",
      status: contactEmail && consentToContact ? "satisfied" : contactEmail || consentToContact ? "partially_satisfied" : "not_satisfied",
      evidence: contactEmail && consentToContact ? `Contact email ${contactEmail} is present and contact consent is recorded.` : contactEmail ? `Contact email ${contactEmail} is present, but contact consent was not confirmed.` : consentToContact ? "Contact consent is recorded, but no contact email was found." : "No contact email or contact consent was found.",
      notes: "This does not authorize outreach beyond the submitted consent context and staff policy.",
    },
  ];
}

export async function listIntakeRecords(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot list intake records: database not available");
    return [];
  }

  return await db
    .select()
    .from(intakeRecords)
    .orderBy(desc(intakeRecords.createdAt))
    .limit(limit)
    .offset(offset);
}

export async function getIntakeRecordWithStaffContext(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get intake record: database not available");
    return undefined;
  }

  const records = await db.select().from(intakeRecords).where(eq(intakeRecords.id, id)).limit(1);
  if (records.length === 0) {
    return undefined;
  }

  const notes = await db
    .select()
    .from(staffNotes)
    .where(eq(staffNotes.intakeRecordId, id))
    .orderBy(desc(staffNotes.createdAt));

  return {
    record: records[0],
    staffNotes: notes,
    requirementSummary: buildRequirementSummary(records[0]),
  };
}

export async function updateQueuedIntakeRecordState(id: number, targetState: typeof permittedQueuedTargetStates[number], staffUserId: number, note: string) {
  const trimmedNote = note.trim();
  if (!permittedQueuedTargetStates.includes(targetState)) {
    throw new Error("Unsupported target state");
  }
  if (!trimmedNote) {
    throw new Error("Staff note is required");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update intake record: database not available");
    return undefined;
  }

  const records = await db.select().from(intakeRecords).where(eq(intakeRecords.id, id)).limit(1);
  if (records.length === 0) {
    throw new Error("Intake record not found");
  }
  const record = records[0];
  if (record.responseState !== "queued") {
    throw new Error("Only queued records can be manually transitioned in this phase");
  }

  await db
    .update(intakeRecords)
    .set({ responseState: targetState, updatedAt: new Date() })
    .where(and(eq(intakeRecords.id, id), eq(intakeRecords.responseState, "queued")));

  await db.insert(staffNotes).values({
    intakeRecordId: id,
    staffUserId,
    previousState: record.responseState as IntakeResponseState,
    newState: targetState,
    note: trimmedNote,
  });

  return await getIntakeRecordWithStaffContext(id);
}

export async function setIntakeGrantMatchFlag(id: number, grantMatchFlagged: boolean) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update grant match flag: database not available");
    return undefined;
  }

  const records = await db.select().from(intakeRecords).where(eq(intakeRecords.id, id)).limit(1);
  if (records.length === 0) {
    throw new Error("Intake record not found");
  }

  await db
    .update(intakeRecords)
    .set({ grantMatchFlagged, updatedAt: new Date() })
    .where(eq(intakeRecords.id, id));

  return await getIntakeRecordWithStaffContext(id);
}

// TODO: add feature queries here as your schema grows.
