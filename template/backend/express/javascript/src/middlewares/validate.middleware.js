// src/middlewares/validate.middleware.js
// ─────────────────────────────────────────────────────────────
// Generic Yup validation middleware factory.
//
// NOTE: Pass any Yup schema to validate({ body, params, query })
//       from the request. Returns 400 with field-level errors if
//       validation fails; calls next() if it passes.
//
// Usage in a route file:
//   import validate from '../middlewares/validate.middleware.js';
//   import { createUserSchema } from '../validations/user.validation.js';
//
//   router.post('/', validate(createUserSchema), userController.create);
// ─────────────────────────────────────────────────────────────

import { ValidationError } from 'yup';
import { sendError } from '../utils/response.js';

/**
 * @param {import('yup').AnyObjectSchema} schema
 */
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(
      { body: req.body, params: req.params, query: req.query },
      { abortEarly: false } // NOTE: abortEarly:false collects ALL errors at once
    );
    next();
  } catch (err) {
    if (err instanceof ValidationError) {
      // Shape errors as { fieldName: 'error message' }
      const errors = err.inner.reduce((acc, e) => {
        if (e.path) {
          acc[e.path.replace(/^(body|params|query)\./, '')] = e.message;
        }
        return acc;
      }, {});
      sendError(res, 400, 'Validation failed', errors);
      return;
    }
    next(err);
  }
};

export default validate;
