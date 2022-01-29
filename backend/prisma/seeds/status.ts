import prisma from '../client';

export default async function status() {
  const canceled = await prisma.status.create({
    data: {
      status: 'canceled',
      statusEnum: 3,
    },
  });

  const inProgress = await prisma.status.create({
    data: {
      status: 'in-progress',
      statusEnum: 2,
    },
  });

  const Finished = await prisma.status.create({
    data: {
      status: 'finished',
      statusEnum: 1,
    },
  });

  console.log({ canceled, inProgress, Finished });
}
