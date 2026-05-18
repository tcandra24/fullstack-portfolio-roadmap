// src/app.ts
// ─────────────────────────────────────────────────────────────
// Express application factory.
// Register global middleware and route groups here.
// ─────────────────────────────────────────────────────────────

import express, { Application, Request, Response } from "express";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import BudgetRoutes from "./routes/budget.routes";
import { errorHandler } from "./middlewares/error.middleware";
import { notFound } from "./middlewares/notFound.middleware";

const app: Application = express();

// ── Global Middleware ─────────────────────────────────────────
// NOTE: express.json() parses incoming JSON request bodies.
//       Always place it before your route definitions.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ──────────────────────────────────────────────
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── API Routes ────────────────────────────────────────────────
// NOTE: Prefix all API routes with /api/v1 for versioning.
app.use("/api/v1/users", userRoutes);

app.use("/api/v1/categories", categoryRoutes);

app.use("/api/v1/budgets", BudgetRoutes);

// ── Error Handling ────────────────────────────────────────────
// NOTE: notFound must come after all routes (catches unmatched paths).
//       errorHandler must be the very last middleware (4 params).
app.use(notFound);
app.use(errorHandler);

export default app;
