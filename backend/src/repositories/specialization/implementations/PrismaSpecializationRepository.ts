import { Specialization } from '@prisma/client';
import prisma from '../../../../prisma/client';
import ISelectSpecializationsPaginatedDTO from '../../../useCases/specialization/selectSpecializationsPaginatedUseCase/selectSpecializationsPaginatedDTO';
import ISpecializationRepository from '../ISpecializationRepository';

export default class PrismaSpecializationRepository
  implements ISpecializationRepository
{
  async getPaginated(
    parameters: ISelectSpecializationsPaginatedDTO
  ): Promise<Specialization[]> {
    const specializations = await prisma.specialization.findMany({
      skip: parameters.offset,
      take: parameters.limit,
    });

    return specializations;
  }
}
