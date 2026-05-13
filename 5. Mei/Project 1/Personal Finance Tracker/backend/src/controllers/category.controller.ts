import { Request, Response, NextFunction } from "express";
import * as categoryService from "../services/category.service";
import { sendSuccess, sendError } from "../utils/response";

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categories = await categoryService.getAllCategories();
    sendSuccess(res, 200, "Categories fetched successfully", categories);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const category = await categoryService.getCategoryById(id);
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
    const category = await categoryService.createCategory(req.body);
    sendSuccess(res, 201, "Category created successfully", category);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const category = await categoryService.updateCategory(id, req.body);
    sendSuccess(res, 200, "Category updated successfully", category);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    await categoryService.deleteCategory(id);
    sendSuccess(res, 200, "Category deleted successfully");
  } catch (err) {
    next(err);
  }
};
