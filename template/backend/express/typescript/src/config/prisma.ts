// src/config/prisma.ts
// ─────────────────────────────────────────────────────────────
// Prisma Client singleton.
//
// NOTE: We export a single shared instance to avoid creating
//       multiple DB connections (especially important in dev
//       with hot-reload via nodemon).
//
// Usage:
//   import prisma from '../config/prisma';
//   const users = await prisma.user.findMany();
// ─────────────────────────────────────────────────────────────

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
});

export default prisma;
