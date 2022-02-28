import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';
import ISelectUsersPaginatedDTO from './selectUsersPaginatedDTO';

@injectable()
export default class SelectUsersPaginatedUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(params: ISelectUsersPaginatedDTO): Promise<User[]> {
    const { offset, limit } = params;

    const users = await this.userRepository.getPaginated({
      offset: offset || 0,
      limit: limit || 10,
    });

    return users;
  }
}
