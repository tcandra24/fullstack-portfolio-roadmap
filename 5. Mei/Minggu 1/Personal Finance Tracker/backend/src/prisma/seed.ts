// src/prisma/seed.ts
// ─────────────────────────────────────────────────────────────
// Database seeder.
//
// NOTE: Run with:  npm run prisma:seed
//       Useful for populating dev/test databases with dummy data.
// ─────────────────────────────────────────────────────────────

import prisma from '../config/prisma';

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ],
    skipDuplicates: true, // NOTE: Prevents errors if seeds already exist
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
