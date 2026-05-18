// src/validations/category.validation.ts
// ─────────────────────────────────────────────────────────────
// Yup validation schemas for the Category resource.
//
// NOTE: Yup schemas are reusable — define them once here and
//       reference them in the validate middleware or controllers.
//
// Usage:
//   import { createCategorySchema } from '../validations/category.validation';
// ─────────────────────────────────────────────────────────────
import * as yup from "yup";

export const createCategorySchema = yup.object({
  body: yup.object({
    name: yup.string().min(10).max(100).required(),
    type: yup.string().oneOf(["INCOME", "EXPENSE"]).required(),
    color: yup.string().required(),
    icon: yup.string().required(),
  }),
});

export const updateCategorySchema = yup.object({
  body: yup.object({
    name: yup.string().min(10).max(100).required(),
    type: yup.string().oneOf(["INCOME", "EXPENSE"]).required(),
    color: yup.string().required(),
    icon: yup.string().required(),
  }),
  params: yup.object({
    id: yup.number().integer().positive().required(),
  }),
});
