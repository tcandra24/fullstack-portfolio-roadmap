// src/routes/category.routes.ts
// ─────────────────────────────────────────────────────────────
// Category resource routes.
//
// NOTE: The validate() middleware is called BEFORE the controller.
//       Requests that fail validation never reach the controller.
//
// Mounted at: /api/v1/categories  (see src/app.ts)
// ─────────────────────────────────────────────────────────────

import { Router } from "express";
import * as categoryController from "../controllers/category.controller";
import validate from "../middlewares/validate.middleware";
import { createCategorySchema, updateCategorySchema } from "../validations/category.validation";

const router = Router();

// GET    /api/v1/categories
router.get("/", categoryController.getAll);

// GET    /api/v1/categories/:id
router.get("/:id", categoryController.getOne);

// POST   /api/v1/categories
router.post("/", validate(createCategorySchema), categoryController.create);

// PUT    /api/v1/categories/:id
router.put("/:id", validate(updateCategorySchema), categoryController.update);

// DELETE /api/v1/categories/:id
router.delete("/:id", categoryController.remove);

export default router;
