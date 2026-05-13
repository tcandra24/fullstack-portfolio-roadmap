import prisma from "../config/prisma";
import { Category } from "@prisma/client";

export const getAllCategories = async (): Promise<Category[]> => {
  return prisma.category.findMany({ orderBy: { name: "asc" } });
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
  return prisma.category.findUnique({ where: { id } });
};

export const createCategory = async (data: { name: string; type: "INCOME" | "EXPENSE"; color: string; icon: string }): Promise<Category> => {
  return prisma.category.create({ data });
};

export const updateCategory = async (id: string, data: Partial<{ name: string; type: "INCOME" | "EXPENSE"; color: string; icon: string }>): Promise<Category> => {
  return prisma.category.update({ where: { id }, data });
};

export const deleteCategory = async (id: string): Promise<Category> => {
  return prisma.category.delete({ where: { id } });
};
