import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';

@injectable()
export default class GetProfileUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<User | null> {
    const user = await this.userRepository.getById(userId);

    return user;
  }
}
