import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import moment from 'moment';
import IUserRepository from '../../../repositories/user/IUserRepository';
import IHashService from '../../../services/hash/IHashService';
import ICreateUserDTO from './createUserDTO';

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashService')
    private hashService: IHashService
  ) {}

  async execute(user: ICreateUserDTO): Promise<User> {
    const createdUser = await this.userRepository.save({
      ...user,
      birthday: moment(user.birthday).toDate(),
      password: await this.hashService.encrypt(user.password),
    });

    return createdUser;
  }
}
