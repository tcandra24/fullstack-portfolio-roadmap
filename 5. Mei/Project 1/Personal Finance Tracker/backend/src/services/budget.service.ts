import prisma from "../config/prisma";
import { Budget } from "@prisma/client";

export const getAllBudgets = async (id: string): Promise<Budget[]> => {
  return prisma.budget.findMany({
    include: {
      user: true,
      category: true,
    },
    where: {
      user_id: id,
    },
  });
};

export const getBudgetById = async (id: string, user_id: string): Promise<Budget | null> => {
  return prisma.budget.findUnique({ where: { id, user_id } });
};

export const createBudget = async (data: { user_id: string; category_id: string; amount: number; month: number; year: number }): Promise<Budget> => {
  return prisma.budget.create({ data });
};

export const updateBudget = async (id: string, user_id: string, data: Partial<{ user_id: string; category_id: string; amount: number; month: number; year: number }>): Promise<Budget> => {
  return prisma.budget.update({ where: { id, user_id }, data });
};

export const deleteBudget = async (id: string, user_id: string): Promise<Budget> => {
  return prisma.budget.delete({ where: { id, user_id } });
};
