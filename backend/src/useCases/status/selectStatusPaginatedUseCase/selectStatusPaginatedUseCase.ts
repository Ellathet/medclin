import { Status } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IStatusRepository from '../../../repositories/status/IStatusRepository';
import ISelectStatusPaginatedDTO from './selectStatusPaginatedDTO';

@injectable()
export default class SelectSpecializationsPaginatedUseCase {
  constructor(
    @inject('StatusRepository')
    private statusRepository: IStatusRepository
  ) {}

  async execute(params: ISelectStatusPaginatedDTO): Promise<Status[]> {
    const { offset, limit } = params;

    const status = await this.statusRepository.getPaginated({
      offset: offset || 0,
      limit: limit || 10,
    });

    return status;
  }
}
