// src/validations/user.validation.js
// ─────────────────────────────────────────────────────────────
// Yup validation schemas for the User resource.
//
// NOTE: Define all schemas here and import them into the
//       validate middleware via your route file.
//       Keep one file per resource (post.validation.js, etc.)
//
// Usage:
//   import { createUserSchema } from '../validations/user.validation.js';
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
    id: yup
      .number()
      .integer()
      .positive()
      .required('ID is required'),
  }),
});

// NOTE: Add more schemas below as your resources grow.
