import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, contactSubmissions, InsertContactSubmission, grantLeads, InsertGrantLead } from "../drizzle/schema";
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

// TODO: add feature queries here as your schema grows.
