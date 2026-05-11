// src/routes/user.routes.js
// ─────────────────────────────────────────────────────────────
// User resource routes.
//
// NOTE: The validate() middleware runs BEFORE the controller.
//       Invalid requests are rejected here and never reach
//       the controller or service layer.
//
// Mounted at: /api/v1/users  (see src/app.js)
// ─────────────────────────────────────────────────────────────

import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import validate from '../middlewares/validate.middleware.js';
import {
  createUserSchema,
  updateUserSchema,
} from '../validations/user.validation.js';

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
