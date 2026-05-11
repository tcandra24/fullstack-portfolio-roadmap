// src/controllers/user.controller.ts
// ─────────────────────────────────────────────────────────────
// User HTTP request handlers (controllers).
//
// NOTE: Controllers only handle HTTP concerns (req/res).
//       All business logic lives in the service layer.
// ─────────────────────────────────────────────────────────────

import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";
import { sendSuccess, sendError } from "../utils/response";

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    sendSuccess(res, 200, "Users fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = await userService.getUserById(id);
    if (!user) {
      sendError(res, 404, "User not found");
      return;
    }
    sendSuccess(res, 200, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    sendSuccess(res, 201, "User created successfully", user);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    const user = await userService.updateUser(id, req.body);
    sendSuccess(res, 200, "User updated successfully", user);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id as string;
    await userService.deleteUser(id);
    sendSuccess(res, 200, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};
