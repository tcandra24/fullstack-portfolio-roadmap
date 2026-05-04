// src/services/user.service.ts
// ─────────────────────────────────────────────────────────────
// User business logic layer.
//
// NOTE: Services contain all DB access via Prisma.
//       Controllers should NEVER import Prisma directly —
//       always go through a service.
// ─────────────────────────────────────────────────────────────

import prisma from "../config/prisma";
import { User } from "@prisma/client";

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany({ orderBy: { created_at: "desc" } });
};

export const getUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: { name: string; email: string; password: string }): Promise<User> => {
  return prisma.user.create({ data });
};

export const updateUser = async (id: string, data: Partial<{ name: string; email: string }>): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: string): Promise<User> => {
  return prisma.user.delete({ where: { id } });
};
