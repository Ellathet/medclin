import prisma from '../client';
import roles from './roles';
import specialization from './specialization';
import status from './status';
import _type from './type';

async function main() {
  await roles();
  await status();
  await specialization();
  await _type();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
