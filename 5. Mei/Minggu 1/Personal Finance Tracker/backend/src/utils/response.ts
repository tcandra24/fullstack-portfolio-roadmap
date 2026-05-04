// src/utils/response.ts
// ─────────────────────────────────────────────────────────────
// Utility helpers for sending consistent JSON responses.
//
// Usage:
//   sendSuccess(res, 200, 'OK', data);
//   sendError(res, 400, 'Validation failed', errors);
// ─────────────────────────────────────────────────────────────

import { Response } from 'express';
import { ApiResponse } from '../types';

export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T
): void => {
  const body: ApiResponse<T> = { success: true, message, data };
  res.status(statusCode).json(body);
};

export const sendError = (
  res: Response,
  statusCode: number,
  message: string,
  errors?: unknown
): void => {
  const body: ApiResponse = { success: false, message, errors };
  res.status(statusCode).json(body);
};
