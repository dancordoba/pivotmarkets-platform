import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, adminProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { sendContactNotification, sendAutoReply, sendAdminNotification, sendAdminEmail } from "./email";
import { createPayment, getAvailableCurrencies, getPaymentStatus, estimatePrice } from "./crypto";
import { createContactSubmission, getContactSubmissions, updateContactSubmissionStatus, createGrantLead, getGrantLeadsByCity, listIntakeRecords, getIntakeRecordWithStaffContext, updateQueuedIntakeRecordState, setIntakeGrantMatchFlag } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  crypto: router({
    currencies: publicProcedure.query(async () => {
      return await getAvailableCurrencies();
    }),
    estimate: publicProcedure
      .input(
        z.object({
          amount: z.number().positive(),
          currencyFrom: z.string().default("USD"),
          currencyTo: z.string().default("XRP"),
        })
      )
      .query(async ({ input }) => {
        return await estimatePrice(input.amount, input.currencyFrom, input.currencyTo);
      }),
    createPayment: publicProcedure
      .input(
        z.object({
          price_amount: z.number().positive(),
          price_currency: z.string().default("USD"),
          pay_currency: z.string().optional(),
          order_description: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const origin = typeof window !== 'undefined' ? window.location.origin : 'https://pivotmarkets.ai';
        return await createPayment({
          ...input,
          success_url: `${origin}/payment/success`,
          cancel_url: `${origin}/payment/cancel`,
        });
      }),
    getStatus: publicProcedure
      .input(z.object({ paymentId: z.string() }))
      .query(async ({ input }) => {
        return await getPaymentStatus(input.paymentId);
      }),
  }),

  leads: router({
    capture: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          city: z.enum(["nappanee", "jasper", "warsaw", "columbus", "huntington", "batesville", "regional-partners"]),
          industry: z.enum(["artisan", "furniture", "medical", "precision", "manufacturing", "consulting"]),
          companyName: z.string().optional(),
          grantInterest: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createGrantLead({
            name: input.name,
            email: input.email,
            phone: input.phone,
            city: input.city,
            industry: input.industry,
            companyName: input.companyName,
            grantInterest: input.grantInterest,
            status: "new",
          });
          return {
            success: true,
            message: `Grant assessment request received for ${input.city}-${input.industry}`,
          };
        } catch (error) {
          console.error("[Leads] Failed to capture lead:", error);
          return {
            success: false,
            message: "Failed to process grant assessment request",
          };
        }
      }),
    getByCity: protectedProcedure
      .input(z.object({ city: z.enum(["nappanee", "jasper", "warsaw"]) }))
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await getGrantLeadsByCity(input.city);
      }),
  }),

  intake: router({
    listRecords: adminProcedure
      .input(
        z.object({
          limit: z.number().int().min(1).max(100).default(50),
          offset: z.number().int().min(0).default(0),
        }).default({ limit: 50, offset: 0 })
      )
      .query(async ({ input }) => {
        return await listIntakeRecords(input.limit, input.offset);
      }),
    getRecord: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
        })
      )
      .query(async ({ input }) => {
        const result = await getIntakeRecordWithStaffContext(input.id);
        if (!result) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Intake record not found" });
        }
        return result;
      }),
    updateQueuedState: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          targetState: z.enum(["accepted", "needs_more_information", "duplicate_or_existing_record"]),
          note: z.string().trim().min(1, "Staff note is required"),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          const result = await updateQueuedIntakeRecordState(input.id, input.targetState, ctx.user.id, input.note);
          if (!result) {
            throw new TRPCError({ code: "SERVICE_UNAVAILABLE", message: "Database is not available" });
          }
          return result;
        } catch (error) {
          if (error instanceof TRPCError) {
            throw error;
          }
          const message = error instanceof Error ? error.message : "Unable to update intake record";
          if (message === "Intake record not found") {
            throw new TRPCError({ code: "NOT_FOUND", message });
          }
          if (message === "Only queued records can be manually transitioned in this phase" || message === "Unsupported target state" || message === "Staff note is required") {
            throw new TRPCError({ code: "BAD_REQUEST", message });
          }
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message });
        }
      }),
    setGrantMatchFlag: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          grantMatchFlagged: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await setIntakeGrantMatchFlag(input.id, input.grantMatchFlagged);
          if (!result) {
            throw new TRPCError({ code: "SERVICE_UNAVAILABLE", message: "Database is not available" });
          }
          return result;
        } catch (error) {
          if (error instanceof TRPCError) {
            throw error;
          }
          const message = error instanceof Error ? error.message : "Unable to update grant match flag";
          if (message === "Intake record not found") {
            throw new TRPCError({ code: "NOT_FOUND", message });
          }
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message });
        }
      }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),          source: z.string().optional(),
          grantStackAmount: z.number().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        try {
          await createContactSubmission({
            name: input.name,
            email: input.email,
            message: input.message || "",
            status: "new",
          });
        } catch (error) {
          console.error("[Contact] Failed to save submission:", error);
        }

        // Send notification to site owner
        const notificationResult = await sendContactNotification(input);
        
        // Send admin notification to dan@myrealestateira.com
        const adminNotificationResult = await sendAdminNotification(input);
        
        // Send auto-reply to visitor
        const autoReplyResult = await sendAutoReply(input);

        return {
          success: notificationResult.success && autoReplyResult.success,
          notificationSent: notificationResult.success,
          adminNotificationSent: adminNotificationResult.success,
          autoReplySent: autoReplyResult.success,
        };
      }),
    getSubmissions: protectedProcedure
      .input(
        z.object({
          limit: z.number().default(50),
          offset: z.number().default(0),
        })
      )
      .query(async ({ input, ctx }) => {
        // Only admin can view submissions
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await getContactSubmissions(input.limit, input.offset);
      }),
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "read", "replied"]),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Only admin can update submissions
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await updateContactSubmissionStatus(input.id, input.status);
      }),
    sendEmail: protectedProcedure
      .input(
        z.object({
          to: z.string().email("Valid email is required"),
          subject: z.string().min(1, "Subject is required"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Only admin can send emails
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await sendAdminEmail(input.to, input.subject, input.message);
      }),
  }),
});

export type AppRouter = typeof appRouter;
