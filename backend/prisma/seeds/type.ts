import prisma from '../client';

export default async function type() {
  const medic = await prisma.type.create({
    data: {
      type: 'medic',
      typeEnum: 2,
    },
  });

  const costumer = await prisma.type.create({
    data: {
      type: 'costumer',
      typeEnum: 1,
    },
  });

  console.log({ medic, costumer });
}
