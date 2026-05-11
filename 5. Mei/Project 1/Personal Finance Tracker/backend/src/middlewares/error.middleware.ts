// src/middlewares/error.middleware.ts
// ─────────────────────────────────────────────────────────────
// Global error handler middleware.
//
// NOTE: Express identifies error handlers by their 4-parameter
//       signature (err, req, res, next). This MUST be registered
//       LAST in app.ts, after all routes.
// ─────────────────────────────────────────────────────────────

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  console.error(`[ERROR] ${err.message}`, err.stack);

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
