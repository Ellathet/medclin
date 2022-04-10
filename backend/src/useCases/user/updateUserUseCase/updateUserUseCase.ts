import moment from 'moment';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../../repositories/user/IUserRepository';
import IHashService from '../../../services/hash/IHashService';
import IUpdateUserDTO from './updateUserDTO';

@injectable()
export default class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashService')
    private hashService: IHashService
  ) {}

  async execute(id: string, user: IUpdateUserDTO) {
    if (!id) {
      throw new Error('You need send id to update a item');
    }

    const updatedUser = await this.userRepository.update(id, {
      ...user,
      birthday: moment(user.birthday).toDate(),
      password: await this.hashService.encrypt(user.password),
    });

    return updatedUser;
  }
}
