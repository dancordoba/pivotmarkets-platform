import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

const fundingIntakeEndpoint = "https://3000-ie30avmzogehqzr82k40n-7de9ed1b.us2.manus.computer/api/funding-intake";
const fundingIntakeHealthEndpoint = "https://3000-ie30avmzogehqzr82k40n-7de9ed1b.us2.manus.computer/api/funding-intake/health";

async function readJsonSafely(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return { status: "error", message: "Funding Engine returned a non-JSON response." };
  }
}

function registerFundingIntakeProxyRoutes(app: express.Express) {
  app.get("/api/funding-intake/health", async (_req, res) => {
    try {
      const upstream = await fetch(fundingIntakeHealthEndpoint, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await readJsonSafely(upstream);

      res.status(upstream.status).json(data);
    } catch {
      res.status(503).json({
        status: "error",
        service: "pivotmarkets-funding-2-receiver",
        acceptedHandoffVersion: "rev2-public-intent-v1",
        message: "Funding Engine health check could not be reached from the PivotMarkets public site server.",
      });
    }
  });

  app.post("/api/funding-intake", async (req, res) => {
    try {
      const upstream = await fetch(fundingIntakeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      const data = await readJsonSafely(upstream);

      res.status(upstream.status).json(data);
    } catch {
      res.status(502).json({
        status: "error",
        message: "Funding Engine handoff could not be completed from the PivotMarkets public site server.",
      });
    }
  });
}

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // Same-origin Funding Engine bridge routes must be registered before SPA fallback handling.
  registerFundingIntakeProxyRoutes(app);
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
