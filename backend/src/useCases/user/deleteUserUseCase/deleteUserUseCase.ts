import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';
import DeleteUserDTO from './deleteUserDTO';

@injectable()
export default class DeleteUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: DeleteUserDTO): Promise<void> {
    await this.userRepository.delete(id);
  }
}
