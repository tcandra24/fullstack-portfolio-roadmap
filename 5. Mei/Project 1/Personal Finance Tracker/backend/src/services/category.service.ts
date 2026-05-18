// src/services/category.service.ts
// ─────────────────────────────────────────────────────────────
// Category business logic layer.
//
// NOTE: Services contain all DB access via Prisma.
//       Controllers should NEVER import Prisma directly —
//       always go through a service.
// ─────────────────────────────────────────────────────────────

import prisma from "../config/prisma";
import { Category } from "@prisma/client";

export const getAllCategories = async (user_id: string): Promise<Category[]> => {
  return prisma.category.findMany({
    include: {
      user: true,
    },
    where: {
      user_id,
    },
    orderBy: { name: "asc" },
  });
};

export const getCategoryById = async (id: string, user_id: string): Promise<Category | null> => {
  return prisma.category.findUnique({ where: { id, user_id } });
};

export const createCategory = async (data: { user_id: string; name: string; type: "INCOME" | "EXPENSE"; color: string; icon: string }): Promise<Category> => {
  return prisma.category.create({ data });
};

export const updateCategory = async (id: string, user_id: string, data: Partial<{ name: string; type: "INCOME" | "EXPENSE"; color: string; icon: string }>): Promise<Category> => {
  return prisma.category.update({ where: { id, user_id }, data });
};

export const deleteCategory = async (id: string, user_id: string): Promise<Category> => {
  return prisma.category.delete({ where: { id, user_id } });
};
