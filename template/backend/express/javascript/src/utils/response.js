// src/utils/response.js
// ─────────────────────────────────────────────────────────────
// Utility helpers for sending consistent JSON responses.
//
// Usage:
//   sendSuccess(res, 200, 'OK', data);
//   sendError(res, 400, 'Validation failed', errors);
// ─────────────────────────────────────────────────────────────

/**
 * @param {import('express').Response} res
 * @param {number} statusCode
 * @param {string} message
 * @param {*} [data]
 */
export const sendSuccess = (res, statusCode, message, data) => {
  res.status(statusCode).json({ success: true, message, data });
};

/**
 * @param {import('express').Response} res
 * @param {number} statusCode
 * @param {string} message
 * @param {*} [errors]
 */
export const sendError = (res, statusCode, message, errors) => {
  res.status(statusCode).json({ success: false, message, errors });
};
