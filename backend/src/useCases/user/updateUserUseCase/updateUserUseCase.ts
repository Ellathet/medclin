import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';
import IUpdateUserDTO from './updateUserDTO';

@injectable()
export default class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, user: IUpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, user);

    return updatedUser;
  }
}
