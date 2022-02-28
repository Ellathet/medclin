import { Specialization, User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import ISpecializationRepository from '../../../repositories/specialization/ISpecializationRepository';
import ISelectSpecializationsPaginatedDTO from './selectSpecializationsPaginatedDTO';

@injectable()
export default class SelectSpecializationsPaginatedUseCase {
  constructor(
    @inject('SpecializationRepository')
    private specializationRepository: ISpecializationRepository
  ) {}

  async execute(
    params: ISelectSpecializationsPaginatedDTO
  ): Promise<Specialization[]> {
    const { offset, limit } = params;

    const specializations = await this.specializationRepository.getPaginated({
      offset: offset || 0,
      limit: limit || 10,
    });

    return specializations;
  }
}
