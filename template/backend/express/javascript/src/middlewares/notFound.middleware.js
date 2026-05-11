// src/middlewares/notFound.middleware.js
// ─────────────────────────────────────────────────────────────
// 404 catch-all middleware.
//
// NOTE: Register this AFTER all route definitions in app.js
//       but BEFORE the errorHandler.
// ─────────────────────────────────────────────────────────────

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};
