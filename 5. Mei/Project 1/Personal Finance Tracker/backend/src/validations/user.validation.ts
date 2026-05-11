// src/validations/user.validation.ts
// ─────────────────────────────────────────────────────────────
// Yup validation schemas for the User resource.
//
// NOTE: Yup schemas are reusable — define them once here and
//       reference them in the validate middleware or controllers.
//
// Usage:
//   import { createUserSchema } from '../validations/user.validation';
// ─────────────────────────────────────────────────────────────

import * as yup from 'yup';

export const createUserSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100)
      .required('Name is required'),
    email: yup
      .string()
      .email('Must be a valid email address')
      .required('Email is required'),
  }),
});

export const updateUserSchema = yup.object({
  body: yup.object({
    name: yup.string().min(2).max(100).optional(),
    email: yup.string().email().optional(),
  }),
  params: yup.object({
    id: yup.number().integer().positive().required(),
  }),
});

// NOTE: Add more schemas below as your resources grow.
//       Keep one file per resource (e.g., post.validation.ts).
