// src/middlewares/error.middleware.js
// ─────────────────────────────────────────────────────────────
// Global error handler middleware.
//
// NOTE: Express identifies error handlers by their 4-parameter
//       signature (err, req, res, next). This MUST be registered
//       LAST in app.js, after all routes and notFound middleware.
// ─────────────────────────────────────────────────────────────

/**
 * @param {Error} err
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} _next
 */
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
  console.error(`[ERROR] ${err.message}`, err.stack);

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    // NOTE: Only expose stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
