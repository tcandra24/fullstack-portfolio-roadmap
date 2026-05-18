import { Request, Response, NextFunction } from "express";
import * as budgetService from "../services/budget.service";
import { sendSuccess, sendError } from "../utils/response";

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = "leave-it-here";
    const budgets = await budgetService.getAllBudgets(user);
    sendSuccess(res, 200, "Budgets fetched successfully", budgets);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    const budget = await budgetService.getBudgetById(id, user);
    if (!budget) {
      sendError(res, 404, "Budget not found");
      return;
    }
    sendSuccess(res, 200, "Budget fetched successfully", budget);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = "leave-it-here";
    const budget = await budgetService.createBudget({ ...req.body, user_id: user });
    sendSuccess(res, 201, "Budget created successfully", budget);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    const budget = await budgetService.updateBudget(id, user, req.body);
    sendSuccess(res, 200, "Budget updated successfully", budget);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    await budgetService.deleteBudget(id, user);
    sendSuccess(res, 200, "Budget deleted successfully");
  } catch (err) {
    next(err);
  }
};
