// src/middlewares/validate.middleware.ts
// ─────────────────────────────────────────────────────────────
// Generic Yup validation middleware factory.
//
// NOTE: Wraps any Yup schema and validates { body, params, query }
//       from the Express request. Returns 400 with field-level
//       errors if validation fails; calls next() if it passes.
//
// Usage:
//   import validate from '../middlewares/validate.middleware';
//   import { createUserSchema } from '../validations/user.validation';
//
//   router.post('/', validate(createUserSchema), userController.create);
// ─────────────────────────────────────────────────────────────

import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';
import { sendError } from '../utils/response';

const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate(
        { body: req.body, params: req.params, query: req.query },
        { abortEarly: false } // NOTE: abortEarly:false returns ALL errors at once
      );
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        // Shape errors as { field: message } pairs
        const errors = err.inner.reduce<Record<string, string>>((acc, e) => {
          if (e.path) acc[e.path.replace(/^(body|params|query)\./, '')] = e.message;
          return acc;
        }, {});
        sendError(res, 400, 'Validation failed', errors);
        return;
      }
      next(err);
    }
  };

export default validate;
