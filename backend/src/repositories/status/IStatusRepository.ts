import { Status } from '@prisma/client';
import ISelectStatusPaginatedDTO from '../../useCases/status/selectStatusPaginatedUseCase/selectStatusPaginatedDTO';

export default interface IStatusRepository {
  getPaginated(parameters: ISelectStatusPaginatedDTO): Promise<Status[]>;
}
