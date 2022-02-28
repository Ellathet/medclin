import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';
import ISelectUserDTO from './selectUserDTO';

@injectable()
export default class SelectUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: ISelectUserDTO): Promise<User | null> {
    const selectedUser = await this.userRepository.getById(id);

    return selectedUser;
  }
}
