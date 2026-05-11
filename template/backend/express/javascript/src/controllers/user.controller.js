// src/controllers/user.controller.js
// ─────────────────────────────────────────────────────────────
// User HTTP request handlers.
//
// NOTE: Controllers only handle HTTP concerns (req/res/next).
//       All business logic and DB access lives in the service.
//       Always wrap async logic in try/catch and call next(err)
//       to forward errors to the global errorHandler.
// ─────────────────────────────────────────────────────────────

import * as userService from '../services/user.service.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    sendSuccess(res, 200, 'Users fetched successfully', users);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUserById(id);

    if (!user) {
      sendError(res, 404, 'User not found');
      return;
    }

    sendSuccess(res, 200, 'User fetched successfully', user);
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    sendSuccess(res, 201, 'User created successfully', user);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.updateUser(id, req.body);
    sendSuccess(res, 200, 'User updated successfully', user);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await userService.deleteUser(id);
    sendSuccess(res, 200, 'User deleted successfully');
  } catch (err) {
    next(err);
  }
};
