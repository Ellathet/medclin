import { User, Prisma } from '@prisma/client';
import ICreateUserDTO from '../../../useCases/user/createUserUseCase/createUserDTO';
import IUserRepository from '../IUserRepository';
import prisma from '../../../../prisma/client';
import selectUsersPaginatedDTO from '../../../useCases/user/selectUsersPaginatedUseCase/selectUsersPaginatedDTO';

export default class PrismaUserRepository implements IUserRepository {
  async save(user: ICreateUserDTO): Promise<User> {
    const newUser = await prisma.user.create({
      data: user,
    });

    return newUser;
  }

  async getById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        specialties: true,
      },
    });

    return user;
  }

  async getPaginated(parameters: selectUsersPaginatedDTO): Promise<User[]> {
    const users = await prisma.user.findMany({
      skip: parameters.offset,
      take: parameters.limit,
      include: {
        role: true,
        specialties: true,
      },
    });

    return users;
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const userUpToDate = await prisma.user.update({
      where: { id },
      data: user,
    });

    return userUpToDate;
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

  async getBy(params: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const where: Prisma.UserWhereUniqueInput[] = Object.entries(params).map(
      (p) => ({
        [p[0]]: p[1],
      })
    );

    const user = await prisma.user.findFirst({
      where: { OR: where },
      include: {
        role: true,
        specialties: true,
      },
    });

    return user;
  }
}
