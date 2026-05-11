// src/config/prisma.js
// ─────────────────────────────────────────────────────────────
// Prisma Client singleton.
//
// NOTE: We export a single shared instance to avoid creating
//       multiple DB connections — especially important in dev
//       with nodemon hot-reload, which can re-import modules
//       and accidentally spawn new connections.
//
// Usage:
//   import prisma from '../config/prisma.js';
//   const users = await prisma.user.findMany();
// ─────────────────────────────────────────────────────────────

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development'
    ? ['query', 'warn', 'error']
    : ['error'],
});

export default prisma;
