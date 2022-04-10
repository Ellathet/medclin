import { Status } from '@prisma/client';
import prisma from '../../../../prisma/client';
import ISelectStatusPaginatedDTO from '../../../useCases/status/selectStatusPaginatedUseCase/selectStatusPaginatedDTO';
import IStatusRepository from '../IStatusRepository';

export default class PrismaSpecializationRepository
  implements IStatusRepository
{
  async getPaginated(parameters: ISelectStatusPaginatedDTO): Promise<Status[]> {
    const status = await prisma.status.findMany({
      skip: parameters.offset,
      take: parameters.limit,
    });

    return status;
  }
}
