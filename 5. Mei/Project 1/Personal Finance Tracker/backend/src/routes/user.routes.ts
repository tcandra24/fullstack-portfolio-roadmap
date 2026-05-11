// src/routes/user.routes.ts
// ─────────────────────────────────────────────────────────────
// User resource routes.
//
// NOTE: The validate() middleware is called BEFORE the controller.
//       Requests that fail validation never reach the controller.
//
// Mounted at: /api/v1/users  (see src/app.ts)
// ─────────────────────────────────────────────────────────────

import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import validate from '../middlewares/validate.middleware';
import {
  createUserSchema,
  updateUserSchema,
} from '../validations/user.validation';

const router = Router();

// GET    /api/v1/users
router.get('/', userController.getAll);

// GET    /api/v1/users/:id
router.get('/:id', userController.getOne);

// POST   /api/v1/users
router.post('/', validate(createUserSchema), userController.create);

// PUT    /api/v1/users/:id
router.put('/:id', validate(updateUserSchema), userController.update);

// DELETE /api/v1/users/:id
router.delete('/:id', userController.remove);

export default router;
