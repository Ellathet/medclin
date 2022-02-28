import { Specialization } from '@prisma/client';
import ISelectSpecializationsPaginatedDTO from '../../useCases/specialization/selectSpecializationsPaginatedUseCase/selectSpecializationsPaginatedDTO';

export default interface ISpecializationRepository {
  getPaginated(
    parameters: ISelectSpecializationsPaginatedDTO
  ): Promise<Specialization[]>;
}
