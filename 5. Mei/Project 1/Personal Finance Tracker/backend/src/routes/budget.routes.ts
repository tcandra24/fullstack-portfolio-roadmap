import { Router } from "express";
import * as budgetController from "../controllers/budget.controller";
import validate from "../middlewares/validate.middleware";
import { createBudgetSchema, updateBudgetSchema } from "../validations/budget.validation";

const router = Router();

// GET    /api/v1/budgets
router.get("/", budgetController.getAll);

// GET    /api/v1/budgets/:id
router.get("/:id", budgetController.getOne);

// POST   /api/v1/budgets
router.post("/", validate(createBudgetSchema), budgetController.create);

// PUT    /api/v1/budgets/:id
router.put("/:id", validate(updateBudgetSchema), budgetController.update);

// DELETE /api/v1/budgets/:id
router.delete("/:id", budgetController.remove);

export default router;
