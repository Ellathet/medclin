import prisma from '../client';

export default async function roles() {
  const medic = await prisma.role.create({
    data: {
      roleEnum: 1,
      role: 'medic',
    },
  });

  const patient = await prisma.role.create({
    data: {
      roleEnum: 2,
      role: 'patient',
    },
  });

  console.log({ medic, patient });
}
