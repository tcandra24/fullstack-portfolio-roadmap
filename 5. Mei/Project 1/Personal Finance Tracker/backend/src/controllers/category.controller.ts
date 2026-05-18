// src/controllers/category.controller.ts
// ─────────────────────────────────────────────────────────────
// Category HTTP request handlers (controllers).
//
// NOTE: Controllers only handle HTTP concerns (req/res).
//       All business logic lives in the service layer.
// ─────────────────────────────────────────────────────────────

import { Request, Response, NextFunction } from "express";
import * as categoryService from "../services/category.service";
import { sendSuccess, sendError } from "../utils/response";

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = "leave-it-here";
    const categories = await categoryService.getAllCategories(user);
    sendSuccess(res, 200, "Categories fetched successfully", categories);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    const category = await categoryService.getCategoryById(id, user);
    if (!category) {
      sendError(res, 404, "Category not found");
      return;
    }
    sendSuccess(res, 200, "Category fetched successfully", category);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = "leave-it-here";
    const category = await categoryService.createCategory({ ...req.body, user_id: user });
    sendSuccess(res, 201, "Category created successfully", category);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    const category = await categoryService.updateCategory(id, user, req.body);
    sendSuccess(res, 200, "Category updated successfully", category);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = "leave-it-here";
    await categoryService.deleteCategory(id, user);
    sendSuccess(res, 200, "Category deleted successfully");
  } catch (err) {
    next(err);
  }
};
