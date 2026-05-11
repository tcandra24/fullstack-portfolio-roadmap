// src/services/user.service.js
// ─────────────────────────────────────────────────────────────
// User business logic layer.
//
// NOTE: All Prisma/DB calls live here.
//       Controllers should NEVER import Prisma directly —
//       always go through a service. This keeps controllers
//       thin and business logic testable in isolation.
// ─────────────────────────────────────────────────────────────

import prisma from '../config/prisma.js';

export const getAllUsers = async () => {
  return prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};

/**
 * @param {{ name: string, email: string }} data
 */
export const createUser = async (data) => {
  return prisma.user.create({ data });
};

/**
 * @param {number} id
 * @param {{ name?: string, email?: string }} data
 */
export const updateUser = async (id, data) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id } });
};
