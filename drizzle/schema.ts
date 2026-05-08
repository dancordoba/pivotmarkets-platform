import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const contactSubmissions = mysqlTable("contactSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

// Partner Authority Dashboard Tables
export const partners = mysqlTable("partners", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  organizationName: varchar("organizationName", { length: 255 }).notNull(),
  organizationType: mysqlEnum("organizationType", ["chamber", "library", "school", "nonprofit"]).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 2 }).notNull(),
  contactEmail: varchar("contactEmail", { length: 320 }).notNull(),
  contactPhone: varchar("contactPhone", { length: 20 }),
  websiteUrl: varchar("websiteUrl", { length: 2048 }),
  totalPoints: int("totalPoints").default(0).notNull(),
  verificationStatus: int("verificationStatus").default(0).notNull(),
  complianceStatus: mysqlEnum("complianceStatus", ["compliant", "non-compliant", "suspended"]).default("compliant").notNull(),
  slmApiKey: varchar("slmApiKey", { length: 255 }),
  slmActive: boolean("slmActive").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Partner = typeof partners.$inferSelect;
export type InsertPartner = typeof partners.$inferInsert;

export const missions = mysqlTable("missions", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  tier: mysqlEnum("tier", ["tier1", "tier2", "tier3"]).notNull(),
  points: int("points").notNull(),
  category: mysqlEnum("category", ["directory", "social", "content"]).notNull(),
  instructions: text("instructions").notNull(),
  masterclassContent: text("masterclassContent"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Mission = typeof missions.$inferSelect;
export type InsertMission = typeof missions.$inferInsert;

export const partnerMissions = mysqlTable("partnerMissions", {
  id: int("id").autoincrement().primaryKey(),
  partnerId: int("partnerId").notNull(),
  missionId: int("missionId").notNull(),
  status: mysqlEnum("status", ["pending", "submitted", "verified", "claimed"]).default("pending").notNull(),
  submissionUrl: varchar("submissionUrl", { length: 2048 }),
  verificationNotes: text("verificationNotes"),
  pointsClaimed: int("pointsClaimed").default(0).notNull(),
  submittedAt: timestamp("submittedAt"),
  verifiedAt: timestamp("verifiedAt"),
  claimedAt: timestamp("claimedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PartnerMission = typeof partnerMissions.$inferSelect;
export type InsertPartnerMission = typeof partnerMissions.$inferInsert;

export const rewardTiers = mysqlTable("rewardTiers", {
  id: int("id").autoincrement().primaryKey(),
  name: mysqlEnum("name", ["bronze", "silver", "gold", "platinum"]).notNull().unique(),
  pointsRequired: int("pointsRequired").notNull(),
  reward: varchar("reward", { length: 255 }).notNull(),
  description: text("description").notNull(),
  unlocksFeature: varchar("unlocksFeature", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type RewardTier = typeof rewardTiers.$inferSelect;
export type InsertRewardTier = typeof rewardTiers.$inferInsert;

export const partnerRewards = mysqlTable("partnerRewards", {
  id: int("id").autoincrement().primaryKey(),
  partnerId: int("partnerId").notNull(),
  rewardTierId: int("rewardTierId").notNull(),
  unlockedAt: timestamp("unlockedAt").defaultNow().notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PartnerReward = typeof partnerRewards.$inferSelect;
export type InsertPartnerReward = typeof partnerRewards.$inferInsert;

export const killSwitchLog = mysqlTable("killSwitchLog", {
  id: int("id").autoincrement().primaryKey(),
  partnerId: int("partnerId").notNull(),
  action: mysqlEnum("action", ["revoked", "restored", "suspended", "reactivated"]).notNull(),
  reason: text("reason"),
  triggeredBy: int("triggeredBy"),
  slmKeyRevoked: boolean("slmKeyRevoked").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type KillSwitchLog = typeof killSwitchLog.$inferSelect;
export type InsertKillSwitchLog = typeof killSwitchLog.$inferInsert;
// Grant Stack Lead Capture Table
export const grantLeads = mysqlTable("grantLeads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  city: mysqlEnum("city", ["nappanee", "jasper", "warsaw", "columbus", "huntington", "batesville", "regional-partners"]).notNull(),
  industry: mysqlEnum("industry", ["artisan", "furniture", "medical", "precision", "manufacturing", "consulting"]).notNull(),
  companyName: varchar("companyName", { length: 255 }),
  grantInterest: varchar("grantInterest", { length: 500 }),
  status: mysqlEnum("status", ["new", "contacted", "qualified", "converted"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GrantLead = typeof grantLeads.$inferSelect;
export type InsertGrantLead = typeof grantLeads.$inferInsert;
