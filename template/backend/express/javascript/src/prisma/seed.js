// src/prisma/seed.js
// ─────────────────────────────────────────────────────────────
// Database seeder.
//
// NOTE: Run with:  npm run prisma:seed
//       Useful for populating dev/test databases with sample data.
//       skipDuplicates prevents errors if seed data already exists.
// ─────────────────────────────────────────────────────────────

import 'dotenv/config';
import prisma from '../config/prisma.js';

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob',   email: 'bob@example.com'   },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seeding complete');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
