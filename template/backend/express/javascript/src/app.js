// src/app.js
// ─────────────────────────────────────────────────────────────
// Express application setup.
// Register global middleware and route groups here.
//
// NOTE: Middleware order matters.
//       1. Body parsers first
//       2. Routes
//       3. notFound (must be after all routes)
//       4. errorHandler (must be last — 4 params)
// ─────────────────────────────────────────────────────────────

import express from 'express';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFound } from './middlewares/notFound.middleware.js';

const app = express();

// ── Global Middleware ─────────────────────────────────────────
// NOTE: express.json() parses incoming JSON bodies.
//       Always place before route definitions.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ──────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API Routes ────────────────────────────────────────────────
// NOTE: All routes are prefixed with /api/v1 for versioning.
app.use('/api/v1/users', userRoutes);

// ── Error Handling ────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;
